/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from 'events';
var SukuChatWidgetComponent = /** @class */ (function () {
    function SukuChatWidgetComponent() {
        this.chat = {
            labelOne: 'Negotiation Chat Box',
            labelOneId: 'negotiationChatBox',
            labelTwo: 'Chatting with:',
            labelTwoId: 'chattingWith'
        };
        this.contentOne = 'Camila';
        this.chatStatus = false;
        this.messageData = [];
        this.IconSrc = '../assets/images/send-message-icon.png';
        this.message = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.scrollDown();
        if (this.messageData) {
            this._messageObj = {
                message: this.messageData[0].message,
                timestamp: this.messageData[0].dateTime,
                userId: this.messageData[0].from.userId,
                from: {
                    userId: this.messageData[0].from.userId,
                    userName: this.messageData[0].from.userName,
                    userImg: this.messageData[0].from.userImg,
                },
                to: {
                    userId: this.messageData[0].to.userId,
                    userName: this.messageData[0].to.userName,
                    userImg: this.messageData[0].to.userImg,
                }
            };
        }
    };
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.scrollDown = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sss = document.getElementById('scrollDiv');
        if (sss) {
            sss.scrollTop = sss.scrollHeight;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.sendMessage = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('test-send', val);
        this._messageObj.message = val;
        this._messageObj.timestamp = new Date().toLocaleString();
        this.message.emit(this._messageObj);
        console.log("messageObj", this._messageObj);
        this.messageData.push(this._messageObj);
    };
    SukuChatWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-chat-widget',
                    template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2>{{chat?.labelTwo}}<span class=\"pl-lg-2 pop-bold\"\n                id=\"{{chat?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <div id=\"scrollDiv\" class=\"chatBox p-1\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col\" [class.messageContainer]=\"item?.userId == item?.from?.userId\">\n            <div class=\"messageStyle mb-2\" [class.rightFloat]=\"item?.userId == item?.from?.userId\">\n              <img [src]=\"((item?.userId == item?.from?.userId)? item?.from?.userImg : item?.to?.userImg)\" alt=\"Avatar\"\n                class=\"user-icon m-1 p-1\"\n                [ngClass]=\"{'order-last align-self-end': item?.userId == item?.from?.userId }\">\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-2 chatMessage\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.from?.userId, 'receiverColor': item?.userId != item?.from?.userId }\">\n                      {{item?.message}}</p>\n                  </span>\n                </div>\n                <p class=\"timeStamp mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.from?.userId, 'float-left': item?.userId != item?.from?.userId }\">\n                  {{item?.timestamp}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <!--  <div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\n              <button (click)=\"scrollToTop()\">\n                  <i class=\"fa fa-chevron-up\"></i>\n              </button>\n          </div> -->\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-sm-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.messageStyle{display:flex;width:100%}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.user-icon{vertical-align:middle;width:50px;height:50px;border-radius:50%}.rightFloat{justify-content:flex-end!important}.chatBox{height:300px!important;overflow-x:hidden!important}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control:focus{color:#495057;background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:10px;padding-top:.25rem;display:none;padding-left:.25rem;padding-right:.25rem;opacity:0;transition:.5s ease-in-out}.messageContainer{float:right!important;width:83%}#messageBlock:hover+#timeStamp{display:block;opacity:1}.bg-light{background-color:#f2f2f2!important}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(90)!important;transform:rotate(90)!important}.scroll-to-top{position:fixed;bottom:15px;right:15px;opacity:0;transition:.2s ease-in-out}.show-scrollTop{opacity:1;transition:.2s ease-in-out}"]
                }] }
    ];
    /** @nocollapse */
    SukuChatWidgetComponent.ctorParameters = function () { return []; };
    SukuChatWidgetComponent.propDecorators = {
        scroll: [{ type: ViewChild, args: [ScrollToBottomDirective,] }],
        chat: [{ type: Input }],
        contentOne: [{ type: Input }],
        chatStatus: [{ type: Input }],
        messageData: [{ type: Input }],
        IconSrc: [{ type: Input }],
        message: [{ type: Output }]
    };
    return SukuChatWidgetComponent;
}());
export { SukuChatWidgetComponent };
if (false) {
    /** @type {?} */
    SukuChatWidgetComponent.prototype._messageObj;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.scroll;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chat;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.contentOne;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chatStatus;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.messageData;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.IconSrc;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUF3QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QztJQW9CRTtRQVhTLFNBQUksR0FBRztZQUNkLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUM7UUFDTyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1FBQ2xELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFakIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDM0MsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87aUJBQzFDO2dCQUNELEVBQUUsRUFBRTtvQkFDRixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7b0JBQ3pDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPO2lCQUN4QzthQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7O1lBQ1EsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksR0FBRztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsdTBHQUFnRDs7aUJBRWpEOzs7Ozt5QkFHRSxTQUFTLFNBQUMsdUJBQXVCO3VCQUVqQyxLQUFLOzZCQU1MLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsTUFBTTs7SUF3Q1QsOEJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXREWSx1QkFBdUI7OztJQUNsQyw4Q0FBWTs7SUFDWix5Q0FDZ0M7O0lBQ2hDLHVDQUtFOztJQUNGLDZDQUErQjs7SUFDL0IsNkNBQTRCOztJQUM1Qiw4Q0FBMEI7O0lBQzFCLDBDQUE0RDs7SUFDNUQsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jaGF0LXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDaGF0V2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX21lc3NhZ2VPYmo7XG4gIEBWaWV3Q2hpbGQoU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUpXG4gIHNjcm9sbDogU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmU7XG4gIEBJbnB1dCgpIGNoYXQgPSB7XG4gICAgbGFiZWxPbmU6ICdOZWdvdGlhdGlvbiBDaGF0IEJveCcsXG4gICAgbGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXG4gICAgbGFiZWxUd286ICdDaGF0dGluZyB3aXRoOicsXG4gICAgbGFiZWxUd29JZDogJ2NoYXR0aW5nV2l0aCdcbiAgfTtcbiAgQElucHV0KCkgY29udGVudE9uZSA9ICdDYW1pbGEnO1xuICBASW5wdXQoKSBjaGF0U3RhdHVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1lc3NhZ2VEYXRhID0gW107XG4gIEBJbnB1dCgpIEljb25TcmMgPSAnLi4vYXNzZXRzL2ltYWdlcy9zZW5kLW1lc3NhZ2UtaWNvbi5wbmcnO1xuICBAT3V0cHV0KCkgbWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICBpZiAodGhpcy5tZXNzYWdlRGF0YSkge1xuICAgICAgdGhpcy5fbWVzc2FnZU9iaiA9IHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlRGF0YVswXS5tZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IHRoaXMubWVzc2FnZURhdGFbMF0uZGF0ZVRpbWUsXG4gICAgICAgIHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5mcm9tLnVzZXJJZCxcbiAgICAgICAgZnJvbToge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5mcm9tLnVzZXJJZCxcbiAgICAgICAgICB1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS5mcm9tLnVzZXJOYW1lLFxuICAgICAgICAgIHVzZXJJbWc6IHRoaXMubWVzc2FnZURhdGFbMF0uZnJvbS51c2VySW1nLFxuICAgICAgICB9LFxuICAgICAgICB0bzoge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS50by51c2VySWQsXG4gICAgICAgICAgdXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0udG8udXNlck5hbWUsXG4gICAgICAgICAgdXNlckltZzogdGhpcy5tZXNzYWdlRGF0YVswXS50by51c2VySW1nLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbERvd24oKSB7XG4gICAgY29uc3Qgc3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbERpdicpO1xuICAgIGlmIChzc3MpIHtcbiAgICAgIHNzcy5zY3JvbGxUb3AgPSBzc3Muc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0LXNlbmQnLCB2YWwpO1xuICAgIHRoaXMuX21lc3NhZ2VPYmoubWVzc2FnZSA9IHZhbDtcbiAgICB0aGlzLl9tZXNzYWdlT2JqLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB0aGlzLm1lc3NhZ2UuZW1pdCh0aGlzLl9tZXNzYWdlT2JqKTtcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VPYmpcIiwgdGhpcy5fbWVzc2FnZU9iaik7XG4gICAgdGhpcy5tZXNzYWdlRGF0YS5wdXNoKHRoaXMuX21lc3NhZ2VPYmopO1xuICB9XG5cbn1cblxuIl19