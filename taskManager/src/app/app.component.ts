import { Component } from '@angular/core';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mis tareas';

  constructor(private taskService: TaskService) { }

  taskId: String = '';
  tasks: any = [];

  ngOnInit() {
    console.log('Obteniendo tareas...')
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
      this.tasks = this.tasks.body.tasks;
      console.log(this.tasks);
    });
  }

  newTask = {
    title: '',
    description: ''
  };
  createTask() {
    this.taskService.createTask(this.newTask.title, this.newTask.description).subscribe(data => { 
      console.log(data);
      console.log('Creando tarea...');
      this.reloadPage();
    });
  }

  deleteTask(taskId: String) {
    this.taskId = taskId;
    this.taskService.deleteTask(this.taskId).subscribe(
      res => {
        console.log(res);
        this.reloadPage();
      }
    );
  }

  updateTask(taskId: String, done: Boolean) {
    const newDone = !done;
    this.taskId = taskId;
    this.taskService.updateTask(this.taskId, newDone);
    console.log('Se actualizo la tarea...');
  }

  reloadPage() {
    window.location.reload();
  }
}
