import { Component, OnInit } from "@angular/core"
import { IElection } from "../election/election.interface";
import { ElectionService } from "../election.service";

@Component({
  "selector": "elections",
  "templateUrl": "./elections.component.html"
})
export class ElectionsComponent implements OnInit {
  elections: IElection[] = [];
  errorOccured: boolean = false;

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.electionService.getAllElections().subscribe({
      next: elections => this.elections = elections
    });
  }

}
