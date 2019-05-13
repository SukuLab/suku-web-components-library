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
    /**
     * @param {?} event
     * @return {?}
     */
    scrollHandler(event) {
        if ((this._initialScrollHeight.scrollHeight - event.target.scrollTop) > 390) {
            this._showScrollDownIcon = true; // enable scrollToBottomOnClik()
            console.log("true");
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
                    userName: this.messageData[0].sender.userName,
                },
                receiver: {
                    userId: this.messageData[0].receiver.userId,
                    userName: this.messageData[0].receiver.userName,
                }
            };
        }
        this._initialScrollHeight = document.querySelector('.chatBox');
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
                template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mb-3 p-2\"\n                [ngClass]=\"{'order-last align-self-end ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? userImg : toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mct-5\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'medium'}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.mct-5{margin-top:5px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:0;bottom:69px}#ScrollDownbutton:hover{position:absolute;right:0;bottom:63px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
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
    IconSrc: [{ type: Input }],
    userImg: [{ type: Input }],
    toUserImg: [{ type: Input }],
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
    SukuChatWidgetComponent.prototype._scrollHeight;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._touserID;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._initialScrollHeight;
    /** @type {?} */
    SukuChatWidgetComponent.prototype._showScrollDownIcon;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU03QyxNQUFNLE9BQU8sdUJBQXVCO0lBc0NsQztRQXBDQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBU3RDLFNBQUksR0FBRztZQUNkLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUM7UUFDTyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1FBQ25ELFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUN2QyxjQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFFeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBWTFCLENBQUM7Ozs7O0lBVGpCLGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFD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M0MsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY2hhdC13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2hhdFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9tZXNzYWdlT2JqO1xuICBfaW1nUGxhY2Vob2xkZXIgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuICBfc2Nyb2xsSGVpZ2h0O1xuICBfdG91c2VySUQ7XG4gIF9pbml0aWFsU2Nyb2xsSGVpZ2h0O1xuICBfc2hvd1Njcm9sbERvd25JY29uO1xuXG4gIEBWaWV3Q2hpbGQoU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUpXG4gIHNjcm9sbDogU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgY2hhdCA9IHtcbiAgICBsYWJlbE9uZTogJ05lZ290aWF0aW9uIENoYXQgQm94JyxcbiAgICBsYWJlbE9uZUlkOiAnbmVnb3RpYXRpb25DaGF0Qm94JyxcbiAgICBsYWJlbFR3bzogJ0NoYXR0aW5nIHdpdGg6JyxcbiAgICBsYWJlbFR3b0lkOiAnY2hhdHRpbmdXaXRoJ1xuICB9O1xuICBASW5wdXQoKSB0b1VzZXJOYW1lID0gJ04vQSc7XG4gIEBJbnB1dCgpIHRvVXNlck5hbWVJZCA9ICd0b3VzZXJOYW1lJztcbiAgQElucHV0KCkgY2hhdFN0YXR1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBtZXNzYWdlRGF0YSA9IFtdO1xuICBASW5wdXQoKSBJY29uU3JjID0gJy4uL2Fzc2V0cy9pbWFnZXMvc2VuZC1tZXNzYWdlLWljb24ucG5nJztcbiAgQElucHV0KCkgdXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XG4gIEBJbnB1dCgpIHRvVXNlckltZyA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XG5cbiAgQE91dHB1dCgpIHNlbmRtZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBzY3JvbGxIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKCh0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0LnNjcm9sbEhlaWdodCAtIGV2ZW50LnRhcmdldC5zY3JvbGxUb3ApID4gMzkwKSB7XG4gICAgICB0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSB0cnVlOyAvLyBlbmFibGUgc2Nyb2xsVG9Cb3R0b21PbkNsaWsoKVxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93U2Nyb2xsRG93bkljb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VPYmogPSB7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZURhdGFbMF0ubWVzc2FnZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmRhdGVUaW1lLFxuICAgICAgICB1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJJZCxcbiAgICAgICAgc2VuZGVyOiB7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VySWQsXG4gICAgICAgICAgdXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJOYW1lLFxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlcjoge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlci51c2VySWQsXG4gICAgICAgICAgdXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlck5hbWUsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuX2luaXRpYWxTY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuXG4gIGFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlRGF0YSkge1xuICAgICAgdGhpcy51c2VyQWN0aW9uLmVtaXQodGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlcik7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2UodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3Qtc2VuZCcsIHZhbCk7XG4gICAgdGhpcy5zZW5kbWVzc2FnZS5lbWl0KHZhbCk7XG4gICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgY29uc3Qgc29tZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdEJveCcpO1xuICAgIGNvbnNvbGUubG9nKCdzZCcsIHNvbWVFbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsKGR1cmF0aW9uKTtcbiAgfVxuXG4gIGFuaW1hdGVTY3JvbGwoZHVyYXRpb24pIHtcbiAgICBjb25zdCBzb21lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxEaXYnKTtcbiAgICBjb25zdCBzdGFydCA9IHNvbWVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCBlbmQgPSBzb21lRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgY2hhbmdlID0gZW5kIC0gc3RhcnQ7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gMjA7XG4gICAgZnVuY3Rpb24gZWFzZUluT3V0KGN1cnJlbnRUaW1lLCBzdGFydFBvcywgY2hhbmdlUG9zLCBkZWxheSkge1xuICAgICAgY3VycmVudFRpbWUgLz0gZGVsYXkgLyAyO1xuICAgICAgaWYgKGN1cnJlbnRUaW1lIDwgMSkge1xuICAgICAgICByZXR1cm4gY2hhbmdlUG9zIC8gMiAqIGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUgKyBzdGFydFBvcztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRUaW1lIC09IDE7XG4gICAgICByZXR1cm4gLWNoYW5nZVBvcyAvIDIgKiAoY3VycmVudFRpbWUgKiAoY3VycmVudFRpbWUgLSAyKSAtIDEpICsgc3RhcnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoZWxhcHNlZFRpbWUpIHtcbiAgICAgIGVsYXBzZWRUaW1lICs9IGluY3JlbWVudDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZWFzZUluT3V0KGVsYXBzZWRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgICBzb21lRWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgIGlmIChlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFuaW1hdGUoZWxhcHNlZFRpbWUpO1xuICAgICAgICB9LCBpbmNyZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRlKDApO1xuICB9XG5cbn1cblxuIl19