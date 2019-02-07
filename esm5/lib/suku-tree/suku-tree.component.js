/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
var SukuTreeComponent = /** @class */ (function () {
    function SukuTreeComponent() {
        this.action = new EventEmitter();
        this.boxWidth = 180;
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
        nodes.forEach((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            // console.log('width', d);
            if (d.depth > _this.max) {
                _this.max = d.depth;
                // console.log('max', this.max);
            }
            if (d.parent.children) {
                if (d.parent.children.length > _this.maxHeight) {
                    _this.maxHeight = d.parent.children.length;
                }
            }
        }));
        this.width = (this.max + 1) * 270 - this.margin.left - this.margin.right;
        this.height = (this.maxHeight + 1) * 120 - this.margin.top - this.margin.bottom;
        console.log('width', this.width);
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
        nodes.forEach((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            d.y = _this.width - 109 - d.depth * 270; // reverse tree
        }));
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
                // if (d.depth === 1) {
                // 	return '#3fdbef';
                // }
                // if (d.depth === 2) {
                // 	return '#b8ce2b';
                // }
                return '#3fdbef';
            }
        }))
            .attr('x1', -(this.boxWidth / 2))
            .attr('y1', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            console.log('d.length', d.product.name.length);
            if (d.product.name.length > 50) {
                return -(_this.boxHeight / 2);
            }
            if (d.product.name.length > 20) {
                return -(_this.boxHeight / 2);
            }
            if (d.product.name.length > 0) {
                return -(_this.boxHeight / 2);
            }
        }))
            .attr('x2', -(this.boxWidth / 2))
            .attr('y2', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            console.log('d.length', d.product.name.length);
            if (d.product.name.length > 50) {
                return _this.boxHeight / 2 + 30;
            }
            if (d.product.name.length > 40) {
                return _this.boxHeight / 2 + 30;
            }
            if (d.product.name.length > 20) {
                return _this.boxHeight / 2 + 10;
            }
            if (d.product.name.length > 0) {
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
                if (d.product.name.length > 40) {
                    return _this.boxHeight + 30;
                }
                else if (d.product.name.length > 20) {
                    return _this.boxHeight + 10;
                }
                else {
                    return _this.boxHeight;
                }
            })
        })
            .attr('fill', 'white')
            .attr('stroke-width', '.9')
            .attr('stroke', '#f2f2f2');
        node.insert('g', 'g').attr('class', 'dot');
        // append dots to rect
        // node.append('g').attr('class', 'dot')
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
            if (d.product.name.length > 50) {
                return 50;
            }
            if (d.product.name.length > 40) {
                return 48;
            }
            else if (d.product.name.length > 20) {
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
            if (d.product.name.length > 50) {
                return 50;
            }
            if (d.product.name.length > 40) {
                return 48;
            }
            else if (d.product.name.length > 20) {
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
            if (d.product.name.length > 50) {
                return 50;
            }
            if (d.product.name.length > 40) {
                return 48;
            }
            else if (d.product.name.length > 20) {
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
            console.log('d.length', d.product.name.length);
            if (d.product.name.length > 50) {
                return 45;
            }
            if (d.product.name.length > 40) {
                return 30;
            }
            if (d.product.name.length > 20) {
                return 23;
            }
            if (d.product.name.length > 0) {
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
            return -(_this.boxWidth / 10) - 60;
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
            return d.product.name;
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
            .attr('shape-rendering', 'crispEdges')
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
                    template: "<div id=\"tree\"></div>",
                    styles: ["/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}/deep/#tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}/deep/rect.dot{cursor:pointer!important}"]
                }] }
    ];
    SukuTreeComponent.propDecorators = {
        treeDataFromApi: [{ type: Input, args: ['tree-data',] }],
        action: [{ type: Output }]
    };
    return SukuTreeComponent;
}());
export { SukuTreeComponent };
if (false) {
    /** @type {?} */
    SukuTreeComponent.prototype.treeDataFromApi;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekI7SUFBQTtRQU9XLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsY0FBUyxHQUFRLENBQUMsQ0FBQztJQXNVcEIsQ0FBQzs7OztJQWpVQSx1Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUFBLGlCQWlEQzs7WUFoRE0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQ3JD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QyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1lBQ3pDLE9BQU8sQ0FDTixHQUFHO2dCQUNILE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPO2dCQUNQLEdBQUc7Z0JBQ0gsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxHQUFHO2dCQUNILE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPLENBQ1AsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsR0FBRztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQWhXRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG1DQUF5Qzs7aUJBRXpDOzs7a0NBRUMsS0FBSyxTQUFDLFdBQVc7eUJBQ2pCLE1BQU07O0lBMFZSLHdCQUFDO0NBQUEsQUFqV0QsSUFpV0M7U0E1VlksaUJBQWlCOzs7SUFDN0IsNENBQW9DOztJQUNwQyxtQ0FBc0M7O0lBQ3RDLGlDQUFLOztJQUNMLGlDQUFLOztJQUNMLDhCQUFFOztJQUNGLGdDQUFJOztJQUNKLHFDQUFlOztJQUNmLHNDQUFlOztJQUNmLG1DQUtFOztJQUNGLGtDQUFvRDs7SUFDcEQsbUNBQW9EOztJQUNwRCxpQ0FBVTs7SUFDVixrQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZixnQ0FBYTs7SUFDYixrQ0FBVzs7SUFDWCxzQ0FBbUI7O0lBQ25CLG9DQUFROztJQUNSLG9DQUFhOztJQUNiLDhCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtdHJlZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtdHJlZS5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cdEBJbnB1dCgndHJlZS1kYXRhJykgdHJlZURhdGFGcm9tQXBpO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0dHJlZTtcclxuXHRyb290O1xyXG5cdGk7XHJcblx0c3ZnO1xyXG5cdGJveFdpZHRoID0gMTgwO1xyXG5cdGJveEhlaWdodCA9IDU1O1xyXG5cdG1hcmdpbiA9IHtcclxuXHRcdHRvcDogNTAsXHJcblx0XHRyaWdodDogNSxcclxuXHRcdGJvdHRvbTogNTAsXHJcblx0XHRsZWZ0OiA1XHJcblx0fTtcclxuXHR3aWR0aCA9IDEwNjAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcblx0aGVpZ2h0ID0gNTEwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xyXG5cdGRhdGE6IGFueTtcclxuXHR0ZXN0ZDogbnVtYmVyO1xyXG5cdGNoaWxkQ291bnQgPSAwO1xyXG5cdG1heDogYW55ID0gMDtcclxuXHR0cmVlMTogYW55O1xyXG5cdG1heEhlaWdodDogYW55ID0gMDtcclxuXHRkYXRhVUlEO1xyXG5cdHN2Z05PZGU6IGFueTtcclxuXHRqOiBhbnk7XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0aWYgKHRoaXMudHJlZURhdGFGcm9tQXBpKSB7XHJcblx0XHRcdHRoaXMuY29uc3RydWN0VHJlZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0VHJlZSgpIHtcclxuXHRcdGNvbnN0IHRyZWVEYXRhID0gdGhpcy50cmVlRGF0YUZyb21BcGk7XHJcblx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcclxuXHRcdHRoaXMudHJlZSA9IGQzLmxheW91dC50cmVlKCkuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSkuY2hpbGRyZW4oKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcclxuXHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3dpZHRoJywgZCk7XHJcblx0XHRcdGlmIChkLmRlcHRoID4gdGhpcy5tYXgpIHtcclxuXHRcdFx0XHR0aGlzLm1heCA9IGQuZGVwdGg7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21heCcsIHRoaXMubWF4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZC5wYXJlbnQuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRpZiAoZC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5tYXhIZWlnaHQpIHtcclxuXHRcdFx0XHRcdHRoaXMubWF4SGVpZ2h0ID0gZC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZHRoID0gKHRoaXMubWF4ICsgMSkgKiAyNzAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcblx0XHR0aGlzLmhlaWdodCA9ICh0aGlzLm1heEhlaWdodCArIDEpICogMTIwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xyXG5cdFx0Y29uc29sZS5sb2coJ3dpZHRoJywgdGhpcy53aWR0aCk7XHJcblx0XHR0aGlzLmkgPSAwO1xyXG5cdFx0dGhpcy5qID0gMDtcclxuXHRcdHRoaXMudGVzdGQgPSAwO1xyXG5cdFx0aWYgKHRyZWVEYXRhKSB7XHJcblx0XHRcdHRoaXMudHJlZSA9IGQzLmxheW91dFxyXG5cdFx0XHRcdC50cmVlKClcclxuXHRcdFx0XHQuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSlcclxuXHRcdFx0XHQuY2hpbGRyZW4oKGQpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBkLnJlbGF0aW9ucztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zaXplKFsgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGggXSk7XHJcblxyXG5cdFx0XHR0aGlzLnN2ZyA9IGQzXHJcblx0XHRcdFx0LnNlbGVjdCgnI3RyZWUnKVxyXG5cdFx0XHRcdC5pbnNlcnQoJ3AnKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICd0cmVlZGF0YScpXHJcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcclxuXHRcdFx0XHQuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXHJcblx0XHRcdFx0LmFwcGVuZCgnc3ZnJylcclxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxyXG5cdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcclxuXHRcdFx0XHQuYXBwZW5kKCdnJylcclxuXHRcdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJyk7XHJcblxyXG5cdFx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcclxuXHRcdFx0dGhpcy5kcmF3VHJlZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZHJhd1RyZWUoKSB7XHJcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcclxuXHRcdGNvbnN0IGxpbmtzID0gdGhpcy50cmVlLmxpbmtzKG5vZGVzKTtcclxuXHJcblx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XHJcblx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAxMDkgLSBkLmRlcHRoICogMjcwOyAvLyByZXZlcnNlIHRyZWVcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ2cubm9kZScpLmRhdGEobm9kZXMsIChkKSA9PiB7XHJcblx0XHRcdHJldHVybiBkLmlkIHx8IChkLmlkID0gKyt0aGlzLmkpOyAvLyBhc3NpZ24gaWQgdG8gbm9kZXNcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlJykuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuICd0cmFuc2xhdGUoJyArIGQueSArICcsJyArIGQueCArICcpJzsgLy8gYXBwZW5kIGcgd2l0aCBjbGFzcyBhdHRyXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBhcHBlbmQgbGluZSBpbnRvIHN2Z1xyXG5cdFx0bm9kZVxyXG5cdFx0XHQuYXBwZW5kKCdsaW5lJylcclxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkJywgZCk7XHJcblx0XHRcdFx0aWYgKGQuZGVwdGggPT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAnIzZmM2JkYSc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGlmIChkLmRlcHRoID09PSAxKSB7XHJcblx0XHRcdFx0XHQvLyBcdHJldHVybiAnIzNmZGJlZic7XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHQvLyBpZiAoZC5kZXB0aCA9PT0gMikge1xyXG5cdFx0XHRcdFx0Ly8gXHRyZXR1cm4gJyNiOGNlMmInO1xyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0cmV0dXJuICcjM2ZkYmVmJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCd4MScsIC0odGhpcy5ib3hXaWR0aCAvIDIpKVxyXG5cdFx0XHQuYXR0cigneTEnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkLmxlbmd0aCcsIGQucHJvZHVjdC5uYW1lLmxlbmd0aCk7XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gMjApIHtcclxuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ3gyJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXHJcblx0XHRcdC5hdHRyKCd5MicsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2QubGVuZ3RoJywgZC5wcm9kdWN0Lm5hbWUubGVuZ3RoKTtcclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNTApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDIgKyAzMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDQwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyICsgMzA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiAyMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMiArIDEwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMTAnKTtcclxuXHJcblx0XHQvLyBhcHBlbmQgcmVjdCBpbnRvIHN2Z1xyXG5cclxuXHRcdG5vZGVcclxuXHRcdFx0LmFwcGVuZCgncmVjdCcpXHJcblx0XHRcdC5hdHRyKHtcclxuXHRcdFx0XHR4OiAtKHRoaXMuYm94V2lkdGggLyAyKSxcclxuXHRcdFx0XHR5OiAtKHRoaXMuYm94SGVpZ2h0IC8gMiksXHJcblx0XHRcdFx0d2lkdGg6IHRoaXMuYm94V2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiAoZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDQwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCArIDMwO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiAyMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgKyAxMDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcuOScpXHJcblx0XHRcdC5hdHRyKCdzdHJva2UnLCAnI2YyZjJmMicpO1xyXG5cclxuXHRcdG5vZGUuaW5zZXJ0KCdnJywgJ2cnKS5hdHRyKCdjbGFzcycsICdkb3QnKTtcclxuXHRcdC8vIGFwcGVuZCBkb3RzIHRvIHJlY3RcclxuXHRcdC8vIG5vZGUuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZG90JylcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDY1KVxyXG5cdFx0XHQuYXR0cignY3knLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0ODtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDIwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMjg7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAxNztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDcyKVxyXG5cdFx0XHQuYXR0cignY3knLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0ODtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDIwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMjg7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAxNztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDc5KVxyXG5cdFx0XHQuYXR0cignY3knLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0ODtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDIwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMjg7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAxNztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgncmVjdCcpXHJcblx0XHRcdC5hdHRyKCdjbGFzcycsICdkb3QnKVxyXG5cdFx0XHQuYXR0cigneCcsICc2MCcpXHJcblx0XHRcdC5hdHRyKCd5JywgIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2QubGVuZ3RoJywgZC5wcm9kdWN0Lm5hbWUubGVuZ3RoKTtcclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNTApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0NTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDQwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMzA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiAyMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDIzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE1O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2lkJywgKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJ2Fzc2V0JyArICsrdGhpcy5qO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgJzEwJylcclxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgJzI1JylcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgKGQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkKTtcclxuXHRcdFx0XHRpZiAoZC51aWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YVVJRCA9IGQudWlkO1xyXG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24uZW1pdChkLnVpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnN2Z05PZGUgPSBub2RlXHJcblx0XHRcdC5hcHBlbmQoJ3RleHQnKVxyXG5cdFx0XHQuYXR0cigneCcsIChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDEwKSAtIDYwO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cigneScsIChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDM1KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnI2FhYWFhYScpXHJcblx0XHRcdC5hdHRyKCdmb250LWZhbWlseScsICdzYW5zLXNlcmlmJylcclxuXHRcdFx0LnRleHQoKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gZC5wcm9kdWN0Lm5hbWU7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYWxsKGZ1bmN0aW9uIHdyYXAodGV4dCwgd2lkdGgpIHtcclxuXHRcdFx0XHR0ZXh0LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnd29yZCB0ZXp0IGluZm9yIGVhY2gnLCBkMy5zZWxlY3QodGhpcykpO1xyXG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25zdFxyXG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gZDMuc2VsZWN0KHRoaXMpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgd29yZHMgPSB0ZXh0LnRleHQoKS5zcGxpdCgvXFxzKy8pLnJldmVyc2UoKTtcclxuXHRcdFx0XHRcdGxldCB3b3JkO1xyXG5cdFx0XHRcdFx0bGV0IGxpbmUgPSBbXTtcclxuXHRcdFx0XHRcdGxldCBsaW5lTnVtYmVyID0gMDtcclxuXHRcdFx0XHRcdGNvbnN0IGxpbmVIZWlnaHQgPSAxLjM7IC8vIGVtc1xyXG5cdFx0XHRcdFx0Y29uc3QgeCA9IHRleHQuYXR0cigneCcpO1xyXG5cdFx0XHRcdFx0Y29uc3QgeSA9IHRleHQuYXR0cigneScpO1xyXG5cdFx0XHRcdFx0Y29uc3QgZHkgPSAwOyAvLyBwYXJzZUZsb2F0KHRleHQuYXR0cihcImR5XCIpKSxcclxuXHRcdFx0XHRcdGxldCB0c3BhbiA9IHRleHQudGV4dChudWxsKS5hcHBlbmQoJ3RzcGFuJykuYXR0cigneCcsIHgpLmF0dHIoJ3knLCB5KS5hdHRyKCdkeScsIGR5ICsgJ2VtJykuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0Jyk7XHJcblx0XHRcdFx0XHR3aGlsZSAoKHdvcmQgPSB3b3Jkcy5wb3AoKSkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3dvcmQnLCB3b3JkKTtcclxuXHRcdFx0XHRcdFx0bGluZS5wdXNoKHdvcmQpO1xyXG5cdFx0XHRcdFx0XHR0c3Bhbi50ZXh0KGxpbmUuam9pbignICcpKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRzcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IDE3MCkge1xyXG5cdFx0XHRcdFx0XHRcdGxpbmUucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0dHNwYW4udGV4dChsaW5lLmpvaW4oJyAnKSk7XHJcblx0XHRcdFx0XHRcdFx0bGluZSA9IFsgd29yZCBdO1xyXG5cdFx0XHRcdFx0XHRcdHRzcGFuID0gdGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZCgndHNwYW4nKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3gnLCB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3knLCB5KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2R5JywgKytsaW5lTnVtYmVyICogbGluZUhlaWdodCArIGR5ICsgJ2VtJylcclxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQod29yZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgncGF0aC5saW5rJykuZGF0YShsaW5rcywgKGQpID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZDtcclxuXHRcdFx0cmV0dXJuIGQudGFyZ2V0LmlkO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIGxpbmsgaW50byBzdmdcclxuXHRcdGxpbmtcclxuXHRcdFx0LmVudGVyKClcclxuXHRcdFx0Lmluc2VydCgncGF0aCcsICdnJylcclxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICdub25lJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjYzJjMWMxJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcyJylcclxuXHRcdFx0LmF0dHIoJ3NoYXBlLXJlbmRlcmluZycsICdjcmlzcEVkZ2VzJylcclxuXHRcdFx0LmF0dHIoJ2QnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHNvdXJjZVggPSBkLnNvdXJjZS54LFxyXG5cdFx0XHRcdFx0c291cmNlWSA9IGQuc291cmNlLnkgKyB0aGlzLmJveFdpZHRoIC8gMixcclxuXHRcdFx0XHRcdHRhcmdldFggPSBkLnRhcmdldC54LFxyXG5cdFx0XHRcdFx0dGFyZ2V0WSA9IGQudGFyZ2V0LnkgLSB0aGlzLmJveFdpZHRoIC8gMjtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0J00nICtcclxuXHRcdFx0XHRcdHNvdXJjZVkgK1xyXG5cdFx0XHRcdFx0JywnICtcclxuXHRcdFx0XHRcdHNvdXJjZVggK1xyXG5cdFx0XHRcdFx0J0gnICtcclxuXHRcdFx0XHRcdChzb3VyY2VZICsgKHRhcmdldFkgLSBzb3VyY2VZKSAvIDIpICtcclxuXHRcdFx0XHRcdCdWJyArXHJcblx0XHRcdFx0XHR0YXJnZXRYICtcclxuXHRcdFx0XHRcdCdIJyArXHJcblx0XHRcdFx0XHR0YXJnZXRZXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0YWN0aW9uRnVuKHZhbCkge1xyXG5cdFx0dGhpcy5hY3Rpb24uZW1pdCh2YWwpO1xyXG5cdH1cclxufVxyXG4iXX0=