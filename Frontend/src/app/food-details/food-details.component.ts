
import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food-service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  id!: number
  food!: Food
  constructor(private route: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.food = new Food();
    this.foodService.getFoodById(this.id).subscribe( data => {
      this.food = data;
    });
  }

}