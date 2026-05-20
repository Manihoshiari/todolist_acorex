import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Addnewtask } from "../addnewtask/addnewtask";
import { Form } from "../form/form";
import { newTask } from '../todolist.model';
import { Task } from "../task/task";

@Component({
  selector: 'app-main',
  imports: [Header, Addnewtask, Form, Task],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  tasks:newTask[]=[]
  visible:boolean=false
  openForm(){
    this.visible=true
  }
  closeForm(){
    this.visible=false
  }
  formValue(formTasks:newTask){
    this.tasks.unshift({
      taskname:formTasks.taskname,
      describion:formTasks.describion,
      date:formTasks.date,
      assignees:formTasks.assignees,
      id: new Date().getTime().toString(),
      taskstats: 'In Progress',
      pririty: formTasks.pririty,
      flag: false
    })
    this.visible=false

  }
}
