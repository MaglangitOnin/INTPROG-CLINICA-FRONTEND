import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '@app/_services';

@Component({
    selector: 'app-review-form',
    templateUrl: './review-form.component.html'
})
export class ReviewFormComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    submitted: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private reviewService: ReviewService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;

        this.form = this.formBuilder.group({
            rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            feedback: ['', Validators.required]
        });

        if (!this.isAddMode) {
            this.reviewService.getById(this.id)
                .subscribe(x => this.form.patchValue(x));
        }
    }

    onSubmit() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        if (this.isAddMode) {
            this.createReview();
        } else {
            this.updateReview();
        }
    }

    private createReview() {
        this.reviewService.create(this.form.value)
            .subscribe(() => {
                this.router.navigate(['/home/reviews']);
            });
    }

    private updateReview() {
        this.reviewService.update(this.id, this.form.value)
            .subscribe(() => {
                this.router.navigate(['/home/reviews']);
            });
    }

    cancel() {
        this.router.navigate(['/home/reviews']);
    }
}
