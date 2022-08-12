import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink'
import { DrinkService } from '../drink-service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-drink',
  templateUrl: './admin-drink.component.html',
  styleUrls: ['./admin-drink.component.css']
})
export class AdminDrinkComponent implements OnInit {

  drinks!: any[];

  constructor(private drinkService: DrinkService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDrinks();
  }

  private getDrinks() {
    this.drinkService.getDrinksList().subscribe(data => {
      this.drinks = data;
    });
  }

  drinkDetails(id: number){
    this.router.navigate(['drink-details', id]);
  }

  updateDrink(id: number) {
    this.router.navigate(['update-drink', id]);
  }

  deleteDrink(id: number){
    this.drinkService.deleteDrink(id).subscribe( data => {
      console.log(data);
      this.getDrinks();
    })
  }

}