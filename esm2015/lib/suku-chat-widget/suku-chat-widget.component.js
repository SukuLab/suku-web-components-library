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
        this.userAction = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    scrollHandler(event) {
        console.log('Scroll Event', event);
        // const scrollTop = event.target.scrollTop;
        console.log('Scroll Event', event.target.scrollTop);
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
    }
    /**
     * @return {?}
     */
    action() {
        if (this.messageData) {
            this.userAction.emit(this.messageData[0].sender.userId);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    sendMessage(val) {
        console.log('test-send', val);
        this.sendmessage.emit(val);
        this.messageData.push(this._messageObj);
    }
    /**
     * @return {?}
     */
    scrollToTop() {
        console.log('sd');
        // (function smoothscroll() {
        //     const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        //     if (currentScroll > 0) {
        //         window.requestAnimationFrame(smoothscroll);
        //         window.scrollTo(0, currentScroll - (currentScroll / 8));
        //     }
        // })();
    }
}
SukuChatWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-chat-widget',
                template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2>{{chat?.labelTwo}}<span class=\"pl-lg-2 pop-bold\" (click)=\"action()\"\n                id=\"{{chat?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <div id=\"scrollDiv\" class=\"chatBox p-1\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\"\n        (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col\" [class.messageContainer]=\"item?.userId == item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mb-2 ml-2 p-1\"\n                [ngClass]=\"{'order-last align-self-end': item?.userId == item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? userImg : toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-2\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <!-- <span class=\"tooltip\"> -->\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                      <!-- <span class=\"tooltiptext\">{{item?.timestamp | date:'d MMM yyyy h:mm:s a'}}</span>\n                      </span> -->\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'d MMM yyyy h:mm:s a'}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToTop()\" *ngIf=\"false\">\n            <button class=\"scrollDown\"><span class=\"fa fa-chevron-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <!-- <div class=\"scroll-to-top\" >\n          <button (click)=\"scrollToTop()\">\n              <i class=\"fa fa-chevron-up\"></i>\n          </button>\n      </div> -->\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-sm-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"IconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.messageStyle{display:flex;width:100%}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.user-icon{vertical-align:middle;width:50px;height:50px;border-radius:50%}.rightFloat{justify-content:flex-end!important}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:11px;padding-top:.25rem;padding-left:.25rem;padding-right:.25rem;opacity:0;z-index:10}.messageContainer{float:right!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.bg-light{background-color:#f2f2f2!important}.rotateIcon{width:34px;height:34px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scroll-to-top{justify-content:flex-end;bottom:15px;right:15px;transition:.2s ease-in-out}.show-scrollTop{opacity:1;transition:.2s ease-in-out}.tooltip{position:relative;display:contents;border-bottom:1px dotted #000}.tooltip .tooltiptext{visibility:hidden;width:129px;background-color:#efeeee;color:#726868;text-align:start;border-radius:5px;position:absolute;z-index:1;top:68%;left:59%;margin-left:-60px;padding-left:5px;font-size:11px;padding-right:5px}.tooltip:hover .tooltiptext{visibility:visible}.tooltip-example{text-align:center;padding:0 50px}.tooltip-example [tooltip]{display:inline-block;margin:50px 20px;width:180px;height:50px;border:1px solid gray;border-radius:5px;line-height:50px;text-align:center}.ng-tooltip{position:absolute;max-width:150px;font-size:14px;text-align:center;color:#f8f8f2;padding:3px 8px;background:#282a36;border-radius:4px;z-index:1000;opacity:0}.ng-tooltip:after{content:\"\";position:absolute;border-style:solid}.ng-tooltip-top:after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#000 transparent transparent}.ng-tooltip-bottom:after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:transparent transparent #000}.ng-tooltip-left:after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:transparent transparent transparent #000}.ng-tooltip-right:after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:transparent #000 transparent transparent}.ng-tooltip-show{opacity:1}.scrollDown{color:#fff;padding:5px;width:50px;height:50px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;background:rgba(178,178,178,.7);transition:.3s;border:none}.scrollDown:hover{background:#a6bf2e;cursor:pointer}.scroll-down-icon{font-size:17px;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:fixed;bottom:141px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU03QyxNQUFNLE9BQU8sdUJBQXVCO0lBMkJsQztRQXpCQSxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBSXRDLFNBQUksR0FBRztZQUNkLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUM7UUFDTyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1FBQ25ELFlBQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUN2QyxjQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTFCLENBQUM7Ozs7O0lBTmYsYUFBYSxDQUFDLEtBQUs7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsNENBQTRDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUlILFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDekMsTUFBTSxFQUFFO29CQUNOLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNO29CQUN6QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtpQkFDOUM7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUTtpQkFDaEQ7YUFDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQUc7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLDZCQUE2QjtRQUM3QiwyRkFBMkY7UUFDM0YsK0JBQStCO1FBQy9CLHNEQUFzRDtRQUN0RCxtRUFBbUU7UUFDbkUsUUFBUTtRQUNSLFFBQVE7SUFDWixDQUFDOzs7WUF6RUEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDgzSEFBZ0Q7O2FBRWpEOzs7OztxQkFLRSxTQUFTLFNBQUMsdUJBQXVCO21CQUVqQyxLQUFLO3lCQU1MLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLE1BQU07eUJBQ04sTUFBTTs0QkFDTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbkJsQyw4Q0FBWTs7SUFDWixrREFBK0M7O0lBQy9DLGdEQUFjOztJQUNkLHlDQUNnQzs7SUFDaEMsdUNBS0U7O0lBQ0YsNkNBQStCOztJQUMvQiw2Q0FBNEI7O0lBQzVCLDhDQUEwQjs7SUFDMUIsMENBQTREOztJQUM1RCwwQ0FBZ0Q7O0lBQ2hELDRDQUFrRDs7SUFDbEQsOENBQTJDOztJQUMzQyw2Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUgfSBmcm9tICcuL3N1a3UtY2hhdC1zY3JvbGwtZGlyZWN0aXZlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jaGF0LXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDaGF0V2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX21lc3NhZ2VPYmo7XG4gIF9pbWdQbGFjZWhvbGRlciA9ICcuLi9hc3NldHMvaW1hZ2VzL2dyb3VwLnN2Zyc7XG4gIF9zY3JvbGxIZWlnaHQ7XG4gIEBWaWV3Q2hpbGQoU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUpXG4gIHNjcm9sbDogU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmU7XG4gIEBJbnB1dCgpIGNoYXQgPSB7XG4gICAgbGFiZWxPbmU6ICdOZWdvdGlhdGlvbiBDaGF0IEJveCcsXG4gICAgbGFiZWxPbmVJZDogJ25lZ290aWF0aW9uQ2hhdEJveCcsXG4gICAgbGFiZWxUd286ICdDaGF0dGluZyB3aXRoOicsXG4gICAgbGFiZWxUd29JZDogJ2NoYXR0aW5nV2l0aCdcbiAgfTtcbiAgQElucHV0KCkgY29udGVudE9uZSA9ICdDYW1pbGEnO1xuICBASW5wdXQoKSBjaGF0U3RhdHVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1lc3NhZ2VEYXRhID0gW107XG4gIEBJbnB1dCgpIEljb25TcmMgPSAnLi4vYXNzZXRzL2ltYWdlcy9zZW5kLW1lc3NhZ2UtaWNvbi5wbmcnO1xuICBASW5wdXQoKSB1c2VySW1nID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcbiAgQElucHV0KCkgdG9Vc2VySW1nID0gJy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXAuc3ZnJztcbiAgQE91dHB1dCgpIHNlbmRtZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgICBzY3JvbGxIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsIEV2ZW50JywgZXZlbnQpO1xuICAgICAgLy8gY29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGwgRXZlbnQnLCBldmVudC50YXJnZXQuc2Nyb2xsVG9wKTtcbiAgICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlT2JqID0ge1xuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLm1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogdGhpcy5tZXNzYWdlRGF0YVswXS5kYXRlVGltZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VySWQsXG4gICAgICAgIHNlbmRlcjoge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5tZXNzYWdlRGF0YVswXS5zZW5kZXIudXNlcklkLFxuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnNlbmRlci51c2VyTmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZXI6IHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMubWVzc2FnZURhdGFbMF0ucmVjZWl2ZXIudXNlcklkLFxuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLm1lc3NhZ2VEYXRhWzBdLnJlY2VpdmVyLnVzZXJOYW1lLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlRGF0YSkge1xuICAgIHRoaXMudXNlckFjdGlvbi5lbWl0KHRoaXMubWVzc2FnZURhdGFbMF0uc2VuZGVyLnVzZXJJZCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2UodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3Qtc2VuZCcsIHZhbCk7XG4gICAgdGhpcy5zZW5kbWVzc2FnZS5lbWl0KHZhbCk7XG4gICAgdGhpcy5tZXNzYWdlRGF0YS5wdXNoKHRoaXMuX21lc3NhZ2VPYmopO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc29sZS5sb2coJ3NkJyk7XG4gICAgLy8gKGZ1bmN0aW9uIHNtb290aHNjcm9sbCgpIHtcbiAgICAvLyAgICAgY29uc3QgY3VycmVudFNjcm9sbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgLy8gICAgIGlmIChjdXJyZW50U2Nyb2xsID4gMCkge1xuICAgIC8vICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGhzY3JvbGwpO1xuICAgIC8vICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGN1cnJlbnRTY3JvbGwgLSAoY3VycmVudFNjcm9sbCAvIDgpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pKCk7XG59XG5cbn1cblxuIl19