package com.bo.intro;

import com.web.mvc.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("intro")
public class IntroController extends BaseController {

    @GetMapping(value="index")
    public String index(){
        return baseUrl + "/index";
    }
}
