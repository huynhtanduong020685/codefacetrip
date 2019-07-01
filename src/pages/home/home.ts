import { Component, NgZone } from '@angular/core';
import { NavController, Events, ModalController } from 'ionic-angular';
import { GlobalVariables } from '../../global/global_variable';
import { AppProvider } from '../../providers/app/app';
//import { AboutPage } from '../about/about';
import { UtilProvider } from '../../providers/util/util';
import { Platform } from 'ionic-angular/platform/platform';
import { ChatsPage } from '../chats/chats';
import { LocalDetailPage } from '../local-detail/local-detail';
import { PopupPage } from '../popup/popup';

declare var cordova;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  country: string = '';
  language: string = '';
  user = GlobalVariables.user;
  localList: Array<any> = [];
  countryCount: number = 0;
  constructor(
        public navCtrl: NavController, 
        private events: Events,   
        private appProvider: AppProvider,
         private util: UtilProvider, 
         private platform: Platform,
         public modalCtrl: ModalController
         ) {
  }

  ionViewDidLoad() {
    this.searchLocal();

  }
  searchLocal() {
    this.util.presentLoading();
    this.countryCount = 0;
    this.appProvider.searchLocal(this.country, this.language).then((res: any) => {
      this.localList = res;
      var filter = this.localList.filter(item=>{
        return item['country'].toLowerCase().indexOf('vietnam') >=0;
      })
      this.countryCount = filter.length;
      this.util.stopLoading();
    })
  }
  onSearchClearCountry() {
    this.country = '';
    this.util.presentLoading();
    this.appProvider.searchLocal(this.country, this.language).then((res: any) => {
      this.localList = res;
      this.util.stopLoading();
    })
  }
  onSearchClearLanguage() {
    this.language = '';
    this.util.presentLoading();
    this.appProvider.searchLocal(this.country, this.language).then((res: any) => {
      this.localList = res;
      this.util.stopLoading();
    })
  }

  viewDetail(user) {
    GlobalVariables.selectedUser = user;
    // this.events.publish('tab_changed_1');
    this.navCtrl.push(LocalDetailPage,{user: user})
  }

  openBrowser(fb_id) {
    if(this.platform.is('cordova')){
      cordova.InAppBrowser.open('https://fb.com/' + fb_id, '_blank', 'location=yes');
    }
  }
  askLocals() {
    var selectedUser = this.localList.filter(item => item['checked'] == true);
    var listCheck = [];
    selectedUser.map(item => {
      listCheck.push(item);
    });
      const modal = this.modalCtrl.create(PopupPage, { device: listCheck, user: this.user });
      modal.present();
  }
  goToChat(user){
    GlobalVariables.selectedUser = user;
    this.navCtrl.push(ChatsPage,{receiver: user, user: this.user});
  }
}
