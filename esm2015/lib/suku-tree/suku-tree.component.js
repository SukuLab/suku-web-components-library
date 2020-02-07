/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-tree/suku-tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFnQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBT3pCLE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFRVyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUt0QyxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFdBQU0sR0FBRztZQUNSLEdBQUcsRUFBRSxFQUFFO1lBQ1AsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUNGLFVBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEQsV0FBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUdwRCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsUUFBRyxHQUFRLENBQUMsQ0FBQztRQUViLGNBQVMsR0FBUSxDQUFDLENBQUM7SUFtV3BCLENBQUM7Ozs7SUE5VkEsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7O3NCQUM5QixJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQzVDLE9BQU8s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QUNmLHNDQUFlOztJQUNmLG1DQUtFOztJQUNGLGtDQUFvRDs7SUFDcEQsbUNBQW9EOztJQUNwRCxpQ0FBVTs7SUFDVixrQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZixnQ0FBYTs7SUFDYixrQ0FBVzs7SUFDWCxzQ0FBbUI7O0lBQ25CLG9DQUFROztJQUNSLG9DQUFhOztJQUNiLDhCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXRyZWUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmVlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtdHJlZS5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgndHJlZS1kYXRhJykgdHJlZURhdGFGcm9tQXBpO1xuXHRASW5wdXQoKSByZWxhdGlvbjtcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0dHJlZTtcblx0cm9vdDtcblx0aTtcblx0c3ZnO1xuXHRib3hXaWR0aCA9IDE4Mztcblx0Ym94SGVpZ2h0ID0gNTU7XG5cdG1hcmdpbiA9IHtcblx0XHR0b3A6IDUwLFxuXHRcdHJpZ2h0OiA1LFxuXHRcdGJvdHRvbTogNTAsXG5cdFx0bGVmdDogNVxuXHR9O1xuXHR3aWR0aCA9IDEwNjAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG5cdGhlaWdodCA9IDUxMCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblx0ZGF0YTogYW55O1xuXHR0ZXN0ZDogbnVtYmVyO1xuXHRjaGlsZENvdW50ID0gMDtcblx0bWF4OiBhbnkgPSAwO1xuXHR0cmVlMTogYW55O1xuXHRtYXhIZWlnaHQ6IGFueSA9IDA7XG5cdGRhdGFVSUQ7XG5cdHN2Z05PZGU6IGFueTtcblx0ajogYW55O1xuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLnRyZWVEYXRhRnJvbUFwaSkge1xuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmVlJykpIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmVlJyk7XG5cdFx0XHRcdHdoaWxlIChsaXN0Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHQgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLndpZHRoID0gMDtcblx0XHRcdFx0dGhpcy5oZWlnaHQgPSAwO1xuXHRcdFx0XHR0aGlzLm1heCA9IDA7XG5cdFx0XHRcdHRoaXMubWF4SGVpZ2h0ID0gMDtcblx0XHRcdH1cblx0XHRcdHRoaXMuY29uc3RydWN0VHJlZSgpO1xuXHRcdFx0Y29uc29sZS5sb2coJ3RyZWUgY2FsbGVkJyk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0VHJlZSgpIHtcblx0XHRjb25zdCB0cmVlRGF0YSA9IHRoaXMudHJlZURhdGFGcm9tQXBpO1xuXHRcdHRoaXMucm9vdCA9IHRyZWVEYXRhWzBdO1xuXHRcdHRoaXMudHJlZSA9IGQzLmxheW91dC50cmVlKCkuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSkuY2hpbGRyZW4oKGQpID0+IHtcblx0XHRcdHJldHVybiBkLnJlbGF0aW9ucztcblx0XHR9KTtcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcblx0XHRpZiAodGhpcy5yZWxhdGlvbiA9PSAxKSB7XG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG5cdFx0XHRcdGlmIChkLmRlcHRoID4gdGhpcy5tYXgpIHtcblx0XHRcdFx0XHR0aGlzLm1heCA9IGQuZGVwdGg7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJkZXB0aFwiLCB0aGlzLm1heCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoZC5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXhIZWlnaHQgPSBkLmNoaWxkcmVuLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy53aWR0aCA9ICh0aGlzLm1heCArIDEpICogMzIwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAodGhpcy5tYXhIZWlnaHQgKyAxKSAqIDE1NSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuXHRcdFx0XHRpZiAoZC5kZXB0aCA+IHRoaXMubWF4KSB7XG5cdFx0XHRcdFx0dGhpcy5tYXggPSBkLmRlcHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0aWYgKGQuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5tYXhIZWlnaHQpIHtcblx0XHRcdFx0XHRcdHRoaXMubWF4SGVpZ2h0ID0gZC5jaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMud2lkdGggPSAodGhpcy5tYXggKyAxKSAqIDI3MCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gKHRoaXMubWF4SGVpZ2h0ICsgMSkgKiAxNTUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCd3aWR0aCcsIHRoaXMud2lkdGgsIHRoaXMubWF4SGVpZ2h0KTtcblx0XHR0aGlzLmkgPSAwO1xuXHRcdHRoaXMuaiA9IDA7XG5cdFx0dGhpcy50ZXN0ZCA9IDA7XG5cdFx0aWYgKHRyZWVEYXRhKSB7XG5cdFx0XHR0aGlzLnRyZWUgPSBkMy5sYXlvdXRcblx0XHRcdFx0LnRyZWUoKVxuXHRcdFx0XHQuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSlcblx0XHRcdFx0LmNoaWxkcmVuKChkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGQucmVsYXRpb25zO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc2l6ZShbIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoIF0pO1xuXG5cdFx0XHR0aGlzLnN2ZyA9IGQzXG5cdFx0XHRcdC5zZWxlY3QoJyN0cmVlJylcblx0XHRcdFx0Lmluc2VydCgncCcpXG5cdFx0XHRcdC5hdHRyKCdpZCcsICd0cmVlZGF0YScpXG5cdFx0XHRcdC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5yaWdodCArIHRoaXMubWFyZ2luLmxlZnQpXG5cdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcblx0XHRcdFx0LmFwcGVuZCgnc3ZnJylcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcblx0XHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuXHRcdFx0XHQuYXBwZW5kKCdnJylcblx0XHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpO1xuXG5cdFx0XHR0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcblx0XHRcdHRoaXMuZHJhd1RyZWUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3VHJlZSgpIHtcblx0XHRjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcblx0XHRjb25zdCBsaW5rcyA9IHRoaXMudHJlZS5saW5rcyhub2Rlcyk7XG5cblx0XHRpZiAodGhpcy5yZWxhdGlvbiA9PSAxKSB7XG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG5cdFx0XHRcdGlmKHRoaXMubWF4ID09IDApIHtcblx0XHRcdFx0XHRkLnkgPSB0aGlzLndpZHRoIC0gKHRoaXMubWF4ICsgMSApICogMjIwIC0gZC5kZXB0aCAqIC0yNzA7IC8vIHJldmVyc2UgdHJlZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAodGhpcy5tYXggKyAxICkgKiAyNTAgLSBkLmRlcHRoICogLTI3MDsgLy8gcmV2ZXJzZSB0cmVlXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG5cdFx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAxMDkgLSBkLmRlcHRoICogMjcwOyAvLyByZXZlcnNlIHRyZWVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ2cubm9kZScpLmRhdGEobm9kZXMsIChkKSA9PiB7XG5cdFx0XHRyZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsrdGhpcy5pKTsgLy8gYXNzaWduIGlkIHRvIG5vZGVzXG5cdFx0fSk7XG5cblx0XHRjb25zdCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbm9kZScpLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zbGF0ZSgnICsgZC55ICsgJywnICsgZC54ICsgJyknOyAvLyBhcHBlbmQgZyB3aXRoIGNsYXNzIGF0dHJcblx0XHR9KTtcblxuXHRcdC8vIGFwcGVuZCBsaW5lIGludG8gc3ZnXG5cdFx0bm9kZVxuXHRcdFx0LmFwcGVuZCgnbGluZScpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZScsIChkKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkJywgZCk7XG5cdFx0XHRcdGlmIChkLmRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcjNmYzYmRhJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5yZWxhdGlvbiA9PSAxKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJyMzZmRiZWYnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJyNiOGNlMmInO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCd4MScsIC0odGhpcy5ib3hXaWR0aCAvIDIpKVxuXHRcdFx0LmF0dHIoJ3kxJywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hIZWlnaHQgLyAyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcblx0XHRcdFx0XHRyZXR1cm4gLSh0aGlzLmJveEhlaWdodCAvIDIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hIZWlnaHQgLyAyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCd4MicsIC0odGhpcy5ib3hXaWR0aCAvIDIpKVxuXHRcdFx0LmF0dHIoJ3kyJywgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0IC8gMiArIDMwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodCAvIDIgKyAzMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyICsgMTA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ib3hIZWlnaHQgLyAyO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcxMCcpO1xuXG5cdFx0Ly8gYXBwZW5kIHJlY3QgaW50byBzdmdcblxuXHRcdG5vZGVcblx0XHRcdC5hcHBlbmQoJ3JlY3QnKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHR4OiAtKHRoaXMuYm94V2lkdGggLyAyKSxcblx0XHRcdFx0eTogLSh0aGlzLmJveEhlaWdodCAvIDIpLFxuXHRcdFx0XHR3aWR0aDogdGhpcy5ib3hXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiAoZCkgPT4ge1xuXHRcdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0ICsgMzA7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiAyMykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYm94SGVpZ2h0ICsgMTA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmJveEhlaWdodDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICd3aGl0ZScpXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJy41Jylcblx0XHRcdC5hdHRyKCdzdHJva2UnLCAnI2MyYzFjMWFiJyk7XG5cblx0XHRub2RlLmluc2VydCgnZycsICdnJykuYXR0cignY2xhc3MnLCAnZG90Jyk7XG5cdFx0Ly8gYXBwZW5kIGRvdHMgdG8gcmVjdFxuXHRcdHRoaXMuc3ZnXG5cdFx0XHQuc2VsZWN0QWxsKCdnLmRvdCcpXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXG5cdFx0XHQuYXR0cignY3gnLCA2NSlcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA1MCkge1xuXHRcdFx0XHRcdHJldHVybiA1MDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNDApIHtcblx0XHRcdFx0XHRyZXR1cm4gNDg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcblx0XHRcdFx0XHRyZXR1cm4gMjg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xuXHRcdHRoaXMuc3ZnXG5cdFx0XHQuc2VsZWN0QWxsKCdnLmRvdCcpXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXG5cdFx0XHQuYXR0cignY3gnLCA3Milcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA1MCkge1xuXHRcdFx0XHRcdHJldHVybiA1MDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNDApIHtcblx0XHRcdFx0XHRyZXR1cm4gNDg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcblx0XHRcdFx0XHRyZXR1cm4gMjg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xuXHRcdHRoaXMuc3ZnXG5cdFx0XHQuc2VsZWN0QWxsKCdnLmRvdCcpXG5cdFx0XHQuaW5zZXJ0KCdjaXJjbGUnKVxuXHRcdFx0LmF0dHIoJ3InLCAyLjIpXG5cdFx0XHQuYXR0cignY3gnLCA3OSlcblx0XHRcdC5hdHRyKCdjeScsIChkKSA9PiB7XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA1MCkge1xuXHRcdFx0XHRcdHJldHVybiA1MDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gNDApIHtcblx0XHRcdFx0XHRyZXR1cm4gNDg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcblx0XHRcdFx0XHRyZXR1cm4gMjg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIDE3O1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAnI2I2YjZiNicpO1xuXHRcdHRoaXMuc3ZnXG5cdFx0XHQuc2VsZWN0QWxsKCdnLmRvdCcpXG5cdFx0XHQuaW5zZXJ0KCdyZWN0Jylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdkb3QnKVxuXHRcdFx0LmF0dHIoJ3gnLCAnNjAnKVxuXHRcdFx0LmF0dHIoJ3knLCAgKGQpID0+IHtcblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDQ1O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmFzc2V0TmFtZS5sZW5ndGggPiA0MCkge1xuXHRcdFx0XHRcdHJldHVybiAzMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5hc3NldE5hbWUubGVuZ3RoID4gMjMpIHtcblx0XHRcdFx0XHRyZXR1cm4gMjM7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXNzZXROYW1lLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gMTU7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cignaWQnLCAoZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gJ2Fzc2V0JyArICsrdGhpcy5qO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCAnMTAnKVxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgJzI1Jylcblx0XHRcdC5hdHRyKCdmaWxsJywgJ3RyYW5zcGFyZW50Jylcblx0XHRcdC5vbignY2xpY2snLCAoZCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkKTtcblx0XHRcdFx0aWYgKGQudWlkKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhVUlEID0gZC51aWQ7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24uZW1pdChkLnVpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdmdOT2RlID0gbm9kZVxuXHRcdFx0LmFwcGVuZCgndGV4dCcpXG5cdFx0XHQuYXR0cigneCcsIChkKSA9PiB7XG5cdFx0XHRcdHJldHVybiAtKHRoaXMuYm94V2lkdGggLyAxMCkgLSA2NTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneScsIChkKSA9PiB7XG5cdFx0XHRcdHJldHVybiAtKHRoaXMuYm94V2lkdGggLyAzNSk7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuXHRcdFx0LnN0eWxlKCdmaWxsJywgJyNhYWFhYWEnKVxuXHRcdFx0LmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ3NhbnMtc2VyaWYnKVxuXHRcdFx0LnRleHQoKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGQuYXNzZXROYW1lO1xuXHRcdFx0fSlcblx0XHRcdC5jYWxsKGZ1bmN0aW9uIHdyYXAodGV4dCwgd2lkdGgpIHtcblx0XHRcdFx0dGV4dC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd3b3JkIHRlenQgaW5mb3IgZWFjaCcsIGQzLnNlbGVjdCh0aGlzKSk7XG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25zdFxuXHRcdFx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBkMy5zZWxlY3QodGhpcyk7XG5cdFx0XHRcdFx0Y29uc3Qgd29yZHMgPSB0ZXh0LnRleHQoKS5zcGxpdCgvXFxzKy8pLnJldmVyc2UoKTtcblx0XHRcdFx0XHRsZXQgd29yZDtcblx0XHRcdFx0XHRsZXQgbGluZSA9IFtdO1xuXHRcdFx0XHRcdGxldCBsaW5lTnVtYmVyID0gMDtcblx0XHRcdFx0XHRjb25zdCBsaW5lSGVpZ2h0ID0gMS4zOyAvLyBlbXNcblx0XHRcdFx0XHRjb25zdCB4ID0gdGV4dC5hdHRyKCd4Jyk7XG5cdFx0XHRcdFx0Y29uc3QgeSA9IHRleHQuYXR0cigneScpO1xuXHRcdFx0XHRcdGNvbnN0IGR5ID0gMDsgLy8gcGFyc2VGbG9hdCh0ZXh0LmF0dHIoXCJkeVwiKSksXG5cdFx0XHRcdFx0bGV0IHRzcGFuID0gdGV4dC50ZXh0KG51bGwpLmFwcGVuZCgndHNwYW4nKS5hdHRyKCd4JywgeCkuYXR0cigneScsIHkpLmF0dHIoJ2R5JywgZHkgKyAnZW0nKS5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKTtcblx0XHRcdFx0XHR3aGlsZSAoKHdvcmQgPSB3b3Jkcy5wb3AoKSkpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd3b3JkJywgd29yZCk7XG5cdFx0XHRcdFx0XHRsaW5lLnB1c2god29yZCk7XG5cdFx0XHRcdFx0XHR0c3Bhbi50ZXh0KGxpbmUuam9pbignICcpKTtcblx0XHRcdFx0XHRcdGlmICh0c3Bhbi5ub2RlKCkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiAxNzApIHtcblx0XHRcdFx0XHRcdFx0bGluZS5wb3AoKTtcblx0XHRcdFx0XHRcdFx0dHNwYW4udGV4dChsaW5lLmpvaW4oJyAnKSk7XG5cdFx0XHRcdFx0XHRcdGxpbmUgPSBbIHdvcmQgXTtcblx0XHRcdFx0XHRcdFx0dHNwYW4gPSB0ZXh0XG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZCgndHNwYW4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd4JywgeClcblx0XHRcdFx0XHRcdFx0XHQuYXR0cigneScsIHkpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2R5JywgKytsaW5lTnVtYmVyICogbGluZUhlaWdodCArIGR5ICsgJ2VtJylcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0Jylcblx0XHRcdFx0XHRcdFx0XHQudGV4dCh3b3JkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRjb25zdCBsaW5rID0gdGhpcy5zdmcuc2VsZWN0QWxsKCdwYXRoLmxpbmsnKS5kYXRhKGxpbmtzLCAoZCkgPT4ge1xuXHRcdFx0dGhpcy5kYXRhID0gZDtcblx0XHRcdHJldHVybiBkLnRhcmdldC5pZDtcblx0XHR9KTtcblxuXHRcdC8vIGFwcGVuZCBsaW5rIGludG8gc3ZnXG5cdFx0bGlua1xuXHRcdFx0LmVudGVyKClcblx0XHRcdC5pbnNlcnQoJ3BhdGgnLCAnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnbGluaycpXG5cdFx0XHQuYXR0cignZmlsbCcsICdub25lJylcblx0XHRcdC5hdHRyKCdzdHJva2UnLCAnI2MyYzFjMScpXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJzInKVxuXHRcdFx0LmF0dHIoJ3NoYXBlLXJlbmRlcmluZycsICdnZW9tZXRyaWNQcmVjaXNpb24gJylcblx0XHRcdC5hdHRyKCdkJywgKGQpID0+IHtcblx0XHRcdFx0Y29uc3Qgc291cmNlWCA9IGQuc291cmNlLngsXG5cdFx0XHRcdFx0c291cmNlWSA9IGQuc291cmNlLnkgKyB0aGlzLmJveFdpZHRoIC8gMixcblx0XHRcdFx0XHR0YXJnZXRYID0gZC50YXJnZXQueCxcblx0XHRcdFx0XHR0YXJnZXRZID0gZC50YXJnZXQueSAtIHRoaXMuYm94V2lkdGggLyAyO1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdCdNJyArXG5cdFx0XHRcdFx0c291cmNlWSArXG5cdFx0XHRcdFx0JywnICtcblx0XHRcdFx0XHRzb3VyY2VYICtcblx0XHRcdFx0XHQnSCcgK1xuXHRcdFx0XHRcdChzb3VyY2VZICsgKHRhcmdldFkgLSBzb3VyY2VZKSAvIDIpICtcblx0XHRcdFx0XHQnVicgK1xuXHRcdFx0XHRcdHRhcmdldFggK1xuXHRcdFx0XHRcdCdIJyArXG5cdFx0XHRcdFx0dGFyZ2V0WVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0fVxuXG5cdGFjdGlvbkZ1bih2YWwpIHtcblx0XHR0aGlzLmFjdGlvbi5lbWl0KHZhbCk7XG5cdH1cbn1cbiJdfQ==