import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result'

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {
  @Input() result : Result
  constructor() { }

  ngOnInit() {
  }

}
