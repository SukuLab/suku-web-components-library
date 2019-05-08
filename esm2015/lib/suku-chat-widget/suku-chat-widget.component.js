/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, HostListener, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from '@angular/core';
export class SukuChatWidgetComponent {
    constructor() {
        this._imgPlaceholder = '../assets/images/group.svg';
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
        this.userImg = '../assets/images/group.svg';
        this.toUserImg = '../assets/images/group.svg';
        this.sendmessage = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    scrollHandler(event) {
        console.debug("Scroll Event");
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
                },
                to: {
                    userId: this.messageData[0].to.userId,
                    userName: this.messageData[0].to.userName,
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
        this.sendmessage.emit(this._messageObj);
        console.log("messageObj", this._messageObj);
        // this.messageData.push(this._messageObj);
    }
}
SukuChatWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-chat-widget',
                template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2>{{chat?.labelTwo}}<span class=\"pl-lg-2 pop-bold\"\n                id=\"{{chat?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <div id=\"scrollDiv\" class=\"chatBox p-1\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\" (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col\" [class.messageContainer]=\"item?.userId == item?.from?.userId\">\n            <div class=\"messageStyle mb-2\" [class.rightFloat]=\"item?.userId == item?.from?.userId\">\n              <img [src]=\"((item?.userId == item?.from?.userId)? userImg : toUserImg) || _imgPlaceholder\" alt=\"Avatar\"\n                class=\"user-icon m-1 p-1\"\n                [ngClass]=\"{'order-last align-self-end': item?.userId == item?.from?.userId }\">\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-2 chatMessage\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.from?.userId, 'receiverColor': item?.userId != item?.from?.userId }\">\n                      {{item?.message}}</p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.from?.userId, 'float-left': item?.userId != item?.from?.userId }\">\n                  {{item?.timestamp}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <!-- <div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\n              <button (click)=\"scrollToTop()\">\n                  <i class=\"fa fa-chevron-up\"></i>\n              </button>\n          </div> -->\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-sm-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.messageStyle{display:flex;width:100%}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.user-icon{vertical-align:middle;width:50px;height:50px;border-radius:50%}.rightFloat{justify-content:flex-end!important}.chatBox{height:300px!important;overflow-x:hidden!important}.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:10px;padding-top:.25rem;display:none;padding-left:.25rem;padding-right:.25rem;opacity:0}.messageContainer{float:right!important;width:80%}#messageBlock:hover+#timeStamp{display:block;opacity:1}.bg-light{background-color:#f2f2f2!important}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}"]
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
    userImg: [{ type: Input }],
    toUserImg: [{ type: Input }],
    sendmessage: [{ type: Output }],
    scrollHandler: [{ type: HostListener, args: ['window:scroll', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SukuChatWidgetComponent.prototype._messageObj;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._imgPlaceholder;
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
    SukuChatWidgetComponent.prototype.userImg;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.toUserImg;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.sendmessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU03QyxNQUFNLE9BQU8sdUJBQXVCO0lBc0JsQztRQXBCQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFBO1FBR3JDLFNBQUksR0FBRztZQUNkLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUM7UUFDTyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1FBQ25ELFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUN2QyxjQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzNCLENBQUM7Ozs7O0lBSGYsYUFBYSxDQUFDLEtBQUs7UUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBR0gsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRztnQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztnQkFDcEMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtnQkFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7aUJBQzVDO2dCQUNELEVBQUUsRUFBRTtvQkFDRixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7aUJBQzFDO2FBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBRztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsMkNBQTJDO0lBQzdDLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsODFHQUFnRDs7YUFFakQ7Ozs7O3FCQUlFLFNBQVMsU0FBQyx1QkFBdUI7bUJBRWpDLEtBQUs7eUJBTUwsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsTUFBTTs0QkFDTixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBakJ6Qyw4Q0FBWTs7SUFDWixrREFBOEM7O0lBQzlDLHlDQUNnQzs7SUFDaEMsdUNBS0U7O0lBQ0YsNkNBQStCOztJQUMvQiw2Q0FBNEI7O0lBQzVCLDhDQUEwQjs7SUFDMUIsMENBQTREOztJQUM1RCwwQ0FBZ0Q7O0lBQ2hELDRDQUFrRDs7SUFDbEQsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY2hhdC13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2hhdFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9tZXNzYWdlT2JqO1xuICBfaW1nUGxhY2Vob2xkZXIgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnXG4gIEBWaWV3Q2hpbGQoU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUpXG4gIHNjcm9sbDogU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmU7XG4gIEBJbnB1dCgpIGNoYXQgPSB7XG4gICAgbGFiZWxPbmU6ICdOZWdvdGlhdGlvbiBDaGF0IEJveCcsXG4gICAgbGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXG4gICAgbGFiZWxUd286ICdDaGF0dGluZyB3aXRoOicsXG4gICAgbGFiZWxUd29JZDogJ2NoYXR0aW5nV2l0aCdcbiAgfTtcbiAgQElucHV0KCkgY29udGVudE9uZSA9ICdDYW1pbGEnO1xuICBASW5wdXQoKSBjaGF0U3RhdHVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1lc3NhZ2VEYXRhID0gW107XG4gIEBJbnB1dCgpIEljb25TcmMgPSAnLi4vYXNzZXRzL2ltYWdlcy9zZW5kLW1lc3NhZ2UtaWNvbi5wbmcnO1xuICBASW5wdXQoKSB1c2VySW1nID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcbiAgQElucHV0KCkgdG9Vc2VySW1nID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcbiAgQE91dHB1dCgpIHNlbmRtZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJywgWyckZXZlbnQnXSkgXG4gICAgc2Nyb2xsSGFuZGxlcihldmVudCkge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcIlNjcm9sbCBFdmVudFwiKTtcbiAgICB9XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgaWYgKHRoaXMubWVzc2FnZURhdGEpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VPYmogPSB7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZURhdGFbMF0ubWVzc2FnZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmRhdGVUaW1lLFxuICAgICAgICB1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uZnJvbS51c2VySWQsXG4gICAgICAgIGZyb206IHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uZnJvbS51c2VySWQsXG4gICAgICAgICAgdXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0uZnJvbS51c2VyTmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgdG86IHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0udG8udXNlcklkLFxuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnRvLnVzZXJOYW1lLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbERvd24oKSB7XG4gICAgY29uc3Qgc3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbERpdicpO1xuICAgIGlmIChzc3MpIHtcbiAgICAgIHNzcy5zY3JvbGxUb3AgPSBzc3Muc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0LXNlbmQnLCB2YWwpO1xuICAgIHRoaXMuX21lc3NhZ2VPYmoubWVzc2FnZSA9IHZhbDtcbiAgICB0aGlzLl9tZXNzYWdlT2JqLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB0aGlzLnNlbmRtZXNzYWdlLmVtaXQodGhpcy5fbWVzc2FnZU9iaik7XG4gICAgY29uc29sZS5sb2coXCJtZXNzYWdlT2JqXCIsIHRoaXMuX21lc3NhZ2VPYmopO1xuICAgIC8vIHRoaXMubWVzc2FnZURhdGEucHVzaCh0aGlzLl9tZXNzYWdlT2JqKTtcbiAgfVxuXG59XG5cbiJdfQ==