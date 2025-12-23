import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  stats = [
    { value: '15+', label: 'Proyectos Activos' },
    { value: '50+', label: 'Miembros' },
    { value: '100+', label: 'Publicaciones' },
    { value: '5+', label: 'Años de Experiencia' }
  ];
}