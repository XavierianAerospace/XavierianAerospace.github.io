import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapInstagram } from '@ng-icons/bootstrap-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [
    provideIcons({
      bootstrapGithub,
      bootstrapInstagram,
      bootstrapLinkedin
    })
  ]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  contactInfo = {
    email: 'aess@javeriana.edu.co',
    phone: '+57 xxxxxxx',
    address: 'Pontificia Universidad Javeriana, Bogotá D.C.'
  };

  quickLinks = [
    { label: 'Inicio', url: '/' },
    { label: 'Proyectos', url: '/proyectos' },
    { label: 'Integrantes', url: '/integrantes' },
    { label: 'Comunicaciones', url: '/comunicaciones' }
  ];

  socialLinks = [
    { name: 'GitHub', icon: 'bootstrapGithub', url: 'https://github.com/XavierianAerospace' },
    { name: 'LinkedIn', icon: 'bootstrapLinkedin', url: 'https://www.linkedin.com/company/xaecolombia' },
    { name: 'Instagram', icon: 'bootstrapInstagram', url: 'https://www.instagram.com/xae_javeriana/' },
  ];
}