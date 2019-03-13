/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
var SukuTreeComponent = /** @class */ (function () {
    function SukuTreeComponent() {
        this.action = new EventEmitter();
        this.boxWidth = 183;
        this.boxHeight = 55;
        this.margin = {
            top: 50,
            right: 5,
            bottom: 50,
            left: 5
        };
        this.width = 1060 - this.margin.left - this.margin.right;
        this.height = 510 - this.margin.top - this.margin.bottom;
        this.childCount = 0;
        this.max = 0;
        this.maxHeight = 0;
    }
    /**
     * @return {?}
     */
    SukuTreeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.treeDataFromApi) {
            if (document.getElementById('tree')) {
                /** @type {?} */
                var list = document.getElementById('tree');
                while (list.hasChildNodes()) {
                    list.removeChild(list.firstChild);
                }
                this.width = 0;
                this.height = 0;
                this.max = 0;
                this.maxHeight = 0;
            }
            this.constructTree();
            console.log('tree called');
        }
    };
    /**
     * @return {?}
     */
    SukuTreeComponent.prototype.constructTree = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var treeData = this.treeDataFromApi;
        this.root = treeData[0];
        this.tree = d3.layout.tree().separation((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return (a.parent === b.parent ? 5 : 5.25); })).children((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return d.relations;
        }));
        /** @type {?} */
        var nodes = this.tree.nodes(this.root).reverse();
        if (this.relation == 1) {
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.depth > _this.max) {
                    _this.max = d.depth;
                    console.log("depth", _this.max);
                }
                if (d.children) {
                    if (d.children.length > _this.maxHeight) {
                        _this.maxHeight = d.children.length;
                    }
                }
            }));
            this.width = (this.max + 1) * 320 - this.margin.left - this.margin.right;
            this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
        }
        else {
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.depth > _this.max) {
                    _this.max = d.depth;
                }
                if (d.children) {
                    if (d.children.length > _this.maxHeight) {
                        _this.maxHeight = d.children.length;
                    }
                }
            }));
            this.width = (this.max + 1) * 270 - this.margin.left - this.margin.right;
            this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
        }
        console.log('width', this.width, this.maxHeight);
        this.i = 0;
        this.j = 0;
        this.testd = 0;
        if (treeData) {
            this.tree = d3.layout
                .tree()
                .separation((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a.parent === b.parent ? 5 : 5.25); }))
                .children((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                return d.relations;
            }))
                .size([this.height, this.width]);
            this.svg = d3
                .select('#tree')
                .insert('p')
                .attr('id', 'treedata')
                .attr('width', this.width + this.margin.right + this.margin.left)
                .attr('height', this.height + this.margin.top + this.margin.bottom)
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
        if (this.relation == 1) {
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (_this.max == 0) {
                    d.y = _this.width - (_this.max + 1) * 220 - d.depth * -270; // reverse tree
                }
                else {
                    d.y = _this.width - (_this.max + 1) * 250 - d.depth * -270; // reverse tree
                }
            }));
        }
        else {
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                d.y = _this.width - 109 - d.depth * 270; // reverse tree
            }));
        }
        /** @type {?} */
        var node = this.svg.selectAll('g.node').data(nodes, (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return d.id || (d.id = ++_this.i); // assign id to nodes
        }));
        /** @type {?} */
        var nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
        }));
        // append line into svg
        node
            .append('line')
            .style('stroke', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            console.log('d', d);
            if (d.depth === 0) {
                return '#6f3bda';
            }
            else {
                if (_this.relation == 1) {
                    return '#3fdbef';
                }
                else {
                    return '#b8ce2b';
                }
            }
        }))
            .attr('x1', -(this.boxWidth / 2))
            .attr('y1', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (d.assetName.length > 50) {
                return -(_this.boxHeight / 2);
            }
            if (d.assetName.length > 23) {
                return -(_this.boxHeight / 2);
            }
            if (d.assetName.length > 0) {
                return -(_this.boxHeight / 2);
            }
        }))
            .attr('x2', -(this.boxWidth / 2))
            .attr('y2', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (d.assetName.length > 50) {
                return _this.boxHeight / 2 + 30;
            }
            if (d.assetName.length > 40) {
                return _this.boxHeight / 2 + 30;
            }
            if (d.assetName.length > 23) {
                return _this.boxHeight / 2 + 10;
            }
            if (d.assetName.length > 0) {
                return _this.boxHeight / 2;
            }
        }))
            .attr('stroke-width', '10');
        // append rect into svg
        node
            .append('rect')
            .attr({
            x: -(this.boxWidth / 2),
            y: -(this.boxHeight / 2),
            width: this.boxWidth,
            height: (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.assetName.length > 40) {
                    return _this.boxHeight + 30;
                }
                else if (d.assetName.length > 23) {
                    return _this.boxHeight + 10;
                }
                else {
                    return _this.boxHeight;
                }
            })
        })
            .attr('fill', 'white')
            .attr('stroke-width', '.5')
            .attr('stroke', '#c2c1c1ab');
        node.insert('g', 'g').attr('class', 'dot');
        // append dots to rect
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 65)
            .attr('cy', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (d.assetName.length > 50) {
                return 50;
            }
            if (d.assetName.length > 40) {
                return 48;
            }
            else if (d.assetName.length > 23) {
                return 28;
            }
            else {
                return 17;
            }
        }))
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 72)
            .attr('cy', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (d.assetName.length > 50) {
                return 50;
            }
            if (d.assetName.length > 40) {
                return 48;
            }
            else if (d.assetName.length > 23) {
                return 28;
            }
            else {
                return 17;
            }
        }))
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 79)
            .attr('cy', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (d.assetName.length > 50) {
                return 50;
            }
            if (d.assetName.length > 40) {
                return 48;
            }
            else if (d.assetName.length > 23) {
                return 28;
            }
            else {
                return 17;
            }
        }))
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('rect')
            .attr('class', 'dot')
            .attr('x', '60')
            .attr('y', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (d.assetName.length > 50) {
                return 45;
            }
            if (d.assetName.length > 40) {
                return 30;
            }
            if (d.assetName.length > 23) {
                return 23;
            }
            if (d.assetName.length > 0) {
                return 15;
            }
        }))
            .attr('id', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return 'asset' + ++_this.j;
        }))
            .attr('height', '10')
            .attr('width', '25')
            .attr('fill', 'transparent')
            .on('click', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            console.log(d);
            if (d.uid) {
                _this.dataUID = d.uid;
                _this.action.emit(d.uid);
            }
        }));
        this.svgNOde = node
            .append('text')
            .attr('x', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return -(_this.boxWidth / 10) - 65;
        }))
            .attr('y', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return -(_this.boxWidth / 35);
        }))
            .style('text-anchor', 'middle')
            .style('fill', '#aaaaaa')
            .attr('font-family', 'sans-serif')
            .text((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return d.assetName;
        }))
            .call((/**
         * @param {?} text
         * @param {?} width
         * @return {?}
         */
        function wrap(text, width) {
            text.each((/**
             * @return {?}
             */
            function () {
                console.log('word tezt infor each', d3.select(this));
                // tslint:disable-next-line:prefer-const
                // tslint:disable-next-line:no-shadowed-variable
                /** @type {?} */
                var text = d3.select(this);
                /** @type {?} */
                var words = text.text().split(/\s+/).reverse();
                /** @type {?} */
                var word;
                /** @type {?} */
                var line = [];
                /** @type {?} */
                var lineNumber = 0;
                /** @type {?} */
                var lineHeight = 1.3;
                // ems
                /** @type {?} */
                var x = text.attr('x');
                /** @type {?} */
                var y = text.attr('y');
                /** @type {?} */
                var dy = 0;
                // parseFloat(text.attr("dy")),
                /** @type {?} */
                var tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em').style('text-anchor', 'start');
                while ((word = words.pop())) {
                    console.log('word', word);
                    line.push(word);
                    tspan.text(line.join(' '));
                    if (tspan.node().getComputedTextLength() > 170) {
                        line.pop();
                        tspan.text(line.join(' '));
                        line = [word];
                        tspan = text
                            .append('tspan')
                            .attr('x', x)
                            .attr('y', y)
                            .attr('dy', ++lineNumber * lineHeight + dy + 'em')
                            .style('text-anchor', 'start')
                            .text(word);
                    }
                }
            }));
        }));
        /** @type {?} */
        var link = this.svg.selectAll('path.link').data(links, (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            _this.data = d;
            return d.target.id;
        }));
        // append link into svg
        link
            .enter()
            .insert('path', 'g')
            .attr('class', 'link')
            .attr('fill', 'none')
            .attr('stroke', '#c2c1c1')
            .attr('stroke-width', '2')
            .attr('shape-rendering', 'geometricPrecision ')
            .attr('d', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
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
        }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SukuTreeComponent.prototype.actionFun = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.action.emit(val);
    };
    SukuTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-tree',
                    template: "<div id=\"tree\"></div>\r\n<!-- [ngClass]=\"{'treeRtl': relation == 0, 'treeltr': relation == 1}\" -->",
                    styles: ["/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}/deep/#tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}/deep/rect.dot{cursor:pointer!important}"]
                }] }
    ];
    SukuTreeComponent.propDecorators = {
        treeDataFromApi: [{ type: Input, args: ['tree-data',] }],
        relation: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuTreeComponent;
}());
export { SukuTreeComponent };
if (false) {
    /** @type {?} */
    SukuTreeComponent.prototype.treeDataFromApi;
    /** @type {?} */
    SukuTreeComponent.prototype.relation;
    /** @type {?} */
    SukuTreeComponent.prototype.action;
    /** @type {?} */
    SukuTreeComponent.prototype.tree;
    /** @type {?} */
    SukuTreeComponent.prototype.root;
    /** @type {?} */
    SukuTreeComponent.prototype.i;
    /** @type {?} */
    SukuTreeComponent.prototype.svg;
    /** @type {?} */
    SukuTreeComponent.prototype.boxWidth;
    /** @type {?} */
    SukuTreeComponent.prototype.boxHeight;
    /** @type {?} */
    SukuTreeComponent.prototype.margin;
    /** @type {?} */
    SukuTreeComponent.prototype.width;
    /** @type {?} */
    SukuTreeComponent.prototype.height;
    /** @type {?} */
    SukuTreeComponent.prototype.data;
    /** @type {?} */
    SukuTreeComponent.prototype.testd;
    /** @type {?} */
    SukuTreeComponent.prototype.childCount;
    /** @type {?} */
    SukuTreeComponent.prototype.max;
    /** @type {?} */
    SukuTreeComponent.prototype.tree1;
    /** @type {?} */
    SukuTreeComponent.prototype.maxHeight;
    /** @type {?} */
    SukuTreeComponent.prototype.dataUID;
    /** @type {?} */
    SukuTreeComponent.prototype.svgNOde;
    /** @type {?} */
    SukuTreeComponent.prototype.j;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekI7SUFBQTtRQVFXLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsY0FBUyxHQUFRLENBQUMsQ0FBQztJQW1XcEIsQ0FBQzs7OztJQTlWQSx1Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztvQkFDOUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxPQUFPLElBQUksQ0FBQyxh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YTs7SUFDYiw4QkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LXRyZWUnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXRyZWUuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHRASW5wdXQoJ3RyZWUtZGF0YScpIHRyZWVEYXRhRnJvbUFwaTtcclxuXHRASW5wdXQoKSByZWxhdGlvbjtcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdHRyZWU7XHJcblx0cm9vdDtcclxuXHRpO1xyXG5cdHN2ZztcclxuXHRib3hXaWR0aCA9IDE4MztcclxuXHRib3hIZWlnaHQgPSA1NTtcclxuXHRtYXJnaW4gPSB7XHJcblx0XHR0b3A6IDUwLFxyXG5cdFx0cmlnaHQ6IDUsXHJcblx0XHRib3R0b206IDUwLFxyXG5cdFx0bGVmdDogNVxyXG5cdH07XHJcblx0d2lkdGggPSAxMDYwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xyXG5cdGhlaWdodCA9IDUxMCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcclxuXHRkYXRhOiBhbnk7XHJcblx0dGVzdGQ6IG51bWJlcjtcclxuXHRjaGlsZENvdW50ID0gMDtcclxuXHRtYXg6IGFueSA9IDA7XHJcblx0dHJlZTE6IGFueTtcclxuXHRtYXhIZWlnaHQ6IGFueSA9IDA7XHJcblx0ZGF0YVVJRDtcclxuXHRzdmdOT2RlOiBhbnk7XHJcblx0ajogYW55O1xyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGlmICh0aGlzLnRyZWVEYXRhRnJvbUFwaSkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZWUnKSkge1xyXG5cdFx0XHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlZScpO1xyXG5cdFx0XHRcdHdoaWxlIChsaXN0Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0XHRcdCAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLndpZHRoID0gMDtcclxuXHRcdFx0XHR0aGlzLmhlaWdodCA9IDA7XHJcblx0XHRcdFx0dGhpcy5tYXggPSAwO1xyXG5cdFx0XHRcdHRoaXMubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNvbnN0cnVjdFRyZWUoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3RyZWUgY2FsbGVkJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RUcmVlKCkge1xyXG5cdFx0Y29uc3QgdHJlZURhdGEgPSB0aGlzLnRyZWVEYXRhRnJvbUFwaTtcclxuXHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xyXG5cdFx0dGhpcy50cmVlID0gZDMubGF5b3V0LnRyZWUoKS5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKS5jaGlsZHJlbigoZCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gZC5yZWxhdGlvbnM7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xyXG5cdFx0aWYgKHRoaXMucmVsYXRpb24gPT0gMSkge1xyXG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuZGVwdGggPiB0aGlzLm1heCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXggPSBkLmRlcHRoO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJkZXB0aFwiLCB0aGlzLm1heCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0XHRpZiAoZC5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLm1heEhlaWdodCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1heEhlaWdodCA9IGQuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMud2lkdGggPSAodGhpcy5tYXggKyAxKSAqIDMyMCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuXHRcdFx0dGhpcy5oZWlnaHQgPSAodGhpcy5tYXhIZWlnaHQgKyAxKSAqIDE1NSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcclxuXHRcdFx0XHRpZiAoZC5kZXB0aCA+IHRoaXMubWF4KSB7XHJcblx0XHRcdFx0XHR0aGlzLm1heCA9IGQuZGVwdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0XHRpZiAoZC5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLm1heEhlaWdodCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1heEhlaWdodCA9IGQuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMud2lkdGggPSAodGhpcy5tYXggKyAxKSAqIDI3MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuXHRcdFx0dGhpcy5oZWlnaHQgPSAodGhpcy5tYXhIZWlnaHQgKyAxKSAqIDE1NSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKCd3aWR0aCcsIHRoaXMud2lkdGgsIHRoaXMubWF4SGVpZ2h0KTtcclxuXHRcdHRoaXMuaSA9IDA7XHJcblx0XHR0aGlzLmogPSAwO1xyXG5cdFx0dGhpcy50ZXN0ZCA9IDA7XHJcblx0XHRpZiAodHJlZURhdGEpIHtcclxuXHRcdFx0dGhpcy50cmVlID0gZDMubGF5b3V0XHJcblx0XHRcdFx0LnRyZWUoKVxyXG5cdFx0XHRcdC5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKVxyXG5cdFx0XHRcdC5jaGlsZHJlbigoZCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnNpemUoWyB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCBdKTtcclxuXHJcblx0XHRcdHRoaXMuc3ZnID0gZDNcclxuXHRcdFx0XHQuc2VsZWN0KCcjdHJlZScpXHJcblx0XHRcdFx0Lmluc2VydCgncCcpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ3RyZWVkYXRhJylcclxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxyXG5cdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcclxuXHRcdFx0XHQuYXBwZW5kKCdzdmcnKVxyXG5cdFx0XHRcdC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5yaWdodCArIHRoaXMubWFyZ2luLmxlZnQpXHJcblx0XHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxyXG5cdFx0XHRcdC5hcHBlbmQoJ2cnKVxyXG5cdFx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcclxuXHJcblx0XHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xyXG5cdFx0XHR0aGlzLmRyYXdUcmVlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkcmF3VHJlZSgpIHtcclxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xyXG5cdFx0Y29uc3QgbGlua3MgPSB0aGlzLnRyZWUubGlua3Mobm9kZXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcclxuXHRcdFx0bm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xyXG5cdFx0XHRcdGlmKHRoaXMubWF4ID09IDApIHtcclxuXHRcdFx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAodGhpcy5tYXggKyAxICkgKiAyMjAgLSBkLmRlcHRoICogLTI3MDsgLy8gcmV2ZXJzZSB0cmVlXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAodGhpcy5tYXggKyAxICkgKiAyNTAgLSBkLmRlcHRoICogLTI3MDsgLy8gcmV2ZXJzZSB0cmVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcclxuXHRcdFx0XHRkLnkgPSB0aGlzLndpZHRoIC0gMTA5IC0gZC5kZXB0aCAqIDI3MDsgLy8gcmV2ZXJzZSB0cmVlXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ2cubm9kZScpLmRhdGEobm9kZXMsIChkKSA9PiB7XHJcblx0XHRcdHJldHVybiBkLmlkIHx8IChkLmlkID0gKyt0aGlzLmkpOyAvLyBhc3NpZ24gaWQgdG8gbm9kZXNcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlJykuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuICd0cmFuc2xhdGUoJyArIGQueSArICcsJyArIGQueCArICcpJzsgLy8gYXBwZW5kIGcgd2l0aCBjbGFzcyBhdHRyXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBhcHBlbmQgbGluZSBpbnRvIHN2Z1xyXG5cdFx0bm9kZVxyXG5cdFx0XHQuYXBwZW5kKCdsaW5lJylcclxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkJywgZCk7XHJcblx0XHRcdFx0aWYgKGQuZGVwdGggPT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAnIzZmM2JkYSc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICcjM2ZkYmVmJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAnI2I4Y2UyYic7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cigneDEnLCAtKHRoaXMuYm94V2lkdGggLyAyKSlcclxuXHRcdFx0LmF0dHIoJ3kxJywgKGQpID0+IHtcclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcclxuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hIZWlnaHQgLyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cigneDInLCAtKHRoaXMuYm94V2lkdGggLyAyKSlcclxuXHRcdFx0LmF0dHIoJ3kyJywgKGQpID0+IHtcclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDIgKyAzMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyICsgMzA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMiArIDEwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMTAnKTtcclxuXHJcblx0XHQvLyBhcHBlbmQgcmVjdCBpbnRvIHN2Z1xyXG5cclxuXHRcdG5vZGVcclxuXHRcdFx0LmFwcGVuZCgncmVjdCcpXHJcblx0XHRcdC5hdHRyKHtcclxuXHRcdFx0XHR4OiAtKHRoaXMuYm94V2lkdGggLyAyKSxcclxuXHRcdFx0XHR5OiAtKHRoaXMuYm94SGVpZ2h0IC8gMiksXHJcblx0XHRcdFx0d2lkdGg6IHRoaXMuYm94V2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiAoZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCArIDMwO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgKyAxMDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcuNScpXHJcblx0XHRcdC5hdHRyKCdzdHJva2UnLCAnI2MyYzFjMWFiJyk7XHJcblxyXG5cdFx0bm9kZS5pbnNlcnQoJ2cnLCAnZycpLmF0dHIoJ2NsYXNzJywgJ2RvdCcpO1xyXG5cdFx0Ly8gYXBwZW5kIGRvdHMgdG8gcmVjdFxyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNjUpXHJcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDQ4O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcclxuXHRcdFx0XHRcdHJldHVybiAyODtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNzIpXHJcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDQ4O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcclxuXHRcdFx0XHRcdHJldHVybiAyODtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNzkpXHJcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDQ4O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcclxuXHRcdFx0XHRcdHJldHVybiAyODtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdyZWN0JylcclxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2RvdCcpXHJcblx0XHRcdC5hdHRyKCd4JywgJzYwJylcclxuXHRcdFx0LmF0dHIoJ3knLCAgKGQpID0+IHtcclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0NTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMzA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDIzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE1O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2lkJywgKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJ2Fzc2V0JyArICsrdGhpcy5qO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgJzEwJylcclxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgJzI1JylcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgKGQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkKTtcclxuXHRcdFx0XHRpZiAoZC51aWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YVVJRCA9IGQudWlkO1xyXG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24uZW1pdChkLnVpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnN2Z05PZGUgPSBub2RlXHJcblx0XHRcdC5hcHBlbmQoJ3RleHQnKVxyXG5cdFx0XHQuYXR0cigneCcsIChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDEwKSAtIDY1O1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cigneScsIChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDM1KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnI2FhYWFhYScpXHJcblx0XHRcdC5hdHRyKCdmb250LWZhbWlseScsICdzYW5zLXNlcmlmJylcclxuXHRcdFx0LnRleHQoKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gZC5hc3NldE5hbWU7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYWxsKGZ1bmN0aW9uIHdyYXAodGV4dCwgd2lkdGgpIHtcclxuXHRcdFx0XHR0ZXh0LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnd29yZCB0ZXp0IGluZm9yIGVhY2gnLCBkMy5zZWxlY3QodGhpcykpO1xyXG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25zdFxyXG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gZDMuc2VsZWN0KHRoaXMpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgd29yZHMgPSB0ZXh0LnRleHQoKS5zcGxpdCgvXFxzKy8pLnJldmVyc2UoKTtcclxuXHRcdFx0XHRcdGxldCB3b3JkO1xyXG5cdFx0XHRcdFx0bGV0IGxpbmUgPSBbXTtcclxuXHRcdFx0XHRcdGxldCBsaW5lTnVtYmVyID0gMDtcclxuXHRcdFx0XHRcdGNvbnN0IGxpbmVIZWlnaHQgPSAxLjM7IC8vIGVtc1xyXG5cdFx0XHRcdFx0Y29uc3QgeCA9IHRleHQuYXR0cigneCcpO1xyXG5cdFx0XHRcdFx0Y29uc3QgeSA9IHRleHQuYXR0cigneScpO1xyXG5cdFx0XHRcdFx0Y29uc3QgZHkgPSAwOyAvLyBwYXJzZUZsb2F0KHRleHQuYXR0cihcImR5XCIpKSxcclxuXHRcdFx0XHRcdGxldCB0c3BhbiA9IHRleHQudGV4dChudWxsKS5hcHBlbmQoJ3RzcGFuJykuYXR0cigneCcsIHgpLmF0dHIoJ3knLCB5KS5hdHRyKCdkeScsIGR5ICsgJ2VtJykuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0Jyk7XHJcblx0XHRcdFx0XHR3aGlsZSAoKHdvcmQgPSB3b3Jkcy5wb3AoKSkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3dvcmQnLCB3b3JkKTtcclxuXHRcdFx0XHRcdFx0bGluZS5wdXNoKHdvcmQpO1xyXG5cdFx0XHRcdFx0XHR0c3Bhbi50ZXh0KGxpbmUuam9pbignICcpKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRzcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IDE3MCkge1xyXG5cdFx0XHRcdFx0XHRcdGxpbmUucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0dHNwYW4udGV4dChsaW5lLmpvaW4oJyAnKSk7XHJcblx0XHRcdFx0XHRcdFx0bGluZSA9IFsgd29yZCBdO1xyXG5cdFx0XHRcdFx0XHRcdHRzcGFuID0gdGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZCgndHNwYW4nKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3gnLCB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3knLCB5KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2R5JywgKytsaW5lTnVtYmVyICogbGluZUhlaWdodCArIGR5ICsgJ2VtJylcclxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQod29yZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgncGF0aC5saW5rJykuZGF0YShsaW5rcywgKGQpID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZDtcclxuXHRcdFx0cmV0dXJuIGQudGFyZ2V0LmlkO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIGxpbmsgaW50byBzdmdcclxuXHRcdGxpbmtcclxuXHRcdFx0LmVudGVyKClcclxuXHRcdFx0Lmluc2VydCgncGF0aCcsICdnJylcclxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICdub25lJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjYzJjMWMxJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcyJylcclxuXHRcdFx0LmF0dHIoJ3NoYXBlLXJlbmRlcmluZycsICdnZW9tZXRyaWNQcmVjaXNpb24gJylcclxuXHRcdFx0LmF0dHIoJ2QnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHNvdXJjZVggPSBkLnNvdXJjZS54LFxyXG5cdFx0XHRcdFx0c291cmNlWSA9IGQuc291cmNlLnkgKyB0aGlzLmJveFdpZHRoIC8gMixcclxuXHRcdFx0XHRcdHRhcmdldFggPSBkLnRhcmdldC54LFxyXG5cdFx0XHRcdFx0dGFyZ2V0WSA9IGQudGFyZ2V0LnkgLSB0aGlzLmJveFdpZHRoIC8gMjtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0J00nICtcclxuXHRcdFx0XHRcdHNvdXJjZVkgK1xyXG5cdFx0XHRcdFx0JywnICtcclxuXHRcdFx0XHRcdHNvdXJjZVggK1xyXG5cdFx0XHRcdFx0J0gnICtcclxuXHRcdFx0XHRcdChzb3VyY2VZICsgKHRhcmdldFkgLSBzb3VyY2VZKSAvIDIpICtcclxuXHRcdFx0XHRcdCdWJyArXHJcblx0XHRcdFx0XHR0YXJnZXRYICtcclxuXHRcdFx0XHRcdCdIJyArXHJcblx0XHRcdFx0XHR0YXJnZXRZXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0YWN0aW9uRnVuKHZhbCkge1xyXG5cdFx0dGhpcy5hY3Rpb24uZW1pdCh2YWwpO1xyXG5cdH1cclxufVxyXG4iXX0=