import { layout, select } from 'd3';
import { CommonModule } from '@angular/common';
import { Injectable, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, NgModule, defineInjectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuWebcomponentsService {
    constructor() { }
}
SukuWebcomponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SukuWebcomponentsService.ctorParameters = () => [];
/** @nocollapse */ SukuWebcomponentsService.ngInjectableDef = defineInjectable({ factory: function SukuWebcomponentsService_Factory() { return new SukuWebcomponentsService(); }, token: SukuWebcomponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuWebcomponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuWebcomponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-suku-webcomponents',
                template: `
    <p>
      suku-webcomponents works!
    </p>
  `
            }] }
];
/** @nocollapse */
SukuWebcomponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuTreeComponent {
    constructor() {
        this.boxWidth = 180;
        this.boxHeight = 55;
        this.margin = {
            top: 50,
            right: 5,
            bottom: 50,
            left: 5
        };
        this.width = 1360 - this.margin.left - this.margin.right;
        this.height = 610 - this.margin.top - this.margin.bottom;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        console.log('called');
        if (this.treeDataFromApi) {
            console.log('data>', this.treeDataFromApi);
            this.constructTree();
        }
    }
    /**
     * @return {?}
     */
    constructTree() {
        /** @type {?} */
        const treeData = JSON.parse(this.treeDataFromApi);
        this.i = 0;
        if (treeData) {
            this.tree = layout
                .tree()
                .separation((a, b) => (a.parent === b.parent ? 5 : 5.25))
                .children((d) => {
                return d.relations;
            })
                .size([this.height, this.width]);
            this.svg = select('.tree')
                .append('svg')
                .attr('width', this.width + this.margin.right + this.margin.left)
                .attr('height', this.height + this.margin.top + this.margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
            this.root = treeData[0];
            this.drawTree();
        }
    }
    /**
     * @return {?}
     */
    drawTree() {
        /** @type {?} */
        const nodes = this.tree.nodes(this.root).reverse();
        /** @type {?} */
        const links = this.tree.links(nodes);
        nodes.forEach((d) => {
            d.y = this.width - 109 - d.depth * 270; // reverse tree
        });
        /** @type {?} */
        const node = this.svg.selectAll('g.node').data(nodes, (d) => {
            return d.id || (d.id = ++this.i); // assign id to nodes
        });
        /** @type {?} */
        const nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', (d) => {
            return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
        });
        // append line into svg
        node
            .append('line')
            .style('stroke', (d) => {
            if (d.level === 1) {
                return '#6f3bda';
            }
            if (d.level === 2) {
                return '#3fdbef';
            }
            if (d.level === 3) {
                return '#b8ce2b';
            }
            else {
                return '#3fdbef';
            }
        })
            .attr('x1', -(this.boxWidth / 2))
            .attr('y1', -(this.boxHeight / 2))
            .attr('x2', -(this.boxWidth / 2))
            .attr('y2', this.boxHeight / 2)
            .attr('stroke-width', '10');
        // append rect into svg
        node
            .append('rect')
            .attr({
            x: -(this.boxWidth / 2),
            y: -(this.boxHeight / 2),
            width: this.boxWidth,
            height: this.boxHeight
        })
            .attr('fill', 'white')
            .attr('stroke-width', '.07')
            .attr('stroke', 'black');
        node
            .append('text')
            .attr('x', (d) => {
            return -(this.boxWidth / 20);
        })
            .attr('y', (d) => {
            return this.boxWidth / 60;
        })
            .style('text-anchor', 'middle')
            .text((d) => {
            return d.product.name;
        });
        /** @type {?} */
        const link = this.svg.selectAll('path.link').data(links, (d) => {
            this.data = d;
            return d.target.id;
        });
        // append link into svg
        link
            .enter()
            .insert('path', 'g')
            .attr('class', 'link')
            .attr('stroke', '#000')
            .attr('shape-rendering', 'crispEdges')
            .attr('d', (d) => {
            /** @type {?} */
            const sourceX = d.source.x;
            /** @type {?} */
            const sourceY = d.source.y + this.boxWidth / 2;
            /** @type {?} */
            const targetX = d.target.x;
            /** @type {?} */
            const targetY = d.target.y - this.boxWidth / 2;
            return ('M' +
                sourceY +
                ',' +
                sourceX +
                'H' +
                (sourceY + (targetY - sourceY) / 2) +
                'V' +
                targetX +
                'H' +
                targetY);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-tree',
                template: "<div class=\"tree\"></div>",
                styles: [".tree{width:100%;overflow-x:scroll!important;direction:rtl!important}svg{overflow-x:scroll!important}.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}.link{fill:none;stroke:#c2c1c1;stroke-width:2px}/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif!important;fill:#aaa}/deep/.link{fill:none!important;stroke:#c2c1c1!important;stroke-width:2px!important}/deep/.tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}"]
            }] }
];
/** @nocollapse */
SukuTreeComponent.ctorParameters = () => [];
SukuTreeComponent.propDecorators = {
    treeDataFromApi: [{ type: Input, args: ['tree-data',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuTrackProgressBarComponent {
    constructor() {
        this.progressStyleOne = 'progressCompleted';
        this.progressStyleTwo = 'progressActive';
        this.progressStyleThree = 'progressUpcoming';
        this.headingOne = 'SELECT A PRODUCT';
        this.headingTwo = 'TRACE COMPONENTS';
        this.headingThree = 'SHOW TRACE';
        this.headingOneId = 'firstHeading';
        this.headingTwoId = 'secondHeading';
        this.headingThreeId = 'thirdHeading';
        this.customHeadingOneClass = '';
        this.customHeadingTwoClass = '';
        this.customHeadingThreeClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuTrackProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-track-progress-bar',
                template: "<table class=\"col-sm-6 offset-sm-3\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\">\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\">\n      <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\">\n      <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-8 offset-sm-2 text-center\">\n  <tr id=\"txt\">\n    <td class=\"{{customHeadingOneClass}} progressTitle pt-3\">\n      {{headingOne}}\n    </td>\n    <td class=\"{{customHeadingTwoClass}} progressTitle pt-3\">\n      {{headingTwo}}\n    </td>\n    <td class=\"{{customHeadingThreeClass}} progressTitle pt-3\">\n      {{headingThree}}\n    </td>\n  </tr>\n</table>",
                styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif}.progressTitle{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.tracTraceTxtBold{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}"]
            }] }
];
/** @nocollapse */
SukuTrackProgressBarComponent.ctorParameters = () => [];
SukuTrackProgressBarComponent.propDecorators = {
    progressStyleOne: [{ type: Input, args: ['progress-style-one',] }],
    progressStyleTwo: [{ type: Input, args: ['progress-style-two',] }],
    progressStyleThree: [{ type: Input, args: ['progress-style-three',] }],
    headingOne: [{ type: Input }],
    headingTwo: [{ type: Input }],
    headingThree: [{ type: Input }],
    headingOneId: [{ type: Input }],
    headingTwoId: [{ type: Input }],
    headingThreeId: [{ type: Input }],
    customHeadingOneClass: [{ type: Input, args: ['custom-heading-one-class',] }],
    customHeadingTwoClass: [{ type: Input, args: ['custom-heading-two-class',] }],
    customHeadingThreeClass: [{ type: Input, args: ['custom-heading-three-class',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuProductTraceWidgetComponent {
    constructor() {
        this.val = true;
        this.val2 = false;
        this.isSearch = false;
        this.searchFun = new EventEmitter();
        this.selectproducts = new EventEmitter();
        this.searchByProduct = new EventEmitter();
        this.traceproduct = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get disableBtn() {
        return this._disableBtn;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disableBtn(val) {
        this._disableBtn = val;
        console.log("disableBtn", this._disableBtn);
    }
    /**
     * @return {?}
     */
    get productdetails() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set productdetails(val) {
        if (val) {
            // this.disableBtn = true;
            console.log("disable", this.disableBtn);
            this._data = JSON.parse(val);
        }
    }
    /**
     * @return {?}
     */
    get result() {
        return this._result;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    set result(res) {
        this._result = res;
        console.log("result", this._result);
    }
    /**
     * @return {?}
     */
    searchEnabled() {
        this.isSearch = !this.isSearch;
        console.log("this.isSearch", this.isSearch);
    }
    /**
     * @return {?}
     */
    searchReset() {
        // if (this.isSearch) {
        // 	this.visible = true;
        // 	console.log("btn", this.disableBtn , "val", this._visible);
        // }
    }
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    testFun(val1, val2) {
        console.log('val', val1, val2);
        // this.selectProduct.emit(val1, val2);
    }
    /**
     * @return {?}
     */
    get visible() {
        console.log('data', this._visible);
        return this._visible;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set visible(val) {
        this._visible = val;
        console.log('Setting date: ' + val);
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    showSelectedPro(newValue) {
        if (newValue) {
            // this.disableBtn = false;
            console.log("disable", this.disableBtn);
        }
        this.selectedItem = newValue;
        console.log('this.selectedItem', this.selectedItem);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuProductTraceWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-product-trace-widget',
                template: "<span [formGroup]=\"form\">\n  <div class=\" product-boxContent\">\n    <div class=\"col-sm-12 prizeHead pl-0\">\n      {{headName}}\n    </div>\n    <div class=\"col-sm-12 prizesubHead pl-0\">\n      {{subHeadName}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\n    <div class=\"col-sm-12 productName pb-3\">\n      {{name}}\n    </div>\n    <div class=\"col-sm-12 pb-2 pl-3 p-0 searchBorderBox\">\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\n        placeholder=\"search\" (keyup)=\"searchFun.emit(isSearch)\">\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <div class=\"col\" *ngFor=\"let products of productdetails\">\n          <mat-radio-button color=\"primary\" class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\n            (click)=\"showSelectedPro(products)\">{{products.product.description}}<br>\n            {{products.product.name}}<br></mat-radio-button>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <a *ngIf=\"_visible == 'true'\" id=\"searchForProduct\" class=\"trackBtn btn-info f14\" (click)=\"searchByProduct.emit()\">\n          Search for product </a>\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"tracetheProduct\" class=\"trackBtn btn-info f14\"\n          (click)=\"traceproduct.emit(1)\"> trace the\n          product </a>\n      </span>\n    </div>\n  </div>\n</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".product-boxContent{width:100%;float:left;background:#494848;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:15px 5px 4px 15px;margin:0}.prizeHead{width:100%;float:left;font-size:17px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:0 -4px 2px 0 rgba(0,0,0,.08);border-radius:0;margin-top:84px!important}.productName{color:#e5e5e5;font-size:13px}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px}.searchBorderStyles{width:87%;padding:5px 0 0;border-width:0}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:15px;padding:.55rem .85rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:grey!important;background:#a7bf2e!important}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{color:#b6b6b6}.resultCount{color:#e5e5e5;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}"]
            }] }
];
/** @nocollapse */
SukuProductTraceWidgetComponent.ctorParameters = () => [];
SukuProductTraceWidgetComponent.propDecorators = {
    form: [{ type: Input }],
    headName: [{ type: Input, args: ['head-name',] }],
    subHeadName: [{ type: Input, args: ['sub-Head-Name',] }],
    name: [{ type: Input }],
    control: [{ type: Input }],
    searchFun: [{ type: Output }],
    selectproducts: [{ type: Output }],
    searchByProduct: [{ type: Output }],
    traceproduct: [{ type: Output }],
    disableBtn: [{ type: Input }],
    productdetails: [{ type: Input }],
    result: [{ type: Input }],
    visible: [{ type: Input, args: ['visible',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuWebcomponentsModule {
}
SukuWebcomponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SukuWebcomponentsComponent, SukuTreeComponent, SukuTrackProgressBarComponent, SukuProductTraceWidgetComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatAutocompleteModule,
                    MatBadgeModule,
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatDividerModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatStepperModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule
                ],
                exports: [SukuWebcomponentsComponent, SukuTrackProgressBarComponent, SukuTreeComponent, SukuProductTraceWidgetComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SukuWebcomponentsService, SukuWebcomponentsComponent, SukuWebcomponentsModule, SukuProductTraceWidgetComponent as ɵc, SukuTrackProgressBarComponent as ɵb, SukuTreeComponent as ɵa };

//# sourceMappingURL=suku-webcomponents.js.map