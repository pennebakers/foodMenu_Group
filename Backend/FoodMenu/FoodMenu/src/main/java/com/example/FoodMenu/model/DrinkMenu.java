package com.example.FoodMenu.model;

import javax.persistence.*;

@Entity
@Table(name = "drink_menu")
public class DrinkMenu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String item;
    @Column
    private String image;
    @Column
    private String description;
    @Column
    private double price;

    public DrinkMenu() {
    }

    public DrinkMenu(Long id, String item, String image, String description, double price) {
        this.id = id;
        this.item = item;
        this.image = image;
        this.description = description;
        this.price = price;

    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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
