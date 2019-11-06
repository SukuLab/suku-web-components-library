/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuSelectInputComponent = /** @class */ (function () {
    function SukuSelectInputComponent() {
        this.name = 'ADD INTEREST';
        this.keyValue = 'value';
        this.displayKey = 'name';
        this.titleText = 'Sort by';
        this.placeHolder = 'Choose sort method';
        this.imgheight = '18';
        this.imgwidth = '20';
        this.imgurl = '';
        this.imageCustomClass = '';
        this.icon = 'suku-arrow-icon';
        this.iconId = '';
        this.iconCustomClass = '';
        this.sort = new EventEmitter();
        this.options = [
            {
                name: 'Matches-Low to High',
                value: '0'
            },
            {
                name: 'Matches-High to Low',
                value: '1'
            },
            {
                name: 'Z to A',
                value: '2'
            },
            {
                name: 'A to Z',
                value: '3'
            }
        ];
    }
    /**
     * @return {?}
     */
    SukuSelectInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuSelectInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-select-input',
                    template: "<div class=\"form-group\">\r\n  <div class=\"select-out input-group\">\r\n    <label for=\"select\" id=\"sortBy\" class=\"sort-by col-sm-2 p-0 m-auto mb-0 mr-3\">{{titleText}}</label>\r\n    <span class=\"{{customclass}} p-xs-0\">\r\n      <select class=\"optionsBox form-control fcontrol mt-1\" id=\"interestTwo\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\r\n        <option id=\"default\" value=\"default\" disabled>{{placeHolder}}</option>\r\n        <option *ngFor=\"let option of options;let i=index\" id=\"{{option[keyValue]}}\" value=\"{{option[keyValue]}}\">{{option[displayKey]}}</option>\r\n      </select>\r\n        <i class=\"{{icon}} {{iconCustomClass}} dropdown-icon\" id=\"{{iconId}}\" *ngIf=\"icon\" ></i>\r\n      </span>\r\n      <img class=\"{{imageCustomClass}}\" [height]=\"imgheight\"  [src]=\"imgurl\" [width]=\"imgwidth\" *ngIf=\"imgurl\">\r\n  </div>\r\n</div>\r\n",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.sort-by{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one);text-transform:uppercase}.optionsBox{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:44px!important;text-transform:lowercase;border:1px solid rgba(151,151,151,.23);background-color:#fff}.optionsBox:focus{background-color:#fff!important}.default{width:281px}select+img.image{float:right;margin-top:-30px;margin-right:5px;pointer-events:none;background-color:#fff;padding-right:5px}select+i.dropdown-icon{float:right;margin-top:-30px;margin-right:4px;pointer-events:none;font-size:large}select:focus{background-color:#fff!important;outline:0!important}@media (max-width:486px){.p-xs-0{padding:0}}select::-ms-expand{display:none}select{-moz-appearance:none;-webkit-appearance:none;appearance:none}"]
                }] }
    ];
    /** @nocollapse */
    SukuSelectInputComponent.ctorParameters = function () { return []; };
    SukuSelectInputComponent.propDecorators = {
        name: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customclass: [{ type: Input }],
        keyValue: [{ type: Input }],
        displayKey: [{ type: Input }],
        titleText: [{ type: Input }],
        placeHolder: [{ type: Input }],
        imgheight: [{ type: Input }],
        imgwidth: [{ type: Input }],
        imgurl: [{ type: Input }],
        imageCustomClass: [{ type: Input, args: ['image-custom-class',] }],
        icon: [{ type: Input, args: ['icon',] }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
        sort: [{ type: Output }],
        options: [{ type: Input }]
    };
    return SukuSelectInputComponent;
}());
export { SukuSelectInputComponent };
if (false) {
    /** @type {?} */
    SukuSelectInputComponent.prototype.name;
    /** @type {?} */
    SukuSelectInputComponent.prototype.size;
    /** @type {?} */
    SukuSelectInputComponent.prototype.color;
    /** @type {?} */
    SukuSelectInputComponent.prototype.weight;
    /** @type {?} */
    SukuSelectInputComponent.prototype.customclass;
    /** @type {?} */
    SukuSelectInputComponent.prototype.keyValue;
    /** @type {?} */
    SukuSelectInputComponent.prototype.displayKey;
    /** @type {?} */
    SukuSelectInputComponent.prototype.titleText;
    /** @type {?} */
    SukuSelectInputComponent.prototype.placeHolder;
    /** @type {?} */
    SukuSelectInputComponent.prototype.imgheight;
    /** @type {?} */
    SukuSelectInputComponent.prototype.imgwidth;
    /** @type {?} */
    SukuSelectInputComponent.prototype.imgurl;
    /** @type {?} */
    SukuSelectInputComponent.prototype.imageCustomClass;
    /** @type {?} */
    SukuSelectInputComponent.prototype.icon;
    /** @type {?} */
    SukuSelectInputComponent.prototype.iconId;
    /** @type {?} */
    SukuSelectInputComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuSelectInputComponent.prototype.sort;
    /** @type {?} */
    SukuSelectInputComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXlCQztRQW5CUyxTQUFJLEdBQUcsY0FBYyxDQUFDO1FBS3RCLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkIsZUFBVSxHQUFHLE1BQU0sQ0FBQTtRQUNuQixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDbkMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDUyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ3RCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDRixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUN4QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtTQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBL0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixzNUJBQWlEOztpQkFFakQ7Ozs7O3VCQUVDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUNKLEtBQUssU0FBQyxvQkFBb0I7dUJBQzFCLEtBQUssU0FBQyxNQUFNO3lCQUNaLEtBQUssU0FBQyxTQUFTO2tDQUNmLEtBQUssU0FBQyxtQkFBbUI7dUJBQzFCLE1BQU07MEJBQ04sS0FBSzs7SUF5QlAsK0JBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTNDWSx3QkFBd0I7OztJQUNwQyx3Q0FBK0I7O0lBQy9CLHdDQUFjOztJQUNkLHlDQUFlOztJQUNmLDBDQUFnQjs7SUFDaEIsK0NBQXFCOztJQUNyQiw0Q0FBNEI7O0lBQzVCLDhDQUE0Qjs7SUFDNUIsNkNBQStCOztJQUMvQiwrQ0FBNEM7O0lBQzVDLDZDQUEwQjs7SUFDMUIsNENBQXlCOztJQUN6QiwwQ0FBcUI7O0lBQ3BCLG9EQUFtRDs7SUFDbkQsd0NBQXdDOztJQUN4QywwQ0FBOEI7O0lBQzlCLG1EQUFpRDs7SUFDbEQsd0NBQW9DOztJQUNwQywyQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3Utc2VsZWN0LWlucHV0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXNlbGVjdC1pbnB1dC5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVNlbGVjdElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBuYW1lID0gJ0FERCBJTlRFUkVTVCc7XHJcblx0QElucHV0KCkgc2l6ZTtcclxuXHRASW5wdXQoKSBjb2xvcjtcclxuXHRASW5wdXQoKSB3ZWlnaHQ7XHJcblx0QElucHV0KCkgY3VzdG9tY2xhc3M7XHJcblx0QElucHV0KCkga2V5VmFsdWUgPSAndmFsdWUnO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlLZXkgPSAnbmFtZSdcclxuXHRASW5wdXQoKSB0aXRsZVRleHQgPSAnU29ydCBieSc7XHJcblx0QElucHV0KCkgcGxhY2VIb2xkZXIgPSAnQ2hvb3NlIHNvcnQgbWV0aG9kJztcclxuXHRASW5wdXQoKSBpbWdoZWlnaHQgPSAnMTgnO1xyXG5cdEBJbnB1dCgpIGltZ3dpZHRoID0gJzIwJztcclxuXHRASW5wdXQoKSBpbWd1cmwgPSAnJztcclxuICBASW5wdXQoJ2ltYWdlLWN1c3RvbS1jbGFzcycpIGltYWdlQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ2ljb24nKSBpY29uID0gJ3N1a3UtYXJyb3ctaWNvbic7XHJcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJyc7XHJcbiAgQElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdNYXRjaGVzLUxvdyB0byBIaWdoJyxcclxuXHRcdFx0XHR2YWx1ZTogJzAnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnTWF0Y2hlcy1IaWdoIHRvIExvdycsXHJcblx0XHRcdFx0dmFsdWU6ICcxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1ogdG8gQScsXHJcblx0XHRcdFx0dmFsdWU6ICcyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0EgdG8gWicsXHJcblx0XHRcdFx0dmFsdWU6ICczJ1xyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG59XHJcbiJdfQ==