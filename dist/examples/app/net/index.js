import {bind,
  Injector} from 'angular2/di';
import {bootstrap,
  ElementRef,
  NgFor} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {Control,
  ControlGroup,
  formDirectives} from 'angular2/forms';
import {IonicView,
  Http} from 'ionic/ionic';
let testUrl = 'https://ionic-api-tester.herokuapp.com/json';
let testUrl404 = 'https://ionic-api-tester.herokuapp.com/404';
class IonicApp {
  constructor() {
    this.form = new ControlGroup({requestData: new Control('')});
  }
  doGet() {
    Http.get('http://swapi.co/api/people/1').then((resp) => {
      this.resp = resp;
    }, (err) => {
      this.err = err;
    });
  }
  doGet404() {
    Http.get(testUrl404).then((resp) => {
      this.resp = resp;
    }, (err) => {
      this.err = err;
    });
  }
  doPost() {
    let data = this.form.controls.requestData.value;
    Http.post(testUrl, data).then((resp) => {
      this.resp = resp;
    }, (err) => {
      this.err = err;
    });
  }
  doPut() {
    let data = this.form.controls.requestData.value;
    Http.put(testUrl, data).then((resp) => {
      this.resp = resp;
    }, (err) => {
      this.err = err;
    });
  }
  doDelete() {
    let data = this.form.controls.requestData.value;
    Http.delete(testUrl, data).then((resp) => {
      this.resp = resp;
    }, (err) => {
      this.err = err;
    });
  }
  doPatch() {
    let data = this.form.controls.requestData.value;
    Http.patch(testUrl, data).then((resp) => {
      this.resp = resp;
    }, (err) => {
      this.err = err;
    });
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({
      templateUrl: 'main.html',
      directives: [formDirectives]
    })];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}