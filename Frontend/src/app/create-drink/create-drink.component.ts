import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';

@Component({
  selector: 'app-create-drink',
  templateUrl: './create-drink.component.html',
  styleUrls: ['./create-drink.component.css']
})
export class CreateDrinkComponent implements OnInit {

  constructor(private drinkService: DrinkService,
		private router: Router) {}

	food: Food = new Food();
  ngOnInit(): void {
  this.saveDrink();
}

private saveDrink(){
  this.drinkService.goToDrinkList().subscribe((data: any) => {
    this.drinkService = data;
  });
}

drinkDetails(id: number){
  this.router.navigate(['drink-details', id]);
}

updatedrink(id: number){
  this.router.navigate(['update-drink', id]);
}

deletedrink(id: number){
  this.drinkService.deletedrink(id).subscribe( (data: any) => {
    console.log(data);
    this.saveDrink();
  })
}
}
