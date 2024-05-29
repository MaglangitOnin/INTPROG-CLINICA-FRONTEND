import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Appointment } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Appointment[]>(`${environment.apiUrl}/appointments`);
    }

    getById(id: string) {
        return this.http.get<Appointment>(`${environment.apiUrl}/appointments/${id}`);
    }

    create(params: any) {
        return this.http.post(`${environment.apiUrl}/appointments`, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/appointments/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/appointments/${id}`);
    }
}
