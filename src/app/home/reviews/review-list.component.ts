import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '@app/_services';
import { Review } from '@app/_models';

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html'
})
export class ReviewListComponent implements OnInit {
    reviews: Review[] = [];

    constructor(private reviewService: ReviewService, private router: Router) { }

    ngOnInit() {
        this.reviewService.getAll().subscribe(reviews => this.reviews = reviews);
    }

    editReview(id: string) {
        this.router.navigate(['/home/reviews/edit', id]);
    }

    deleteReview(id: string) {
        this.reviewService.delete(id).subscribe(() => {
            this.reviews = this.reviews.filter(x => x.id !== id);
        });
    }

    addReview() {
        this.router.navigate(['/home/reviews/new']);
    }
}
