import {Component} from "@angular/core";

import {Platform,ActionSheetController} from "ionic-angular"

@Component({
  templateUrl:'basic.html'
})
export class  BasicPage{

  constructor(
    public platfrom:Platform,
    public  actionsheetCtrl:ActionSheetController
  ){}

  //在basic.html里面有引用
  openMenu(){
      let actionSheet = this.actionsheetCtrl.create({
        //里面写actionSheet的创建内容
        title:'albums',
        cssClass:'action-sheets-basic-page',
        //构建button数组
        buttons:[
          {
            text:'Delete',
            role:'destructive',//两种特殊按钮，destructive和cancel
            icon:!this.platfrom.is('ios')?'trash':null,
            handler:()=>{
              console.log('Delete clicked');
            }
          },
          {
            text:'Share',
            icon:!this.platfrom.is('ios')?'share':null,
            handler:()=>{
              console.log('share clicked');
            }
          },
          {
            text:'Delete',
            role:'destructive',
            icon:!this.platfrom.is('ios')?'trash':null,
            handler:()=>{
              console.log('Delete clicked');
            }
          }
        ]
      });
      actionSheet.present();
  }

}
