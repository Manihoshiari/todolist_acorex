import { Component, output } from '@angular/core';
import { AXButtonComponent } from '@acorex/components/button';

import { AXUploaderZoneDirective } from '@acorex/cdk/uploader';
import { AXUploaderBrowseDirective } from '@acorex/cdk/uploader';

@Component({
  selector: 'app-addnewtask',
  imports: [AXButtonComponent, AXUploaderBrowseDirective, AXUploaderZoneDirective],
  templateUrl: './addnewtask.html',
  styleUrl: './addnewtask.css',
})
export class Addnewtask {
  openForm = output();

  

  create() {
    this.openForm.emit();
  }
}
