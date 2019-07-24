/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuWysiwygEditorComponent {
    constructor() {
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
    control: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13eXNpd3lnLWVkaXRvci9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTNDLE1BQU0sT0FBTywwQkFBMEI7SUF5QnRDO1FBckJTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNsQyxpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUixDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBRTtnQkFDM0MsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUU5QixDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO2dCQUNoQyxDQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFFO2dCQUMzQyxDQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFFO2dCQUMxQyxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUN0QyxDQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFO2dCQUV4Qix3RUFBd0U7Z0JBQ3hFLENBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFO2dCQUUzQyxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNyQyxDQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNoQixDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFFO2dCQUNqQixDQUFFLE9BQU8sQ0FBRSxDQUFDLDJCQUEyQjthQUN2QztTQUNELENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDUCwwQkFBMEI7UUFDMUIsNGtGQUE0a0Y7SUFDN2tGLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7WUF2Q0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGdRQUFtRDs7YUFFcEQ7Ozs7O21CQUlFLEtBQUs7c0JBQ04sS0FBSzs7OztJQUZMLHNEQUFpQjs7SUFDakIsMENBQXlCOztJQUMxQiw2Q0FBeUM7O0lBQ3pDLGtEQW1CRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS13eXNpd3lnLWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXd5c2l3eWctZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS13eXNpd3lnLWVkaXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VXeXNpd3lnRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBodG1sUXVpbGxDb250ZW50O1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cdEBJbnB1dCgpIGNvbnRyb2wgPSAncHJvZHVjdFRyYWNlYWJpbGl0eSc7XG5cdHB1YmxpYyBtb2R1bGVDb25maWcgPSB7XG5cdFx0dG9vbGJhcjogW1xuXHRcdFx0WyAnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScgXSwgLy8gdG9nZ2xlZCBidXR0b25zXG5cdFx0XHRbICdibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snIF0sXG5cblx0XHRcdFsgeyBoZWFkZXI6IDEgfSwgeyBoZWFkZXI6IDIgfSBdLCAvLyBjdXN0b20gYnV0dG9uIHZhbHVlc1xuXHRcdFx0WyB7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH0gXSxcblx0XHRcdFsgeyBzY3JpcHQ6ICdzdWInIH0sIHsgc2NyaXB0OiAnc3VwZXInIH0gXSwgLy8gc3VwZXJzY3JpcHQvc3Vic2NyaXB0XG5cdFx0XHRbIHsgaW5kZW50OiAnLTEnIH0sIHsgaW5kZW50OiAnKzEnIH0gXSwgLy8gb3V0ZGVudC9pbmRlbnRcblx0XHRcdFsgeyBkaXJlY3Rpb246ICdydGwnIH0gXSwgLy8gdGV4dCBkaXJlY3Rpb25cblxuXHRcdFx0Ly8gWyB7IHNpemU6IFsgJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJyBdIH0gXSwgLy8gY3VzdG9tIGRyb3Bkb3duXG5cdFx0XHRbIHsgaGVhZGVyOiBbIDEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlIF0gfSBdLFxuXG5cdFx0XHRbIHsgY29sb3I6IFtdIH0sIHsgYmFja2dyb3VuZDogW10gfSBdLCAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcblx0XHRcdFsgeyBmb250OiBbXSB9IF0sXG5cdFx0XHRbIHsgYWxpZ246IFtdIH0gXSxcblx0XHRcdFsgJ2NsZWFuJyBdIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXHRcdF1cblx0fTtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIHRoaXMuaHRtbFF1aWxsQ29udGVudCA9XG5cdFx0Ly8gXHQnPGgyIGNsYXNzPVwicWwtYWxpZ24tanVzdGlmeVwiPjxzdHJvbmc+SkNFVDAwNiBORkM8L3N0cm9uZz4gcmZpZCBhbmltYWwgaWRlbnRpZmljYXRpb24gdHJhY2tpbmcgbWFuYWdlbWVudCBudW1iZXIgcGxhc3RpYyBjYXJkIGNhdHRsZSBjb3cgPGVtPjx1PmxpdmVzdG9jazwvdT48L2VtPiBlYXIgdGFnLjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj4mbmJzcDs8L3NwYW4+PC9oMj48cD48YnI+PC9wPjxwPjxzdHJvbmc+MS5TcGVjaWFsaXppbmc6Jm5ic3A7PC9zdHJvbmc+PC9wPjxwPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj5PdXImbmJzcDtjb21wYW55Jm5ic3A7aXMmbmJzcDtzcGVjaWFsaXppbmcmbmJzcDtpbiZuYnNwO3RoZSZuYnNwO3Byb2R1Y3Rpb24mbmJzcDtvZiZuYnNwO3ZhcmlvdXMmbmJzcDtraW5kcyZuYnNwO29mJm5ic3A7c2VjdXJpdHkmbmJzcDtzZWFsczombmJzcDtoaWdoJm5ic3A7c2VjdXJpdHkmbmJzcDtib2x0Jm5ic3A7c2VhbHMsJm5ic3A7Y2FibGUmbmJzcDtzZWFscywmbmJzcDtwbGFzdGljJm5ic3A7c2VhbHMsJm5ic3A7bWV0ZXImbmJzcDtzZWFscywmbmJzcDttZXRhbCZuYnNwO3N0cmFwJm5ic3A7c2VhbHMmbmJzcDthbmQmbmJzcDtiYXJyaWVyJm5ic3A7c2VhbHMsJm5ic3A7ZXRjLiZuYnNwOzwvc3Bhbj48L3A+PHA+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+Mi5WYXJpZXR5OiZuYnNwOzwvc3Ryb25nPjwvcD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+VGhlJm5ic3A7Y29tcGFueSZuYnNwO3Byb2R1Y2VzdmFyaW91cyZuYnNwO2tpbmRzJm5ic3A7b2YmbmJzcDtzZWN1cml0eSZuYnNwO3NlYWxzLCZuYnNwO3ZhcmlvdXMmbmJzcDt0eXBlcywmbmJzcDtzaGFwZXMmbmJzcDthbmQmbmJzcDtzaXplcyZuYnNwO29mJm5ic3A7dGhlJm5ic3A7c2VhbHMsJm5ic3A7aW4mbmJzcDtvcmRlciZuYnNwO3RvJm5ic3A7bWVldCZuYnNwO3lvdXImbmJzcDtkaWZmZXJlbnQmbmJzcDtuZWVkcy4mbmJzcDs8L3NwYW4+PC9wPjxwPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPjMuUXVhbGl0eSZuYnNwO0NvbnRyb2xsZWQmbmJzcDs6IDwvc3Ryb25nPjwvcD48aDQ+VGhlJm5ic3A7Y29tcGFueSZuYnNwO2lzJm5ic3A7Y29uc2lkZXJpbmcuPHU+4oCdPC91PjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDAsIDk3LCAwKTtcIj48dT5RdWFsaXR5Jm5ic3A7Rmlyc3Q8L3U+PC9zdHJvbmc+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoMjMwLCAwLCAwKTtcIj48dT4sPC91Pjwvc3Ryb25nPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDEwMiwgMTAyLCAwKTtcIj48dT4mbmJzcDs8L3U+PC9zdHJvbmc+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoMCwgNzEsIDE3OCk7XCI+PHU+U2VydmljZSZuYnNwO0ZpcnM8L3U+PC9zdHJvbmc+PHUgc3R5bGU9XCJjb2xvcjogcmdiKDAsIDcxLCAxNzgpO1wiPnQ8L3U+PHU+XCImbmJzcDs8L3U+PC9oND48cD48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj40LkZhdm9yYWJsZSZuYnNwO1ByaWNlOjwvc3Ryb25nPjwvcD48cD48c3Ryb25nIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj4mbmJzcDs8L3N0cm9uZz48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+V2UmbmJzcDt3aWxsJm5ic3A7cHJvdmlkZSZuYnNwO3lvdSZuYnNwO2Zhdm9yYWJsZSZuYnNwO2FuZCZuYnNwO3JlYXNvbmFibGUmbmJzcDtwcmljZSEmbmJzcDtUaGUmbmJzcDtsYXJnZXImbmJzcDtxdWFudGl0eSx0aGUgbW9yZSBkaXNjb3VudC48L3NwYW4+PC9wPjxwPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPjUuVGltZWx5Jm5ic3A7RGVsaXZlcnk6PC9zdHJvbmc+PC9wPjxwPjxzdHJvbmcgc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPiZuYnNwOzwvc3Ryb25nPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcIj5ObyZuYnNwO21hdHRlciBob3cgc21hbGwgb3IgYmlnIHlvdXImbmJzcDtvcmRlciZuYnNwO2lzLCZuYnNwO3RpbWVseSZuYnNwO2RlbGl2ZXJ5Jm5ic3A7aXMmbmJzcDtvdXImbmJzcDtsb25nLXRlcm0mbmJzcDtnb2FsISZuYnNwOzwvc3Bhbj48L3A+PHA+PHN0cm9uZyBzdHlsZT1cImNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XCI+Ni5TcGVjaWFsJm5ic3A7Q3VzdG9taXplZDo8L3N0cm9uZz48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1wiPiZuYnNwO0F0Jm5ic3A7dGhlJm5ic3A7c2FtZSZuYnNwO3RpbWUsJm5ic3A7d2UmbmJzcDtwcm92aWRlJm5ic3A7Y3VzdG9taXppbmcmbmJzcDtzZXJ2aWNlLCZuYnNwO2lmJm5ic3A7YWxsJm5ic3A7b2YmbmJzcDtvdXImbmJzcDtwcm9kdWN0cyZuYnNwO2Nhbm5vdCZuYnNwO21lZXQmbmJzcDt5b3VyJm5ic3A7cmVxdWVzdHMsJm5ic3A7d2UmbmJzcDthbHNvJm5ic3A7Y2FuJm5ic3A7c3BlY2lhbGx5Jm5ic3A7Y3VzdG9taXplIHRoZSZuYnNwO3Byb2R1Y3RzJm5ic3A7Zm9yIHlvdSZuYnNwO2FzJm5ic3A7cGVyJm5ic3A7eW91ciZuYnNwO3NhbXBsZXMsJm5ic3A7ZHJhd2luZ3MsJm5ic3A7ZXRjLjwvc3Bhbj48L3A+Jztcblx0fVxuXG5cdG9uQ29udGVudENoYW5nZWQoZGF0YSkge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEuaHRtbCk7XG5cdH1cblxufVxuIl19