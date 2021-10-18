import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues'

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = [];

  constructor() { }

  getPendingIssues(): Issue[] {
    return issues.filter(issue => !issue.completed);
  }
  createIssue( issue: Issue){
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }
  completeIssue( issue: Issue){
    const selectedIssues: Issue = {
      ...issue,
      completed: new Date(),
    };

    const index = this.issues.findIndex( (i) => i == issue );
    this.issues[index] = selectedIssues;

  }

  getSuggestions(title: string): Issue[]{
    if( title.length > 3){
      return this.issues.filter( issue => issue.title.indexOf(title) !== 1 );
    }
    return [];
  }
}

/* Pag 15 */
