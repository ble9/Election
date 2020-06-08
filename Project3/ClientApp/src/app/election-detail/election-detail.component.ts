import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '../election.service';
import { IElection } from '../election/election.interface';

@Component({
  selector: 'app-election-detail',
  templateUrl: './election-detail.component.html',
  styleUrls: ['./election-detail.component.css']
})
export class ElectionDetailComponent implements OnInit {

  electionDetail: IElection;
  currentId: number;
  address: string;

  constructor(private route: ActivatedRoute, private electionService: ElectionService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.address = this.route.snapshot.paramMap.get('address');
    let cachedElection = this.electionService.getCachedElection();
    if (cachedElection && id == cachedElection.id) {
      this.electionDetail = cachedElection;
    } else {
      this.electionService.getElection(id, this.address).subscribe({
        next: electionDetail => this.electionDetail = electionDetail
      })
    }
  }

}
