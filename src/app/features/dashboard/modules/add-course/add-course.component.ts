import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  name: string;
  desciption: string;
  subject: string;
  category: string;
  time: number;
  numberStudent: number;

  constructor(public dataservice: DataService) {}

  ngOnInit(): void {}
  Create_course() {
    let record = {};
    record['name'] = this.name;
    record['desciption'] = this.desciption;
    record['category'] = this.category;
    record['subject'] = this.subject;
    record['time'] = this.time;
    record['numberStudent'] = this.numberStudent;

    this.dataservice
      .create_Newdata_course(record)
      .then((res) => {
        this.name = '';
        this.desciption = '';
        this.category = '';
        this.subject = '';
        this.time = 0;
        this.numberStudent = 0;

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
