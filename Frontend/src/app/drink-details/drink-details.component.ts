
import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../drink-service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {

  id!: number
  drink!: Drink
  constructor(private route: ActivatedRoute, private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.drink = new Drink();
    this.drinkService.getDrinkById(this.id).subscribe( data => {
      this.drink = data;
    });
  }

}