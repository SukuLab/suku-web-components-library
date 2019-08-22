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
                    template: "<span [formGroup]=\"form\">\r\n  <quill-editor [modules]=\"moduleConfig\" \r\n  placeholder=\"{{placeholder}}\" formControlName=\"{{control}}\" [(ngModel)]=\"htmlQuillContent\" (onContentChanged)=\"onContentChanged($event)\">\r\n  </quill-editor>\r\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDO0lBK0JDO1FBdEJTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLFlBQVksQ0FBQztRQUM3QixpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUixDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBRTtnQkFDM0MsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUU5QixDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO2dCQUNoQyxDQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFFO2dCQUMzQyxDQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFFO2dCQUMxQyxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUN0QyxDQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLENBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFO2dCQUUzQyxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNyQyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNoQixDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNqQixDQUFFLE9BQU8sQ0FBRSxDQUFDLDJCQUEyQjthQUN2QztTQUNELENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLDZDQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7O0lBRWQscURBQWdCOzs7O0lBQWhCLFVBQWlCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBckNELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw2UUFBbUQ7O2lCQUVwRDs7Ozs7dUJBSUUsS0FBSzswQkFDTixLQUFLOzhCQUNMLEtBQUs7O0lBNkJQLGlDQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FsQ1ksMEJBQTBCOzs7SUFFckMsc0RBQWlCOztJQUNqQiwwQ0FBeUI7O0lBQzFCLDZDQUF5Qzs7SUFDekMsaURBQW9DOztJQUNwQyxrREFtQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3Utd3lzaXd5Zy1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VXeXNpd3lnRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgaHRtbFF1aWxsQ29udGVudDtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgY29udHJvbCA9ICdwcm9kdWN0VHJhY2VhYmlsaXR5JztcclxuXHRASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdFbnRlciB0ZXh0JztcclxuXHRwdWJsaWMgbW9kdWxlQ29uZmlnID0ge1xyXG5cdFx0dG9vbGJhcjogW1xyXG5cdFx0XHRbICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJyBdLCAvLyB0b2dnbGVkIGJ1dHRvbnNcclxuXHRcdFx0WyAnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJyBdLFxyXG5cclxuXHRcdFx0WyB7IGhlYWRlcjogMSB9LCB7IGhlYWRlcjogMiB9IF0sIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXHJcblx0XHRcdFsgeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9IF0sXHJcblx0XHRcdFsgeyBzY3JpcHQ6ICdzdWInIH0sIHsgc2NyaXB0OiAnc3VwZXInIH0gXSwgLy8gc3VwZXJzY3JpcHQvc3Vic2NyaXB0XHJcblx0XHRcdFsgeyBpbmRlbnQ6ICctMScgfSwgeyBpbmRlbnQ6ICcrMScgfSBdLCAvLyBvdXRkZW50L2luZGVudFxyXG5cdFx0XHRbIHsgZGlyZWN0aW9uOiAncnRsJyB9IF0sIC8vIHRleHQgZGlyZWN0aW9uXHJcblxyXG5cdFx0XHQvLyBbIHsgc2l6ZTogWyAnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnIF0gfSBdLCAvLyBjdXN0b20gZHJvcGRvd25cclxuXHRcdFx0WyB7IGhlYWRlcjogWyAxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZSBdIH0gXSxcclxuXHJcblx0XHRcdFsgeyBjb2xvcjogW10gfSwgeyBiYWNrZ3JvdW5kOiBbXSB9IF0sIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxyXG5cdFx0XHRbIHsgZm9udDogW10gfSBdLFxyXG5cdFx0XHRbIHsgYWxpZ246IFtdIH0gXSxcclxuXHRcdFx0WyAnY2xlYW4nIF0gLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXHJcblx0XHRdXHJcblx0fTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1x0fVxyXG5cclxuXHRvbkNvbnRlbnRDaGFuZ2VkKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEuaHRtbCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=