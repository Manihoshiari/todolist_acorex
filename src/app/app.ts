import { Component, signal } from '@angular/core';
import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';

import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [
    
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');


  
}
