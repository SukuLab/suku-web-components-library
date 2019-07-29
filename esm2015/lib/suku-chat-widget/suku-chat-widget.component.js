/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, HostListener, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from '@angular/core';
export class SukuChatWidgetComponent {
    constructor() {
        this._imgPlaceholder = '../assets/images/group.svg';
        this._userImg = '../assets/images/group.svg';
        this._toUserImg = '../assets/images/group.svg';
        this.chat = {
            labelOne: 'Negotiation Chat Box',
            labelOneId: 'negotiationChatBox',
            labelTwo: 'Chatting with:',
            labelTwoId: 'chattingWith'
        };
        this.toUserName = 'N/A';
        this.toUserNameId = 'touserName';
        this.chatStatus = false;
        this.messageData = [];
        this.sendMessageIconSrc = '../assets/images/send-message-icon.png';
        this.sendmessage = new EventEmitter();
        this.userAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get userImg() {
        return this._userImg;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set userImg(val) {
        this._userImg = val;
    }
    /**
     * @return {?}
     */
    get toUserImg() {
        return this._userImg;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set toUserImg(val) {
        this._toUserImg = val;
    }
    /**
     * @return {?}
     */
    get chkmessageStatus() {
        return this._chkmessageStatus;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set chkmessageStatus(val) {
        this._chkmessageStatus = val;
        if (this._chkmessageStatus) {
            this.scrollToBottom();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    scrollHandler(event) {
        if (this._initialScrollHeight.scrollHeight - event.target.scrollTop > 390) {
            this._showScrollDownIcon = true; // enable scrollToBottomOnClik()
            console.log('true');
        }
        else {
            this._showScrollDownIcon = false;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.messageData.length > 0) {
            this._messageObj = {
                message: this.messageData[0].message,
                timestamp: this.messageData[0].dateTime,
                userId: this.messageData[0].sender.userId,
                sender: {
                    userId: this.messageData[0].sender.userId,
                    userName: this.messageData[0].sender.userName
                },
                receiver: {
                    userId: this.messageData[0].receiver.userId,
                    userName: this.messageData[0].receiver.userName
                }
            };
        }
        this._initialScrollHeight = document.querySelector('.chatBox');
        this._oldMessage = this.messageData;
        this.scrollToBottom();
    }
    /**
     * @return {?}
     */
    action() {
        if (this.messageData) {
            this.userAction.emit(this.messageData[0].receiver);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    sendMessage(val) {
        console.log('test-send', val);
        this.sendmessage.emit(val);
        this.scrollToBottom();
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        /** @type {?} */
        const someElement = document.querySelector('.chatBox');
        console.log('sd', someElement.scrollTop);
        /** @type {?} */
        const duration = 300;
        this.animateScroll(duration);
    }
    /**
     * @param {?} duration
     * @return {?}
     */
    animateScroll(duration) {
        /** @type {?} */
        const someElement = document.getElementById('scrollDiv');
        /** @type {?} */
        const start = someElement.scrollTop;
        /** @type {?} */
        const end = someElement.scrollHeight;
        /** @type {?} */
        const change = end - start;
        /** @type {?} */
        const increment = 20;
        /**
         * @param {?} currentTime
         * @param {?} startPos
         * @param {?} changePos
         * @param {?} delay
         * @return {?}
         */
        function easeInOut(currentTime, startPos, changePos, delay) {
            currentTime /= delay / 2;
            if (currentTime < 1) {
                return changePos / 2 * currentTime * currentTime + startPos;
            }
            currentTime -= 1;
            return -changePos / 2 * (currentTime * (currentTime - 2) - 1) + start;
        }
        /**
         * @param {?} elapsedTime
         * @return {?}
         */
        function animate(elapsedTime) {
            elapsedTime += increment;
            /** @type {?} */
            const position = easeInOut(elapsedTime, start, change, duration);
            someElement.scrollTop = position;
            if (elapsedTime < duration) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    animate(elapsedTime);
                }), increment);
            }
        }
        animate(0);
    }
}
SukuChatWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-chat-widget',
                template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mcb-10 p-2 align-end\"\n                [ngClass]=\"{'order-last ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? _userImg : _toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mct-12 \"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'medium'}}</p>\n              </span>\n            </div>  \n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\n            <input class=\"form-control\" [disabled]=\"chatStatus\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"sendMessageIconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.title{color:#fafaf8;font-size:26px;font-family:var(--suku-primary-font)!important;font-weight:200!important}h1{color:#fafaf8;font-size:var(--suku-font-size-5);font-family:var(--suku-primary-font)!important;font-weight:200!important}h2{color:var(--suku-text-sub-heading);font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font)!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:var(--suku-primary-font)!important;font-weight:700;font-size:var(--suku-font-size-3)}.pop-bold{font-family:var(--suku-primary-font)!important;font-weight:600!important;font-size:var(--suku-font-size-5)}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid var(--suku-primary-color);border-bottom:4px solid var(--suku-primary-color)}.chat-header{background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:var(--suku-primary-font)!important;font-weight:400;font-size:var(--suku-font-size-3)}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.mct-12{margin-top:12px}.mcb-10{margin-bottom:10px}.align-end{align-self:flex-end}.senderColor{background-color:var(--suku-primary-color)!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:var(--suku-primary-font)!important;font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:3px;bottom:78px}#ScrollDownbutton:hover{position:absolute;right:3px;bottom:70px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
            }] }
];
/** @nocollapse */
SukuChatWidgetComponent.ctorParameters = () => [];
SukuChatWidgetComponent.propDecorators = {
    scroll: [{ type: ViewChild, args: [ScrollToBottomDirective,] }],
    chat: [{ type: Input }],
    toUserName: [{ type: Input }],
    toUserNameId: [{ type: Input }],
    chatStatus: [{ type: Input }],
    messageData: [{ type: Input }],
    sendMessageIconSrc: [{ type: Input }],
    userImg: [{ type: Input }],
    toUserImg: [{ type: Input }],
    chkmessageStatus: [{ type: Input }],
    sendmessage: [{ type: Output }],
    userAction: [{ type: Output }],
    scrollHandler: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SukuChatWidgetComponent.prototype._messageObj;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._imgPlaceholder;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._userImg;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._toUserImg;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._scrollHeight;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._touserID;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._initialScrollHeight;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._showScrollDownIcon;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._chkmessageStatus;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._oldMessage;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._newMessageCount;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.scroll;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chat;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.toUserName;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.toUserNameId;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chatStatus;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.messageData;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.sendMessageIconSrc;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.sendmessage;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.userAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU83QyxNQUFNLE9BQU8sdUJBQXVCO0lBaUVuQztRQS9EQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBQy9DLGFBQVEsR0FBRyw0QkFBNEIsQ0FBQztRQUN4QyxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFXMUMsU0FBSSxHQUFHO1lBQ04sUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsVUFBVSxFQUFFLGNBQWM7U0FDMUIsQ0FBQztRQUNPLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix1QkFBa0IsR0FBRyx3Q0FBd0MsQ0FBQztRQTBCN0QsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBYTFCLENBQUM7Ozs7SUF2Q2pCLElBQ0ksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEdBQUc7UUFDZCxJQUFJ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QzthQUNkO1FBQ0YsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7OztZQXpJRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIscXhIQUFnRDs7YUFFaEQ7Ozs7O3FCQWNDLFNBQVMsU0FBQyx1QkFBdUI7bUJBQ2pDLEtBQUs7eUJBT0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLO3NCQUNMLEtBQUs7d0JBT0wsS0FBSzsrQkFPTCxLQUFLOzBCQVdMLE1BQU07eUJBQ04sTUFBTTs0QkFFTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBckRsQyw4Q0FBWTs7SUFDWixrREFBK0M7O0lBQy9DLDJDQUF3Qzs7SUFDeEMsNkNBQTBDOztJQUMxQyxnREFBYzs7SUFDZCw0Q0FBVTs7SUFDVix1REFBcUI7O0lBQ3JCLHNEQUFvQjs7SUFDcEIsb0RBQWtCOztJQUNsQiw4Q0FBWTs7SUFDWixtREFBaUI7O0lBRWpCLHlDQUFvRTs7SUFDcEUsdUNBTUU7O0lBQ0YsNkNBQTRCOztJQUM1QiwrQ0FBcUM7O0lBQ3JDLDZDQUE0Qjs7SUFDNUIsOENBQTBCOztJQUMxQixxREFBdUU7O0lBMEJ2RSw4Q0FBMkM7O0lBQzNDLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSB9IGZyb20gJy4vc3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtY2hhdC13aWRnZXQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2hhdFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdF9tZXNzYWdlT2JqO1xuXHRfaW1nUGxhY2Vob2xkZXIgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXHRfdXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XG5cdF90b1VzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXHRfc2Nyb2xsSGVpZ2h0O1xuXHRfdG91c2VySUQ7XG5cdF9pbml0aWFsU2Nyb2xsSGVpZ2h0O1xuXHRfc2hvd1Njcm9sbERvd25JY29uO1xuXHRfY2hrbWVzc2FnZVN0YXR1cztcblx0X29sZE1lc3NhZ2U7XG5cdF9uZXdNZXNzYWdlQ291bnQ7XG5cblx0QFZpZXdDaGlsZChTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSkgc2Nyb2xsOiBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZTtcblx0QElucHV0KClcblx0Y2hhdCA9IHtcblx0XHRsYWJlbE9uZTogJ05lZ290aWF0aW9uIENoYXQgQm94Jyxcblx0XHRsYWJlbE9uZUlkOiAnbmVnb3RpYXRpb25DaGF0Qm94Jyxcblx0XHRsYWJlbFR3bzogJ0NoYXR0aW5nIHdpdGg6Jyxcblx0XHRsYWJlbFR3b0lkOiAnY2hhdHRpbmdXaXRoJ1xuXHR9O1xuXHRASW5wdXQoKSB0b1VzZXJOYW1lID0gJ04vQSc7XG5cdEBJbnB1dCgpIHRvVXNlck5hbWVJZCA9ICd0b3VzZXJOYW1lJztcblx0QElucHV0KCkgY2hhdFN0YXR1cyA9IGZhbHNlO1xuXHRASW5wdXQoKSBtZXNzYWdlRGF0YSA9IFtdO1xuXHRASW5wdXQoKSBzZW5kTWVzc2FnZUljb25TcmMgPSAnLi4vYXNzZXRzL2ltYWdlcy9zZW5kLW1lc3NhZ2UtaWNvbi5wbmcnO1xuXHRASW5wdXQoKVxuXHRnZXQgdXNlckltZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXNlckltZztcblx0fVxuXHRzZXQgdXNlckltZyh2YWwpIHtcblx0XHR0aGlzLl91c2VySW1nID0gdmFsO1xuXHR9XG5cdEBJbnB1dCgpXG5cdGdldCB0b1VzZXJJbWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJJbWc7XG5cdH1cblx0c2V0IHRvVXNlckltZyh2YWwpIHtcblx0XHR0aGlzLl90b1VzZXJJbWcgPSB2YWw7XG5cdH1cblx0QElucHV0KClcblx0Z2V0IGNoa21lc3NhZ2VTdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Noa21lc3NhZ2VTdGF0dXM7XG5cdH1cblx0c2V0IGNoa21lc3NhZ2VTdGF0dXModmFsKSB7XG5cdFx0dGhpcy5fY2hrbWVzc2FnZVN0YXR1cyA9IHZhbDtcblx0XHRpZiAodGhpcy5fY2hrbWVzc2FnZVN0YXR1cykge1xuXHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXHRcdH1cblx0fVxuXG5cdEBPdXRwdXQoKSBzZW5kbWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHVzZXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcblx0c2Nyb2xsSGFuZGxlcihldmVudCkge1xuXHRcdGlmICh0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0LnNjcm9sbEhlaWdodCAtIGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiAzOTApIHtcblx0XHRcdHRoaXMuX3Nob3dTY3JvbGxEb3duSWNvbiA9IHRydWU7IC8vIGVuYWJsZSBzY3JvbGxUb0JvdHRvbU9uQ2xpaygpXG5cdFx0XHRjb25zb2xlLmxvZygndHJ1ZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMubWVzc2FnZURhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fbWVzc2FnZU9iaiA9IHtcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5tZXNzYWdlRGF0YVswXS5tZXNzYWdlLFxuXHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMubWVzc2FnZURhdGFbMF0uZGF0ZVRpbWUsXG5cdFx0XHRcdHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkLFxuXHRcdFx0XHRzZW5kZXI6IHtcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJJZCxcblx0XHRcdFx0XHR1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlck5hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVjZWl2ZXI6IHtcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlcklkLFxuXHRcdFx0XHRcdHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnJlY2VpdmVyLnVzZXJOYW1lXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMuX2luaXRpYWxTY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuXHRcdHRoaXMuX29sZE1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VEYXRhO1xuXHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblx0fVxuXG5cdGFjdGlvbigpIHtcblx0XHRpZiAodGhpcy5tZXNzYWdlRGF0YSkge1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uLmVtaXQodGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlcik7XG5cdFx0fVxuXHR9XG5cblx0c2VuZE1lc3NhZ2UodmFsKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rlc3Qtc2VuZCcsIHZhbCk7XG5cdFx0dGhpcy5zZW5kbWVzc2FnZS5lbWl0KHZhbCk7XG5cdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXHR9XG5cblx0c2Nyb2xsVG9Cb3R0b20oKSB7XG5cdFx0Y29uc3Qgc29tZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuXHRcdGNvbnNvbGUubG9nKCdzZCcsIHNvbWVFbGVtZW50LnNjcm9sbFRvcCk7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSAzMDA7XG5cdFx0dGhpcy5hbmltYXRlU2Nyb2xsKGR1cmF0aW9uKTtcblx0fVxuXG5cdGFuaW1hdGVTY3JvbGwoZHVyYXRpb24pIHtcblx0XHRjb25zdCBzb21lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxEaXYnKTtcblx0XHRjb25zdCBzdGFydCA9IHNvbWVFbGVtZW50LnNjcm9sbFRvcDtcblx0XHRjb25zdCBlbmQgPSBzb21lRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cdFx0Y29uc3QgY2hhbmdlID0gZW5kIC0gc3RhcnQ7XG5cdFx0Y29uc3QgaW5jcmVtZW50ID0gMjA7XG5cdFx0ZnVuY3Rpb24gZWFzZUluT3V0KGN1cnJlbnRUaW1lLCBzdGFydFBvcywgY2hhbmdlUG9zLCBkZWxheSkge1xuXHRcdFx0Y3VycmVudFRpbWUgLz0gZGVsYXkgLyAyO1xuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gY2hhbmdlUG9zIC8gMiAqIGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUgKyBzdGFydFBvcztcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRUaW1lIC09IDE7XG5cdFx0XHRyZXR1cm4gLWNoYW5nZVBvcyAvIDIgKiAoY3VycmVudFRpbWUgKiAoY3VycmVudFRpbWUgLSAyKSAtIDEpICsgc3RhcnQ7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGFuaW1hdGUoZWxhcHNlZFRpbWUpIHtcblx0XHRcdGVsYXBzZWRUaW1lICs9IGluY3JlbWVudDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZWFzZUluT3V0KGVsYXBzZWRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG5cdFx0XHRzb21lRWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcblx0XHRcdGlmIChlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGFuaW1hdGUoZWxhcHNlZFRpbWUpO1xuXHRcdFx0XHR9LCBpbmNyZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRhbmltYXRlKDApO1xuXHR9XG59XG4iXX0=