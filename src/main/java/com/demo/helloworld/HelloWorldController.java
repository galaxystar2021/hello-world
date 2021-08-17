package com.demo.helloworld;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @RequestMapping
    public String helloWorld() {
        return "Hello World from Turbo House";
    }

    @RequestMapping("/more")
    public String helloWorld2() {
        return "Hello World from Turbo House";
    }
}
