import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { BookService } from './service/book-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BookService],
  bootstrap: [BookComponent]
})
export class AppModule { }
