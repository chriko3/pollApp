import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button-component/primary-button-component';

@Component({
  selector: 'app-home-component',
  imports: [PrimaryButtonComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}
