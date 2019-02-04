/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.tree = d3.layout.tree().separation(function (a, b) { return (a.parent === b.parent ? 5 : 5.25); }).children(function (d) {
            return d.relations;
        });
        /** @type {?} */
        var nodes = this.tree.nodes(this.root).reverse();
        nodes.forEach(function (d) {
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
        });
        this.width = (this.max + 1) * 270 - this.margin.left - this.margin.right;
        this.height = (this.maxHeight + 1) * 120 - this.margin.top - this.margin.bottom;
        console.log('width', this.width);
        this.i = 0;
        this.testd = 0;
        if (treeData) {
            this.tree = d3.layout
                .tree()
                .separation(function (a, b) { return (a.parent === b.parent ? 5 : 5.25); })
                .children(function (d) {
                return d.relations;
            })
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
            .attr('stroke-width', '.9')
            .attr('stroke', '#f2f2f2');
        node.insert('g', 'g').attr('class', 'dot');
        // append dots to rect
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 66)
            .attr('cy', 19)
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 72)
            .attr('cy', 19)
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 78)
            .attr('cy', 19)
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('rect')
            .attr('class', 'dot')
            .attr('x', '60')
            .attr('y', '15')
            .attr('height', '10')
            .attr('width', '25')
            .attr('fill', 'transparent')
            .on('click', function (d) {
            console.log(d);
            if (d.uid) {
                _this.dataUID = d.uid;
                _this.action.emit(d.uid);
            }
        });
        node
            .append('text')
            .attr('x', function (d) {
            return -(_this.boxWidth / 20);
        })
            .attr('y', function (d) {
            return _this.boxWidth / 60;
        })
            .style('text-anchor', 'middle')
            .style('fill', '#aaaaaa')
            .attr('font-family', 'sans-serif')
            .on('click', function (d) {
            if (d.uid) {
                console.log('d', d.uid);
                _this.dataUID = d.uid;
                _this.action.emit(d.uid);
            }
        })
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
            .attr('fill', 'none')
            .attr('stroke', '#c2c1c1')
            .attr('stroke-width', '2')
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekI7SUFBQTtRQU9XLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsY0FBUyxHQUFRLENBQUMsQ0FBQztJQW1OcEIsQ0FBQzs7OztJQWhOQSx1Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUFBLGlCQWdEQzs7WUEvQ00sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQ3JD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Q2pCLE1BQU07O0lBdU9SLHdCQUFDO0NBQUEsQUE5T0QsSUE4T0M7U0F6T1ksaUJBQWlCOzs7SUFDN0IsNENBQW9DOztJQUNwQyxtQ0FBc0M7O0lBQ3RDLGlDQUFLOztJQUNMLGlDQUFLOztJQUNMLDhCQUFFOztJQUNGLGdDQUFJOztJQUNKLHFDQUFlOztJQUNmLHNDQUFlOztJQUNmLG1DQUtFOztJQUNGLGtDQUFvRDs7SUFDcEQsbUNBQW9EOztJQUNwRCxpQ0FBVTs7SUFDVixrQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZixnQ0FBYTs7SUFDYixrQ0FBVzs7SUFDWCxzQ0FBbUI7O0lBQ25CLG9DQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtdHJlZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtdHJlZS5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cdEBJbnB1dCgndHJlZS1kYXRhJykgdHJlZURhdGFGcm9tQXBpO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0dHJlZTtcclxuXHRyb290O1xyXG5cdGk7XHJcblx0c3ZnO1xyXG5cdGJveFdpZHRoID0gMTgwO1xyXG5cdGJveEhlaWdodCA9IDU1O1xyXG5cdG1hcmdpbiA9IHtcclxuXHRcdHRvcDogNTAsXHJcblx0XHRyaWdodDogNSxcclxuXHRcdGJvdHRvbTogNTAsXHJcblx0XHRsZWZ0OiA1XHJcblx0fTtcclxuXHR3aWR0aCA9IDEwNjAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcblx0aGVpZ2h0ID0gNTEwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xyXG5cdGRhdGE6IGFueTtcclxuXHR0ZXN0ZDogbnVtYmVyO1xyXG5cdGNoaWxkQ291bnQgPSAwO1xyXG5cdG1heDogYW55ID0gMDtcclxuXHR0cmVlMTogYW55O1xyXG5cdG1heEhlaWdodDogYW55ID0gMDtcclxuXHRkYXRhVUlEO1xyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGlmICh0aGlzLnRyZWVEYXRhRnJvbUFwaSkge1xyXG5cdFx0XHR0aGlzLmNvbnN0cnVjdFRyZWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdFRyZWUoKSB7XHJcblx0XHRjb25zdCB0cmVlRGF0YSA9IHRoaXMudHJlZURhdGFGcm9tQXBpO1xyXG5cdFx0dGhpcy5yb290ID0gdHJlZURhdGFbMF07XHJcblx0XHR0aGlzLnRyZWUgPSBkMy5sYXlvdXQudHJlZSgpLnNlcGFyYXRpb24oKGEsIGIpID0+IChhLnBhcmVudCA9PT0gYi5wYXJlbnQgPyA1IDogNS4yNSkpLmNoaWxkcmVuKChkKSA9PiB7XHJcblx0XHRcdHJldHVybiBkLnJlbGF0aW9ucztcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0aGlzLnRyZWUubm9kZXModGhpcy5yb290KS5yZXZlcnNlKCk7XHJcblx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCd3aWR0aCcsIGQpO1xyXG5cdFx0XHRpZiAoZC5kZXB0aCA+IHRoaXMubWF4KSB7XHJcblx0XHRcdFx0dGhpcy5tYXggPSBkLmRlcHRoO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdtYXgnLCB0aGlzLm1heCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGQucGFyZW50LmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0aWYgKGQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMubWF4SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHR0aGlzLm1heEhlaWdodCA9IGQucGFyZW50LmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLm1heCArIDEpICogMjcwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xyXG5cdFx0dGhpcy5oZWlnaHQgPSAodGhpcy5tYXhIZWlnaHQgKyAxKSAqIDEyMCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcclxuXHRcdGNvbnNvbGUubG9nKCd3aWR0aCcsIHRoaXMud2lkdGgpO1xyXG5cdFx0dGhpcy5pID0gMDtcclxuXHRcdHRoaXMudGVzdGQgPSAwO1xyXG5cdFx0aWYgKHRyZWVEYXRhKSB7XHJcblx0XHRcdHRoaXMudHJlZSA9IGQzLmxheW91dFxyXG5cdFx0XHRcdC50cmVlKClcclxuXHRcdFx0XHQuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSlcclxuXHRcdFx0XHQuY2hpbGRyZW4oKGQpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBkLnJlbGF0aW9ucztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zaXplKFsgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGggXSk7XHJcblxyXG5cdFx0XHR0aGlzLnN2ZyA9IGQzXHJcblx0XHRcdFx0LnNlbGVjdCgnI3RyZWUnKVxyXG5cdFx0XHRcdC5pbnNlcnQoJ3AnKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICd0cmVlZGF0YScpXHJcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcclxuXHRcdFx0XHQuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXHJcblx0XHRcdFx0LmFwcGVuZCgnc3ZnJylcclxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxyXG5cdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcclxuXHRcdFx0XHQuYXBwZW5kKCdnJylcclxuXHRcdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJyk7XHJcblxyXG5cdFx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcclxuXHRcdFx0dGhpcy5kcmF3VHJlZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZHJhd1RyZWUoKSB7XHJcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcclxuXHRcdGNvbnN0IGxpbmtzID0gdGhpcy50cmVlLmxpbmtzKG5vZGVzKTtcclxuXHJcblx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XHJcblx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAxMDkgLSBkLmRlcHRoICogMjcwOyAvLyByZXZlcnNlIHRyZWVcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ2cubm9kZScpLmRhdGEobm9kZXMsIChkKSA9PiB7XHJcblx0XHRcdHJldHVybiBkLmlkIHx8IChkLmlkID0gKyt0aGlzLmkpOyAvLyBhc3NpZ24gaWQgdG8gbm9kZXNcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlJykuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuICd0cmFuc2xhdGUoJyArIGQueSArICcsJyArIGQueCArICcpJzsgLy8gYXBwZW5kIGcgd2l0aCBjbGFzcyBhdHRyXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBhcHBlbmQgbGluZSBpbnRvIHN2Z1xyXG5cdFx0bm9kZVxyXG5cdFx0XHQuYXBwZW5kKCdsaW5lJylcclxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkJywgZCk7XHJcblx0XHRcdFx0aWYgKGQuZGVwdGggPT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAnIzZmM2JkYSc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpZiAoZC5kZXB0aCA9PT0gMSkge1xyXG5cdFx0XHRcdC8vIFx0cmV0dXJuICcjM2ZkYmVmJztcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaWYgKGQuZGVwdGggPT09IDIpIHtcclxuXHRcdFx0XHQvLyBcdHJldHVybiAnI2I4Y2UyYic7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0cmV0dXJuICcjM2ZkYmVmJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCd4MScsIC0odGhpcy5ib3hXaWR0aCAvIDIpKVxyXG5cdFx0XHQuYXR0cigneTEnLCAtKHRoaXMuYm94SGVpZ2h0IC8gMikpXHJcblx0XHRcdC5hdHRyKCd4MicsIC0odGhpcy5ib3hXaWR0aCAvIDIpKVxyXG5cdFx0XHQuYXR0cigneTInLCB0aGlzLmJveEhlaWdodCAvIDIpXHJcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMTAnKTtcclxuXHJcblx0XHQvLyBhcHBlbmQgcmVjdCBpbnRvIHN2Z1xyXG5cclxuXHRcdG5vZGVcclxuXHRcdFx0LmFwcGVuZCgncmVjdCcpXHJcblx0XHRcdC5hdHRyKHtcclxuXHRcdFx0XHR4OiAtKHRoaXMuYm94V2lkdGggLyAyKSxcclxuXHRcdFx0XHR5OiAtKHRoaXMuYm94SGVpZ2h0IC8gMiksXHJcblx0XHRcdFx0d2lkdGg6IHRoaXMuYm94V2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmJveEhlaWdodFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnLjknKVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlJywgJyNmMmYyZjInKTtcclxuXHJcblx0XHRub2RlLmluc2VydCgnZycsICdnJykuYXR0cignY2xhc3MnLCAnZG90Jyk7XHJcblx0XHQvLyBhcHBlbmQgZG90cyB0byByZWN0XHJcblx0XHR0aGlzLnN2Z1xyXG5cdFx0XHQuc2VsZWN0QWxsKCdnLmRvdCcpXHJcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXHJcblx0XHRcdC5hdHRyKCdyJywgMi4yKVxyXG5cdFx0XHQuYXR0cignY3gnLCA2NilcclxuXHRcdFx0LmF0dHIoJ2N5JywgMTkpXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDcyKVxyXG5cdFx0XHQuYXR0cignY3knLCAxOSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNzgpXHJcblx0XHRcdC5hdHRyKCdjeScsIDE5KVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XHJcblx0XHR0aGlzLnN2Z1xyXG5cdFx0XHQuc2VsZWN0QWxsKCdnLmRvdCcpXHJcblx0XHRcdC5pbnNlcnQoJ3JlY3QnKVxyXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnZG90JylcclxuXHRcdFx0LmF0dHIoJ3gnLCAnNjAnKVxyXG5cdFx0XHQuYXR0cigneScsICcxNScpXHJcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCAnMTAnKVxyXG5cdFx0XHQuYXR0cignd2lkdGgnLCAnMjUnKVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICd0cmFuc3BhcmVudCcpXHJcblx0XHRcdC5vbignY2xpY2snLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGQpO1xyXG5cdFx0XHRcdGlmIChkLnVpZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhVUlEID0gZC51aWQ7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGlvbi5lbWl0KGQudWlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5vZGVcclxuXHRcdFx0LmFwcGVuZCgndGV4dCcpXHJcblx0XHRcdC5hdHRyKCd4JywgKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveFdpZHRoIC8gMjApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cigneScsIChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuYm94V2lkdGggLyA2MDtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnI2FhYWFhYScpXHJcblx0XHRcdC5hdHRyKCdmb250LWZhbWlseScsICdzYW5zLXNlcmlmJylcclxuXHRcdFx0Lm9uKCdjbGljaycsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQudWlkKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZCcsIGQudWlkKTtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YVVJRCA9IGQudWlkO1xyXG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24uZW1pdChkLnVpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGV4dCgoZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBkLnByb2R1Y3QubmFtZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgncGF0aC5saW5rJykuZGF0YShsaW5rcywgKGQpID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZDtcclxuXHRcdFx0cmV0dXJuIGQudGFyZ2V0LmlkO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIGxpbmsgaW50byBzdmdcclxuXHRcdGxpbmtcclxuXHRcdFx0LmVudGVyKClcclxuXHRcdFx0Lmluc2VydCgncGF0aCcsICdnJylcclxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICdub25lJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjYzJjMWMxJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcyJylcclxuXHRcdFx0LmF0dHIoJ3NoYXBlLXJlbmRlcmluZycsICdjcmlzcEVkZ2VzJylcclxuXHRcdFx0LmF0dHIoJ2QnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHNvdXJjZVggPSBkLnNvdXJjZS54LFxyXG5cdFx0XHRcdFx0c291cmNlWSA9IGQuc291cmNlLnkgKyB0aGlzLmJveFdpZHRoIC8gMixcclxuXHRcdFx0XHRcdHRhcmdldFggPSBkLnRhcmdldC54LFxyXG5cdFx0XHRcdFx0dGFyZ2V0WSA9IGQudGFyZ2V0LnkgLSB0aGlzLmJveFdpZHRoIC8gMjtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0J00nICtcclxuXHRcdFx0XHRcdHNvdXJjZVkgK1xyXG5cdFx0XHRcdFx0JywnICtcclxuXHRcdFx0XHRcdHNvdXJjZVggK1xyXG5cdFx0XHRcdFx0J0gnICtcclxuXHRcdFx0XHRcdChzb3VyY2VZICsgKHRhcmdldFkgLSBzb3VyY2VZKSAvIDIpICtcclxuXHRcdFx0XHRcdCdWJyArXHJcblx0XHRcdFx0XHR0YXJnZXRYICtcclxuXHRcdFx0XHRcdCdIJyArXHJcblx0XHRcdFx0XHR0YXJnZXRZXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhY3Rpb25GdW4odmFsKSB7XHJcblx0XHR0aGlzLmFjdGlvbi5lbWl0KHZhbCk7XHJcblx0fVxyXG59XHJcbiJdfQ==