import { Component, DestroyRef, inject, input, OnInit, output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, subscribeOn } from 'rxjs';
import { newTask } from '../todolist.model';
import { FormsModule } from '@angular/forms';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorIconComponent } from "@acorex/components/decorators";
import { AXValueChangedEvent } from '@acorex/cdk/common';
@Component({
  selector: 'app-header',
  imports: [FormsModule, AXTextBoxComponent, AXButtonComponent, AXDecoratorIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{
  searchsub=new Subject<string>()
  searchvalue=output<string>()
  open=output()
  tasks=input.required<newTask[]>()
  visible=input.required()
  openform(){
    this.open.emit()
  }
  ngOnInit(): void {
    this.searchsub.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((v)=>{
      this.emitsearch(v)
    })
  }
  emitsearch(value:string){
    this.searchvalue.emit(value)
  }
  search(e:AXValueChangedEvent){
this.searchsub.next(e.value)

  }
}
