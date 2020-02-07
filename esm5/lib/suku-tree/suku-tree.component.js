/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-tree/suku-tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div id=\"tree\"></div>\n<!-- [ngClass]=\"{'treeRtl': relation == 0, 'treeltr': relation == 1}\" -->",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFnQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRXpCO0lBQUE7UUFRVyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUt0QyxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFdBQU0sR0FBRztZQUNSLEdBQUcsRUFBRSxFQUFFO1lBQ1AsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUNGLFVBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEQsV0FBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUdwRCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsUUFBRyxHQUFRLENBQUMsQ0FBQztRQUViLGNBQVMsR0FBUSxDQUFDLENBQUM7SUFtV3BCLENBQUM7Ozs7SUE5VkEsdUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7b0JBQzlCLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsT0FBTyxJQUFJLENBQUMs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QWE7O0lBQ2IsOEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtdHJlZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS10cmVlLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCd0cmVlLWRhdGEnKSB0cmVlRGF0YUZyb21BcGk7XG5cdEBJbnB1dCgpIHJlbGF0aW9uO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR0cmVlO1xuXHRyb290O1xuXHRpO1xuXHRzdmc7XG5cdGJveFdpZHRoID0gMTgzO1xuXHRib3hIZWlnaHQgPSA1NTtcblx0bWFyZ2luID0ge1xuXHRcdHRvcDogNTAsXG5cdFx0cmlnaHQ6IDUsXG5cdFx0Ym90dG9tOiA1MCxcblx0XHRsZWZ0OiA1XG5cdH07XG5cdHdpZHRoID0gMTA2MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcblx0aGVpZ2h0ID0gNTEwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHRkYXRhOiBhbnk7XG5cdHRlc3RkOiBudW1iZXI7XG5cdGNoaWxkQ291bnQgPSAwO1xuXHRtYXg6IGFueSA9IDA7XG5cdHRyZWUxOiBhbnk7XG5cdG1heEhlaWdodDogYW55ID0gMDtcblx0ZGF0YVVJRDtcblx0c3ZnTk9kZTogYW55O1xuXHRqOiBhbnk7XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMudHJlZURhdGFGcm9tQXBpKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZWUnKSkge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZWUnKTtcblx0XHRcdFx0d2hpbGUgKGxpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdCAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMud2lkdGggPSAwO1xuXHRcdFx0XHR0aGlzLmhlaWdodCA9IDA7XG5cdFx0XHRcdHRoaXMubWF4ID0gMDtcblx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSAwO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb25zdHJ1Y3RUcmVlKCk7XG5cdFx0XHRjb25zb2xlLmxvZygndHJlZSBjYWxsZWQnKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RUcmVlKCkge1xuXHRcdGNvbnN0IHRyZWVEYXRhID0gdGhpcy50cmVlRGF0YUZyb21BcGk7XG5cdFx0dGhpcy5yb290ID0gdHJlZURhdGFbMF07XG5cdFx0dGhpcy50cmVlID0gZDMubGF5b3V0LnRyZWUoKS5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKS5jaGlsZHJlbigoZCkgPT4ge1xuXHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xuXHRcdH0pO1xuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xuXHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuZGVwdGggPiB0aGlzLm1heCkge1xuXHRcdFx0XHRcdHRoaXMubWF4ID0gZC5kZXB0aDtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImRlcHRoXCIsIHRoaXMubWF4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChkLmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMubWF4SGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1heEhlaWdodCA9IGQuY2hpbGRyZW4ubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLndpZHRoID0gKHRoaXMubWF4ICsgMSkgKiAzMjAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG5cdFx0XHR0aGlzLmhlaWdodCA9ICh0aGlzLm1heEhlaWdodCArIDEpICogMTU1IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG5cdFx0XHRcdGlmIChkLmRlcHRoID4gdGhpcy5tYXgpIHtcblx0XHRcdFx0XHR0aGlzLm1heCA9IGQuZGVwdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoZC5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSBkLmNoaWxkcmVuLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy53aWR0aCA9ICh0aGlzLm1heCArIDEpICogMjcwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAodGhpcy5tYXhIZWlnaHQgKyAxKSAqIDE1NSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ3dpZHRoJywgdGhpcy53aWR0aCwgdGhpcy5tYXhIZWlnaHQpO1xuXHRcdHRoaXMuaSA9IDA7XG5cdFx0dGhpcy5qID0gMDtcblx0XHR0aGlzLnRlc3RkID0gMDtcblx0XHRpZiAodHJlZURhdGEpIHtcblx0XHRcdHRoaXMudHJlZSA9IGQzLmxheW91dFxuXHRcdFx0XHQudHJlZSgpXG5cdFx0XHRcdC5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKVxuXHRcdFx0XHQuY2hpbGRyZW4oKGQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZC5yZWxhdGlvbnM7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zaXplKFsgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGggXSk7XG5cblx0XHRcdHRoaXMuc3ZnID0gZDNcblx0XHRcdFx0LnNlbGVjdCgnI3RyZWUnKVxuXHRcdFx0XHQuaW5zZXJ0KCdwJylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ3RyZWVkYXRhJylcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcblx0XHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuXHRcdFx0XHQuYXBwZW5kKCdzdmcnKVxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxuXHRcdFx0XHQuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG5cdFx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJyk7XG5cblx0XHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xuXHRcdFx0dGhpcy5kcmF3VHJlZSgpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXdUcmVlKCkge1xuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xuXHRcdGNvbnN0IGxpbmtzID0gdGhpcy50cmVlLmxpbmtzKG5vZGVzKTtcblxuXHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0aWYodGhpcy5tYXggPT0gMCkge1xuXHRcdFx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAodGhpcy5tYXggKyAxICkgKiAyMjAgLSBkLmRlcHRoICogLTI3MDsgLy8gcmV2ZXJzZSB0cmVlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZC55ID0gdGhpcy53aWR0aCAtICh0aGlzLm1heCArIDEgKSAqIDI1MCAtIGQuZGVwdGggKiAtMjcwOyAvLyByZXZlcnNlIHRyZWVcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0ZC55ID0gdGhpcy53aWR0aCAtIDEwOSAtIGQuZGVwdGggKiAyNzA7IC8vIHJldmVyc2UgdHJlZVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgnZy5ub2RlJykuZGF0YShub2RlcywgKGQpID0+IHtcblx0XHRcdHJldHVybiBkLmlkIHx8IChkLmlkID0gKyt0aGlzLmkpOyAvLyBhc3NpZ24gaWQgdG8gbm9kZXNcblx0XHR9KTtcblxuXHRcdGNvbnN0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlJykuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcblx0XHRcdHJldHVybiAndHJhbnNsYXRlKCcgKyBkLnkgKyAnLCcgKyBkLnggKyAnKSc7IC8vIGFwcGVuZCBnIHdpdGggY2xhc3MgYXR0clxuXHRcdH0pO1xuXG5cdFx0Ly8gYXBwZW5kIGxpbmUgaW50byBzdmdcblx0XHRub2RlXG5cdFx0XHQuYXBwZW5kKCdsaW5lJylcblx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgKGQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2QnLCBkKTtcblx0XHRcdFx0aWYgKGQuZGVwdGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gJyM2ZjNiZGEnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnIzNmZGJlZic7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnI2I4Y2UyYic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3gxJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXG5cdFx0XHQuYXR0cigneTEnLCAoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3gyJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXG5cdFx0XHQuYXR0cigneTInLCAoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyICsgMzA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMiArIDMwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDIgKyAxMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJzEwJyk7XG5cblx0XHQvLyBhcHBlbmQgcmVjdCBpbnRvIHN2Z1xuXG5cdFx0bm9kZVxuXHRcdFx0LmFwcGVuZCgncmVjdCcpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdHg6IC0odGhpcy5ib3hXaWR0aCAvIDIpLFxuXHRcdFx0XHR5OiAtKHRoaXMuYm94SGVpZ2h0IC8gMiksXG5cdFx0XHRcdHdpZHRoOiB0aGlzLmJveFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IChkKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgKyAzMDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDIzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgKyAxMDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3doaXRlJylcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnLjUnKVxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjYzJjMWMxYWInKTtcblxuXHRcdG5vZGUuaW5zZXJ0KCdnJywgJ2cnKS5hdHRyKCdjbGFzcycsICdkb3QnKTtcblx0XHQvLyBhcHBlbmQgZG90cyB0byByZWN0XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXG5cdFx0XHQuYXR0cigncicsIDIuMilcblx0XHRcdC5hdHRyKCdjeCcsIDY1KVxuXHRcdFx0LmF0dHIoJ2N5JywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiA0ODtcblx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyODtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gMTc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXG5cdFx0XHQuYXR0cigncicsIDIuMilcblx0XHRcdC5hdHRyKCdjeCcsIDcyKVxuXHRcdFx0LmF0dHIoJ2N5JywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiA0ODtcblx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyODtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gMTc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXG5cdFx0XHQuYXR0cigncicsIDIuMilcblx0XHRcdC5hdHRyKCdjeCcsIDc5KVxuXHRcdFx0LmF0dHIoJ2N5JywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiA0ODtcblx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyODtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gMTc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ3JlY3QnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2RvdCcpXG5cdFx0XHQuYXR0cigneCcsICc2MCcpXG5cdFx0XHQuYXR0cigneScsICAoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0XHRyZXR1cm4gNDU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDMwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyMztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHJldHVybiAxNTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdpZCcsIChkKSA9PiB7XG5cdFx0XHRcdHJldHVybiAnYXNzZXQnICsgKyt0aGlzLmo7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsICcxMCcpXG5cdFx0XHQuYXR0cignd2lkdGgnLCAnMjUnKVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuXHRcdFx0Lm9uKCdjbGljaycsIChkKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGQpO1xuXHRcdFx0XHRpZiAoZC51aWQpIHtcblx0XHRcdFx0XHR0aGlzLmRhdGFVSUQgPSBkLnVpZDtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbi5lbWl0KGQudWlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN2Z05PZGUgPSBub2RlXG5cdFx0XHQuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCd4JywgKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDEwKSAtIDY1O1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCd5JywgKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDM1KTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnI2FhYWFhYScpXG5cdFx0XHQuYXR0cignZm9udC1mYW1pbHknLCAnc2Fucy1zZXJpZicpXG5cdFx0XHQudGV4dCgoZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZC5hc3NldE5hbWU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhbGwoZnVuY3Rpb24gd3JhcCh0ZXh0LCB3aWR0aCkge1xuXHRcdFx0XHR0ZXh0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3dvcmQgdGV6dCBpbmZvciBlYWNoJywgZDMuc2VsZWN0KHRoaXMpKTtcblx0XHRcdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWNvbnN0XG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGQzLnNlbGVjdCh0aGlzKTtcblx0XHRcdFx0XHRjb25zdCB3b3JkcyA9IHRleHQudGV4dCgpLnNwbGl0KC9cXHMrLykucmV2ZXJzZSgpO1xuXHRcdFx0XHRcdGxldCB3b3JkO1xuXHRcdFx0XHRcdGxldCBsaW5lID0gW107XG5cdFx0XHRcdFx0bGV0IGxpbmVOdW1iZXIgPSAwO1xuXHRcdFx0XHRcdGNvbnN0IGxpbmVIZWlnaHQgPSAxLjM7IC8vIGVtc1xuXHRcdFx0XHRcdGNvbnN0IHggPSB0ZXh0LmF0dHIoJ3gnKTtcblx0XHRcdFx0XHRjb25zdCB5ID0gdGV4dC5hdHRyKCd5Jyk7XG5cdFx0XHRcdFx0Y29uc3QgZHkgPSAwOyAvLyBwYXJzZUZsb2F0KHRleHQuYXR0cihcImR5XCIpKSxcblx0XHRcdFx0XHRsZXQgdHNwYW4gPSB0ZXh0LnRleHQobnVsbCkuYXBwZW5kKCd0c3BhbicpLmF0dHIoJ3gnLCB4KS5hdHRyKCd5JywgeSkuYXR0cignZHknLCBkeSArICdlbScpLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpO1xuXHRcdFx0XHRcdHdoaWxlICgod29yZCA9IHdvcmRzLnBvcCgpKSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3dvcmQnLCB3b3JkKTtcblx0XHRcdFx0XHRcdGxpbmUucHVzaCh3b3JkKTtcblx0XHRcdFx0XHRcdHRzcGFuLnRleHQobGluZS5qb2luKCcgJykpO1xuXHRcdFx0XHRcdFx0aWYgKHRzcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IDE3MCkge1xuXHRcdFx0XHRcdFx0XHRsaW5lLnBvcCgpO1xuXHRcdFx0XHRcdFx0XHR0c3Bhbi50ZXh0KGxpbmUuam9pbignICcpKTtcblx0XHRcdFx0XHRcdFx0bGluZSA9IFsgd29yZCBdO1xuXHRcdFx0XHRcdFx0XHR0c3BhbiA9IHRleHRcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKCd0c3BhbicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3gnLCB4KVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd5JywgeSlcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignZHknLCArK2xpbmVOdW1iZXIgKiBsaW5lSGVpZ2h0ICsgZHkgKyAnZW0nKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KHdvcmQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdGNvbnN0IGxpbmsgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ3BhdGgubGluaycpLmRhdGEobGlua3MsIChkKSA9PiB7XG5cdFx0XHR0aGlzLmRhdGEgPSBkO1xuXHRcdFx0cmV0dXJuIGQudGFyZ2V0LmlkO1xuXHRcdH0pO1xuXG5cdFx0Ly8gYXBwZW5kIGxpbmsgaW50byBzdmdcblx0XHRsaW5rXG5cdFx0XHQuZW50ZXIoKVxuXHRcdFx0Lmluc2VydCgncGF0aCcsICdnJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdsaW5rJylcblx0XHRcdC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjYzJjMWMxJylcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMicpXG5cdFx0XHQuYXR0cignc2hhcGUtcmVuZGVyaW5nJywgJ2dlb21ldHJpY1ByZWNpc2lvbiAnKVxuXHRcdFx0LmF0dHIoJ2QnLCAoZCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzb3VyY2VYID0gZC5zb3VyY2UueCxcblx0XHRcdFx0XHRzb3VyY2VZID0gZC5zb3VyY2UueSArIHRoaXMuYm94V2lkdGggLyAyLFxuXHRcdFx0XHRcdHRhcmdldFggPSBkLnRhcmdldC54LFxuXHRcdFx0XHRcdHRhcmdldFkgPSBkLnRhcmdldC55IC0gdGhpcy5ib3hXaWR0aCAvIDI7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0J00nICtcblx0XHRcdFx0XHRzb3VyY2VZICtcblx0XHRcdFx0XHQnLCcgK1xuXHRcdFx0XHRcdHNvdXJjZVggK1xuXHRcdFx0XHRcdCdIJyArXG5cdFx0XHRcdFx0KHNvdXJjZVkgKyAodGFyZ2V0WSAtIHNvdXJjZVkpIC8gMikgK1xuXHRcdFx0XHRcdCdWJyArXG5cdFx0XHRcdFx0dGFyZ2V0WCArXG5cdFx0XHRcdFx0J0gnICtcblx0XHRcdFx0XHR0YXJnZXRZXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0YWN0aW9uRnVuKHZhbCkge1xuXHRcdHRoaXMuYWN0aW9uLmVtaXQodmFsKTtcblx0fVxufVxuIl19