import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppointmentListComponent } from './appointments/appointment-list.component';
import { AppointmentFormComponent } from './appointments/appointment-form.component';
import { ReviewListComponent } from './reviews/review-list.component';
import { ReviewFormComponent } from './reviews/review-form.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'appointments', component: AppointmentListComponent },
    { path: 'appointments/new', component: AppointmentFormComponent },
    { path: 'appointments/edit/:id', component: AppointmentFormComponent },
    { path: 'reviews', component: ReviewListComponent },
    { path: 'reviews/new', component: ReviewFormComponent },
    { path: 'reviews/edit/:id', component: ReviewFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
