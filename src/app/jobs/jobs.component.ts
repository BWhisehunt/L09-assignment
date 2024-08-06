import { Component, OnInit } from '@angular/core';
import { JobService } from '../job-service.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
}