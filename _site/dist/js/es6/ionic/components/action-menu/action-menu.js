import {NgIf,
  NgFor} from 'angular2/angular2';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Injectable} from 'angular2/di';
import {Icon} from 'ionic/ionic';
import {IonicApp} from '../app/app';
import * as util from 'ionic/util';
import {Overlay} from '../overlay/overlay';
import {IonicComponent} from '../../config/component';
import {Animation} from 'ionic/animations/animation';
export class ActionMenu extends Overlay {
  static get config() {
    return {
      selector: 'ion-action-menu',
      host: {'[style.z-index]': 'zIndex'}
    };
  }
  constructor(app) {
    super(app);
    this.extendOptions({
      destructiveButtonClicked: util.noop,
      buttonClicked: util.noop,
      cancel: util.noop,
      enterAnimation: 'action-menu-slide-in',
      leaveAnimation: 'action-menu-slide-out'
    });
  }
  cancel() {
    this.options.cancel();
    this.close();
  }
  _destructiveButtonClicked() {
    let shouldClose = this.options.destructiveButtonClicked();
    if (shouldClose === true) {
      return this.close();
    }
  }
  _buttonClicked(index) {
    let shouldClose = this.options.buttonClicked(index);
    if (shouldClose === true) {
      return this.close();
    }
  }
  open(opts) {
    return this.create(OVERLAY_TYPE, ActionMenu, opts);
  }
  get() {
    return Modal.getByType(OVERLAY_TYPE);
  }
}
Object.defineProperty(ActionMenu, "annotations", {get: function() {
    return [new IonicComponent(ActionMenu), new View({
      template: `
    <div class="action-menu-backdrop" (click)="cancel()"></div>
    <div class="action-menu-wrapper">
      <div class="action-menu-container">
        <div class="action-menu-group action-menu-options">
          <div class="action-menu-title" *ng-if="options.titleText">{{options.titleText}}</div>
          <button (click)="_buttonClicked(index)" *ng-for="#b of options.buttons; #index = index" class="action-menu-option">{{b.text}}</button>
          <button *ng-if="options.destructiveText" (click)="_destructiveButtonClicked()" class="destructive action-menu-destructive">{{options.destructiveText}}</button>
        </div>
        <div class="action-menu-group action-menu-cancel" *ng-if="options.cancelText">
          <button (click)="cancel()">{{options.cancelText}}</button>
        </div>
      </div>
    </div>`,
      directives: [Icon, NgIf, NgFor]
    }), new Injectable()];
  }});
Object.defineProperty(ActionMenu, "parameters", {get: function() {
    return [[IonicApp]];
  }});
const OVERLAY_TYPE = 'actionmenu';
class ActionMenuAnimation extends Animation {
  constructor(element) {
    super(element);
    this.easing('cubic-bezier(.36, .66, .04, 1)').duration(400);
    this.backdrop = new Animation(element.querySelector('.action-menu-backdrop'));
    this.wrapper = new Animation(element.querySelector('.action-menu-wrapper'));
    this.add(this.backdrop, this.wrapper);
  }
}
class ActionMenuSlideIn extends ActionMenuAnimation {
  constructor(element) {
    super(element);
    this.backdrop.fromTo('opacity', 0, 0.4);
    this.wrapper.fromTo('translateY', '100%', '0%');
  }
}
Animation.register('action-menu-slide-in', ActionMenuSlideIn);
class ActionMenuSlideOut extends ActionMenuAnimation {
  constructor(element) {
    super(element);
    this.backdrop.fromTo('opacity', 0.4, 0);
    this.wrapper.fromTo('translateY', '0%', '100%');
  }
}
Animation.register('action-menu-slide-out', ActionMenuSlideOut);