import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { LearningComponent } from "./learning/learning.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "learning", component: LearningComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

// ng generate component learning
// ng serve --open