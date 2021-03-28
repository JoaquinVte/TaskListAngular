import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private logger: LogService, public tasks: TasksService) { }

  ngOnInit(): void {
  }

  removeTask(task: Task) {
    this.logger.log(`[TasksList] removeTask(${task.id})`);

    this.tasks.removeTask(task.id);
  }
  addTask() {
    this.logger.log('[TaskList] addTask()');
    let title = prompt("Enter the task title");

    this.tasks.addTask({ title: title, pending: true });
  }
  // complete(task: Task) {
  //   this.tasks.find(p => task.id == p.id).pending = false;
  // }

}
