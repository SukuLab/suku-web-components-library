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
                template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 chat-header p-3\">\r\n      <div class=\"col p-0\">\r\n        <div class=\"col p-0\">\r\n          <div class=\"col-sm-12\">\r\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\r\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\r\n            </h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\r\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\r\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\r\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\r\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\r\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\r\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\r\n              <span class=\"mcb-10 p-2 align-end\"\r\n                [ngClass]=\"{'order-last ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\r\n                <img [src]=\"((item?.userId == item?.sender?.userId)? _userImg : _toUserImg) || _imgPlaceholder\"\r\n                  alt=\"Avatar\" class=\"user-icon\">\r\n              </span>\r\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\r\n                class=\"msg-content hoverable\">\r\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\r\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\r\n                    <p class=\"p-2 mb-0 mct-12 \"\r\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\r\n                      <span class=\"chatMessage\">{{item?.message}}</span>\r\n                    </p>\r\n                  </span>\r\n                </div>\r\n                <p class=\"mb-0\" id=\"timeStamp\"\r\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\r\n                  {{item?.timestamp | date:'medium'}}</p>\r\n              </span>\r\n            </div>  \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <!-- to scroll down -->\r\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\r\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\r\n        </div>\r\n        <div class=\"row p-3 bg-light\">\r\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\r\n            <input class=\"form-control\" [disabled]=\"chatStatus\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\r\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\r\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\r\n          </div>\r\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\r\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\r\n            <img [src]=\"sendMessageIconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.title{color:#fafaf8;font-size:26px;font-family:var(--suku-primary-font);font-weight:200!important}h1{color:#fafaf8;font-size:var(--suku-font-size-5);font-family:var(--suku-primary-font);font-weight:200!important}h2{color:var(--suku-text-sub-heading);font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font);font-weight:200;letter-spacing:.15px}.source-title{font-family:var(--suku-primary-font);font-weight:700;font-size:var(--suku-font-size-3)}.pop-bold{font-family:var(--suku-primary-font);font-weight:600!important;font-size:var(--suku-font-size-5)}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid var(--suku-primary-color);border-bottom:4px solid var(--suku-primary-color)}.chat-header{background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:var(--suku-primary-font);font-weight:400;font-size:var(--suku-font-size-3)}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.mct-12{margin-top:12px}.mcb-10{margin-bottom:10px}.align-end{align-self:flex-end}.senderColor{background-color:var(--suku-primary-color)!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:var(--suku-primary-font);font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:3px;bottom:78px}#ScrollDownbutton:hover{position:absolute;right:3px;bottom:70px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU83QyxNQUFNLE9BQU8sdUJBQXVCO0lBaUVuQztRQS9EQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBQy9DLGFBQVEsR0FBRyw0QkFBNEIsQ0FBQztRQUN4QyxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFXMUMsU0FBSSxHQUFHO1lBQ04sUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsVUFBVSxFQUFFLGNBQWM7U0FDMUIsQ0FBQztRQUNPLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix1QkFBa0IsR0FBRyx3Q0FBd0MsQ0FBQztRQTBCN0QsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBYTFCLENBQUM7Ozs7SUF2Q2pCLElBQ0ksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEdBQUc7UUFDZCxJQUFJ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QzthQUNkO1FBQ0YsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7OztZQXpJRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIseTVIQUFnRDs7YUFFaEQ7Ozs7O3FCQWNDLFNBQVMsU0FBQyx1QkFBdUI7bUJBQ2pDLEtBQUs7eUJBT0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLO3NCQUNMLEtBQUs7d0JBT0wsS0FBSzsrQkFPTCxLQUFLOzBCQVdMLE1BQU07eUJBQ04sTUFBTTs0QkFFTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBckRsQyw4Q0FBWTs7SUFDWixrREFBK0M7O0lBQy9DLDJDQUF3Qzs7SUFDeEMsNkNBQTBDOztJQUMxQyxnREFBYzs7SUFDZCw0Q0FBVTs7SUFDVix1REFBcUI7O0lBQ3JCLHNEQUFvQjs7SUFDcEIsb0RBQWtCOztJQUNsQiw4Q0FBWTs7SUFDWixtREFBaUI7O0lBRWpCLHlDQUFvRTs7SUFDcEUsdUNBTUU7O0lBQ0YsNkNBQTRCOztJQUM1QiwrQ0FBcUM7O0lBQ3JDLDZDQUE0Qjs7SUFDNUIsOENBQTBCOztJQUMxQixxREFBdUU7O0lBMEJ2RSw4Q0FBMkM7O0lBQzNDLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWNoYXQtd2lkZ2V0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Q2hhdFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0X21lc3NhZ2VPYmo7XHJcblx0X2ltZ1BsYWNlaG9sZGVyID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcclxuXHRfdXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XHJcblx0X3RvVXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XHJcblx0X3Njcm9sbEhlaWdodDtcclxuXHRfdG91c2VySUQ7XHJcblx0X2luaXRpYWxTY3JvbGxIZWlnaHQ7XHJcblx0X3Nob3dTY3JvbGxEb3duSWNvbjtcclxuXHRfY2hrbWVzc2FnZVN0YXR1cztcclxuXHRfb2xkTWVzc2FnZTtcclxuXHRfbmV3TWVzc2FnZUNvdW50O1xyXG5cclxuXHRAVmlld0NoaWxkKFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlKSBzY3JvbGw6IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlO1xyXG5cdEBJbnB1dCgpXHJcblx0Y2hhdCA9IHtcclxuXHRcdGxhYmVsT25lOiAnTmVnb3RpYXRpb24gQ2hhdCBCb3gnLFxyXG5cdFx0bGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXHJcblx0XHRsYWJlbFR3bzogJ0NoYXR0aW5nIHdpdGg6JyxcclxuXHRcdGxhYmVsVHdvSWQ6ICdjaGF0dGluZ1dpdGgnXHJcblx0fTtcclxuXHRASW5wdXQoKSB0b1VzZXJOYW1lID0gJ04vQSc7XHJcblx0QElucHV0KCkgdG9Vc2VyTmFtZUlkID0gJ3RvdXNlck5hbWUnO1xyXG5cdEBJbnB1dCgpIGNoYXRTdGF0dXMgPSBmYWxzZTtcclxuXHRASW5wdXQoKSBtZXNzYWdlRGF0YSA9IFtdO1xyXG5cdEBJbnB1dCgpIHNlbmRNZXNzYWdlSWNvblNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3NlbmQtbWVzc2FnZS1pY29uLnBuZyc7XHJcblx0QElucHV0KClcclxuXHRnZXQgdXNlckltZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl91c2VySW1nO1xyXG5cdH1cclxuXHRzZXQgdXNlckltZyh2YWwpIHtcclxuXHRcdHRoaXMuX3VzZXJJbWcgPSB2YWw7XHJcblx0fVxyXG5cdEBJbnB1dCgpXHJcblx0Z2V0IHRvVXNlckltZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl91c2VySW1nO1xyXG5cdH1cclxuXHRzZXQgdG9Vc2VySW1nKHZhbCkge1xyXG5cdFx0dGhpcy5fdG9Vc2VySW1nID0gdmFsO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdGdldCBjaGttZXNzYWdlU3RhdHVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Noa21lc3NhZ2VTdGF0dXM7XHJcblx0fVxyXG5cdHNldCBjaGttZXNzYWdlU3RhdHVzKHZhbCkge1xyXG5cdFx0dGhpcy5fY2hrbWVzc2FnZVN0YXR1cyA9IHZhbDtcclxuXHRcdGlmICh0aGlzLl9jaGttZXNzYWdlU3RhdHVzKSB7XHJcblx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBPdXRwdXQoKSBzZW5kbWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuXHRzY3JvbGxIYW5kbGVyKGV2ZW50KSB7XHJcblx0XHRpZiAodGhpcy5faW5pdGlhbFNjcm9sbEhlaWdodC5zY3JvbGxIZWlnaHQgLSBldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gMzkwKSB7XHJcblx0XHRcdHRoaXMuX3Nob3dTY3JvbGxEb3duSWNvbiA9IHRydWU7IC8vIGVuYWJsZSBzY3JvbGxUb0JvdHRvbU9uQ2xpaygpXHJcblx0XHRcdGNvbnNvbGUubG9nKCd0cnVlJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLm1lc3NhZ2VEYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy5fbWVzc2FnZU9iaiA9IHtcclxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLm1lc3NhZ2UsXHJcblx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmRhdGVUaW1lLFxyXG5cdFx0XHRcdHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkLFxyXG5cdFx0XHRcdHNlbmRlcjoge1xyXG5cdFx0XHRcdFx0dXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VySWQsXHJcblx0XHRcdFx0XHR1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlck5hbWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHJlY2VpdmVyOiB7XHJcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlcklkLFxyXG5cdFx0XHRcdFx0dXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlck5hbWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHR0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcclxuXHRcdHRoaXMuX29sZE1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VEYXRhO1xyXG5cdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG5cdH1cclxuXHJcblx0YWN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubWVzc2FnZURhdGEpIHtcclxuXHRcdFx0dGhpcy51c2VyQWN0aW9uLmVtaXQodGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZW5kTWVzc2FnZSh2YWwpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd0ZXN0LXNlbmQnLCB2YWwpO1xyXG5cdFx0dGhpcy5zZW5kbWVzc2FnZS5lbWl0KHZhbCk7XHJcblx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblx0fVxyXG5cclxuXHRzY3JvbGxUb0JvdHRvbSgpIHtcclxuXHRcdGNvbnN0IHNvbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcclxuXHRcdGNvbnNvbGUubG9nKCdzZCcsIHNvbWVFbGVtZW50LnNjcm9sbFRvcCk7XHJcblx0XHRjb25zdCBkdXJhdGlvbiA9IDMwMDtcclxuXHRcdHRoaXMuYW5pbWF0ZVNjcm9sbChkdXJhdGlvbik7XHJcblx0fVxyXG5cclxuXHRhbmltYXRlU2Nyb2xsKGR1cmF0aW9uKSB7XHJcblx0XHRjb25zdCBzb21lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxEaXYnKTtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gc29tZUVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0Y29uc3QgZW5kID0gc29tZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cdFx0Y29uc3QgY2hhbmdlID0gZW5kIC0gc3RhcnQ7XHJcblx0XHRjb25zdCBpbmNyZW1lbnQgPSAyMDtcclxuXHRcdGZ1bmN0aW9uIGVhc2VJbk91dChjdXJyZW50VGltZSwgc3RhcnRQb3MsIGNoYW5nZVBvcywgZGVsYXkpIHtcclxuXHRcdFx0Y3VycmVudFRpbWUgLz0gZGVsYXkgLyAyO1xyXG5cdFx0XHRpZiAoY3VycmVudFRpbWUgPCAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNoYW5nZVBvcyAvIDIgKiBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICsgc3RhcnRQb3M7XHJcblx0XHRcdH1cclxuXHRcdFx0Y3VycmVudFRpbWUgLT0gMTtcclxuXHRcdFx0cmV0dXJuIC1jaGFuZ2VQb3MgLyAyICogKGN1cnJlbnRUaW1lICogKGN1cnJlbnRUaW1lIC0gMikgLSAxKSArIHN0YXJ0O1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gYW5pbWF0ZShlbGFwc2VkVGltZSkge1xyXG5cdFx0XHRlbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZWFzZUluT3V0KGVsYXBzZWRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XHJcblx0XHRcdHNvbWVFbGVtZW50LnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xyXG5cdFx0XHRpZiAoZWxhcHNlZFRpbWUgPCBkdXJhdGlvbikge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0YW5pbWF0ZShlbGFwc2VkVGltZSk7XHJcblx0XHRcdFx0fSwgaW5jcmVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0YW5pbWF0ZSgwKTtcclxuXHR9XHJcbn1cclxuIl19