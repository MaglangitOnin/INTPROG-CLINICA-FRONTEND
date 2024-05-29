import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AppointmentListComponent } from './appointments/appointment-list.component';
import { AppointmentFormComponent } from './appointments/appointment-form.component';
import { ReviewListComponent } from './reviews/review-list.component';
import { ReviewFormComponent } from './reviews/review-form.component';

@NgModule({
    declarations: [
        HomeComponent,
        AppointmentListComponent,
        AppointmentFormComponent,
        ReviewListComponent,
        ReviewFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
