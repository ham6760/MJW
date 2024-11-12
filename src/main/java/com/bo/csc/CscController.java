package com.bo.csc;

import com.web.mvc.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/csc")
public class CscController {

    @GetMapping(value="/index")
    public String index(){
        return "index";
    }
}
