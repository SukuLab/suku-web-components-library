/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuProgressBarTypeThreeComponent = /** @class */ (function () {
    function SukuProgressBarTypeThreeComponent() {
        this.statusKey = ['inProgress', 'inComplete', 'complete'];
        this.steps = [
            {
                '_order': 1,
                'step': {
                    'facility': {
                        '_id': '082721c3e14d1d7c062ee158',
                        'name': 'Finca Nueva'
                    },
                    'description': 'At Finca Nueva, we raise the healthiest, happiest cattle.',
                    'facilityType': 'Producer',
                    'templateLocator': '8fe2a17eeab6ea096210205f',
                    'inputs': [
                        {
                            'assetId': 'f3122dfe6a015dd7cac477fe',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '1b5151760a12352333748894'
                        }
                    ],
                    'outputs': [
                        {
                            'assetId': '2ab8b31fb08a1236a83c495a',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '2a6b57f3a123d3b41e410795'
                        }
                    ]
                }
            },
            {
                'order': 10,
                'step': {
                    'facility': {
                        '_id': 'dacc5fd46f386e7cd10a7f1d',
                        'name': 'Esmeralda'
                    },
                    'description': 'At Esmeralda, we are here to process your goods.',
                    'facilityType': 'Processor',
                    'templateLocator': 'dba2424a243d8b6b2a4f1410',
                    'inputs': [
                        {
                            'assetId': '69b4edb0f32a8ccfaf562645',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2bdb1a123fa2d6972277'
                        }
                    ],
                    'outputs': [
                        {
                            'assetId': '2969713e87e448e71dce795f',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2bda123b1fa2d6972277'
                        }
                    ]
                }
            },
            {
                'order': 20,
                'step': {
                    'facility': {
                        '_id': 'aa8e71b242ddac8cbeedeb81',
                        'name': 'Sasmar'
                    },
                    'description': 'At Sasmar, we are here to move your goods.',
                    'facilityType': 'Logistics',
                    'templateLocator': '95c5e8ac473c4315f546ae39',
                    'inputs': [
                        {
                            'assetId': '6893733cadef0c3cc831953d',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2ba123db1fa2d6972277'
                        }
                    ],
                    'outputs': [
                        {
                            'assetId': 'c03bed502f70eda2587fa88e',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2bda123b1fa2d6972277'
                        }
                    ]
                }
            },
            {
                'order': 30,
                'step': {
                    'facility': {
                        '_id': '2153ec1c6a99eb8ed6525926',
                        'name': 'Cedicar'
                    },
                    'description': 'At Cedicar, we are here to distribute your goods correctly.',
                    'facilityType': 'Distributor',
                    'templateLocator': 'bc15408ae4a9b7fe10aaff56',
                    'inputs': [
                        {
                            'assetId': '7a3c779e8297ca6c3cdbdb2e',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2ba123db1fa2d6972277'
                        }
                    ],
                    'outputs': [
                        {
                            'assetId': '17cd5c76c1865613b37c7e37',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2ba123db1fa2d6972277'
                        }
                    ]
                }
            },
            {
                'order': 40,
                'step': {
                    'facility': {
                        '_id': '3021c8b0b062fc85cd0e8c5d',
                        'name': 'Wong'
                    },
                    'description': 'We are proud to sell healthy food products for a great price!',
                    'facilityType': 'Supermarket',
                    'templateLocator': '28c1849161583c73d38d76a7',
                    'inputs': [
                        {
                            'assetId': '0df488a27a1231f293ea47c3',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2ba123db1fa2d6972277'
                        }
                    ],
                    'outputs': [
                        {
                            'assetId': '67e7dff46a1231e9e505dcc8',
                            'timestamp': '2019-07-02T08:14:27.307Z',
                            'attestedBy': '6aba2ba123db1fa2d6972277'
                        },
                        {
                            'assetId': '67e7dff46a1231e9e505dcc7'
                        }
                    ]
                }
            }
        ];
        this.iconInfo = 'suku-shipped-icon';
        this.iconInfoCustomClass = 'suku-shipped-icon';
        this.customIconClass = 'suku-xl';
    }
    Object.defineProperty(SukuProgressBarTypeThreeComponent.prototype, "data", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                if (val.length == 0) {
                    /** @type {?} */
                    var data = '1';
                    document.documentElement.style.setProperty('--suku-progress-bar-count', data);
                }
                else {
                    console.log('val.length.toString()', val.length.toString());
                    /** @type {?} */
                    var data = val.length.toString();
                    document.documentElement.style.setProperty('--suku-progress-bar-count', data);
                }
                this.progressBarData = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuProgressBarTypeThreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuProgressBarTypeThreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar-type-three',
                    template: "<div class=\"col-12\">\n  <ul class=\"progressbar\">\n    <li [ngClass]=\"{ 'active' : (data?.status == statusKey[0]), \n    'completed' : (data?.status == statusKey[2]), 'toolTip': (data?.status == statusKey[1]) }\" *ngFor=\"let data of\n    progressBarData;let i\n    =index\">\n      <!-- <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\"> -->\n      <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltext\">\n        <span>{{iconInfo}}</span>\n      </span>\n      <span *ngIf=\"(data?.status == statusKey[2])\" class=\"checkmark\"></span>\n      {{data?.name}}\n      <!-- </span> -->\n    </li>\n  </ul>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--suku-primary-color);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:var(--suku-primary-font)}.container{width:100%;position:absolute;z-index:1}.progressbar li{float:left;width:calc(82%/var(--suku-progress-bar-count));position:relative;text-align:center}.progressbar li:before{content:\"\";content:counter(step);counter-increment:step;width:50px;height:50px;display:block;margin:0 auto 10px;border-radius:50%;line-height:50px;background:#757575;color:#fff;text-align:center;font-weight:400;font-size:14px;font-family:var(--suku-primary-font)}.progressbar{counter-reset:step}.progressbar li:after{content:'';position:absolute;width:100%;height:1px;color:#fff;background:#b3b3b3;top:25px;left:-50%;z-index:-1}.progressbar li.active:before{color:#fff;background:var(--suku-primary-color)}.progressbar li.completed:before{color:#fff;background-color:#1c1c1c}.progressbar li.active+li:after,.progressbar li.completed+li:after{background-color:#b3b3b3}.progressbar li:first-child:after{content:none}li{list-style:none;font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.checkmark{position:absolute;top:20%;right:44.5%;z-index:5;background:#1c1c1c;width:12px;height:21px}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:110%;left:51%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}li:hover::before .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarTypeThreeComponent.ctorParameters = function () { return []; };
    SukuProgressBarTypeThreeComponent.propDecorators = {
        statusKey: [{ type: Input, args: ['status-Key',] }],
        data: [{ type: Input }],
        iconInfo: [{ type: Input, args: ['icon-info',] }],
        positionTooltip: [{ type: Input, args: ['position-tooltip',] }],
        positionTooltext: [{ type: Input, args: ['position-tooltext',] }],
        iconInfoCustomClass: [{ type: Input, args: ['icon-info-custom-class',] }],
        customIconClass: [{ type: Input, args: ['custom-icon-class',] }]
    };
    return SukuProgressBarTypeThreeComponent;
}());
export { SukuProgressBarTypeThreeComponent };
if (false) {
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.progressBarData;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.statusKey;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.steps;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.iconInfo;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.positionTooltip;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.positionTooltext;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.iconInfoCustomClass;
    /** @type {?} */
    SukuProgressBarTypeThreeComponent.prototype.customIconClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFvS0U7UUE3SnFCLGNBQVMsR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFpQjFFLFVBQUssR0FBRztZQUNOO2dCQUNFLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE1BQU0sRUFBRTtvQkFDTixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLDBCQUEwQjt3QkFDakMsTUFBTSxFQUFFLGFBQWE7cUJBQ3RCO29CQUNELGFBQWEsRUFBRSwyREFBMkQ7b0JBQzFFLGNBQWMsRUFBRSxVQUFVO29CQUMxQixpQkFBaUIsRUFBRSwwQkFBMEI7b0JBQzdDLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxTQUFTLEVBQUUsMEJBQTBCOzRCQUNyQyxXQUFXLEVBQUUsMEJBQTBCOzRCQUN2QyxZQUFZLEVBQUUsMEJBQTBCO3lCQUN6QztxQkFDRjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsU0FBUyxFQUFFLDBCQUEwQjs0QkFDckMsV0FBVyxFQUFFLDBCQUEwQjs0QkFDdkMsWUFBWSxFQUFFLDBCQUEwQjt5QkFDekM7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE1BQU0sRUFBRTtvQkFDTixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLDBCQUEwQjt3QkFDakMsTUFBTSxFQUFFLFdBQVc7cUJBQ3BCO29CQUNELGFBQWEsRUFBRSxrREFBa0Q7b0JBQ2pF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RSxJQUFJLENBQUMsQ0FBQztpQkFDL0U7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7O3dCQUN0RCxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ2xDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDL0U7Z0JBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQWdKRCxvREFBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkF2S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHlvQkFBNEQ7O2lCQUU3RDs7Ozs7NEJBR0UsS0FBSyxTQUFDLFlBQVk7dUJBQ2xCLEtBQUs7MkJBdUpMLEtBQUssU0FBQyxXQUFXO2tDQUNqQixLQUFLLFNBQUMsa0JBQWtCO21DQUN4QixLQUFLLFNBQUMsbUJBQW1CO3NDQUN6QixLQUFLLFNBQUMsd0JBQXdCO2tDQUM5QixLQUFLLFNBQUMsbUJBQW1COztJQU01Qix3Q0FBQztDQUFBLEFBektELElBeUtDO1NBcEtZLGlDQUFpQzs7O0lBQzVDLDREQUFnQjs7SUFDaEIsc0RBQTBFOztJQWlCMUUsa0RBc0lFOztJQUNGLHFEQUFtRDs7SUFDbkQsNERBQTJDOztJQUMzQyw2REFBNkM7O0lBQzdDLGdFQUEyRTs7SUFDM0UsNERBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdGhyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdGhyZWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJUeXBlVGhyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9ncmVzc0JhckRhdGE7XG4gIEBJbnB1dCgnc3RhdHVzLUtleScpIHN0YXR1c0tleSA9IFsnaW5Qcm9ncmVzcycsICdpbkNvbXBsZXRlJywgJ2NvbXBsZXRlJ107XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGlmICh2YWwubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9ICcxJztcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXN1a3UtcHJvZ3Jlc3MtYmFyLWNvdW50JywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsLmxlbmd0aC50b1N0cmluZygpJywgdmFsLmxlbmd0aC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHZhbC5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXN1a3UtcHJvZ3Jlc3MtYmFyLWNvdW50JywgZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb2dyZXNzQmFyRGF0YSA9IHZhbDtcbiAgICB9XG4gIH1cblxuXG4gIHN0ZXBzID0gW1xuICAgIHtcbiAgICAgICdfb3JkZXInOiAxLFxuICAgICAgJ3N0ZXAnOiB7XG4gICAgICAgICdmYWNpbGl0eSc6IHtcbiAgICAgICAgICAnX2lkJzogJzA4MjcyMWMzZTE0ZDFkN2MwNjJlZTE1OCcsXG4gICAgICAgICAgJ25hbWUnOiAnRmluY2EgTnVldmEnXG4gICAgICAgIH0sXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBdCBGaW5jYSBOdWV2YSwgd2UgcmFpc2UgdGhlIGhlYWx0aGllc3QsIGhhcHBpZXN0IGNhdHRsZS4nLFxuICAgICAgICAnZmFjaWxpdHlUeXBlJzogJ1Byb2R1Y2VyJyxcbiAgICAgICAgJ3RlbXBsYXRlTG9jYXRvcic6ICc4ZmUyYTE3ZWVhYjZlYTA5NjIxMDIwNWYnLFxuICAgICAgICAnaW5wdXRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJ2YzMTIyZGZlNmEwMTVkZDdjYWM0NzdmZScsXG4gICAgICAgICAgICAndGltZXN0YW1wJzogJzIwMTktMDctMDJUMDg6MTQ6MjcuMzA3WicsXG4gICAgICAgICAgICAnYXR0ZXN0ZWRCeSc6ICcxYjUxNTE3NjBhMTIzNTIzMzM3NDg4OTQnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICAnb3V0cHV0cyc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYXNzZXRJZCc6ICcyYWI4YjMxZmIwOGExMjM2YTgzYzQ5NWEnLFxuICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcyMDE5LTA3LTAyVDA4OjE0OjI3LjMwN1onLFxuICAgICAgICAgICAgJ2F0dGVzdGVkQnknOiAnMmE2YjU3ZjNhMTIzZDNiNDFlNDEwNzk1J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgJ29yZGVyJzogMTAsXG4gICAgICAnc3RlcCc6IHtcbiAgICAgICAgJ2ZhY2lsaXR5Jzoge1xuICAgICAgICAgICdfaWQnOiAnZGFjYzVmZDQ2ZjM4NmU3Y2QxMGE3ZjFkJyxcbiAgICAgICAgICAnbmFtZSc6ICdFc21lcmFsZGEnXG4gICAgICAgIH0sXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBdCBFc21lcmFsZGEsIHdlIGFyZSBoZXJlIHRvIHByb2Nlc3MgeW91ciBnb29kcy4nLFxuICAgICAgICAnZmFjaWxpdHlUeXBlJzogJ1Byb2Nlc3NvcicsXG4gICAgICAgICd0ZW1wbGF0ZUxvY2F0b3InOiAnZGJhMjQyNGEyNDNkOGI2YjJhNGYxNDEwJyxcbiAgICAgICAgJ2lucHV0cyc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYXNzZXRJZCc6ICc2OWI0ZWRiMGYzMmE4Y2NmYWY1NjI2NDUnLFxuICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcyMDE5LTA3LTAyVDA4OjE0OjI3LjMwN1onLFxuICAgICAgICAgICAgJ2F0dGVzdGVkQnknOiAnNmFiYTJiZGIxYTEyM2ZhMmQ2OTcyMjc3J1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgJ291dHB1dHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2Fzc2V0SWQnOiAnMjk2OTcxM2U4N2U0NDhlNzFkY2U3OTVmJyxcbiAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMjAxOS0wNy0wMlQwODoxNDoyNy4zMDdaJyxcbiAgICAgICAgICAgICdhdHRlc3RlZEJ5JzogJzZhYmEyYmRhMTIzYjFmYTJkNjk3MjI3NydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICdvcmRlcic6IDIwLFxuICAgICAgJ3N0ZXAnOiB7XG4gICAgICAgICdmYWNpbGl0eSc6IHtcbiAgICAgICAgICAnX2lkJzogJ2FhOGU3MWIyNDJkZGFjOGNiZWVkZWI4MScsXG4gICAgICAgICAgJ25hbWUnOiAnU2FzbWFyJ1xuICAgICAgICB9LFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQXQgU2FzbWFyLCB3ZSBhcmUgaGVyZSB0byBtb3ZlIHlvdXIgZ29vZHMuJyxcbiAgICAgICAgJ2ZhY2lsaXR5VHlwZSc6ICdMb2dpc3RpY3MnLFxuICAgICAgICAndGVtcGxhdGVMb2NhdG9yJzogJzk1YzVlOGFjNDczYzQzMTVmNTQ2YWUzOScsXG4gICAgICAgICdpbnB1dHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2Fzc2V0SWQnOiAnNjg5MzczM2NhZGVmMGMzY2M4MzE5NTNkJyxcbiAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMjAxOS0wNy0wMlQwODoxNDoyNy4zMDdaJyxcbiAgICAgICAgICAgICdhdHRlc3RlZEJ5JzogJzZhYmEyYmExMjNkYjFmYTJkNjk3MjI3NydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgICdvdXRwdXRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJ2MwM2JlZDUwMmY3MGVkYTI1ODdmYTg4ZScsXG4gICAgICAgICAgICAndGltZXN0YW1wJzogJzIwMTktMDctMDJUMDg6MTQ6MjcuMzA3WicsXG4gICAgICAgICAgICAnYXR0ZXN0ZWRCeSc6ICc2YWJhMmJkYTEyM2IxZmEyZDY5NzIyNzcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAnb3JkZXInOiAzMCxcbiAgICAgICdzdGVwJzoge1xuICAgICAgICAnZmFjaWxpdHknOiB7XG4gICAgICAgICAgJ19pZCc6ICcyMTUzZWMxYzZhOTllYjhlZDY1MjU5MjYnLFxuICAgICAgICAgICduYW1lJzogJ0NlZGljYXInXG4gICAgICAgIH0sXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBdCBDZWRpY2FyLCB3ZSBhcmUgaGVyZSB0byBkaXN0cmlidXRlIHlvdXIgZ29vZHMgY29ycmVjdGx5LicsXG4gICAgICAgICdmYWNpbGl0eVR5cGUnOiAnRGlzdHJpYnV0b3InLFxuICAgICAgICAndGVtcGxhdGVMb2NhdG9yJzogJ2JjMTU0MDhhZTRhOWI3ZmUxMGFhZmY1NicsXG4gICAgICAgICdpbnB1dHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2Fzc2V0SWQnOiAnN2EzYzc3OWU4Mjk3Y2E2YzNjZGJkYjJlJyxcbiAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMjAxOS0wNy0wMlQwODoxNDoyNy4zMDdaJyxcbiAgICAgICAgICAgICdhdHRlc3RlZEJ5JzogJzZhYmEyYmExMjNkYjFmYTJkNjk3MjI3NydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgICdvdXRwdXRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJzE3Y2Q1Yzc2YzE4NjU2MTNiMzdjN2UzNycsXG4gICAgICAgICAgICAndGltZXN0YW1wJzogJzIwMTktMDctMDJUMDg6MTQ6MjcuMzA3WicsXG4gICAgICAgICAgICAnYXR0ZXN0ZWRCeSc6ICc2YWJhMmJhMTIzZGIxZmEyZDY5NzIyNzcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAnb3JkZXInOiA0MCxcbiAgICAgICdzdGVwJzoge1xuICAgICAgICAnZmFjaWxpdHknOiB7XG4gICAgICAgICAgJ19pZCc6ICczMDIxYzhiMGIwNjJmYzg1Y2QwZThjNWQnLFxuICAgICAgICAgICduYW1lJzogJ1dvbmcnXG4gICAgICAgIH0sXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdXZSBhcmUgcHJvdWQgdG8gc2VsbCBoZWFsdGh5IGZvb2QgcHJvZHVjdHMgZm9yIGEgZ3JlYXQgcHJpY2UhJyxcbiAgICAgICAgJ2ZhY2lsaXR5VHlwZSc6ICdTdXBlcm1hcmtldCcsXG4gICAgICAgICd0ZW1wbGF0ZUxvY2F0b3InOiAnMjhjMTg0OTE2MTU4M2M3M2QzOGQ3NmE3JyxcbiAgICAgICAgJ2lucHV0cyc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYXNzZXRJZCc6ICcwZGY0ODhhMjdhMTIzMWYyOTNlYTQ3YzMnLFxuICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcyMDE5LTA3LTAyVDA4OjE0OjI3LjMwN1onLFxuICAgICAgICAgICAgJ2F0dGVzdGVkQnknOiAnNmFiYTJiYTEyM2RiMWZhMmQ2OTcyMjc3J1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgJ291dHB1dHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2Fzc2V0SWQnOiAnNjdlN2RmZjQ2YTEyMzFlOWU1MDVkY2M4JyxcbiAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMjAxOS0wNy0wMlQwODoxNDoyNy4zMDdaJyxcbiAgICAgICAgICAgICdhdHRlc3RlZEJ5JzogJzZhYmEyYmExMjNkYjFmYTJkNjk3MjI3NydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJzY3ZTdkZmY0NmExMjMxZTllNTA1ZGNjNydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF07XG4gIEBJbnB1dCgnaWNvbi1pbmZvJykgaWNvbkluZm8gPSAnc3VrdS1zaGlwcGVkLWljb24nO1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAnKSBwb3NpdGlvblRvb2x0aXA7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRleHQnKSBwb3NpdGlvblRvb2x0ZXh0O1xuICBASW5wdXQoJ2ljb24taW5mby1jdXN0b20tY2xhc3MnKSBpY29uSW5mb0N1c3RvbUNsYXNzID0gJ3N1a3Utc2hpcHBlZC1pY29uJztcbiAgQElucHV0KCdjdXN0b20taWNvbi1jbGFzcycpIGN1c3RvbUljb25DbGFzcyA9ICdzdWt1LXhsJztcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iXX0=