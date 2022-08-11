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

  foods!: Food[];

  constructor(private foodService: FoodService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFoodsList();
  }

  private getFoodsList(){
    this.foodService.getFoodsList().subscribe(data => {
      console.log(data);
      this.foods = data;
    })
  }


}