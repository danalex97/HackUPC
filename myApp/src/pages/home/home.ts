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

@Component({
  templateUrl: 'home.html'
})

export class HomePage {
  private base64Image: string;
  private pic_taken: string;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) {
    this.pic_taken = "false";
  }

  takePicture(){
     Camera.getPicture({
         destinationType: Camera.DestinationType.DATA_URL,
         targetWidth: 1000,
         targetHeight: 1000
     }).then((imageData) => {
         this.pic_taken = "true";
         this.base64Image = "data:image/jpeg;base64," + imageData;
     }, (err) => {
        this.pic_taken = err;
        console.log(this.pic_taken);
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
