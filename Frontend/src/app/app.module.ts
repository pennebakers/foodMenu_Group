import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MenuComponent } from './menu/menu.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { FormsModule } from '@angular/forms';
import { UpdateDrinkComponent } from './update-drink/update-drink.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminFoodComponent } from './admin-food/admin-food.component';
import { AdminDrinkComponent } from './admin-drink/admin-drink.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { CreateDrinkComponent } from './create-drink/create-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FoodListComponent,
    DrinkListComponent,
    CreateFoodComponent,
    CreateDrinkComponent,
    UpdateDrinkComponent,
    UpdateFoodComponent,
    AdminMenuComponent,
    AdminFoodComponent,
    AdminDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
