package com.bo.home;

import com.web.mvc.controller.BaseController;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@RestController
@PropertySource("classpath:config/apikey.properties")
public class HomeController extends BaseController {

    @Value("${api.key}")
    private String apiKey;

    @Value("${api.channelId}")
    private String channelId;

    @RequestMapping(value = "/{[path:[^\\.]*}")
    public String redirect() {
        return "forward:/index.html";
    }

    @GetMapping(value="/videos", produces = "application/json")
    public List<Map<String, String>> getVideos() {
        String searchUrl = String.format("https://www.googleapis.com/youtube/v3/search?key=%s&channelId=%s&part=snippet&type=video&order=date&maxResults=10", apiKey, channelId);

        List<Map<String, String>> finalVideos = new ArrayList<>();
        try {
            // API 호출
            URL url = new URL(searchUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            StringBuilder responseBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                responseBuilder.append(line);
            }
            reader.close();

            // JSON 파싱
            JSONObject jsonResponse = new JSONObject(responseBuilder.toString());
            JSONArray items = jsonResponse.getJSONArray("items");

            // 동영상 데이터를 리스트에 저장
            List<Map<String, String>> videos = new ArrayList<>();
            List<String> videoIdList = new ArrayList<>();

            for (int i = 0; i < items.length(); i++) {
                JSONObject item = items.getJSONObject(i);
                JSONObject snippet = item.getJSONObject("snippet");
                String videoId = item.getJSONObject("id").getString("videoId");

                Map<String, String> videoData = new HashMap<>();
                videoData.put("title", snippet.getString("title"));
                videoData.put("thumbnail", snippet.getJSONObject("thumbnails").getJSONObject("medium").getString("url"));
                videoData.put("videoId", item.getJSONObject("id").getString("videoId"));
                videos.add(videoData);
                videoIdList.add(videoId);
            }

            String joinIds = String.join(",", videoIdList);
            String detailUrl = String.format("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=%s&key=%s", joinIds, apiKey);
            HttpURLConnection detailConn = (HttpURLConnection) new URL(detailUrl).openConnection();
            detailConn.setRequestMethod("GET");

            BufferedReader detailReader = new BufferedReader(new InputStreamReader(detailConn.getInputStream(), "UTF-8"));
            StringBuilder detailBuilder = new StringBuilder();
            while ((line = detailReader.readLine()) != null) {
                detailBuilder.append(line);
            }
            detailReader.close();

            JSONObject detailResponse = new JSONObject(detailBuilder.toString());
            JSONArray detailItems = detailResponse.getJSONArray("items");

            Set<String> validVideoIds = new HashSet<>();
            for (int i = 0; i < detailItems.length(); i++) {
                JSONObject item = detailItems.getJSONObject(i);
                String videoId = item.getString("id");
                String duration = item.getJSONObject("contentDetails").getString("duration");

                if (parseDuration(duration) > 60) validVideoIds.add(videoId);
            }

            finalVideos = videos.stream().filter(v -> validVideoIds.contains(v.get("videoId"))).limit(3).collect(Collectors.toList());

        } catch (Exception e) {
            e.printStackTrace();
        }

        return finalVideos;
    }

    public static int parseDuration(String duration) {
        int minutes = 0, seconds = 0;
        Pattern pattern = Pattern.compile("PT(?:(\\d+)M)?(?:(\\d+)S)?");
        Matcher matcher = pattern.matcher(duration);
        if (matcher.matches()) {
            if (matcher.group(1) != null) minutes = Integer.parseInt(matcher.group(1));
            if (matcher.group(2) != null) seconds = Integer.parseInt(matcher.group(2));
        }
        return minutes * 60 + seconds;
    }
}