/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-chat-widget/suku-chat-widget.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0MsTUFBTSxPQUFPLHVCQUF1QjtJQWlFbkM7UUEvREEsb0JBQWUsR0FBRyw0QkFBNEIsQ0FBQztRQUMvQyxhQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsZUFBVSxHQUFHLDRCQUE0QixDQUFDO1FBVzFDLFNBQUksR0FBRztZQUNOLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzFCLENBQUM7UUFDTyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsdUJBQWtCLEdBQUcsd0NBQXdDLENBQUM7UUEwQjdELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWExQixDQUFDOzs7O0lBdkNqQixJQUNJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHO1FBQ2QsSUFB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QUM7YUFDZDtRQUNGLENBQUM7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDOzs7WUF6SUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHF4SEFBZ0Q7O2FBRWhEOzs7OztxQkFjQyxTQUFTLFNBQUMsdUJBQXVCO21CQUNqQyxLQUFLO3lCQU9MLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQU9MLEtBQUs7K0JBT0wsS0FBSzswQkFXTCxNQUFNO3lCQUNOLE1BQU07NEJBRU4sWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXJEbEMsOENBQVk7O0lBQ1osa0RBQStDOztJQUMvQywyQ0FBd0M7O0lBQ3hDLDZDQUEwQzs7SUFDMUMsZ0RBQWM7O0lBQ2QsNENBQVU7O0lBQ1YsdURBQXFCOztJQUNyQixzREFBb0I7O0lBQ3BCLG9EQUFrQjs7SUFDbEIsOENBQVk7O0lBQ1osbURBQWlCOztJQUVqQix5Q0FBb0U7O0lBQ3BFLHVDQU1FOztJQUNGLDZDQUE0Qjs7SUFDNUIsK0NBQXFDOztJQUNyQyw2Q0FBNEI7O0lBQzVCLDhDQUEwQjs7SUFDMUIscURBQXVFOztJQTBCdkUsOENBQTJDOztJQUMzQyw2Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUgfSBmcm9tICcuL3N1a3UtY2hhdC1zY3JvbGwtZGlyZWN0aXZlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWNoYXQtd2lkZ2V0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoYXRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRfbWVzc2FnZU9iajtcblx0X2ltZ1BsYWNlaG9sZGVyID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcblx0X3VzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXHRfdG9Vc2VySW1nID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcblx0X3Njcm9sbEhlaWdodDtcblx0X3RvdXNlcklEO1xuXHRfaW5pdGlhbFNjcm9sbEhlaWdodDtcblx0X3Nob3dTY3JvbGxEb3duSWNvbjtcblx0X2Noa21lc3NhZ2VTdGF0dXM7XG5cdF9vbGRNZXNzYWdlO1xuXHRfbmV3TWVzc2FnZUNvdW50O1xuXG5cdEBWaWV3Q2hpbGQoU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUpIHNjcm9sbDogU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmU7XG5cdEBJbnB1dCgpXG5cdGNoYXQgPSB7XG5cdFx0bGFiZWxPbmU6ICdOZWdvdGlhdGlvbiBDaGF0IEJveCcsXG5cdFx0bGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXG5cdFx0bGFiZWxUd286ICdDaGF0dGluZyB3aXRoOicsXG5cdFx0bGFiZWxUd29JZDogJ2NoYXR0aW5nV2l0aCdcblx0fTtcblx0QElucHV0KCkgdG9Vc2VyTmFtZSA9ICdOL0EnO1xuXHRASW5wdXQoKSB0b1VzZXJOYW1lSWQgPSAndG91c2VyTmFtZSc7XG5cdEBJbnB1dCgpIGNoYXRTdGF0dXMgPSBmYWxzZTtcblx0QElucHV0KCkgbWVzc2FnZURhdGEgPSBbXTtcblx0QElucHV0KCkgc2VuZE1lc3NhZ2VJY29uU3JjID0gJy4uL2Fzc2V0cy9pbWFnZXMvc2VuZC1tZXNzYWdlLWljb24ucG5nJztcblx0QElucHV0KClcblx0Z2V0IHVzZXJJbWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJJbWc7XG5cdH1cblx0c2V0IHVzZXJJbWcodmFsKSB7XG5cdFx0dGhpcy5fdXNlckltZyA9IHZhbDtcblx0fVxuXHRASW5wdXQoKVxuXHRnZXQgdG9Vc2VySW1nKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VySW1nO1xuXHR9XG5cdHNldCB0b1VzZXJJbWcodmFsKSB7XG5cdFx0dGhpcy5fdG9Vc2VySW1nID0gdmFsO1xuXHR9XG5cdEBJbnB1dCgpXG5cdGdldCBjaGttZXNzYWdlU3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGttZXNzYWdlU3RhdHVzO1xuXHR9XG5cdHNldCBjaGttZXNzYWdlU3RhdHVzKHZhbCkge1xuXHRcdHRoaXMuX2Noa21lc3NhZ2VTdGF0dXMgPSB2YWw7XG5cdFx0aWYgKHRoaXMuX2Noa21lc3NhZ2VTdGF0dXMpIHtcblx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblx0XHR9XG5cdH1cblxuXHRAT3V0cHV0KCkgc2VuZG1lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB1c2VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG5cdHNjcm9sbEhhbmRsZXIoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5faW5pdGlhbFNjcm9sbEhlaWdodC5zY3JvbGxIZWlnaHQgLSBldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gMzkwKSB7XG5cdFx0XHR0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSB0cnVlOyAvLyBlbmFibGUgc2Nyb2xsVG9Cb3R0b21PbkNsaWsoKVxuXHRcdFx0Y29uc29sZS5sb2coJ3RydWUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc2hvd1Njcm9sbERvd25JY29uID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLm1lc3NhZ2VEYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuX21lc3NhZ2VPYmogPSB7XG5cdFx0XHRcdG1lc3NhZ2U6IHRoaXMubWVzc2FnZURhdGFbMF0ubWVzc2FnZSxcblx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmRhdGVUaW1lLFxuXHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJJZCxcblx0XHRcdFx0c2VuZGVyOiB7XG5cdFx0XHRcdFx0dXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VySWQsXG5cdFx0XHRcdFx0dXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlY2VpdmVyOiB7XG5cdFx0XHRcdFx0dXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnJlY2VpdmVyLnVzZXJJZCxcblx0XHRcdFx0XHR1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlci51c2VyTmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHR0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcblx0XHR0aGlzLl9vbGRNZXNzYWdlID0gdGhpcy5tZXNzYWdlRGF0YTtcblx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG5cdH1cblxuXHRhY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMubWVzc2FnZURhdGEpIHtcblx0XHRcdHRoaXMudXNlckFjdGlvbi5lbWl0KHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIpO1xuXHRcdH1cblx0fVxuXG5cdHNlbmRNZXNzYWdlKHZhbCkge1xuXHRcdGNvbnNvbGUubG9nKCd0ZXN0LXNlbmQnLCB2YWwpO1xuXHRcdHRoaXMuc2VuZG1lc3NhZ2UuZW1pdCh2YWwpO1xuXHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblx0fVxuXG5cdHNjcm9sbFRvQm90dG9tKCkge1xuXHRcdGNvbnN0IHNvbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcblx0XHRjb25zb2xlLmxvZygnc2QnLCBzb21lRWxlbWVudC5zY3JvbGxUb3ApO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuXHRcdHRoaXMuYW5pbWF0ZVNjcm9sbChkdXJhdGlvbik7XG5cdH1cblxuXHRhbmltYXRlU2Nyb2xsKGR1cmF0aW9uKSB7XG5cdFx0Y29uc3Qgc29tZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsRGl2Jyk7XG5cdFx0Y29uc3Qgc3RhcnQgPSBzb21lRWxlbWVudC5zY3JvbGxUb3A7XG5cdFx0Y29uc3QgZW5kID0gc29tZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXHRcdGNvbnN0IGNoYW5nZSA9IGVuZCAtIHN0YXJ0O1xuXHRcdGNvbnN0IGluY3JlbWVudCA9IDIwO1xuXHRcdGZ1bmN0aW9uIGVhc2VJbk91dChjdXJyZW50VGltZSwgc3RhcnRQb3MsIGNoYW5nZVBvcywgZGVsYXkpIHtcblx0XHRcdGN1cnJlbnRUaW1lIC89IGRlbGF5IC8gMjtcblx0XHRcdGlmIChjdXJyZW50VGltZSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIGNoYW5nZVBvcyAvIDIgKiBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICsgc3RhcnRQb3M7XG5cdFx0XHR9XG5cdFx0XHRjdXJyZW50VGltZSAtPSAxO1xuXHRcdFx0cmV0dXJuIC1jaGFuZ2VQb3MgLyAyICogKGN1cnJlbnRUaW1lICogKGN1cnJlbnRUaW1lIC0gMikgLSAxKSArIHN0YXJ0O1xuXHRcdH1cblx0XHRmdW5jdGlvbiBhbmltYXRlKGVsYXBzZWRUaW1lKSB7XG5cdFx0XHRlbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IGVhc2VJbk91dChlbGFwc2VkVGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pO1xuXHRcdFx0c29tZUVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG5cdFx0XHRpZiAoZWxhcHNlZFRpbWUgPCBkdXJhdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRhbmltYXRlKGVsYXBzZWRUaW1lKTtcblx0XHRcdFx0fSwgaW5jcmVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0YW5pbWF0ZSgwKTtcblx0fVxufVxuIl19