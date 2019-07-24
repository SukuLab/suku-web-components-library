/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuWysiwygEditorComponent = /** @class */ (function () {
    function SukuWysiwygEditorComponent() {
        this.control = 'productTraceability';
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
    function () {
        // this.htmlQuillContent =
        // 	'<h2 class="ql-align-justify"><strong>JCET006 NFC</strong> rfid animal identification tracking management number plastic card cattle cow <em><u>livestock</u></em> ear tag.<span style="color: rgb(51, 51, 51);">&nbsp;</span></h2><p><br></p><p><strong>1.Specializing:&nbsp;</strong></p><p><span style="color: rgb(51, 51, 51);">Our&nbsp;company&nbsp;is&nbsp;specializing&nbsp;in&nbsp;the&nbsp;production&nbsp;of&nbsp;various&nbsp;kinds&nbsp;of&nbsp;security&nbsp;seals:&nbsp;high&nbsp;security&nbsp;bolt&nbsp;seals,&nbsp;cable&nbsp;seals,&nbsp;plastic&nbsp;seals,&nbsp;meter&nbsp;seals,&nbsp;metal&nbsp;strap&nbsp;seals&nbsp;and&nbsp;barrier&nbsp;seals,&nbsp;etc.&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">2.Variety:&nbsp;</strong></p><p><span style="color: rgb(51, 51, 51);">The&nbsp;company&nbsp;producesvarious&nbsp;kinds&nbsp;of&nbsp;security&nbsp;seals,&nbsp;various&nbsp;types,&nbsp;shapes&nbsp;and&nbsp;sizes&nbsp;of&nbsp;the&nbsp;seals,&nbsp;in&nbsp;order&nbsp;to&nbsp;meet&nbsp;your&nbsp;different&nbsp;needs.&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">3.Quality&nbsp;Controlled&nbsp;: </strong></p><h4>The&nbsp;company&nbsp;is&nbsp;considering.<u>”</u><strong style="color: rgb(0, 97, 0);"><u>Quality&nbsp;First</u></strong><strong style="color: rgb(230, 0, 0);"><u>,</u></strong><strong style="color: rgb(102, 102, 0);"><u>&nbsp;</u></strong><strong style="color: rgb(0, 71, 178);"><u>Service&nbsp;Firs</u></strong><u style="color: rgb(0, 71, 178);">t</u><u>"&nbsp;</u></h4><p><strong style="color: rgb(51, 51, 51);">4.Favorable&nbsp;Price:</strong></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;</strong><span style="color: rgb(51, 51, 51);">We&nbsp;will&nbsp;provide&nbsp;you&nbsp;favorable&nbsp;and&nbsp;reasonable&nbsp;price!&nbsp;The&nbsp;larger&nbsp;quantity,the more discount.</span></p><p><strong style="color: rgb(51, 51, 51);">5.Timely&nbsp;Delivery:</strong></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;</strong><span style="color: rgb(51, 51, 51);">No&nbsp;matter how small or big your&nbsp;order&nbsp;is,&nbsp;timely&nbsp;delivery&nbsp;is&nbsp;our&nbsp;long-term&nbsp;goal!&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">6.Special&nbsp;Customized:</strong></p><p><span style="color: rgb(51, 51, 51);">&nbsp;At&nbsp;the&nbsp;same&nbsp;time,&nbsp;we&nbsp;provide&nbsp;customizing&nbsp;service,&nbsp;if&nbsp;all&nbsp;of&nbsp;our&nbsp;products&nbsp;cannot&nbsp;meet&nbsp;your&nbsp;requests,&nbsp;we&nbsp;also&nbsp;can&nbsp;specially&nbsp;customize the&nbsp;products&nbsp;for you&nbsp;as&nbsp;per&nbsp;your&nbsp;samples,&nbsp;drawings,&nbsp;etc.</span></p>';
    };
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
                    template: "<span [formGroup]=\"form\">\n  <quill-editor [modules]=\"moduleConfig\" \n  placeholder=\"Enter Text\" formControlName=\"{{control}}\" [(ngModel)]=\"htmlQuillContent\" (onContentChanged)=\"onContentChanged($event)\">\n  </quill-editor>\n</span>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SukuWysiwygEditorComponent.ctorParameters = function () { return []; };
    SukuWysiwygEditorComponent.propDecorators = {
        form: [{ type: Input }],
        control: [{ type: Input }]
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
    SukuWysiwygEditorComponent.prototype.moduleConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDO0lBOEJDO1FBckJTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNsQyxpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUixDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBRTtnQkFDM0MsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUU5QixDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO2dCQUNoQyxDQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFFO2dCQUMzQyxDQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFFO2dCQUMxQyxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUN0QyxDQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLENBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFO2dCQUUzQyxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNyQyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNoQixDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNqQixDQUFFLE9BQU8sQ0FBRSxDQUFDLDJCQUEyQjthQUN2QztTQUNELENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLDZDQUFROzs7SUFBUjtRQUNDLDBCQUEwQjtRQUMxQiw0a0ZBQTRrRjtJQUM3a0YsQ0FBQzs7Ozs7SUFFRCxxREFBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOztnQkF2Q0QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGdRQUFtRDs7aUJBRXBEOzs7Ozt1QkFJRSxLQUFLOzBCQUNOLEtBQUs7O0lBZ0NQLGlDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FwQ1ksMEJBQTBCOzs7SUFFckMsc0RBQWlCOztJQUNqQiwwQ0FBeUI7O0lBQzFCLDZDQUF5Qzs7SUFDekMsa0RBbUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXd5c2l3eWctZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utd3lzaXd5Zy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVd5c2l3eWdFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGh0bWxRdWlsbENvbnRlbnQ7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblx0QElucHV0KCkgY29udHJvbCA9ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jztcblx0cHVibGljIG1vZHVsZUNvbmZpZyA9IHtcblx0XHR0b29sYmFyOiBbXG5cdFx0XHRbICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJyBdLCAvLyB0b2dnbGVkIGJ1dHRvbnNcblx0XHRcdFsgJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jaycgXSxcblxuXHRcdFx0WyB7IGhlYWRlcjogMSB9LCB7IGhlYWRlcjogMiB9IF0sIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXG5cdFx0XHRbIHsgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfSBdLFxuXHRcdFx0WyB7IHNjcmlwdDogJ3N1YicgfSwgeyBzY3JpcHQ6ICdzdXBlcicgfSBdLCAvLyBzdXBlcnNjcmlwdC9zdWJzY3JpcHRcblx0XHRcdFsgeyBpbmRlbnQ6ICctMScgfSwgeyBpbmRlbnQ6ICcrMScgfSBdLCAvLyBvdXRkZW50L2luZGVudFxuXHRcdFx0WyB7IGRpcmVjdGlvbjogJ3J0bCcgfSBdLCAvLyB0ZXh0IGRpcmVjdGlvblxuXG5cdFx0XHQvLyBbIHsgc2l6ZTogWyAnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnIF0gfSBdLCAvLyBjdXN0b20gZHJvcGRvd25cblx0XHRcdFsgeyBoZWFkZXI6IFsgMSwgMiwgMywgNCwgNSwgNiwgZmFsc2UgXSB9IF0sXG5cblx0XHRcdFsgeyBjb2xvcjogW10gfSwgeyBiYWNrZ3JvdW5kOiBbXSB9IF0sIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuXHRcdFx0WyB7IGZvbnQ6IFtdIH0gXSxcblx0XHRcdFsgeyBhbGlnbjogW10gfSBdLFxuXHRcdFx0WyAnY2xlYW4nIF0gLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXG5cdFx0XVxuXHR9O1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gdGhpcy5odG1sUXVpbGxDb250ZW50ID1cblx0XHQvLyBcdCc8aDIgY2xhc3M9XCJxbC1hbGlnbi1qdXN0aWZ5XCI+PHN0cm9uZz5KQ0VUMDA2IE5GQzwvc3Ryb25nPiByZmlkIGFuaW1hbCBpZGVudGlmaWNhdGlvbiB0cmFja2luZyBtYW5hZ2VtZW50IG51bWJlciBwbGFzdGljIGNhcmQgY2F0dGxlIGNvdyA8ZW0+PHU+bGl2ZXN0b2NrPC91PjwvZW0+IGVhciB0YWcuPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPiZuYnNwOzwvc3Bhbj48L2gyPjxwPjxicj48L3A+PHA+PHN0cm9uZz4xLlNwZWNpYWxpemluZzombmJzcDs8L3N0cm9uZz48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPk91ciZuYnNwO2NvbXBhbnkmbmJzcDtpcyZuYnNwO3NwZWNpYWxpemluZyZuYnNwO2luJm5ic3A7dGhlJm5ic3A7cHJvZHVjdGlvbiZuYnNwO29mJm5ic3A7dmFyaW91cyZuYnNwO2tpbmRzJm5ic3A7b2YmbmJzcDtzZWN1cml0eSZuYnNwO3NlYWxzOiZuYnNwO2hpZ2gmbmJzcDtzZWN1cml0eSZuYnNwO2JvbHQmbmJzcDtzZWFscywmbmJzcDtjYWJsZSZuYnNwO3NlYWxzLCZuYnNwO3BsYXN0aWMmbmJzcDtzZWFscywmbmJzcDttZXRlciZuYnNwO3NlYWxzLCZuYnNwO21ldGFsJm5ic3A7c3RyYXAmbmJzcDtzZWFscyZuYnNwO2FuZCZuYnNwO2JhcnJpZXImbmJzcDtzZWFscywmbmJzcDtldGMuJm5ic3A7PC9zcGFuPjwvcD48cD48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj4yLlZhcmlldHk6Jm5ic3A7PC9zdHJvbmc+PC9wPjxwPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj5UaGUmbmJzcDtjb21wYW55Jm5ic3A7cHJvZHVjZXN2YXJpb3VzJm5ic3A7a2luZHMmbmJzcDtvZiZuYnNwO3NlY3VyaXR5Jm5ic3A7c2VhbHMsJm5ic3A7dmFyaW91cyZuYnNwO3R5cGVzLCZuYnNwO3NoYXBlcyZuYnNwO2FuZCZuYnNwO3NpemVzJm5ic3A7b2YmbmJzcDt0aGUmbmJzcDtzZWFscywmbmJzcDtpbiZuYnNwO29yZGVyJm5ic3A7dG8mbmJzcDttZWV0Jm5ic3A7eW91ciZuYnNwO2RpZmZlcmVudCZuYnNwO25lZWRzLiZuYnNwOzwvc3Bhbj48L3A+PHA+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+My5RdWFsaXR5Jm5ic3A7Q29udHJvbGxlZCZuYnNwOzogPC9zdHJvbmc+PC9wPjxoND5UaGUmbmJzcDtjb21wYW55Jm5ic3A7aXMmbmJzcDtjb25zaWRlcmluZy48dT7igJ08L3U+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoMCwgOTcsIDApO1wiPjx1PlF1YWxpdHkmbmJzcDtGaXJzdDwvdT48L3N0cm9uZz48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYigyMzAsIDAsIDApO1wiPjx1Piw8L3U+PC9zdHJvbmc+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoMTAyLCAxMDIsIDApO1wiPjx1PiZuYnNwOzwvdT48L3N0cm9uZz48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYigwLCA3MSwgMTc4KTtcIj48dT5TZXJ2aWNlJm5ic3A7RmlyczwvdT48L3N0cm9uZz48dSBzdHlsZT1cImNvbG9yOiByZ2IoMCwgNzEsIDE3OCk7XCI+dDwvdT48dT5cIiZuYnNwOzwvdT48L2g0PjxwPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPjQuRmF2b3JhYmxlJm5ic3A7UHJpY2U6PC9zdHJvbmc+PC9wPjxwPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPiZuYnNwOzwvc3Ryb25nPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj5XZSZuYnNwO3dpbGwmbmJzcDtwcm92aWRlJm5ic3A7eW91Jm5ic3A7ZmF2b3JhYmxlJm5ic3A7YW5kJm5ic3A7cmVhc29uYWJsZSZuYnNwO3ByaWNlISZuYnNwO1RoZSZuYnNwO2xhcmdlciZuYnNwO3F1YW50aXR5LHRoZSBtb3JlIGRpc2NvdW50Ljwvc3Bhbj48L3A+PHA+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+NS5UaW1lbHkmbmJzcDtEZWxpdmVyeTo8L3N0cm9uZz48L3A+PHA+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+Jm5ic3A7PC9zdHJvbmc+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPk5vJm5ic3A7bWF0dGVyIGhvdyBzbWFsbCBvciBiaWcgeW91ciZuYnNwO29yZGVyJm5ic3A7aXMsJm5ic3A7dGltZWx5Jm5ic3A7ZGVsaXZlcnkmbmJzcDtpcyZuYnNwO291ciZuYnNwO2xvbmctdGVybSZuYnNwO2dvYWwhJm5ic3A7PC9zcGFuPjwvcD48cD48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj42LlNwZWNpYWwmbmJzcDtDdXN0b21pemVkOjwvc3Ryb25nPjwvcD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+Jm5ic3A7QXQmbmJzcDt0aGUmbmJzcDtzYW1lJm5ic3A7dGltZSwmbmJzcDt3ZSZuYnNwO3Byb3ZpZGUmbmJzcDtjdXN0b21pemluZyZuYnNwO3NlcnZpY2UsJm5ic3A7aWYmbmJzcDthbGwmbmJzcDtvZiZuYnNwO291ciZuYnNwO3Byb2R1Y3RzJm5ic3A7Y2Fubm90Jm5ic3A7bWVldCZuYnNwO3lvdXImbmJzcDtyZXF1ZXN0cywmbmJzcDt3ZSZuYnNwO2Fsc28mbmJzcDtjYW4mbmJzcDtzcGVjaWFsbHkmbmJzcDtjdXN0b21pemUgdGhlJm5ic3A7cHJvZHVjdHMmbmJzcDtmb3IgeW91Jm5ic3A7YXMmbmJzcDtwZXImbmJzcDt5b3VyJm5ic3A7c2FtcGxlcywmbmJzcDtkcmF3aW5ncywmbmJzcDtldGMuPC9zcGFuPjwvcD4nO1xuXHR9XG5cblx0b25Db250ZW50Q2hhbmdlZChkYXRhKSB7XG5cdFx0Y29uc29sZS5sb2coZGF0YS5odG1sKTtcblx0fVxuXG59XG4iXX0=