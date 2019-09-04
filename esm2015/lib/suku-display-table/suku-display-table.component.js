/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuDisplayTableComponent {
    constructor() {
        this.headerContent = 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
        this.titleOneColor = 'white';
        this.titleOneCustomClass = '';
        this.titleContent = 'No-Data';
        this.headerSize = '14px';
        this.dataSize = '12px';
        this.hrefSelection = 'lotid';
        this.colorPallete = ["#a3ded8", "#f8dbb4", "#c7c3fa", "gray"];
        this.status = ["complete", "incomplete", "pending", 'others'];
    }
    /**
     * @return {?}
     */
    get tableData() {
        return this._tableData;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set tableData(val) {
        this._tableData = val;
        if (this._tableData[0]) {
            this.tableDataKey = Object.keys(this._tableData[0]);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuDisplayTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-display-table',
                template: "<div class=\"col content\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped \">\n    <thead>\n      <tr>\n        <th [style.color]=\"headerColor\" [style.font-size.px]=\"headerSize\" [style.font-weight]=\"headerWeight\"\n          *ngFor=\"let header of header;\" id=\"{{header.id}}\">{{header.title}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of tableData;\">\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\" [style.font-size.px]=\"dataSize\"\n          [style.font-weight]=\"dataWeight\"\n          [style.background-color]=\"\n        (data[key] === status[0]) ? colorPallete[0]: (data[key] === status[1]) ? colorPallete[1]: (data[key] === status[2]) ? colorPallete[2] :(data[key] === status[3]) ? colorPallete[3] : 'white'\">\n          <a *ngIf=\"key === hrefSelection\" href=\"{{data[key]}}\">{{data[key]}}</a>\n          <span *ngIf=\"!(key === hrefSelection)\">{{data[key]}}</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-6);text-transform:uppercase}.table{font-family:var(--suku-primary-font)}"]
            }] }
];
/** @nocollapse */
SukuDisplayTableComponent.ctorParameters = () => [];
SukuDisplayTableComponent.propDecorators = {
    header: [{ type: Input, args: ['table-header',] }],
    headerContent: [{ type: Input, args: ['table-header-content',] }],
    tableData: [{ type: Input, args: ['table-data',] }],
    titleOneId: [{ type: Input, args: ['title-one-id',] }],
    titleOneSize: [{ type: Input, args: ['title-one-size',] }],
    titleOneColor: [{ type: Input, args: ['title-one-color',] }],
    titleOneWeight: [{ type: Input, args: ['title-one-weight',] }],
    titleOneCustomClass: [{ type: Input, args: ['title-one-custom-class',] }],
    titleContent: [{ type: Input, args: ['title-one-Content',] }],
    headerSize: [{ type: Input, args: ['header-size',] }],
    headerColor: [{ type: Input, args: ['header-color',] }],
    headerWeight: [{ type: Input, args: ['header-weight',] }],
    dataSize: [{ type: Input, args: ['data-size',] }],
    dataColor: [{ type: Input, args: ['data-color',] }],
    dataWeight: [{ type: Input, args: ['data-weight',] }],
    hrefSelection: [{ type: Input, args: ['data-href',] }],
    colorPallete: [{ type: Input, args: ['status-bg-style',] }],
    status: [{ type: Input, args: ['status',] }]
};
if (false) {
    /** @type {?} */
    SukuDisplayTableComponent.prototype.header;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerContent;
    /** @type {?} */
    SukuDisplayTableComponent.prototype._tableData;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.tableDataKey;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneId;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleOneCustomClass;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.titleContent;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerSize;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerColor;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.headerWeight;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.dataSize;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.dataColor;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.dataWeight;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.hrefSelection;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.colorPallete;
    /** @type {?} */
    SukuDisplayTableComponent.prototype.status;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRpc3BsYXktdGFibGUvc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBUS9FLE1BQU0sT0FBTyx5QkFBeUI7SUFnQ3BDO1FBOUIrQixrQkFBYSxHQUFFLDBDQUEwQyxDQUFDO1FBaUJoRSxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUVoQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsaUJBQVksR0FBRSxTQUFTLENBQUM7UUFDOUIsZUFBVSxHQUFFLE1BQU0sQ0FBQztRQUdyQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR2xCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxXQUFNLEdBQUcsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUV6RSxDQUFDOzs7O0lBM0JELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQUksU0FBUyxDQUFDLEdBQUc7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7SUFrQkQsUUFBUTtJQUNSLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsbTZDQUFrRDs7YUFFbkQ7Ozs7O3FCQUVFLEtBQUssU0FBQyxjQUFjOzRCQUNwQixLQUFLLFNBQUMsc0JBQXNCO3dCQUk1QixLQUFLLFNBQUMsWUFBWTt5QkFXbEIsS0FBSyxTQUFDLGNBQWM7MkJBQ3JCLEtBQUssU0FBQyxnQkFBZ0I7NEJBQ3RCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3ZCLEtBQUssU0FBQyx3QkFBd0I7MkJBQzlCLEtBQUssU0FBQyxtQkFBbUI7eUJBQ3pCLEtBQUssU0FBQyxhQUFhOzBCQUNwQixLQUFLLFNBQUMsY0FBYzsyQkFDbkIsS0FBSyxTQUFDLGVBQWU7dUJBQ3JCLEtBQUssU0FBQyxXQUFXO3dCQUNsQixLQUFLLFNBQUMsWUFBWTt5QkFDakIsS0FBSyxTQUFDLGFBQWE7NEJBQ25CLEtBQUssU0FBQyxXQUFXOzJCQUNqQixLQUFLLFNBQUMsaUJBQWlCO3FCQUN2QixLQUFLLFNBQUMsUUFBUTs7OztJQTlCZiwyQ0FBOEI7O0lBQzlCLGtEQUF5Rjs7SUFDekYsK0NBQWdCOztJQUNoQixpREFBYTs7SUFhYiwrQ0FBa0M7O0lBQ25DLGlEQUFzQzs7SUFDdEMsa0RBQWtEOztJQUNsRCxtREFBMEM7O0lBQ3pDLHdEQUEwRDs7SUFDMUQsaURBQW9EOztJQUNwRCwrQ0FBeUM7O0lBQzFDLGdEQUFtQzs7SUFDbEMsaURBQXFDOztJQUNyQyw2Q0FBc0M7O0lBQ3ZDLDhDQUErQjs7SUFDOUIsK0NBQWlDOztJQUNqQyxrREFBNEM7O0lBQzVDLGlEQUFtRjs7SUFDbkYsMkNBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRpc3BsYXktdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURpc3BsYXlUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndGFibGUtaGVhZGVyJykgaGVhZGVyO1xuICBASW5wdXQoJ3RhYmxlLWhlYWRlci1jb250ZW50JykgaGVhZGVyQ29udGVudD0gJ2Nqa2Nzbm5zIHNqa2NzIGpra2pzIGtqa2pkIGtqZGZramRmIGprZGYnO1xuICBfdGFibGVEYXRhOiBhbnk7XG4gIHRhYmxlRGF0YUtleTtcblxuICBASW5wdXQoJ3RhYmxlLWRhdGEnKVxuICBnZXQgdGFibGVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl90YWJsZURhdGE7XG4gIH1cblxuICBzZXQgdGFibGVEYXRhKHZhbCkge1xuICAgIHRoaXMuX3RhYmxlRGF0YSA9IHZhbDtcbiAgICBpZiAodGhpcy5fdGFibGVEYXRhWzBdKSB7XG4gICAgICB0aGlzLnRhYmxlRGF0YUtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3RhYmxlRGF0YVswXSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcblx0QElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCd0aXRsZS1vbmUtQ29udGVudCcpIHRpdGxlQ29udGVudD0gJ05vLURhdGEnO1xuICBASW5wdXQoJ2hlYWRlci1zaXplJykgaGVhZGVyU2l6ZT0gJzE0cHgnO1xuXHRASW5wdXQoJ2hlYWRlci1jb2xvcicpIGhlYWRlckNvbG9yO1xuICBASW5wdXQoJ2hlYWRlci13ZWlnaHQnKSBoZWFkZXJXZWlnaHQ7XG4gIEBJbnB1dCgnZGF0YS1zaXplJykgZGF0YVNpemUgPSAnMTJweCc7XG5cdEBJbnB1dCgnZGF0YS1jb2xvcicpIGRhdGFDb2xvcjtcbiAgQElucHV0KCdkYXRhLXdlaWdodCcpIGRhdGFXZWlnaHQ7ICBcbiAgQElucHV0KCdkYXRhLWhyZWYnKSBocmVmU2VsZWN0aW9uID0gJ2xvdGlkJztcbiAgQElucHV0KCdzdGF0dXMtYmctc3R5bGUnKSBjb2xvclBhbGxldGUgPSBbXCIjYTNkZWQ4XCIsIFwiI2Y4ZGJiNFwiLCBcIiNjN2MzZmFcIiwgXCJncmF5XCJdO1xuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1cyA9IFtcImNvbXBsZXRlXCIsIFwiaW5jb21wbGV0ZVwiLCBcInBlbmRpbmdcIiwnb3RoZXJzJ107XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==