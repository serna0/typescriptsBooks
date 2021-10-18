import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [];
  showReportIssue: boolean = false;
  selectedIssues: Issue | null = null;

  constructor(
    private issuesService: IssuesService
  ) { }

  private getIssues(){
    this.issues =  this.issuesService.getPendingIssues();
  }

  ngOnInit(): void {
    this.getIssues();
  }

  onCloseReport(){
    this.showReportIssue = false;
    this.getIssues();
  }

  onConfirm( confirmed: boolean ){
    if( confirmed && this.selectedIssues ){
      this.issuesService.completeIssue( this.selectedIssues );
      this.getIssues();
    }

    this.selectedIssues = null;
  }
}
