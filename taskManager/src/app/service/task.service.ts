import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) { }
  
  // Funcion para crear una tarea
  public createTask(title: String, description: String){
    const body = {
      title: title,
      description: description
    };
    return this.http.post(`https://b8ynmhbtul.execute-api.us-east-1.amazonaws.com/task`, body);
  }

  // Funcion para obtener todas las tareas
  public getTasks(){
    return this.http.get(`https://b8ynmhbtul.execute-api.us-east-1.amazonaws.com/task`);
  }

  // Funcion para obtener una tarea por id
  public getTask(id: String){
    return this.http.get(`https://b8ynmhbtul.execute-api.us-east-1.amazonaws.com/task/${id}`);
  }

  // Funcion para actualizar una tarea
  public updateTask(id: String, done: Boolean){
    const body = {
      done: done
    };
    this.http.put(`https://b8ynmhbtul.execute-api.us-east-1.amazonaws.com/task/${id}`, body).subscribe(data => { });
  }

  // Funcion para eliminar una tarea
  public deleteTask(id: String){
    return this.http.delete(`https://b8ynmhbtul.execute-api.us-east-1.amazonaws.com/task/${id}`);
  }

}
