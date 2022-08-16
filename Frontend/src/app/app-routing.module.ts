import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CartComponent } from './cart/cart.component';
import { CreateDrinkComponent } from './create-drink/create-drink.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { HomeComponent } from './home/home.component';

import { MenuComponent } from './menu/menu.component';
import { UpdateDrinkComponent } from './update-drink/update-drink.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

const routes: Routes = [
  {path: 'food-list', component: MenuComponent, 
    children: [{path:'foodMenu', component: FoodListComponent}]},
  {path: 'admin-page', component: AdminMenuComponent},
  {path: 'update-drink/:id', component: UpdateDrinkComponent,
   children: [{path:'update-food/:id', component: FoodListComponent}]},
  {path: 'update-food/:id', component: UpdateFoodComponent},
  {path: 'drinks', component: AdminMenuComponent},
  {path: 'foods', component: AdminMenuComponent},
  {path: 'admin-page/create-drink', component: CreateDrinkComponent},
  {path: 'admin-page/create-food', component: CreateFoodComponent},
  {path: 'add-cart', component: CartComponent},
  {path: 'add-cart/food-list', component: MenuComponent},
  {path: '', component: HomeComponent}
  //{path:'', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
