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
    /**
     * @param {?} event
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.scrollHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((this._initialScrollHeight.scrollHeight - event.target.scrollTop) > 390) {
            this._showScrollDownIcon = true; // enable scrollToBottomOnClik()
            console.log("true");
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
                    template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mb-3 p-2\"\n                [ngClass]=\"{'order-last align-self-end ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? userImg : toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-3\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'d MMM yyyy h:mm:s a'}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:0;bottom:69px}#ScrollDownbutton:hover{position:absolute;right:0;bottom:63px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QztJQTJDRTtRQXBDQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBU3RDLFNBQUksR0FBRztZQUNkLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUM7UUFDTyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1FBQ25ELFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUN2QyxjQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFFeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBWTFCLENBQUM7Ozs7O0lBVGpCLCtDQUFhOzs7O0lBRGIsVUFDYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FB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Qjs7SUFDNUIsOENBQTBCOztJQUMxQiwwQ0FBNEQ7O0lBQzVELDBDQUFnRDs7SUFDaEQsNENBQWtEOztJQUVsRCw4Q0FBMkM7O0lBQzNDLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSB9IGZyb20gJy4vc3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNoYXQtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoYXRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfbWVzc2FnZU9iajtcbiAgX2ltZ1BsYWNlaG9sZGVyID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcbiAgX3Njcm9sbEhlaWdodDtcbiAgX3RvdXNlcklEO1xuICBfaW5pdGlhbFNjcm9sbEhlaWdodDtcbiAgX3Nob3dTY3JvbGxEb3duSWNvbjtcblxuICBAVmlld0NoaWxkKFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlKVxuICBzY3JvbGw6IFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpIGNoYXQgPSB7XG4gICAgbGFiZWxPbmU6ICdOZWdvdGlhdGlvbiBDaGF0IEJveCcsXG4gICAgbGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXG4gICAgbGFiZWxUd286ICdDaGF0dGluZyB3aXRoOicsXG4gICAgbGFiZWxUd29JZDogJ2NoYXR0aW5nV2l0aCdcbiAgfTtcbiAgQElucHV0KCkgdG9Vc2VyTmFtZSA9ICdOL0EnO1xuICBASW5wdXQoKSB0b1VzZXJOYW1lSWQgPSAndG91c2VyTmFtZSc7XG4gIEBJbnB1dCgpIGNoYXRTdGF0dXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbWVzc2FnZURhdGEgPSBbXTtcbiAgQElucHV0KCkgSWNvblNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3NlbmQtbWVzc2FnZS1pY29uLnBuZyc7XG4gIEBJbnB1dCgpIHVzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuICBASW5wdXQoKSB0b1VzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuXG4gIEBPdXRwdXQoKSBzZW5kbWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHVzZXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgc2Nyb2xsSGFuZGxlcihldmVudCkge1xuICAgIGlmICgodGhpcy5faW5pdGlhbFNjcm9sbEhlaWdodC5zY3JvbGxIZWlnaHQgLSBldmVudC50YXJnZXQuc2Nyb2xsVG9wKSA+IDM5MCkge1xuICAgICAgdGhpcy5fc2hvd1Njcm9sbERvd25JY29uID0gdHJ1ZTsgLy8gZW5hYmxlIHNjcm9sbFRvQm90dG9tT25DbGlrKClcbiAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd1Njcm9sbERvd25JY29uID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlT2JqID0ge1xuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLm1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogdGhpcy5tZXNzYWdlRGF0YVswXS5kYXRlVGltZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VySWQsXG4gICAgICAgIHNlbmRlcjoge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkLFxuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VyTmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZXI6IHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlcklkLFxuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnJlY2VpdmVyLnVzZXJOYW1lLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLl9pbml0aWFsU2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcbiAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gIH1cblxuICBhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZURhdGEpIHtcbiAgICAgIHRoaXMudXNlckFjdGlvbi5lbWl0KHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0LXNlbmQnLCB2YWwpO1xuICAgIHRoaXMuc2VuZG1lc3NhZ2UuZW1pdCh2YWwpO1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCkge1xuICAgIGNvbnN0IHNvbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRCb3gnKTtcbiAgICBjb25zb2xlLmxvZygnc2QnLCBzb21lRWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbChkdXJhdGlvbik7XG4gIH1cblxuICBhbmltYXRlU2Nyb2xsKGR1cmF0aW9uKSB7XG4gICAgY29uc3Qgc29tZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsRGl2Jyk7XG4gICAgY29uc3Qgc3RhcnQgPSBzb21lRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgZW5kID0gc29tZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIGNvbnN0IGNoYW5nZSA9IGVuZCAtIHN0YXJ0O1xuICAgIGNvbnN0IGluY3JlbWVudCA9IDIwO1xuICAgIGZ1bmN0aW9uIGVhc2VJbk91dChjdXJyZW50VGltZSwgc3RhcnRQb3MsIGNoYW5nZVBvcywgZGVsYXkpIHtcbiAgICAgIGN1cnJlbnRUaW1lIC89IGRlbGF5IC8gMjtcbiAgICAgIGlmIChjdXJyZW50VGltZSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZVBvcyAvIDIgKiBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICsgc3RhcnRQb3M7XG4gICAgICB9XG4gICAgICBjdXJyZW50VGltZSAtPSAxO1xuICAgICAgcmV0dXJuIC1jaGFuZ2VQb3MgLyAyICogKGN1cnJlbnRUaW1lICogKGN1cnJlbnRUaW1lIC0gMikgLSAxKSArIHN0YXJ0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhbmltYXRlKGVsYXBzZWRUaW1lKSB7XG4gICAgICBlbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGVhc2VJbk91dChlbGFwc2VkVGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pO1xuICAgICAgc29tZUVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICBpZiAoZWxhcHNlZFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhbmltYXRlKGVsYXBzZWRUaW1lKTtcbiAgICAgICAgfSwgaW5jcmVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0ZSgwKTtcbiAgfVxuXG59XG5cbiJdfQ==