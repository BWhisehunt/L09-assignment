import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from './models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobs: Job[] = [
    { title: 'Manager', description: 'Managing from 6 to 75 employees within Housekeeping and the Uniform Room', duration: '12 Years', employer: 'The Broadmoor Hotel' },
    { title: 'Owner/Operator', description: 'Ran the business of detailing cars', duration: '3 Years', employer: 'Dayspring Auto Detailing, within Dayspring Enterprises' },
    { title: 'CEO', description: 'Ran the business of vending machines', duration: '5 Years', employer: 'Dayspring Enterprises' },
  ];

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }
}