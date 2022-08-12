package com.example.FoodMenu.controller;

import com.example.FoodMenu.model.Drinks;
import com.example.FoodMenu.model.FoodMenu;
import com.example.FoodMenu.repository.FoodMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class FoodMenuController {

        @Autowired
        private FoodMenuRepository repository;

        @GetMapping("/foodmenu")
        public List<FoodMenu> getAllFoodMenu() {

                return repository.findAll();
        }

        @GetMapping("/foodmenu/{id}")
        public FoodMenu getFoodById(@PathVariable Long id) {
              return repository.findById(id).get();
        }

        @PostMapping("/foodmenu")
        public FoodMenu createFoodMenu(@RequestBody FoodMenu one){
                return repository.save(one);
        }


        @PutMapping("/foodmenu/{id}")
        public FoodMenu updateFoodMenu(@RequestBody FoodMenu input, @PathVariable Long id){
                FoodMenu  foodmenu = repository.findById(id).get();
                foodmenu.setItem(input.getItem());
                foodmenu.setImage(input.getImage());
                foodmenu.setDescription(input.getDescription());
                foodmenu .setPrice(input.getPrice());
                return repository.save(foodmenu);
        }
        @DeleteMapping("/foodmenu/{id}")
        public void deleteFoodMenu(@PathVariable Long id){
                repository.deleteById(id);
        }

}
