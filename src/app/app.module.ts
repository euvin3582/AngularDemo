import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppProduct } from './product.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';
import { AppInventory } from './Inventory.component';
import { PageNotFoundComponent } from './NotFound.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'Product', component: AppProduct },
  { path: 'Inventory', component: AppInventory },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,ProductFormComponent,AppProduct,
    AppInventory,PageNotFoundComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
