/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuProgressBarTypeThreeComponent {
    constructor() {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        if (val) {
            if (val.length == 0) {
                /** @type {?} */
                const data = '1';
                document.documentElement.style.setProperty('--suku-progress-bar-count', data);
            }
            else {
                console.log('val.length.toString()', val.length.toString());
                /** @type {?} */
                const data = val.length.toString();
                document.documentElement.style.setProperty('--suku-progress-bar-count', data);
            }
            this.progressBarData = val;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuProgressBarTypeThreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-three',
                template: "<div class=\"col-12\">\n  <ul class=\"progressbar\">\n    <li [ngClass]=\"{ 'active' : (data?.status == statusKey[0]), \n    'completed' : (data?.status == statusKey[2]), 'toolTip': (data?.status == statusKey[1]) }\" *ngFor=\"let data of\n    progressBarData;let i\n    =index\">\n      <!-- <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\"> -->\n      <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltext\">\n        <span>{{iconInfo}}</span>\n      </span>\n      <span *ngIf=\"(data?.status == statusKey[2])\" class=\"checkmark\"></span>\n      {{data?.name}}\n      <!-- </span> -->\n    </li>\n  </ul>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--suku-primary-color);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:var(--suku-primary-font)}.container{width:100%;position:absolute;z-index:1}.progressbar li{float:left;width:calc(82%/var(--suku-progress-bar-count));position:relative;text-align:center}.progressbar li:before{content:\"\";content:counter(step);counter-increment:step;width:50px;height:50px;display:block;margin:0 auto 10px;border-radius:50%;line-height:50px;background:#757575;color:#fff;text-align:center;font-weight:400;font-size:14px;font-family:var(--suku-primary-font)}.progressbar{counter-reset:step}.progressbar li:after{content:'';position:absolute;width:100%;height:1px;color:#fff;background:#b3b3b3;top:25px;left:-50%;z-index:-1}.progressbar li.active:before{color:#fff;background:var(--suku-primary-color)}.progressbar li.completed:before{color:#fff;background-color:#1c1c1c}.progressbar li.active+li:after,.progressbar li.completed+li:after{background-color:#b3b3b3}.progressbar li:first-child:after{content:none}li{list-style:none;font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.checkmark{position:absolute;top:20%;right:44.5%;z-index:5;background:#1c1c1c;width:12px;height:21px}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:110%;left:51%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}li:hover::before .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeThreeComponent.ctorParameters = () => [];
SukuProgressBarTypeThreeComponent.propDecorators = {
    statusKey: [{ type: Input, args: ['status-Key',] }],
    data: [{ type: Input }],
    iconInfo: [{ type: Input, args: ['icon-info',] }],
    positionTooltip: [{ type: Input, args: ['position-tooltip',] }],
    positionTooltext: [{ type: Input, args: ['position-tooltext',] }],
    iconInfoCustomClass: [{ type: Input, args: ['icon-info-custom-class',] }],
    customIconClass: [{ type: Input, args: ['custom-icon-class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10aHJlZS9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGlDQUFpQztJQStKNUM7UUE3SnFCLGNBQVMsR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFpQjFFLFVBQUssR0FBRztZQUNOO2dCQUNFLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE1BQU0sRUFBRTtvQkFDTixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLDBCQUEwQjt3QkFDakMsTUFBTSxFQUFFLGFBQWE7cUJBQ3RCO29CQUNELGFBQWEsRUFBRSwyREFBMkQ7b0JBQzFFLGNBQWMsRUFBRSxVQUFVO29CQUMxQixpQkFBaUIsRUFBRSwwQkFBMEI7b0JBQzdDLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxTQUFTLEVBQUUsMEJBQTBCOzRCQUNyQyxXQUFXLEVBQUUsMEJBQTBCOzRCQUN2QyxZQUFZLEVBQUUsMEJBQTBCO3lCQUN6QztxQkFDRjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsU0FBUyxFQUFFLDBCQUEwQjs0QkFDckMsV0FBVyxFQUFFLDBCQUEwQjs0QkFDdkMsWUFBWSxFQUFFLDBCQUEwQjt5QkFDekM7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE1BQU0sRUFBRTtvQkFDTixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLDBCQUEwQjt3QkFDakMsTUFBTSxFQUFFLFdBQVc7cUJBQ3BCO29CQUNELGFBQWEs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MkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0U7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7O3NCQUN0RCxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvRTtZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQWdKRCxRQUFRO0lBRVIsQ0FBQzs7O1lBdktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyx5b0JBQTREOzthQUU3RDs7Ozs7d0JBR0UsS0FBSyxTQUFDLFlBQVk7bUJBQ2xCLEtBQUs7dUJBdUpMLEtBQUssU0FBQyxXQUFXOzhCQUNqQixLQUFLLFNBQUMsa0JBQWtCOytCQUN4QixLQUFLLFNBQUMsbUJBQW1CO2tDQUN6QixLQUFLLFNBQUMsd0JBQXdCOzhCQUM5QixLQUFLLFNBQUMsbUJBQW1COzs7O0lBN0oxQiw0REFBZ0I7O0lBQ2hCLHNEQUEwRTs7SUFpQjFFLGtEQXNJRTs7SUFDRixxREFBbUQ7O0lBQ25ELDREQUEyQzs7SUFDM0MsNkRBQTZDOztJQUM3QyxnRUFBMkU7O0lBQzNFLDREQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdGhyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXRocmVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyVHlwZVRocmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZ3Jlc3NCYXJEYXRhO1xuICBASW5wdXQoJ3N0YXR1cy1LZXknKSBzdGF0dXNLZXkgPSBbJ2luUHJvZ3Jlc3MnLCAnaW5Db21wbGV0ZScsICdjb21wbGV0ZSddO1xuICBASW5wdXQoKVxuICBzZXQgZGF0YSh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWt1LXByb2dyZXNzLWJhci1jb3VudCcsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbC5sZW5ndGgudG9TdHJpbmcoKScsIHZhbC5sZW5ndGgudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2YWwubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWt1LXByb2dyZXNzLWJhci1jb3VudCcsIGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9ncmVzc0JhckRhdGEgPSB2YWw7XG4gICAgfVxuICB9XG5cblxuICBzdGVwcyA9IFtcbiAgICB7XG4gICAgICAnX29yZGVyJzogMSxcbiAgICAgICdzdGVwJzoge1xuICAgICAgICAnZmFjaWxpdHknOiB7XG4gICAgICAgICAgJ19pZCc6ICcwODI3MjFjM2UxNGQxZDdjMDYyZWUxNTgnLFxuICAgICAgICAgICduYW1lJzogJ0ZpbmNhIE51ZXZhJ1xuICAgICAgICB9LFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQXQgRmluY2EgTnVldmEsIHdlIHJhaXNlIHRoZSBoZWFsdGhpZXN0LCBoYXBwaWVzdCBjYXR0bGUuJyxcbiAgICAgICAgJ2ZhY2lsaXR5VHlwZSc6ICdQcm9kdWNlcicsXG4gICAgICAgICd0ZW1wbGF0ZUxvY2F0b3InOiAnOGZlMmExN2VlYWI2ZWEwOTYyMTAyMDVmJyxcbiAgICAgICAgJ2lucHV0cyc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYXNzZXRJZCc6ICdmMzEyMmRmZTZhMDE1ZGQ3Y2FjNDc3ZmUnLFxuICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcyMDE5LTA3LTAyVDA4OjE0OjI3LjMwN1onLFxuICAgICAgICAgICAgJ2F0dGVzdGVkQnknOiAnMWI1MTUxNzYwYTEyMzUyMzMzNzQ4ODk0J1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgJ291dHB1dHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2Fzc2V0SWQnOiAnMmFiOGIzMWZiMDhhMTIzNmE4M2M0OTVhJyxcbiAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMjAxOS0wNy0wMlQwODoxNDoyNy4zMDdaJyxcbiAgICAgICAgICAgICdhdHRlc3RlZEJ5JzogJzJhNmI1N2YzYTEyM2QzYjQxZTQxMDc5NSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICdvcmRlcic6IDEwLFxuICAgICAgJ3N0ZXAnOiB7XG4gICAgICAgICdmYWNpbGl0eSc6IHtcbiAgICAgICAgICAnX2lkJzogJ2RhY2M1ZmQ0NmYzODZlN2NkMTBhN2YxZCcsXG4gICAgICAgICAgJ25hbWUnOiAnRXNtZXJhbGRhJ1xuICAgICAgICB9LFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQXQgRXNtZXJhbGRhLCB3ZSBhcmUgaGVyZSB0byBwcm9jZXNzIHlvdXIgZ29vZHMuJyxcbiAgICAgICAgJ2ZhY2lsaXR5VHlwZSc6ICdQcm9jZXNzb3InLFxuICAgICAgICAndGVtcGxhdGVMb2NhdG9yJzogJ2RiYTI0MjRhMjQzZDhiNmIyYTRmMTQxMCcsXG4gICAgICAgICdpbnB1dHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2Fzc2V0SWQnOiAnNjliNGVkYjBmMzJhOGNjZmFmNTYyNjQ1JyxcbiAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMjAxOS0wNy0wMlQwODoxNDoyNy4zMDdaJyxcbiAgICAgICAgICAgICdhdHRlc3RlZEJ5JzogJzZhYmEyYmRiMWExMjNmYTJkNjk3MjI3NydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgICdvdXRwdXRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJzI5Njk3MTNlODdlNDQ4ZTcxZGNlNzk1ZicsXG4gICAgICAgICAgICAndGltZXN0YW1wJzogJzIwMTktMDctMDJUMDg6MTQ6MjcuMzA3WicsXG4gICAgICAgICAgICAnYXR0ZXN0ZWRCeSc6ICc2YWJhMmJkYTEyM2IxZmEyZDY5NzIyNzcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAnb3JkZXInOiAyMCxcbiAgICAgICdzdGVwJzoge1xuICAgICAgICAnZmFjaWxpdHknOiB7XG4gICAgICAgICAgJ19pZCc6ICdhYThlNzFiMjQyZGRhYzhjYmVlZGViODEnLFxuICAgICAgICAgICduYW1lJzogJ1Nhc21hcidcbiAgICAgICAgfSxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0F0IFNhc21hciwgd2UgYXJlIGhlcmUgdG8gbW92ZSB5b3VyIGdvb2RzLicsXG4gICAgICAgICdmYWNpbGl0eVR5cGUnOiAnTG9naXN0aWNzJyxcbiAgICAgICAgJ3RlbXBsYXRlTG9jYXRvcic6ICc5NWM1ZThhYzQ3M2M0MzE1ZjU0NmFlMzknLFxuICAgICAgICAnaW5wdXRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJzY4OTM3MzNjYWRlZjBjM2NjODMxOTUzZCcsXG4gICAgICAgICAgICAndGltZXN0YW1wJzogJzIwMTktMDctMDJUMDg6MTQ6MjcuMzA3WicsXG4gICAgICAgICAgICAnYXR0ZXN0ZWRCeSc6ICc2YWJhMmJhMTIzZGIxZmEyZDY5NzIyNzcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICAnb3V0cHV0cyc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYXNzZXRJZCc6ICdjMDNiZWQ1MDJmNzBlZGEyNTg3ZmE4OGUnLFxuICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcyMDE5LTA3LTAyVDA4OjE0OjI3LjMwN1onLFxuICAgICAgICAgICAgJ2F0dGVzdGVkQnknOiAnNmFiYTJiZGExMjNiMWZhMmQ2OTcyMjc3J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgJ29yZGVyJzogMzAsXG4gICAgICAnc3RlcCc6IHtcbiAgICAgICAgJ2ZhY2lsaXR5Jzoge1xuICAgICAgICAgICdfaWQnOiAnMjE1M2VjMWM2YTk5ZWI4ZWQ2NTI1OTI2JyxcbiAgICAgICAgICAnbmFtZSc6ICdDZWRpY2FyJ1xuICAgICAgICB9LFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQXQgQ2VkaWNhciwgd2UgYXJlIGhlcmUgdG8gZGlzdHJpYnV0ZSB5b3VyIGdvb2RzIGNvcnJlY3RseS4nLFxuICAgICAgICAnZmFjaWxpdHlUeXBlJzogJ0Rpc3RyaWJ1dG9yJyxcbiAgICAgICAgJ3RlbXBsYXRlTG9jYXRvcic6ICdiYzE1NDA4YWU0YTliN2ZlMTBhYWZmNTYnLFxuICAgICAgICAnaW5wdXRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJzdhM2M3NzllODI5N2NhNmMzY2RiZGIyZScsXG4gICAgICAgICAgICAndGltZXN0YW1wJzogJzIwMTktMDctMDJUMDg6MTQ6MjcuMzA3WicsXG4gICAgICAgICAgICAnYXR0ZXN0ZWRCeSc6ICc2YWJhMmJhMTIzZGIxZmEyZDY5NzIyNzcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICAnb3V0cHV0cyc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYXNzZXRJZCc6ICcxN2NkNWM3NmMxODY1NjEzYjM3YzdlMzcnLFxuICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcyMDE5LTA3LTAyVDA4OjE0OjI3LjMwN1onLFxuICAgICAgICAgICAgJ2F0dGVzdGVkQnknOiAnNmFiYTJiYTEyM2RiMWZhMmQ2OTcyMjc3J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgJ29yZGVyJzogNDAsXG4gICAgICAnc3RlcCc6IHtcbiAgICAgICAgJ2ZhY2lsaXR5Jzoge1xuICAgICAgICAgICdfaWQnOiAnMzAyMWM4YjBiMDYyZmM4NWNkMGU4YzVkJyxcbiAgICAgICAgICAnbmFtZSc6ICdXb25nJ1xuICAgICAgICB9LFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnV2UgYXJlIHByb3VkIHRvIHNlbGwgaGVhbHRoeSBmb29kIHByb2R1Y3RzIGZvciBhIGdyZWF0IHByaWNlIScsXG4gICAgICAgICdmYWNpbGl0eVR5cGUnOiAnU3VwZXJtYXJrZXQnLFxuICAgICAgICAndGVtcGxhdGVMb2NhdG9yJzogJzI4YzE4NDkxNjE1ODNjNzNkMzhkNzZhNycsXG4gICAgICAgICdpbnB1dHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2Fzc2V0SWQnOiAnMGRmNDg4YTI3YTEyMzFmMjkzZWE0N2MzJyxcbiAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMjAxOS0wNy0wMlQwODoxNDoyNy4zMDdaJyxcbiAgICAgICAgICAgICdhdHRlc3RlZEJ5JzogJzZhYmEyYmExMjNkYjFmYTJkNjk3MjI3NydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgICdvdXRwdXRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhc3NldElkJzogJzY3ZTdkZmY0NmExMjMxZTllNTA1ZGNjOCcsXG4gICAgICAgICAgICAndGltZXN0YW1wJzogJzIwMTktMDctMDJUMDg6MTQ6MjcuMzA3WicsXG4gICAgICAgICAgICAnYXR0ZXN0ZWRCeSc6ICc2YWJhMmJhMTIzZGIxZmEyZDY5NzIyNzcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYXNzZXRJZCc6ICc2N2U3ZGZmNDZhMTIzMWU5ZTUwNWRjYzcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdO1xuICBASW5wdXQoJ2ljb24taW5mbycpIGljb25JbmZvID0gJ3N1a3Utc2hpcHBlZC1pY29uJztcbiAgQElucHV0KCdwb3NpdGlvbi10b29sdGlwJykgcG9zaXRpb25Ub29sdGlwO1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0ZXh0JykgcG9zaXRpb25Ub29sdGV4dDtcbiAgQElucHV0KCdpY29uLWluZm8tY3VzdG9tLWNsYXNzJykgaWNvbkluZm9DdXN0b21DbGFzcyA9ICdzdWt1LXNoaXBwZWQtaWNvbic7XG4gIEBJbnB1dCgnY3VzdG9tLWljb24tY2xhc3MnKSBjdXN0b21JY29uQ2xhc3MgPSAnc3VrdS14bCc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19