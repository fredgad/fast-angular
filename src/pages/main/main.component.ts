import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeFormComponent } from '../../features/change-form/change-form.component';

@Component({
  selector: 'fasta-main',
  standalone: true,
  imports: [CommonModule, ChangeFormComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  
}
