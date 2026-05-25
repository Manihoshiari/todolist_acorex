import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  output,
  Output,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import {
  AXFormComponent,
  AXValidationRuleDirective,
  AXFormFieldComponent,
  AXFormModule,
  AXFormValidationEvent,
} from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { AXTextAreaComponent } from '@acorex/components/text-area';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';
import { AXSelectionList2Module } from '@acorex/components/selection-list-2';
import { AXButtonComponent } from '@acorex/components/button';
import { FormsModule } from '@angular/forms';
import { AXDataSource } from '@acorex/cdk/common';
import { newTask } from '../todolist.model';
import { AXTabsComponent, AXTabStripChangedEvent } from '@acorex/components/tabs';
import { AXTabItemComponent } from '@acorex/components/tabs';
import { todolistService } from '../todolist.service';
@Component({
  selector: 'app-form',
  imports: [
    AXFormComponent,
    AXLabelComponent,
    AXTextBoxComponent,
    AXSearchBoxModule,
    AXTextAreaComponent,
    AXSelectBoxComponent,
    AXValidationRuleDirective,
    AXDecoratorClearButtonComponent,
    AXFormFieldComponent,
    AXDateTimeBoxComponent,
    AXSelectionList2Module,
    AXButtonComponent,
    FormsModule,
    AXFormModule,
    AXTabItemComponent,
    AXTabsComponent,
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  data = inject(todolistService);
  taskName = signal<string>('');
  describtion = signal<string>('');
  submite = signal<boolean>(false);
  assignee = signal<string>('');
  date = signal<string>('');
  priority = signal<string>('');
  closeform = output();
  formValue = output<newTask>();
  datasource = new AXDataSource<any>({
    pageSize: 5,
    key: 'id',
    load: async (e) => {
      const items = await this.data.getdata();

      return {
        items,
        total: items.length,
      };
    },
  });
  protected items = [
    {
      id: 1,
      text: 'Low',
    },
    {
      id: 2,
      text: 'Medium',
    },
    {
      id: 3,
      text: 'High',
    },
  ];
  cancel() {
    this.closeform.emit();
  }
  tabchanged(e: AXTabStripChangedEvent) {
    this.priority.set(e.tab.text);
  }
  validateform(e: AXFormValidationEvent) {
    this.submite.set(e.result.result);
    this.addtask();
  }
  addtask() {
    if (this.submite()) {
      this.formValue.emit({
        taskname:this.taskName(),
        describion:this.describtion() ,
        assignees: this.assignee(),
        date: this.date(),
        id: new Date().getTime().toString(),
        taskstats: 'In Progress',
        pririty: this.priority(),
        flag: false,
      });
    }
  }
}
