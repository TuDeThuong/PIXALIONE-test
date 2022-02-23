import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  time: number;
  desciption: string;
  category: string;
  subject: string;
  numberStudent: number;
}

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.css'],
})
export class MainDialogComponent implements OnInit {
  course: any;

  constructor(
    public dialogRef: MatDialogRef<MainDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
