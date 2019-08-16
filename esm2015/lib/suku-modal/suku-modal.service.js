/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import { SukuConfirmationModalComponent } from '../suku-confirmation-modal/suku-confirmation-modal.component';
import { SukuAddLicenseModalComponent } from '../suku-add-license-modal/suku-add-license-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
// import { Observable } from 'rxjs/Rx';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
export class SukuModalService {
    /**
     * @param {?} dialogService
     */
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.confirmationDialogClose = true;
        this.onDialogClose = new EventEmitter();
        this.confirmationDialogHeight = 'auto';
        this.confirmationDialogWidth = '500px';
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialog(data) {
        /** @type {?} */
        const dialogRef = this.dialogService.open(SukuConfirmationComponent, {
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
        (result) => {
            this.onDialogClose.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationModalDialog(data) {
        /** @type {?} */
        const dialogRef = this.dialogService.open(SukuConfirmationModalComponent, {
            width: this.confirmationDialogWidth,
            height: this.confirmationDialogHeight,
            disableClose: this.confirmationDialogClose,
            data: {
                imgSrc: data ? data.imgSrc : '',
                message: data ? data.message : '',
                description: data ? data.description : '',
                buttonText: data ? data.buttonText : ''
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
    /**
     * @param {?=} data
     * @return {?}
     */
    openLicenseModalDialogDialog(data) {
        /** @type {?} */
        const dialogRef = this.dialogService.open(SukuAddLicenseModalComponent, {
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
        (result) => {
            this.onDialogClose.emit(result);
        }));
    }
}
SukuModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SukuModalService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ SukuModalService.ngInjectableDef = i0.defineInjectable({ factory: function SukuModalService_Factory() { return new SukuModalService(i0.inject(i1.MatDialog)); }, token: SukuModalService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7Ozs7O0FBUzFHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFNNUIsWUFBbUIsYUFBd0I7UUFBeEIsa0JBQWEsR0FBYixhQUFhLENBQVc7UUFGcEMsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFakUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sc0JBQXNCLENBQUMsSUFBSzs7Y0FDNUIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQzFDLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixlQUFl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QyxFQUFFO2dCQUN6QyxvQkFBb0IsRUFBRSxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQSxDQUFDLENBQUMsRUFBRTtnQkFDekQsb0JBQW9CLEVBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUEsQ0FBQyxDQUFDLEVBQUU7YUFFekQ7U0FDRCxDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBekhELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVZRLFNBQVM7Ozs7O0lBY2pCLG1EQUErQjs7SUFDL0Isb0RBQWdDOztJQUNoQyxtREFBc0M7O0lBQ3RDLHlDQUFrRTs7SUFDdEQseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFN1a3VDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi9zdWt1LWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24tbW9kYWwvc3VrdS1jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWFkZC1saWNlbnNlLW1vZGFsL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4Jztcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JzsgXG5cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWt1TW9kYWxTZXJ2aWNlIHtcblx0Ly8gcHVibGljIHVwbG9hZEZpbGVzID0gIG5ldyBTdWJqZWN0PGFueT4oKTsgXG5cdHB1YmxpYyBjb25maXJtYXRpb25EaWFsb2dXaWR0aDtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodDtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlID0gdHJ1ZTtcblx0cHVibGljIG9uRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHtcblx0XHR0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCA9ICdhdXRvJztcblx0XHR0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoID0gJzUwMHB4Jztcblx0fVxuXG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nKGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXG5cblx0cHVibGljIG9wZW5Db25maXJtYXRpb25Nb2RhbERpYWxvZyhkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpbWdTcmM6IGRhdGEgPyBkYXRhLmltZ1NyYyA6ICcnLFxuXHRcdFx0XHRtZXNzYWdlOiBkYXRhID8gZGF0YS5tZXNzYWdlIDogJycsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBkYXRhID8gZGF0YS5kZXNjcmlwdGlvbiA6ICcnLFxuXHRcdFx0XHRidXR0b25UZXh0OiBkYXRhID8gZGF0YS5idXR0b25UZXh0IDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuICAgIFxuICAgIHB1YmxpYyBvcGVuTGljZW5zZU1vZGFsRGlhbG9nRGlhbG9nKGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6ICdhdXRvJyxcblx0XHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRjb250cm9sT25lOiBkYXRhPyBkYXRhLmNvbnRyb2xPbmU6ICcnLFxuXHRcdFx0XHRjb250cm9sVHdvOiBkYXRhPyBkYXRhLmNvbnRyb2xUd286ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbE9uZTogZGF0YT8gZGF0YS5kYXRlQ29udHJvbE9uZTogJycsIFxuXHRcdFx0XHRjb250cm9sVHdvUmVxdWlyZWRkOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29SZXF1aXJlZGQ6ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbFR3bzogZGF0YT8gZGF0YS5kYXRlQ29udHJvbFR3bzogJycsXG5cdFx0XHRcdCdjb250cm9sT25lUmVxdWlyZWQnOiBkYXRhPyBkYXRhLmNvbnRyb2xPbmVSZXF1aXJlZDogJycsXG5cdFx0XHRcdGNvbnRyb2xUd29SZXF1aXJlZDogZGF0YT8gZGF0YS5jb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbE9uZVJlcXVpcmVkOiBkYXRhPyBkYXRhLmRhdGVDb250cm9sT25lUmVxdWlyZWQ6ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbFR3b1JlcXVpcmVkOiBkYXRhPyBkYXRhLmRhdGVDb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxuXHRcdFx0XHQnY29udHJvbE9uZVBhdHRlcm5FbmFibGVkJzogZGF0YT8gZGF0YS5jb250cm9sT25lUGF0dGVybkVuYWJsZWQ6ICcnLFxuXHRcdFx0XHQnY29udHJvbFR3b1BhdHRlcm5FbmFibGVkJzogZGF0YT8gZGF0YS5jb250cm9sVHdvUGF0dGVybkVuYWJsZWQ6ICcnLFxuXHRcdFx0XHQnY29udHJvbE9uZVBhdHRlcm4nOiBkYXRhPyBkYXRhLmNvbnRyb2xPbmVQYXR0ZXJuOiAnJyxcblx0XHRcdFx0J2NvbnRyb2xUd29QYXR0ZXJuJzogZGF0YT8gZGF0YS5jb250cm9sVHdvUGF0dGVybjogJycsXG5cdFx0XHRcdCd0aXRsZSc6IGRhdGE/IGRhdGEudGl0bGU6ICcnLFxuXHRcdFx0XHQnc3ViVGl0bGUnOiBkYXRhPyBkYXRhLnN1YlRpdGxlOiAnJyxcblx0XHRcdFx0J2NvbnRyb2xIaW50JzogZGF0YT8gZGF0YS5jb250cm9sSGludDogJycsXG5cdFx0XHRcdCdoaW50Q2xhc3MnOiBkYXRhPyBkYXRhLmhpbnRDbGFzczogJycsXG5cdFx0XHRcdCdoZWFkZXJDdXRvbVN0eWxlJzogZGF0YT8gZGF0YS5oZWFkZXJDdXRvbVN0eWxlOiAnJyxcblx0XHRcdFx0J3N0YXJ0RGF0ZU1heERhdGUnOiBkYXRhPyBkYXRhLnN0YXJ0RGF0ZU1heERhdGU6ICcnLFxuXHRcdFx0XHQnZW5kRGF0ZU1heERhdGUnOiBkYXRhPyBkYXRhLmVuZERhdGVNYXhEYXRlOiAnJyxcblx0XHRcdFx0J3N0YXJ0RGF0ZU1pbkRhdGUnOiBkYXRhPyBkYXRhLnN0YXJ0RGF0ZU1pbkRhdGU6ICcnLFxuXHRcdFx0XHQnZW5kRGF0ZU1pbkRhdGUnOiBkYXRhPyBkYXRhLmVuZERhdGVNaW5EYXRlOiAnJyxcblx0XHRcdFx0J2NvbnRyb2xPbmVJZCc6IGRhdGE/IGRhdGEuY29udHJvbE9uZUlkOiAnJyxcblx0XHRcdFx0Y29udHJvbFR3b0lkOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29JZDogJycsXG5cdFx0XHRcdGRhdGVDb250cm9sT25lSWQ6IGRhdGE/IGRhdGEuZGF0ZUNvbnRyb2xPbmVJZDogJycsXG5cdFx0XHRcdGRhdGVDb250cm9sVHdvSWQ6IGRhdGE/IGRhdGEuZGF0ZUNvbnRyb2xUd29JZDogJycsXG5cdFx0XHRcdGNvbnRyb2xUd29Ub29sVGlwOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29Ub29sVGlwOiAnJywgXG5cdFx0XHRcdGNvbnRyb2xPbmVQbGFjZWhvbGRlcjogZGF0YT8gZGF0YS5jb250cm9sT25lUGxhY2Vob2xkZXI6ICcnLFxuXHRcdFx0XHRjb250cm9sVHdvUGxhY2Vob2xkZXI6IGRhdGE/IGRhdGEuY29udHJvbFR3b1BsYWNlaG9sZGVyOiAnJyxcblx0XHRcdFx0ZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlcjogZGF0YT8gZGF0YS5kYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyOiAnJyxcblx0XHRcdFx0ZGF0ZUNvbnRyb2xUd29QbGFjZWhvbGRlcjogZGF0YT8gZGF0YS5kYXRlQ29udHJvbFR3b1BsYWNlaG9sZGVyOiAnJyxcblx0XHRcdFx0Y29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogZGF0YT8gZGF0YS5jb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiAnJyxcblx0XHRcdFx0Y29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogZGF0YT8gZGF0YS5jb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiAnJyxcblx0XHRcdFx0Y29udHJvbFR3b1BhdHRlcm5FcnJvck1zZzogZGF0YT8gZGF0YS5jb250cm9sVHdvUGF0dGVybkVycm9yTXNnOiAnJyxcblx0XHRcdFx0ZGF0ZUNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6IGRhdGE/IGRhdGEuZGF0ZUNvbnRyb2xPbmVScXVpcmVkOiAnJyxcblx0XHRcdFx0ZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6IGRhdGE/IGRhdGEuZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6ICcnLFxuXHRcdFx0XHRhY2NlcHREb2NtZW50OiBkYXRhPyBkYXRhLmFjY2VwdERvY21lbnQ6ICcnLFxuXHRcdFx0XHR1cGxvYWRJbWc6IGRhdGE/IGRhdGEudXBsb2FkSW1nOiAnJyxcblx0XHRcdFx0dXBsb2FkVGl0bGU6IGRhdGE/IGRhdGEudXBsb2FkVGl0bGU6ICcnLFxuXHRcdFx0XHRmaWxlTGlzdFRpdGxlOiBkYXRhPyBkYXRhLmZpbGVMaXN0VGl0bGU6ICcnLFxuXHRcdFx0XHRmaWxlSW5wdXRJZDogZGF0YT8gZGF0YS5maWxlSW5wdXRJZDogJycsXG5cdFx0XHRcdGZpbGVzQXJyYXk6IGRhdGE/IGRhdGEuZmlsZXNBcnJheTogJycsXG5cdFx0XHRcdGZpbGVSZW1vdmVCdG5UeHQ6IGRhdGE/IGRhdGEuZmlsZVJlbW92ZUJ0blR4dDogJycsXG5cdFx0XHRcdGZpbGVSZW1vdmVCdG5JZDogZGF0YT8gZGF0YS5maWxlUmVtb3ZlQnRuSWQ6ICcnLFxuXHRcdFx0XHR1cGxvYWRJbWdBbHRUeHQ6IGRhdGE/IGRhdGEudXBsb2FkSW1nQWx0VHh0OiAnJyxcblx0XHRcdFx0Y2FuY2VsQnRuVGV4dDogZGF0YT8gZGF0YS5jYW5jZWxCdG5UZXh0OiAnJyxcblx0XHRcdFx0c3VibWl0QnRuVHh0OiBkYXRhPyBkYXRhLnN1Ym1pdEJ0blR4dDogJycsXG5cdFx0XHRcdHN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiBkYXRhPyBkYXRhLnN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiAnJyxcblx0XHRcdFx0Y2FuY2VsQnRuQ3VzdG9tQ2xhc3M6IGRhdGE/IGRhdGEuY2FuY2VsQnRuQ3VzdG9tQ2xhc3M6ICcnLFxuXHRcdFx0XHRcblx0XHRcdH0gXHRcblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=