import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    public authService: AuthService,
    public fireservices: AngularFirestore
  ) {}

  ngOnInit() {
    this.get_data_profile().subscribe((data) => {
      this.profile = data.map((e) => {
        return {
          id: this.authService.userData.uid,
          isedit: false,
          email: e.payload.doc.data()['email'],
          firstName: e.payload.doc.data()['firstName'],
          lastName: e.payload.doc.data()['lastName'],
          nickName: e.payload.doc.data()['nickName'],
          birthDay: e.payload.doc.data()['birthDay'],
          gender: e.payload.doc.data()['gender'],
        };
      });
      console.log(this.profile);
    });
  }

  update_profile(record) {
    this.fireservices
      .doc('users/' + this.authService.userData.uid)
      .update(record);
  }
  Edit_profile(record) {
    record.isedit = true;
    record.edit_firstName = record.firstName;
    record.edit_lastName = record.lastName;
    record.edit_nickName = record.nickName;
    record.edit_birthDay = record.birthDay;
    record.edit_gender = record.gender;
  }

  Updateprofile(recorddata) {
    let record = {};
    record['firstName'] = recorddata.edit_firstName;
    record['lastName'] = recorddata.edit_lastName;
    record['nickName'] = recorddata.edit_nickName;
    record['birthDay'] = recorddata.edit_birthDay;
    record['gender'] = recorddata.edit_gender;
    this.update_profile(record);
    recorddata.isedit = false;
  }

  test() {
    console.log(this.authService.userData);
  }

  get_data_profile() {
    return this.fireservices.collection('users/').snapshotChanges();
  }
}
