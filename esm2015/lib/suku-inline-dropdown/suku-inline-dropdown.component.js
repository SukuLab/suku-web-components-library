/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class SukuInlineDropdownComponent {
    constructor() {
        this.size = '14';
        this.color = '#757575';
        this.weight = '600';
        this.id = '';
        this.customClass = 'pr-2 c-pointer';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuInlineDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-inline-dropdown',
                template: "<span class=\"row\" (click)=\"action.emit()\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n   <ng-content></ng-content>\r\n  </h2>\r\n  <i class=\"fa fa-chevron-circle-down f17\" style=\"color:#a7bf2e\"></i>\r\n </span>\r\n",
                styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.f17{font-size:17px}.c-pointer{cursor:pointer!important}"]
            }] }
];
/** @nocollapse */
SukuInlineDropdownComponent.ctorParameters = () => [];
SukuInlineDropdownComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    id: [{ type: Input }],
    customClass: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.size;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.color;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.weight;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.id;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.customClass;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmxpbmUtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaW5saW5lLWRyb3Bkb3duL3N1a3UtaW5saW5lLWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8sMkJBQTJCO0lBUXRDO1FBUFEsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQzlCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXJCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsdVVBQW9EOzthQUVyRDs7Ozs7bUJBRUMsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7aUJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFMUCwyQ0FBcUI7O0lBQ3JCLDRDQUEyQjs7SUFDM0IsNkNBQXdCOztJQUN4Qix5Q0FBaUI7O0lBQ2pCLGtEQUF3Qzs7SUFDeEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtaW5saW5lLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1pbmxpbmUtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtaW5saW5lLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VJbmxpbmVEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgc2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCkgY29sb3IgPSAnIzc1NzU3NSc7XHJcblx0QElucHV0KCkgd2VpZ2h0ID0gJzYwMCc7XHJcblx0QElucHV0KCkgaWQgPSAnJztcclxuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwci0yIGMtcG9pbnRlcic7XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=