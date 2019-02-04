/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuSelectInputComponent {
    constructor() {
        this.name = 'ADD INTEREST';
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
                template: "<div class=\"input-group mb-3\">\r\n  <div class=\"input-group-prepend\">\r\n    <span class=\"sort-by mt-2 mr-3\"> SORT BY </span>\r\n  </div>\r\n  <span [class]=\"customclass\">\r\n    <select class=\"custom-select optionsBox\" id=\"inputGroupSelect03\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\r\n      <option id=\"default\" value=\"default\" disabled>Choose sort method</option>\r\n      <option *ngFor=\"let option of options;let i=index\" id=\"{{option.value}}\" value=\"{{option.value}}\">{{option.name}}</option>\r\n    </select>\r\n  </span>\r\n</div>\r\n",
                styles: [".custom-select{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.01px;color:#3e3e3e;text-transform:uppercase;background-color:#f2f2f2!important}.sort-by{font-family:Poppins,sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#b6b6b6;text-transform:uppercase}.optionsBox{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:36px!important;text-transform:lowercase;border-radius:0;border-color:#cdcdcd}.default{width:281px}.custom-select:focus{outline:0;box-shadow:none}"]
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
    SukuSelectInputComponent.prototype.sort;
    /** @type {?} */
    SukuSelectInputComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBU3BDO1FBUlMsU0FBSSxHQUFHLGNBQWMsQ0FBQztRQUtyQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtTQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXBDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isa2xCQUFpRDs7YUFFakQ7Ozs7O21CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxNQUFNO3NCQUNOLEtBQUs7Ozs7SUFOTix3Q0FBK0I7O0lBQy9CLHdDQUFjOztJQUNkLHlDQUFlOztJQUNmLDBDQUFnQjs7SUFDaEIsK0NBQXFCOztJQUNyQix3Q0FBb0M7O0lBQ3BDLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1zZWxlY3QtaW5wdXQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNlbGVjdC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1U2VsZWN0SW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIG5hbWUgPSAnQUREIElOVEVSRVNUJztcclxuXHRASW5wdXQoKSBzaXplO1xyXG5cdEBJbnB1dCgpIGNvbG9yO1xyXG5cdEBJbnB1dCgpIHdlaWdodDtcclxuXHRASW5wdXQoKSBjdXN0b21jbGFzcztcclxuXHRAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBvcHRpb25zOiBhbnlbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnTWF0Y2hlcy1Mb3cgdG8gSGlnaCcsXHJcblx0XHRcdFx0dmFsdWU6ICcwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ01hdGNoZXMtSGlnaCB0byBMb3cnLFxyXG5cdFx0XHRcdHZhbHVlOiAnMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdaIHRvIEEnLFxyXG5cdFx0XHRcdHZhbHVlOiAnMidcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdBIHRvIFonLFxyXG5cdFx0XHRcdHZhbHVlOiAnMydcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxufVxyXG4iXX0=