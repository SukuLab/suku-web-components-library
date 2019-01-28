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
            if (d.depth > _this.max) {
                _this.max = d.depth;
            }
            if (d.parent.children) {
                if (d.parent.children.length > _this.maxHeight) {
                    _this.maxHeight = d.parent.children.length;
                }
            }
        });
        this.width = (this.max + 1) * 270 - this.margin.left - this.margin.right;
        this.height = (this.maxHeight + 1) * 90 - this.margin.top - this.margin.bottom;
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
            if (d.depth === 1) {
                return '#3fdbef';
            }
            if (d.depth === 2) {
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
                    styles: [".tree{width:100%;overflow-x:scroll!important;direction:rtl!important}.node text{fill:#aaa;font-size:16px;font-family:'Encode Sans',sans-serif!important;fill:#aaa}.link{fill:none;stroke:#c2c1c1;stroke-width:2px;fill:none!important;stroke:#c2c1c1!important;stroke-width:2px!important}#tree{width:100%;overflow-x:scroll!important;direction:rtl!important}svg{overflow-x:scroll!important}rect,text{cursor:pointer!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekI7SUFBQTtRQU9XLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRVosY0FBUyxHQUFRLENBQUMsQ0FBQztJQXlNckIsQ0FBQzs7OztJQXRNQSx1Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUFBLGlCQTBDQzs7WUF6Q00sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQ3JD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Qzs7Z0JBQ3hDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUNwQixPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1lBQ3pDLE9BQU8sQ0FDTixHQUFHO2dCQUNILE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPO2dCQUNQLEdBQUc7Z0JBQ0gsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxHQUFHO2dCQUNILE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPLENBQ1AsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsR0FBRztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQW5PRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG1DQUF5Qzs7aUJBRXpDOzs7a0NBRUMsS0FBSyxTQUFDLFdBQVc7eUJBQ2pCLE1BQU07O0lBNk5SLHdCQUFDO0NBQUEsQUFwT0QsSUFvT0M7U0EvTlksaUJBQWlCOzs7SUFDN0IsNENBQW9DOztJQUNwQyxtQ0FBc0M7O0lBQ3RDLGlDQUFLOztJQUNMLGlDQUFLOztJQUNMLDhCQUFFOztJQUNGLGdDQUFJOztJQUNKLHFDQUFlOztJQUNmLHNDQUFlOztJQUNmLG1DQUtFOztJQUNGLGtDQUFvRDs7SUFDcEQsbUNBQW9EOztJQUNwRCxpQ0FBVTs7SUFDVixrQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZixnQ0FBYTs7SUFDYixrQ0FBVzs7SUFDVixzQ0FBbUI7O0lBQ3BCLG9DQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXRyZWUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmVlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtdHJlZS5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgndHJlZS1kYXRhJykgdHJlZURhdGFGcm9tQXBpO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR0cmVlO1xuXHRyb290O1xuXHRpO1xuXHRzdmc7XG5cdGJveFdpZHRoID0gMTgwO1xuXHRib3hIZWlnaHQgPSA1NTtcblx0bWFyZ2luID0ge1xuXHRcdHRvcDogNTAsXG5cdFx0cmlnaHQ6IDUsXG5cdFx0Ym90dG9tOiA1MCxcblx0XHRsZWZ0OiA1XG5cdH07XG5cdHdpZHRoID0gMTA2MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcblx0aGVpZ2h0ID0gNTEwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHRkYXRhOiBhbnk7XG5cdHRlc3RkOiBudW1iZXI7XG5cdGNoaWxkQ291bnQgPSAwO1xuXHRtYXg6IGFueSA9IDA7XG5cdHRyZWUxOiBhbnk7XG4gIG1heEhlaWdodDogYW55ID0gMDtcblx0ZGF0YVVJRDtcblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy50cmVlRGF0YUZyb21BcGkpIHtcblx0XHRcdHRoaXMuY29uc3RydWN0VHJlZSgpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0cnVjdFRyZWUoKSB7XG5cdFx0Y29uc3QgdHJlZURhdGEgPSB0aGlzLnRyZWVEYXRhRnJvbUFwaTtcblx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcblx0XHR0aGlzLnRyZWUgPSBkMy5sYXlvdXQudHJlZSgpLnNlcGFyYXRpb24oKGEsIGIpID0+IChhLnBhcmVudCA9PT0gYi5wYXJlbnQgPyA1IDogNS4yNSkpLmNoaWxkcmVuKChkKSA9PiB7XG5cdFx0XHRyZXR1cm4gZC5yZWxhdGlvbnM7XG5cdFx0fSk7XG5cdFx0Y29uc3Qgbm9kZXMgPSB0aGlzLnRyZWUubm9kZXModGhpcy5yb290KS5yZXZlcnNlKCk7XG5cdFx0bm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuXHRcdFx0aWYgKGQuZGVwdGggPiB0aGlzLm1heCkge1xuXHRcdFx0XHR0aGlzLm1heCA9IGQuZGVwdGg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZC5wYXJlbnQuY2hpbGRyZW4pIHtcblx0XHRcdFx0aWYgKGQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMubWF4SGVpZ2h0KSB7XG5cdFx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSBkLnBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLndpZHRoID0gKHRoaXMubWF4ICsgMSkgKiAyNzAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG5cdFx0dGhpcy5oZWlnaHQgPSAodGhpcy5tYXhIZWlnaHQgKyAxKSAqIDkwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHRcdGNvbnNvbGUubG9nKCd3aWR0aCcsIHRoaXMud2lkdGgpO1xuXHRcdHRoaXMuaSA9IDA7XG5cdFx0dGhpcy50ZXN0ZCA9IDA7XG5cdFx0aWYgKHRyZWVEYXRhKSB7XG5cdFx0XHR0aGlzLnRyZWUgPSBkMy5sYXlvdXRcblx0XHRcdFx0LnRyZWUoKVxuXHRcdFx0XHQuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSlcblx0XHRcdFx0LmNoaWxkcmVuKChkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc2l6ZShbIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoIF0pO1xuXG5cdFx0XHR0aGlzLnN2ZyA9IGQzXG5cdFx0XHRcdC5zZWxlY3QoJyN0cmVlJylcblx0XHRcdFx0LmFwcGVuZCgnc3ZnJylcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcblx0XHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuXHRcdFx0XHQuYXBwZW5kKCdnJylcblx0XHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpO1xuXG5cdFx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcblx0XHRcdHRoaXMuZHJhd1RyZWUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3VHJlZSgpIHtcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcblx0XHRjb25zdCBsaW5rcyA9IHRoaXMudHJlZS5saW5rcyhub2Rlcyk7XG5cblx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG5cdFx0XHRkLnkgPSB0aGlzLndpZHRoIC0gMTA5IC0gZC5kZXB0aCAqIDI3MDsgLy8gcmV2ZXJzZSB0cmVlXG5cdFx0fSk7XG5cblx0XHRjb25zdCBub2RlID0gdGhpcy5zdmcuc2VsZWN0QWxsKCdnLm5vZGUnKS5kYXRhKG5vZGVzLCAoZCkgPT4ge1xuXHRcdFx0cmV0dXJuIGQuaWQgfHwgKGQuaWQgPSArK3RoaXMuaSk7IC8vIGFzc2lnbiBpZCB0byBub2Rlc1xuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ25vZGUnKS5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xuXHRcdFx0cmV0dXJuICd0cmFuc2xhdGUoJyArIGQueSArICcsJyArIGQueCArICcpJzsgLy8gYXBwZW5kIGcgd2l0aCBjbGFzcyBhdHRyXG5cdFx0fSk7XG5cblx0XHQvLyBhcHBlbmQgbGluZSBpbnRvIHN2Z1xuXHRcdG5vZGVcblx0XHRcdC5hcHBlbmQoJ2xpbmUnKVxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCAoZCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZCcsIGQpO1xuXHRcdFx0XHRpZiAoZC5kZXB0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiAnIzZmM2JkYSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuZGVwdGggPT09IDEpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyMzZmRiZWYnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmRlcHRoID09PSAyKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcjYjhjZTJiJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gJyMzZmRiZWYnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3gxJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXG5cdFx0XHQuYXR0cigneTEnLCAtKHRoaXMuYm94SGVpZ2h0IC8gMikpXG5cdFx0XHQuYXR0cigneDInLCAtKHRoaXMuYm94V2lkdGggLyAyKSlcblx0XHRcdC5hdHRyKCd5MicsIHRoaXMuYm94SGVpZ2h0IC8gMilcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMTAnKTtcblxuXHRcdC8vIGFwcGVuZCByZWN0IGludG8gc3ZnXG5cblx0XHRub2RlXG5cdFx0XHQuYXBwZW5kKCdyZWN0Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0eDogLSh0aGlzLmJveFdpZHRoIC8gMiksXG5cdFx0XHRcdHk6IC0odGhpcy5ib3hIZWlnaHQgLyAyKSxcblx0XHRcdFx0d2lkdGg6IHRoaXMuYm94V2lkdGgsXG5cdFx0XHRcdGhlaWdodDogdGhpcy5ib3hIZWlnaHRcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICd3aGl0ZScpXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJy45Jylcblx0XHRcdC5hdHRyKCdzdHJva2UnLCAnI2YyZjJmMicpO1xuXG5cdFx0bm9kZS5pbnNlcnQoJ2cnLCAnZycpLmF0dHIoJ2NsYXNzJywgJ2RvdCcpO1xuXHRcdC8vIGFwcGVuZCBkb3RzIHRvIHJlY3Rcblx0XHR0aGlzLnN2Z1xuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcblx0XHRcdC5hdHRyKCdyJywgMi4yKVxuXHRcdFx0LmF0dHIoJ2N4JywgNjYpXG5cdFx0XHQuYXR0cignY3knLCAxOSlcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcblx0XHR0aGlzLnN2Z1xuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcblx0XHRcdC5hdHRyKCdyJywgMi4yKVxuXHRcdFx0LmF0dHIoJ2N4JywgNzIpXG5cdFx0XHQuYXR0cignY3knLCAxOSlcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcblx0XHR0aGlzLnN2Z1xuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcblx0XHRcdC5hdHRyKCdyJywgMi4yKVxuXHRcdFx0LmF0dHIoJ2N4JywgNzgpXG5cdFx0XHQuYXR0cignY3knLCAxOSlcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcblx0XHR0aGlzLnN2Z1xuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxuXHRcdFx0Lmluc2VydCgncmVjdCcpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnZG90Jylcblx0XHRcdC5hdHRyKCd4JywgJzYwJylcblx0XHRcdC5hdHRyKCd5JywgJzE1Jylcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCAnMTAnKVxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgJzI1Jylcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3RyYW5zcGFyZW50Jylcblx0XHRcdC5vbignY2xpY2snLCAoZCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkKTtcblx0XHRcdFx0aWYgKGQudWlkKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhVUlEID0gZC51aWQ7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24uZW1pdChkLnVpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0bm9kZVxuXHRcdFx0LmFwcGVuZCgndGV4dCcpXG5cdFx0XHQuYXR0cigneCcsIChkKSA9PiB7XG5cdFx0XHRcdHJldHVybiAtKHRoaXMuYm94V2lkdGggLyAyMCk7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3knLCAoZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hXaWR0aCAvIDYwO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcblx0XHRcdC5vbignY2xpY2snLCAoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC51aWQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZCcsIGQudWlkKTtcblx0XHRcdFx0XHR0aGlzLmRhdGFVSUQgPSBkLnVpZDtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbi5lbWl0KGQudWlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC50ZXh0KChkKSA9PiB7XG5cdFx0XHRcdHJldHVybiBkLnByb2R1Y3QubmFtZTtcblx0XHRcdH0pO1xuXG5cdFx0Y29uc3QgbGluayA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgncGF0aC5saW5rJykuZGF0YShsaW5rcywgKGQpID0+IHtcblx0XHRcdHRoaXMuZGF0YSA9IGQ7XG5cdFx0XHRyZXR1cm4gZC50YXJnZXQuaWQ7XG5cdFx0fSk7XG5cblx0XHQvLyBhcHBlbmQgbGluayBpbnRvIHN2Z1xuXHRcdGxpbmtcblx0XHRcdC5lbnRlcigpXG5cdFx0XHQuaW5zZXJ0KCdwYXRoJywgJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjMDAwJylcblx0XHRcdC5hdHRyKCdzaGFwZS1yZW5kZXJpbmcnLCAnY3Jpc3BFZGdlcycpXG5cdFx0XHQuYXR0cignZCcsIChkKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNvdXJjZVggPSBkLnNvdXJjZS54LFxuXHRcdFx0XHRcdHNvdXJjZVkgPSBkLnNvdXJjZS55ICsgdGhpcy5ib3hXaWR0aCAvIDIsXG5cdFx0XHRcdFx0dGFyZ2V0WCA9IGQudGFyZ2V0LngsXG5cdFx0XHRcdFx0dGFyZ2V0WSA9IGQudGFyZ2V0LnkgLSB0aGlzLmJveFdpZHRoIC8gMjtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQnTScgK1xuXHRcdFx0XHRcdHNvdXJjZVkgK1xuXHRcdFx0XHRcdCcsJyArXG5cdFx0XHRcdFx0c291cmNlWCArXG5cdFx0XHRcdFx0J0gnICtcblx0XHRcdFx0XHQoc291cmNlWSArICh0YXJnZXRZIC0gc291cmNlWSkgLyAyKSArXG5cdFx0XHRcdFx0J1YnICtcblx0XHRcdFx0XHR0YXJnZXRYICtcblx0XHRcdFx0XHQnSCcgK1xuXHRcdFx0XHRcdHRhcmdldFlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0YWN0aW9uRnVuKHZhbCkge1xuXHRcdHRoaXMuYWN0aW9uLmVtaXQodmFsKTtcblx0fVxufVxuIl19