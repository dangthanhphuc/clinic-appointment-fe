import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { HomepageContainerComponent } from './components/hompage-container/homepage-container.component';
import { MakeClinicsAppointmentComponent } from './components/make-appointment/clinics/make-clinics-appointment.component';
import { MakeDoctorsAppointmentComponent } from './components/make-appointment/doctors/make-doctors-appointment.component';
import { MakeHospitalsAppointmentComponent } from './components/make-appointment/hospitals/make-hospitals-appointment.component';

export const routes: Routes = [

    {path : '', redirectTo: "", pathMatch: 'full'},

    {path : '', component: HomepageContainerComponent, children: [
        
        {path : '', redirectTo: "homepage", pathMatch: 'full'},
        {
            path : 'homepage',
            component: HomepageComponent
        },
        {
            path : 'make-appointment',
            component: MakeAppointmentComponent,
            children: [
                {path : '', redirectTo: "doctors", pathMatch: 'full'},
                {path : 'clinics', component: MakeClinicsAppointmentComponent},
                {path : 'doctors', component: MakeDoctorsAppointmentComponent},
                {path : 'hospitals', component: MakeHospitalsAppointmentComponent},
            ]
        }

    ]},
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},
    


    {path: '**', component: PageNotFoundComponent}
];
