package com.bo.home;

import com.web.mvc.controller.BaseController;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/")
@PropertySource("classpath:/config/apikey.properties")
public class HomeController extends BaseController {

    @Value("${api.key}")
    private String apiKey;

    @Value("${api.channelId}")
    private String channelId;

    @GetMapping(value="")
    public String index(Model model) {
        String searchUrl = String.format("https://www.googleapis.com/youtube/v3/search?key=%s&channelId=%s&part=snippet&type=video&order=date&maxResults=3",apiKey, channelId);

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
            for (int i = 0; i < items.length(); i++) {
                JSONObject item = items.getJSONObject(i);
                JSONObject snippet = item.getJSONObject("snippet");

                Map<String, String> videoData = new HashMap<>();
                videoData.put("title", snippet.getString("title"));
                videoData.put("thumbnail", snippet.getJSONObject("thumbnails").getJSONObject("medium").getString("url"));
                videoData.put("videoId", item.getJSONObject("id").getString("videoId"));
                videos.add(videoData);
            }

            // JSP에 데이터 전달
            model.addAttribute("videos", videos);

        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("error", "Failed to load YouTube videos.");
        }

        return "index";
    }

    private static boolean isLongerThan60Seconds(String duration) {
        // Convert ISO 8601 duration (e.g., PT1M30S) to seconds
        int minutes = 0, seconds = 0;
        if (duration.contains("M")) {
            minutes = Integer.parseInt(duration.substring(duration.indexOf("PT") + 2, duration.indexOf("M")));
        }
        if (duration.contains("S")) {
            seconds = Integer.parseInt(duration.substring(duration.indexOf("M") + 1, duration.indexOf("S")));
        }
        return (minutes * 60 + seconds) > 60;
    }
}