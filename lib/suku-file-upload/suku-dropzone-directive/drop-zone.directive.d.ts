import { EventEmitter } from '@angular/core';
export declare class SukuDropZoneDirective {
    dropped: EventEmitter<FileList>;
    hovered: EventEmitter<boolean>;
    constructor();
    onDrop($event: any): void;
    onDragOver($event: any): void;
    onDragLeave($event: any): void;
}
