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
    ngOnInit() {
        // this.htmlQuillContent =
        // 	'<h2 class="ql-align-justify"><strong>JCET006 NFC</strong> rfid animal identification tracking management number plastic card cattle cow <em><u>livestock</u></em> ear tag.<span style="color: rgb(51, 51, 51);">&nbsp;</span></h2><p><br></p><p><strong>1.Specializing:&nbsp;</strong></p><p><span style="color: rgb(51, 51, 51);">Our&nbsp;company&nbsp;is&nbsp;specializing&nbsp;in&nbsp;the&nbsp;production&nbsp;of&nbsp;various&nbsp;kinds&nbsp;of&nbsp;security&nbsp;seals:&nbsp;high&nbsp;security&nbsp;bolt&nbsp;seals,&nbsp;cable&nbsp;seals,&nbsp;plastic&nbsp;seals,&nbsp;meter&nbsp;seals,&nbsp;metal&nbsp;strap&nbsp;seals&nbsp;and&nbsp;barrier&nbsp;seals,&nbsp;etc.&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">2.Variety:&nbsp;</strong></p><p><span style="color: rgb(51, 51, 51);">The&nbsp;company&nbsp;producesvarious&nbsp;kinds&nbsp;of&nbsp;security&nbsp;seals,&nbsp;various&nbsp;types,&nbsp;shapes&nbsp;and&nbsp;sizes&nbsp;of&nbsp;the&nbsp;seals,&nbsp;in&nbsp;order&nbsp;to&nbsp;meet&nbsp;your&nbsp;different&nbsp;needs.&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">3.Quality&nbsp;Controlled&nbsp;: </strong></p><h4>The&nbsp;company&nbsp;is&nbsp;considering.<u>”</u><strong style="color: rgb(0, 97, 0);"><u>Quality&nbsp;First</u></strong><strong style="color: rgb(230, 0, 0);"><u>,</u></strong><strong style="color: rgb(102, 102, 0);"><u>&nbsp;</u></strong><strong style="color: rgb(0, 71, 178);"><u>Service&nbsp;Firs</u></strong><u style="color: rgb(0, 71, 178);">t</u><u>"&nbsp;</u></h4><p><strong style="color: rgb(51, 51, 51);">4.Favorable&nbsp;Price:</strong></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;</strong><span style="color: rgb(51, 51, 51);">We&nbsp;will&nbsp;provide&nbsp;you&nbsp;favorable&nbsp;and&nbsp;reasonable&nbsp;price!&nbsp;The&nbsp;larger&nbsp;quantity,the more discount.</span></p><p><strong style="color: rgb(51, 51, 51);">5.Timely&nbsp;Delivery:</strong></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;</strong><span style="color: rgb(51, 51, 51);">No&nbsp;matter how small or big your&nbsp;order&nbsp;is,&nbsp;timely&nbsp;delivery&nbsp;is&nbsp;our&nbsp;long-term&nbsp;goal!&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">6.Special&nbsp;Customized:</strong></p><p><span style="color: rgb(51, 51, 51);">&nbsp;At&nbsp;the&nbsp;same&nbsp;time,&nbsp;we&nbsp;provide&nbsp;customizing&nbsp;service,&nbsp;if&nbsp;all&nbsp;of&nbsp;our&nbsp;products&nbsp;cannot&nbsp;meet&nbsp;your&nbsp;requests,&nbsp;we&nbsp;also&nbsp;can&nbsp;specially&nbsp;customize the&nbsp;products&nbsp;for you&nbsp;as&nbsp;per&nbsp;your&nbsp;samples,&nbsp;drawings,&nbsp;etc.</span></p>';
    }
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
                template: "<span [formGroup]=\"form\">\n  <quill-editor [modules]=\"moduleConfig\" \n  placeholder=\"Enter Text\" formControlName=\"{{control}}\" [(ngModel)]=\"htmlQuillContent\" (onContentChanged)=\"onContentChanged($event)\">\n  </quill-editor>\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTNDLE1BQU0sT0FBTywwQkFBMEI7SUEwQnRDO1FBdEJTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLFlBQVksQ0FBQTtRQUM1QixpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUixDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBRTtnQkFDM0MsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUU5QixDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO2dCQUNoQyxDQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFFO2dCQUMzQyxDQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFFO2dCQUMxQyxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUN0QyxDQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLENBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFO2dCQUUzQyxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNyQyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNoQixDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNqQixDQUFFLE9BQU8sQ0FBRSxDQUFDLDJCQUEyQjthQUN2QztTQUNELENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDUCwwQkFBMEI7UUFDMUIsNGtGQUE0a0Y7SUFDN2tGLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7WUF4Q0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGdRQUFtRDs7YUFFcEQ7Ozs7O21CQUlFLEtBQUs7c0JBQ04sS0FBSzswQkFDTCxLQUFLOzs7O0lBSEwsc0RBQWlCOztJQUNqQiwwQ0FBeUI7O0lBQzFCLDZDQUF5Qzs7SUFDekMsaURBQW1DOztJQUNuQyxrREFtQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3Utd3lzaXd5Zy1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3Utd3lzaXd5Zy1lZGl0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1V3lzaXd5Z0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaHRtbFF1aWxsQ29udGVudDtcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBjb250cm9sID0gJ3Byb2R1Y3RUcmFjZWFiaWxpdHknO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdFbnRlciB0ZXh0J1xuXHRwdWJsaWMgbW9kdWxlQ29uZmlnID0ge1xuXHRcdHRvb2xiYXI6IFtcblx0XHRcdFsgJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnIF0sIC8vIHRvZ2dsZWQgYnV0dG9uc1xuXHRcdFx0WyAnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJyBdLFxuXG5cdFx0XHRbIHsgaGVhZGVyOiAxIH0sIHsgaGVhZGVyOiAyIH0gXSwgLy8gY3VzdG9tIGJ1dHRvbiB2YWx1ZXNcblx0XHRcdFsgeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9IF0sXG5cdFx0XHRbIHsgc2NyaXB0OiAnc3ViJyB9LCB7IHNjcmlwdDogJ3N1cGVyJyB9IF0sIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxuXHRcdFx0WyB7IGluZGVudDogJy0xJyB9LCB7IGluZGVudDogJysxJyB9IF0sIC8vIG91dGRlbnQvaW5kZW50XG5cdFx0XHRbIHsgZGlyZWN0aW9uOiAncnRsJyB9IF0sIC8vIHRleHQgZGlyZWN0aW9uXG5cblx0XHRcdC8vIFsgeyBzaXplOiBbICdzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZScgXSB9IF0sIC8vIGN1c3RvbSBkcm9wZG93blxuXHRcdFx0WyB7IGhlYWRlcjogWyAxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZSBdIH0gXSxcblxuXHRcdFx0WyB7IGNvbG9yOiBbXSB9LCB7IGJhY2tncm91bmQ6IFtdIH0gXSwgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG5cdFx0XHRbIHsgZm9udDogW10gfSBdLFxuXHRcdFx0WyB7IGFsaWduOiBbXSB9IF0sXG5cdFx0XHRbICdjbGVhbicgXSAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cblx0XHRdXG5cdH07XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyB0aGlzLmh0bWxRdWlsbENvbnRlbnQgPVxuXHRcdC8vIFx0JzxoMiBjbGFzcz1cInFsLWFsaWduLWp1c3RpZnlcIj48c3Ryb25nPkpDRVQwMDYgTkZDPC9zdHJvbmc+IHJmaWQgYW5pbWFsIGlkZW50aWZpY2F0aW9uIHRyYWNraW5nIG1hbmFnZW1lbnQgbnVtYmVyIHBsYXN0aWMgY2FyZCBjYXR0bGUgY293IDxlbT48dT5saXZlc3RvY2s8L3U+PC9lbT4gZWFyIHRhZy48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+Jm5ic3A7PC9zcGFuPjwvaDI+PHA+PGJyPjwvcD48cD48c3Ryb25nPjEuU3BlY2lhbGl6aW5nOiZuYnNwOzwvc3Ryb25nPjwvcD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+T3VyJm5ic3A7Y29tcGFueSZuYnNwO2lzJm5ic3A7c3BlY2lhbGl6aW5nJm5ic3A7aW4mbmJzcDt0aGUmbmJzcDtwcm9kdWN0aW9uJm5ic3A7b2YmbmJzcDt2YXJpb3VzJm5ic3A7a2luZHMmbmJzcDtvZiZuYnNwO3NlY3VyaXR5Jm5ic3A7c2VhbHM6Jm5ic3A7aGlnaCZuYnNwO3NlY3VyaXR5Jm5ic3A7Ym9sdCZuYnNwO3NlYWxzLCZuYnNwO2NhYmxlJm5ic3A7c2VhbHMsJm5ic3A7cGxhc3RpYyZuYnNwO3NlYWxzLCZuYnNwO21ldGVyJm5ic3A7c2VhbHMsJm5ic3A7bWV0YWwmbmJzcDtzdHJhcCZuYnNwO3NlYWxzJm5ic3A7YW5kJm5ic3A7YmFycmllciZuYnNwO3NlYWxzLCZuYnNwO2V0Yy4mbmJzcDs8L3NwYW4+PC9wPjxwPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPjIuVmFyaWV0eTombmJzcDs8L3N0cm9uZz48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPlRoZSZuYnNwO2NvbXBhbnkmbmJzcDtwcm9kdWNlc3ZhcmlvdXMmbmJzcDtraW5kcyZuYnNwO29mJm5ic3A7c2VjdXJpdHkmbmJzcDtzZWFscywmbmJzcDt2YXJpb3VzJm5ic3A7dHlwZXMsJm5ic3A7c2hhcGVzJm5ic3A7YW5kJm5ic3A7c2l6ZXMmbmJzcDtvZiZuYnNwO3RoZSZuYnNwO3NlYWxzLCZuYnNwO2luJm5ic3A7b3JkZXImbmJzcDt0byZuYnNwO21lZXQmbmJzcDt5b3VyJm5ic3A7ZGlmZmVyZW50Jm5ic3A7bmVlZHMuJm5ic3A7PC9zcGFuPjwvcD48cD48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj4zLlF1YWxpdHkmbmJzcDtDb250cm9sbGVkJm5ic3A7OiA8L3N0cm9uZz48L3A+PGg0PlRoZSZuYnNwO2NvbXBhbnkmbmJzcDtpcyZuYnNwO2NvbnNpZGVyaW5nLjx1PuKAnTwvdT48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYigwLCA5NywgMCk7XCI+PHU+UXVhbGl0eSZuYnNwO0ZpcnN0PC91Pjwvc3Ryb25nPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDIzMCwgMCwgMCk7XCI+PHU+LDwvdT48L3N0cm9uZz48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYigxMDIsIDEwMiwgMCk7XCI+PHU+Jm5ic3A7PC91Pjwvc3Ryb25nPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDAsIDcxLCAxNzgpO1wiPjx1PlNlcnZpY2UmbmJzcDtGaXJzPC91Pjwvc3Ryb25nPjx1IHN0eWxlPVwiY29sb3I6IHJnYigwLCA3MSwgMTc4KTtcIj50PC91Pjx1PlwiJm5ic3A7PC91PjwvaDQ+PHA+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+NC5GYXZvcmFibGUmbmJzcDtQcmljZTo8L3N0cm9uZz48L3A+PHA+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+Jm5ic3A7PC9zdHJvbmc+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPldlJm5ic3A7d2lsbCZuYnNwO3Byb3ZpZGUmbmJzcDt5b3UmbmJzcDtmYXZvcmFibGUmbmJzcDthbmQmbmJzcDtyZWFzb25hYmxlJm5ic3A7cHJpY2UhJm5ic3A7VGhlJm5ic3A7bGFyZ2VyJm5ic3A7cXVhbnRpdHksdGhlIG1vcmUgZGlzY291bnQuPC9zcGFuPjwvcD48cD48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj41LlRpbWVseSZuYnNwO0RlbGl2ZXJ5Ojwvc3Ryb25nPjwvcD48cD48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj4mbmJzcDs8L3N0cm9uZz48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+Tm8mbmJzcDttYXR0ZXIgaG93IHNtYWxsIG9yIGJpZyB5b3VyJm5ic3A7b3JkZXImbmJzcDtpcywmbmJzcDt0aW1lbHkmbmJzcDtkZWxpdmVyeSZuYnNwO2lzJm5ic3A7b3VyJm5ic3A7bG9uZy10ZXJtJm5ic3A7Z29hbCEmbmJzcDs8L3NwYW4+PC9wPjxwPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPjYuU3BlY2lhbCZuYnNwO0N1c3RvbWl6ZWQ6PC9zdHJvbmc+PC9wPjxwPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj4mbmJzcDtBdCZuYnNwO3RoZSZuYnNwO3NhbWUmbmJzcDt0aW1lLCZuYnNwO3dlJm5ic3A7cHJvdmlkZSZuYnNwO2N1c3RvbWl6aW5nJm5ic3A7c2VydmljZSwmbmJzcDtpZiZuYnNwO2FsbCZuYnNwO29mJm5ic3A7b3VyJm5ic3A7cHJvZHVjdHMmbmJzcDtjYW5ub3QmbmJzcDttZWV0Jm5ic3A7eW91ciZuYnNwO3JlcXVlc3RzLCZuYnNwO3dlJm5ic3A7YWxzbyZuYnNwO2NhbiZuYnNwO3NwZWNpYWxseSZuYnNwO2N1c3RvbWl6ZSB0aGUmbmJzcDtwcm9kdWN0cyZuYnNwO2ZvciB5b3UmbmJzcDthcyZuYnNwO3BlciZuYnNwO3lvdXImbmJzcDtzYW1wbGVzLCZuYnNwO2RyYXdpbmdzLCZuYnNwO2V0Yy48L3NwYW4+PC9wPic7XG5cdH1cblxuXHRvbkNvbnRlbnRDaGFuZ2VkKGRhdGEpIHtcblx0XHRjb25zb2xlLmxvZyhkYXRhLmh0bWwpO1xuXHR9XG5cbn1cbiJdfQ==