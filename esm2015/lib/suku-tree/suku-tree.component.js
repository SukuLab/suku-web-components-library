/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
export class SukuTreeComponent {
    constructor() {
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
    ngOnChanges() {
        if (this.treeDataFromApi) {
            if (document.getElementById('tree')) {
                /** @type {?} */
                const list = document.getElementById('tree');
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
    }
    /**
     * @return {?}
     */
    constructTree() {
        /** @type {?} */
        const treeData = this.treeDataFromApi;
        this.root = treeData[0];
        this.tree = d3.layout.tree().separation((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => (a.parent === b.parent ? 5 : 5.25))).children((/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            return d.relations;
        }));
        /** @type {?} */
        const nodes = this.tree.nodes(this.root).reverse();
        if (this.relation == 1) {
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.depth > this.max) {
                    this.max = d.depth;
                    console.log("depth", this.max);
                }
                if (d.children) {
                    if (d.children.length > this.maxHeight) {
                        this.maxHeight = d.children.length;
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
            (d) => {
                if (d.depth > this.max) {
                    this.max = d.depth;
                }
                if (d.children) {
                    if (d.children.length > this.maxHeight) {
                        this.maxHeight = d.children.length;
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
            (a, b) => (a.parent === b.parent ? 5 : 5.25)))
                .children((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
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
    }
    /**
     * @return {?}
     */
    drawTree() {
        /** @type {?} */
        const nodes = this.tree.nodes(this.root).reverse();
        /** @type {?} */
        const links = this.tree.links(nodes);
        if (this.relation == 1) {
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (this.max == 0) {
                    d.y = this.width - (this.max + 1) * 220 - d.depth * -270; // reverse tree
                }
                else {
                    d.y = this.width - (this.max + 1) * 250 - d.depth * -270; // reverse tree
                }
            }));
        }
        else {
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                d.y = this.width - 109 - d.depth * 270; // reverse tree
            }));
        }
        /** @type {?} */
        const node = this.svg.selectAll('g.node').data(nodes, (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            return d.id || (d.id = ++this.i); // assign id to nodes
        }));
        /** @type {?} */
        const nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
        }));
        // append line into svg
        node
            .append('line')
            .style('stroke', (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            console.log('d', d);
            if (d.depth === 0) {
                return '#6f3bda';
            }
            else {
                if (this.relation == 1) {
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
        (d) => {
            if (d.assetName.length > 50) {
                return -(this.boxHeight / 2);
            }
            if (d.assetName.length > 23) {
                return -(this.boxHeight / 2);
            }
            if (d.assetName.length > 0) {
                return -(this.boxHeight / 2);
            }
        }))
            .attr('x2', -(this.boxWidth / 2))
            .attr('y2', (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            if (d.assetName.length > 50) {
                return this.boxHeight / 2 + 30;
            }
            if (d.assetName.length > 40) {
                return this.boxHeight / 2 + 30;
            }
            if (d.assetName.length > 23) {
                return this.boxHeight / 2 + 10;
            }
            if (d.assetName.length > 0) {
                return this.boxHeight / 2;
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
            (d) => {
                if (d.assetName.length > 40) {
                    return this.boxHeight + 30;
                }
                else if (d.assetName.length > 23) {
                    return this.boxHeight + 10;
                }
                else {
                    return this.boxHeight;
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
        (d) => {
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
        (d) => {
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
        (d) => {
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
        (d) => {
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
        (d) => {
            return 'asset' + ++this.j;
        }))
            .attr('height', '10')
            .attr('width', '25')
            .attr('fill', 'transparent')
            .on('click', (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            console.log(d);
            if (d.uid) {
                this.dataUID = d.uid;
                this.action.emit(d.uid);
            }
        }));
        this.svgNOde = node
            .append('text')
            .attr('x', (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            return -(this.boxWidth / 10) - 65;
        }))
            .attr('y', (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            return -(this.boxWidth / 35);
        }))
            .style('text-anchor', 'middle')
            .style('fill', '#aaaaaa')
            .attr('font-family', 'sans-serif')
            .text((/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
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
                const text = d3.select(this);
                /** @type {?} */
                const words = text.text().split(/\s+/).reverse();
                /** @type {?} */
                let word;
                /** @type {?} */
                let line = [];
                /** @type {?} */
                let lineNumber = 0;
                /** @type {?} */
                const lineHeight = 1.3;
                // ems
                /** @type {?} */
                const x = text.attr('x');
                /** @type {?} */
                const y = text.attr('y');
                /** @type {?} */
                const dy = 0;
                // parseFloat(text.attr("dy")),
                /** @type {?} */
                let tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em').style('text-anchor', 'start');
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
        const link = this.svg.selectAll('path.link').data(links, (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            this.data = d;
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
        (d) => {
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
        }));
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
                template: "<div id=\"tree\"></div>\n<!-- [ngClass]=\"{'treeRtl': relation == 0, 'treeltr': relation == 1}\" -->",
                styles: ["/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}/deep/#tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}/deep/rect.dot{cursor:pointer!important}"]
            }] }
];
SukuTreeComponent.propDecorators = {
    treeDataFromApi: [{ type: Input, args: ['tree-data',] }],
    relation: [{ type: Input }],
    action: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFPekIsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQVFXLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsY0FBUyxHQUFRLENBQUMsQ0FBQztJQW1XcEIsQ0FBQzs7OztJQTlWQSxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7c0JBQzlCLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsT0FBTyxJ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Q2Ysc0NBQWU7O0lBQ2YsbUNBS0U7O0lBQ0Ysa0NBQW9EOztJQUNwRCxtQ0FBb0Q7O0lBQ3BELGlDQUFVOztJQUNWLGtDQUFjOztJQUNkLHVDQUFlOztJQUNmLGdDQUFhOztJQUNiLGtDQUFXOztJQUNYLHNDQUFtQjs7SUFDbkIsb0NBQVE7O0lBQ1Isb0NBQWE7O0lBQ2IsOEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtdHJlZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS10cmVlLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCd0cmVlLWRhdGEnKSB0cmVlRGF0YUZyb21BcGk7XG5cdEBJbnB1dCgpIHJlbGF0aW9uO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR0cmVlO1xuXHRyb290O1xuXHRpO1xuXHRzdmc7XG5cdGJveFdpZHRoID0gMTgzO1xuXHRib3hIZWlnaHQgPSA1NTtcblx0bWFyZ2luID0ge1xuXHRcdHRvcDogNTAsXG5cdFx0cmlnaHQ6IDUsXG5cdFx0Ym90dG9tOiA1MCxcblx0XHRsZWZ0OiA1XG5cdH07XG5cdHdpZHRoID0gMTA2MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcblx0aGVpZ2h0ID0gNTEwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHRkYXRhOiBhbnk7XG5cdHRlc3RkOiBudW1iZXI7XG5cdGNoaWxkQ291bnQgPSAwO1xuXHRtYXg6IGFueSA9IDA7XG5cdHRyZWUxOiBhbnk7XG5cdG1heEhlaWdodDogYW55ID0gMDtcblx0ZGF0YVVJRDtcblx0c3ZnTk9kZTogYW55O1xuXHRqOiBhbnk7XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMudHJlZURhdGFGcm9tQXBpKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZWUnKSkge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZWUnKTtcblx0XHRcdFx0d2hpbGUgKGxpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdCAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMud2lkdGggPSAwO1xuXHRcdFx0XHR0aGlzLmhlaWdodCA9IDA7XG5cdFx0XHRcdHRoaXMubWF4ID0gMDtcblx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSAwO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb25zdHJ1Y3RUcmVlKCk7XG5cdFx0XHRjb25zb2xlLmxvZygndHJlZSBjYWxsZWQnKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RUcmVlKCkge1xuXHRcdGNvbnN0IHRyZWVEYXRhID0gdGhpcy50cmVlRGF0YUZyb21BcGk7XG5cdFx0dGhpcy5yb290ID0gdHJlZURhdGFbMF07XG5cdFx0dGhpcy50cmVlID0gZDMubGF5b3V0LnRyZWUoKS5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKS5jaGlsZHJlbigoZCkgPT4ge1xuXHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xuXHRcdH0pO1xuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xuXHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuZGVwdGggPiB0aGlzLm1heCkge1xuXHRcdFx0XHRcdHRoaXMubWF4ID0gZC5kZXB0aDtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImRlcHRoXCIsIHRoaXMubWF4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChkLmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMubWF4SGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1heEhlaWdodCA9IGQuY2hpbGRyZW4ubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLndpZHRoID0gKHRoaXMubWF4ICsgMSkgKiAzMjAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG5cdFx0XHR0aGlzLmhlaWdodCA9ICh0aGlzLm1heEhlaWdodCArIDEpICogMTU1IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG5cdFx0XHRcdGlmIChkLmRlcHRoID4gdGhpcy5tYXgpIHtcblx0XHRcdFx0XHR0aGlzLm1heCA9IGQuZGVwdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoZC5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSBkLmNoaWxkcmVuLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy53aWR0aCA9ICh0aGlzLm1heCArIDEpICogMjcwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAodGhpcy5tYXhIZWlnaHQgKyAxKSAqIDE1NSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ3dpZHRoJywgdGhpcy53aWR0aCwgdGhpcy5tYXhIZWlnaHQpO1xuXHRcdHRoaXMuaSA9IDA7XG5cdFx0dGhpcy5qID0gMDtcblx0XHR0aGlzLnRlc3RkID0gMDtcblx0XHRpZiAodHJlZURhdGEpIHtcblx0XHRcdHRoaXMudHJlZSA9IGQzLmxheW91dFxuXHRcdFx0XHQudHJlZSgpXG5cdFx0XHRcdC5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKVxuXHRcdFx0XHQuY2hpbGRyZW4oKGQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZC5yZWxhdGlvbnM7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zaXplKFsgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGggXSk7XG5cblx0XHRcdHRoaXMuc3ZnID0gZDNcblx0XHRcdFx0LnNlbGVjdCgnI3RyZWUnKVxuXHRcdFx0XHQuaW5zZXJ0KCdwJylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ3RyZWVkYXRhJylcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcblx0XHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuXHRcdFx0XHQuYXBwZW5kKCdzdmcnKVxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxuXHRcdFx0XHQuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG5cdFx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJyk7XG5cblx0XHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xuXHRcdFx0dGhpcy5kcmF3VHJlZSgpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXdUcmVlKCkge1xuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xuXHRcdGNvbnN0IGxpbmtzID0gdGhpcy50cmVlLmxpbmtzKG5vZGVzKTtcblxuXHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0aWYodGhpcy5tYXggPT0gMCkge1xuXHRcdFx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAodGhpcy5tYXggKyAxICkgKiAyMjAgLSBkLmRlcHRoICogLTI3MDsgLy8gcmV2ZXJzZSB0cmVlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZC55ID0gdGhpcy53aWR0aCAtICh0aGlzLm1heCArIDEgKSAqIDI1MCAtIGQuZGVwdGggKiAtMjcwOyAvLyByZXZlcnNlIHRyZWVcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0ZC55ID0gdGhpcy53aWR0aCAtIDEwOSAtIGQuZGVwdGggKiAyNzA7IC8vIHJldmVyc2UgdHJlZVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgnZy5ub2RlJykuZGF0YShub2RlcywgKGQpID0+IHtcblx0XHRcdHJldHVybiBkLmlkIHx8IChkLmlkID0gKyt0aGlzLmkpOyAvLyBhc3NpZ24gaWQgdG8gbm9kZXNcblx0XHR9KTtcblxuXHRcdGNvbnN0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlJykuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcblx0XHRcdHJldHVybiAndHJhbnNsYXRlKCcgKyBkLnkgKyAnLCcgKyBkLnggKyAnKSc7IC8vIGFwcGVuZCBnIHdpdGggY2xhc3MgYXR0clxuXHRcdH0pO1xuXG5cdFx0Ly8gYXBwZW5kIGxpbmUgaW50byBzdmdcblx0XHRub2RlXG5cdFx0XHQuYXBwZW5kKCdsaW5lJylcblx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgKGQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2QnLCBkKTtcblx0XHRcdFx0aWYgKGQuZGVwdGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gJyM2ZjNiZGEnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnIzNmZGJlZic7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnI2I4Y2UyYic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3gxJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXG5cdFx0XHQuYXR0cigneTEnLCAoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3gyJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXG5cdFx0XHQuYXR0cigneTInLCAoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyICsgMzA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMiArIDMwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDIgKyAxMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJzEwJyk7XG5cblx0XHQvLyBhcHBlbmQgcmVjdCBpbnRvIHN2Z1xuXG5cdFx0bm9kZVxuXHRcdFx0LmFwcGVuZCgncmVjdCcpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdHg6IC0odGhpcy5ib3hXaWR0aCAvIDIpLFxuXHRcdFx0XHR5OiAtKHRoaXMuYm94SGVpZ2h0IC8gMiksXG5cdFx0XHRcdHdpZHRoOiB0aGlzLmJveFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IChkKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgKyAzMDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDIzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgKyAxMDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3doaXRlJylcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnLjUnKVxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjYzJjMWMxYWInKTtcblxuXHRcdG5vZGUuaW5zZXJ0KCdnJywgJ2cnKS5hdHRyKCdjbGFzcycsICdkb3QnKTtcblx0XHQvLyBhcHBlbmQgZG90cyB0byByZWN0XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXG5cdFx0XHQuYXR0cigncicsIDIuMilcblx0XHRcdC5hdHRyKCdjeCcsIDY1KVxuXHRcdFx0LmF0dHIoJ2N5JywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiA0ODtcblx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyODtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gMTc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXG5cdFx0XHQuYXR0cigncicsIDIuMilcblx0XHRcdC5hdHRyKCdjeCcsIDcyKVxuXHRcdFx0LmF0dHIoJ2N5JywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiA0ODtcblx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyODtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gMTc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ2NpcmNsZScpXG5cdFx0XHQuYXR0cigncicsIDIuMilcblx0XHRcdC5hdHRyKCdjeCcsIDc5KVxuXHRcdFx0LmF0dHIoJ2N5JywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiA0ODtcblx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyODtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gMTc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICcjYjZiNmI2Jyk7XG5cdFx0dGhpcy5zdmdcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90Jylcblx0XHRcdC5pbnNlcnQoJ3JlY3QnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2RvdCcpXG5cdFx0XHQuYXR0cigneCcsICc2MCcpXG5cdFx0XHQuYXR0cigneScsICAoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0XHRyZXR1cm4gNDU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDQwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDMwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdHJldHVybiAyMztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHJldHVybiAxNTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdpZCcsIChkKSA9PiB7XG5cdFx0XHRcdHJldHVybiAnYXNzZXQnICsgKyt0aGlzLmo7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsICcxMCcpXG5cdFx0XHQuYXR0cignd2lkdGgnLCAnMjUnKVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuXHRcdFx0Lm9uKCdjbGljaycsIChkKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGQpO1xuXHRcdFx0XHRpZiAoZC51aWQpIHtcblx0XHRcdFx0XHR0aGlzLmRhdGFVSUQgPSBkLnVpZDtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbi5lbWl0KGQudWlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN2Z05PZGUgPSBub2RlXG5cdFx0XHQuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCd4JywgKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDEwKSAtIDY1O1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCd5JywgKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDM1KTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnI2FhYWFhYScpXG5cdFx0XHQuYXR0cignZm9udC1mYW1pbHknLCAnc2Fucy1zZXJpZicpXG5cdFx0XHQudGV4dCgoZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZC5hc3NldE5hbWU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhbGwoZnVuY3Rpb24gd3JhcCh0ZXh0LCB3aWR0aCkge1xuXHRcdFx0XHR0ZXh0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3dvcmQgdGV6dCBpbmZvciBlYWNoJywgZDMuc2VsZWN0KHRoaXMpKTtcblx0XHRcdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWNvbnN0XG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGQzLnNlbGVjdCh0aGlzKTtcblx0XHRcdFx0XHRjb25zdCB3b3JkcyA9IHRleHQudGV4dCgpLnNwbGl0KC9cXHMrLykucmV2ZXJzZSgpO1xuXHRcdFx0XHRcdGxldCB3b3JkO1xuXHRcdFx0XHRcdGxldCBsaW5lID0gW107XG5cdFx0XHRcdFx0bGV0IGxpbmVOdW1iZXIgPSAwO1xuXHRcdFx0XHRcdGNvbnN0IGxpbmVIZWlnaHQgPSAxLjM7IC8vIGVtc1xuXHRcdFx0XHRcdGNvbnN0IHggPSB0ZXh0LmF0dHIoJ3gnKTtcblx0XHRcdFx0XHRjb25zdCB5ID0gdGV4dC5hdHRyKCd5Jyk7XG5cdFx0XHRcdFx0Y29uc3QgZHkgPSAwOyAvLyBwYXJzZUZsb2F0KHRleHQuYXR0cihcImR5XCIpKSxcblx0XHRcdFx0XHRsZXQgdHNwYW4gPSB0ZXh0LnRleHQobnVsbCkuYXBwZW5kKCd0c3BhbicpLmF0dHIoJ3gnLCB4KS5hdHRyKCd5JywgeSkuYXR0cignZHknLCBkeSArICdlbScpLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpO1xuXHRcdFx0XHRcdHdoaWxlICgod29yZCA9IHdvcmRzLnBvcCgpKSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3dvcmQnLCB3b3JkKTtcblx0XHRcdFx0XHRcdGxpbmUucHVzaCh3b3JkKTtcblx0XHRcdFx0XHRcdHRzcGFuLnRleHQobGluZS5qb2luKCcgJykpO1xuXHRcdFx0XHRcdFx0aWYgKHRzcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IDE3MCkge1xuXHRcdFx0XHRcdFx0XHRsaW5lLnBvcCgpO1xuXHRcdFx0XHRcdFx0XHR0c3Bhbi50ZXh0KGxpbmUuam9pbignICcpKTtcblx0XHRcdFx0XHRcdFx0bGluZSA9IFsgd29yZCBdO1xuXHRcdFx0XHRcdFx0XHR0c3BhbiA9IHRleHRcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKCd0c3BhbicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3gnLCB4KVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd5JywgeSlcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignZHknLCArK2xpbmVOdW1iZXIgKiBsaW5lSGVpZ2h0ICsgZHkgKyAnZW0nKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KHdvcmQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdGNvbnN0IGxpbmsgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ3BhdGgubGluaycpLmRhdGEobGlua3MsIChkKSA9PiB7XG5cdFx0XHR0aGlzLmRhdGEgPSBkO1xuXHRcdFx0cmV0dXJuIGQudGFyZ2V0LmlkO1xuXHRcdH0pO1xuXG5cdFx0Ly8gYXBwZW5kIGxpbmsgaW50byBzdmdcblx0XHRsaW5rXG5cdFx0XHQuZW50ZXIoKVxuXHRcdFx0Lmluc2VydCgncGF0aCcsICdnJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdsaW5rJylcblx0XHRcdC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuXHRcdFx0LmF0dHIoJ3N0cm9rZScsICcjYzJjMWMxJylcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMicpXG5cdFx0XHQuYXR0cignc2hhcGUtcmVuZGVyaW5nJywgJ2dlb21ldHJpY1ByZWNpc2lvbiAnKVxuXHRcdFx0LmF0dHIoJ2QnLCAoZCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzb3VyY2VYID0gZC5zb3VyY2UueCxcblx0XHRcdFx0XHRzb3VyY2VZID0gZC5zb3VyY2UueSArIHRoaXMuYm94V2lkdGggLyAyLFxuXHRcdFx0XHRcdHRhcmdldFggPSBkLnRhcmdldC54LFxuXHRcdFx0XHRcdHRhcmdldFkgPSBkLnRhcmdldC55IC0gdGhpcy5ib3hXaWR0aCAvIDI7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0J00nICtcblx0XHRcdFx0XHRzb3VyY2VZICtcblx0XHRcdFx0XHQnLCcgK1xuXHRcdFx0XHRcdHNvdXJjZVggK1xuXHRcdFx0XHRcdCdIJyArXG5cdFx0XHRcdFx0KHNvdXJjZVkgKyAodGFyZ2V0WSAtIHNvdXJjZVkpIC8gMikgK1xuXHRcdFx0XHRcdCdWJyArXG5cdFx0XHRcdFx0dGFyZ2V0WCArXG5cdFx0XHRcdFx0J0gnICtcblx0XHRcdFx0XHR0YXJnZXRZXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0YWN0aW9uRnVuKHZhbCkge1xuXHRcdHRoaXMuYWN0aW9uLmVtaXQodmFsKTtcblx0fVxufVxuIl19