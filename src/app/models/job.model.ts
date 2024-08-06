export class Job {
  title: string;
  description: string;
  duration: string;
  employer: string;

  constructor(title: string, description: string, duration: string, employer: string) {
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.employer = employer;
  }
}