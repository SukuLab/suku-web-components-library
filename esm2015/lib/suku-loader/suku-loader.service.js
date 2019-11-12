/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuLoaderComponent } from './suku-loader.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class SukuLoaderService {
    /**
     * @param {?} dialogService
     */
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.loaderDialogClose = true;
        this.onDialogClose = new EventEmitter();
        this.loaderDialogHeight = '420px';
        this.loaderDialogWidth = '42%';
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openLoader(data) {
        if (data) {
            /** @type {?} */
            const dialogRef = this.dialogService.open(SukuLoaderComponent, {
                width: this.loaderDialogWidth,
                height: this.loaderDialogHeight,
                disableClose: this.loaderDialogClose,
                data: {
                    logo: data ? data.icon : '',
                    logoCustomClass: data ? data.iconCustomClass : '',
                    logoId: data ? data.iconId : '',
                    icon: data ? data.icon : '',
                    iconCustomClass: data ? data.iconCustomClass : '',
                    iconId: data ? data.iconId : '',
                    titleOne: data ? data.titleOne : '',
                    titleOneId: data ? data.titleOneId : '',
                    titleTwo: data ? data.titleTwo : '',
                    titleTwoId: data ? data.titleOneId : '',
                    titleThree: data ? data.titleThree : '',
                    titleThreeId: data ? data.titleThreeId : ''
                }
            });
            dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                this.onDialogClose.emit(result);
            }));
        }
        else {
            this.dialogService.closeAll();
        }
    }
}
SukuLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SukuLoaderService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ SukuLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function SukuLoaderService_Factory() { return new SukuLoaderService(i0.inject(i1.MatDialog)); }, token: SukuLoaderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SukuLoaderService.prototype.loaderDialogWidth;
    /** @type {?} */
    SukuLoaderService.prototype.loaderDialogHeight;
    /** @type {?} */
    SukuLoaderService.prototype.loaderDialogClose;
    /** @type {?} */
    SukuLoaderService.prototype.onDialogClose;
    /** @type {?} */
    SukuLoaderService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxvYWRlci9zdWt1LWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUs5RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBTTdCLFlBQW1CLGFBQXdCO1FBQXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBSHBDLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxJQUFLO1FBQ3RCLElBQUcsSUFBSSxFQUFFOztrQkFDRixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzlELEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtnQkFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3BDLElBQUksRUFBRTtvQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMzQzthQUNELENBQUM7WUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTtZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7SUFFRixDQUFDOzs7WUExQ0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTFEsU0FBUzs7Ozs7SUFPakIsOENBQXlCOztJQUN6QiwrQ0FBMEI7O0lBQzFCLDhDQUFnQzs7SUFDaEMsMENBQWtFOztJQUV0RCwwQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBTdWt1TG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWxvYWRlci5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUxvYWRlclNlcnZpY2Uge1xyXG5cdHB1YmxpYyBsb2FkZXJEaWFsb2dXaWR0aDtcclxuXHRwdWJsaWMgbG9hZGVyRGlhbG9nSGVpZ2h0O1xyXG5cdHB1YmxpYyBsb2FkZXJEaWFsb2dDbG9zZSA9IHRydWU7XHJcblx0cHVibGljIG9uRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHtcclxuXHRcdHRoaXMubG9hZGVyRGlhbG9nSGVpZ2h0ID0gJzQyMHB4JztcclxuXHRcdHRoaXMubG9hZGVyRGlhbG9nV2lkdGggPSAnNDIlJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvcGVuTG9hZGVyKGRhdGE/KSB7XHJcblx0XHRpZihkYXRhKSB7XHJcblx0XHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VMb2FkZXJDb21wb25lbnQsIHtcclxuXHRcdFx0XHR3aWR0aDogdGhpcy5sb2FkZXJEaWFsb2dXaWR0aCxcclxuXHRcdFx0XHRoZWlnaHQ6IHRoaXMubG9hZGVyRGlhbG9nSGVpZ2h0LFxyXG5cdFx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5sb2FkZXJEaWFsb2dDbG9zZSxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRsb2dvOiBkYXRhID8gZGF0YS5pY29uIDogJycsXHJcblx0XHRcdFx0XHRsb2dvQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxyXG5cdFx0XHRcdFx0bG9nb0lkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcclxuXHRcdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcclxuXHRcdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXHJcblx0XHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxyXG5cdFx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXHJcblx0XHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXHJcblx0XHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcclxuXHRcdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcclxuXHRcdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcclxuXHRcdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlQWxsKCk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxufVxyXG4iXX0=