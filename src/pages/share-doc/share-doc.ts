import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {Input} from '@angular/core';

declare let cordova: any;

/**
 * Generated class for the ShareDocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share-doc',
  templateUrl: 'share-doc.html',
})



export class ShareDocPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              ) {}
  shareFilePath: string;
  filesNameArr = [];
  // filesNameArr = ["23234","23232324"];
  getFilePath() {
    let path = cordova.file.documentsDirectory;
    this.shareFilePath = path + "EShareFile";
    alert(this.shareFilePath);
  }
  readFile(path) {
    (<any> window).resolveLocalFileSystemURL(path,(entry) =>{this.readEntrySuccess(entry)}, (file_error) => {
      alert("错误：" + file_error);
    } );
  };

  readEntrySuccess(entry) {
    {
      entry.createReader().readEntries(
        (entry_array) => {this.pickFiles(entry_array)},
        (file_error) => {
          alert("遍历错误：" + file_error);
        }
      );
    }
  }

  pickFiles(entryArr) {

    for(let index in entryArr)
    {
      let file = entryArr[index];
      if(file.isFile)
      {
        // alert(file.toURL());  //native file
        // alert(entry_array[index].toInternalURL());  //cdvfile
        this.filesNameArr.push(file);
        // alert(this.filesNameArr[0]);
      }
    }

  }

  openFile (file){
       //把file传给eshare调用
    //通过js代码调用,传输参数第一个为文件路径，第二个为共享的文件夹路径
    let avgArr:string[] = [file.name];
    cordova.plugins.esharePlugin.shareDocMethod(this.alertSuccess,this.alertFail,avgArr);
  }

  //调用成功的回调函数
  alertSuccess(msg) {
    alert(msg);
  }

  //调用失败的回调函数
  alertFail(msg) {
    alert('调用OC失败: ' + msg);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareDocPage');
    this.getFilePath();
    this.readFile(this.shareFilePath);
  }



}
