package com.example.FoodMenu.model;

import javax.persistence.*;
@Entity
@Table(name = "food_menu")
    public class FoodMenu {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        @Column
        private String item;
        @Column
        private String description;
        @Column
        private double price;

    public FoodMenu() {
    }


    public FoodMenu(Long id, String item, String description, double price) {
        this.id = id;
        this.item = item;
        this.description = description;
        this.price = price;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
