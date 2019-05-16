/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, HostListener, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from '@angular/core';
var SukuChatWidgetComponent = /** @class */ (function () {
    function SukuChatWidgetComponent() {
        this._imgPlaceholder = '../assets/images/group.svg';
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
        this.IconSrc = '../assets/images/send-message-icon.png';
        this.userImg = '../assets/images/group.svg';
        this.toUserImg = '../assets/images/group.svg';
        this.sendmessage = new EventEmitter();
        this.userAction = new EventEmitter();
    }
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
            else {
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
                    template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mcb-5 p-2 align-end\"\n                [ngClass]=\"{'order-last ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? userImg : toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mct-9 \"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'medium'}}</p>\n              </span>\n            </div>  \n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\n            <input class=\"form-control\" [disabled]=\"chatStatus\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.mct-9{margin-top:9px}.mcb-5{margin-bottom:5px}.align-end{align-self:flex-end}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:3px;bottom:78px}#ScrollDownbutton:hover{position:absolute;right:3px;bottom:70px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
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
        IconSrc: [{ type: Input }],
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
    SukuChatWidgetComponent.prototype.IconSrc;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.userImg;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.toUserImg;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.sendmessage;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.userAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QztJQXVEQztRQWhEQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBUy9DLFNBQUksR0FBRztZQUNOLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzFCLENBQUM7UUFDTyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1FBQ25ELFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUN2QyxjQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFjeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBWTNCLENBQUM7SUExQmhCLHNCQUNJLHFEQUFnQjs7OztRQURwQjtZQUVDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQy9CLENBQUM7Ozs7O1FBQ0QsVUFBcUIsR0FBRztZQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcs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QUNMLEtBQUs7OEJBYUwsTUFBTTs2QkFDTixNQUFNO2dDQUVOLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBRSxRQUFRLENBQUU7O0lBNkVyQyw4QkFBQztDQUFBLEFBMUhELElBMEhDO1NBckhZLHVCQUF1Qjs7O0lBQ25DLDhDQUFZOztJQUNaLGtEQUErQzs7SUFDL0MsZ0RBQWM7O0lBQ2QsNENBQVU7O0lBQ1YsdURBQXFCOztJQUNyQixzREFBb0I7O0lBQ3BCLG9EQUFrQjs7SUFDbEIseUNBQW9FOztJQUVwRSx1Q0FNRTs7SUFDRiw2Q0FBNEI7O0lBQzVCLCtDQUFxQzs7SUFDckMsNkNBQTRCOztJQUM1Qiw4Q0FBMEI7O0lBQzFCLDBDQUE0RDs7SUFDNUQsMENBQWdEOztJQUNoRCw0Q0FBa0Q7O0lBY2xELDhDQUEyQzs7SUFDM0MsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtY2hhdC13aWRnZXQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDaGF0V2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0X21lc3NhZ2VPYmo7XG5cdF9pbWdQbGFjZWhvbGRlciA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XG5cdF9zY3JvbGxIZWlnaHQ7XG5cdF90b3VzZXJJRDtcblx0X2luaXRpYWxTY3JvbGxIZWlnaHQ7XG5cdF9zaG93U2Nyb2xsRG93bkljb247XG5cdF9jaGttZXNzYWdlU3RhdHVzO1xuXHRAVmlld0NoaWxkKFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlKSBzY3JvbGw6IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlO1xuXG5cdEBJbnB1dCgpXG5cdGNoYXQgPSB7XG5cdFx0bGFiZWxPbmU6ICdOZWdvdGlhdGlvbiBDaGF0IEJveCcsXG5cdFx0bGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXG5cdFx0bGFiZWxUd286ICdDaGF0dGluZyB3aXRoOicsXG5cdFx0bGFiZWxUd29JZDogJ2NoYXR0aW5nV2l0aCdcblx0fTtcblx0QElucHV0KCkgdG9Vc2VyTmFtZSA9ICdOL0EnO1xuXHRASW5wdXQoKSB0b1VzZXJOYW1lSWQgPSAndG91c2VyTmFtZSc7XG5cdEBJbnB1dCgpIGNoYXRTdGF0dXMgPSBmYWxzZTtcblx0QElucHV0KCkgbWVzc2FnZURhdGEgPSBbXTtcblx0QElucHV0KCkgSWNvblNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3NlbmQtbWVzc2FnZS1pY29uLnBuZyc7XG5cdEBJbnB1dCgpIHVzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXHRASW5wdXQoKSB0b1VzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXHRASW5wdXQoKVxuXHRnZXQgY2hrbWVzc2FnZVN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hrbWVzc2FnZVN0YXR1cztcblx0fVxuXHRzZXQgY2hrbWVzc2FnZVN0YXR1cyh2YWwpIHtcblx0XHR0aGlzLl9jaGttZXNzYWdlU3RhdHVzID0gdmFsO1xuXHRcdGlmICh0aGlzLl9jaGttZXNzYWdlU3RhdHVzKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblx0XHR9XG5cdH1cblxuXHRAT3V0cHV0KCkgc2VuZG1lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB1c2VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsgJyRldmVudCcgXSlcblx0c2Nyb2xsSGFuZGxlcihldmVudCkge1xuXHRcdGlmICh0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0LnNjcm9sbEhlaWdodCAtIGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiAzOTApIHtcblx0XHRcdHRoaXMuX3Nob3dTY3JvbGxEb3duSWNvbiA9IHRydWU7IC8vIGVuYWJsZSBzY3JvbGxUb0JvdHRvbU9uQ2xpaygpXG5cdFx0XHRjb25zb2xlLmxvZygndHJ1ZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMubWVzc2FnZURhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fbWVzc2FnZU9iaiA9IHtcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5tZXNzYWdlRGF0YVswXS5tZXNzYWdlLFxuXHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMubWVzc2FnZURhdGFbMF0uZGF0ZVRpbWUsXG5cdFx0XHRcdHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkLFxuXHRcdFx0XHRzZW5kZXI6IHtcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJJZCxcblx0XHRcdFx0XHR1c2VyTmFtZTogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlck5hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVjZWl2ZXI6IHtcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlcklkLFxuXHRcdFx0XHRcdHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnJlY2VpdmVyLnVzZXJOYW1lXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMuX2luaXRpYWxTY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuXHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblx0fVxuXG5cdGFjdGlvbigpIHtcblx0XHRpZiAodGhpcy5tZXNzYWdlRGF0YSkge1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uLmVtaXQodGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlcik7XG5cdFx0fVxuXHR9XG5cblx0c2VuZE1lc3NhZ2UodmFsKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rlc3Qtc2VuZCcsIHZhbCk7XG5cdFx0dGhpcy5zZW5kbWVzc2FnZS5lbWl0KHZhbCk7XG5cdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXHR9XG5cblx0c2Nyb2xsVG9Cb3R0b20oKSB7XG5cdFx0Y29uc3Qgc29tZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuXHRcdGNvbnNvbGUubG9nKCdzZCcsIHNvbWVFbGVtZW50LnNjcm9sbFRvcCk7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSAzMDA7XG5cdFx0dGhpcy5hbmltYXRlU2Nyb2xsKGR1cmF0aW9uKTtcblx0fVxuXG5cdGFuaW1hdGVTY3JvbGwoZHVyYXRpb24pIHtcblx0XHRjb25zdCBzb21lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxEaXYnKTtcblx0XHRjb25zdCBzdGFydCA9IHNvbWVFbGVtZW50LnNjcm9sbFRvcDtcblx0XHRjb25zdCBlbmQgPSBzb21lRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cdFx0Y29uc3QgY2hhbmdlID0gZW5kIC0gc3RhcnQ7XG5cdFx0Y29uc3QgaW5jcmVtZW50ID0gMjA7XG5cdFx0ZnVuY3Rpb24gZWFzZUluT3V0KGN1cnJlbnRUaW1lLCBzdGFydFBvcywgY2hhbmdlUG9zLCBkZWxheSkge1xuXHRcdFx0Y3VycmVudFRpbWUgLz0gZGVsYXkgLyAyO1xuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gY2hhbmdlUG9zIC8gMiAqIGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUgKyBzdGFydFBvcztcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRUaW1lIC09IDE7XG5cdFx0XHRyZXR1cm4gLWNoYW5nZVBvcyAvIDIgKiAoY3VycmVudFRpbWUgKiAoY3VycmVudFRpbWUgLSAyKSAtIDEpICsgc3RhcnQ7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGFuaW1hdGUoZWxhcHNlZFRpbWUpIHtcblx0XHRcdGVsYXBzZWRUaW1lICs9IGluY3JlbWVudDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZWFzZUluT3V0KGVsYXBzZWRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG5cdFx0XHRzb21lRWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcblx0XHRcdGlmIChlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0YW5pbWF0ZShlbGFwc2VkVGltZSk7XG5cdFx0XHRcdH0sIGluY3JlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGFuaW1hdGUoMCk7XG5cdH1cbn1cbiJdfQ==