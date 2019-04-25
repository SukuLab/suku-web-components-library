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
                template: "<div id=\"tree\"></div>\r\n<!-- [ngClass]=\"{'treeRtl': relation == 0, 'treeltr': relation == 1}\" -->",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFPekIsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQVFXLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3BELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsY0FBUyxHQUFRLENBQUMsQ0FBQztJQW1XcEIsQ0FBQzs7OztJQTlWQSxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7c0JBQzlCLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsT0FBTyxJ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Q2Ysc0NBQWU7O0lBQ2YsbUNBS0U7O0lBQ0Ysa0NBQW9EOztJQUNwRCxtQ0FBb0Q7O0lBQ3BELGlDQUFVOztJQUNWLGtDQUFjOztJQUNkLHVDQUFlOztJQUNmLGdDQUFhOztJQUNiLGtDQUFXOztJQUNYLHNDQUFtQjs7SUFDbkIsb0NBQVE7O0lBQ1Isb0NBQWE7O0lBQ2IsOEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS10cmVlJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS10cmVlLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblx0QElucHV0KCd0cmVlLWRhdGEnKSB0cmVlRGF0YUZyb21BcGk7XHJcblx0QElucHV0KCkgcmVsYXRpb247XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHR0cmVlO1xyXG5cdHJvb3Q7XHJcblx0aTtcclxuXHRzdmc7XHJcblx0Ym94V2lkdGggPSAxODM7XHJcblx0Ym94SGVpZ2h0ID0gNTU7XHJcblx0bWFyZ2luID0ge1xyXG5cdFx0dG9wOiA1MCxcclxuXHRcdHJpZ2h0OiA1LFxyXG5cdFx0Ym90dG9tOiA1MCxcclxuXHRcdGxlZnQ6IDVcclxuXHR9O1xyXG5cdHdpZHRoID0gMTA2MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcclxuXHRoZWlnaHQgPSA1MTAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcblx0ZGF0YTogYW55O1xyXG5cdHRlc3RkOiBudW1iZXI7XHJcblx0Y2hpbGRDb3VudCA9IDA7XHJcblx0bWF4OiBhbnkgPSAwO1xyXG5cdHRyZWUxOiBhbnk7XHJcblx0bWF4SGVpZ2h0OiBhbnkgPSAwO1xyXG5cdGRhdGFVSUQ7XHJcblx0c3ZnTk9kZTogYW55O1xyXG5cdGo6IGFueTtcclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRpZiAodGhpcy50cmVlRGF0YUZyb21BcGkpIHtcclxuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmVlJykpIHtcclxuXHRcdFx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZWUnKTtcclxuXHRcdFx0XHR3aGlsZSAobGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdFx0XHQgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy53aWR0aCA9IDA7XHJcblx0XHRcdFx0dGhpcy5oZWlnaHQgPSAwO1xyXG5cdFx0XHRcdHRoaXMubWF4ID0gMDtcclxuXHRcdFx0XHR0aGlzLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jb25zdHJ1Y3RUcmVlKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd0cmVlIGNhbGxlZCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0VHJlZSgpIHtcclxuXHRcdGNvbnN0IHRyZWVEYXRhID0gdGhpcy50cmVlRGF0YUZyb21BcGk7XHJcblx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcclxuXHRcdHRoaXMudHJlZSA9IGQzLmxheW91dC50cmVlKCkuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSkuY2hpbGRyZW4oKGQpID0+IHtcclxuXHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcclxuXHRcdGlmICh0aGlzLnJlbGF0aW9uID09IDEpIHtcclxuXHRcdFx0bm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChkLmRlcHRoID4gdGhpcy5tYXgpIHtcclxuXHRcdFx0XHRcdHRoaXMubWF4ID0gZC5kZXB0aDtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZGVwdGhcIiwgdGhpcy5tYXgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdFx0aWYgKGQuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5tYXhIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSBkLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLndpZHRoID0gKHRoaXMubWF4ICsgMSkgKiAzMjAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcblx0XHRcdHRoaXMuaGVpZ2h0ID0gKHRoaXMubWF4SGVpZ2h0ICsgMSkgKiAxNTUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuZGVwdGggPiB0aGlzLm1heCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXggPSBkLmRlcHRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdFx0aWYgKGQuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5tYXhIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSBkLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLndpZHRoID0gKHRoaXMubWF4ICsgMSkgKiAyNzAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XHJcblx0XHRcdHRoaXMuaGVpZ2h0ID0gKHRoaXMubWF4SGVpZ2h0ICsgMSkgKiAxNTUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZygnd2lkdGgnLCB0aGlzLndpZHRoLCB0aGlzLm1heEhlaWdodCk7XHJcblx0XHR0aGlzLmkgPSAwO1xyXG5cdFx0dGhpcy5qID0gMDtcclxuXHRcdHRoaXMudGVzdGQgPSAwO1xyXG5cdFx0aWYgKHRyZWVEYXRhKSB7XHJcblx0XHRcdHRoaXMudHJlZSA9IGQzLmxheW91dFxyXG5cdFx0XHRcdC50cmVlKClcclxuXHRcdFx0XHQuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSlcclxuXHRcdFx0XHQuY2hpbGRyZW4oKGQpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBkLnJlbGF0aW9ucztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zaXplKFsgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGggXSk7XHJcblxyXG5cdFx0XHR0aGlzLnN2ZyA9IGQzXHJcblx0XHRcdFx0LnNlbGVjdCgnI3RyZWUnKVxyXG5cdFx0XHRcdC5pbnNlcnQoJ3AnKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICd0cmVlZGF0YScpXHJcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcclxuXHRcdFx0XHQuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXHJcblx0XHRcdFx0LmFwcGVuZCgnc3ZnJylcclxuXHRcdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ucmlnaHQgKyB0aGlzLm1hcmdpbi5sZWZ0KVxyXG5cdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcclxuXHRcdFx0XHQuYXBwZW5kKCdnJylcclxuXHRcdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJyk7XHJcblxyXG5cdFx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcclxuXHRcdFx0dGhpcy5kcmF3VHJlZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZHJhd1RyZWUoKSB7XHJcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcclxuXHRcdGNvbnN0IGxpbmtzID0gdGhpcy50cmVlLmxpbmtzKG5vZGVzKTtcclxuXHJcblx0XHRpZiAodGhpcy5yZWxhdGlvbiA9PSAxKSB7XHJcblx0XHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcclxuXHRcdFx0XHRpZih0aGlzLm1heCA9PSAwKSB7XHJcblx0XHRcdFx0XHRkLnkgPSB0aGlzLndpZHRoIC0gKHRoaXMubWF4ICsgMSApICogMjIwIC0gZC5kZXB0aCAqIC0yNzA7IC8vIHJldmVyc2UgdHJlZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkLnkgPSB0aGlzLndpZHRoIC0gKHRoaXMubWF4ICsgMSApICogMjUwIC0gZC5kZXB0aCAqIC0yNzA7IC8vIHJldmVyc2UgdHJlZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XHJcblx0XHRcdFx0ZC55ID0gdGhpcy53aWR0aCAtIDEwOSAtIGQuZGVwdGggKiAyNzA7IC8vIHJldmVyc2UgdHJlZVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBub2RlID0gdGhpcy5zdmcuc2VsZWN0QWxsKCdnLm5vZGUnKS5kYXRhKG5vZGVzLCAoZCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsrdGhpcy5pKTsgLy8gYXNzaWduIGlkIHRvIG5vZGVzXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbm9kZScpLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiB7XHJcblx0XHRcdHJldHVybiAndHJhbnNsYXRlKCcgKyBkLnkgKyAnLCcgKyBkLnggKyAnKSc7IC8vIGFwcGVuZCBnIHdpdGggY2xhc3MgYXR0clxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIGxpbmUgaW50byBzdmdcclxuXHRcdG5vZGVcclxuXHRcdFx0LmFwcGVuZCgnbGluZScpXHJcblx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgKGQpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZCcsIGQpO1xyXG5cdFx0XHRcdGlmIChkLmRlcHRoID09PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJyM2ZjNiZGEnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5yZWxhdGlvbiA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAnIzNmZGJlZic7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJyNiOGNlMmInO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ3gxJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXHJcblx0XHRcdC5hdHRyKCd5MScsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcclxuXHRcdFx0XHRcdHJldHVybiAtKHRoaXMuYm94SGVpZ2h0IC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ3gyJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXHJcblx0XHRcdC5hdHRyKCd5MicsIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyICsgMzA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMiArIDMwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDIgKyAxMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJzEwJyk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIHJlY3QgaW50byBzdmdcclxuXHJcblx0XHRub2RlXHJcblx0XHRcdC5hcHBlbmQoJ3JlY3QnKVxyXG5cdFx0XHQuYXR0cih7XHJcblx0XHRcdFx0eDogLSh0aGlzLmJveFdpZHRoIC8gMiksXHJcblx0XHRcdFx0eTogLSh0aGlzLmJveEhlaWdodCAvIDIpLFxyXG5cdFx0XHRcdHdpZHRoOiB0aGlzLmJveFdpZHRoLFxyXG5cdFx0XHRcdGhlaWdodDogKGQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgKyAzMDtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0ICsgMTA7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnLjUnKVxyXG5cdFx0XHQuYXR0cignc3Ryb2tlJywgJyNjMmMxYzFhYicpO1xyXG5cclxuXHRcdG5vZGUuaW5zZXJ0KCdnJywgJ2cnKS5hdHRyKCdjbGFzcycsICdkb3QnKTtcclxuXHRcdC8vIGFwcGVuZCBkb3RzIHRvIHJlY3RcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDY1KVxyXG5cdFx0XHQuYXR0cignY3knLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0ODtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDIzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMjg7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAxNztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDcyKVxyXG5cdFx0XHQuYXR0cignY3knLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0ODtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDIzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMjg7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAxNztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgnY2lyY2xlJylcclxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXHJcblx0XHRcdC5hdHRyKCdjeCcsIDc5KVxyXG5cdFx0XHQuYXR0cignY3knLCAoZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA1MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDUwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHJldHVybiA0ODtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDIzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMjg7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAxNztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJyNiNmI2YjYnKTtcclxuXHRcdHRoaXMuc3ZnXHJcblx0XHRcdC5zZWxlY3RBbGwoJ2cuZG90JylcclxuXHRcdFx0Lmluc2VydCgncmVjdCcpXHJcblx0XHRcdC5hdHRyKCdjbGFzcycsICdkb3QnKVxyXG5cdFx0XHQuYXR0cigneCcsICc2MCcpXHJcblx0XHRcdC5hdHRyKCd5JywgIChkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gNDU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDMwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcclxuXHRcdFx0XHRcdHJldHVybiAyMztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAxNTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hdHRyKCdpZCcsIChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuICdhc3NldCcgKyArK3RoaXMuajtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsICcxMCcpXHJcblx0XHRcdC5hdHRyKCd3aWR0aCcsICcyNScpXHJcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3RyYW5zcGFyZW50JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIChkKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZCk7XHJcblx0XHRcdFx0aWYgKGQudWlkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFVSUQgPSBkLnVpZDtcclxuXHRcdFx0XHRcdHRoaXMuYWN0aW9uLmVtaXQoZC51aWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zdmdOT2RlID0gbm9kZVxyXG5cdFx0XHQuYXBwZW5kKCd0ZXh0JylcclxuXHRcdFx0LmF0dHIoJ3gnLCAoZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAtKHRoaXMuYm94V2lkdGggLyAxMCkgLSA2NTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmF0dHIoJ3knLCAoZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAtKHRoaXMuYm94V2lkdGggLyAzNSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuXHRcdFx0LnN0eWxlKCdmaWxsJywgJyNhYWFhYWEnKVxyXG5cdFx0XHQuYXR0cignZm9udC1mYW1pbHknLCAnc2Fucy1zZXJpZicpXHJcblx0XHRcdC50ZXh0KChkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGQuYXNzZXROYW1lO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2FsbChmdW5jdGlvbiB3cmFwKHRleHQsIHdpZHRoKSB7XHJcblx0XHRcdFx0dGV4dC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3dvcmQgdGV6dCBpbmZvciBlYWNoJywgZDMuc2VsZWN0KHRoaXMpKTtcclxuXHRcdFx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItY29uc3RcclxuXHRcdFx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGQzLnNlbGVjdCh0aGlzKTtcclxuXHRcdFx0XHRcdGNvbnN0IHdvcmRzID0gdGV4dC50ZXh0KCkuc3BsaXQoL1xccysvKS5yZXZlcnNlKCk7XHJcblx0XHRcdFx0XHRsZXQgd29yZDtcclxuXHRcdFx0XHRcdGxldCBsaW5lID0gW107XHJcblx0XHRcdFx0XHRsZXQgbGluZU51bWJlciA9IDA7XHJcblx0XHRcdFx0XHRjb25zdCBsaW5lSGVpZ2h0ID0gMS4zOyAvLyBlbXNcclxuXHRcdFx0XHRcdGNvbnN0IHggPSB0ZXh0LmF0dHIoJ3gnKTtcclxuXHRcdFx0XHRcdGNvbnN0IHkgPSB0ZXh0LmF0dHIoJ3knKTtcclxuXHRcdFx0XHRcdGNvbnN0IGR5ID0gMDsgLy8gcGFyc2VGbG9hdCh0ZXh0LmF0dHIoXCJkeVwiKSksXHJcblx0XHRcdFx0XHRsZXQgdHNwYW4gPSB0ZXh0LnRleHQobnVsbCkuYXBwZW5kKCd0c3BhbicpLmF0dHIoJ3gnLCB4KS5hdHRyKCd5JywgeSkuYXR0cignZHknLCBkeSArICdlbScpLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpO1xyXG5cdFx0XHRcdFx0d2hpbGUgKCh3b3JkID0gd29yZHMucG9wKCkpKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd3b3JkJywgd29yZCk7XHJcblx0XHRcdFx0XHRcdGxpbmUucHVzaCh3b3JkKTtcclxuXHRcdFx0XHRcdFx0dHNwYW4udGV4dChsaW5lLmpvaW4oJyAnKSk7XHJcblx0XHRcdFx0XHRcdGlmICh0c3Bhbi5ub2RlKCkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiAxNzApIHtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdHRzcGFuLnRleHQobGluZS5qb2luKCcgJykpO1xyXG5cdFx0XHRcdFx0XHRcdGxpbmUgPSBbIHdvcmQgXTtcclxuXHRcdFx0XHRcdFx0XHR0c3BhbiA9IHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoJ3RzcGFuJylcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd4JywgeClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd5JywgeSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdkeScsICsrbGluZU51bWJlciAqIGxpbmVIZWlnaHQgKyBkeSArICdlbScpXHJcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcclxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KHdvcmQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IGxpbmsgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ3BhdGgubGluaycpLmRhdGEobGlua3MsIChkKSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGQ7XHJcblx0XHRcdHJldHVybiBkLnRhcmdldC5pZDtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGFwcGVuZCBsaW5rIGludG8gc3ZnXHJcblx0XHRsaW5rXHJcblx0XHRcdC5lbnRlcigpXHJcblx0XHRcdC5pbnNlcnQoJ3BhdGgnLCAnZycpXHJcblx0XHRcdC5hdHRyKCdjbGFzcycsICdsaW5rJylcclxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcblx0XHRcdC5hdHRyKCdzdHJva2UnLCAnI2MyYzFjMScpXHJcblx0XHRcdC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMicpXHJcblx0XHRcdC5hdHRyKCdzaGFwZS1yZW5kZXJpbmcnLCAnZ2VvbWV0cmljUHJlY2lzaW9uICcpXHJcblx0XHRcdC5hdHRyKCdkJywgKGQpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzb3VyY2VYID0gZC5zb3VyY2UueCxcclxuXHRcdFx0XHRcdHNvdXJjZVkgPSBkLnNvdXJjZS55ICsgdGhpcy5ib3hXaWR0aCAvIDIsXHJcblx0XHRcdFx0XHR0YXJnZXRYID0gZC50YXJnZXQueCxcclxuXHRcdFx0XHRcdHRhcmdldFkgPSBkLnRhcmdldC55IC0gdGhpcy5ib3hXaWR0aCAvIDI7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdCdNJyArXHJcblx0XHRcdFx0XHRzb3VyY2VZICtcclxuXHRcdFx0XHRcdCcsJyArXHJcblx0XHRcdFx0XHRzb3VyY2VYICtcclxuXHRcdFx0XHRcdCdIJyArXHJcblx0XHRcdFx0XHQoc291cmNlWSArICh0YXJnZXRZIC0gc291cmNlWSkgLyAyKSArXHJcblx0XHRcdFx0XHQnVicgK1xyXG5cdFx0XHRcdFx0dGFyZ2V0WCArXHJcblx0XHRcdFx0XHQnSCcgK1xyXG5cdFx0XHRcdFx0dGFyZ2V0WVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdGFjdGlvbkZ1bih2YWwpIHtcclxuXHRcdHRoaXMuYWN0aW9uLmVtaXQodmFsKTtcclxuXHR9XHJcbn1cclxuIl19