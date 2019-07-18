/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuLoaderComponent } from './suku-loader.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var SukuLoaderService = /** @class */ (function () {
    function SukuLoaderService(dialogService) {
        this.dialogService = dialogService;
        this.onDialogClose = new EventEmitter();
        this.confirmationDialogHeight = '420px';
        this.confirmationDialogWidth = '42%';
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
        /** @type {?} */
        var dialogRef = this.dialogService.open(SukuLoaderComponent, {
            width: this.confirmationDialogWidth,
            height: this.confirmationDialogHeight,
            disableClose: this.confirmationDialogClose,
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
                titleThreeId: data ? data.titleThreeId : '',
                buttonLableOne: data ? data.buttonLableOne : '',
                buttonLableOneId: data ? data.buttonLableOneId : '',
                buttonLableTwo: data ? data.buttonLableTwo : '',
                buttonLableTwoId: data ? data.buttonLableTwoId : '',
                buttonCustomClass: data ? data.buttonCustomClass : ''
            }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.onDialogClose.emit(result);
        }));
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
    SukuLoaderService.prototype.confirmationDialogWidth;
    /** @type {?} */
    SukuLoaderService.prototype.confirmationDialogHeight;
    /** @type {?} */
    SukuLoaderService.prototype.confirmationDialogClose;
    /** @type {?} */
    SukuLoaderService.prototype.onDialogClose;
    /** @type {?} */
    SukuLoaderService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxvYWRlci9zdWt1LWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUU5RDtJQVNDLDJCQUFtQixhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQUZwQyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2pFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVNLHNDQUFVOzs7O0lBQWpCLFVBQWtCLElBQUs7UUFBdkIsaUJBNEJDOztZQTNCTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDOUQsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDckMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDMUMsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDckQ7U0FDRCxDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQU07WUFDeEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkExQ0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFMUSxTQUFTOzs7NEJBRGxCO0NBK0NDLEFBM0NELElBMkNDO1NBeENZLGlCQUFpQjs7O0lBQzdCLG9EQUErQjs7SUFDL0IscURBQWdDOztJQUNoQyxvREFBK0I7O0lBQy9CLDBDQUFrRTs7SUFFdEQsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdWt1TG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWxvYWRlci5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1TG9hZGVyU2VydmljZSB7XG5cdHB1YmxpYyBjb25maXJtYXRpb25EaWFsb2dXaWR0aDtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodDtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XG5cdFx0dGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQgPSAnNDIwcHgnO1xuXHRcdHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGggPSAnNDIlJztcblx0fVxuXG5cdHB1YmxpYyBvcGVuTG9hZGVyKGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUxvYWRlckNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRsb2dvOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGxvZ29DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGxvZ29JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0aWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG5cdFx0XHRcdHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmUgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd29JZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd29JZCA6ICcnLFxuXHRcdFx0XHRidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG59XG5cbiJdfQ==