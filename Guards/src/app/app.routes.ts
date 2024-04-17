import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { adminGuard } from './admin.guard';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {
        path:'login',
        component:LoginComponent,
        
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[authGuard]
    },
    {
        path:'setting',
        component:SettingsComponent,
        canActivate:[adminGuard]
    },
    {
        path:'profile',
        component:ProfileComponent,
    }
];
