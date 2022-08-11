import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent, 
    children: [{path:'foodMenu', component: FoodListComponent}]}
  //{path: 'foodMenu', component: FoodListComponent},
  //{path: 'drinkMenu', component: DrinkListComponent}
  //{path:'', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
