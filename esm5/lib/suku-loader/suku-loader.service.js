/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxvYWRlci9zdWt1LWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUU5RDtJQVNDLDJCQUFtQixhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQUhwQyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdqRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSxzQ0FBVTs7OztJQUFqQixVQUFrQixJQUFLO1FBQXZCLGlCQTRCQztRQTNCQSxJQUFHLElBQUksRUFBRTs7Z0JBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM5RCxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQy9CLFlBQVksRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUNwQyxJQUFJLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDM0M7YUFDRCxDQUFDO1lBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLE1BQU07Z0JBQ3hDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTtZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7SUFFRixDQUFDOztnQkExQ0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFMUSxTQUFTOzs7NEJBRGxCO0NBK0NDLEFBM0NELElBMkNDO1NBeENZLGlCQUFpQjs7O0lBQzdCLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQiw4Q0FBZ0M7O0lBQ2hDLDBDQUFrRTs7SUFFdEQsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgU3VrdUxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1sb2FkZXIuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VMb2FkZXJTZXJ2aWNlIHtcclxuXHRwdWJsaWMgbG9hZGVyRGlhbG9nV2lkdGg7XHJcblx0cHVibGljIGxvYWRlckRpYWxvZ0hlaWdodDtcclxuXHRwdWJsaWMgbG9hZGVyRGlhbG9nQ2xvc2UgPSB0cnVlO1xyXG5cdHB1YmxpYyBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XHJcblx0XHR0aGlzLmxvYWRlckRpYWxvZ0hlaWdodCA9ICc0MjBweCc7XHJcblx0XHR0aGlzLmxvYWRlckRpYWxvZ1dpZHRoID0gJzQyJSc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb3BlbkxvYWRlcihkYXRhPykge1xyXG5cdFx0aWYoZGF0YSkge1xyXG5cdFx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1TG9hZGVyQ29tcG9uZW50LCB7XHJcblx0XHRcdFx0d2lkdGg6IHRoaXMubG9hZGVyRGlhbG9nV2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmxvYWRlckRpYWxvZ0hlaWdodCxcclxuXHRcdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMubG9hZGVyRGlhbG9nQ2xvc2UsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0bG9nbzogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxyXG5cdFx0XHRcdFx0bG9nb0N1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcclxuXHRcdFx0XHRcdGxvZ29JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXHJcblx0XHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXHJcblx0XHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxyXG5cdFx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcclxuXHRcdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxyXG5cdFx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXHJcblx0XHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXHJcblx0XHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXHJcblx0XHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZUFsbCgpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcbn1cclxuIl19