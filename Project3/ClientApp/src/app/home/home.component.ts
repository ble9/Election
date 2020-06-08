import { Component } from '@angular/core';
import { IRepresentative } from '../irepresentative';
import { IElection } from '../election/election.interface';
import { ElectionService } from '../election.service';
import { RepresentativeService } from '../representative.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  error: string;
  normalAddress: string;
  searchCategory: string = 'Upcoming Elections';
  searchString: string = '1600 Pennsylvania Ave NW, Washington, DC 20500'; // Good test address
  filteredElections: IElection[];
  filteredRepresentatives: IRepresentative[];
  representativeSearch: boolean = false;
  electionSearch: boolean = false;
  selectionCount: number = 0;

  constructor(private electionService: ElectionService,
    private representativeService: RepresentativeService,
    private router: Router) {
  }

  search(): void {
    let secondReturn = {};
    if (this.searchCategory == 'Representative Info') {
      this.filteredRepresentatives = [];
      this.electionSearch = false;
      this.representativeSearch = true;
      this.representativeService.getRepresentatives(this.searchString, secondReturn).subscribe({
        next: representatives => {
          this.normalAddress = secondReturn['address'];
          this.filteredRepresentatives = representatives;
        },
        error: req => this.handleError(req.error.error.message),
        complete: () => this.error = null
      });
    } else {
      this.filteredElections = [];
      this.electionSearch = true;
      this.representativeSearch = false;
      this.electionService.getElections(this.searchString, secondReturn).subscribe({
        next: elections => {
          this.normalAddress = secondReturn['address'];
          this.filteredElections = elections;
        },
        error: req => this.handleError(req.error.error.message),
        complete: () => this.error = null
      })
    }
  }

  handleError(message: string) {
    if (message === 'Election unknown')
      this.error = 'No elections found';
    else
      this.error = message;
  }

  navigateToElectionDetails(election: IElection, normalAddress: string) {
    this.electionService.setCachedElection(election);
    this.router.navigate(['/election', election.id, normalAddress]);
  }
}
