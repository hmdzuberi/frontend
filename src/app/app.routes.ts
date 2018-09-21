import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProgramsComponent } from './programs/programs.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'newsletter', component: NewsletterComponent },
    { path: 'programs', component: ProgramsComponent },
    { path: 'faculty', component: FacultyComponent },
    { path: 'registration', component: RegisterComponent },
    { path: 'contactus', component: ContactComponent },
    { path: '', component: HomeComponent }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 