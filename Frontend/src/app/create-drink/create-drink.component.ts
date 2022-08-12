import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';
import { DrinkService } from '../drink-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-drink',
  templateUrl: './create-drink.component.html',
  styleUrls: ['./create-drink.component.css']
})
export class CreateDrinkComponent implements OnInit {

  drink: Drink = new Drink();
  constructor(private drinkService: DrinkService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.drinkService.createDrink(this.drink).subscribe( data =>{
      console.log(data);
      this.goToDrinkList();
    },
    error => console.log(error));
  }

  goToDrinkList(){
    this.router.navigate(['/admin-page']);
  }
  
  onSubmit(){
    console.log(this.drink);
    this.saveEmployee();
  }
}