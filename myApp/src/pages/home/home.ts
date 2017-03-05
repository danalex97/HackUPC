import {
  Component
} from '@angular/core';

import {
  Platform,
  ActionSheetController
} from 'ionic-angular';

import {
  Camera
} from 'ionic-native';

import {
  Http
} from '@angular/http';

import { NavController, NavParams } from 'ionic-angular';
import { CurrentUserService } from '../../providers/current_user';
@Component({
  templateUrl: 'home.html'
})

export class HomePage {
  private base64Image: string;
  private pic_taken: string;
  public myhttp: Http;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public http: Http
  ) {
    this.myhttp = http;
    this.pic_taken = "false";
    this.base64Image = "batman";
  }

  takePicture(){
     Camera.getPicture({
         destinationType: Camera.DestinationType.DATA_URL,
         targetWidth: 256,
         targetHeight: 256
     }).then((imageData) => {
         this.pic_taken = "true";
         this.base64Image = "data:image/jpeg;base64," +imageData;
     }, (err) => {
        this.pic_taken = err;
        console.log(this.pic_taken);
     });
   }


postPicture() {
    var data = this.base64Image;
    var link = "https://kidappservice.scalingo.io/";
    link = link + data;
    this.myhttp.get(String(link)).subscribe(response => {
      response = JSON.parse(response['_body'])
    }, err => {
      console.log(err);
    });
}

openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: this.pic_taken,
          icon: null,
          handler: () => {
            console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
