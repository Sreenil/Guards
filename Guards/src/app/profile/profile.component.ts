import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private router:Router)
  {}

  privelage:any=localStorage.getItem('admin')

  back()
  {
    this.router.navigateByUrl('dashboard')
  }
}
