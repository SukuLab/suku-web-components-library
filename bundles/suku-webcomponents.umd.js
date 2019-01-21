(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3'), require('@angular/common'), require('@angular/forms'), require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('suku-webcomponents', ['exports', 'd3', '@angular/common', '@angular/forms', '@angular/core', '@angular/material'], factory) :
    (factory((global['suku-webcomponents'] = {}),global.d3,global.ng.common,global.ng.forms,global.ng.core,global.ng.material));
}(this, (function (exports,d3,common,forms,i0,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWebcomponentsService = /** @class */ (function () {
        function SukuWebcomponentsService() {
        }
        SukuWebcomponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SukuWebcomponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SukuWebcomponentsService.ngInjectableDef = i0.defineInjectable({ factory: function SukuWebcomponentsService_Factory() { return new SukuWebcomponentsService(); }, token: SukuWebcomponentsService, providedIn: "root" });
        return SukuWebcomponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWebcomponentsComponent = /** @class */ (function () {
        function SukuWebcomponentsComponent() {
        }
        /**
         * @return {?}
         */
        SukuWebcomponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuWebcomponentsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-suku-webcomponents',
                        template: "\n    <p>\n      suku-webcomponents works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SukuWebcomponentsComponent.ctorParameters = function () { return []; };
        return SukuWebcomponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTreeComponent = /** @class */ (function () {
        function SukuTreeComponent() {
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
        SukuTreeComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                console.log('called');
                if (this.treeDataFromApi) {
                    console.log('data>', this.treeDataFromApi);
                    this.constructTree();
                }
            };
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.constructTree = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var treeData = JSON.parse(this.treeDataFromApi);
                this.i = 0;
                if (treeData) {
                    this.tree = d3.layout
                        .tree()
                        .separation(function (a, b) { return (a.parent === b.parent ? 5 : 5.25); })
                        .children(function (d) {
                        return d.relations;
                    })
                        .size([this.height, this.width]);
                    this.svg = d3.select('.tree')
                        .append('svg')
                        .attr('width', this.width + this.margin.right + this.margin.left)
                        .attr('height', this.height + this.margin.top + this.margin.bottom)
                        .append('g')
                        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
                    this.root = treeData[0];
                    this.drawTree();
                }
            };
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.drawTree = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var nodes = this.tree.nodes(this.root).reverse();
                /** @type {?} */
                var links = this.tree.links(nodes);
                nodes.forEach(function (d) {
                    d.y = _this.width - 109 - d.depth * 270; // reverse tree
                });
                /** @type {?} */
                var node = this.svg.selectAll('g.node').data(nodes, function (d) {
                    return d.id || (d.id = ++_this.i); // assign id to nodes
                });
                /** @type {?} */
                var nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', function (d) {
                    return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
                });
                // append line into svg
                node
                    .append('line')
                    .style('stroke', function (d) {
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
                    .attr('x', function (d) {
                    return -(_this.boxWidth / 20);
                })
                    .attr('y', function (d) {
                    return _this.boxWidth / 60;
                })
                    .style('text-anchor', 'middle')
                    .text(function (d) {
                    return d.product.name;
                });
                /** @type {?} */
                var link = this.svg.selectAll('path.link').data(links, function (d) {
                    _this.data = d;
                    return d.target.id;
                });
                // append link into svg
                link
                    .enter()
                    .insert('path', 'g')
                    .attr('class', 'link')
                    .attr('stroke', '#000')
                    .attr('shape-rendering', 'crispEdges')
                    .attr('d', function (d) {
                    /** @type {?} */
                    var sourceX = d.source.x;
                    /** @type {?} */
                    var sourceY = d.source.y + _this.boxWidth / 2;
                    /** @type {?} */
                    var targetX = d.target.x;
                    /** @type {?} */
                    var targetY = d.target.y - _this.boxWidth / 2;
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
            };
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuTreeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-tree',
                        template: "<div class=\"tree\"></div>",
                        styles: [".tree{width:100%;overflow-x:scroll!important;direction:rtl!important}svg{overflow-x:scroll!important}.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}.link{fill:none;stroke:#c2c1c1;stroke-width:2px}/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif!important;fill:#aaa}/deep/.link{fill:none!important;stroke:#c2c1c1!important;stroke-width:2px!important}/deep/.tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTreeComponent.ctorParameters = function () { return []; };
        SukuTreeComponent.propDecorators = {
            treeDataFromApi: [{ type: i0.Input, args: ['tree-data',] }]
        };
        return SukuTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTrackProgressBarComponent = /** @class */ (function () {
        function SukuTrackProgressBarComponent() {
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
        SukuTrackProgressBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuTrackProgressBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-track-progress-bar',
                        template: "<table class=\"col-sm-6 offset-sm-3\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\">\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\">\n      <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\">\n      <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-8 offset-sm-2 text-center\">\n  <tr id=\"txt\">\n    <td class=\"{{customHeadingOneClass}} progressTitle pt-3\">\n      {{headingOne}}\n    </td>\n    <td class=\"{{customHeadingTwoClass}} progressTitle pt-3\">\n      {{headingTwo}}\n    </td>\n    <td class=\"{{customHeadingThreeClass}} progressTitle pt-3\">\n      {{headingThree}}\n    </td>\n  </tr>\n</table>",
                        styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif}.progressTitle{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.tracTraceTxtBold{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTrackProgressBarComponent.ctorParameters = function () { return []; };
        SukuTrackProgressBarComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input, args: ['progress-style-one',] }],
            progressStyleTwo: [{ type: i0.Input, args: ['progress-style-two',] }],
            progressStyleThree: [{ type: i0.Input, args: ['progress-style-three',] }],
            headingOne: [{ type: i0.Input }],
            headingTwo: [{ type: i0.Input }],
            headingThree: [{ type: i0.Input }],
            headingOneId: [{ type: i0.Input }],
            headingTwoId: [{ type: i0.Input }],
            headingThreeId: [{ type: i0.Input }],
            customHeadingOneClass: [{ type: i0.Input, args: ['custom-heading-one-class',] }],
            customHeadingTwoClass: [{ type: i0.Input, args: ['custom-heading-two-class',] }],
            customHeadingThreeClass: [{ type: i0.Input, args: ['custom-heading-three-class',] }]
        };
        return SukuTrackProgressBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProductTraceWidgetComponent = /** @class */ (function () {
        function SukuProductTraceWidgetComponent() {
            this.val = true;
            this.val2 = false;
            this.isSearch = false;
            this.searchFun = new i0.EventEmitter();
            this.selectproducts = new i0.EventEmitter();
            this.searchByProduct = new i0.EventEmitter();
            this.traceproduct = new i0.EventEmitter();
        }
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "disableBtn", {
            get: /**
             * @return {?}
             */ function () {
                return this._disableBtn;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._disableBtn = val;
                console.log("disableBtn", this._disableBtn);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "productdetails", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val) {
                    // this.disableBtn = true;
                    console.log("disable", this.disableBtn);
                    this._data = JSON.parse(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "result", {
            get: /**
             * @return {?}
             */ function () {
                return this._result;
            },
            set: /**
             * @param {?} res
             * @return {?}
             */ function (res) {
                this._result = res;
                console.log("result", this._result);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.searchEnabled = /**
         * @return {?}
         */
            function () {
                this.isSearch = !this.isSearch;
                console.log("this.isSearch", this.isSearch);
            };
        /**
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.searchReset = /**
         * @return {?}
         */
            function () {
                // if (this.isSearch) {
                // 	this.visible = true;
                // 	console.log("btn", this.disableBtn , "val", this._visible);
                // }
            };
        /**
         * @param {?} val1
         * @param {?} val2
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.testFun = /**
         * @param {?} val1
         * @param {?} val2
         * @return {?}
         */
            function (val1, val2) {
                console.log('val', val1, val2);
                // this.selectProduct.emit(val1, val2);
            };
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "visible", {
            get: /**
             * @return {?}
             */ function () {
                console.log('data', this._visible);
                return this._visible;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._visible = val;
                console.log('Setting date: ' + val);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.showSelectedPro = /**
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                if (newValue) {
                    // this.disableBtn = false;
                    console.log("disable", this.disableBtn);
                }
                this.selectedItem = newValue;
                console.log('this.selectedItem', this.selectedItem);
            };
        /**
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuProductTraceWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-product-trace-widget',
                        template: "<span [formGroup]=\"form\">\n  <div class=\" product-boxContent\">\n    <div class=\"col-sm-12 prizeHead pl-0\">\n      {{headName}}\n    </div>\n    <div class=\"col-sm-12 prizesubHead pl-0\">\n      {{subHeadName}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\n    <div class=\"col-sm-12 productName pb-3\">\n      {{name}}\n    </div>\n    <div class=\"col-sm-12 pb-2 pl-3 p-0 searchBorderBox\">\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\n        placeholder=\"search\" (keyup)=\"searchFun.emit(isSearch)\">\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <div class=\"col\" *ngFor=\"let products of productdetails\">\n          <mat-radio-button color=\"primary\" class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\n            (click)=\"showSelectedPro(products)\">{{products.product.description}}<br>\n            {{products.product.name}}<br></mat-radio-button>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <a *ngIf=\"_visible == 'true'\" id=\"searchForProduct\" class=\"trackBtn btn-info f14\" (click)=\"searchByProduct.emit()\">\n          Search for product </a>\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"tracetheProduct\" class=\"trackBtn btn-info f14\"\n          (click)=\"traceproduct.emit(1)\"> trace the\n          product </a>\n      </span>\n    </div>\n  </div>\n</span>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".product-boxContent{width:100%;float:left;background:#494848;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:15px 5px 4px 15px;margin:0}.prizeHead{width:100%;float:left;font-size:17px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:0 -4px 2px 0 rgba(0,0,0,.08);border-radius:0;margin-top:84px!important}.productName{color:#e5e5e5;font-size:13px}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px}.searchBorderStyles{width:87%;padding:5px 0 0;border-width:0}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:15px;padding:.55rem .85rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:grey!important;background:#a7bf2e!important}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{color:#b6b6b6}.resultCount{color:#e5e5e5;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProductTraceWidgetComponent.ctorParameters = function () { return []; };
        SukuProductTraceWidgetComponent.propDecorators = {
            form: [{ type: i0.Input }],
            headName: [{ type: i0.Input, args: ['head-name',] }],
            subHeadName: [{ type: i0.Input, args: ['sub-Head-Name',] }],
            name: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            searchFun: [{ type: i0.Output }],
            selectproducts: [{ type: i0.Output }],
            searchByProduct: [{ type: i0.Output }],
            traceproduct: [{ type: i0.Output }],
            disableBtn: [{ type: i0.Input }],
            productdetails: [{ type: i0.Input }],
            result: [{ type: i0.Input }],
            visible: [{ type: i0.Input, args: ['visible',] }]
        };
        return SukuProductTraceWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWebcomponentsModule = /** @class */ (function () {
        function SukuWebcomponentsModule() {
        }
        SukuWebcomponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SukuWebcomponentsComponent, SukuTreeComponent, SukuTrackProgressBarComponent, SukuProductTraceWidgetComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatStepperModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule
                        ],
                        exports: [SukuWebcomponentsComponent, SukuTrackProgressBarComponent, SukuTreeComponent, SukuProductTraceWidgetComponent]
                    },] }
        ];
        return SukuWebcomponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SukuWebcomponentsService = SukuWebcomponentsService;
    exports.SukuWebcomponentsComponent = SukuWebcomponentsComponent;
    exports.SukuWebcomponentsModule = SukuWebcomponentsModule;
    exports.ɵc = SukuProductTraceWidgetComponent;
    exports.ɵb = SukuTrackProgressBarComponent;
    exports.ɵa = SukuTreeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=suku-webcomponents.umd.js.map