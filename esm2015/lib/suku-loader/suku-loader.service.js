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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWxvYWRlci9zdWt1LWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUs5RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBTTdCLFlBQW1CLGFBQXdCO1FBQXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBSHBDLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxJQUFLO1FBQ3RCLElBQUcsSUFBSSxFQUFFOztrQkFDRixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzlELEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtnQkFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3BDLElBQUksRUFBRTtvQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMzQzthQUNELENBQUM7WUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTtZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7SUFFRixDQUFDOzs7WUExQ0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTFEsU0FBUzs7Ozs7SUFPakIsOENBQXlCOztJQUN6QiwrQ0FBMEI7O0lBQzFCLDhDQUFnQzs7SUFDaEMsMENBQWtFOztJQUV0RCwwQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFN1a3VMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL3N1a3UtbG9hZGVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VMb2FkZXJTZXJ2aWNlIHtcblx0cHVibGljIGxvYWRlckRpYWxvZ1dpZHRoO1xuXHRwdWJsaWMgbG9hZGVyRGlhbG9nSGVpZ2h0O1xuXHRwdWJsaWMgbG9hZGVyRGlhbG9nQ2xvc2UgPSB0cnVlO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XG5cdFx0dGhpcy5sb2FkZXJEaWFsb2dIZWlnaHQgPSAnNDIwcHgnO1xuXHRcdHRoaXMubG9hZGVyRGlhbG9nV2lkdGggPSAnNDIlJztcblx0fVxuXG5cdHB1YmxpYyBvcGVuTG9hZGVyKGRhdGE/KSB7XG5cdFx0aWYoZGF0YSkge1xuXHRcdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUxvYWRlckNvbXBvbmVudCwge1xuXHRcdFx0XHR3aWR0aDogdGhpcy5sb2FkZXJEaWFsb2dXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmxvYWRlckRpYWxvZ0hlaWdodCxcblx0XHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmxvYWRlckRpYWxvZ0Nsb3NlLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0bG9nbzogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRcdGxvZ29DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdFx0bG9nb0lkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdFx0aWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHRcdHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdFx0dGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuXHRcdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJydcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZUFsbCgpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=