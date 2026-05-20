import { Component, input } from '@angular/core';
import { newTask } from '../todolist.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  tasks=input.required<newTask>()

}
