import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GotoServieces {
  constructor(private router: Router) { }
  goToHome() {
    this.router.navigate(['/']);
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }
}
