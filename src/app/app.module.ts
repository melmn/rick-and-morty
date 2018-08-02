import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, CharacterDetailComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
