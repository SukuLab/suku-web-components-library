/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, HostListener, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from '@angular/core';
var SukuChatWidgetComponent = /** @class */ (function () {
    function SukuChatWidgetComponent() {
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
    Object.defineProperty(SukuChatWidgetComponent.prototype, "userImg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._userImg;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._userImg = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuChatWidgetComponent.prototype, "toUserImg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._userImg;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._toUserImg = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuChatWidgetComponent.prototype, "chkmessageStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._chkmessageStatus;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._chkmessageStatus = val;
            if (this._chkmessageStatus) {
                this.scrollToBottom();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.scrollHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._initialScrollHeight.scrollHeight - event.target.scrollTop > 390) {
            this._showScrollDownIcon = true; // enable scrollToBottomOnClik()
            console.log('true');
        }
        else {
            this._showScrollDownIcon = false;
        }
    };
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.action = /**
     * @return {?}
     */
    function () {
        if (this.messageData) {
            this.userAction.emit(this.messageData[0].receiver);
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
        this.sendmessage.emit(val);
        this.scrollToBottom();
    };
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var someElement = document.querySelector('.chatBox');
        console.log('sd', someElement.scrollTop);
        /** @type {?} */
        var duration = 300;
        this.animateScroll(duration);
    };
    /**
     * @param {?} duration
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.animateScroll = /**
     * @param {?} duration
     * @return {?}
     */
    function (duration) {
        /** @type {?} */
        var someElement = document.getElementById('scrollDiv');
        /** @type {?} */
        var start = someElement.scrollTop;
        /** @type {?} */
        var end = someElement.scrollHeight;
        /** @type {?} */
        var change = end - start;
        /** @type {?} */
        var increment = 20;
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
            var position = easeInOut(elapsedTime, start, change, duration);
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
    };
    SukuChatWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-chat-widget',
                    template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 chat-header p-3\">\r\n      <div class=\"col p-0\">\r\n        <div class=\"col p-0\">\r\n          <div class=\"col-sm-12\">\r\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\r\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\r\n            </h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\r\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\r\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\r\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\r\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\r\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\r\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\r\n              <span class=\"mcb-10 p-2 align-end\"\r\n                [ngClass]=\"{'order-last ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\r\n                <img [src]=\"((item?.userId == item?.sender?.userId)? _userImg : _toUserImg) || _imgPlaceholder\"\r\n                  alt=\"Avatar\" class=\"user-icon\">\r\n              </span>\r\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\r\n                class=\"msg-content hoverable\">\r\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\r\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\r\n                    <p class=\"p-2 mb-0 mct-12 \"\r\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\r\n                      <span class=\"chatMessage\">{{item?.message}}</span>\r\n                    </p>\r\n                  </span>\r\n                </div>\r\n                <p class=\"mb-0\" id=\"timeStamp\"\r\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\r\n                  {{item?.timestamp | date:'medium'}}</p>\r\n              </span>\r\n            </div>  \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <!-- to scroll down -->\r\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\r\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\r\n        </div>\r\n        <div class=\"row p-3 bg-light\">\r\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\r\n            <input class=\"form-control\" [disabled]=\"chatStatus\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\r\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\r\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\r\n          </div>\r\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\r\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\r\n            <img [src]=\"sendMessageIconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.title{color:#fafaf8;font-size:26px;font-family:var(--suku-primary-font);font-weight:200!important}h1{color:#fafaf8;font-size:var(--suku-font-size-5);font-family:var(--suku-primary-font);font-weight:200!important}h2{color:var(--suku-text-sub-heading);font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font);font-weight:200;letter-spacing:.15px}.source-title{font-family:var(--suku-primary-font);font-weight:700;font-size:var(--suku-font-size-3)}.pop-bold{font-family:var(--suku-primary-font);font-weight:600!important;font-size:var(--suku-font-size-5)}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid var(--suku-primary-color);border-bottom:4px solid var(--suku-primary-color)}.chat-header{background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:var(--suku-primary-font);font-weight:400;font-size:var(--suku-font-size-3)}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.mct-12{margin-top:12px}.mcb-10{margin-bottom:10px}.align-end{align-self:flex-end}.senderColor{background-color:var(--suku-primary-color)!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:var(--suku-primary-font);font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:3px;bottom:78px}#ScrollDownbutton:hover{position:absolute;right:3px;bottom:70px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuChatWidgetComponent.ctorParameters = function () { return []; };
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
    return SukuChatWidgetComponent;
}());
export { SukuChatWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QztJQXNFQztRQS9EQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBQy9DLGFBQVEsR0FBRyw0QkFBNEIsQ0FBQztRQUN4QyxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFXMUMsU0FBSSxHQUFHO1lBQ04sUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsVUFBVSxFQUFFLGNBQWM7U0FDMUIsQ0FBQztRQUNPLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix1QkFBa0IsR0FBRyx3Q0FBd0MsQ0FBQztRQTBCN0QsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBYTFCLENBQUM7SUF2Q2pCLHNCQUNJLDRDQUFPOzs7O1FBRFg7WUFFQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUFZLEdBQUc7WUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcs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QUFXLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxHQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2Q7UUFDRixDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Z0JBeklELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix5NUhBQWdEOztpQkFFaEQ7Ozs7O3lCQWNDLFNBQVMsU0FBQyx1QkFBdUI7dUJBQ2pDLEtBQUs7NkJBT0wsS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQ0FDTCxLQUFLOzBCQUNMLEtBQUs7NEJBT0wsS0FBSzttQ0FPTCxLQUFLOzhCQVdMLE1BQU07NkJBQ04sTUFBTTtnQ0FFTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQStFbkMsOEJBQUM7Q0FBQSxBQTFJRCxJQTBJQztTQXJJWSx1QkFBdUI7OztJQUNuQyw4Q0FBWTs7SUFDWixrREFBK0M7O0lBQy9DLDJDQUF3Qzs7SUFDeEMsNkNBQTBDOztJQUMxQyxnREFBYzs7SUFDZCw0Q0FBVTs7SUFDVix1REFBcUI7O0lBQ3JCLHNEQUFvQjs7SUFDcEIsb0RBQWtCOztJQUNsQiw4Q0FBWTs7SUFDWixtREFBaUI7O0lBRWpCLHlDQUFvRTs7SUFDcEUsdUNBTUU7O0lBQ0YsNkNBQTRCOztJQUM1QiwrQ0FBcUM7O0lBQ3JDLDZDQUE0Qjs7SUFDNUIsOENBQTBCOztJQUMxQixxREFBdUU7O0lBMEJ2RSw4Q0FBMkM7O0lBQzNDLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWNoYXQtd2lkZ2V0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Q2hhdFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0X21lc3NhZ2VPYmo7XHJcblx0X2ltZ1BsYWNlaG9sZGVyID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcclxuXHRfdXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XHJcblx0X3RvVXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XHJcblx0X3Njcm9sbEhlaWdodDtcclxuXHRfdG91c2VySUQ7XHJcblx0X2luaXRpYWxTY3JvbGxIZWlnaHQ7XHJcblx0X3Nob3dTY3JvbGxEb3duSWNvbjtcclxuXHRfY2hrbWVzc2FnZVN0YXR1cztcclxuXHRfb2xkTWVzc2FnZTtcclxuXHRfbmV3TWVzc2FnZUNvdW50O1xyXG5cclxuXHRAVmlld0NoaWxkKFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlKSBzY3JvbGw6IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlO1xyXG5cdEBJbnB1dCgpXHJcblx0Y2hhdCA9IHtcclxuXHRcdGxhYmVsT25lOiAnTmVnb3RpYXRpb24gQ2hhdCBCb3gnLFxyXG5cdFx0bGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXHJcblx0XHRsYWJlbFR3bzogJ0NoYXR0aW5nIHdpdGg6JyxcclxuXHRcdGxhYmVsVHdvSWQ6ICdjaGF0dGluZ1dpdGgnXHJcblx0fTtcclxuXHRASW5wdXQoKSB0b1VzZXJOYW1lID0gJ04vQSc7XHJcblx0QElucHV0KCkgdG9Vc2VyTmFtZUlkID0gJ3RvdXNlck5hbWUnO1xyXG5cdEBJbnB1dCgpIGNoYXRTdGF0dXMgPSBmYWxzZTtcclxuXHRASW5wdXQoKSBtZXNzYWdlRGF0YSA9IFtdO1xyXG5cdEBJbnB1dCgpIHNlbmRNZXNzYWdlSWNvblNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3NlbmQtbWVzc2FnZS1pY29uLnBuZyc7XHJcblx0QElucHV0KClcclxuXHRnZXQgdXNlckltZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl91c2VySW1nO1xyXG5cdH1cclxuXHRzZXQgdXNlckltZyh2YWwpIHtcclxuXHRcdHRoaXMuX3VzZXJJbWcgPSB2YWw7XHJcblx0fVxyXG5cdEBJbnB1dCgpXHJcblx0Z2V0IHRvVXNlckltZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl91c2VySW1nO1xyXG5cdH1cclxuXHRzZXQgdG9Vc2VySW1nKHZhbCkge1xyXG5cdFx0dGhpcy5fdG9Vc2VySW1nID0gdmFsO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdGdldCBjaGttZXNzYWdlU3RhdHVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Noa21lc3NhZ2VTdGF0dXM7XHJcblx0fVxyXG5cdHNldCBjaGttZXNzYWdlU3RhdHVzKHZhbCkge1xyXG5cdFx0dGhpcy5fY2hrbWVzc2FnZVN0YXR1cyA9IHZhbDtcclxuXHRcdGlmICh0aGlzLl9jaGttZXNzYWdlU3RhdHVzKSB7XHJcblx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBPdXRwdXQoKSBzZW5kbWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuXHRzY3JvbGxIYW5kbGVyKGV2ZW50KSB7XHJcblx0XHRpZiAodGhpcy5faW5pdGlhbFNjcm9sbEhlaWdodC5zY3JvbGxIZWlnaHQgLSBldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gMzkwKSB7XHJcblx0XHRcdHRoaXMuX3Nob3dTY3JvbGxEb3duSWNvbiA9IHRydWU7IC8vIGVuYWJsZSBzY3JvbGxUb0JvdHRvbU9uQ2xpaygpXHJcblx0XHRcdGNvbnNvbGUubG9nKCd0cnVlJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLm1lc3NhZ2VEYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy5fbWVzc2FnZU9iaiA9IHtcclxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLm1lc3NhZ2UsXHJcblx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmRhdGVUaW1lLFxyXG5cdFx0XHRcdHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkLFxyXG5cdFx0XHRcdHNlbmRlcjoge1xyXG5cdFx0XHRcdFx0dXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VySWQsXHJcblx0XHRcdFx0XHR1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlck5hbWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHJlY2VpdmVyOiB7XHJcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlcklkLFxyXG5cdFx0XHRcdFx0dXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlck5hbWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHR0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcclxuXHRcdHRoaXMuX29sZE1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VEYXRhO1xyXG5cdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG5cdH1cclxuXHJcblx0YWN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubWVzc2FnZURhdGEpIHtcclxuXHRcdFx0dGhpcy51c2VyQWN0aW9uLmVtaXQodGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZW5kTWVzc2FnZSh2YWwpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd0ZXN0LXNlbmQnLCB2YWwpO1xyXG5cdFx0dGhpcy5zZW5kbWVzc2FnZS5lbWl0KHZhbCk7XHJcblx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblx0fVxyXG5cclxuXHRzY3JvbGxUb0JvdHRvbSgpIHtcclxuXHRcdGNvbnN0IHNvbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcclxuXHRcdGNvbnNvbGUubG9nKCdzZCcsIHNvbWVFbGVtZW50LnNjcm9sbFRvcCk7XHJcblx0XHRjb25zdCBkdXJhdGlvbiA9IDMwMDtcclxuXHRcdHRoaXMuYW5pbWF0ZVNjcm9sbChkdXJhdGlvbik7XHJcblx0fVxyXG5cclxuXHRhbmltYXRlU2Nyb2xsKGR1cmF0aW9uKSB7XHJcblx0XHRjb25zdCBzb21lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxEaXYnKTtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gc29tZUVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0Y29uc3QgZW5kID0gc29tZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cdFx0Y29uc3QgY2hhbmdlID0gZW5kIC0gc3RhcnQ7XHJcblx0XHRjb25zdCBpbmNyZW1lbnQgPSAyMDtcclxuXHRcdGZ1bmN0aW9uIGVhc2VJbk91dChjdXJyZW50VGltZSwgc3RhcnRQb3MsIGNoYW5nZVBvcywgZGVsYXkpIHtcclxuXHRcdFx0Y3VycmVudFRpbWUgLz0gZGVsYXkgLyAyO1xyXG5cdFx0XHRpZiAoY3VycmVudFRpbWUgPCAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNoYW5nZVBvcyAvIDIgKiBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICsgc3RhcnRQb3M7XHJcblx0XHRcdH1cclxuXHRcdFx0Y3VycmVudFRpbWUgLT0gMTtcclxuXHRcdFx0cmV0dXJuIC1jaGFuZ2VQb3MgLyAyICogKGN1cnJlbnRUaW1lICogKGN1cnJlbnRUaW1lIC0gMikgLSAxKSArIHN0YXJ0O1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gYW5pbWF0ZShlbGFwc2VkVGltZSkge1xyXG5cdFx0XHRlbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZWFzZUluT3V0KGVsYXBzZWRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XHJcblx0XHRcdHNvbWVFbGVtZW50LnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xyXG5cdFx0XHRpZiAoZWxhcHNlZFRpbWUgPCBkdXJhdGlvbikge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0YW5pbWF0ZShlbGFwc2VkVGltZSk7XHJcblx0XHRcdFx0fSwgaW5jcmVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0YW5pbWF0ZSgwKTtcclxuXHR9XHJcbn1cclxuIl19