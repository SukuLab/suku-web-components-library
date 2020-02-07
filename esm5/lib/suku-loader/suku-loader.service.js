/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-loader/suku-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuLoaderComponent } from './suku-loader.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var SukuLoaderService = /** @class */ (function () {
    function SukuLoaderService(dialogService) {
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
    SukuLoaderService.prototype.openLoader = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (data) {
            /** @type {?} */
            var dialogRef = this.dialogService.open(SukuLoaderComponent, {
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
            function (result) {
                _this.onDialogClose.emit(result);
            }));
        }
        else {
            this.dialogService.closeAll();
        }
    };
    SukuLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SukuLoaderService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ SukuLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function SukuLoaderService_Factory() { return new SukuLoaderService(i0.inject(i1.MatDialog)); }, token: SukuLoaderService, providedIn: "root" });
    return SukuLoaderService;
}());
export { SukuLoaderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxvYWRlci9zdWt1LWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFFOUQ7SUFTQywyQkFBbUIsYUFBd0I7UUFBeEIsa0JBQWEsR0FBYixhQUFhLENBQVc7UUFIcEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHakUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sc0NBQVU7Ozs7SUFBakIsVUFBa0IsSUFBSztRQUF2QixpQkE0QkM7UUEzQkEsSUFBRyxJQUFJLEVBQUU7O2dCQUNGLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDOUQsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDcEMsSUFBSSxFQUFFO29CQUNMLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQzNDO2FBQ0QsQ0FBQztZQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxNQUFNO2dCQUN4QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUMsQ0FBQztTQUNIO2FBQU07WUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO0lBRUYsQ0FBQzs7Z0JBMUNELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBTFEsU0FBUzs7OzRCQURsQjtDQStDQyxBQTNDRCxJQTJDQztTQXhDWSxpQkFBaUI7OztJQUM3Qiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsOENBQWdDOztJQUNoQywwQ0FBa0U7O0lBRXRELDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3VrdUxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1sb2FkZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VrdUxvYWRlclNlcnZpY2Uge1xuXHRwdWJsaWMgbG9hZGVyRGlhbG9nV2lkdGg7XG5cdHB1YmxpYyBsb2FkZXJEaWFsb2dIZWlnaHQ7XG5cdHB1YmxpYyBsb2FkZXJEaWFsb2dDbG9zZSA9IHRydWU7XG5cdHB1YmxpYyBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHtcblx0XHR0aGlzLmxvYWRlckRpYWxvZ0hlaWdodCA9ICc0MjBweCc7XG5cdFx0dGhpcy5sb2FkZXJEaWFsb2dXaWR0aCA9ICc0MiUnO1xuXHR9XG5cblx0cHVibGljIG9wZW5Mb2FkZXIoZGF0YT8pIHtcblx0XHRpZihkYXRhKSB7XG5cdFx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1TG9hZGVyQ29tcG9uZW50LCB7XG5cdFx0XHRcdHdpZHRoOiB0aGlzLmxvYWRlckRpYWxvZ1dpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IHRoaXMubG9hZGVyRGlhbG9nSGVpZ2h0LFxuXHRcdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMubG9hZGVyRGlhbG9nQ2xvc2UsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRsb2dvOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdFx0bG9nb0N1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0XHRsb2dvSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG5cdFx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHRcdHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlQWxsKCk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==