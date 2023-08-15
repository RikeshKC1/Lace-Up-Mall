package com.example.database.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CartController {


    @CrossOrigin("http://localhost:3000/")
    @PostMapping("/addCart")
    public void insertCart(){

    }

}
