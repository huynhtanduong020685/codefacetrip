import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { GlobalVariables } from '../../global/global_variable';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { UtilProvider } from '../../providers/util/util';
import { AngularFireStorage } from '@angular/fire/storage';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  private itemsCollection: AngularFirestoreCollection<any>;

  countryList: Array<any> = [];
  user: any = GlobalVariables.user;
  pictures = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private appProvider: AppProvider,
    private storage: AngularFireStorage,
    private util: UtilProvider,
    private db: AngularFirestore
  ) {
    if (!this.user['pictures']) {
      this.user['pictures'] = '';
    } else {
      this.pictures = this.user['pictures'].split('|');
    }
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'users/' + file['name'];
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    this.util.presentLoading();
    task.then(res => {
      this.storage.ref(filePath).getDownloadURL().subscribe(data => {
        if (data) {
          this.user['pictures'] += data + '|';
        }
        this.util.stopLoading();
      })
    }, err => this.util.stopLoading())
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
    this.itemsCollection = this.db.collection<any>('users');
    this.user = this.navParams.get('user') || this.user;
  }

  onItemSelected(ev) {
    console.log(ev);
    this.user['country'] = ev;
  }

  save() {
    this.util.presentLoading();
    this.itemsCollection.doc(this.user['base64']).update(this.user).then(res => {
      GlobalVariables.user = this.user;
      this.util.setLocal('user', this.user);
      this.util.stopLoading();
    }, err => this.util.stopLoading())
  }
}
