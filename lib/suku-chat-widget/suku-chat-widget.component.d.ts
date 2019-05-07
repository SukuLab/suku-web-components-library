import { OnInit } from '@angular/core';
export declare class SukuChatWidgetComponent implements OnInit {
    chat: {
        labelOne: string;
        labelOneId: string;
        labelTwo: string;
        labelTwoId: string;
    };
    contentOne: string;
    chatStatus: boolean;
    messageData: any[];
    constructor();
    ngOnInit(): void;
    scrollDown(): void;
    sendMessage(val: any): void;
}
