import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './product/edit.component';

import { SearchPipe } from './search.pipe';
import { ProductDirective } from './product/product.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    ProductComponent,
    EditComponent,
    SearchPipe,
    ProductDirective
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaginatorModule,
    HttpModule,
    NgxSpinnerModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }