package com.bo.home;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.web.mvc.controller.BaseController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping(value = "/")
    public String redirect() {
        return "forward:/index.html";
    }

    @GetMapping(value="/videos", produces = "application/json")
    public List<Map<String, String>> getVideos() {
        String searchUrl = String.format("https://www.googleapis.com/youtube/v3/search?key=%s&channelId=%s&part=snippet&type=video&order=date&maxResults=10", apiKey, channelId);

        List<Map<String, String>> finalVideos = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // API 호출
            HttpURLConnection conn = (HttpURLConnection) new URL(searchUrl).openConnection();
            conn.setRequestMethod("GET");

            JsonNode jsonRes = objectMapper.readTree(conn.getInputStream());
            JsonNode items = jsonRes.get("items");

            // 동영상 데이터를 리스트에 저장
            List<Map<String, String>> videos = new ArrayList<>();
            List<String> videoIdList = new ArrayList<>();

            for (JsonNode item : items) {
                JsonNode snippet = item.get("snippet");
                String videoId = item.get("id").get("videoId").asText();

                Map<String, String> videoData = new HashMap<>();
                videoData.put("title", snippet.get("title").asText());
                videoData.put("thumbnail", snippet.get("thumbnails").get("medium").get("url").asText());
                videoData.put("videoId", videoId);

                videos.add(videoData);
                videoIdList.add(videoId);
            }

            String joinIds = String.join(",", videoIdList);
            String detailUrl = String.format("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=%s&key=%s", joinIds, apiKey);

            HttpURLConnection detailConn = (HttpURLConnection) new URL(detailUrl).openConnection();
            detailConn.setRequestMethod("GET");

            JsonNode detailRes = objectMapper.readTree(detailConn.getInputStream());
            JsonNode detailItems = detailRes.get("items");

            Set<String> validVideoIds = new HashSet<>();
            for (JsonNode item : detailItems) {
                String videoId = item.get("id").asText();
                String duration = item.get("contentDetails").get("duration").asText();

                if (parseDuration(duration) > 60) {
                    validVideoIds.add(videoId);
                }
            }

            finalVideos = videos.stream()
                    .filter(v -> validVideoIds.contains(v.get("videoId")))
                    .limit(3)
                    .collect(Collectors.toList());

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