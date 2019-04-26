/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuSelectInputComponent = /** @class */ (function () {
    function SukuSelectInputComponent() {
        this.name = 'ADD INTEREST';
        // @Input() imgheight = '18';
        // @Input() imgwidth = '20';
        // @Input() imgurl = '../assets/images/arrow-icon.png';
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
                    template: "<div class=\"form-group\">\n  <div class=\"select-out input-group\">\n    <label for=\"select\" id=\"sortBy\" class=\"sort-by col-sm-2 p-0 mt-3 mb-0 mr-3\">Sort by</label>\n    <span [class]=\"customclass\">\n      <select class=\"optionsBox form-control fcontrol mt-1\" id=\"interestTwo\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\n        <option id=\"default\" value=\"default\" disabled>Choose sort method </option>\n        <option *ngFor=\"let option of options;let i=index\" id=\"{{option.value}}\" value=\"{{option.value}}\">{{option.name}}</option>\n      </select>\n      <!-- <i class=\"fa fa-chevron-down\"></i> -->\n      <img class = \"image\" height=\"18\"  src=\"../assets/images/arrow-icon.png\" width=\"20\">\n    </span>\n  </div>\n</div>\n",
                    styles: [".custom-select{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.01px;color:#3e3e3e;text-transform:uppercase;background-color:#f2f2f2!important;-webkit-appearance:none!important;-moz-appearance:none!important;-o-appearance:none!important}.custom-select:focus{outline:0;box-shadow:none}.optionsBox{letter-spacing:-.01px;text-transform:uppercase;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none}.sort-by{font-family:Poppins,sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#b6b6b6;text-transform:uppercase}.optionsBox{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:36px!important;text-transform:lowercase;border-radius:0}.default{width:281px}select+img.image{float:right;margin-top:-27px;margin-right:5px;pointer-events:none;background-color:transparent;padding-right:5px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWlCQztRQVhTLFNBQUksR0FBRyxjQUFjLENBQUM7Ozs7UUFRckIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJbkMsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxHQUFHO2FBQ1Y7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXZDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbXhCQUFpRDs7aUJBRWpEOzs7Ozt1QkFFQyxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBSUwsTUFBTTswQkFDTixLQUFLOztJQXlCUCwrQkFBQztDQUFBLEFBeENELElBd0NDO1NBbkNZLHdCQUF3Qjs7O0lBQ3BDLHdDQUErQjs7SUFDL0Isd0NBQWM7O0lBQ2QseUNBQWU7O0lBQ2YsMENBQWdCOztJQUNoQiwrQ0FBcUI7O0lBSXJCLHdDQUFvQzs7SUFDcEMsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXNlbGVjdC1pbnB1dCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNlbGVjdC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXNlbGVjdC1pbnB1dC5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1U2VsZWN0SW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBuYW1lID0gJ0FERCBJTlRFUkVTVCc7XG5cdEBJbnB1dCgpIHNpemU7XG5cdEBJbnB1dCgpIGNvbG9yO1xuXHRASW5wdXQoKSB3ZWlnaHQ7XG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzO1xuXHQvLyBASW5wdXQoKSBpbWdoZWlnaHQgPSAnMTgnO1xuXHQvLyBASW5wdXQoKSBpbWd3aWR0aCA9ICcyMCc7XG5cdC8vIEBJbnB1dCgpIGltZ3VybCA9ICcuLi9hc3NldHMvaW1hZ2VzL2Fycm93LWljb24ucG5nJztcblx0QE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMub3B0aW9ucyA9IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ01hdGNoZXMtTG93IHRvIEhpZ2gnLFxuXHRcdFx0XHR2YWx1ZTogJzAnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnTWF0Y2hlcy1IaWdoIHRvIExvdycsXG5cdFx0XHRcdHZhbHVlOiAnMSdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdaIHRvIEEnLFxuXHRcdFx0XHR2YWx1ZTogJzInXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQSB0byBaJyxcblx0XHRcdFx0dmFsdWU6ICczJ1xuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxufVxuIl19