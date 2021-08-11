import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  
  data: number = 0;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.data.next(2);
    this.subjectService.data.subscribe(res => {
      this.data = res;
    })
  }

  sendData() {
    this.subjectService.data.next(Math.random());
  }

}
