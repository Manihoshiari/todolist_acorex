import { Component, input } from '@angular/core';
import { newTask } from '../todolist.model';
import { DatePipe } from '@angular/common';
import { AXBadgeComponent } from "@acorex/components/badge";
import { AXDecoratorIconComponent } from "@acorex/components/decorators";
import { AXDropdownBoxComponent, AXDropdownPanelComponent } from '@acorex/components/dropdown';
import { AXButtonComponent, AXButtonItemListComponent, AXButtonItemComponent } from "@acorex/components/button";
import { AXValueChangedEvent } from '@acorex/cdk/common';
@Component({
  selector: 'app-task',
  imports: [DatePipe, AXBadgeComponent, AXDecoratorIconComponent, AXButtonComponent, AXDropdownPanelComponent, AXButtonItemListComponent, AXButtonItemComponent],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  tasks=input.required<newTask>()
setstatus(e:any){
this.tasks().taskstats=e.item.text

}
}
