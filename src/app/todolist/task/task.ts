import { Component, inject, input, OnInit, output, signal, StaticClassSansProvider } from '@angular/core';
import { newTask } from '../todolist.model';
import { DatePipe, NgClass } from '@angular/common';
import { AXBadgeComponent } from '@acorex/components/badge';
import {
  AXDecoratorIconComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';
import { AXDropdownBoxComponent, AXDropdownPanelComponent } from '@acorex/components/dropdown';
import {
  AXButtonComponent,
  AXButtonItemListComponent,
  AXButtonItemComponent,
} from '@acorex/components/button';
import { AXClickEvent } from '@acorex/cdk/common';
import { todolistService } from '../todolist.service';

@Component({
  selector: 'app-task',
  imports: [
    DatePipe,
    AXBadgeComponent,
    AXDecoratorIconComponent,
    AXButtonComponent,
    AXDropdownPanelComponent,
    AXButtonItemListComponent,
    AXButtonItemComponent,
    NgClass,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  tasks = input.required<newTask>();
  textcolor=signal<string>('');
  bgcolor=signal<string>('');
  todoservice = inject(todolistService);
  badgecolor=signal<string>('primary');
  delete = output<string>();
  setstatus(e: any) {
    this.tasks().taskstats = e.item.text;

    if (this.tasks().taskstats === 'Canceled') {
      this.textcolor.set('text-red-500');
      this.badgecolor.set('danger');
      this.bgcolor.set('bg-[#FEF2F2]');
    } else if (this.tasks().taskstats === 'Backlog') {
      this.textcolor.set('text-[#314158]');
      this.badgecolor.set('secondary');
      this.bgcolor.set('bg-[#F8FAFC]');
    } else if (this.tasks().taskstats === 'Complete') {
      this.textcolor.set('text-green-700');
      this.badgecolor.set('success');
      this.bgcolor.set('bg-green-100');
    } else if (this.tasks().taskstats === 'In Progress') {
      this.textcolor.set('text-[#1447E6]');
      this.badgecolor.set('primary');
      this.bgcolor.set('bg-[#EFF6FF]');
    }
  }
  deletetask(e: string) {
    this.delete.emit(e);
  }

  changeflag() {
    this.tasks().flag = !this.tasks().flag;
  }
}
