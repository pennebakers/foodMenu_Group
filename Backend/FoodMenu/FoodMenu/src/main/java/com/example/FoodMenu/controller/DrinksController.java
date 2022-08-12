package com.example.FoodMenu.controller;

import com.example.FoodMenu.model.Drinks;
import com.example.FoodMenu.repository.DrinksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class DrinksController {


    @Autowired
    private DrinksRepository repository;

    @GetMapping("/drinks")
    public List<Drinks> getAllFoodMenu() {
        return repository.findAll();
    }


    @PostMapping("/drinks")
    public Drinks createDrinks(@RequestBody Drinks one){
        return repository.save(one);
    }


    @PutMapping("/drinks/id/{id}")
    public Drinks updateDrinks(@RequestBody Drinks input, @PathVariable Long id){
        Drinks  drinks = repository.findById(id).get();
        drinks.setItem(input.getItem());
        drinks.setDescription(input.getDescription());
        drinks .setPrice(input.getPrice());
        return repository.save(drinks);
    }
    @DeleteMapping("/drinks/id/{id}")
    public void deleteDrinks(@PathVariable Long id){
        repository.deleteById(id);
    }



}
