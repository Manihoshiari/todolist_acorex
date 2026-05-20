import { Component, ElementRef, EventEmitter, output, Output, ViewChild, viewChild } from '@angular/core';
import { AXFormComponent, AXValidationRuleDirective, AXFormFieldComponent, AXFormModule } from "@acorex/components/form";
import { AXLabelComponent } from "@acorex/components/label";
import { AXTextBoxComponent } from "@acorex/components/text-box";
import { AXTextAreaComponent } from '@acorex/components/text-area';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import { AXDecoratorClearButtonComponent } from "@acorex/components/decorators";
import { AXDateTimeBoxComponent } from "@acorex/components/datetime-box";
import { AXSelectionListComponent } from '@acorex/components/selection-list';
import { AXSelectionList2Module } from '@acorex/components/selection-list-2';
import { AXButtonComponent } from "@acorex/components/button";
import { FormsModule } from "@angular/forms";
import { AXFormValidationRule } from '@acorex/cdk/common';
import { newTask } from '../todolist.model';
import { AXTabsComponent } from '@acorex/components/tabs';
import { AXTabItemComponent } from '@acorex/components/tabs';
@Component({
  selector: 'app-form',
  imports: [AXFormComponent, AXLabelComponent, AXTextBoxComponent, AXSearchBoxModule,
    AXTextAreaComponent, AXSelectBoxComponent, AXValidationRuleDirective, AXDecoratorClearButtonComponent,
    AXFormFieldComponent, AXDateTimeBoxComponent, AXSelectionList2Module, AXButtonComponent, FormsModule,AXFormModule,AXTabItemComponent,AXTabsComponent],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  taskName:string=''
  describtion:string=''
  assignee:string=''
  date:string=''
  priority:string=''
  closeform=output()
  @Output() formValue=new EventEmitter<newTask>()
  protected items=[
    {
      id:1,
      text:'Low'
    },{
      id:2,
      text:'Medium'
    },{
      id:3,
      text:'High'
    }
  ]
  cancel(){
    this.closeform.emit()
  }
  addtask(){
   this.formValue.emit({
     taskname: this.taskName,
     describion: this.describtion,
     assignees: this.assignee,
     id: new Date().getTime().toString(),
     taskstats: '',
     pririty: this.priority,
     flag: false
   })
    
    
  }
  
}
