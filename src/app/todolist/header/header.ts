import { Component, DestroyRef, inject, input, output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { newTask } from '../todolist.model';
import { FormsModule } from '@angular/forms';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { AXButtonComponent } from '@acorex/components/button';
@Component({
  selector: 'app-header',
  imports: [FormsModule,AXTextBoxComponent,AXButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  open=output()
  tasks=input.required<newTask[]>()
  visible=input.required()
  openform(){
    this.open.emit()
  }
}
