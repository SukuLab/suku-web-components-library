/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuWysiwygEditorComponent {
    constructor() {
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
    ngOnInit() { }
    /**
     * @param {?} data
     * @return {?}
     */
    onContentChanged(data) {
        console.log(data.html);
    }
}
SukuWysiwygEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-wysiwyg-editor',
                template: "<span [formGroup]=\"form\">\r\n  <quill-editor [modules]=\"moduleConfig\" \r\n  placeholder=\"{{placeholder}}\" formControlName=\"{{control}}\" [(ngModel)]=\"htmlQuillContent\" (onContentChanged)=\"onContentChanged($event)\">\r\n  </quill-editor>\r\n</span>",
                styles: [""]
            }] }
];
/** @nocollapse */
SukuWysiwygEditorComponent.ctorParameters = () => [];
SukuWysiwygEditorComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
    placeholder: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTNDLE1BQU0sT0FBTywwQkFBMEI7SUEwQnRDO1FBdEJTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLFlBQVksQ0FBQztRQUM3QixpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUixDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBRTtnQkFDM0MsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUU5QixDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO2dCQUNoQyxDQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFFO2dCQUMzQyxDQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFFO2dCQUMxQyxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUN0QyxDQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLENBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFO2dCQUUzQyxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNyQyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNoQixDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNqQixDQUFFLE9BQU8sQ0FBRSxDQUFDLDJCQUEyQjthQUN2QztTQUNELENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSyxDQUFDOzs7OztJQUVkLGdCQUFnQixDQUFDLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBckNELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw2UUFBbUQ7O2FBRXBEOzs7OzttQkFJRSxLQUFLO3NCQUNOLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUhMLHNEQUFpQjs7SUFDakIsMENBQXlCOztJQUMxQiw2Q0FBeUM7O0lBQ3pDLGlEQUFvQzs7SUFDcEMsa0RBbUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LXd5c2l3eWctZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1V3lzaXd5Z0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGh0bWxRdWlsbENvbnRlbnQ7XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIGNvbnRyb2wgPSAncHJvZHVjdFRyYWNlYWJpbGl0eSc7XHJcblx0QElucHV0KCkgcGxhY2Vob2xkZXIgPSAnRW50ZXIgdGV4dCc7XHJcblx0cHVibGljIG1vZHVsZUNvbmZpZyA9IHtcclxuXHRcdHRvb2xiYXI6IFtcclxuXHRcdFx0WyAnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScgXSwgLy8gdG9nZ2xlZCBidXR0b25zXHJcblx0XHRcdFsgJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jaycgXSxcclxuXHJcblx0XHRcdFsgeyBoZWFkZXI6IDEgfSwgeyBoZWFkZXI6IDIgfSBdLCAvLyBjdXN0b20gYnV0dG9uIHZhbHVlc1xyXG5cdFx0XHRbIHsgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfSBdLFxyXG5cdFx0XHRbIHsgc2NyaXB0OiAnc3ViJyB9LCB7IHNjcmlwdDogJ3N1cGVyJyB9IF0sIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxyXG5cdFx0XHRbIHsgaW5kZW50OiAnLTEnIH0sIHsgaW5kZW50OiAnKzEnIH0gXSwgLy8gb3V0ZGVudC9pbmRlbnRcclxuXHRcdFx0WyB7IGRpcmVjdGlvbjogJ3J0bCcgfSBdLCAvLyB0ZXh0IGRpcmVjdGlvblxyXG5cclxuXHRcdFx0Ly8gWyB7IHNpemU6IFsgJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJyBdIH0gXSwgLy8gY3VzdG9tIGRyb3Bkb3duXHJcblx0XHRcdFsgeyBoZWFkZXI6IFsgMSwgMiwgMywgNCwgNSwgNiwgZmFsc2UgXSB9IF0sXHJcblxyXG5cdFx0XHRbIHsgY29sb3I6IFtdIH0sIHsgYmFja2dyb3VuZDogW10gfSBdLCAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcclxuXHRcdFx0WyB7IGZvbnQ6IFtdIH0gXSxcclxuXHRcdFx0WyB7IGFsaWduOiBbXSB9IF0sXHJcblx0XHRcdFsgJ2NsZWFuJyBdIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxyXG5cdFx0XVxyXG5cdH07XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcdH1cclxuXHJcblx0b25Db250ZW50Q2hhbmdlZChkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhLmh0bWwpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19