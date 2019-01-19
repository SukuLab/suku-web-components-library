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
                return d.childrens;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyZWUvc3VrdS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekI7SUFBQTtRQVlDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsVUFBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxXQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBa0lyRCxDQUFDOzs7O0lBaElBLHVDQUFXOzs7SUFBWDtRQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDckI7SUFDRixDQUFDOzs7O0lBRUQseUNBQWE7OztJQUFiOztZQUNPLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDakQsSUFBSSxDQUFDLENBQUMsR0FB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TSxDQUFDLENBQUM7O2dCQUNwQixPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1lBQ3pDLE9BQU8sQ0FDTixHQUFHO2dCQUNILE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPO2dCQUNQLEdBQUc7Z0JBQ0gsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxHQUFHO2dCQUNILE9BQU87Z0JBQ1AsR0FBRztnQkFDSCxPQUFPLENBQ1AsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdEpELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsd0NBQXlDOztpQkFFMUM7OztrQ0FFQyxLQUFLLFNBQUMsV0FBVzs7SUFpSm5CLHdCQUFDO0NBQUEsQUF2SkQsSUF1SkM7U0FsSlksaUJBQWlCOzs7SUFDN0IsNENBQW9DOztJQUVwQyxpQ0FBSzs7SUFDTCxpQ0FBSzs7SUFDTCw4QkFBRTs7SUFDRixnQ0FBSTs7SUFDSixxQ0FBZTs7SUFDZixzQ0FBZTs7SUFDZixtQ0FLRTs7SUFDRixrQ0FBb0Q7O0lBQ3BELG1DQUFvRDs7SUFDcEQsaUNBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRyZWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgndHJlZS1kYXRhJykgdHJlZURhdGFGcm9tQXBpO1xuXHQvLyB0cmFjZSB0cmVlXG5cdHRyZWU7XG5cdHJvb3Q7XG5cdGk7XG5cdHN2Zztcblx0Ym94V2lkdGggPSAxODA7XG5cdGJveEhlaWdodCA9IDU1O1xuXHRtYXJnaW4gPSB7XG5cdFx0dG9wOiA1MCxcblx0XHRyaWdodDogNSxcblx0XHRib3R0b206IDUwLFxuXHRcdGxlZnQ6IDVcblx0fTtcblx0d2lkdGggPSAxMzYwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuXHRoZWlnaHQgPSA2MTAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cdGRhdGE6IGFueTtcblx0bmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCcpO1xuXHRcdGlmICh0aGlzLnRyZWVEYXRhRnJvbUFwaSkge1xuICAgICAgY29uc29sZS5sb2coJ2RhdGE+JywgdGhpcy50cmVlRGF0YUZyb21BcGkpO1xuXHRcdFx0dGhpcy5jb25zdHJ1Y3RUcmVlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0VHJlZSgpIHtcblx0IGNvbnN0IHRyZWVEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnRyZWVEYXRhRnJvbUFwaSk7XG5cdFx0dGhpcy5pID0gMDtcblx0XHRpZiAodHJlZURhdGEpIHtcblx0XHRcdHRoaXMudHJlZSA9IGQzLmxheW91dFxuXHRcdFx0LnRyZWUoKVxuXHRcdFx0LnNlcGFyYXRpb24oKGEsIGIpID0+IChhLnBhcmVudCA9PT0gYi5wYXJlbnQgPyA1IDogNS4yNSkpXG5cdFx0XHQuY2hpbGRyZW4oKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGQuY2hpbGRyZW5zO1xuXHRcdFx0fSlcblx0XHRcdC5zaXplKFsgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGggXSk7XG5cblx0XHR0aGlzLnN2ZyA9IGQzXG5cdFx0XHQuc2VsZWN0KCcudHJlZScpXG5cdFx0XHQuYXBwZW5kKCdzdmcnKVxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLnJpZ2h0ICsgdGhpcy5tYXJnaW4ubGVmdClcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpO1xuXG5cdFx0dGhpcy5yb290ID0gdHJlZURhdGFbMF07XG5cdFx0dGhpcy5kcmF3VHJlZSgpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXdUcmVlKCkge1xuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLm5vZGVzKHRoaXMucm9vdCkucmV2ZXJzZSgpO1xuXHRcdGNvbnN0IGxpbmtzID0gdGhpcy50cmVlLmxpbmtzKG5vZGVzKTtcblxuXHRcdG5vZGVzLmZvckVhY2goKGQpID0+IHtcblx0XHRcdGQueSA9IHRoaXMud2lkdGggLSAxMDkgLSBkLmRlcHRoICogMjcwOyAvLyByZXZlcnNlIHRyZWVcblx0XHR9KTtcblxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ2cubm9kZScpLmRhdGEobm9kZXMsIChkKSA9PiB7XG5cdFx0XHRyZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsrdGhpcy5pKTsgLy8gYXNzaWduIGlkIHRvIG5vZGVzXG5cdFx0fSk7XG5cblx0XHRjb25zdCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbm9kZScpLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zbGF0ZSgnICsgZC55ICsgJywnICsgZC54ICsgJyknOyAvLyBhcHBlbmQgZyB3aXRoIGNsYXNzIGF0dHJcblx0XHR9KTtcblxuXHRcdC8vIGFwcGVuZCBsaW5lIGludG8gc3ZnXG5cdFx0bm9kZVxuXHRcdFx0LmFwcGVuZCgnbGluZScpXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZScsIChkKSA9PiB7XG5cdFx0XHRcdGlmIChkLmxldmVsID09PSAxKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcjNmYzYmRhJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZC5sZXZlbCA9PT0gMikge1xuXHRcdFx0XHRcdHJldHVybiAnIzNmZGJlZic7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQubGV2ZWwgPT09IDMpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyNiOGNlMmInO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAnIzNmZGJlZic7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneDEnLCAtKHRoaXMuYm94V2lkdGggLyAyKSlcblx0XHRcdC5hdHRyKCd5MScsIC0odGhpcy5ib3hIZWlnaHQgLyAyKSlcblx0XHRcdC5hdHRyKCd4MicsIC0odGhpcy5ib3hXaWR0aCAvIDIpKVxuXHRcdFx0LmF0dHIoJ3kyJywgdGhpcy5ib3hIZWlnaHQgLyAyKVxuXHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcxMCcpO1xuXG5cdFx0Ly8gYXBwZW5kIHJlY3QgaW50byBzdmdcblx0XHRub2RlXG5cdFx0XHQuYXBwZW5kKCdyZWN0Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0eDogLSh0aGlzLmJveFdpZHRoIC8gMiksXG5cdFx0XHRcdHk6IC0odGhpcy5ib3hIZWlnaHQgLyAyKSxcblx0XHRcdFx0d2lkdGg6IHRoaXMuYm94V2lkdGgsXG5cdFx0XHRcdGhlaWdodDogdGhpcy5ib3hIZWlnaHRcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZmlsbCcsICd3aGl0ZScpXG5cdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgJy4wNycpXG5cdFx0XHQuYXR0cignc3Ryb2tlJywgJ2JsYWNrJyk7XG5cblx0XHRub2RlXG5cdFx0XHQuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCd4JywgKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5ib3hXaWR0aCAvIDIwKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneScsIChkKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmJveFdpZHRoIC8gNjA7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuXHRcdFx0LnRleHQoKGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGQucHJvZHVjdC5uYW1lO1xuXHRcdFx0fSk7XG5cblx0XHRjb25zdCBsaW5rID0gdGhpcy5zdmcuc2VsZWN0QWxsKCdwYXRoLmxpbmsnKS5kYXRhKGxpbmtzLCAoZCkgPT4ge1xuXHRcdFx0dGhpcy5kYXRhID0gZDtcblx0XHRcdHJldHVybiBkLnRhcmdldC5pZDtcblx0XHR9KTtcblxuXHRcdC8vIGFwcGVuZCBsaW5rIGludG8gc3ZnXG5cdFx0bGlua1xuXHRcdFx0LmVudGVyKClcblx0XHRcdC5pbnNlcnQoJ3BhdGgnLCAnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnbGluaycpXG5cdFx0XHQuYXR0cignc3Ryb2tlJywgJyMwMDAnKVxuXHRcdFx0LmF0dHIoJ3NoYXBlLXJlbmRlcmluZycsICdjcmlzcEVkZ2VzJylcblx0XHRcdC5hdHRyKCdkJywgKGQpID0+IHtcblx0XHRcdFx0Y29uc3Qgc291cmNlWCA9IGQuc291cmNlLngsXG5cdFx0XHRcdFx0c291cmNlWSA9IGQuc291cmNlLnkgKyB0aGlzLmJveFdpZHRoIC8gMixcblx0XHRcdFx0XHR0YXJnZXRYID0gZC50YXJnZXQueCxcblx0XHRcdFx0XHR0YXJnZXRZID0gZC50YXJnZXQueSAtIHRoaXMuYm94V2lkdGggLyAyO1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdCdNJyArXG5cdFx0XHRcdFx0c291cmNlWSArXG5cdFx0XHRcdFx0JywnICtcblx0XHRcdFx0XHRzb3VyY2VYICtcblx0XHRcdFx0XHQnSCcgK1xuXHRcdFx0XHRcdChzb3VyY2VZICsgKHRhcmdldFkgLSBzb3VyY2VZKSAvIDIpICtcblx0XHRcdFx0XHQnVicgK1xuXHRcdFx0XHRcdHRhcmdldFggK1xuXHRcdFx0XHRcdCdIJyArXG5cdFx0XHRcdFx0dGFyZ2V0WVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==