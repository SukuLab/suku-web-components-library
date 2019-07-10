/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var SukuModalService = /** @class */ (function () {
    function SukuModalService(dialogService) {
        this.dialogService = dialogService;
        this.onDialogClose = new EventEmitter();
        this.confirmationDialogHeight = 'auto';
        this.confirmationDialogWidth = '564px';
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialog = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialogService.open(SukuConfirmationComponent, {
            width: this.confirmationDialogWidth,
            height: this.confirmationDialogHeight,
            disableClose: this.confirmationDialogClose,
            data: {
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
    /**
     * @return {?}
     */
    SukuModalService.prototype.loader = /**
     * @return {?}
     */
    function () {
    };
    SukuModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SukuModalService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ SukuModalService.ngInjectableDef = i0.defineInjectable({ factory: function SukuModalService_Factory() { return new SukuModalService(i0.inject(i1.MatDialog)); }, token: SukuModalService, providedIn: "root" });
    return SukuModalService;
}());
export { SukuModalService };
if (false) {
    /** @type {?} */
    SukuModalService.prototype.confirmationDialogWidth;
    /** @type {?} */
    SukuModalService.prototype.confirmationDialogHeight;
    /** @type {?} */
    SukuModalService.prototype.confirmationDialogClose;
    /** @type {?} */
    SukuModalService.prototype.onDialogClose;
    /** @type {?} */
    SukuModalService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQUM3RjtJQVNDLDBCQUFtQixhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQUZwQyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2pFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVNLGlEQUFzQjs7OztJQUE3QixVQUE4QixJQUFLO1FBQW5DLGlCQXlCQzs7WUF4Qk0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQzFDLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3JEO1NBQ0QsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFNO1lBQ3hDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLGlDQUFNOzs7SUFBYjtJQUVBLENBQUM7O2dCQTNDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQUpRLFNBQVM7OzsyQkFEbEI7Q0ErQ0MsQUE1Q0QsSUE0Q0M7U0F6Q1ksZ0JBQWdCOzs7SUFDNUIsbURBQStCOztJQUMvQixvREFBZ0M7O0lBQ2hDLG1EQUErQjs7SUFDL0IseUNBQWtFOztJQUV0RCx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1TW9kYWxTZXJ2aWNlIHtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoO1xuXHRwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0O1xuXHRwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nQ2xvc2U7XG5cdHB1YmxpYyBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHtcblx0XHR0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCA9ICdhdXRvJztcblx0XHR0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoID0gJzU2NHB4Jztcblx0fVxuXG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nKGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBsb2FkZXIoKSB7XG5cblx0fVxufVxuXG4iXX0=