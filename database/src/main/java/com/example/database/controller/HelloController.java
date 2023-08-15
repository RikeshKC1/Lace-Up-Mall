package com.example.database.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/home")
    public String home() {
        return "index";
    }

    @GetMapping("/mysignup")
    public String signup() {
        return "signup";
    }


}
