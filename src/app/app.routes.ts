import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [

    {path : '', redirectTo: "homepage", pathMatch: 'full'},

    {path : 'homepage', component: HomepageComponent},
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},


    {path: '**', component: PageNotFoundComponent}
];
