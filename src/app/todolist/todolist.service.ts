import { inject, Injectable, signal } from '@angular/core';
import { newTask } from './todolist.model';



@Injectable({ providedIn: 'root' })
export class todolistService {
    getdata(){
        return this.datasource
    }
datasource=[{
    id:'1',
    value:'mani'
},
{
    id:'2',
    value:'ali'
}]
}