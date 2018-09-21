import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProgramsComponent } from './programs/programs.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

import { routing } from './app.routes';

@NgModule({
	declarations: [
		AppComponent, HomeComponent, NewsletterComponent, ProgramsComponent, FacultyComponent, RegisterComponent, ContactComponent
	],
	imports: [
		BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, routing
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
