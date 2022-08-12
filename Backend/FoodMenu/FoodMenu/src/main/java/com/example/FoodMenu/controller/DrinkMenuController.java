package com.example.FoodMenu.controller;

import com.example.FoodMenu.model.DrinkMenu;
import com.example.FoodMenu.repository.DrinkMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class DrinkMenuController {

    @Autowired
    private DrinkMenuRepository repository;

    @GetMapping("/drinks")
    public List<DrinkMenu> getAllFoodMenu() {
        return repository.findAll();
    }

    @GetMapping("/drinks/{id}")
    public DrinkMenu getDrinkById(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PostMapping("/drinks")
    public DrinkMenu createDrinks(@RequestBody DrinkMenu one){
        return repository.save(one);
    }

    @PutMapping("/drinks/{id}")
    public DrinkMenu updateDrinks(@RequestBody DrinkMenu input, @PathVariable Long id){
        DrinkMenu  drinks = repository.findById(id).get();
        drinks.setItem(input.getItem());
        drinks.setDescription(input.getDescription());
        drinks.setImage(input.getImage());
        drinks .setPrice(input.getPrice());
        return repository.save(drinks);
    }
    @DeleteMapping("/drinks/{id}")
    public void deleteDrinks(@PathVariable Long id){
        repository.deleteById(id);
    }



}
