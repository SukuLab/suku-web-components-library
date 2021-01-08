/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-select-input/suku-select-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuSelectInputComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuSelectInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-select-input',
                template: "<div class=\"form-group\">\n  <div class=\"select-out input-group\">\n    <label for=\"select\" id=\"sortBy\" class=\"sort-by col-sm-2 p-0 m-auto mb-0 mr-3\">{{titleText}}</label>\n    <span class=\"{{customclass}} p-xs-0\">\n      <select class=\"optionsBox form-control fcontrol mt-1\" id=\"interestTwo\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\n        <option id=\"default\" value=\"default\" disabled>{{placeHolder}}</option>\n        <option *ngFor=\"let option of options;let i=index\" id=\"{{option[keyValue]}}\" value=\"{{option[keyValue]}}\">{{option[displayKey]}}</option>\n      </select>\n        <i class=\"{{icon}} {{iconCustomClass}} dropdown-icon\" id=\"{{iconId}}\" *ngIf=\"icon\" ></i>\n      </span>\n      <img class=\"{{imageCustomClass}}\" [height]=\"imgheight\"  [src]=\"imgurl\" [width]=\"imgwidth\" *ngIf=\"imgurl\">\n  </div>\n</div>\n",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.sort-by{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one);text-transform:uppercase}.optionsBox{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:44px!important;text-transform:lowercase;border:1px solid rgba(151,151,151,.23);background-color:#fff}.optionsBox:focus{background-color:#fff!important}.default{width:281px}select+img.image{float:right;margin-top:-30px;margin-right:5px;pointer-events:none;background-color:#fff;padding-right:5px}select+i.dropdown-icon{float:right;margin-top:-30px;margin-right:4px;pointer-events:none;font-size:large}select:focus{background-color:#fff!important;outline:0!important}@media (max-width:486px){.p-xs-0{padding:0}}select::-ms-expand{display:none}select{-moz-appearance:none;-webkit-appearance:none;appearance:none}"]
            }] }
];
/** @nocollapse */
SukuSelectInputComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHdCQUF3QjtJQW9CcEM7UUFuQlMsU0FBSSxHQUFHLGNBQWMsQ0FBQztRQUt0QixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxNQUFNLENBQUE7UUFDbkIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1MscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUN0QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ0Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDeEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJbkMsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxHQUFHO2FBQ1Y7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUEvQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDQzQkFBaUQ7O2FBRWpEOzs7OzttQkFFQyxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzsrQkFDSixLQUFLLFNBQUMsb0JBQW9CO21CQUMxQixLQUFLLFNBQUMsTUFBTTtxQkFDWixLQUFLLFNBQUMsU0FBUzs4QkFDZixLQUFLLFNBQUMsbUJBQW1CO21CQUMxQixNQUFNO3NCQUNOLEtBQUs7Ozs7SUFqQk4sd0NBQStCOztJQUMvQix3Q0FBYzs7SUFDZCx5Q0FBZTs7SUFDZiwwQ0FBZ0I7O0lBQ2hCLCtDQUFxQjs7SUFDckIsNENBQTRCOztJQUM1Qiw4Q0FBNEI7O0lBQzVCLDZDQUErQjs7SUFDL0IsK0NBQTRDOztJQUM1Qyw2Q0FBMEI7O0lBQzFCLDRDQUF5Qjs7SUFDekIsMENBQXFCOztJQUNwQixvREFBbUQ7O0lBQ25ELHdDQUF3Qzs7SUFDeEMsMENBQThCOztJQUM5QixtREFBaUQ7O0lBQ2xELHdDQUFvQzs7SUFDcEMsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXNlbGVjdC1pbnB1dCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNlbGVjdC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXNlbGVjdC1pbnB1dC5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1U2VsZWN0SW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBuYW1lID0gJ0FERCBJTlRFUkVTVCc7XG5cdEBJbnB1dCgpIHNpemU7XG5cdEBJbnB1dCgpIGNvbG9yO1xuXHRASW5wdXQoKSB3ZWlnaHQ7XG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzO1xuXHRASW5wdXQoKSBrZXlWYWx1ZSA9ICd2YWx1ZSc7XG5cdEBJbnB1dCgpIGRpc3BsYXlLZXkgPSAnbmFtZSdcblx0QElucHV0KCkgdGl0bGVUZXh0ID0gJ1NvcnQgYnknO1xuXHRASW5wdXQoKSBwbGFjZUhvbGRlciA9ICdDaG9vc2Ugc29ydCBtZXRob2QnO1xuXHRASW5wdXQoKSBpbWdoZWlnaHQgPSAnMTgnO1xuXHRASW5wdXQoKSBpbWd3aWR0aCA9ICcyMCc7XG5cdEBJbnB1dCgpIGltZ3VybCA9ICcnO1xuICBASW5wdXQoJ2ltYWdlLWN1c3RvbS1jbGFzcycpIGltYWdlQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdpY29uJykgaWNvbiA9ICdzdWt1LWFycm93LWljb24nO1xuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnJztcbiAgQElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICcnO1xuXHRAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgb3B0aW9uczogYW55W107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnTWF0Y2hlcy1Mb3cgdG8gSGlnaCcsXG5cdFx0XHRcdHZhbHVlOiAnMCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdNYXRjaGVzLUhpZ2ggdG8gTG93Jyxcblx0XHRcdFx0dmFsdWU6ICcxJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ1ogdG8gQScsXG5cdFx0XHRcdHZhbHVlOiAnMidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdBIHRvIFonLFxuXHRcdFx0XHR2YWx1ZTogJzMnXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG59XG4iXX0=