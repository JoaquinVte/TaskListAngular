import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [];

  constructor() { }

  findAllTasks(): Task[] {
    return this.tasks;
  }
  findTaskById(id: number): Task {
    return this.tasks.find(t => t.id == id);
  }
  addTask(t: Task): void {
    t.id=Date.now();
    this.tasks.push(t);
  }
  // updateTask(t: Task): void {
  // }  
  removeTask(id: number): void {
    let index = this.tasks.findIndex(t => t.id == id);
    if (index != -1) this.tasks.splice(index, 1);
  }
}
