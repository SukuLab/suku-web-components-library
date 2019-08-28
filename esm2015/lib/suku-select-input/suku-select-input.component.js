/**
 * @fileoverview added by tsickle
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
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.sort-by{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one);text-transform:uppercase}.optionsBox{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:44px!important;text-transform:lowercase;border:1px solid rgba(151,151,151,.23);background-color:#fff}.optionsBox:focus{background-color:#fff!important}.default{width:281px}select+img.image{float:right;margin-top:-30px;margin-right:5px;pointer-events:none;background-color:#fff;padding-right:5px}select+i.dropdown-icon{float:right;margin-top:-30px;margin-right:4px;pointer-events:none;font-size:large}select:focus{background-color:#fff!important;outline:0!important}@media (max-width:486px){.p-xs-0{padding:0}}select::-ms-expand{display:none}select{-moz-appearance:none;-webkit-appearance:none;appearance:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBb0JwQztRQW5CUyxTQUFJLEdBQUcsY0FBYyxDQUFDO1FBS3RCLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkIsZUFBVSxHQUFHLE1BQU0sQ0FBQTtRQUNuQixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDbkMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDUyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ3RCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDRixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUN4QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtTQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQS9DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNDNCQUFpRDs7YUFFakQ7Ozs7O21CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOytCQUNKLEtBQUssU0FBQyxvQkFBb0I7bUJBQzFCLEtBQUssU0FBQyxNQUFNO3FCQUNaLEtBQUssU0FBQyxTQUFTOzhCQUNmLEtBQUssU0FBQyxtQkFBbUI7bUJBQzFCLE1BQU07c0JBQ04sS0FBSzs7OztJQWpCTix3Q0FBK0I7O0lBQy9CLHdDQUFjOztJQUNkLHlDQUFlOztJQUNmLDBDQUFnQjs7SUFDaEIsK0NBQXFCOztJQUNyQiw0Q0FBNEI7O0lBQzVCLDhDQUE0Qjs7SUFDNUIsNkNBQStCOztJQUMvQiwrQ0FBNEM7O0lBQzVDLDZDQUEwQjs7SUFDMUIsNENBQXlCOztJQUN6QiwwQ0FBcUI7O0lBQ3BCLG9EQUFtRDs7SUFDbkQsd0NBQXdDOztJQUN4QywwQ0FBOEI7O0lBQzlCLG1EQUFpRDs7SUFDbEQsd0NBQW9DOztJQUNwQywyQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3Utc2VsZWN0LWlucHV0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTZWxlY3RJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIG5hbWUgPSAnQUREIElOVEVSRVNUJztcblx0QElucHV0KCkgc2l6ZTtcblx0QElucHV0KCkgY29sb3I7XG5cdEBJbnB1dCgpIHdlaWdodDtcblx0QElucHV0KCkgY3VzdG9tY2xhc3M7XG5cdEBJbnB1dCgpIGtleVZhbHVlID0gJ3ZhbHVlJztcblx0QElucHV0KCkgZGlzcGxheUtleSA9ICduYW1lJ1xuXHRASW5wdXQoKSB0aXRsZVRleHQgPSAnU29ydCBieSc7XG5cdEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJ0Nob29zZSBzb3J0IG1ldGhvZCc7XG5cdEBJbnB1dCgpIGltZ2hlaWdodCA9ICcxOCc7XG5cdEBJbnB1dCgpIGltZ3dpZHRoID0gJzIwJztcblx0QElucHV0KCkgaW1ndXJsID0gJyc7XG4gIEBJbnB1dCgnaW1hZ2UtY3VzdG9tLWNsYXNzJykgaW1hZ2VDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2ljb24nKSBpY29uID0gJ3N1a3UtYXJyb3ctaWNvbic7XG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICcnO1xuICBASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJyc7XG5cdEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoKSBvcHRpb25zOiBhbnlbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdNYXRjaGVzLUxvdyB0byBIaWdoJyxcblx0XHRcdFx0dmFsdWU6ICcwJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ01hdGNoZXMtSGlnaCB0byBMb3cnLFxuXHRcdFx0XHR2YWx1ZTogJzEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnWiB0byBBJyxcblx0XHRcdFx0dmFsdWU6ICcyJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ0EgdG8gWicsXG5cdFx0XHRcdHZhbHVlOiAnMydcblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cbn1cbiJdfQ==