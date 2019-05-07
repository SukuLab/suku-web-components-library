/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuChatWidgetComponent {
    constructor() {
        this.chat = {
            labelOne: 'Negotiation Chat Box',
            labelOneId: 'negotiationChatBox',
            labelTwo: 'Chatting with:',
            labelTwoId: 'chattingWith'
        };
        this.contentOne = 'Camila';
        this.chatStatus = false;
        this.messageData = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.scrollDown();
    }
    /**
     * @return {?}
     */
    scrollDown() {
        /** @type {?} */
        const sss = document.getElementById('scrollDiv');
        if (sss) {
            sss.scrollTop = sss.scrollHeight;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    sendMessage(val) {
        console.log('test-send', val);
        this.scrollDown();
    }
}
SukuChatWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-chat-widget',
                template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2>{{chat?.labelTwo}}<span class=\"pl-lg-2 pop-bold\"\n                id=\"{{chat?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <div id=\"scrollDiv\" class=\"chatBox p-1\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\">\n          <div class=\"col\">\n            <div class=\"messageStyle mb-2\" [class.rightFloat]=\"item?.to?.userId == item?.from?.userId\">\n              <img [src]=\"((item?.userId == item?.from?.userId)? item?.from?.userImg : item?.to?.userImg)\" alt=\"Avatar\"\n                class=\"user-icon m-1 p-1\"\n                [ngClass]=\"{'order-last align-self-end': item?.userId == item?.from?.userId }\">\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\" class=\"msg-content hoverable\">\n                <div class=\"d-flex\" id=\"messageBlock\" [ngClass]=\"{ 'float-right': item?.to?.userId == item?.from?.userId}\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-2 chatMessage\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.from?.userId, 'receiverColor': item?.userId != item?.from?.userId }\">\n                      {{item?.message}}</p>\n                  </span>\n                </div>\n                <p class=\"timeStamp mb-0\" id=\"timeStamp\">{{item?.timestamp}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-sm-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 mx-auto mt-2 f22 fa fa-paper-plane-o c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.messageStyle{display:flex;width:100%;float:left}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.user-icon{vertical-align:middle;width:50px;height:50px;border-radius:50%}.rightFloat{justify-content:flex-end!important}.chatBox{height:300px!important;overflow-x:hidden!important}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important}.form-control:focus{color:#495057;background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:12px;padding-left:.75rem;padding-top:.25rem;display:none}#messageBlock{width:80%}#messageBlock:hover+#timeStamp{display:block}"]
            }] }
];
/** @nocollapse */
SukuChatWidgetComponent.ctorParameters = () => [];
SukuChatWidgetComponent.propDecorators = {
    chat: [{ type: Input }],
    contentOne: [{ type: Input }],
    chatStatus: [{ type: Input }],
    messageData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chat;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.contentOne;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chatStatus;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.messageData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQztRQVZTLFNBQUksR0FBRztZQUNkLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUM7UUFDTyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFFVixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBRztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGt1RkFBZ0Q7O2FBRWpEOzs7OzttQkFHRSxLQUFLO3lCQU1MLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBUk4sdUNBS0U7O0lBQ0YsNkNBQStCOztJQUMvQiw2Q0FBNEI7O0lBQzVCLDhDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNoYXQtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoYXRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNoYXQgPSB7XG4gICAgbGFiZWxPbmU6ICdOZWdvdGlhdGlvbiBDaGF0IEJveCcsXG4gICAgbGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXG4gICAgbGFiZWxUd286ICdDaGF0dGluZyB3aXRoOicsXG4gICAgbGFiZWxUd29JZDogJ2NoYXR0aW5nV2l0aCdcbiAgfTtcbiAgQElucHV0KCkgY29udGVudE9uZSA9ICdDYW1pbGEnO1xuICBASW5wdXQoKSBjaGF0U3RhdHVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1lc3NhZ2VEYXRhID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgfVxuXG4gIHNjcm9sbERvd24oKSB7XG4gICAgY29uc3Qgc3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbERpdicpO1xuICAgIGlmIChzc3MpIHtcbiAgICAgIHNzcy5zY3JvbGxUb3AgPSBzc3Muc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0LXNlbmQnLCB2YWwpO1xuICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICB9XG5cbn1cblxuIl19