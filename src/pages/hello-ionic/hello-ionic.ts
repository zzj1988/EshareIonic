import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShareDocPage} from '../share-doc/share-doc';
import {H5payPage} from "../h5pay/h5pay";

declare let cordova: any;

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

  //调用成功的回调函数
  alertSuccess(msg) {
    alert(msg);
  }

  //调用失败的回调函数
  alertFail(msg) {
    alert('调用OC失败: ' + msg);
  }
  //调用OC插件方法
  alertShow() {
    //通过js代码调用
    let avgArr:string[] = ["Hey,获取设备!"];
    cordova.plugins.esharePlugin.coolMethod(this.alertSuccess,this.alertFail,avgArr);
  }

  eshareGetList()
  {
    this.alertShow();
  }
  eshareFileTrans() {
    let avgArr:string[] = ["Hey,传送文件!"];
    cordova.plugins.esharePlugin.transMethod(this.alertSuccess,this.alertFail,avgArr);
  }
  startMirror() {
    let avgArr:string[] = ["Hey,开始镜像!"];
    cordova.plugins.esharePlugin.mirrorMethod(this.alertSuccess,this.alertFail,avgArr);
  }
  showShareDocument() {
    // let avgArr:string[] = ["Hey,打开共享文件夹!"];
    // cordova.plugins.esharePlugin.shareDocMethod(this.alertSuccess,this.alertFail,avgArr);
    this.navCtrl.push(ShareDocPage);
  }
  showH5WechatPay() {
    this.navCtrl.push(H5payPage);
  }
}
