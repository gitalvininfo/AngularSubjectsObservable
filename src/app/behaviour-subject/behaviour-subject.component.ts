import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  data: number = 0;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {

    this.subjectService.dataBehaviour.next(69);
    this.subjectService.dataBehaviour.subscribe(res => {
      this.data = res;
    })
  }

  sendData() {
    this.subjectService.dataBehaviour.next(Math.random());

  }

}
