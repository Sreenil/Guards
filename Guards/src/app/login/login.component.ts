import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  admin!:string
  constructor(private router:Router){}

  login(user:any,pass:any)
  {
    localStorage.setItem('user',user)
    localStorage.setItem('pass',pass)
    localStorage.setItem('admin',this.admin)
    this.router.navigateByUrl('dashboard')
    console.log(this.admin);
    
  }
}
