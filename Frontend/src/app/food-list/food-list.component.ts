import { Component, OnInit } from '@angular/core';
import { Food } from '../food'
import { FoodService } from '../food-service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods!: any[];

  constructor(private foodService: FoodService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFoods();
  }

  private getFoods() {
    this.foodService.getFoodsList().subscribe(data => {
      this.foods = data;
    });
  }

  foodDetails(id: number){
    this.router.navigate(['food-details', id]);
  }

  updateFood(id: number) {
    this.router.navigate(['update-food', id]);
  }

  deleteFood(id: number){
    this.foodService.deleteFood(id).subscribe( data => {
      console.log(data);
      this.getFoods();
    })
  }

}