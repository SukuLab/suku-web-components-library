/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuSelectInputComponent = /** @class */ (function () {
    function SukuSelectInputComponent() {
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
    SukuSelectInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuSelectInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-select-input',
                    template: "<div class=\"input-group mb-3\">\r\n  <div class=\"input-group-prepend\">\r\n    <span class=\"sort-by mt-2 mr-3\"> SORT BY </span>\r\n  </div>\r\n  <span [class]=\"customclass\">\r\n    <select class=\"custom-select optionsBox\" id=\"inputGroupSelect03\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\r\n      <option id=\"default\" value=\"default\" disabled>Choose sort method</option>\r\n      <option *ngFor=\"let option of options;let i=index\" id=\"{{option.value}}\" value=\"{{option.value}}\">{{option.name}}</option>\r\n    </select>\r\n  </span>\r\n</div>\r\n",
                    styles: [".custom-select{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.01px;color:#3e3e3e;text-transform:uppercase;background-color:#f2f2f2!important}.sort-by{font-family:Poppins,sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#b6b6b6;text-transform:uppercase}.optionsBox{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:36px!important;text-transform:lowercase;border-radius:0;border-color:#cdcdcd}.default{width:281px}.custom-select:focus{outline:0;box-shadow:none}"]
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
    SukuSelectInputComponent.prototype.sort;
    /** @type {?} */
    SukuSelectInputComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWNDO1FBUlMsU0FBSSxHQUFHLGNBQWMsQ0FBQztRQUtyQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtTQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixrbEJBQWlEOztpQkFFakQ7Ozs7O3VCQUVDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxNQUFNOzBCQUNOLEtBQUs7O0lBeUJQLCtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1ksd0JBQXdCOzs7SUFDcEMsd0NBQStCOztJQUMvQix3Q0FBYzs7SUFDZCx5Q0FBZTs7SUFDZiwwQ0FBZ0I7O0lBQ2hCLCtDQUFxQjs7SUFDckIsd0NBQW9DOztJQUNwQywyQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3Utc2VsZWN0LWlucHV0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXNlbGVjdC1pbnB1dC5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVNlbGVjdElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBuYW1lID0gJ0FERCBJTlRFUkVTVCc7XHJcblx0QElucHV0KCkgc2l6ZTtcclxuXHRASW5wdXQoKSBjb2xvcjtcclxuXHRASW5wdXQoKSB3ZWlnaHQ7XHJcblx0QElucHV0KCkgY3VzdG9tY2xhc3M7XHJcblx0QE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgb3B0aW9uczogYW55W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ01hdGNoZXMtTG93IHRvIEhpZ2gnLFxyXG5cdFx0XHRcdHZhbHVlOiAnMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdNYXRjaGVzLUhpZ2ggdG8gTG93JyxcclxuXHRcdFx0XHR2YWx1ZTogJzEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnWiB0byBBJyxcclxuXHRcdFx0XHR2YWx1ZTogJzInXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnQSB0byBaJyxcclxuXHRcdFx0XHR2YWx1ZTogJzMnXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcbn1cclxuIl19