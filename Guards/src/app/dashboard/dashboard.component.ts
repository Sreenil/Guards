import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router:Router){}
  logout()
  {
    localStorage.clear()
    this.router.navigateByUrl('')
  }

  setting()
  {
    this.router.navigateByUrl('setting')
  }
  profile()
  {
    this.router.navigateByUrl('profile')
  }
}
