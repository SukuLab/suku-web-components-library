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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTNDLE1BQU0sT0FBTywwQkFBMEI7SUEwQnRDO1FBdEJTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLFlBQVksQ0FBQztRQUM3QixpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUixDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBRTtnQkFDM0MsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUU5QixDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO2dCQUNoQyxDQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFFO2dCQUMzQyxDQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFFO2dCQUMxQyxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUN0QyxDQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLENBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFO2dCQUUzQyxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNyQyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNoQixDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNqQixDQUFFLE9BQU8sQ0FBRSxDQUFDLDJCQUEyQjthQUN2QztTQUNELENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSyxDQUFDOzs7OztJQUVkLGdCQUFnQixDQUFDLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBckNELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxUUFBbUQ7O2FBRXBEOzs7OzttQkFJRSxLQUFLO3NCQUNOLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUhMLHNEQUFpQjs7SUFDakIsMENBQXlCOztJQUMxQiw2Q0FBeUM7O0lBQ3pDLGlEQUFvQzs7SUFDcEMsa0RBbUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXd5c2l3eWctZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utd3lzaXd5Zy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVd5c2l3eWdFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGh0bWxRdWlsbENvbnRlbnQ7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblx0QElucHV0KCkgY29udHJvbCA9ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jztcblx0QElucHV0KCkgcGxhY2Vob2xkZXIgPSAnRW50ZXIgdGV4dCc7XG5cdHB1YmxpYyBtb2R1bGVDb25maWcgPSB7XG5cdFx0dG9vbGJhcjogW1xuXHRcdFx0WyAnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScgXSwgLy8gdG9nZ2xlZCBidXR0b25zXG5cdFx0XHRbICdibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snIF0sXG5cblx0XHRcdFsgeyBoZWFkZXI6IDEgfSwgeyBoZWFkZXI6IDIgfSBdLCAvLyBjdXN0b20gYnV0dG9uIHZhbHVlc1xuXHRcdFx0WyB7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH0gXSxcblx0XHRcdFsgeyBzY3JpcHQ6ICdzdWInIH0sIHsgc2NyaXB0OiAnc3VwZXInIH0gXSwgLy8gc3VwZXJzY3JpcHQvc3Vic2NyaXB0XG5cdFx0XHRbIHsgaW5kZW50OiAnLTEnIH0sIHsgaW5kZW50OiAnKzEnIH0gXSwgLy8gb3V0ZGVudC9pbmRlbnRcblx0XHRcdFsgeyBkaXJlY3Rpb246ICdydGwnIH0gXSwgLy8gdGV4dCBkaXJlY3Rpb25cblxuXHRcdFx0Ly8gWyB7IHNpemU6IFsgJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJyBdIH0gXSwgLy8gY3VzdG9tIGRyb3Bkb3duXG5cdFx0XHRbIHsgaGVhZGVyOiBbIDEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlIF0gfSBdLFxuXG5cdFx0XHRbIHsgY29sb3I6IFtdIH0sIHsgYmFja2dyb3VuZDogW10gfSBdLCAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcblx0XHRcdFsgeyBmb250OiBbXSB9IF0sXG5cdFx0XHRbIHsgYWxpZ246IFtdIH0gXSxcblx0XHRcdFsgJ2NsZWFuJyBdIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXHRcdF1cblx0fTtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge1x0fVxuXG5cdG9uQ29udGVudENoYW5nZWQoZGF0YSkge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEuaHRtbCk7XG5cdH1cblxufVxuIl19