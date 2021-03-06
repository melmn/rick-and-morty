import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchResult } from "../interfaces/search-results";

const characterUrl = "https://rickandmortyapi.com/api/character";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getCharacters(page?: number): Observable<SearchResult> {
    if (page) {
      return this.http.get<SearchResult>(characterUrl + `?page=${page}`);
    } else {
      return this.http.get<SearchResult>(characterUrl);
    }
  }

  search(params: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(characterUrl + params);
  }

  getDifferentPage(fullPageUrl: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(fullPageUrl);
  }
}
