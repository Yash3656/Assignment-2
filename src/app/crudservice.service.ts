import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http : HttpClient) { }

  getProjects():Observable<any>{
    return this.http.get('http://localhost:3002/projects');
  }

  updateProjects(project:any):Observable<any>{
    let url = `${"http://localhost:3002/projects"}/${project.id}`;
    return this.http.put<any>(url,{

      id:project.id,
      name:project.name,
      age:project.age,
      description : project.description
    });
  }

  addProject(project:any):Observable<any>{
    return this.http.post<any>('http://localhost:3002/projects',project);
  }
  
  deleteProject(project:any):Observable<any>{
    let url = `${"http://localhost:3002/projects"}/${project.id}`;
    return this.http.delete<any>(url);
  }

  getProject_id(id:any):Observable<any>{
    let url = `${"http://localhost:3002/projects"}/${id}`;
    return this.http.get(url);
  }
}
