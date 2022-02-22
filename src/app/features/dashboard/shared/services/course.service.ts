import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public fireservices: AngularFirestore) {}

  //Add data for course
  create_Newdata_course(record) {
    return this.fireservices.collection('course').add(record);
  }

  //get data from firebase
  get_data_course() {
    return this.fireservices.collection('course').snapshotChanges();
  }

  //update data to firebase for poste

  update_course(recordid, record) {
    this.fireservices.doc('course/' + recordid).update(record);
  }

  //delete data from poste

  delete_data_course(recordid) {
    this.fireservices.doc('course/' + recordid).delete();
  }

  //   setGroupFilter$ = new Subject<any>();
  //   getGroupFilter = this.setGroupFilter$.asObservable();
  //   fetchData(): Observable<any> {
  //     return of(
  //       this.fireservices
  //         .collection('Poste1')
  //         .valueChanges()
  //         .subscribe((val) => val)
  //     );
  //   }
}
