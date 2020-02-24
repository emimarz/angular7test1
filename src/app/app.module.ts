import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: '', component : HomeComponent },
    { path: 'home', component : HomeComponent },
    { path: 'about', component : AboutComponent },
    { path: 'contact', component : ContactUsComponent },
    { path: 'login', component : LoginComponent },
];
@NgModule({
    imports : [
        BrowserModule,
        //RouterModule.forChild(HomeComponent),
        RouterModule.forRoot(routes)
    ],
    declarations: [ AppComponent, NavComponent, HomeComponent, AboutComponent, ContactUsComponent, LoginComponent ],
    bootstrap : [ AppComponent ],
})
export class AppModule { }