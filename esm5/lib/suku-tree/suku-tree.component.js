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
        this.j = 0;
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
            .attr('y1', function (d) {
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
        })
            .attr('x2', -(this.boxWidth / 2))
            .attr('y2', function (d) {
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
        })
            .attr('stroke-width', '10');
        // append rect into svg
        node
            .append('rect')
            .attr({
            x: -(this.boxWidth / 2),
            y: -(this.boxHeight / 2),
            width: this.boxWidth,
            height: function (d) {
                if (d.product.name.length > 40) {
                    return _this.boxHeight + 30;
                }
                else if (d.product.name.length > 20) {
                    return _this.boxHeight + 10;
                }
                else {
                    return _this.boxHeight;
                }
            }
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
            .attr('cy', function (d) {
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
        })
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 72)
            .attr('cy', function (d) {
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
        })
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('circle')
            .attr('r', 2.2)
            .attr('cx', 79)
            .attr('cy', function (d) {
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
        })
            .attr('fill', '#b6b6b6');
        this.svg
            .selectAll('g.dot')
            .insert('rect')
            .attr('class', 'dot')
            .attr('x', '60')
            .attr('y', function (d) {
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
        })
            .attr('id', function (d) {
            return 'asset' + ++_this.j;
        })
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
        this.svgNOde = node
            .append('text')
            .attr('x', function (d) {
            return -(_this.boxWidth / 10) - 60;
        })
            .attr('y', function (d) {
            return -(_this.boxWidth / 35);
        })
            .style('text-anchor', 'middle')
            .style('fill', '#aaaaaa')
            .attr('font-family', 'sans-serif')
            .text(function (d) {
            return d.product.name;
        })
            .call(function wrap(text, width) {
            text.each(function () {
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
            });
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
    /** @type {?} */
    SukuTreeComponent.prototype.svgNOde;
    /** @type {?} */
    SukuTreeComponent.prototype.j;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekI7SUFBQTtRQU9XLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsY0FBUyxHQUFRLENBQUMsQ0FBQztJQXNVcEIsQ0FBQzs7OztJQWpVQSx1Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUFBLGlCQWlEQzs7WUFoRE0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQ3JD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TztnQkFDUCxHQUFHO2dCQUNILE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLEdBQUc7Z0JBQ0gsT0FBTztnQkFDUCxHQUFHO2dCQUNILE9BQU8sQ0FDUCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxHQUFHO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Z0JBaFdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsV0FBVztvQkFDckIsbUNBQXlDOztpQkFFekM7OztrQ0FFQyxLQUFLLFNBQUMsV0FBVzt5QkFDakIsTUFBTTs7SUEwVlIsd0JBQUM7Q0FBQSxBQWpXRCxJQWlXQztTQTVWWSxpQkFBaUI7OztJQUM3Qiw0Q0FBb0M7O0lBQ3BDLG1DQUFzQzs7SUFDdEMsaUNBQUs7O0lBQ0wsaUNBQUs7O0lBQ0wsOEJBQUU7O0lBQ0YsZ0NBQUk7O0lBQ0oscUNBQWU7O0lBQ2Ysc0NBQWU7O0lBQ2YsbUNBS0U7O0lBQ0Ysa0NBQW9EOztJQUNwRCxtQ0FBb0Q7O0lBQ3BELGlDQUFVOztJQUNWLGtDQUFjOztJQUNkLHVDQUFlOztJQUNmLGdDQUFhOztJQUNiLGtDQUFXOztJQUNYLHNDQUFtQjs7SUFDbkIsb0NBQVE7O0lBQ1Isb0NBQWE7O0lBQ2IsOEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS10cmVlJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS10cmVlLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblx0QElucHV0KCd0cmVlLWRhdGEnKSB0cmVlRGF0YUZyb21BcGk7XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHR0cmVlO1xyXG5cdHJvb3Q7XHJcblx0aTtcclxuXHRzdmc7XHJcblx0Ym94V2lkdGggPSAxODA7XHJcblx0Ym94SGVpZ2h0ID0gNTU7XHJcblx0bWFyZ2luID0ge1xyXG5cdFx0dG9wOiA1MCxcclxuXHRcdHJpZ2h0OiA1LFxyXG5cdFx0Ym90dG9tOiA1MCxcclxuXHRcdGxlZnQ6IDVcclxuXHR9O1xyXG5cdHdpZHRoID0gMTA2MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuXHRoZWlnaHQgPSA1MTAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcblx0ZGF0YTogYW55O1xyXG5cdHRlc3RkOiBudW1iZXI7XHJcblx0Y2hpbGRDb3VudCA9IDA7XHJcblx0bWF4OiBhbnkgPSAwO1xyXG5cdHRyZWUxOiBhbnk7XHJcblx0bWF4SGVpZ2h0OiBhbnkgPSAwO1xyXG5cdGRhdGFVSUQ7XHJcblx0c3ZnTk9kZTogYW55O1xyXG5cdGo6IGFueTtcclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRpZiAodGhpcy50cmVlRGF0YUZyb21BcGkpIHtcclxuXHRcdFx0dGhpcy5jb25zdHJ1Y3RUcmVlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RUcmVlKCkge1xyXG5cdFx0Y29uc3QgdHJlZURhdGEgPSB0aGlzLnRyZWVEYXRhRnJvbUFwaTtcclxuXHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xyXG5cdFx0dGhpcy50cmVlID0gZDMubGF5b3V0LnRyZWUoKS5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKS5jaGlsZHJlbigoZCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gZC5yZWxhdGlvbnM7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xyXG5cdFx0bm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnd2lkdGgnLCBkKTtcclxuXHRcdFx0aWYgKGQuZGVwdGggPiB0aGlzLm1heCkge1xyXG5cdFx0XHRcdHRoaXMubWF4ID0gZC5kZXB0aDtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbWF4JywgdGhpcy5tYXgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkLnBhcmVudC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGlmIChkLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLm1heEhlaWdodCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSBkLnBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMud2lkdGggPSAodGhpcy5tYXggKyAxKSAqIDI3MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gKHRoaXMubWF4SGVpZ2h0ICsgMSkgKiAxMjAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcblx0XHRjb25zb2xlLmxvZygnd2lkdGgnLCB0aGlzLndpZHRoKTtcclxuXHRcdHRoaXMuaSA9IDA7XHJcblx0XHR0aGlzLmogPSAwO1xyXG5cdFx0dGhpcy50ZXN0ZCA9IDA7XHJcblx0XHRpZiAodHJlZURhdGEpIHtcclxuXHRcdFx0dGhpcy50cmVlID0gZDMubGF5b3V0XHJcblx0XHRcdFx0LnRyZWUoKVxyXG5cdFx0XHRcdC5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKVxyXG5cdFx0XHRcdC5jaGlsZHJlbigoZCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnNpemUoWyB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCBdKTtcclxuXHJcblx0XHRcdHRoaXMuc3ZnID0gZDNcclxuXHRcdFx0XHQuc2VsZWN0KCcjdHJlZScpXHJcblx0XHRcdFx0Lmluc2VydCgncCcpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ3RyZWVkYXRhJylcclxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxyXG5cdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcclxuXHRcdFx0XHQuYXBwZW5kKCdzdmcnKVxyXG5cdFx0XHRcdC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5yaWdodCArIHRoaXMubWFyZ2luLmxlZnQpXHJcblx0XHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxyXG5cdFx0XHRcdC5hcHBlbmQoJ2cnKVxyXG5cdFx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcclxuXHJcblx0XHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xyXG5cdFx0XHR0aGlzLmRyYXdUcmVlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkcmF3VHJlZSgpIHtcclxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xyXG5cdFx0Y29uc3QgbGlua3MgPSB0aGlzLnRyZWUubGlua3Mobm9kZXMpO1xyXG5cclxuXHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcclxuXHRcdFx0ZC55ID0gdGhpcy53aWR0aCAtIDEwOSAtIGQuZGVwdGggKiAyNzA7IC8vIHJldmVyc2UgdHJlZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgnZy5ub2RlJykuZGF0YShub2RlcywgKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuIGQuaWQgfHwgKGQuaWQgPSArK3RoaXMuaSk7IC8vIGFzc2lnbiBpZCB0byBub2Rlc1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ25vZGUnKS5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gJ3RyYW5zbGF0ZSgnICsgZC55ICsgJywnICsgZC54ICsgJyknOyAvLyBhcHBlbmQgZyB3aXRoIGNsYXNzIGF0dHJcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGFwcGVuZCBsaW5lIGludG8gc3ZnXHJcblx0XHRub2RlXHJcblx0XHRcdC5hcHBlbmQoJ2xpbmUnKVxyXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZScsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2QnLCBkKTtcclxuXHRcdFx0XHRpZiAoZC5kZXB0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICcjNmYzYmRhJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaWYgKGQuZGVwdGggPT09IDEpIHtcclxuXHRcdFx0XHRcdC8vIFx0cmV0dXJuICcjM2ZkYmVmJztcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdC8vIGlmIChkLmRlcHRoID09PSAyKSB7XHJcblx0XHRcdFx0XHQvLyBcdHJldHVybiAnI2I4Y2UyYic7XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRyZXR1cm4gJyMzZmRiZWYnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ3gxJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXHJcblx0XHRcdC5hdHRyKCd5MScsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2QubGVuZ3RoJywgZC5wcm9kdWN0Lm5hbWUubGVuZ3RoKTtcclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNTApIHtcclxuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiAyMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hIZWlnaHQgLyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cigneDInLCAtKHRoaXMuYm94V2lkdGggLyAyKSlcclxuXHRcdFx0LmF0dHIoJ3kyJywgKGQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZC5sZW5ndGgnLCBkLnByb2R1Y3QubmFtZS5sZW5ndGgpO1xyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMiArIDMwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDIgKyAzMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDIwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyICsgMTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcxMCcpO1xyXG5cclxuXHRcdC8vIGFwcGVuZCByZWN0IGludG8gc3ZnXHJcblxyXG5cdFx0bm9kZVxyXG5cdFx0XHQuYXBwZW5kKCdyZWN0JylcclxuXHRcdFx0LmF0dHIoe1xyXG5cdFx0XHRcdHg6IC0odGhpcy5ib3hXaWR0aCAvIDIpLFxyXG5cdFx0XHRcdHk6IC0odGhpcy5ib3hIZWlnaHQgLyAyKSxcclxuXHRcdFx0XHR3aWR0aDogdGhpcy5ib3hXaWR0aCxcclxuXHRcdFx0XHRoZWlnaHQ6IChkKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0ICsgMzA7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDIwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCArIDEwO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJy45JylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjZjJmMmYyJyk7XHJcblxyXG5cdFx0bm9kZS5pbnNlcnQoJ2cnLCAnZycpLmF0dHIoJ2NsYXNzJywgJ2RvdCcpO1xyXG5cdFx0Ly8gYXBwZW5kIGRvdHMgdG8gcmVjdFxyXG5cdFx0Ly8gbm9kZS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdkb3QnKVxyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNjUpXHJcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDQ4O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gMjApIHtcclxuXHRcdFx0XHRcdHJldHVybiAyODtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNzIpXHJcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDQ4O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gMjApIHtcclxuXHRcdFx0XHRcdHJldHVybiAyODtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNzkpXHJcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gNTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDQ4O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gMjApIHtcclxuXHRcdFx0XHRcdHJldHVybiAyODtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdyZWN0JylcclxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2RvdCcpXHJcblx0XHRcdC5hdHRyKCd4JywgJzYwJylcclxuXHRcdFx0LmF0dHIoJ3knLCAgKGQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZC5sZW5ndGgnLCBkLnByb2R1Y3QubmFtZS5sZW5ndGgpO1xyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDQ1O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5wcm9kdWN0Lm5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAzMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQucHJvZHVjdC5uYW1lLmxlbmd0aCA+IDIwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMjM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLnByb2R1Y3QubmFtZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMTU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cignaWQnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAnYXNzZXQnICsgKyt0aGlzLmo7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCAnMTAnKVxyXG5cdFx0XHQuYXR0cignd2lkdGgnLCAnMjUnKVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICd0cmFuc3BhcmVudCcpXHJcblx0XHRcdC5vbignY2xpY2snLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGQpO1xyXG5cdFx0XHRcdGlmIChkLnVpZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhVUlEID0gZC51aWQ7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGlvbi5lbWl0KGQudWlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuc3ZnTk9kZSA9IG5vZGVcclxuXHRcdFx0LmFwcGVuZCgndGV4dCcpXHJcblx0XHRcdC5hdHRyKCd4JywgKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveFdpZHRoIC8gMTApIC0gNjA7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCd5JywgKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveFdpZHRoIC8gMzUpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcblx0XHRcdC5zdHlsZSgnZmlsbCcsICcjYWFhYWFhJylcclxuXHRcdFx0LmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ3NhbnMtc2VyaWYnKVxyXG5cdFx0XHQudGV4dCgoZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBkLnByb2R1Y3QubmFtZTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhbGwoZnVuY3Rpb24gd3JhcCh0ZXh0LCB3aWR0aCkge1xyXG5cdFx0XHRcdHRleHQuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd3b3JkIHRlenQgaW5mb3IgZWFjaCcsIGQzLnNlbGVjdCh0aGlzKSk7XHJcblx0XHRcdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWNvbnN0XHJcblx0XHRcdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGVcclxuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBkMy5zZWxlY3QodGhpcyk7XHJcblx0XHRcdFx0XHRjb25zdCB3b3JkcyA9IHRleHQudGV4dCgpLnNwbGl0KC9cXHMrLykucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdFx0bGV0IHdvcmQ7XHJcblx0XHRcdFx0XHRsZXQgbGluZSA9IFtdO1xyXG5cdFx0XHRcdFx0bGV0IGxpbmVOdW1iZXIgPSAwO1xyXG5cdFx0XHRcdFx0Y29uc3QgbGluZUhlaWdodCA9IDEuMzsgLy8gZW1zXHJcblx0XHRcdFx0XHRjb25zdCB4ID0gdGV4dC5hdHRyKCd4Jyk7XHJcblx0XHRcdFx0XHRjb25zdCB5ID0gdGV4dC5hdHRyKCd5Jyk7XHJcblx0XHRcdFx0XHRjb25zdCBkeSA9IDA7IC8vIHBhcnNlRmxvYXQodGV4dC5hdHRyKFwiZHlcIikpLFxyXG5cdFx0XHRcdFx0bGV0IHRzcGFuID0gdGV4dC50ZXh0KG51bGwpLmFwcGVuZCgndHNwYW4nKS5hdHRyKCd4JywgeCkuYXR0cigneScsIHkpLmF0dHIoJ2R5JywgZHkgKyAnZW0nKS5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKTtcclxuXHRcdFx0XHRcdHdoaWxlICgod29yZCA9IHdvcmRzLnBvcCgpKSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnd29yZCcsIHdvcmQpO1xyXG5cdFx0XHRcdFx0XHRsaW5lLnB1c2god29yZCk7XHJcblx0XHRcdFx0XHRcdHRzcGFuLnRleHQobGluZS5qb2luKCcgJykpO1xyXG5cdFx0XHRcdFx0XHRpZiAodHNwYW4ubm9kZSgpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpID4gMTcwKSB7XHJcblx0XHRcdFx0XHRcdFx0bGluZS5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHR0c3Bhbi50ZXh0KGxpbmUuam9pbignICcpKTtcclxuXHRcdFx0XHRcdFx0XHRsaW5lID0gWyB3b3JkIF07XHJcblx0XHRcdFx0XHRcdFx0dHNwYW4gPSB0ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKCd0c3BhbicpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cigneCcsIHgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cigneScsIHkpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignZHknLCArK2xpbmVOdW1iZXIgKiBsaW5lSGVpZ2h0ICsgZHkgKyAnZW0nKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXHJcblx0XHRcdFx0XHRcdFx0XHQudGV4dCh3b3JkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBsaW5rID0gdGhpcy5zdmcuc2VsZWN0QWxsKCdwYXRoLmxpbmsnKS5kYXRhKGxpbmtzLCAoZCkgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkO1xyXG5cdFx0XHRyZXR1cm4gZC50YXJnZXQuaWQ7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBhcHBlbmQgbGluayBpbnRvIHN2Z1xyXG5cdFx0bGlua1xyXG5cdFx0XHQuZW50ZXIoKVxyXG5cdFx0XHQuaW5zZXJ0KCdwYXRoJywgJ2cnKVxyXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnbGluaycpXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlJywgJyNjMmMxYzEnKVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJzInKVxyXG5cdFx0XHQuYXR0cignc2hhcGUtcmVuZGVyaW5nJywgJ2NyaXNwRWRnZXMnKVxyXG5cdFx0XHQuYXR0cignZCcsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc291cmNlWCA9IGQuc291cmNlLngsXHJcblx0XHRcdFx0XHRzb3VyY2VZID0gZC5zb3VyY2UueSArIHRoaXMuYm94V2lkdGggLyAyLFxyXG5cdFx0XHRcdFx0dGFyZ2V0WCA9IGQudGFyZ2V0LngsXHJcblx0XHRcdFx0XHR0YXJnZXRZID0gZC50YXJnZXQueSAtIHRoaXMuYm94V2lkdGggLyAyO1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQnTScgK1xyXG5cdFx0XHRcdFx0c291cmNlWSArXHJcblx0XHRcdFx0XHQnLCcgK1xyXG5cdFx0XHRcdFx0c291cmNlWCArXHJcblx0XHRcdFx0XHQnSCcgK1xyXG5cdFx0XHRcdFx0KHNvdXJjZVkgKyAodGFyZ2V0WSAtIHNvdXJjZVkpIC8gMikgK1xyXG5cdFx0XHRcdFx0J1YnICtcclxuXHRcdFx0XHRcdHRhcmdldFggK1xyXG5cdFx0XHRcdFx0J0gnICtcclxuXHRcdFx0XHRcdHRhcmdldFlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRhY3Rpb25GdW4odmFsKSB7XHJcblx0XHR0aGlzLmFjdGlvbi5lbWl0KHZhbCk7XHJcblx0fVxyXG59XHJcbiJdfQ==