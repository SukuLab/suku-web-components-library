/// <reference types="node" />
import { OnInit } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from 'events';
export declare class SukuChatWidgetComponent implements OnInit {
    _messageObj: any;
    _imgPlaceholder: string;
    scroll: ScrollToBottomDirective;
    chat: {
        labelOne: string;
        labelOneId: string;
        labelTwo: string;
        labelTwoId: string;
    };
    contentOne: string;
    chatStatus: boolean;
    messageData: any[];
    IconSrc: string;
    userImg: string;
    toUserImg: string;
    message: EventEmitter;
    scrollHandler(event: any): void;
    constructor();
    ngOnInit(): void;
    scrollDown(): void;
    sendMessage(val: any): void;
}
