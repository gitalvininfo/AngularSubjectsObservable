import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  data: number = 0;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {

    this.subjectService.dataAsync.next(1);
    this.subjectService.dataAsync.next(2);
    this.subjectService.dataAsync.next(3);

    this.subjectService.dataAsync.subscribe(res => {
      this.data = res;
    })
    this.subjectService.dataAsync.next(4);
    this.subjectService.dataAsync.complete();

  }

  sendData() {
    this.subjectService.dataAsync.next(5);
  }

}
