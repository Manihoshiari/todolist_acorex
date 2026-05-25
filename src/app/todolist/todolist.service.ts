import { inject, Injectable, signal } from '@angular/core';
import { assignees, newTask } from './todolist.model';

@Injectable({ providedIn: 'root' })
export class todolistService {
  tasks!: newTask;
  getdata() {
    return this.datasource;
  }
  saveitem(tasks: newTask[]) {
    localStorage.setItem('task', JSON.stringify(tasks));
  }
  datasource:assignees[] = [
    {
      id: '1',
      value: 'mani',
      img: 'Rectangle 2 (1).svg',
    },
    {
      id: '2',
      value: 'ali',
      img: 'Rectangle 4 (1).svg',
    },
  ];
}
