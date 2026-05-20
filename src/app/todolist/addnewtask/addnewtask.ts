import { Component, EventEmitter, Output, output } from '@angular/core';
import { AXButtonComponent } from "@acorex/components/button";
import { AXDecoratorGenericComponent } from "@acorex/components/decorators";

@Component({
  selector: 'app-addnewtask',
  imports: [AXButtonComponent, AXDecoratorGenericComponent],
  templateUrl: './addnewtask.html',
  styleUrl: './addnewtask.css',
})
export class Addnewtask {
 
  @Output() openForm=new EventEmitter()
  add(){

  }
  create(){
    this.openForm.emit()


  }
}
