import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink-service';
import { Drink } from '../drink';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-drink',
  templateUrl: './update-drink.component.html',
  styleUrls: ['./update-drink.component.css']
})
export class UpdateDrinkComponent implements OnInit {

  id!: number;
  drink: Drink = new Drink();
  constructor(private drinkService: DrinkService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.drinkService.getDrinkById(this.id).subscribe(data => {
      this.drink = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.drinkService.updateDrink(this.id, this.drink).subscribe( data =>{
      this.goToDrinkList();
    }
    , error => console.log(error));
  }

  goToDrinkList(){
    this.router.navigate(['/drinks']);
  }
}