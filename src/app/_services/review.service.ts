import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Review } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ReviewService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Review[]>(`${environment.apiUrl}/reviews`);
    }

    getById(id: string) {
        return this.http.get<Review>(`${environment.apiUrl}/reviews/${id}`);
    }

    create(params) {
        return this.http.post(`${environment.apiUrl}/reviews`, params);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/reviews/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/reviews/${id}`);
    }
}
