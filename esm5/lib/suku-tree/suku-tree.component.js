/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
var SukuTreeComponent = /** @class */ (function () {
    function SukuTreeComponent() {
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
    SukuTreeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        console.log('called');
        if (this.treeDataFromApi) {
            console.log('data>', this.treeDataFromApi);
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
        /** @type {?} */
        var treeData = JSON.parse(this.treeDataFromApi);
        this.i = 0;
        if (treeData) {
            this.tree = d3.layout
                .tree()
                .separation(function (a, b) { return (a.parent === b.parent ? 5 : 5.25); })
                .children(function (d) {
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
            .attr('x', function (d) {
            return -(_this.boxWidth / 20);
        })
            .attr('y', function (d) {
            return _this.boxWidth / 60;
        })
            .style('text-anchor', 'middle')
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
     * @return {?}
     */
    SukuTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-tree',
                    template: "<div class=\"tree\"></div>",
                    styles: [".tree{width:100%;overflow-x:scroll!important;direction:rtl!important}svg{overflow-x:scroll!important}.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}.link{fill:none;stroke:#c2c1c1;stroke-width:2px}/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif!important;fill:#aaa}/deep/.link{fill:none!important;stroke:#c2c1c1!important;stroke-width:2px!important}/deep/.tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuTreeComponent.ctorParameters = function () { return []; };
    SukuTreeComponent.propDecorators = {
        treeDataFromApi: [{ type: Input, args: ['tree-data',] }]
    };
    return SukuTreeComponent;
}());
export { SukuTreeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekI7SUF5SkU7UUE3SUEsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixXQUFNLEdBQUc7WUFDUCxHQUFHLEVBQUUsRUFBRTtZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFDRixVQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BELFdBQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFvSXBDLENBQUM7Ozs7SUFsSWpCLHVDQUFXOzs7SUFBWDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7O0lBRUQseUNBQWE7OztJQUFiOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDakQsSUFBSSxDQUFDLENBQUMs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LE1BQU0sQ0FBQyxDQUFDOztnQkFDcEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUMxQyxPQUFPLENBQ0wsR0FBRztnQkFDSCxPQUFPO2dCQUNQLEdBQUc7Z0JBQ0gsT0FBTztnQkFDUCxHQUFHO2dCQUNILENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsR0FBRztnQkFDSCxPQUFPO2dCQUNQLEdBQUc7Z0JBQ0gsT0FBTyxDQUNSLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFLRCxvQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkE1SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzQ0FBeUM7O2lCQUUxQzs7Ozs7a0NBRUUsS0FBSyxTQUFDLFdBQVc7O0lBd0pwQix3QkFBQztDQUFBLEFBOUpELElBOEpDO1NBekpZLGlCQUFpQjs7O0lBQzVCLDRDQUFvQzs7SUFFcEMsaUNBQUs7O0lBQ0wsaUNBQUs7O0lBQ0wsOEJBQUU7O0lBQ0YsZ0NBQUk7O0lBQ0oscUNBQWU7O0lBQ2Ysc0NBQWU7O0lBQ2YsbUNBS0U7O0lBQ0Ysa0NBQW9EOztJQUNwRCxtQ0FBb0Q7O0lBQ3BELGlDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRyZWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndHJlZS1kYXRhJykgdHJlZURhdGFGcm9tQXBpO1xuICAvLyB0cmFjZSB0cmVlXG4gIHRyZWU7XG4gIHJvb3Q7XG4gIGk7XG4gIHN2ZztcbiAgYm94V2lkdGggPSAxODA7XG4gIGJveEhlaWdodCA9IDU1O1xuICBtYXJnaW4gPSB7XG4gICAgdG9wOiA1MCxcbiAgICByaWdodDogNSxcbiAgICBib3R0b206IDUwLFxuICAgIGxlZnQ6IDVcbiAgfTtcbiAgd2lkdGggPSAxMzYwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICBoZWlnaHQgPSA2MTAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gIGRhdGE6IGFueTtcbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCcpO1xuICAgIGlmICh0aGlzLnRyZWVEYXRhRnJvbUFwaSkge1xuICAgICAgY29uc29sZS5sb2coJ2RhdGE+JywgdGhpcy50cmVlRGF0YUZyb21BcGkpO1xuICAgICAgdGhpcy5jb25zdHJ1Y3RUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0VHJlZSgpIHtcbiAgICBjb25zdCB0cmVlRGF0YSA9IEpTT04ucGFyc2UodGhpcy50cmVlRGF0YUZyb21BcGkpO1xuICAgIHRoaXMuaSA9IDA7XG4gICAgaWYgKHRyZWVEYXRhKSB7XG4gICAgICB0aGlzLnRyZWUgPSBkMy5sYXlvdXRcbiAgICAgICAgLnRyZWUoKVxuICAgICAgICAuc2VwYXJhdGlvbigoYSwgYikgPT4gKGEucGFyZW50ID09PSBiLnBhcmVudCA/IDUgOiA1LjI1KSlcbiAgICAgICAgLmNoaWxkcmVuKChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGQucmVsYXRpb25zO1xuICAgICAgICB9KVxuICAgICAgICAuc2l6ZShbdGhpcy5oZWlnaHQsIHRoaXMud2lkdGhdKTtcblxuICAgICAgdGhpcy5zdmcgPSBkM1xuICAgICAgICAuc2VsZWN0KCcudHJlZScpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5yaWdodCArIHRoaXMubWFyZ2luLmxlZnQpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcblxuICAgICAgdGhpcy5yb290ID0gdHJlZURhdGFbMF07XG4gICAgICB0aGlzLmRyYXdUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RyZWUoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnRyZWUubm9kZXModGhpcy5yb290KS5yZXZlcnNlKCk7XG4gICAgY29uc3QgbGlua3MgPSB0aGlzLnRyZWUubGlua3Mobm9kZXMpO1xuXG4gICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgZC55ID0gdGhpcy53aWR0aCAtIDEwOSAtIGQuZGVwdGggKiAyNzA7IC8vIHJldmVyc2UgdHJlZVxuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3ZnLnNlbGVjdEFsbCgnZy5ub2RlJykuZGF0YShub2RlcywgKGQpID0+IHtcbiAgICAgIHJldHVybiBkLmlkIHx8IChkLmlkID0gKyt0aGlzLmkpOyAvLyBhc3NpZ24gaWQgdG8gbm9kZXNcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlJykuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcbiAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBkLnkgKyAnLCcgKyBkLnggKyAnKSc7IC8vIGFwcGVuZCBnIHdpdGggY2xhc3MgYXR0clxuICAgIH0pO1xuXG4gICAgLy8gYXBwZW5kIGxpbmUgaW50byBzdmdcbiAgICBub2RlXG4gICAgICAuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgKGQpID0+IHtcbiAgICAgICAgaWYgKGQubGV2ZWwgPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gJyM2ZjNiZGEnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkLmxldmVsID09PSAyKSB7XG4gICAgICAgICAgcmV0dXJuICcjM2ZkYmVmJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5sZXZlbCA9PT0gMykge1xuICAgICAgICAgIHJldHVybiAnI2I4Y2UyYic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICcjM2ZkYmVmJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd4MScsIC0odGhpcy5ib3hXaWR0aCAvIDIpKVxuICAgICAgLmF0dHIoJ3kxJywgLSh0aGlzLmJveEhlaWdodCAvIDIpKVxuICAgICAgLmF0dHIoJ3gyJywgLSh0aGlzLmJveFdpZHRoIC8gMikpXG4gICAgICAuYXR0cigneTInLCB0aGlzLmJveEhlaWdodCAvIDIpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgJzEwJyk7XG5cbiAgICAvLyBhcHBlbmQgcmVjdCBpbnRvIHN2Z1xuICAgIG5vZGVcbiAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoe1xuICAgICAgICB4OiAtKHRoaXMuYm94V2lkdGggLyAyKSxcbiAgICAgICAgeTogLSh0aGlzLmJveEhlaWdodCAvIDIpLFxuICAgICAgICB3aWR0aDogdGhpcy5ib3hXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmJveEhlaWdodFxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnLjA3JylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKTtcblxuICAgIG5vZGVcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4ge1xuICAgICAgICByZXR1cm4gLSh0aGlzLmJveFdpZHRoIC8gMjApO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94V2lkdGggLyA2MDtcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICByZXR1cm4gZC5wcm9kdWN0Lm5hbWU7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ3BhdGgubGluaycpLmRhdGEobGlua3MsIChkKSA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBkO1xuICAgICAgcmV0dXJuIGQudGFyZ2V0LmlkO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwZW5kIGxpbmsgaW50byBzdmdcbiAgICBsaW5rXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmluc2VydCgncGF0aCcsICdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnIzAwMCcpXG4gICAgICAuYXR0cignc2hhcGUtcmVuZGVyaW5nJywgJ2NyaXNwRWRnZXMnKVxuICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xuICAgICAgICBjb25zdCBzb3VyY2VYID0gZC5zb3VyY2UueCxcbiAgICAgICAgICBzb3VyY2VZID0gZC5zb3VyY2UueSArIHRoaXMuYm94V2lkdGggLyAyLFxuICAgICAgICAgIHRhcmdldFggPSBkLnRhcmdldC54LFxuICAgICAgICAgIHRhcmdldFkgPSBkLnRhcmdldC55IC0gdGhpcy5ib3hXaWR0aCAvIDI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgJ00nICtcbiAgICAgICAgICBzb3VyY2VZICtcbiAgICAgICAgICAnLCcgK1xuICAgICAgICAgIHNvdXJjZVggK1xuICAgICAgICAgICdIJyArXG4gICAgICAgICAgKHNvdXJjZVkgKyAodGFyZ2V0WSAtIHNvdXJjZVkpIC8gMikgK1xuICAgICAgICAgICdWJyArXG4gICAgICAgICAgdGFyZ2V0WCArXG4gICAgICAgICAgJ0gnICtcbiAgICAgICAgICB0YXJnZXRZXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=