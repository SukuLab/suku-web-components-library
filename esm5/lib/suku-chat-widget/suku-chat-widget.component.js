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
                    template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mcb-10 p-2 align-end\"\n                [ngClass]=\"{'order-last ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? _userImg : _toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mct-12 \"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'medium'}}</p>\n              </span>\n            </div>  \n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\n            <input class=\"form-control\" [disabled]=\"chatStatus\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"sendMessageIconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QztJQXNFQztRQS9EQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBQy9DLGFBQVEsR0FBRyw0QkFBNEIsQ0FBQztRQUN4QyxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFXMUMsU0FBSSxHQUFHO1lBQ04sUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsVUFBVSxFQUFFLGNBQWM7U0FDMUIsQ0FBQztRQUNPLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix1QkFBa0IsR0FBRyx3Q0FBd0MsQ0FBQztRQTBCN0QsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBYTFCLENBQUM7SUF2Q2pCLHNCQUNJLDRDQUFPOzs7O1FBRFg7WUFFQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUFZLEdBQUc7WUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcs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QUFXLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxHQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2Q7UUFDRixDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Z0JBeklELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixxeEhBQWdEOztpQkFFaEQ7Ozs7O3lCQWNDLFNBQVMsU0FBQyx1QkFBdUI7dUJBQ2pDLEtBQUs7NkJBT0wsS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQ0FDTCxLQUFLOzBCQUNMLEtBQUs7NEJBT0wsS0FBSzttQ0FPTCxLQUFLOzhCQVdMLE1BQU07NkJBQ04sTUFBTTtnQ0FFTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQStFbkMsOEJBQUM7Q0FBQSxBQTFJRCxJQTBJQztTQXJJWSx1QkFBdUI7OztJQUNuQyw4Q0FBWTs7SUFDWixrREFBK0M7O0lBQy9DLDJDQUF3Qzs7SUFDeEMsNkNBQTBDOztJQUMxQyxnREFBYzs7SUFDZCw0Q0FBVTs7SUFDVix1REFBcUI7O0lBQ3JCLHNEQUFvQjs7SUFDcEIsb0RBQWtCOztJQUNsQiw4Q0FBWTs7SUFDWixtREFBaUI7O0lBRWpCLHlDQUFvRTs7SUFDcEUsdUNBTUU7O0lBQ0YsNkNBQTRCOztJQUM1QiwrQ0FBcUM7O0lBQ3JDLDZDQUE0Qjs7SUFDNUIsOENBQTBCOztJQUMxQixxREFBdUU7O0lBMEJ2RSw4Q0FBMkM7O0lBQzNDLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSB9IGZyb20gJy4vc3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtY2hhdC13aWRnZXQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2hhdFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdF9tZXNzYWdlT2JqO1xuXHRfaW1nUGxhY2Vob2xkZXIgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXHRfdXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XG5cdF90b1VzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXHRfc2Nyb2xsSGVpZ2h0O1xuXHRfdG91c2VySUQ7XG5cdF9pbml0aWFsU2Nyb2xsSGVpZ2h0O1xuXHRfc2hvd1Njcm9sbERvd25JY29uO1xuXHRfY2hrbWVzc2FnZVN0YXR1cztcblx0X29sZE1lc3NhZ2U7XG5cdF9uZXdNZXNzYWdlQ291bnQ7XG5cblx0QFZpZXdDaGlsZChTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSkgc2Nyb2xsOiBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZTtcblx0QElucHV0KClcblx0Y2hhdCA9IHtcblx0XHRsYWJlbE9uZTogJ05lZ290aWF0aW9uIENoYXQgQm94Jyxcblx0XHRsYWJlbE9uZUlkOiAnbmVnb3RpYXRpb25DaGF0Qm94Jyxcblx0XHRsYWJlbFR3bzogJ0NoYXR0aW5nIHdpdGg6Jyxcblx0XHRsYWJlbFR3b0lkOiAnY2hhdHRpbmdXaXRoJ1xuXHR9O1xuXHRASW5wdXQoKSB0b1VzZXJOYW1lID0gJ04vQSc7XG5cdEBJbnB1dCgpIHRvVXNlck5hbWVJZCA9ICd0b3VzZXJOYW1lJztcblx0QElucHV0KCkgY2hhdFN0YXR1cyA9IGZhbHNlO1xuXHRASW5wdXQoKSBtZXNzYWdlRGF0YSA9IFtdO1xuXHRASW5wdXQoKSBzZW5kTWVzc2FnZUljb25TcmMgPSAnLi4vYXNzZXRzL2ltYWdlcy9zZW5kLW1lc3NhZ2UtaWNvbi5wbmcnO1xuXHRASW5wdXQoKVxuXHRnZXQgdXNlckltZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXNlckltZztcblx0fVxuXHRzZXQgdXNlckltZyh2YWwpIHtcblx0XHR0aGlzLl91c2VySW1nID0gdmFsO1xuXHR9XG5cdEBJbnB1dCgpXG5cdGdldCB0b1VzZXJJbWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJJbWc7XG5cdH1cblx0c2V0IHRvVXNlckltZyh2YWwpIHtcblx0XHR0aGlzLl90b1VzZXJJbWcgPSB2YWw7XG5cdH1cblx0QElucHV0KClcblx0Z2V0IGNoa21lc3NhZ2VTdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Noa21lc3NhZ2VTdGF0dXM7XG5cdH1cblx0c2V0IGNoa21lc3NhZ2VTdGF0dXModmFsKSB7XG5cdFx0dGhpcy5fY2hrbWVzc2FnZVN0YXR1cyA9IHZhbDtcblx0XHRpZiAodGhpcy5fY2hrbWVzc2FnZVN0YXR1cykge1xuXHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXHRcdH1cblx0fVxuXG5cdEBPdXRwdXQoKSBzZW5kbWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHVzZXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcblx0c2Nyb2xsSGFuZGxlcihldmVudCkge1xuXHRcdGlmICh0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0LnNjcm9sbEhlaWdodCAtIGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiAzOTApIHtcblx0XHRcdHRoaXMuX3Nob3dTY3JvbGxEb3duSWNvbiA9IHRydWU7IC8vIGVuYWJsZSBzY3JvbGxUb0JvdHRvbU9uQ2xpaygpXG5cdFx0XHRjb25zb2xlLmxvZygndHJ1ZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMubWVzc2FnZURhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fbWVzc2FnZU9iaiA9IHtcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5tZXNzYWdlRGF0YVswXS5tZXNzYWdlLFxuXHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMubWVzc2FnZURhdGFbMF0uZGF0ZVRpbWUsXG5cdFx0XHRcdHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkLFxuXHRcdFx0XHRzZW5kZXI6IHtcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJJZCxcblx0XHRcdFx0XHR1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlck5hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVjZWl2ZXI6IHtcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlcklkLFxuXHRcdFx0XHRcdHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnJlY2VpdmVyLnVzZXJOYW1lXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMuX2luaXRpYWxTY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuXHRcdHRoaXMuX29sZE1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VEYXRhO1xuXHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblx0fVxuXG5cdGFjdGlvbigpIHtcblx0XHRpZiAodGhpcy5tZXNzYWdlRGF0YSkge1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uLmVtaXQodGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlcik7XG5cdFx0fVxuXHR9XG5cblx0c2VuZE1lc3NhZ2UodmFsKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rlc3Qtc2VuZCcsIHZhbCk7XG5cdFx0dGhpcy5zZW5kbWVzc2FnZS5lbWl0KHZhbCk7XG5cdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXHR9XG5cblx0c2Nyb2xsVG9Cb3R0b20oKSB7XG5cdFx0Y29uc3Qgc29tZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuXHRcdGNvbnNvbGUubG9nKCdzZCcsIHNvbWVFbGVtZW50LnNjcm9sbFRvcCk7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSAzMDA7XG5cdFx0dGhpcy5hbmltYXRlU2Nyb2xsKGR1cmF0aW9uKTtcblx0fVxuXG5cdGFuaW1hdGVTY3JvbGwoZHVyYXRpb24pIHtcblx0XHRjb25zdCBzb21lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxEaXYnKTtcblx0XHRjb25zdCBzdGFydCA9IHNvbWVFbGVtZW50LnNjcm9sbFRvcDtcblx0XHRjb25zdCBlbmQgPSBzb21lRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cdFx0Y29uc3QgY2hhbmdlID0gZW5kIC0gc3RhcnQ7XG5cdFx0Y29uc3QgaW5jcmVtZW50ID0gMjA7XG5cdFx0ZnVuY3Rpb24gZWFzZUluT3V0KGN1cnJlbnRUaW1lLCBzdGFydFBvcywgY2hhbmdlUG9zLCBkZWxheSkge1xuXHRcdFx0Y3VycmVudFRpbWUgLz0gZGVsYXkgLyAyO1xuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gY2hhbmdlUG9zIC8gMiAqIGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUgKyBzdGFydFBvcztcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRUaW1lIC09IDE7XG5cdFx0XHRyZXR1cm4gLWNoYW5nZVBvcyAvIDIgKiAoY3VycmVudFRpbWUgKiAoY3VycmVudFRpbWUgLSAyKSAtIDEpICsgc3RhcnQ7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGFuaW1hdGUoZWxhcHNlZFRpbWUpIHtcblx0XHRcdGVsYXBzZWRUaW1lICs9IGluY3JlbWVudDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZWFzZUluT3V0KGVsYXBzZWRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG5cdFx0XHRzb21lRWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcblx0XHRcdGlmIChlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGFuaW1hdGUoZWxhcHNlZFRpbWUpO1xuXHRcdFx0XHR9LCBpbmNyZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRhbmltYXRlKDApO1xuXHR9XG59XG4iXX0=