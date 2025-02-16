import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { provideRouter, RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Провайдер маршрутов
  ],
}).catch((err) => console.error(err));

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    MainPageComponent, // Импорт standalone-компонентов
    ProductPageComponent,
  ],
  providers: []
  // bootstrap: [AppComponent],
  
})
export class AppModule {}
