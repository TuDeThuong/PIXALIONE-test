import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from '../../shared/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { MainDialogComponent } from './main-dialog/main-dialog.component';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  course: any;
  filteredcourse: any;
  name: string;
  time: number;
  desciption: string;
  category: string;
  subject: string;
  numberStudent: number;
  sub: Subscription;

  constructor(
    public authService: AuthService,
    private dataService: DataService,
    public dialog: MatDialog
  ) {
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
    });
  }

  openDialog(name, time, desciption, category, subject, numberStudent): void {
    this.name = name;
    this.time = time;
    this.desciption = desciption;
    this.category = category;
    this.subject = subject;
    this.numberStudent = numberStudent;

    const dialogRef = this.dialog.open(MainDialogComponent, {
      width: '250px',
      data: {
        name: this.name,
        time: this.time,
        desciption: this.desciption,
        category: this.category,
        subject: this.subject,
        numberStudent: this.numberStudent,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {}

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
