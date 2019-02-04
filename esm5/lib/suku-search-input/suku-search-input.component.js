/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuSearchInputComponent = /** @class */ (function () {
    function SukuSearchInputComponent() {
        this.icon = '../../assets/images/search-icon.svg';
        this.customClass = 'float-right m-2 mr-3 c-pointer';
    }
    /**
     * @return {?}
     */
    SukuSearchInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuSearchInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-search-input',
                    template: "<div id=\"search_container\" class=\"col-sm-3 p-0 d-flex\">\r\n  <input type=\"text\" id=\"search\" class=\"stretch\" value>\r\n  <img src=\"{{icon}}\" [class]=\"customClass\" width=\"6%\" height=\"7%\">\r\n </div>",
                    styles: ["#search_container{border:2px solid #f2f2f2;border-radius:10px 18px 18px 16px}.stretch{flex-grow:1;border:none!important;border-radius:15px}.c-pointer{cursor:pointer!important}input#search{margin-left:15px;height:32px;font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}input:focus{border:none!important;outline:0!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuSearchInputComponent.ctorParameters = function () { return []; };
    SukuSearchInputComponent.propDecorators = {
        formRadio: [{ type: Input }],
        icon: [{ type: Input }],
        customClass: [{ type: Input }]
    };
    return SukuSearchInputComponent;
}());
export { SukuSearchInputComponent };
if (false) {
    /** @type {?} */
    SukuSearchInputComponent.prototype.formRadio;
    /** @type {?} */
    SukuSearchInputComponent.prototype.icon;
    /** @type {?} */
    SukuSearchInputComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VhcmNoLWlucHV0L3N1a3Utc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDO0lBVUU7UUFIUSxTQUFJLEdBQUcscUNBQXFDLENBQUM7UUFDN0MsZ0JBQVcsR0FBRyxnQ0FBZ0MsQ0FBQztJQUV2QyxDQUFDOzs7O0lBRWpCLDJDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixrT0FBaUQ7O2lCQUVsRDs7Ozs7NEJBRUUsS0FBSzt1QkFDTixLQUFLOzhCQUNMLEtBQUs7O0lBT1AsK0JBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSx3QkFBd0I7OztJQUNuQyw2Q0FBOEI7O0lBQy9CLHdDQUFzRDs7SUFDdEQsK0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3Utc2VhcmNoLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3Utc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VTZWFyY2hJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZm9ybVJhZGlvOiBGb3JtR3JvdXA7XHJcbiBASW5wdXQoKSBpY29uID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLWljb24uc3ZnJztcclxuIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2Zsb2F0LXJpZ2h0IG0tMiBtci0zIGMtcG9pbnRlcic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19