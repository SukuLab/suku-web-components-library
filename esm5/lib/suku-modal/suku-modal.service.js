/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import { SukuConfirmationModalComponent } from '../suku-confirmation-modal/suku-confirmation-modal.component';
import { BehaviorSubject } from 'rxjs';
import { SukuAddLicenseModalComponent } from '../suku-add-license-modal/suku-add-license-modal.component';
import { SukuConfirmationStatusModalComponent } from '../suku-confirmation-status-modal/suku-confirmation-status-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var SukuModalService = /** @class */ (function () {
    /*  */
    function SukuModalService(dialogService) {
        this.dialogService = dialogService;
        this.confirmationDialogClose = true;
        this.onDialogClose = new EventEmitter();
        /*  */
        this.bSubject = new BehaviorSubject('');
        this.confirmationDialogHeight = 'auto';
        this.confirmationDialogWidth = '500px';
        this.confirmationStatusDialogWidth = '600px';
        this.confirmationStatusDialogHeight = 'auto';
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
                buttonCustomClass: data ? data.buttonCustomClass : '',
                showCloseButton: data ? data.showCloseButton : '',
                buttonLableThreeId: data ? data.buttonLableThreeId : '',
                buttonLableThree: data ? data.buttonLableThree : ''
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
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationModalDialog = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.bSubject.next(data);
        if (data.openDialog) {
            /** @type {?} */
            var dialogRef = this.dialogService.open(SukuConfirmationModalComponent, {
                width: this.confirmationDialogWidth,
                height: this.confirmationDialogHeight,
                disableClose: this.confirmationDialogClose,
                data: {
                    modalData: this.bSubject
                }
            });
            console.log('dialogRef.componentInstance.data', dialogRef.componentInstance.data);
            dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.onDialogClose.emit(result);
            }));
        }
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openConfirmationStatusModalDialog = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.bSubject.next(data);
        if (data.openDialog) {
            /** @type {?} */
            var dialogRef = this.dialogService.open(SukuConfirmationStatusModalComponent, {
                width: this.confirmationStatusDialogWidth,
                height: this.confirmationStatusDialogHeight,
                disableClose: this.confirmationDialogClose,
                data: {
                    modalData: this.bSubject
                }
            });
            console.log('dialogRef.componentInstance.data', dialogRef.componentInstance.data);
            dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.onDialogClose.emit(result);
            }));
        }
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openLicenseModalDialogDialog = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialogService.open(SukuAddLicenseModalComponent, {
            width: 'auto',
            height: 'auto',
            disableClose: this.confirmationDialogClose,
            data: {
                controlOne: data ? data.controlOne : '',
                controlTwo: data ? data.controlTwo : '',
                dateControlOne: data ? data.dateControlOne : '',
                controlTwoRequiredd: data ? data.controlTwoRequiredd : '',
                dateControlTwo: data ? data.dateControlTwo : '',
                'controlOneRequired': data ? data.controlOneRequired : '',
                controlTwoRequired: data ? data.controlTwoRequired : '',
                dateControlOneRequired: data ? data.dateControlOneRequired : '',
                dateControlTwoRequired: data ? data.dateControlTwoRequired : '',
                'controlOnePatternEnabled': data ? data.controlOnePatternEnabled : '',
                'controlTwoPatternEnabled': data ? data.controlTwoPatternEnabled : '',
                'controlOnePattern': data ? data.controlOnePattern : '',
                'controlTwoPattern': data ? data.controlTwoPattern : '',
                'title': data ? data.title : '',
                'subTitle': data ? data.subTitle : '',
                'controlHint': data ? data.controlHint : '',
                'hintClass': data ? data.hintClass : '',
                'headerCutomStyle': data ? data.headerCutomStyle : '',
                'startDateMaxDate': data ? data.startDateMaxDate : '',
                'endDateMaxDate': data ? data.endDateMaxDate : '',
                'startDateMinDate': data ? data.startDateMinDate : '',
                'endDateMinDate': data ? data.endDateMinDate : '',
                'controlOneId': data ? data.controlOneId : '',
                controlTwoId: data ? data.controlTwoId : '',
                dateControlOneId: data ? data.dateControlOneId : '',
                dateControlTwoId: data ? data.dateControlTwoId : '',
                controlTwoToolTip: data ? data.controlTwoToolTip : '',
                controlOnePlaceholder: data ? data.controlOnePlaceholder : '',
                controlTwoPlaceholder: data ? data.controlTwoPlaceholder : '',
                dateControlOnePlaceholder: data ? data.dateControlOnePlaceholder : '',
                dateControlTwoPlaceholder: data ? data.dateControlTwoPlaceholder : '',
                controlOneRquiredErrorMsg: data ? data.controlOneRquiredErrorMsg : '',
                controlTwoRquiredErrorMsg: data ? data.controlTwoRquiredErrorMsg : '',
                controlTwoPatternErrorMsg: data ? data.controlTwoPatternErrorMsg : '',
                dateControlOneRquiredErrorMsg: data ? data.dateControlOneRquired : '',
                dateControlTwoRquiredErrorMsg: data ? data.dateControlTwoRquiredErrorMsg : '',
                acceptDocment: data ? data.acceptDocment : '',
                uploadImg: data ? data.uploadImg : '',
                uploadTitle: data ? data.uploadTitle : '',
                fileListTitle: data ? data.fileListTitle : '',
                fileInputId: data ? data.fileInputId : '',
                filesArray: data ? data.filesArray : '',
                fileRemoveBtnTxt: data ? data.fileRemoveBtnTxt : '',
                fileRemoveBtnId: data ? data.fileRemoveBtnId : '',
                uploadImgAltTxt: data ? data.uploadImgAltTxt : '',
                cancelBtnText: data ? data.cancelBtnText : '',
                submitBtnTxt: data ? data.submitBtnTxt : '',
                submitBtnCustomClass: data ? data.submitBtnCustomClass : '',
                cancelBtnCustomClass: data ? data.cancelBtnCustomClass : '',
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
    SukuModalService.prototype.bSubject;
    /** @type {?} */
    SukuModalService.prototype.confirmationStatusDialogWidth;
    /** @type {?} */
    SukuModalService.prototype.confirmationStatusDialogHeight;
    /** @type {?} */
    SukuModalService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQTs7O0FBRWpJO0lBY0UsTUFBTTtJQUNOLDBCQUFtQixhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQVJwQyw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDL0Isa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFHbEUsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBS2pDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSxpREFBc0I7Ozs7SUFBN0IsVUFBOEIsSUFBSztRQUFuQyxpQkE0QkM7O1lBM0JPLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFD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RUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUU1RDtTQUNGLENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXJKRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVRRLFNBQVM7OzsyQkFEbEI7Q0ErSkMsQUF2SkQsSUF1SkM7U0FuSlksZ0JBQWdCOzs7SUFDM0IsbURBQStCOztJQUMvQixvREFBZ0M7O0lBQ2hDLG1EQUFzQzs7SUFDdEMseUNBQWtFOztJQUdsRSxvQ0FBbUM7O0lBQ25DLHlEQUE4Qjs7SUFDOUIsMERBQStCOztJQUVuQix5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFN1a3VDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi9zdWt1LWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24tbW9kYWwvc3VrdS1jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvblN0YXR1c01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC5jb21wb25lbnQnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgU3VrdU1vZGFsU2VydmljZSB7XG4gIHB1YmxpYyBjb25maXJtYXRpb25EaWFsb2dXaWR0aDtcbiAgcHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodDtcbiAgcHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlID0gdHJ1ZTtcbiAgcHVibGljIG9uRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyogICovXG4gIGJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIGNvbmZpcm1hdGlvblN0YXR1c0RpYWxvZ1dpZHRoO1xuICBjb25maXJtYXRpb25TdGF0dXNEaWFsb2dIZWlnaHQ7XG4gIC8qICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQgPSAnYXV0byc7XG4gICAgdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCA9ICc1MDBweCc7XG4gICAgdGhpcy5jb25maXJtYXRpb25TdGF0dXNEaWFsb2dXaWR0aCA9ICc2MDBweCc7XG4gICAgdGhpcy5jb25maXJtYXRpb25TdGF0dXNEaWFsb2dIZWlnaHQgPSAnYXV0byc7XG4gIH1cblxuICBwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZyhkYXRhPykge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcbiAgICAgIGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuICAgICAgICBpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuICAgICAgICBpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuICAgICAgICB0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcbiAgICAgICAgdGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuICAgICAgICB0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcbiAgICAgICAgdGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuICAgICAgICB0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG4gICAgICAgIHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG4gICAgICAgIGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuICAgICAgICBidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG4gICAgICAgIGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuICAgICAgICBidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG4gICAgICAgIGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnLFxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IGRhdGEgPyBkYXRhLnNob3dDbG9zZUJ1dHRvbjogJycsXG4gICAgICAgIGJ1dHRvbkxhYmxlVGhyZWVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUaHJlZUlkOiAnJyxcbiAgICAgICAgYnV0dG9uTGFibGVUaHJlZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUaHJlZSA6ICcnXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbk1vZGFsRGlhbG9nKGRhdGE/KSB7XG4gICAgdGhpcy5iU3ViamVjdC5uZXh0KGRhdGEpO1xuICAgIGlmIChkYXRhLm9wZW5EaWFsb2cpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCwge1xuICAgICAgICB3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcbiAgICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbW9kYWxEYXRhOiB0aGlzLmJTdWJqZWN0XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhJywgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGEpXG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wZW5Db25maXJtYXRpb25TdGF0dXNNb2RhbERpYWxvZyhkYXRhPykge1xuICAgIHRoaXMuYlN1YmplY3QubmV4dChkYXRhKTtcbiAgICBpZiAoZGF0YS5vcGVuRGlhbG9nKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlybWF0aW9uU3RhdHVzRGlhbG9nV2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maXJtYXRpb25TdGF0dXNEaWFsb2dIZWlnaHQsXG4gICAgICAgIGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1vZGFsRGF0YTogdGhpcy5iU3ViamVjdFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YScsIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhKVxuICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvcGVuTGljZW5zZU1vZGFsRGlhbG9nRGlhbG9nKGRhdGE/KSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb250cm9sT25lOiBkYXRhID8gZGF0YS5jb250cm9sT25lIDogJycsXG4gICAgICAgIGNvbnRyb2xUd286IGRhdGEgPyBkYXRhLmNvbnRyb2xUd28gOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmU6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29SZXF1aXJlZGQ6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29SZXF1aXJlZGQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xUd286IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvIDogJycsXG4gICAgICAgICdjb250cm9sT25lUmVxdWlyZWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lUmVxdWlyZWQgOiAnJyxcbiAgICAgICAgY29udHJvbFR3b1JlcXVpcmVkOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUmVxdWlyZWQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZCA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbFR3b1JlcXVpcmVkOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3b1JlcXVpcmVkIDogJycsXG4gICAgICAgICdjb250cm9sT25lUGF0dGVybkVuYWJsZWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lUGF0dGVybkVuYWJsZWQgOiAnJyxcbiAgICAgICAgJ2NvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCc6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCA6ICcnLFxuICAgICAgICAnY29udHJvbE9uZVBhdHRlcm4nOiBkYXRhID8gZGF0YS5jb250cm9sT25lUGF0dGVybiA6ICcnLFxuICAgICAgICAnY29udHJvbFR3b1BhdHRlcm4nOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGF0dGVybiA6ICcnLFxuICAgICAgICAndGl0bGUnOiBkYXRhID8gZGF0YS50aXRsZSA6ICcnLFxuICAgICAgICAnc3ViVGl0bGUnOiBkYXRhID8gZGF0YS5zdWJUaXRsZSA6ICcnLFxuICAgICAgICAnY29udHJvbEhpbnQnOiBkYXRhID8gZGF0YS5jb250cm9sSGludCA6ICcnLFxuICAgICAgICAnaGludENsYXNzJzogZGF0YSA/IGRhdGEuaGludENsYXNzIDogJycsXG4gICAgICAgICdoZWFkZXJDdXRvbVN0eWxlJzogZGF0YSA/IGRhdGEuaGVhZGVyQ3V0b21TdHlsZSA6ICcnLFxuICAgICAgICAnc3RhcnREYXRlTWF4RGF0ZSc6IGRhdGEgPyBkYXRhLnN0YXJ0RGF0ZU1heERhdGUgOiAnJyxcbiAgICAgICAgJ2VuZERhdGVNYXhEYXRlJzogZGF0YSA/IGRhdGEuZW5kRGF0ZU1heERhdGUgOiAnJyxcbiAgICAgICAgJ3N0YXJ0RGF0ZU1pbkRhdGUnOiBkYXRhID8gZGF0YS5zdGFydERhdGVNaW5EYXRlIDogJycsXG4gICAgICAgICdlbmREYXRlTWluRGF0ZSc6IGRhdGEgPyBkYXRhLmVuZERhdGVNaW5EYXRlIDogJycsXG4gICAgICAgICdjb250cm9sT25lSWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lSWQgOiAnJyxcbiAgICAgICAgY29udHJvbFR3b0lkOiBkYXRhID8gZGF0YS5jb250cm9sVHdvSWQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVJZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVJZCA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbFR3b0lkOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3b0lkIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29Ub29sVGlwOiBkYXRhID8gZGF0YS5jb250cm9sVHdvVG9vbFRpcCA6ICcnLFxuICAgICAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmVQbGFjZWhvbGRlciA6ICcnLFxuICAgICAgICBjb250cm9sVHdvUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QbGFjZWhvbGRlciA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyIDogJycsXG4gICAgICAgIGRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXIgOiAnJyxcbiAgICAgICAgY29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuY29udHJvbE9uZVJxdWlyZWRFcnJvck1zZyA6ICcnLFxuICAgICAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUnF1aXJlZEVycm9yTXNnIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2cgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lUnF1aXJlZCA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2cgOiAnJyxcbiAgICAgICAgYWNjZXB0RG9jbWVudDogZGF0YSA/IGRhdGEuYWNjZXB0RG9jbWVudCA6ICcnLFxuICAgICAgICB1cGxvYWRJbWc6IGRhdGEgPyBkYXRhLnVwbG9hZEltZyA6ICcnLFxuICAgICAgICB1cGxvYWRUaXRsZTogZGF0YSA/IGRhdGEudXBsb2FkVGl0bGUgOiAnJyxcbiAgICAgICAgZmlsZUxpc3RUaXRsZTogZGF0YSA/IGRhdGEuZmlsZUxpc3RUaXRsZSA6ICcnLFxuICAgICAgICBmaWxlSW5wdXRJZDogZGF0YSA/IGRhdGEuZmlsZUlucHV0SWQgOiAnJyxcbiAgICAgICAgZmlsZXNBcnJheTogZGF0YSA/IGRhdGEuZmlsZXNBcnJheSA6ICcnLFxuICAgICAgICBmaWxlUmVtb3ZlQnRuVHh0OiBkYXRhID8gZGF0YS5maWxlUmVtb3ZlQnRuVHh0IDogJycsXG4gICAgICAgIGZpbGVSZW1vdmVCdG5JZDogZGF0YSA/IGRhdGEuZmlsZVJlbW92ZUJ0bklkIDogJycsXG4gICAgICAgIHVwbG9hZEltZ0FsdFR4dDogZGF0YSA/IGRhdGEudXBsb2FkSW1nQWx0VHh0IDogJycsXG4gICAgICAgIGNhbmNlbEJ0blRleHQ6IGRhdGEgPyBkYXRhLmNhbmNlbEJ0blRleHQgOiAnJyxcbiAgICAgICAgc3VibWl0QnRuVHh0OiBkYXRhID8gZGF0YS5zdWJtaXRCdG5UeHQgOiAnJyxcbiAgICAgICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLnN1Ym1pdEJ0bkN1c3RvbUNsYXNzIDogJycsXG4gICAgICAgIGNhbmNlbEJ0bkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5jYW5jZWxCdG5DdXN0b21DbGFzcyA6ICcnLFxuXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19