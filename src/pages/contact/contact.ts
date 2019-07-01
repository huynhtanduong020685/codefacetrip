import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { GlobalVariables } from '../../global/global_variable';
import { ChatsPage } from '../chats/chats';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { UtilProvider } from '../../providers/util/util';
import { FilterByPipe } from '../../pipes/filter-by/filter-by';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  country: string = '';
  language: string = '';
  chatHistory: Array<any> = [];
  onlineUsers: Array<any> = [];
  countryCount: number = 0;
  chatHistorySearch: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private util: UtilProvider,
    private zone: NgZone,
    private appProvider: AppProvider) {
    this.util.presentLoading();
    this.appProvider.getOnlineUsers().then((data: any) => {
      this.onlineUsers = data;
      this.appProvider.getChatHistory(GlobalVariables.user['base64']).then((data: any) => {
        this.chatHistory = data;
        this.searchChatHistory();
        this.chatHistory.map(item=>{
          if(this.checkOnline(item)){
            item['online']=true;
          }
        })
        this.util.stopLoading();
      }, () => this.util.stopLoading())
    });


  }
  checkOnline(_item) {
    var filter = this.onlineUsers.filter(item => {
      return _item['base64'] == item['base64'];
    })
    return filter.length > 0;
  }
  ionViewDidEnter() {
    var receiver = Object.assign({}, GlobalVariables.selectedUser);
    if (receiver && receiver['base64']) {
      GlobalVariables.selectedUser = {};
      this.goToChat(receiver);
    }


  }
  goToChat(user) {
    this.navCtrl.push(ChatsPage, { receiver: user, user: GlobalVariables.user });
  }

  onSearchClearCountry() {
    this.country = '';
    this.searchChatHistory();
  }
  onSearchClearLanguage() {
    this.language= '';
    this.searchChatHistory();
  }

  searchChatHistory(){
    var filterBy = new FilterByPipe();

    var filter = filterBy.transform(this.chatHistory, {
      country: this.country,
      languages: this.language
    });

    this.chatHistorySearch = filter;
  }
}
