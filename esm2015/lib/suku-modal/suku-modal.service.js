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
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class SukuModalService {
    /*  */
    /**
     * @param {?} dialogService
     */
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.confirmationDialogClose = true;
        this.onDialogClose = new EventEmitter();
        /*  */
        this.bSubject = new BehaviorSubject('');
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
        this.bSubject.next(data);
        if (data.openDialog) {
            /** @type {?} */
            const dialogRef = this.dialogService.open(SukuConfirmationModalComponent, {
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
            (result) => {
                this.onDialogClose.emit(result);
            }));
        }
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
    SukuModalService.prototype.bSubject;
    /** @type {?} */
    SukuModalService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7O0FBTzFHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBUzNCLFlBQW1CLGFBQXdCO1FBQXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBTnBDLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQUMvQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztRQUdsRSxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU0sc0JBQXNCLENBQUMsSUFBSzs7Y0FDM0IsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ25FLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQzFDLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFD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LEVBQUU7Z0JBQzNDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUU1RDtTQUNGLENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVFEsU0FBUzs7Ozs7SUFZaEIsbURBQStCOztJQUMvQixvREFBZ0M7O0lBQ2hDLG1EQUFzQzs7SUFDdEMseUNBQWtFOztJQUdsRSxvQ0FBbUM7O0lBRXZCLHlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWt1Q29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi1tb2RhbC9zdWt1LWNvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWt1QWRkTGljZW5zZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWt1TW9kYWxTZXJ2aWNlIHtcbiAgcHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoO1xuICBwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0O1xuICBwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UgPSB0cnVlO1xuICBwdWJsaWMgb25EaWFsb2dDbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiAgKi9cbiAgYlN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgLyogICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHtcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCA9ICdhdXRvJztcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoID0gJzUwMHB4JztcbiAgfVxuXG4gIHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nKGRhdGE/KSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuICAgICAgd2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuICAgICAgZGF0YToge1xuICAgICAgICBpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG4gICAgICAgIGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG4gICAgICAgIGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG4gICAgICAgIHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuICAgICAgICB0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG4gICAgICAgIHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuICAgICAgICB0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG4gICAgICAgIHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcbiAgICAgICAgdGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcbiAgICAgICAgYnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG4gICAgICAgIGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcbiAgICAgICAgYnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG4gICAgICAgIGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcbiAgICAgICAgYnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uTW9kYWxEaWFsb2coZGF0YT8pIHtcbiAgICB0aGlzLmJTdWJqZWN0Lm5leHQoZGF0YSk7XG4gICAgaWYgKGRhdGEub3BlbkRpYWxvZykge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuICAgICAgICBkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtb2RhbERhdGE6IHRoaXMuYlN1YmplY3RcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGEnLCBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YSlcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBvcGVuTGljZW5zZU1vZGFsRGlhbG9nRGlhbG9nKGRhdGE/KSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb250cm9sT25lOiBkYXRhID8gZGF0YS5jb250cm9sT25lIDogJycsXG4gICAgICAgIGNvbnRyb2xUd286IGRhdGEgPyBkYXRhLmNvbnRyb2xUd28gOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmU6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29SZXF1aXJlZGQ6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29SZXF1aXJlZGQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xUd286IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvIDogJycsXG4gICAgICAgICdjb250cm9sT25lUmVxdWlyZWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lUmVxdWlyZWQgOiAnJyxcbiAgICAgICAgY29udHJvbFR3b1JlcXVpcmVkOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUmVxdWlyZWQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZCA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbFR3b1JlcXVpcmVkOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3b1JlcXVpcmVkIDogJycsXG4gICAgICAgICdjb250cm9sT25lUGF0dGVybkVuYWJsZWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lUGF0dGVybkVuYWJsZWQgOiAnJyxcbiAgICAgICAgJ2NvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCc6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCA6ICcnLFxuICAgICAgICAnY29udHJvbE9uZVBhdHRlcm4nOiBkYXRhID8gZGF0YS5jb250cm9sT25lUGF0dGVybiA6ICcnLFxuICAgICAgICAnY29udHJvbFR3b1BhdHRlcm4nOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGF0dGVybiA6ICcnLFxuICAgICAgICAndGl0bGUnOiBkYXRhID8gZGF0YS50aXRsZSA6ICcnLFxuICAgICAgICAnc3ViVGl0bGUnOiBkYXRhID8gZGF0YS5zdWJUaXRsZSA6ICcnLFxuICAgICAgICAnY29udHJvbEhpbnQnOiBkYXRhID8gZGF0YS5jb250cm9sSGludCA6ICcnLFxuICAgICAgICAnaGludENsYXNzJzogZGF0YSA/IGRhdGEuaGludENsYXNzIDogJycsXG4gICAgICAgICdoZWFkZXJDdXRvbVN0eWxlJzogZGF0YSA/IGRhdGEuaGVhZGVyQ3V0b21TdHlsZSA6ICcnLFxuICAgICAgICAnc3RhcnREYXRlTWF4RGF0ZSc6IGRhdGEgPyBkYXRhLnN0YXJ0RGF0ZU1heERhdGUgOiAnJyxcbiAgICAgICAgJ2VuZERhdGVNYXhEYXRlJzogZGF0YSA/IGRhdGEuZW5kRGF0ZU1heERhdGUgOiAnJyxcbiAgICAgICAgJ3N0YXJ0RGF0ZU1pbkRhdGUnOiBkYXRhID8gZGF0YS5zdGFydERhdGVNaW5EYXRlIDogJycsXG4gICAgICAgICdlbmREYXRlTWluRGF0ZSc6IGRhdGEgPyBkYXRhLmVuZERhdGVNaW5EYXRlIDogJycsXG4gICAgICAgICdjb250cm9sT25lSWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lSWQgOiAnJyxcbiAgICAgICAgY29udHJvbFR3b0lkOiBkYXRhID8gZGF0YS5jb250cm9sVHdvSWQgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVJZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xPbmVJZCA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbFR3b0lkOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3b0lkIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29Ub29sVGlwOiBkYXRhID8gZGF0YS5jb250cm9sVHdvVG9vbFRpcCA6ICcnLFxuICAgICAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmVQbGFjZWhvbGRlciA6ICcnLFxuICAgICAgICBjb250cm9sVHdvUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QbGFjZWhvbGRlciA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyIDogJycsXG4gICAgICAgIGRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXI6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXIgOiAnJyxcbiAgICAgICAgY29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuY29udHJvbE9uZVJxdWlyZWRFcnJvck1zZyA6ICcnLFxuICAgICAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUnF1aXJlZEVycm9yTXNnIDogJycsXG4gICAgICAgIGNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2cgOiAnJyxcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lUnF1aXJlZCA6ICcnLFxuICAgICAgICBkYXRlQ29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2cgOiAnJyxcbiAgICAgICAgYWNjZXB0RG9jbWVudDogZGF0YSA/IGRhdGEuYWNjZXB0RG9jbWVudCA6ICcnLFxuICAgICAgICB1cGxvYWRJbWc6IGRhdGEgPyBkYXRhLnVwbG9hZEltZyA6ICcnLFxuICAgICAgICB1cGxvYWRUaXRsZTogZGF0YSA/IGRhdGEudXBsb2FkVGl0bGUgOiAnJyxcbiAgICAgICAgZmlsZUxpc3RUaXRsZTogZGF0YSA/IGRhdGEuZmlsZUxpc3RUaXRsZSA6ICcnLFxuICAgICAgICBmaWxlSW5wdXRJZDogZGF0YSA/IGRhdGEuZmlsZUlucHV0SWQgOiAnJyxcbiAgICAgICAgZmlsZXNBcnJheTogZGF0YSA/IGRhdGEuZmlsZXNBcnJheSA6ICcnLFxuICAgICAgICBmaWxlUmVtb3ZlQnRuVHh0OiBkYXRhID8gZGF0YS5maWxlUmVtb3ZlQnRuVHh0IDogJycsXG4gICAgICAgIGZpbGVSZW1vdmVCdG5JZDogZGF0YSA/IGRhdGEuZmlsZVJlbW92ZUJ0bklkIDogJycsXG4gICAgICAgIHVwbG9hZEltZ0FsdFR4dDogZGF0YSA/IGRhdGEudXBsb2FkSW1nQWx0VHh0IDogJycsXG4gICAgICAgIGNhbmNlbEJ0blRleHQ6IGRhdGEgPyBkYXRhLmNhbmNlbEJ0blRleHQgOiAnJyxcbiAgICAgICAgc3VibWl0QnRuVHh0OiBkYXRhID8gZGF0YS5zdWJtaXRCdG5UeHQgOiAnJyxcbiAgICAgICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLnN1Ym1pdEJ0bkN1c3RvbUNsYXNzIDogJycsXG4gICAgICAgIGNhbmNlbEJ0bkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5jYW5jZWxCdG5DdXN0b21DbGFzcyA6ICcnLFxuXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19