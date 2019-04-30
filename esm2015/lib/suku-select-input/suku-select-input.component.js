/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuSelectInputComponent {
    constructor() {
        this.name = 'ADD INTEREST';
        this.keyValue = 'value';
        this.displayKey = 'name';
        this.titleText = 'Sort by';
        this.placeHolder = 'Choose sort method';
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
    ngOnInit() {
    }
}
SukuSelectInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-select-input',
                template: "<div class=\"form-group\">\n  <div class=\"select-out input-group\">\n    <label for=\"select\" id=\"sortBy\" class=\"sort-by col-sm-2 p-0 mt-3 mb-0 mr-3\">{{titleText}}</label>\n    <span [class]=\"customclass\">\n      <select class=\"optionsBox form-control fcontrol mt-1\" id=\"interestTwo\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\n        <option id=\"default\" value=\"default\" disabled>{{placeHolder}}</option>\n        <option *ngFor=\"let option of options;let i=index\" id=\"{{option[keyValue]}}\" value=\"{{option[keyValue]}}\">{{option[displayKey]}}</option>\n      </select>\n      <!-- <i class=\"fa fa-chevron-down\"></i> -->\n      <img class = \"image\" height=\"18\"  src=\"../assets/images/arrow-icon.png\" width=\"20\">\n    </span>\n  </div>\n</div>\n",
                styles: [".custom-select{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.01px;color:#3e3e3e;text-transform:uppercase;background-color:#f2f2f2!important;-webkit-appearance:none!important;-moz-appearance:none!important;-o-appearance:none!important}.custom-select:focus{outline:0;box-shadow:none}.optionsBox{letter-spacing:-.01px;text-transform:uppercase;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none}.sort-by{font-family:Poppins,sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#b6b6b6;text-transform:uppercase}.optionsBox{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:36px!important;text-transform:lowercase;border-radius:0}.default{width:281px}select+img.image{float:right;margin-top:-27px;margin-right:5px;pointer-events:none;background-color:transparent;padding-right:5px}"]
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
    SukuSelectInputComponent.prototype.sort;
    /** @type {?} */
    SukuSelectInputComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBZ0JwQztRQWZTLFNBQUksR0FBRyxjQUFjLENBQUM7UUFLdEIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNuQixlQUFVLEdBQUcsTUFBTSxDQUFBO1FBQ25CLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQzs7OztRQUlsQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtTQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQTNDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isb3lCQUFpRDs7YUFFakQ7Ozs7O21CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUlMLE1BQU07c0JBQ04sS0FBSzs7OztJQWJOLHdDQUErQjs7SUFDL0Isd0NBQWM7O0lBQ2QseUNBQWU7O0lBQ2YsMENBQWdCOztJQUNoQiwrQ0FBcUI7O0lBQ3JCLDRDQUE0Qjs7SUFDNUIsOENBQTRCOztJQUM1Qiw2Q0FBK0I7O0lBQy9CLCtDQUE0Qzs7SUFJNUMsd0NBQW9DOztJQUNwQywyQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3Utc2VsZWN0LWlucHV0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTZWxlY3RJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIG5hbWUgPSAnQUREIElOVEVSRVNUJztcblx0QElucHV0KCkgc2l6ZTtcblx0QElucHV0KCkgY29sb3I7XG5cdEBJbnB1dCgpIHdlaWdodDtcblx0QElucHV0KCkgY3VzdG9tY2xhc3M7XG5cdEBJbnB1dCgpIGtleVZhbHVlID0gJ3ZhbHVlJztcblx0QElucHV0KCkgZGlzcGxheUtleSA9ICduYW1lJ1xuXHRASW5wdXQoKSB0aXRsZVRleHQgPSAnU29ydCBieSc7XG5cdEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJ0Nob29zZSBzb3J0IG1ldGhvZCc7XG5cdC8vIEBJbnB1dCgpIGltZ2hlaWdodCA9ICcxOCc7XG5cdC8vIEBJbnB1dCgpIGltZ3dpZHRoID0gJzIwJztcblx0Ly8gQElucHV0KCkgaW1ndXJsID0gJy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctaWNvbi5wbmcnO1xuXHRAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgb3B0aW9uczogYW55W107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnTWF0Y2hlcy1Mb3cgdG8gSGlnaCcsXG5cdFx0XHRcdHZhbHVlOiAnMCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdNYXRjaGVzLUhpZ2ggdG8gTG93Jyxcblx0XHRcdFx0dmFsdWU6ICcxJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ1ogdG8gQScsXG5cdFx0XHRcdHZhbHVlOiAnMidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdBIHRvIFonLFxuXHRcdFx0XHR2YWx1ZTogJzMnXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG59XG4iXX0=