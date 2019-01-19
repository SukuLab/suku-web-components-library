(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('d3')) :
    typeof define === 'function' && define.amd ? define('suku-webcomponents', ['exports', '@angular/core', 'd3'], factory) :
    (factory((global['suku-webcomponents'] = {}),global.ng.core,global.d3));
}(this, (function (exports,core,d3) { 'use strict';

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
                        return d.childrens;
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
        SukuTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'suku-tree',
                        template: "<div class=\"tree\"></div>\n",
                        styles: ["/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}/deep/.link{fill:none;stroke:#c2c1c1;stroke-width:2px}/deep/.tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}"]
                    }] }
        ];
        SukuTreeComponent.propDecorators = {
            treeDataFromApi: [{ type: core.Input, args: ['tree-data',] }]
        };
        return SukuTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWebcomponentsModule = /** @class */ (function () {
        function SukuWebcomponentsModule() {
        }
        SukuWebcomponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SukuTreeComponent],
                        imports: [],
                        exports: [SukuTreeComponent]
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

    exports.SukuWebcomponentsModule = SukuWebcomponentsModule;
    exports.ɵa = SukuTreeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=suku-webcomponents.umd.js.map