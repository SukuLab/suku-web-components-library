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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQTs7O0FBRWpJO0lBY0UsTUFBTTtJQUNOLDBCQUFtQixhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQVJwQyw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDL0Isa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFHbEUsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBS2pDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSxpREFBc0I7Ozs7SUFBN0IsVUFBOEIsSUFBSztRQUFuQyxpQkF5QkM7O1lBeEJPLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFD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QUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQU07WUFDdkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFsSkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUUSxTQUFTOzs7MkJBRGxCO0NBNEpDLEFBcEpELElBb0pDO1NBaEpZLGdCQUFnQjs7O0lBQzNCLG1EQUErQjs7SUFDL0Isb0RBQWdDOztJQUNoQyxtREFBc0M7O0lBQ3RDLHlDQUFrRTs7SUFHbEUsb0NBQW1DOztJQUNuQyx5REFBOEI7O0lBQzlCLDBEQUErQjs7SUFFbkIseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWFkZC1saWNlbnNlLW1vZGFsL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VDb25maXJtYXRpb25TdGF0dXNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwuY29tcG9uZW50J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFN1a3VNb2RhbFNlcnZpY2Uge1xuICBwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nV2lkdGg7XG4gIHB1YmxpYyBjb25maXJtYXRpb25EaWFsb2dIZWlnaHQ7XG4gIHB1YmxpYyBjb25maXJtYXRpb25EaWFsb2dDbG9zZSA9IHRydWU7XG4gIHB1YmxpYyBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qICAqL1xuICBiU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBjb25maXJtYXRpb25TdGF0dXNEaWFsb2dXaWR0aDtcbiAgY29uZmlybWF0aW9uU3RhdHVzRGlhbG9nSGVpZ2h0O1xuICAvKiAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZykge1xuICAgIHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0ID0gJ2F1dG8nO1xuICAgIHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGggPSAnNTAwcHgnO1xuICAgIHRoaXMuY29uZmlybWF0aW9uU3RhdHVzRGlhbG9nV2lkdGggPSAnNjAwcHgnO1xuICAgIHRoaXMuY29uZmlybWF0aW9uU3RhdHVzRGlhbG9nSGVpZ2h0ID0gJ2F1dG8nO1xuICB9XG5cbiAgcHVibGljIG9wZW5Db25maXJtYXRpb25EaWFsb2coZGF0YT8pIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcbiAgICAgICAgaWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcbiAgICAgICAgaWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcbiAgICAgICAgdGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG4gICAgICAgIHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcbiAgICAgICAgdGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG4gICAgICAgIHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcbiAgICAgICAgdGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuICAgICAgICB0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxuICAgICAgICBidXR0b25MYWJsZU9uZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmUgOiAnJyxcbiAgICAgICAgYnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxuICAgICAgICBidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcbiAgICAgICAgYnV0dG9uTGFibGVUd29JZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd29JZCA6ICcnLFxuICAgICAgICBidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9wZW5Db25maXJtYXRpb25Nb2RhbERpYWxvZyhkYXRhPykge1xuICAgIHRoaXMuYlN1YmplY3QubmV4dChkYXRhKTtcbiAgICBpZiAoZGF0YS5vcGVuRGlhbG9nKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXG4gICAgICAgIGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1vZGFsRGF0YTogdGhpcy5iU3ViamVjdFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YScsIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhKVxuICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uU3RhdHVzTW9kYWxEaWFsb2coZGF0YT8pIHtcbiAgICB0aGlzLmJTdWJqZWN0Lm5leHQoZGF0YSk7XG4gICAgaWYgKGRhdGEub3BlbkRpYWxvZykge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvblN0YXR1c01vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvblN0YXR1c0RpYWxvZ1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uU3RhdHVzRGlhbG9nSGVpZ2h0LFxuICAgICAgICBkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtb2RhbERhdGE6IHRoaXMuYlN1YmplY3RcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGEnLCBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YSlcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3BlbkxpY2Vuc2VNb2RhbERpYWxvZ0RpYWxvZyhkYXRhPykge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udHJvbE9uZTogZGF0YSA/IGRhdGEuY29udHJvbE9uZSA6ICcnLFxuICAgICAgICBjb250cm9sVHdvOiBkYXRhID8gZGF0YS5jb250cm9sVHdvIDogJycsXG4gICAgICAgIGRhdGVDb250cm9sT25lOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZSA6ICcnLFxuICAgICAgICBjb250cm9sVHdvUmVxdWlyZWRkOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUmVxdWlyZWRkIDogJycsXG4gICAgICAgIGRhdGVDb250cm9sVHdvOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3byA6ICcnLFxuICAgICAgICAnY29udHJvbE9uZVJlcXVpcmVkJzogZGF0YSA/IGRhdGEuY29udHJvbE9uZVJlcXVpcmVkIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29SZXF1aXJlZDogZGF0YSA/IGRhdGEuY29udHJvbFR3b1JlcXVpcmVkIDogJycsXG4gICAgICAgIGRhdGVDb250cm9sT25lUmVxdWlyZWQ6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lUmVxdWlyZWQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xUd29SZXF1aXJlZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29SZXF1aXJlZCA6ICcnLFxuICAgICAgICAnY29udHJvbE9uZVBhdHRlcm5FbmFibGVkJzogZGF0YSA/IGRhdGEuY29udHJvbE9uZVBhdHRlcm5FbmFibGVkIDogJycsXG4gICAgICAgICdjb250cm9sVHdvUGF0dGVybkVuYWJsZWQnOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGF0dGVybkVuYWJsZWQgOiAnJyxcbiAgICAgICAgJ2NvbnRyb2xPbmVQYXR0ZXJuJzogZGF0YSA/IGRhdGEuY29udHJvbE9uZVBhdHRlcm4gOiAnJyxcbiAgICAgICAgJ2NvbnRyb2xUd29QYXR0ZXJuJzogZGF0YSA/IGRhdGEuY29udHJvbFR3b1BhdHRlcm4gOiAnJyxcbiAgICAgICAgJ3RpdGxlJzogZGF0YSA/IGRhdGEudGl0bGUgOiAnJyxcbiAgICAgICAgJ3N1YlRpdGxlJzogZGF0YSA/IGRhdGEuc3ViVGl0bGUgOiAnJyxcbiAgICAgICAgJ2NvbnRyb2xIaW50JzogZGF0YSA/IGRhdGEuY29udHJvbEhpbnQgOiAnJyxcbiAgICAgICAgJ2hpbnRDbGFzcyc6IGRhdGEgPyBkYXRhLmhpbnRDbGFzcyA6ICcnLFxuICAgICAgICAnaGVhZGVyQ3V0b21TdHlsZSc6IGRhdGEgPyBkYXRhLmhlYWRlckN1dG9tU3R5bGUgOiAnJyxcbiAgICAgICAgJ3N0YXJ0RGF0ZU1heERhdGUnOiBkYXRhID8gZGF0YS5zdGFydERhdGVNYXhEYXRlIDogJycsXG4gICAgICAgICdlbmREYXRlTWF4RGF0ZSc6IGRhdGEgPyBkYXRhLmVuZERhdGVNYXhEYXRlIDogJycsXG4gICAgICAgICdzdGFydERhdGVNaW5EYXRlJzogZGF0YSA/IGRhdGEuc3RhcnREYXRlTWluRGF0ZSA6ICcnLFxuICAgICAgICAnZW5kRGF0ZU1pbkRhdGUnOiBkYXRhID8gZGF0YS5lbmREYXRlTWluRGF0ZSA6ICcnLFxuICAgICAgICAnY29udHJvbE9uZUlkJzogZGF0YSA/IGRhdGEuY29udHJvbE9uZUlkIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29JZDogZGF0YSA/IGRhdGEuY29udHJvbFR3b0lkIDogJycsXG4gICAgICAgIGRhdGVDb250cm9sT25lSWQ6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lSWQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xUd29JZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29JZCA6ICcnLFxuICAgICAgICBjb250cm9sVHdvVG9vbFRpcDogZGF0YSA/IGRhdGEuY29udHJvbFR3b1Rvb2xUaXAgOiAnJyxcbiAgICAgICAgY29udHJvbE9uZVBsYWNlaG9sZGVyOiBkYXRhID8gZGF0YS5jb250cm9sT25lUGxhY2Vob2xkZXIgOiAnJyxcbiAgICAgICAgY29udHJvbFR3b1BsYWNlaG9sZGVyOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGxhY2Vob2xkZXIgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlcjogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlciA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbFR3b1BsYWNlaG9sZGVyOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3b1BsYWNlaG9sZGVyIDogJycsXG4gICAgICAgIGNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2cgOiAnJyxcbiAgICAgICAgY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZyA6ICcnLFxuICAgICAgICBjb250cm9sVHdvUGF0dGVybkVycm9yTXNnOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGF0dGVybkVycm9yTXNnIDogJycsXG4gICAgICAgIGRhdGVDb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZVJxdWlyZWQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvUnF1aXJlZEVycm9yTXNnIDogJycsXG4gICAgICAgIGFjY2VwdERvY21lbnQ6IGRhdGEgPyBkYXRhLmFjY2VwdERvY21lbnQgOiAnJyxcbiAgICAgICAgdXBsb2FkSW1nOiBkYXRhID8gZGF0YS51cGxvYWRJbWcgOiAnJyxcbiAgICAgICAgdXBsb2FkVGl0bGU6IGRhdGEgPyBkYXRhLnVwbG9hZFRpdGxlIDogJycsXG4gICAgICAgIGZpbGVMaXN0VGl0bGU6IGRhdGEgPyBkYXRhLmZpbGVMaXN0VGl0bGUgOiAnJyxcbiAgICAgICAgZmlsZUlucHV0SWQ6IGRhdGEgPyBkYXRhLmZpbGVJbnB1dElkIDogJycsXG4gICAgICAgIGZpbGVzQXJyYXk6IGRhdGEgPyBkYXRhLmZpbGVzQXJyYXkgOiAnJyxcbiAgICAgICAgZmlsZVJlbW92ZUJ0blR4dDogZGF0YSA/IGRhdGEuZmlsZVJlbW92ZUJ0blR4dCA6ICcnLFxuICAgICAgICBmaWxlUmVtb3ZlQnRuSWQ6IGRhdGEgPyBkYXRhLmZpbGVSZW1vdmVCdG5JZCA6ICcnLFxuICAgICAgICB1cGxvYWRJbWdBbHRUeHQ6IGRhdGEgPyBkYXRhLnVwbG9hZEltZ0FsdFR4dCA6ICcnLFxuICAgICAgICBjYW5jZWxCdG5UZXh0OiBkYXRhID8gZGF0YS5jYW5jZWxCdG5UZXh0IDogJycsXG4gICAgICAgIHN1Ym1pdEJ0blR4dDogZGF0YSA/IGRhdGEuc3VibWl0QnRuVHh0IDogJycsXG4gICAgICAgIHN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5zdWJtaXRCdG5DdXN0b21DbGFzcyA6ICcnLFxuICAgICAgICBjYW5jZWxCdG5DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuY2FuY2VsQnRuQ3VzdG9tQ2xhc3MgOiAnJyxcblxuICAgICAgfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==