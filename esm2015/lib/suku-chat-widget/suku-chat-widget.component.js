/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from 'events';
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
        this.IconSrc = '../assets/images/send-message-icon.png';
        this.message = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        this._messageObj.message = val;
        this._messageObj.timestamp = new Date().toLocaleString();
        this.message.emit(this._messageObj);
        console.log("messageObj", this._messageObj);
        this.messageData.push(this._messageObj);
    }
}
SukuChatWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-chat-widget',
                template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2>{{chat?.labelTwo}}<span class=\"pl-lg-2 pop-bold\"\n                id=\"{{chat?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <div id=\"scrollDiv\" class=\"chatBox p-1\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col\" [class.messageContainer]=\"item?.userId == item?.from?.userId\">\n            <div class=\"messageStyle mb-2\" [class.rightFloat]=\"item?.userId == item?.from?.userId\">\n              <img [src]=\"((item?.userId == item?.from?.userId)? item?.from?.userImg : item?.to?.userImg)\" alt=\"Avatar\"\n                class=\"user-icon m-1 p-1\"\n                [ngClass]=\"{'order-last align-self-end': item?.userId == item?.from?.userId }\">\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-2 chatMessage\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.from?.userId, 'receiverColor': item?.userId != item?.from?.userId }\">\n                      {{item?.message}}</p>\n                  </span>\n                </div>\n                <p class=\"timeStamp mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.from?.userId, 'float-left': item?.userId != item?.from?.userId }\">\n                  {{item?.timestamp}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <!--  <div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\n              <button (click)=\"scrollToTop()\">\n                  <i class=\"fa fa-chevron-up\"></i>\n              </button>\n          </div> -->\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-sm-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.messageStyle{display:flex;width:100%}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.user-icon{vertical-align:middle;width:50px;height:50px;border-radius:50%}.rightFloat{justify-content:flex-end!important}.chatBox{height:300px!important;overflow-x:hidden!important}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control:focus{color:#495057;background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:10px;padding-top:.25rem;display:none;padding-left:.25rem;padding-right:.25rem;opacity:0;transition:.5s ease-in-out}.messageContainer{float:right!important;width:83%}#messageBlock:hover+#timeStamp{display:block;opacity:1}.bg-light{background-color:#f2f2f2!important}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(90)!important;transform:rotate(90)!important}.scroll-to-top{position:fixed;bottom:15px;right:15px;opacity:0;transition:.2s ease-in-out}.show-scrollTop{opacity:1;transition:.2s ease-in-out}"]
            }] }
];
/** @nocollapse */
SukuChatWidgetComponent.ctorParameters = () => [];
SukuChatWidgetComponent.propDecorators = {
    scroll: [{ type: ViewChild, args: [ScrollToBottomDirective,] }],
    chat: [{ type: Input }],
    contentOne: [{ type: Input }],
    chatStatus: [{ type: Input }],
    messageData: [{ type: Input }],
    IconSrc: [{ type: Input }],
    message: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUF3QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQU10QyxNQUFNLE9BQU8sdUJBQXVCO0lBZWxDO1FBWFMsU0FBSSxHQUFHO1lBQ2QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsVUFBVSxFQUFFLGNBQWM7U0FDM0IsQ0FBQztRQUNPLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixZQUFPLEdBQUcsd0NBQXdDLENBQUM7UUFDbEQsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDM0MsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87aUJBQzFDO2dCQUNELEVBQUUsRUFBRTtvQkFDRixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7b0JBQ3pDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPO2lCQUN4QzthQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQUc7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHUwR0FBZ0Q7O2FBRWpEOzs7OztxQkFHRSxTQUFTLFNBQUMsdUJBQXVCO21CQUVqQyxLQUFLO3lCQU1MLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsTUFBTTs7OztJQWJQLDhDQUFZOztJQUNaLHlDQUNnQzs7SUFDaEMsdUNBS0U7O0lBQ0YsNkNBQStCOztJQUMvQiw2Q0FBNEI7O0lBQzVCLDhDQUEwQjs7SUFDMUIsMENBQTREOztJQUM1RCwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUgfSBmcm9tICcuL3N1a3UtY2hhdC1zY3JvbGwtZGlyZWN0aXZlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNoYXQtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoYXRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfbWVzc2FnZU9iajtcbiAgQFZpZXdDaGlsZChTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSlcbiAgc2Nyb2xsOiBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZTtcbiAgQElucHV0KCkgY2hhdCA9IHtcbiAgICBsYWJlbE9uZTogJ05lZ290aWF0aW9uIENoYXQgQm94JyxcbiAgICBsYWJlbE9uZUlkOiAnbmVnb3RpYXRpb25DaGF0Qm94JyxcbiAgICBsYWJlbFR3bzogJ0NoYXR0aW5nIHdpdGg6JyxcbiAgICBsYWJlbFR3b0lkOiAnY2hhdHRpbmdXaXRoJ1xuICB9O1xuICBASW5wdXQoKSBjb250ZW50T25lID0gJ0NhbWlsYSc7XG4gIEBJbnB1dCgpIGNoYXRTdGF0dXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbWVzc2FnZURhdGEgPSBbXTtcbiAgQElucHV0KCkgSWNvblNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3NlbmQtbWVzc2FnZS1pY29uLnBuZyc7XG4gIEBPdXRwdXQoKSBtZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgIGlmICh0aGlzLm1lc3NhZ2VEYXRhKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlT2JqID0ge1xuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLm1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogdGhpcy5tZXNzYWdlRGF0YVswXS5kYXRlVGltZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmZyb20udXNlcklkLFxuICAgICAgICBmcm9tOiB7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmZyb20udXNlcklkLFxuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmZyb20udXNlck5hbWUsXG4gICAgICAgICAgdXNlckltZzogdGhpcy5tZXNzYWdlRGF0YVswXS5mcm9tLnVzZXJJbWcsXG4gICAgICAgIH0sXG4gICAgICAgIHRvOiB7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnRvLnVzZXJJZCxcbiAgICAgICAgICB1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS50by51c2VyTmFtZSxcbiAgICAgICAgICB1c2VySW1nOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnRvLnVzZXJJbWcsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsRG93bigpIHtcbiAgICBjb25zdCBzc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsRGl2Jyk7XG4gICAgaWYgKHNzcykge1xuICAgICAgc3NzLnNjcm9sbFRvcCA9IHNzcy5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2UodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3Qtc2VuZCcsIHZhbCk7XG4gICAgdGhpcy5fbWVzc2FnZU9iai5tZXNzYWdlID0gdmFsO1xuICAgIHRoaXMuX21lc3NhZ2VPYmoudGltZXN0YW1wID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgIHRoaXMubWVzc2FnZS5lbWl0KHRoaXMuX21lc3NhZ2VPYmopO1xuICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZU9ialwiLCB0aGlzLl9tZXNzYWdlT2JqKTtcbiAgICB0aGlzLm1lc3NhZ2VEYXRhLnB1c2godGhpcy5fbWVzc2FnZU9iaik7XG4gIH1cblxufVxuXG4iXX0=