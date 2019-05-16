import { OnInit } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from '@angular/core';
export declare class SukuChatWidgetComponent implements OnInit {
    _messageObj: any;
    _imgPlaceholder: string;
    _userImg: string;
    _toUserImg: string;
    _scrollHeight: any;
    _touserID: any;
    _initialScrollHeight: any;
    _showScrollDownIcon: any;
    _chkmessageStatus: any;
    _oldMessage: any;
    _newMessageCount: any;
    scroll: ScrollToBottomDirective;
    chat: {
        labelOne: string;
        labelOneId: string;
        labelTwo: string;
        labelTwoId: string;
    };
    toUserName: string;
    toUserNameId: string;
    chatStatus: boolean;
    messageData: any[];
    sendMessageIconSrc: string;
    userImg: string;
    toUserImg: string;
    chkmessageStatus: any;
    sendmessage: EventEmitter<{}>;
    userAction: EventEmitter<{}>;
    scrollHandler(event: any): void;
    constructor();
    ngOnInit(): void;
    action(): void;
    sendMessage(val: any): void;
    scrollToBottom(): void;
    animateScroll(duration: any): void;
}
