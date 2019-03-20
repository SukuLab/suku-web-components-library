/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\">\n    <span class=\"sort-by mt-3 mr-3\"> SORT BY </span>\n  </div>\n  <span [class]=\"customclass\">\n    <select class=\"custom-select optionsBox\" id=\"inputGroupSelect03\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\n      <option id=\"default\" value=\"default\" disabled>Choose sort method</option>\n      <option *ngFor=\"let option of options;let i=index\" id=\"{{option.value}}\" value=\"{{option.value}}\">{{option.name}}</option>\n    </select>\n  </span>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBU3BDO1FBUlMsU0FBSSxHQUFHLGNBQWMsQ0FBQztRQUtyQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtTQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXBDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNGpCQUFpRDs7YUFFakQ7Ozs7O21CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxNQUFNO3NCQUNOLEtBQUs7Ozs7SUFOTix3Q0FBK0I7O0lBQy9CLHdDQUFjOztJQUNkLHlDQUFlOztJQUNmLDBDQUFnQjs7SUFDaEIsK0NBQXFCOztJQUNyQix3Q0FBb0M7O0lBQ3BDLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1zZWxlY3QtaW5wdXQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNlbGVjdElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgbmFtZSA9ICdBREQgSU5URVJFU1QnO1xuXHRASW5wdXQoKSBzaXplO1xuXHRASW5wdXQoKSBjb2xvcjtcblx0QElucHV0KCkgd2VpZ2h0O1xuXHRASW5wdXQoKSBjdXN0b21jbGFzcztcblx0QE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMub3B0aW9ucyA9IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ01hdGNoZXMtTG93IHRvIEhpZ2gnLFxuXHRcdFx0XHR2YWx1ZTogJzAnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnTWF0Y2hlcy1IaWdoIHRvIExvdycsXG5cdFx0XHRcdHZhbHVlOiAnMSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdaIHRvIEEnLFxuXHRcdFx0XHR2YWx1ZTogJzInXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQSB0byBaJyxcblx0XHRcdFx0dmFsdWU6ICczJ1xuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxufVxuIl19