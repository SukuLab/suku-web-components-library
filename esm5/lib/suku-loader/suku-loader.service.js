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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxvYWRlci9zdWt1LWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUU5RDtJQVNDLDJCQUFtQixhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQUhwQyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdqRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSxzQ0FBVTs7OztJQUFqQixVQUFrQixJQUFLO1FBQXZCLGlCQTRCQztRQTNCQSxJQUFHLElBQUksRUFBRTs7Z0JBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM5RCxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQy9CLFlBQVksRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUNwQyxJQUFJLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDM0M7YUFDRCxDQUFDO1lBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLE1BQU07Z0JBQ3hDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTtZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7SUFFRixDQUFDOztnQkExQ0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFMUSxTQUFTOzs7NEJBRGxCO0NBK0NDLEFBM0NELElBMkNDO1NBeENZLGlCQUFpQjs7O0lBQzdCLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQiw4Q0FBZ0M7O0lBQ2hDLDBDQUFrRTs7SUFFdEQsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdWt1TG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWxvYWRlci5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1TG9hZGVyU2VydmljZSB7XG5cdHB1YmxpYyBsb2FkZXJEaWFsb2dXaWR0aDtcblx0cHVibGljIGxvYWRlckRpYWxvZ0hlaWdodDtcblx0cHVibGljIGxvYWRlckRpYWxvZ0Nsb3NlID0gdHJ1ZTtcblx0cHVibGljIG9uRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGRpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZykge1xuXHRcdHRoaXMubG9hZGVyRGlhbG9nSGVpZ2h0ID0gJzQyMHB4Jztcblx0XHR0aGlzLmxvYWRlckRpYWxvZ1dpZHRoID0gJzQyJSc7XG5cdH1cblxuXHRwdWJsaWMgb3BlbkxvYWRlcihkYXRhPykge1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VMb2FkZXJDb21wb25lbnQsIHtcblx0XHRcdFx0d2lkdGg6IHRoaXMubG9hZGVyRGlhbG9nV2lkdGgsXG5cdFx0XHRcdGhlaWdodDogdGhpcy5sb2FkZXJEaWFsb2dIZWlnaHQsXG5cdFx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5sb2FkZXJEaWFsb2dDbG9zZSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGxvZ286IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0XHRsb2dvQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRcdGxvZ29JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG5cdFx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2VBbGwoKTtcblx0XHR9XG5cblx0fVxufVxuIl19