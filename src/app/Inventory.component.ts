import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
   selector: 'my-app',
   template: 'Inventory '
    + '<a class = "button" (Click) = "onBack()">Back to Products</a>'
})

export class AppInventory  {
   constructor(private _route: Router){}

   onBack(): void {
      this._route.navigate(['/Product']);
   }
}