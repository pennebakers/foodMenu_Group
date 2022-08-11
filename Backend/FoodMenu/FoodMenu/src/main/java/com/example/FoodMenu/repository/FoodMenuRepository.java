package com.example.FoodMenu.repository;

import com.example.FoodMenu.model.FoodMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodMenuRepository extends JpaRepository<FoodMenu,Long> {
}
