/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var SukuConfirmationComponent = /** @class */ (function () {
    function SukuConfirmationComponent(dialogCustomRef, data) {
        this.dialogCustomRef = dialogCustomRef;
        this.data = data;
        this.dialogData = {
            'icon': 'fa fa-question',
            'iconCustomClass': '',
            'iconId': 'questionIcon',
            'titleOne': 'Test',
            'titleOneId': 'confirmation',
            'titleOneCustomClass': '',
            'titleTwo': '',
            'titleTwoId': '',
            'titleTwoCustomClass': '',
            'titleThree': '',
            'titleThreeId': '',
            'titleThreeCustomClass': '',
            'titleBoxCustomClass': '',
            'buttonLableOne': 'Cancel',
            'buttonLableOneId': '',
            'buttonLableTwo': 'Submit',
            'buttonLableTwoId': '',
            'buttonCustomClass': ''
        };
    }
    /**
     * @return {?}
     */
    SukuConfirmationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        console.log('Current data', this.data);
        try {
            for (var _b = tslib_1.__values(Object.keys(this.data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (this.data[key]) {
                    console.log(this.data[key], key);
                    // if (this.dialogData[this.data[key]]) {
                    this.dialogData[key] = this.data[key];
                    // }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log('dialogData', this.dialogData);
    };
    /**
     * @return {?}
     */
    SukuConfirmationComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.dialogCustomRef.close(false);
    };
    /**
     * @return {?}
     */
    SukuConfirmationComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.dialogCustomRef.close(true);
    };
    SukuConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-confirmation',
                    template: "<div class=\"col p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col pt-3\">\n              <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" id=\"iconId\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pb-3 pt-3\">\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3 {{dialogData?.titleOneCustomClass}}\">\n                {{ dialogData?.titleOne }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"col p-0\">\n    <h2 class=\"col maincontent pt-4 mb-1 text-center {{dialogData?.titleTwoCustomClass}}\"\n      id=\"{{ dialogData?.titleTwoId }}\">\n      {{ dialogData?.titleTwo }}\n    </h2>\n    <h2 class=\" col subcontent mb-2 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      {{ dialogData?.titleThree }}\n    </h2>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center pb-3\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 offset-lg-1 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableOneId }}\"\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\n          (click)=\"cancel()\" tabindex=\"-1\">\n          {{ dialogData?.buttonLableOne }}\n        </button>\n      </div>\n      <div class=\"col-lg-5 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" tabindex=\"1\" (click)=\"submit()\" id=\"{{ dialogData?.buttonLableTwoId }}\" mat-dialog-close\n          class=\"btn btn-info center-block w-70 {{dialogData?.buttonCustomClass}}\">\n          {{ dialogData?.buttonLableTwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);margin:0}.title{font-family:var(--suku-primary-font)!important;color:#fff!important;font-size:20px;font-weight:300}.icon{font-size:50px;color:#a7bf2e}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font)!important;font-size:17px;letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font)!important;font-size:17px;letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.w-70{min-width:70%}"]
                }] }
    ];
    /** @nocollapse */
    SukuConfirmationComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    SukuConfirmationComponent.propDecorators = {
        dialogData: [{ type: Input }]
    };
    return SukuConfirmationComponent;
}());
export { SukuConfirmationComponent };
if (false) {
    /** @type {?} */
    SukuConfirmationComponent.prototype.dialogData;
    /** @type {?} */
    SukuConfirmationComponent.prototype.dialogCustomRef;
    /** @type {?} */
    SukuConfirmationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFO0lBMEJFLG1DQUFtQixlQUF3RCxFQUN6QyxJQUFTO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUF5QztRQUN6QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBckJsQyxlQUFVLEdBQUc7WUFDcEIsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFlBQVksRUFBRSxjQUFjO1lBQzVCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLHVCQUF1QixFQUFFLEVBQUU7WUFDM0IscUJBQXFCLEVBQUUsRUFBRTtZQUN6QixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLEVBQUU7U0FDeEIsQ0FBQztJQUU2QyxDQUFDOzs7O0lBRWhELDRDQUFROzs7SUFBUjs7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ3ZDLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBckMsSUFBTSxHQUFHLFdBQUE7Z0JBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLHlDQUF5QztvQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxJQUFJO2lCQUNMO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsMENBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELDBDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isd21FQUFpRDs7aUJBRWxEOzs7O2dCQU5RLFlBQVk7Z0RBNkJoQixNQUFNLFNBQUMsZUFBZTs7OzZCQXJCeEIsS0FBSzs7SUE0Q1IsZ0NBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTdDWSx5QkFBeUI7OztJQUNwQywrQ0FtQkU7O0lBQ1Usb0RBQStEOztJQUN6RSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcbiAgICAnaWNvbic6ICdmYSBmYS1xdWVzdGlvbicsXG4gICAgJ2ljb25DdXN0b21DbGFzcyc6ICcnLFxuICAgICdpY29uSWQnOiAncXVlc3Rpb25JY29uJyxcbiAgICAndGl0bGVPbmUnOiAnVGVzdCcsXG4gICAgJ3RpdGxlT25lSWQnOiAnY29uZmlybWF0aW9uJyxcbiAgICAndGl0bGVPbmVDdXN0b21DbGFzcyc6ICcnLFxuICAgICd0aXRsZVR3byc6ICcnLFxuICAgICd0aXRsZVR3b0lkJzogJycsXG4gICAgJ3RpdGxlVHdvQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAndGl0bGVUaHJlZSc6ICcnLFxuICAgICd0aXRsZVRocmVlSWQnOiAnJyxcbiAgICAndGl0bGVUaHJlZUN1c3RvbUNsYXNzJzogJycsXG4gICAgJ3RpdGxlQm94Q3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnYnV0dG9uTGFibGVPbmUnOiAnQ2FuY2VsJyxcbiAgICAnYnV0dG9uTGFibGVPbmVJZCc6ICcnLFxuICAgICdidXR0b25MYWJsZVR3byc6ICdTdWJtaXQnLFxuICAgICdidXR0b25MYWJsZVR3b0lkJzogJycsXG4gICAgJ2J1dHRvbkN1c3RvbUNsYXNzJzogJydcbiAgfTtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ0N1c3RvbVJlZjogTWF0RGlhbG9nUmVmPFN1a3VDb25maXJtYXRpb25Db21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBkYXRhJywgdGhpcy5kYXRhKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2tleV0pIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhW2tleV0sIGtleSk7XG4gICAgICAgIC8vIGlmICh0aGlzLmRpYWxvZ0RhdGFbdGhpcy5kYXRhW2tleV1dKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nRGF0YVtrZXldID0gdGhpcy5kYXRhW2tleV07XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2RpYWxvZ0RhdGEnLCB0aGlzLmRpYWxvZ0RhdGEpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZSh0cnVlKTtcbiAgfVxuXG59XG4iXX0=