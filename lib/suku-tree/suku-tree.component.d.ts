import { OnChanges } from '@angular/core';
export declare class SukuTreeComponent implements OnChanges {
    treeDataFromApi: any;
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
    ngOnChanges(): void;
    constructTree(): void;
    drawTree(): void;
}
