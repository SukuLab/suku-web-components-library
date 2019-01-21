/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
export class SukuTreeComponent {
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
            this.tree = d3.layout
                .tree()
                .separation((a, b) => (a.parent === b.parent ? 5 : 5.25))
                .children((d) => {
                return d.relations;
            })
                .size([this.height, this.width]);
            this.svg = d3
                .select('.tree')
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
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-tree',
                template: "<div class=\"tree\"></div>",
                styles: [".tree{width:100%;overflow-x:scroll!important;direction:rtl!important}svg{overflow-x:scroll!important}.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}.link{fill:none;stroke:#c2c1c1;stroke-width:2px}/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif!important;fill:#aaa}/deep/.link{fill:none!important;stroke:#c2c1c1!important;stroke-width:2px!important}/deep/.tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}"]
            }] }
];
/** @nocollapse */
SukuTreeComponent.ctorParameters = () => [];
SukuTreeComponent.propDecorators = {
    treeDataFromApi: [{ type: Input, args: ['tree-data',] }]
};
if (false) {
    /** @type {?} */
    SukuTreeComponent.prototype.treeDataFromApi;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFPekIsTUFBTSxPQUFPLGlCQUFpQjtJQW9KNUI7UUE3SUEsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixXQUFNLEdBQUc7WUFDUCxHQUFHLEVBQUUsRUFBRTtZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFDRixVQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BELFdBQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFvSXBDLENBQUM7Ozs7SUFsSWpCLFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELGFBQWE7O2NBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNqRCxJQUFJLENBQUMsQ0FB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QUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7O2tCQUN4QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztrQkFDcEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUMxQyxPQUFPLENBQ0wsR0FBRztnQkFDSCxPQUFPO2dCQUNQLEdBQUc7Z0JBQ0gsT0FBTztnQkFDUCxHQUFHO2dCQUNILENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsR0FBRztnQkFDSCxPQUFPO2dCQUNQLEdBQUc7Z0JBQ0gsT0FBTyxDQUNSLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFLRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBNUpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsc0NBQXlDOzthQUUxQzs7Ozs7OEJBRUUsS0FBSyxTQUFDLFdBQVc7Ozs7SUFBbEIsNENBQW9DOztJQUVwQyxpQ0FBSzs7SUFDTCxpQ0FBSzs7SUFDTCw4QkFBRTs7SUFDRixnQ0FBSTs7SUFDSixxQ0FBZTs7SUFDZixzQ0FBZTs7SUFDZixtQ0FLRTs7SUFDRixrQ0FBb0Q7O0lBQ3BELG1DQUFvRDs7SUFDcEQsaUNBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdHJlZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0cmVlLWRhdGEnKSB0cmVlRGF0YUZyb21BcGk7XG4gIC8vIHRyYWNlIHRyZWVcbiAgdHJlZTtcbiAgcm9vdDtcbiAgaTtcbiAgc3ZnO1xuICBib3hXaWR0aCA9IDE4MDtcbiAgYm94SGVpZ2h0ID0gNTU7XG4gIG1hcmdpbiA9IHtcbiAgICB0b3A6IDUwLFxuICAgIHJpZ2h0OiA1LFxuICAgIGJvdHRvbTogNTAsXG4gICAgbGVmdDogNVxuICB9O1xuICB3aWR0aCA9IDEzNjAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gIGhlaWdodCA9IDYxMCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgZGF0YTogYW55O1xuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkJyk7XG4gICAgaWYgKHRoaXMudHJlZURhdGFGcm9tQXBpKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGF0YT4nLCB0aGlzLnRyZWVEYXRhRnJvbUFwaSk7XG4gICAgICB0aGlzLmNvbnN0cnVjdFRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RUcmVlKCkge1xuICAgIGNvbnN0IHRyZWVEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnRyZWVEYXRhRnJvbUFwaSk7XG4gICAgdGhpcy5pID0gMDtcbiAgICBpZiAodHJlZURhdGEpIHtcbiAgICAgIHRoaXMudHJlZSA9IGQzLmxheW91dFxuICAgICAgICAudHJlZSgpXG4gICAgICAgIC5zZXBhcmF0aW9uKChhLCBiKSA9PiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gNSA6IDUuMjUpKVxuICAgICAgICAuY2hpbGRyZW4oKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZC5yZWxhdGlvbnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5zaXplKFt0aGlzLmhlaWdodCwgdGhpcy53aWR0aF0pO1xuXG4gICAgICB0aGlzLnN2ZyA9IGQzXG4gICAgICAgIC5zZWxlY3QoJy50cmVlJylcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpO1xuXG4gICAgICB0aGlzLnJvb3QgPSB0cmVlRGF0YVswXTtcbiAgICAgIHRoaXMuZHJhd1RyZWUoKTtcbiAgICB9XG4gIH1cblxuICBkcmF3VHJlZSgpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMudHJlZS5ub2Rlcyh0aGlzLnJvb3QpLnJldmVyc2UoKTtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMudHJlZS5saW5rcyhub2Rlcyk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICBkLnkgPSB0aGlzLndpZHRoIC0gMTA5IC0gZC5kZXB0aCAqIDI3MDsgLy8gcmV2ZXJzZSB0cmVlXG4gICAgfSk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5zdmcuc2VsZWN0QWxsKCdnLm5vZGUnKS5kYXRhKG5vZGVzLCAoZCkgPT4ge1xuICAgICAgcmV0dXJuIGQuaWQgfHwgKGQuaWQgPSArK3RoaXMuaSk7IC8vIGFzc2lnbiBpZCB0byBub2Rlc1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ25vZGUnKS5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xuICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGQueSArICcsJyArIGQueCArICcpJzsgLy8gYXBwZW5kIGcgd2l0aCBjbGFzcyBhdHRyXG4gICAgfSk7XG5cbiAgICAvLyBhcHBlbmQgbGluZSBpbnRvIHN2Z1xuICAgIG5vZGVcbiAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCAoZCkgPT4ge1xuICAgICAgICBpZiAoZC5sZXZlbCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiAnIzZmM2JkYSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGQubGV2ZWwgPT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gJyMzZmRiZWYnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkLmxldmVsID09PSAzKSB7XG4gICAgICAgICAgcmV0dXJuICcjYjhjZTJiJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJyMzZmRiZWYnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3gxJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXG4gICAgICAuYXR0cigneTEnLCAtKHRoaXMuYm94SGVpZ2h0IC8gMikpXG4gICAgICAuYXR0cigneDInLCAtKHRoaXMuYm94V2lkdGggLyAyKSlcbiAgICAgIC5hdHRyKCd5MicsIHRoaXMuYm94SGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMTAnKTtcblxuICAgIC8vIGFwcGVuZCByZWN0IGludG8gc3ZnXG4gICAgbm9kZVxuICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cih7XG4gICAgICAgIHg6IC0odGhpcy5ib3hXaWR0aCAvIDIpLFxuICAgICAgICB5OiAtKHRoaXMuYm94SGVpZ2h0IC8gMiksXG4gICAgICAgIHdpZHRoOiB0aGlzLmJveFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuYm94SGVpZ2h0XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICcuMDcnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpO1xuXG4gICAgbm9kZVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIChkKSA9PiB7XG4gICAgICAgIHJldHVybiAtKHRoaXMuYm94V2lkdGggLyAyMCk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3hXaWR0aCAvIDYwO1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgIHJldHVybiBkLnByb2R1Y3QubmFtZTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgncGF0aC5saW5rJykuZGF0YShsaW5rcywgKGQpID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGQ7XG4gICAgICByZXR1cm4gZC50YXJnZXQuaWQ7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBlbmQgbGluayBpbnRvIHN2Z1xuICAgIGxpbmtcbiAgICAgIC5lbnRlcigpXG4gICAgICAuaW5zZXJ0KCdwYXRoJywgJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjMDAwJylcbiAgICAgIC5hdHRyKCdzaGFwZS1yZW5kZXJpbmcnLCAnY3Jpc3BFZGdlcycpXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVggPSBkLnNvdXJjZS54LFxuICAgICAgICAgIHNvdXJjZVkgPSBkLnNvdXJjZS55ICsgdGhpcy5ib3hXaWR0aCAvIDIsXG4gICAgICAgICAgdGFyZ2V0WCA9IGQudGFyZ2V0LngsXG4gICAgICAgICAgdGFyZ2V0WSA9IGQudGFyZ2V0LnkgLSB0aGlzLmJveFdpZHRoIC8gMjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAnTScgK1xuICAgICAgICAgIHNvdXJjZVkgK1xuICAgICAgICAgICcsJyArXG4gICAgICAgICAgc291cmNlWCArXG4gICAgICAgICAgJ0gnICtcbiAgICAgICAgICAoc291cmNlWSArICh0YXJnZXRZIC0gc291cmNlWSkgLyAyKSArXG4gICAgICAgICAgJ1YnICtcbiAgICAgICAgICB0YXJnZXRYICtcbiAgICAgICAgICAnSCcgK1xuICAgICAgICAgIHRhcmdldFlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==