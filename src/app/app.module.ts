import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationComponent } from "./navigation/navigation.component";
import { SearchComponent } from "./search/search.component";
import { CurrentPagePipe } from "./pipes/current-page.pipe";
import { HomeComponent } from "./home/home.component";
import { CharacterCardComponent } from './character-card/character-card.component';
import { LearningComponent } from './learning/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavigationComponent,
    CurrentPagePipe,
    CharacterCardComponent,
    LearningComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
