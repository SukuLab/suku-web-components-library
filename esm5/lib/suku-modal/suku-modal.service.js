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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQTs7O0FBRWpJO0lBY0UsTUFBTTtJQUNOLDBCQUFtQixhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQVJwQyw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDL0Isa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFHbEUsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBS2pDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSxpREFBc0I7Ozs7SUFBN0IsVUFBOEIsSUFBSztRQUFuQyxpQkE0QkM7O1lBM0JPLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFD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RUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUU1RDtTQUNGLENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXJKRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVRRLFNBQVM7OzsyQkFEbEI7Q0ErSkMsQUF2SkQsSUF1SkM7U0FuSlksZ0JBQWdCOzs7SUFDM0IsbURBQStCOztJQUMvQixvREFBZ0M7O0lBQ2hDLG1EQUFzQzs7SUFDdEMseUNBQWtFOztJQUdsRSxvQ0FBbUM7O0lBQ25DLHlEQUE4Qjs7SUFDOUIsMERBQStCOztJQUVuQix5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24tbW9kYWwvc3VrdS1jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWFkZC1saWNlbnNlLW1vZGFsL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvblN0YXR1c01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC5jb21wb25lbnQnXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3VrdU1vZGFsU2VydmljZSB7XHJcbiAgcHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoO1xyXG4gIHB1YmxpYyBjb25maXJtYXRpb25EaWFsb2dIZWlnaHQ7XHJcbiAgcHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlID0gdHJ1ZTtcclxuICBwdWJsaWMgb25EaWFsb2dDbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyogICovXHJcbiAgYlN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICBjb25maXJtYXRpb25TdGF0dXNEaWFsb2dXaWR0aDtcclxuICBjb25maXJtYXRpb25TdGF0dXNEaWFsb2dIZWlnaHQ7XHJcbiAgLyogICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQgPSAnYXV0byc7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoID0gJzUwMHB4JztcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU3RhdHVzRGlhbG9nV2lkdGggPSAnNjAwcHgnO1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TdGF0dXNEaWFsb2dIZWlnaHQgPSAnYXV0byc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZyhkYXRhPykge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcclxuICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxyXG4gICAgICAgIGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXHJcbiAgICAgICAgaWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcclxuICAgICAgICB0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcclxuICAgICAgICB0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXHJcbiAgICAgICAgdGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXHJcbiAgICAgICAgdGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxyXG4gICAgICAgIHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcclxuICAgICAgICB0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxyXG4gICAgICAgIGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxyXG4gICAgICAgIGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcclxuICAgICAgICBidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcclxuICAgICAgICBidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXHJcbiAgICAgICAgYnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJycsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiBkYXRhID8gZGF0YS5zaG93Q2xvc2VCdXR0b246ICcnLFxyXG4gICAgICAgIGJ1dHRvbkxhYmxlVGhyZWVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUaHJlZUlkOiAnJyxcclxuICAgICAgICBidXR0b25MYWJsZVRocmVlOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVRocmVlIDogJydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbk1vZGFsRGlhbG9nKGRhdGE/KSB7XHJcbiAgICB0aGlzLmJTdWJqZWN0Lm5leHQoZGF0YSk7XHJcbiAgICBpZiAoZGF0YS5vcGVuRGlhbG9nKSB7XHJcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXHJcbiAgICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG1vZGFsRGF0YTogdGhpcy5iU3ViamVjdFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YScsIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhKVxyXG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5Db25maXJtYXRpb25TdGF0dXNNb2RhbERpYWxvZyhkYXRhPykge1xyXG4gICAgdGhpcy5iU3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gICAgaWYgKGRhdGEub3BlbkRpYWxvZykge1xyXG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICB3aWR0aDogdGhpcy5jb25maXJtYXRpb25TdGF0dXNEaWFsb2dXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uU3RhdHVzRGlhbG9nSGVpZ2h0LFxyXG4gICAgICAgIGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBtb2RhbERhdGE6IHRoaXMuYlN1YmplY3RcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGEnLCBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YSlcclxuICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuTGljZW5zZU1vZGFsRGlhbG9nRGlhbG9nKGRhdGE/KSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1QWRkTGljZW5zZU1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb250cm9sT25lOiBkYXRhID8gZGF0YS5jb250cm9sT25lIDogJycsXHJcbiAgICAgICAgY29udHJvbFR3bzogZGF0YSA/IGRhdGEuY29udHJvbFR3byA6ICcnLFxyXG4gICAgICAgIGRhdGVDb250cm9sT25lOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZSA6ICcnLFxyXG4gICAgICAgIGNvbnRyb2xUd29SZXF1aXJlZGQ6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29SZXF1aXJlZGQgOiAnJyxcclxuICAgICAgICBkYXRlQ29udHJvbFR3bzogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd28gOiAnJyxcclxuICAgICAgICAnY29udHJvbE9uZVJlcXVpcmVkJzogZGF0YSA/IGRhdGEuY29udHJvbE9uZVJlcXVpcmVkIDogJycsXHJcbiAgICAgICAgY29udHJvbFR3b1JlcXVpcmVkOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUmVxdWlyZWQgOiAnJyxcclxuICAgICAgICBkYXRlQ29udHJvbE9uZVJlcXVpcmVkOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZVJlcXVpcmVkIDogJycsXHJcbiAgICAgICAgZGF0ZUNvbnRyb2xUd29SZXF1aXJlZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29SZXF1aXJlZCA6ICcnLFxyXG4gICAgICAgICdjb250cm9sT25lUGF0dGVybkVuYWJsZWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lUGF0dGVybkVuYWJsZWQgOiAnJyxcclxuICAgICAgICAnY29udHJvbFR3b1BhdHRlcm5FbmFibGVkJzogZGF0YSA/IGRhdGEuY29udHJvbFR3b1BhdHRlcm5FbmFibGVkIDogJycsXHJcbiAgICAgICAgJ2NvbnRyb2xPbmVQYXR0ZXJuJzogZGF0YSA/IGRhdGEuY29udHJvbE9uZVBhdHRlcm4gOiAnJyxcclxuICAgICAgICAnY29udHJvbFR3b1BhdHRlcm4nOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGF0dGVybiA6ICcnLFxyXG4gICAgICAgICd0aXRsZSc6IGRhdGEgPyBkYXRhLnRpdGxlIDogJycsXHJcbiAgICAgICAgJ3N1YlRpdGxlJzogZGF0YSA/IGRhdGEuc3ViVGl0bGUgOiAnJyxcclxuICAgICAgICAnY29udHJvbEhpbnQnOiBkYXRhID8gZGF0YS5jb250cm9sSGludCA6ICcnLFxyXG4gICAgICAgICdoaW50Q2xhc3MnOiBkYXRhID8gZGF0YS5oaW50Q2xhc3MgOiAnJyxcclxuICAgICAgICAnaGVhZGVyQ3V0b21TdHlsZSc6IGRhdGEgPyBkYXRhLmhlYWRlckN1dG9tU3R5bGUgOiAnJyxcclxuICAgICAgICAnc3RhcnREYXRlTWF4RGF0ZSc6IGRhdGEgPyBkYXRhLnN0YXJ0RGF0ZU1heERhdGUgOiAnJyxcclxuICAgICAgICAnZW5kRGF0ZU1heERhdGUnOiBkYXRhID8gZGF0YS5lbmREYXRlTWF4RGF0ZSA6ICcnLFxyXG4gICAgICAgICdzdGFydERhdGVNaW5EYXRlJzogZGF0YSA/IGRhdGEuc3RhcnREYXRlTWluRGF0ZSA6ICcnLFxyXG4gICAgICAgICdlbmREYXRlTWluRGF0ZSc6IGRhdGEgPyBkYXRhLmVuZERhdGVNaW5EYXRlIDogJycsXHJcbiAgICAgICAgJ2NvbnRyb2xPbmVJZCc6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmVJZCA6ICcnLFxyXG4gICAgICAgIGNvbnRyb2xUd29JZDogZGF0YSA/IGRhdGEuY29udHJvbFR3b0lkIDogJycsXHJcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVJZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVJZCA6ICcnLFxyXG4gICAgICAgIGRhdGVDb250cm9sVHdvSWQ6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvSWQgOiAnJyxcclxuICAgICAgICBjb250cm9sVHdvVG9vbFRpcDogZGF0YSA/IGRhdGEuY29udHJvbFR3b1Rvb2xUaXAgOiAnJyxcclxuICAgICAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmVQbGFjZWhvbGRlciA6ICcnLFxyXG4gICAgICAgIGNvbnRyb2xUd29QbGFjZWhvbGRlcjogZGF0YSA/IGRhdGEuY29udHJvbFR3b1BsYWNlaG9sZGVyIDogJycsXHJcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlcjogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlciA6ICcnLFxyXG4gICAgICAgIGRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXIgOiAnJyxcclxuICAgICAgICBjb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiBkYXRhID8gZGF0YS5jb250cm9sT25lUnF1aXJlZEVycm9yTXNnIDogJycsXHJcbiAgICAgICAgY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZyA6ICcnLFxyXG4gICAgICAgIGNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2cgOiAnJyxcclxuICAgICAgICBkYXRlQ29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVScXVpcmVkIDogJycsXHJcbiAgICAgICAgZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvUnF1aXJlZEVycm9yTXNnIDogJycsXHJcbiAgICAgICAgYWNjZXB0RG9jbWVudDogZGF0YSA/IGRhdGEuYWNjZXB0RG9jbWVudCA6ICcnLFxyXG4gICAgICAgIHVwbG9hZEltZzogZGF0YSA/IGRhdGEudXBsb2FkSW1nIDogJycsXHJcbiAgICAgICAgdXBsb2FkVGl0bGU6IGRhdGEgPyBkYXRhLnVwbG9hZFRpdGxlIDogJycsXHJcbiAgICAgICAgZmlsZUxpc3RUaXRsZTogZGF0YSA/IGRhdGEuZmlsZUxpc3RUaXRsZSA6ICcnLFxyXG4gICAgICAgIGZpbGVJbnB1dElkOiBkYXRhID8gZGF0YS5maWxlSW5wdXRJZCA6ICcnLFxyXG4gICAgICAgIGZpbGVzQXJyYXk6IGRhdGEgPyBkYXRhLmZpbGVzQXJyYXkgOiAnJyxcclxuICAgICAgICBmaWxlUmVtb3ZlQnRuVHh0OiBkYXRhID8gZGF0YS5maWxlUmVtb3ZlQnRuVHh0IDogJycsXHJcbiAgICAgICAgZmlsZVJlbW92ZUJ0bklkOiBkYXRhID8gZGF0YS5maWxlUmVtb3ZlQnRuSWQgOiAnJyxcclxuICAgICAgICB1cGxvYWRJbWdBbHRUeHQ6IGRhdGEgPyBkYXRhLnVwbG9hZEltZ0FsdFR4dCA6ICcnLFxyXG4gICAgICAgIGNhbmNlbEJ0blRleHQ6IGRhdGEgPyBkYXRhLmNhbmNlbEJ0blRleHQgOiAnJyxcclxuICAgICAgICBzdWJtaXRCdG5UeHQ6IGRhdGEgPyBkYXRhLnN1Ym1pdEJ0blR4dCA6ICcnLFxyXG4gICAgICAgIHN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5zdWJtaXRCdG5DdXN0b21DbGFzcyA6ICcnLFxyXG4gICAgICAgIGNhbmNlbEJ0bkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5jYW5jZWxCdG5DdXN0b21DbGFzcyA6ICcnLFxyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=