import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {



  tasks: Task[] = [
    { id: 1, title: "Tarea1", pending: false },
    { id: 2, title: "Tarea2", pending: true },
    { id: 3, title: "Tarea3", pending: false },
    { id: 4, title: "Tarea4", pending: true }
  ];
  constructor(private logger : LogService) { }

  ngOnInit(): void {
  }

  removeTask(task) {
    this.logger.log(`[TasksList] removeTask(${task.id})`);

    let index = this.tasks.findIndex(t => t.id == task.id);

    if (index != -1)
      this.tasks.splice(index, 1);
  }
  addTask() {
    this.logger.log('[TaskList] addTask()');
    let title = prompt("Enter the task title");
    this.tasks.push({ id: Date.now(), title: title, pending: true });
  }
  // complete(task: Task) {
  //   this.tasks.find(p => task.id == p.id).pending = false;
  // }

}
