import { Component, DestroyRef, inject, input, OnInit, output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, subscribeOn } from 'rxjs';
import { newTask } from '../todolist.model';
import { FormsModule } from '@angular/forms';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { AXValueChangedEvent } from '@acorex/cdk/common';
@Component({
  selector: 'app-header',
  imports: [FormsModule, AXTextBoxComponent, AXButtonComponent, ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  searchSub = new Subject<string>();
  searchValue = output<string>();
  open = output();
  tasks = input.required<newTask[]>();
  visible = input.required();
  openform() {
    this.open.emit();
  }
  ngOnInit(): void {
    this.searchSub.pipe(debounceTime(300), distinctUntilChanged()).subscribe((v) => {
      this.emitsearch(v);
    });
  }
  emitsearch(value: string) {
    this.searchValue.emit(value);
  }
  search(e: AXValueChangedEvent) {
    this.searchSub.next(e.value);
  }
}
