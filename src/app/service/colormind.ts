import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ColorSchemeResponse {
  result: number[][];
}

@Injectable({
  providedIn: 'root'
})
export class Colormind {
  private apiUrl = 'http://colormind.io/api/';
  private baseurl = 'http://colormind.io/';

  constructor(private http: HttpClient) { }

  getAvailableModels(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseurl}/list`);
  }

  getARandomColorScheme(model: string = 'default'): Observable<ColorSchemeResponse> {
    const data = { 
      model: model
     };
    return this.http.post<ColorSchemeResponse>(this.apiUrl, data);
  }

  getPalettewithInput(input: (number[] | 'N')[], model: string = 'default'): Observable<ColorSchemeResponse> {
    const data = { 
      model: model, 
      input: input
     };
    return this.http.post<ColorSchemeResponse>(this.apiUrl, data);
  }
}
