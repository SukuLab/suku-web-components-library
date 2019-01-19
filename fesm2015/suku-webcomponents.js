import { Component, Input, NgModule } from '@angular/core';
import { layout, select } from 'd3';

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
                return d.childrens;
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
}
SukuTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-tree',
                template: "<div class=\"tree\"></div>\n",
                styles: ["/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}/deep/.link{fill:none;stroke:#c2c1c1;stroke-width:2px}/deep/.tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}"]
            }] }
];
SukuTreeComponent.propDecorators = {
    treeDataFromApi: [{ type: Input, args: ['tree-data',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuWebcomponentsModule {
}
SukuWebcomponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SukuTreeComponent],
                imports: [],
                exports: [SukuTreeComponent]
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

export { SukuWebcomponentsModule, SukuTreeComponent as ɵa };

//# sourceMappingURL=suku-webcomponents.js.map