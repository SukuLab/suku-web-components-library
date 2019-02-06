import { OnChanges, EventEmitter } from '@angular/core';
export declare class SukuTreeComponent implements OnChanges {
    treeDataFromApi: any;
    action: EventEmitter<{}>;
    tree: any;
    root: any;
    i: any;
    svg: any;
    boxWidth: number;
    boxHeight: number;
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    width: number;
    height: number;
    data: any;
    testd: number;
    childCount: number;
    max: any;
    tree1: any;
    maxHeight: any;
    dataUID: any;
    svgNOde: any;
    j: any;
    ngOnChanges(): void;
    constructTree(): void;
    drawTree(): void;
    actionFun(val: any): void;
}
