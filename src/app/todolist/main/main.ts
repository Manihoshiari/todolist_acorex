import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from '../header/header';
import { Addnewtask } from '../addnewtask/addnewtask';
import { Form } from '../form/form';
import { assignees, newTask } from '../todolist.model';
import { Task } from '../task/task';
import {
  AXDragDirective,
  AXDropListDirective,
  AXDropListDroppedEvent,
  moveItemInArray,
} from '@acorex/cdk/drag-drop';
import { todolistService } from '../todolist.service';

@Component({
  selector: 'app-main',
  imports: [Header, Addnewtask, Form, Task, AXDropListDirective, AXDragDirective],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit {
  tasks = signal<newTask[]>([]);
  visible = signal<boolean>(false);
  find = signal<assignees | undefined>(undefined);
  allTasks = signal<newTask[]>([]);
  saveService = inject(todolistService);
  openForm() {
    this.visible.set(true);
  }
  closeForm() {
    this.visible.set(false);
  }

  formValue(formTasks: newTask) {
    this.find.set(this.saveService.datasource.find((v) => v.id === formTasks.assignees));
    formTasks.assignees=this.find()?.img
    this.tasks.update((old) => [ formTasks,...old]);
    this.visible.set(false);
    this.saveService.saveitem(this.tasks());

    this.allTasks.set([...this.tasks()]);
  }
  ngOnInit(): void {
    const task = localStorage.getItem('task');
    if (task) {
      this.tasks.set(JSON.parse(task));
    }
    this.allTasks.set([...this.tasks()]);
  }
  droplist(e: AXDropListDroppedEvent) {
    const currentArray = this.allTasks();
    moveItemInArray(currentArray, e.previousIndex, e.currentIndex);
  }

  search(e: string) {
    const filteredtask = this.tasks().filter((v) =>
      v.taskname?.toLocaleLowerCase().includes(e.toLocaleLowerCase()),
    );
    this.allTasks.set([...filteredtask]);
  }
  deletetask(e: string) {
    this.tasks.set(this.tasks().filter((v) => v.id !== e));
    this.allTasks.set([...this.tasks()]);
    this.saveService.saveitem(this.tasks());
  }
}
