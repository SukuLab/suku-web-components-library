/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuSelectInputComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuSelectInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-select-input',
                template: "<div class=\"form-group\">\n  <div class=\"select-out input-group\">\n    <label for=\"select\" id=\"sortBy\" class=\"sort-by col-sm-2 p-0 mt-3 mb-0 mr-3\">Sort by</label>\n    <span [class]=\"customclass\">\n      <select class=\"optionsBox form-control fcontrol mt-1\" id=\"interestTwo\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\n        <option id=\"default\" value=\"default\" disabled>Choose sort method </option>\n        <option *ngFor=\"let option of options;let i=index\" id=\"{{option.value}}\" value=\"{{option.value}}\">{{option.name}}</option>\n      </select>\n      <!-- <i class=\"fa fa-chevron-down\"></i> -->\n      <img class = \"image\" height=\"18\"  src=\"../assets/images/arrow-icon.png\" width=\"20\">\n    </span>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VsZWN0LWlucHV0L3N1a3Utc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBWXBDO1FBWFMsU0FBSSxHQUFHLGNBQWMsQ0FBQzs7OztRQVFyQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7YUFDVjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2FBQ1Y7WUFDRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNWO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDVjtTQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXZDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbXhCQUFpRDs7YUFFakQ7Ozs7O21CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFJTCxNQUFNO3NCQUNOLEtBQUs7Ozs7SUFUTix3Q0FBK0I7O0lBQy9CLHdDQUFjOztJQUNkLHlDQUFlOztJQUNmLDBDQUFnQjs7SUFDaEIsK0NBQXFCOztJQUlyQix3Q0FBb0M7O0lBQ3BDLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1zZWxlY3QtaW5wdXQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1zZWxlY3QtaW5wdXQuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNlbGVjdElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgbmFtZSA9ICdBREQgSU5URVJFU1QnO1xuXHRASW5wdXQoKSBzaXplO1xuXHRASW5wdXQoKSBjb2xvcjtcblx0QElucHV0KCkgd2VpZ2h0O1xuXHRASW5wdXQoKSBjdXN0b21jbGFzcztcblx0Ly8gQElucHV0KCkgaW1naGVpZ2h0ID0gJzE4Jztcblx0Ly8gQElucHV0KCkgaW1nd2lkdGggPSAnMjAnO1xuXHQvLyBASW5wdXQoKSBpbWd1cmwgPSAnLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1pY29uLnBuZyc7XG5cdEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoKSBvcHRpb25zOiBhbnlbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdNYXRjaGVzLUxvdyB0byBIaWdoJyxcblx0XHRcdFx0dmFsdWU6ICcwJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ01hdGNoZXMtSGlnaCB0byBMb3cnLFxuXHRcdFx0XHR2YWx1ZTogJzEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnWiB0byBBJyxcblx0XHRcdFx0dmFsdWU6ICcyJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ0EgdG8gWicsXG5cdFx0XHRcdHZhbHVlOiAnMydcblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cbn1cbiJdfQ==