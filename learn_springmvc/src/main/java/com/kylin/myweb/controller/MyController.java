package com.kylin.myweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mvc")
public class MyController {
    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }
}
