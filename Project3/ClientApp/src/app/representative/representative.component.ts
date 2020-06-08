import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRepresentative } from '../irepresentative';

@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit {

  genProfilePic: string = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';

  @Input() representative: IRepresentative;

  constructor() { }

  ngOnInit() { }
}
