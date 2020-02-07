/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-wysiwyg-editor/suku-wysiwyg-editor.component.ts
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
                template: "<span [formGroup]=\"form\">\n  <quill-editor [modules]=\"moduleConfig\" \n  placeholder=\"{{placeholder}}\" formControlName=\"{{control}}\" [(ngModel)]=\"htmlQuillContent\" (onContentChanged)=\"onContentChanged($event)\">\n  </quill-editor>\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxNQUFNLE9BQU8sMEJBQTBCO0lBMEJ0QztRQXRCUyxZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFDN0IsaUJBQVksR0FBRztZQUNyQixPQUFPLEVBQUU7Z0JBQ1IsQ0FBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUU7Z0JBQzNDLENBQUUsWUFBWSxFQUFFLFlBQVksQ0FBRTtnQkFFOUIsQ0FBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBRTtnQkFDaEMsQ0FBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBRTtnQkFDM0MsQ0FBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBRTtnQkFDMUMsQ0FBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBRTtnQkFDdEMsQ0FBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBRTtnQkFFeEIsd0VBQXdFO2dCQUN4RSxDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFFLEVBQUUsQ0FBRTtnQkFFM0MsQ0FBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBRTtnQkFDckMsQ0FBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBRTtnQkFDaEIsQ0FBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBRTtnQkFDakIsQ0FBRSxPQUFPLENBQUUsQ0FBQywyQkFBMkI7YUFDdkM7U0FDRCxDQUFDO0lBQ2EsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUssQ0FBQzs7Ozs7SUFFZCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQXJDRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IscVFBQW1EOzthQUVwRDs7Ozs7bUJBSUUsS0FBSztzQkFDTixLQUFLOzBCQUNMLEtBQUs7Ozs7SUFITCxzREFBaUI7O0lBQ2pCLDBDQUF5Qjs7SUFDMUIsNkNBQXlDOztJQUN6QyxpREFBb0M7O0lBQ3BDLGtEQW1CRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS13eXNpd3lnLWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VXeXNpd3lnRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBodG1sUXVpbGxDb250ZW50O1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cdEBJbnB1dCgpIGNvbnRyb2wgPSAncHJvZHVjdFRyYWNlYWJpbGl0eSc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ0VudGVyIHRleHQnO1xuXHRwdWJsaWMgbW9kdWxlQ29uZmlnID0ge1xuXHRcdHRvb2xiYXI6IFtcblx0XHRcdFsgJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnIF0sIC8vIHRvZ2dsZWQgYnV0dG9uc1xuXHRcdFx0WyAnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJyBdLFxuXG5cdFx0XHRbIHsgaGVhZGVyOiAxIH0sIHsgaGVhZGVyOiAyIH0gXSwgLy8gY3VzdG9tIGJ1dHRvbiB2YWx1ZXNcblx0XHRcdFsgeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9IF0sXG5cdFx0XHRbIHsgc2NyaXB0OiAnc3ViJyB9LCB7IHNjcmlwdDogJ3N1cGVyJyB9IF0sIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxuXHRcdFx0WyB7IGluZGVudDogJy0xJyB9LCB7IGluZGVudDogJysxJyB9IF0sIC8vIG91dGRlbnQvaW5kZW50XG5cdFx0XHRbIHsgZGlyZWN0aW9uOiAncnRsJyB9IF0sIC8vIHRleHQgZGlyZWN0aW9uXG5cblx0XHRcdC8vIFsgeyBzaXplOiBbICdzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZScgXSB9IF0sIC8vIGN1c3RvbSBkcm9wZG93blxuXHRcdFx0WyB7IGhlYWRlcjogWyAxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZSBdIH0gXSxcblxuXHRcdFx0WyB7IGNvbG9yOiBbXSB9LCB7IGJhY2tncm91bmQ6IFtdIH0gXSwgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG5cdFx0XHRbIHsgZm9udDogW10gfSBdLFxuXHRcdFx0WyB7IGFsaWduOiBbXSB9IF0sXG5cdFx0XHRbICdjbGVhbicgXSAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cblx0XHRdXG5cdH07XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHtcdH1cblxuXHRvbkNvbnRlbnRDaGFuZ2VkKGRhdGEpIHtcblx0XHRjb25zb2xlLmxvZyhkYXRhLmh0bWwpO1xuXHR9XG5cbn1cbiJdfQ==