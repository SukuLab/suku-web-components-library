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
        this.contentOne = 'Camila';
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
        console.log('Scroll Event', event);
        // const scrollTop = event.target.scrollTop;
        console.log('Scroll Event', event.target.scrollTop);
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
    };
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.action = /**
     * @return {?}
     */
    function () {
        if (this.messageData) {
            this.userAction.emit(this.messageData[0].sender.userId);
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
        this.messageData.push(this._messageObj);
    };
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        console.log('sd');
        // (function smoothscroll() {
        //     const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        //     if (currentScroll > 0) {
        //         window.requestAnimationFrame(smoothscroll);
        //         window.scrollTo(0, currentScroll - (currentScroll / 8));
        //     }
        // })();
    };
    SukuChatWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-chat-widget',
                    template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2>{{chat?.labelTwo}}<span class=\"pl-lg-2 pop-bold\" (click)=\"action()\"\n                id=\"{{chat?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <div id=\"scrollDiv\" class=\"chatBox p-1\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\"\n        (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col\" [class.messageContainer]=\"item?.userId == item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mb-2 ml-2 p-1\"\n                [ngClass]=\"{'order-last align-self-end': item?.userId == item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? userImg : toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-2\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <!-- <span class=\"tooltip\"> -->\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                      <!-- <span class=\"tooltiptext\">{{item?.timestamp | date:'d MMM yyyy h:mm:s a'}}</span>\n                      </span> -->\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'d MMM yyyy h:mm:s a'}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <!-- [ngClass]=\"{'show-scrollTop': windowScrolled}\" -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToTop()\">\n            <button class=\"scrollDown\"><span class=\"fa fa-chevron-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <!-- <div class=\"scroll-to-top\" >\n          <button (click)=\"scrollToTop()\">\n              <i class=\"fa fa-chevron-up\"></i>\n          </button>\n      </div> -->\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-sm-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.messageStyle{display:flex;width:100%}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.user-icon{vertical-align:middle;width:50px;height:50px;border-radius:50%}.rightFloat{justify-content:flex-end!important}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:11px;padding-top:.25rem;padding-left:.25rem;padding-right:.25rem;opacity:0;z-index:10}.messageContainer{float:right!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.bg-light{background-color:#f2f2f2!important}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scroll-to-top{justify-content:flex-end;bottom:15px;right:15px;transition:.2s ease-in-out}.show-scrollTop{opacity:1;transition:.2s ease-in-out}.tooltip{position:relative;display:contents;border-bottom:1px dotted #000}.tooltip .tooltiptext{visibility:hidden;width:129px;background-color:#efeeee;color:#726868;text-align:start;border-radius:5px;position:absolute;z-index:1;top:68%;left:59%;margin-left:-60px;padding-left:5px;font-size:11px;padding-right:5px}.tooltip:hover .tooltiptext{visibility:visible}.tooltip-example{text-align:center;padding:0 50px}.tooltip-example [tooltip]{display:inline-block;margin:50px 20px;width:180px;height:50px;border:1px solid gray;border-radius:5px;line-height:50px;text-align:center}.ng-tooltip{position:absolute;max-width:150px;font-size:14px;text-align:center;color:#f8f8f2;padding:3px 8px;background:#282a36;border-radius:4px;z-index:1000;opacity:0}.ng-tooltip:after{content:\"\";position:absolute;border-style:solid}.ng-tooltip-top:after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#000 transparent transparent}.ng-tooltip-bottom:after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:transparent transparent #000}.ng-tooltip-left:after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:transparent transparent transparent #000}.ng-tooltip-right:after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:transparent #000 transparent transparent}.ng-tooltip-show{opacity:1}.scrollDown{color:#fff;padding:5px;width:50px;height:50px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;background:rgba(178,178,178,.7);transition:.3s;border:none}.scrollDown:hover{background:#a6bf2e;cursor:pointer}.scroll-down-icon{font-size:17px;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;bottom:84px;right:402px}"]
                }] }
    ];
    /** @nocollapse */
    SukuChatWidgetComponent.ctorParameters = function () { return []; };
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
    /** @type {?} */
    SukuChatWidgetComponent.prototype.userAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QztJQWdDRTtRQXpCQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBSXRDLFNBQUksR0FBRztZQUNkLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUM7UUFDTyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1FBQ25ELFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUN2QyxjQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTFCLENBQUM7Ozs7O0lBTmYsK0NBQWE7Ozs7SUFEZixVQUNnQixLQUFLO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLDRDQUE0QztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFJSCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDekMsTUFBTSxFQUFFO29CQUNOLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNO29CQUN6QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtpQkFDOUM7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUTtpQkFDaEQ7YUFDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQU07OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksR0FBRztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQiw2QkFBNkI7UUFDN0IsMkZBQTJGO1FBQzNGLCtCQUErQjtRQUMvQixzREFBc0Q7UUFDdEQsbUVBQW1FO1FBQ25FLFFBQVE7UUFDUixRQUFRO0lBQ1osQ0FBQzs7Z0JBekVBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixpN0hBQWdEOztpQkFFakQ7Ozs7O3lCQUtFLFNBQVMsU0FBQyx1QkFBdUI7dUJBRWpDLEtBQUs7NkJBTUwsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsTUFBTTs2QkFDTixNQUFNO2dDQUNOLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBa0RwQyw4QkFBQztDQUFBLEFBM0VELElBMkVDO1NBdEVZLHVCQUF1Qjs7O0lBQ2xDLDhDQUFZOztJQUNaLGtEQUErQzs7SUFDL0MsZ0RBQWM7O0lBQ2QseUNBQ2dDOztJQUNoQyx1Q0FLRTs7SUFDRiw2Q0FBK0I7O0lBQy9CLDZDQUE0Qjs7SUFDNUIsOENBQTBCOztJQUMxQiwwQ0FBNEQ7O0lBQzVELDBDQUFnRDs7SUFDaEQsNENBQWtEOztJQUNsRCw4Q0FBMkM7O0lBQzNDLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSB9IGZyb20gJy4vc3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNoYXQtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2hhdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNoYXRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfbWVzc2FnZU9iajtcbiAgX2ltZ1BsYWNlaG9sZGVyID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcbiAgX3Njcm9sbEhlaWdodDtcbiAgQFZpZXdDaGlsZChTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSlcbiAgc2Nyb2xsOiBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZTtcbiAgQElucHV0KCkgY2hhdCA9IHtcbiAgICBsYWJlbE9uZTogJ05lZ290aWF0aW9uIENoYXQgQm94JyxcbiAgICBsYWJlbE9uZUlkOiAnbmVnb3RpYXRpb25DaGF0Qm94JyxcbiAgICBsYWJlbFR3bzogJ0NoYXR0aW5nIHdpdGg6JyxcbiAgICBsYWJlbFR3b0lkOiAnY2hhdHRpbmdXaXRoJ1xuICB9O1xuICBASW5wdXQoKSBjb250ZW50T25lID0gJ0NhbWlsYSc7XG4gIEBJbnB1dCgpIGNoYXRTdGF0dXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbWVzc2FnZURhdGEgPSBbXTtcbiAgQElucHV0KCkgSWNvblNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3NlbmQtbWVzc2FnZS1pY29uLnBuZyc7XG4gIEBJbnB1dCgpIHVzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuICBASW5wdXQoKSB0b1VzZXJJbWcgPSAnLi4vYXNzZXRzL2ltYWdlcy9ncm91cC5zdmcnO1xuICBAT3V0cHV0KCkgc2VuZG1lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB1c2VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICAgIHNjcm9sbEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGwgRXZlbnQnLCBldmVudCk7XG4gICAgICAvLyBjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuICAgICAgY29uc29sZS5sb2coJ1Njcm9sbCBFdmVudCcsIGV2ZW50LnRhcmdldC5zY3JvbGxUb3ApO1xuICAgIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VPYmogPSB7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZURhdGFbMF0ubWVzc2FnZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLmRhdGVUaW1lLFxuICAgICAgICB1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJJZCxcbiAgICAgICAgc2VuZGVyOiB7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VySWQsXG4gICAgICAgICAgdXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJOYW1lLFxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlcjoge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5yZWNlaXZlci51c2VySWQsXG4gICAgICAgICAgdXNlck5hbWU6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlck5hbWUsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgYWN0aW9uKCkge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VEYXRhKSB7XG4gICAgdGhpcy51c2VyQWN0aW9uLmVtaXQodGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkKTtcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZSh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdC1zZW5kJywgdmFsKTtcbiAgICB0aGlzLnNlbmRtZXNzYWdlLmVtaXQodmFsKTtcbiAgICB0aGlzLm1lc3NhZ2VEYXRhLnB1c2godGhpcy5fbWVzc2FnZU9iaik7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zb2xlLmxvZygnc2QnKTtcbiAgICAvLyAoZnVuY3Rpb24gc21vb3Roc2Nyb2xsKCkge1xuICAgIC8vICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAvLyAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiAwKSB7XG4gICAgLy8gICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aHNjcm9sbCk7XG4gICAgLy8gICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgY3VycmVudFNjcm9sbCAtIChjdXJyZW50U2Nyb2xsIC8gOCkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSkoKTtcbn1cblxufVxuXG4iXX0=