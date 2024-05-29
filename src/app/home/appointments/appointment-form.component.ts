import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-appointment-form',
    templateUrl: './appointment-form.component.html'
})
export class AppointmentFormComponent implements OnInit {
    appointmentForm: FormGroup;
    id: string;
    isEdit: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private appointmentService: AppointmentService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isEdit = !!this.id;

        this.appointmentForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            date: ['', Validators.required],
            reason: ['', Validators.required]
        });

        if (this.isEdit) {
            this.appointmentService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.appointmentForm.patchValue(x));
        }
    }

    onSubmit() {
        if (this.appointmentForm.invalid) {
            return;
        }

        if (this.isEdit) {
            this.appointmentService.update(this.id, this.appointmentForm.value)
                .pipe(first())
                .subscribe(() => {
                    this.router.navigate(['/home/appointments']);
                });
        } else {
            this.appointmentService.create(this.appointmentForm.value)
                .pipe(first())
                .subscribe(() => {
                    this.router.navigate(['/home/appointments']);
                });
        }
    }
}
