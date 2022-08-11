package com.example.FoodMenu.controller;

import com.example.FoodMenu.model.FoodMenu;
import com.example.FoodMenu.repository.FoodMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class FoodMenuController {

        @Autowired
        private FoodMenuRepository foodMenuRepository;

        @GetMapping("/foodmenu")
    public List<FoodMenu>getAllFoodMenu() {
            return foodMenuRepository.findAll();

        }
}