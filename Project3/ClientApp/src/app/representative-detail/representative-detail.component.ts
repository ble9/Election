import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepresentativeService } from '../representative.service';
import { RepresentativeDetail } from '../representative-page-result';
import {IRepresentative} from "../irepresentative";

@Component({
  selector: 'app-representative-detail',
  templateUrl: './representative-detail.component.html',
  styleUrls: ['./representative-detail.component.css']
})
export class RepresentativeDetailComponent implements OnInit {

  @Input() representatives: IRepresentative[];
  @Input() index: string;

  private address: string;

  constructor(private route: ActivatedRoute, private representativeService: RepresentativeService) { }

  ngOnInit() {
    this.address = this.route.snapshot.paramMap.get('address');
    this.representativeService.getRepresentatives(this.address).subscribe({
      next: representativeDetails => this.representatives = representativeDetails,
    });
  }
}
