import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;
  isAuthenticated = false;

  menuItems = [
    { label: 'Inicio', route: '/' },
    { label: 'Proyectos', route: '/proyectos' },
    { label: 'Integrantes', route: '/integrantes' },
    { label: 'Comunicaciones', route: '/comunicaciones' },
    { label: 'Redes Sociales', route: '/redes-sociales' },
    { label: 'Repositorios', route: '/repositorios' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}