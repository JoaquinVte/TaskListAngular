import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../log.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input()
  task: Task

  @Output()
  deleted = new EventEmitter();

  @Output()
  realized = new EventEmitter();

  constructor(private logger : LogService) { }
  
  delete() {
    this.logger.log('[taskdetails] deleted');
    this.deleted.emit(this.task);
  }
  completeTask() {
    this.logger.log(`[TaskDetails] completeTask(${this.task.id})`);
    this.task.pending = false;
    // this.realized.emit(this.task);
  }

  ngOnInit(): void {
  }

}
