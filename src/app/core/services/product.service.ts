import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

getAllProducts(key: any): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${key}`);
}

  getProductById(type: string, id: any) {
    return this.http.get<any>(`${this.apiUrl}/${type}`).pipe(
      map(res => res.items.find((item: any) => item.id == id))
    ).toPromise()
  }

  
  private apiUrl2="http://localhost:3000/medicine"

  getMedicineProducts():Observable<any>{
    return this.http.get<any>(this.apiUrl2);
  }

  getmergedata(category: any[]): Observable<any[]> {
    const requests = category.map(cat => this.http.get<any[]>(`${this.apiUrl}/${cat}`));
    return forkJoin(requests).pipe(
      map(results => results.flat())
    );
  }
}
