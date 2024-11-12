//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.web.mvc.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;

public class BaseController {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());
    protected String baseUrl;

    public BaseController() {
        RequestMapping rm = (RequestMapping)this.getClass().getAnnotation(RequestMapping.class);
        if (rm != null) {
            this.baseUrl = rm.value()[0];
        }
    }
}
