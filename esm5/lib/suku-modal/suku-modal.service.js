/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var SukuModalService = /** @class */ (function () {
    function SukuModalService(dialogService) {
        this.dialogService = dialogService;
        // public onDialogClose: EventEmitter<any> = new EventEmitter<any>();
        this.onDialogCloseInterest = new EventEmitter();
        this.onDialogCloseList = new EventEmitter();
        this.onDialogClosePlaceBid = new EventEmitter();
        this.onDialogCloseAcceptBid = new EventEmitter();
        this.onDialogCloseSendPayment = new EventEmitter();
        this.onDialogCloseDeleteList = new EventEmitter();
        this.onDialogCloseCancelBid = new EventEmitter();
        this.onDialogCloseUpdateInterest = new EventEmitter();
        this.confirmationDialogHeight = 'auto';
        this.confirmationDialogWidth = '500px';
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogInterest = /**
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
            _this.onDialogCloseInterest.emit(result);
        }));
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogList = /**
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
            _this.onDialogCloseList.emit(result);
        }));
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogPlaceBid = /**
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
            _this.onDialogClosePlaceBid.emit(result);
        }));
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogAcceptBid = /**
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
            _this.onDialogCloseAcceptBid.emit(result);
        }));
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogSendPayment = /**
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
            _this.onDialogCloseSendPayment.emit(result);
        }));
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogDeleteList = /**
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
            _this.onDialogCloseDeleteList.emit(result);
        }));
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogCancelBid = /**
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
            _this.onDialogCloseCancelBid.emit(result);
        }));
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationDialogUpdateInterest = /**
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
            _this.onDialogCloseUpdateInterest.emit(result);
        }));
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
    SukuModalService.prototype.onDialogCloseInterest;
    /** @type {?} */
    SukuModalService.prototype.onDialogCloseList;
    /** @type {?} */
    SukuModalService.prototype.onDialogClosePlaceBid;
    /** @type {?} */
    SukuModalService.prototype.onDialogCloseAcceptBid;
    /** @type {?} */
    SukuModalService.prototype.onDialogCloseSendPayment;
    /** @type {?} */
    SukuModalService.prototype.onDialogCloseDeleteList;
    /** @type {?} */
    SukuModalService.prototype.onDialogCloseCancelBid;
    /** @type {?} */
    SukuModalService.prototype.onDialogCloseUpdateInterest;
    /** @type {?} */
    SukuModalService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQUM3RjtJQWlCQywwQkFBbUIsYUFBd0I7UUFBeEIsa0JBQWEsR0FBYixhQUFhLENBQVc7O1FBVHBDLDBCQUFxQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25FLHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9ELDBCQUFxQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25FLDJCQUFzQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BFLDZCQUF3QixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RFLDRCQUF1QixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JFLDJCQUFzQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BFLGdDQUEyQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRy9FLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVNLHlEQUE4Qjs7OztJQUFyQyxVQUFzQyxJQUFLO1FBQTNDLGlCQXlCQzs7WUF4Qk0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ25D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QUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3JEO1NBQ0QsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFNO1lBQ3hDLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkF4T0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFKUSxTQUFTOzs7MkJBRGxCO0NBNE9DLEFBek9ELElBeU9DO1NBdE9ZLGdCQUFnQjs7O0lBQzVCLG1EQUErQjs7SUFDL0Isb0RBQWdDOztJQUNoQyxtREFBK0I7O0lBRS9CLGlEQUEwRTs7SUFDMUUsNkNBQXNFOztJQUN0RSxpREFBMEU7O0lBQzFFLGtEQUEyRTs7SUFDM0Usb0RBQTZFOztJQUM3RSxtREFBNEU7O0lBQzVFLGtEQUEyRTs7SUFDM0UsdURBQWdGOztJQUVwRSx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1TW9kYWxTZXJ2aWNlIHtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoO1xuXHRwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0O1xuXHRwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nQ2xvc2U7XG5cdC8vIHB1YmxpYyBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZUludGVyZXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZUxpc3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdHB1YmxpYyBvbkRpYWxvZ0Nsb3NlUGxhY2VCaWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdHB1YmxpYyBvbkRpYWxvZ0Nsb3NlQWNjZXB0QmlkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZVNlbmRQYXltZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWNcdG9uRGlhbG9nQ2xvc2VEZWxldGVMaXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZUNhbmNlbEJpZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljIG9uRGlhbG9nQ2xvc2VVcGRhdGVJbnRlcmVzdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XG5cdFx0dGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQgPSAnYXV0byc7XG5cdFx0dGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCA9ICc1MDBweCc7XG5cdH1cblxuXHRwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZ0ludGVyZXN0KGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlSW50ZXJlc3QuZW1pdChyZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIG9wZW5Db25maXJtYXRpb25EaWFsb2dMaXN0KGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlTGlzdC5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIG9wZW5Db25maXJtYXRpb25EaWFsb2dQbGFjZUJpZChkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMub25EaWFsb2dDbG9zZVBsYWNlQmlkLmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXHRwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZ0FjY2VwdEJpZChkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMub25EaWFsb2dDbG9zZUFjY2VwdEJpZC5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIG9wZW5Db25maXJtYXRpb25EaWFsb2dTZW5kUGF5bWVudChkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMub25EaWFsb2dDbG9zZVNlbmRQYXltZW50LmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXHRwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZ0RlbGV0ZUxpc3QoZGF0YT8pIHtcblx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50LCB7XG5cdFx0XHR3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcblx0XHRcdGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXG5cdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0aWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG5cdFx0XHRcdHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmUgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd29JZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd29JZCA6ICcnLFxuXHRcdFx0XHRidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2VEZWxldGVMaXN0LmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nQ2FuY2VsQmlkKGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlQ2FuY2VsQmlkLmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nVXBkYXRlSW50ZXJlc3QoZGF0YT8pIHtcblx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50LCB7XG5cdFx0XHR3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcblx0XHRcdGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXG5cdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0aWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG5cdFx0XHRcdHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmUgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd29JZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd29JZCA6ICcnLFxuXHRcdFx0XHRidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2VVcGRhdGVJbnRlcmVzdC5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==