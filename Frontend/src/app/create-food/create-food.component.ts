import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

  food: Food = new Food();
  constructor(private foodService: FoodService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.foodService.createFood(this.food).subscribe( data =>{
      console.log(data);
      this.goToFoodList();
    },
    error => console.log(error));
  }

  goToFoodList(){
    this.router.navigate(['/admin-page']);
  }
  
  onSubmit(){
    console.log(this.food);
    this.saveEmployee();
  }
}