import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
