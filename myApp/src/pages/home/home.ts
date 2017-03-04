import { Component } from '@angular/core';

import { Platform, ActionSheetController } from 'ionic-angular';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Start',
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
          text: 'See photo',
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
