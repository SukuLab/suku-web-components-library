import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export declare class SukuDwollaFundingSourceComponent implements OnInit {
    private snackBar;
    iavtoken: string;
    constructor(snackBar: MatSnackBar);
    ngOnInit(): void;
    getDwollaHtml(): void;
}
