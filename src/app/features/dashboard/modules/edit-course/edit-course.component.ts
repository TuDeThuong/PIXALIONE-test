import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  course: any;
  filteredcourse: any;
  sub: Subscription;

  constructor(public dataService: DataService) {
    this.sub = this.dataService.get_data_course().subscribe((data) => {
      this.filteredcourse = this.course = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          desciption: e.payload.doc.data()['desciption'],
          category: e.payload.doc.data()['category'],
          subject: e.payload.doc.data()['subject'],
          time: e.payload.doc.data()['time'],
          numberStudent: e.payload.doc.data()['numberStudent'],
        };
      });
      console.log(this.course);
    });
  }

  ngOnInit() {}

  Edit_record2(record) {
    record.isedit = true;
    record.edit_name = record.name;
    record.edit_desciption = record.desciption;
    record.edit_category = record.category;
    record.edit_subject = record.subject;
    record.edit_time = record.time;
    record.edit_numberStudent = record.numberStudent;
  }

  Updaterecord2(recorddata) {
    let record = {};
    record['name'] = recorddata.edit_name;
    record['desciption'] = recorddata.edit_desciption;
    record['category'] = recorddata.edit_category;
    record['subject'] = recorddata.edit_subject;
    record['time'] = recorddata.edit_time;
    record['numberStudent'] = recorddata.edit_numberStudent;
    this.dataService.update_course(recorddata.id, record);
    recorddata.isedit = false;
  }

  delete_record2(record_id) {
    this.dataService.delete_data_course(record_id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  filter(queryString: string) {
    if (queryString) {
      this.filteredcourse = this.course.filter((p) =>
        p.name.toLowerCase().includes(queryString.toLocaleLowerCase())
      );
    } else {
      this.filteredcourse = this.course;
    }
  }
}
