import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { mesService } from '../../messervice';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css'
})
export class MachineComponent {
  constructor(private mesService: mesService, private router :Router) { }
  logout(): void {
    this.mesService.logout().subscribe({
      next: (data) => {
        localStorage.removeItem('authToken');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout error', error);
      }
    });
}
}
