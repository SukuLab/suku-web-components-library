/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuChatWidgetComponent = /** @class */ (function () {
    function SukuChatWidgetComponent() {
        this.chat = {
            labelOne: 'Negotiation Chat Box',
            labelOneId: 'negotiationChatBox',
            labelTwo: 'Chatting with:',
            labelTwoId: 'chattingWith'
        };
        this.contentOne = 'Camila';
        this.chatStatus = false;
        this.messageData = [];
    }
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.scrollDown();
    };
    /**
     * @return {?}
     */
    SukuChatWidgetComponent.prototype.scrollDown = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sss = document.getElementById('scrollDiv');
        if (sss) {
            sss.scrollTop = sss.scrollHeight;
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
        this.scrollDown();
    };
    SukuChatWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-chat-widget',
                    template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2>{{chat?.labelTwo}}<span class=\"pl-lg-2 pop-bold\"\n                id=\"{{chat?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <div id=\"scrollDiv\" class=\"chatBox p-1\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\">\n          <div class=\"col\">\n            <div class=\"messageStyle mb-2\" [class.rightFloat]=\"item?.to?.userId == item?.from?.userId\">\n              <img [src]=\"((item?.userId == item?.from?.userId)? item?.from?.userImg : item?.to?.userImg)\" alt=\"Avatar\"\n                class=\"user-icon m-1 p-1\"\n                [ngClass]=\"{'order-last align-self-end': item?.userId == item?.from?.userId }\">\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.from?.userId\" class=\"msg-content hoverable\">\n                <div class=\"d-flex\" id=\"messageBlock\" [ngClass]=\"{ 'float-right': item?.to?.userId == item?.from?.userId}\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mt-2 chatMessage\"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.from?.userId, 'receiverColor': item?.userId != item?.from?.userId }\">\n                      {{item?.message}}</p>\n                  </span>\n                </div>\n                <p class=\"timeStamp mb-0\" id=\"timeStamp\">{{item?.timestamp}}</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-sm-10 pl-1 pr-1\">\n            <input class=\"form-control\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 mx-auto mt-2 f22 fa fa-paper-plane-o c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.messageStyle{display:flex;width:100%;float:left}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid #a7bf2e;border-bottom:4px solid #a7bf2e}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.chat-header{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}h1{color:#fafaf8;font-size:20px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:200;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-bold{font-family:Poppins,sans-serif!important;font-weight:600!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.user-icon{vertical-align:middle;width:50px;height:50px;border-radius:50%}.rightFloat{justify-content:flex-end!important}.chatBox{height:300px!important;overflow-x:hidden!important}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.msg-content{font-family:Poppins,sans-serif!important;font-weight:400;font-size:15px}.senderColor{background-color:#a7bf2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important}.form-control:focus{color:#495057;background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:Poppins,sans-serif!important;font-size:12px;padding-left:.75rem;padding-top:.25rem;display:none}#messageBlock{width:80%}#messageBlock:hover+#timeStamp{display:block}"]
                }] }
    ];
    /** @nocollapse */
    SukuChatWidgetComponent.ctorParameters = function () { return []; };
    SukuChatWidgetComponent.propDecorators = {
        chat: [{ type: Input }],
        contentOne: [{ type: Input }],
        chatStatus: [{ type: Input }],
        messageData: [{ type: Input }]
    };
    return SukuChatWidgetComponent;
}());
export { SukuChatWidgetComponent };
if (false) {
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chat;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.contentOne;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.chatStatus;
    /** @type {?} */
    SukuChatWidgetComponent.prototype.messageData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFpQkU7UUFWUyxTQUFJLEdBQUc7WUFDZCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixVQUFVLEVBQUUsY0FBYztTQUMzQixDQUFDO1FBQ08sZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBRVYsQ0FBQzs7OztJQUVqQiwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjs7WUFDUSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxHQUFHO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsa3VGQUFnRDs7aUJBRWpEOzs7Ozt1QkFHRSxLQUFLOzZCQU1MLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQW9CUiw4QkFBQztDQUFBLEFBbkNELElBbUNDO1NBOUJZLHVCQUF1Qjs7O0lBRWxDLHVDQUtFOztJQUNGLDZDQUErQjs7SUFDL0IsNkNBQTRCOztJQUM1Qiw4Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jaGF0LXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jaGF0LXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDaGF0V2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjaGF0ID0ge1xuICAgIGxhYmVsT25lOiAnTmVnb3RpYXRpb24gQ2hhdCBCb3gnLFxuICAgIGxhYmVsT25lSWQ6ICduZWdvdGlhdGlvbkNoYXRCb3gnLFxuICAgIGxhYmVsVHdvOiAnQ2hhdHRpbmcgd2l0aDonLFxuICAgIGxhYmVsVHdvSWQ6ICdjaGF0dGluZ1dpdGgnXG4gIH07XG4gIEBJbnB1dCgpIGNvbnRlbnRPbmUgPSAnQ2FtaWxhJztcbiAgQElucHV0KCkgY2hhdFN0YXR1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBtZXNzYWdlRGF0YSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gIH1cblxuICBzY3JvbGxEb3duKCkge1xuICAgIGNvbnN0IHNzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxEaXYnKTtcbiAgICBpZiAoc3NzKSB7XG4gICAgICBzc3Muc2Nyb2xsVG9wID0gc3NzLnNjcm9sbEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZSh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdC1zZW5kJywgdmFsKTtcbiAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgfVxuXG59XG5cbiJdfQ==