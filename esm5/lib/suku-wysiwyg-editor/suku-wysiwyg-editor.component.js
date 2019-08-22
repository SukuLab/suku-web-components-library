/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuWysiwygEditorComponent = /** @class */ (function () {
    function SukuWysiwygEditorComponent() {
        this.control = 'productTraceability';
        this.placeholder = 'Enter text';
        this.moduleConfig = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],
                // [ { size: [ 'small', false, 'large', 'huge' ] } ], // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                ['clean'] // remove formatting button
            ]
        };
    }
    /**
     * @return {?}
     */
    SukuWysiwygEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} data
     * @return {?}
     */
    SukuWysiwygEditorComponent.prototype.onContentChanged = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log(data.html);
    };
    SukuWysiwygEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-wysiwyg-editor',
                    template: "<span [formGroup]=\"form\">\n  <quill-editor [modules]=\"moduleConfig\" \n  placeholder=\"{{placeholder}}\" formControlName=\"{{control}}\" [(ngModel)]=\"htmlQuillContent\" (onContentChanged)=\"onContentChanged($event)\">\n  </quill-editor>\n</span>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SukuWysiwygEditorComponent.ctorParameters = function () { return []; };
    SukuWysiwygEditorComponent.propDecorators = {
        form: [{ type: Input }],
        control: [{ type: Input }],
        placeholder: [{ type: Input }]
    };
    return SukuWysiwygEditorComponent;
}());
export { SukuWysiwygEditorComponent };
if (false) {
    /** @type {?} */
    SukuWysiwygEditorComponent.prototype.htmlQuillContent;
    /** @type {?} */
    SukuWysiwygEditorComponent.prototype.form;
    /** @type {?} */
    SukuWysiwygEditorComponent.prototype.control;
    /** @type {?} */
    SukuWysiwygEditorComponent.prototype.placeholder;
    /** @type {?} */
    SukuWysiwygEditorComponent.prototype.moduleConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDO0lBK0JDO1FBdEJTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLFlBQVksQ0FBQztRQUM3QixpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUixDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBRTtnQkFDM0MsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUU5QixDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO2dCQUNoQyxDQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFFO2dCQUMzQyxDQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFFO2dCQUMxQyxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUN0QyxDQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLENBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFO2dCQUUzQyxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNyQyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNoQixDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNqQixDQUFFLE9BQU8sQ0FBRSxDQUFDLDJCQUEyQjthQUN2QztTQUNELENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLDZDQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7O0lBRWQscURBQWdCOzs7O0lBQWhCLFVBQWlCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBckNELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixxUUFBbUQ7O2lCQUVwRDs7Ozs7dUJBSUUsS0FBSzswQkFDTixLQUFLOzhCQUNMLEtBQUs7O0lBNkJQLGlDQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FsQ1ksMEJBQTBCOzs7SUFFckMsc0RBQWlCOztJQUNqQiwwQ0FBeUI7O0lBQzFCLDZDQUF5Qzs7SUFDekMsaURBQW9DOztJQUNwQyxrREFtQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3Utd3lzaXd5Zy1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3Utd3lzaXd5Zy1lZGl0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1V3lzaXd5Z0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaHRtbFF1aWxsQ29udGVudDtcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBjb250cm9sID0gJ3Byb2R1Y3RUcmFjZWFiaWxpdHknO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdFbnRlciB0ZXh0Jztcblx0cHVibGljIG1vZHVsZUNvbmZpZyA9IHtcblx0XHR0b29sYmFyOiBbXG5cdFx0XHRbICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJyBdLCAvLyB0b2dnbGVkIGJ1dHRvbnNcblx0XHRcdFsgJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jaycgXSxcblxuXHRcdFx0WyB7IGhlYWRlcjogMSB9LCB7IGhlYWRlcjogMiB9IF0sIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXG5cdFx0XHRbIHsgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfSBdLFxuXHRcdFx0WyB7IHNjcmlwdDogJ3N1YicgfSwgeyBzY3JpcHQ6ICdzdXBlcicgfSBdLCAvLyBzdXBlcnNjcmlwdC9zdWJzY3JpcHRcblx0XHRcdFsgeyBpbmRlbnQ6ICctMScgfSwgeyBpbmRlbnQ6ICcrMScgfSBdLCAvLyBvdXRkZW50L2luZGVudFxuXHRcdFx0WyB7IGRpcmVjdGlvbjogJ3J0bCcgfSBdLCAvLyB0ZXh0IGRpcmVjdGlvblxuXG5cdFx0XHQvLyBbIHsgc2l6ZTogWyAnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnIF0gfSBdLCAvLyBjdXN0b20gZHJvcGRvd25cblx0XHRcdFsgeyBoZWFkZXI6IFsgMSwgMiwgMywgNCwgNSwgNiwgZmFsc2UgXSB9IF0sXG5cblx0XHRcdFsgeyBjb2xvcjogW10gfSwgeyBiYWNrZ3JvdW5kOiBbXSB9IF0sIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuXHRcdFx0WyB7IGZvbnQ6IFtdIH0gXSxcblx0XHRcdFsgeyBhbGlnbjogW10gfSBdLFxuXHRcdFx0WyAnY2xlYW4nIF0gLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXG5cdFx0XVxuXHR9O1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XHR9XG5cblx0b25Db250ZW50Q2hhbmdlZChkYXRhKSB7XG5cdFx0Y29uc29sZS5sb2coZGF0YS5odG1sKTtcblx0fVxuXG59XG4iXX0=