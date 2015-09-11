System.register("pages/device-motion", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, __decorate, __metadata, DeviceMotionPage;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            DeviceMotionPage = function DeviceMotionPage() {
                _classCallCheck(this, DeviceMotionPage);
            };

            _export("DeviceMotionPage", DeviceMotionPage);

            _export("DeviceMotionPage", DeviceMotionPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar>\n    <button aside-toggle>\n      <icon menu></icon>\n    </button>\n    <ion-title>Device Motion</ion-title>\n  </ion-navbar>\n  <ion-content class=\"padding\">\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [])], DeviceMotionPage));
        }
    };
});