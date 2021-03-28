import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LogService } from './log.service';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskDetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(
      [
        { path: "tasks", component: TasksListComponent },
        { path: "test/:msg", component: TestComponent },
        { path: "tasks/:id", component: TaskDetailsComponent },
        { path: "", redirectTo: "tasks", pathMatch: "full" },
        { path: "**", redirectTo: "/tasks" }
      ]
    )
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
