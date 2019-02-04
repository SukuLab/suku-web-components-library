/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
export class SukuTreeComponent {
    constructor() {
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
    ngOnChanges() {
        if (this.treeDataFromApi) {
            this.constructTree();
        }
    }
    /**
     * @return {?}
     */
    constructTree() {
        /** @type {?} */
        const treeData = this.treeDataFromApi;
        this.root = treeData[0];
        this.tree = d3.layout.tree().separation((a, b) => (a.parent === b.parent ? 5 : 5.25)).children((d) => {
            return d.relations;
        });
        /** @type {?} */
        const nodes = this.tree.nodes(this.root).reverse();
        nodes.forEach((d) => {
            // console.log('width', d);
            if (d.depth > this.max) {
                this.max = d.depth;
                // console.log('max', this.max);
            }
            if (d.parent.children) {
                if (d.parent.children.length > this.maxHeight) {
                    this.maxHeight = d.parent.children.length;
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
                .separation((a, b) => (a.parent === b.parent ? 5 : 5.25))
                .children((d) => {
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
            .on('click', (d) => {
            console.log(d);
            if (d.uid) {
                this.dataUID = d.uid;
                this.action.emit(d.uid);
            }
        });
        node
            .append('text')
            .attr('x', (d) => {
            return -(this.boxWidth / 20);
        })
            .attr('y', (d) => {
            return this.boxWidth / 60;
        })
            .style('text-anchor', 'middle')
            .style('fill', '#aaaaaa')
            .attr('font-family', 'sans-serif')
            .on('click', (d) => {
            if (d.uid) {
                console.log('d', d.uid);
                this.dataUID = d.uid;
                this.action.emit(d.uid);
            }
        })
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
            .attr('fill', 'none')
            .attr('stroke', '#c2c1c1')
            .attr('stroke-width', '2')
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
     * @param {?} val
     * @return {?}
     */
    actionFun(val) {
        this.action.emit(val);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFPekIsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU9XLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsY0FBUyxHQUFRLENBQUMsQ0FBQztJQW1OcEIsQ0FBQzs7OztJQWhOQSxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7SUFFRCxhQUFhOztjQUNOLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZTtRQUNyQyxJQUFJLENBQUMs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QUFDOzs7WUE3T0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQ0FBeUM7O2FBRXpDOzs7OEJBRUMsS0FBSyxTQUFDLFdBQVc7cUJBQ2pCLE1BQU07Ozs7SUFEUCw0Q0FBb0M7O0lBQ3BDLG1DQUFzQzs7SUFDdEMsaUNBQUs7O0lBQ0wsaUNBQUs7O0lBQ0wsOEJBQUU7O0lBQ0YsZ0NBQUk7O0lBQ0oscUNBQWU7O0lBQ2Ysc0NBQWU7O0lBQ2YsbUNBS0U7O0lBQ0Ysa0NBQW9EOztJQUNwRCxtQ0FBb0Q7O0lBQ3BELGlDQUFVOztJQUNWLGtDQUFjOztJQUNkLHVDQUFlOztJQUNmLGdDQUFhOztJQUNiLGtDQUFXOztJQUNYLHNDQUFtQjs7SUFDbkIsb0NBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS10cmVlJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS10cmVlLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblx0QElucHV0KCd0cmVlLWRhdGEnKSB0cmVlRGF0YUZyb21BcGk7XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHR0cmVlO1xyXG5cdHJvb3Q7XHJcblx0aTtcclxuXHRzdmc7XHJcblx0Ym94V2lkdGggPSAxODA7XHJcblx0Ym94SGVpZ2h0ID0gNTU7XHJcblx0bWFyZ2luID0ge1xyXG5cdFx0dG9wOiA1MCxcclxuXHRcdHJpZ2h0OiA1LFxyXG5cdFx0Ym90dG9tOiA1MCxcclxuXHRcdGxlZnQ6IDVcclxuXHR9O1xyXG5cdHdpZHRoID0gMTA2MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuXHRoZWlnaHQgPSA1MTAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcblx0ZGF0YTogYW55O1xyXG5cdHRlc3RkOiBudW1iZXI7XHJcblx0Y2hpbGRDb3VudCA9IDA7XHJcblx0bWF4OiBhbnkgPSAwO1xyXG5cdHRyZWUxOiBhbnk7XHJcblx0bWF4SGVpZ2h0OiBhbnkgPSAwO1xyXG5cdGRhdGFVSUQ7XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0aWYgKHRoaXMudHJlZURhdGFGcm9tQXBpKSB7XHJcblx0XHRcdHRoaXMuY29uc3RydWN0VHJlZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0VHJlZSgpIHtcclxuXHRcdGNvbnN0IHRyZWVEYXRhID0gdGhpcy50cmVlRGF0YUZyb21BcGk7XHJcblx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcclxuXHRcdHRoaXMudHJlZSA9IGQzLmxheW91dC50cmVlKCkuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSkuY2hpbGRyZW4oKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcclxuXHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3dpZHRoJywgZCk7XHJcblx0XHRcdGlmIChkLmRlcHRoID4gdGhpcy5tYXgpIHtcclxuXHRcdFx0XHR0aGlzLm1heCA9IGQuZGVwdGg7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21heCcsIHRoaXMubWF4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZC5wYXJlbnQuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRpZiAoZC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5tYXhIZWlnaHQpIHtcclxuXHRcdFx0XHRcdHRoaXMubWF4SGVpZ2h0ID0gZC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZHRoID0gKHRoaXMubWF4ICsgMSkgKiAyNzAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcblx0XHR0aGlzLmhlaWdodCA9ICh0aGlzLm1heEhlaWdodCArIDEpICogMTIwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xyXG5cdFx0Y29uc29sZS5sb2coJ3dpZHRoJywgdGhpcy53aWR0aCk7XHJcblx0XHR0aGlzLmkgPSAwO1xyXG5cdFx0dGhpcy50ZXN0ZCA9IDA7XHJcblx0XHRpZiAodHJlZURhdGEpIHtcclxuXHRcdFx0dGhpcy50cmVlID0gZDMubGF5b3V0XHJcblx0XHRcdFx0LnRyZWUoKVxyXG5cdFx0XHRcdC5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKVxyXG5cdFx0XHRcdC5jaGlsZHJlbigoZCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnNpemUoWyB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCBdKTtcclxuXHJcblx0XHRcdHRoaXMuc3ZnID0gZDNcclxuXHRcdFx0XHQuc2VsZWN0KCcjdHJlZScpXHJcblx0XHRcdFx0Lmluc2VydCgncCcpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ3RyZWVkYXRhJylcclxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxyXG5cdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcclxuXHRcdFx0XHQuYXBwZW5kKCdzdmcnKVxyXG5cdFx0XHRcdC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5yaWdodCArIHRoaXMubWFyZ2luLmxlZnQpXHJcblx0XHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxyXG5cdFx0XHRcdC5hcHBlbmQoJ2cnKVxyXG5cdFx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcclxuXHJcblx0XHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xyXG5cdFx0XHR0aGlzLmRyYXdUcmVlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkcmF3VHJlZSgpIHtcclxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xyXG5cdFx0Y29uc3QgbGlua3MgPSB0aGlzLnRyZWUubGlua3Mobm9kZXMpO1xyXG5cclxuXHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcclxuXHRcdFx0ZC55ID0gdGhpcy53aWR0aCAtIDEwOSAtIGQuZGVwdGggKiAyNzA7IC8vIHJldmVyc2UgdHJlZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgnZy5ub2RlJykuZGF0YShub2RlcywgKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuIGQuaWQgfHwgKGQuaWQgPSArK3RoaXMuaSk7IC8vIGFzc2lnbiBpZCB0byBub2Rlc1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ25vZGUnKS5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gJ3RyYW5zbGF0ZSgnICsgZC55ICsgJywnICsgZC54ICsgJyknOyAvLyBhcHBlbmQgZyB3aXRoIGNsYXNzIGF0dHJcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGFwcGVuZCBsaW5lIGludG8gc3ZnXHJcblx0XHRub2RlXHJcblx0XHRcdC5hcHBlbmQoJ2xpbmUnKVxyXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZScsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2QnLCBkKTtcclxuXHRcdFx0XHRpZiAoZC5kZXB0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICcjNmYzYmRhJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGlmIChkLmRlcHRoID09PSAxKSB7XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gJyMzZmRiZWYnO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyBpZiAoZC5kZXB0aCA9PT0gMikge1xyXG5cdFx0XHRcdC8vIFx0cmV0dXJuICcjYjhjZTJiJztcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRyZXR1cm4gJyMzZmRiZWYnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ3gxJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXHJcblx0XHRcdC5hdHRyKCd5MScsIC0odGhpcy5ib3hIZWlnaHQgLyAyKSlcclxuXHRcdFx0LmF0dHIoJ3gyJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXHJcblx0XHRcdC5hdHRyKCd5MicsIHRoaXMuYm94SGVpZ2h0IC8gMilcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcxMCcpO1xyXG5cclxuXHRcdC8vIGFwcGVuZCByZWN0IGludG8gc3ZnXHJcblxyXG5cdFx0bm9kZVxyXG5cdFx0XHQuYXBwZW5kKCdyZWN0JylcclxuXHRcdFx0LmF0dHIoe1xyXG5cdFx0XHRcdHg6IC0odGhpcy5ib3hXaWR0aCAvIDIpLFxyXG5cdFx0XHRcdHk6IC0odGhpcy5ib3hIZWlnaHQgLyAyKSxcclxuXHRcdFx0XHR3aWR0aDogdGhpcy5ib3hXaWR0aCxcclxuXHRcdFx0XHRoZWlnaHQ6IHRoaXMuYm94SGVpZ2h0XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcuOScpXHJcblx0XHRcdC5hdHRyKCdzdHJva2UnLCAnI2YyZjJmMicpO1xyXG5cclxuXHRcdG5vZGUuaW5zZXJ0KCdnJywgJ2cnKS5hdHRyKCdjbGFzcycsICdkb3QnKTtcclxuXHRcdC8vIGFwcGVuZCBkb3RzIHRvIHJlY3RcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDY2KVxyXG5cdFx0XHQuYXR0cignY3knLCAxOSlcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xyXG5cdFx0dGhpcy5zdmdcclxuXHRcdFx0LnNlbGVjdEFsbCgnZy5kb3QnKVxyXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxyXG5cdFx0XHQuYXR0cigncicsIDIuMilcclxuXHRcdFx0LmF0dHIoJ2N4JywgNzIpXHJcblx0XHRcdC5hdHRyKCdjeScsIDE5KVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XHJcblx0XHR0aGlzLnN2Z1xyXG5cdFx0XHQuc2VsZWN0QWxsKCdnLmRvdCcpXHJcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXHJcblx0XHRcdC5hdHRyKCdyJywgMi4yKVxyXG5cdFx0XHQuYXR0cignY3gnLCA3OClcclxuXHRcdFx0LmF0dHIoJ2N5JywgMTkpXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgncmVjdCcpXHJcblx0XHRcdC5hdHRyKCdjbGFzcycsICdkb3QnKVxyXG5cdFx0XHQuYXR0cigneCcsICc2MCcpXHJcblx0XHRcdC5hdHRyKCd5JywgJzE1JylcclxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsICcxMCcpXHJcblx0XHRcdC5hdHRyKCd3aWR0aCcsICcyNScpXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3RyYW5zcGFyZW50JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZCk7XHJcblx0XHRcdFx0aWYgKGQudWlkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFVSUQgPSBkLnVpZDtcclxuXHRcdFx0XHRcdHRoaXMuYWN0aW9uLmVtaXQoZC51aWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0bm9kZVxyXG5cdFx0XHQuYXBwZW5kKCd0ZXh0JylcclxuXHRcdFx0LmF0dHIoJ3gnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAtKHRoaXMuYm94V2lkdGggLyAyMCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCd5JywgKGQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hXaWR0aCAvIDYwO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcblx0XHRcdC5zdHlsZSgnZmlsbCcsICcjYWFhYWFhJylcclxuXHRcdFx0LmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ3NhbnMtc2VyaWYnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgKGQpID0+IHtcclxuXHRcdFx0XHRpZiAoZC51aWQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdkJywgZC51aWQpO1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhVUlEID0gZC51aWQ7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGlvbi5lbWl0KGQudWlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC50ZXh0KChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGQucHJvZHVjdC5uYW1lO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBsaW5rID0gdGhpcy5zdmcuc2VsZWN0QWxsKCdwYXRoLmxpbmsnKS5kYXRhKGxpbmtzLCAoZCkgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkO1xyXG5cdFx0XHRyZXR1cm4gZC50YXJnZXQuaWQ7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBhcHBlbmQgbGluayBpbnRvIHN2Z1xyXG5cdFx0bGlua1xyXG5cdFx0XHQuZW50ZXIoKVxyXG5cdFx0XHQuaW5zZXJ0KCdwYXRoJywgJ2cnKVxyXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnbGluaycpXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlJywgJyNjMmMxYzEnKVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJzInKVxyXG5cdFx0XHQuYXR0cignc2hhcGUtcmVuZGVyaW5nJywgJ2NyaXNwRWRnZXMnKVxyXG5cdFx0XHQuYXR0cignZCcsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc291cmNlWCA9IGQuc291cmNlLngsXHJcblx0XHRcdFx0XHRzb3VyY2VZID0gZC5zb3VyY2UueSArIHRoaXMuYm94V2lkdGggLyAyLFxyXG5cdFx0XHRcdFx0dGFyZ2V0WCA9IGQudGFyZ2V0LngsXHJcblx0XHRcdFx0XHR0YXJnZXRZID0gZC50YXJnZXQueSAtIHRoaXMuYm94V2lkdGggLyAyO1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQnTScgK1xyXG5cdFx0XHRcdFx0c291cmNlWSArXHJcblx0XHRcdFx0XHQnLCcgK1xyXG5cdFx0XHRcdFx0c291cmNlWCArXHJcblx0XHRcdFx0XHQnSCcgK1xyXG5cdFx0XHRcdFx0KHNvdXJjZVkgKyAodGFyZ2V0WSAtIHNvdXJjZVkpIC8gMikgK1xyXG5cdFx0XHRcdFx0J1YnICtcclxuXHRcdFx0XHRcdHRhcmdldFggK1xyXG5cdFx0XHRcdFx0J0gnICtcclxuXHRcdFx0XHRcdHRhcmdldFlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFjdGlvbkZ1bih2YWwpIHtcclxuXHRcdHRoaXMuYWN0aW9uLmVtaXQodmFsKTtcclxuXHR9XHJcbn1cclxuIl19