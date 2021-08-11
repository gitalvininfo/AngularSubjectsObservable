import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  data: number[] = [];

  constructor(private subjectService: SubjectService) {
    this.subjectService.dataReplay.next(1);
    this.subjectService.dataReplay.next(2);
    this.subjectService.dataReplay.next(3);

    this.subjectService.dataReplay.subscribe(res => this.data.push(res))
  }

  ngOnInit(): void {

  }

  sendData() {
    // return;
    this.subjectService.dataReplay.next(Math.random());
    // this.subjectService.dataReplay.complete();

  }

}
