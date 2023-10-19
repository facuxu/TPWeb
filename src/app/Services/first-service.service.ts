import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  
  constructor(private http: HttpClient) { }
  private url="https://b7b9-181-231-122-56.ngrok-free.app/"
  
  getById(id: number): Observable <any>{
    return this.http.get(this.url +'/' + id)
  }


getAll(): Observable<any>{
  return this.http.get(this.url + '/getAll')
}

save(Student: any): Observable<any> {
  return this.http.post(this.url, Student)
}

update (id: number, student: any): Observable<any> {
  return this.http.post(this.url + "/" + id + "/update", student)
}

delete (id: number, Student: any): Observable<any>{
  return this.http.post(this.url + "/" + id + "delete", null)
}

}
