import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  addUser(data: any): Observable<any> {
  return this.http.post('http://localhost:3000/users', data);  
}

  getAllUsers(): Observable<any> {
  return this.http.get(this.apiUrl); // http://localhost:3000/users
}

updateUser(id: string, updatedData: any) {
  return this.http.put(`http://localhost:3000/users/${id}`, updatedData);
}

checkUserByEmail(email: string) {
  return this.http.get<any[]>(`http://localhost:3000/users?email=${email}`);
}


}