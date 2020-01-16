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
        this.confirmationStatusDialogWidth = '600px';
        this.confirmationStatusDialogHeight = 'auto';
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
    openConfirmationStatusModalDialog(data) {
        this.bSubject.next(data);
        if (data.openDialog) {
            /** @type {?} */
            const dialogRef = this.dialogService.open(SukuConfirmationStatusModalComponent, {
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
    SukuModalService.prototype.confirmationStatusDialogWidth;
    /** @type {?} */
    SukuModalService.prototype.confirmationStatusDialogHeight;
    /** @type {?} */
    SukuModalService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQTs7O0FBTWpJLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBVzNCLFlBQW1CLGFBQXdCO1FBQXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBUnBDLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQUMvQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztRQUdsRSxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFLakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLDhCQUE4QixHQUFHLE1BQU0sQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVNLHNCQUFzQixDQUFDLElBQUs7O2NBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNuRSxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckQsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQSxDQUFDLENBQUMsRUFBRTtnQkFDaEQsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUEsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RELGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3BEO1NBQ0YsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sMkJBQTJCLENBQUMsSUFBSztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2tCQUNiLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRTtnQkFDeEUsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUI7Z0JBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsd0JBQXdCO2dCQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtnQkFDMUMsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDekI7YUFDRixDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakYsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxpQ0FBaUMsQ0FBQyxJQUFLO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7a0JBQ2IsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxFQUFFO2dCQUM5RSxLQUFLLEVBQUUsSUFBSSxDQUFDLDZCQUE2QjtnQkFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyw4QkFBOEI7Z0JBQzNDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCO2dCQUMxQyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUN6QjthQUNGLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVNLDRCQUE0QixDQUFDLElBQUs7O2NBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUN0RSxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDMUMsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6RCxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekQsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZELHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvRCxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JFLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkQsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZELE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0QscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdELHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRSx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JFLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRSx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckUsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JFLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3RSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakQsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakQsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0Msb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNELG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFO2FBRTVEO1NBQ0YsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXJKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUUSxTQUFTOzs7OztJQVloQixtREFBK0I7O0lBQy9CLG9EQUFnQzs7SUFDaEMsbURBQXNDOztJQUN0Qyx5Q0FBa0U7O0lBR2xFLG9DQUFtQzs7SUFDbkMseURBQThCOztJQUM5QiwwREFBK0I7O0lBRW5CLHlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFN1a3VDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi9zdWt1LWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWt1Q29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi1tb2RhbC9zdWt1LWNvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwvc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudCdcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWt1TW9kYWxTZXJ2aWNlIHtcclxuICBwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nV2lkdGg7XHJcbiAgcHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodDtcclxuICBwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UgPSB0cnVlO1xyXG4gIHB1YmxpYyBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiAgKi9cclxuICBiU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xyXG4gIGNvbmZpcm1hdGlvblN0YXR1c0RpYWxvZ1dpZHRoO1xyXG4gIGNvbmZpcm1hdGlvblN0YXR1c0RpYWxvZ0hlaWdodDtcclxuICAvKiAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCA9ICdhdXRvJztcclxuICAgIHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGggPSAnNTAwcHgnO1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TdGF0dXNEaWFsb2dXaWR0aCA9ICc2MDBweCc7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblN0YXR1c0RpYWxvZ0hlaWdodCA9ICdhdXRvJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nKGRhdGE/KSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxyXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXHJcbiAgICAgICAgaWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcclxuICAgICAgICBpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxyXG4gICAgICAgIHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxyXG4gICAgICAgIHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcclxuICAgICAgICB0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcclxuICAgICAgICB0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXHJcbiAgICAgICAgdGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxyXG4gICAgICAgIHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXHJcbiAgICAgICAgYnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXHJcbiAgICAgICAgYnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxyXG4gICAgICAgIGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxyXG4gICAgICAgIGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcclxuICAgICAgICBidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJyxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IGRhdGEgPyBkYXRhLnNob3dDbG9zZUJ1dHRvbjogJycsXHJcbiAgICAgICAgYnV0dG9uTGFibGVUaHJlZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVRocmVlSWQ6ICcnLFxyXG4gICAgICAgIGJ1dHRvbkxhYmxlVGhyZWU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVGhyZWUgOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uTW9kYWxEaWFsb2coZGF0YT8pIHtcclxuICAgIHRoaXMuYlN1YmplY3QubmV4dChkYXRhKTtcclxuICAgIGlmIChkYXRhLm9wZW5EaWFsb2cpIHtcclxuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcclxuICAgICAgICBkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbW9kYWxEYXRhOiB0aGlzLmJTdWJqZWN0XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhJywgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGEpXHJcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkRpYWxvZ0Nsb3NlLmVtaXQocmVzdWx0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkNvbmZpcm1hdGlvblN0YXR1c01vZGFsRGlhbG9nKGRhdGE/KSB7XHJcbiAgICB0aGlzLmJTdWJqZWN0Lm5leHQoZGF0YSk7XHJcbiAgICBpZiAoZGF0YS5vcGVuRGlhbG9nKSB7XHJcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25TdGF0dXNNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvblN0YXR1c0RpYWxvZ1dpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maXJtYXRpb25TdGF0dXNEaWFsb2dIZWlnaHQsXHJcbiAgICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG1vZGFsRGF0YTogdGhpcy5iU3ViamVjdFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YScsIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhKVxyXG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5MaWNlbnNlTW9kYWxEaWFsb2dEaWFsb2coZGF0YT8pIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvbnRyb2xPbmU6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmUgOiAnJyxcclxuICAgICAgICBjb250cm9sVHdvOiBkYXRhID8gZGF0YS5jb250cm9sVHdvIDogJycsXHJcbiAgICAgICAgZGF0ZUNvbnRyb2xPbmU6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lIDogJycsXHJcbiAgICAgICAgY29udHJvbFR3b1JlcXVpcmVkZDogZGF0YSA/IGRhdGEuY29udHJvbFR3b1JlcXVpcmVkZCA6ICcnLFxyXG4gICAgICAgIGRhdGVDb250cm9sVHdvOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3byA6ICcnLFxyXG4gICAgICAgICdjb250cm9sT25lUmVxdWlyZWQnOiBkYXRhID8gZGF0YS5jb250cm9sT25lUmVxdWlyZWQgOiAnJyxcclxuICAgICAgICBjb250cm9sVHdvUmVxdWlyZWQ6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29SZXF1aXJlZCA6ICcnLFxyXG4gICAgICAgIGRhdGVDb250cm9sT25lUmVxdWlyZWQ6IGRhdGEgPyBkYXRhLmRhdGVDb250cm9sT25lUmVxdWlyZWQgOiAnJyxcclxuICAgICAgICBkYXRlQ29udHJvbFR3b1JlcXVpcmVkOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbFR3b1JlcXVpcmVkIDogJycsXHJcbiAgICAgICAgJ2NvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZCc6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZCA6ICcnLFxyXG4gICAgICAgICdjb250cm9sVHdvUGF0dGVybkVuYWJsZWQnOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGF0dGVybkVuYWJsZWQgOiAnJyxcclxuICAgICAgICAnY29udHJvbE9uZVBhdHRlcm4nOiBkYXRhID8gZGF0YS5jb250cm9sT25lUGF0dGVybiA6ICcnLFxyXG4gICAgICAgICdjb250cm9sVHdvUGF0dGVybic6IGRhdGEgPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuIDogJycsXHJcbiAgICAgICAgJ3RpdGxlJzogZGF0YSA/IGRhdGEudGl0bGUgOiAnJyxcclxuICAgICAgICAnc3ViVGl0bGUnOiBkYXRhID8gZGF0YS5zdWJUaXRsZSA6ICcnLFxyXG4gICAgICAgICdjb250cm9sSGludCc6IGRhdGEgPyBkYXRhLmNvbnRyb2xIaW50IDogJycsXHJcbiAgICAgICAgJ2hpbnRDbGFzcyc6IGRhdGEgPyBkYXRhLmhpbnRDbGFzcyA6ICcnLFxyXG4gICAgICAgICdoZWFkZXJDdXRvbVN0eWxlJzogZGF0YSA/IGRhdGEuaGVhZGVyQ3V0b21TdHlsZSA6ICcnLFxyXG4gICAgICAgICdzdGFydERhdGVNYXhEYXRlJzogZGF0YSA/IGRhdGEuc3RhcnREYXRlTWF4RGF0ZSA6ICcnLFxyXG4gICAgICAgICdlbmREYXRlTWF4RGF0ZSc6IGRhdGEgPyBkYXRhLmVuZERhdGVNYXhEYXRlIDogJycsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZU1pbkRhdGUnOiBkYXRhID8gZGF0YS5zdGFydERhdGVNaW5EYXRlIDogJycsXHJcbiAgICAgICAgJ2VuZERhdGVNaW5EYXRlJzogZGF0YSA/IGRhdGEuZW5kRGF0ZU1pbkRhdGUgOiAnJyxcclxuICAgICAgICAnY29udHJvbE9uZUlkJzogZGF0YSA/IGRhdGEuY29udHJvbE9uZUlkIDogJycsXHJcbiAgICAgICAgY29udHJvbFR3b0lkOiBkYXRhID8gZGF0YS5jb250cm9sVHdvSWQgOiAnJyxcclxuICAgICAgICBkYXRlQ29udHJvbE9uZUlkOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZUlkIDogJycsXHJcbiAgICAgICAgZGF0ZUNvbnRyb2xUd29JZDogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29JZCA6ICcnLFxyXG4gICAgICAgIGNvbnRyb2xUd29Ub29sVGlwOiBkYXRhID8gZGF0YS5jb250cm9sVHdvVG9vbFRpcCA6ICcnLFxyXG4gICAgICAgIGNvbnRyb2xPbmVQbGFjZWhvbGRlcjogZGF0YSA/IGRhdGEuY29udHJvbE9uZVBsYWNlaG9sZGVyIDogJycsXHJcbiAgICAgICAgY29udHJvbFR3b1BsYWNlaG9sZGVyOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUGxhY2Vob2xkZXIgOiAnJyxcclxuICAgICAgICBkYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyIDogJycsXHJcbiAgICAgICAgZGF0ZUNvbnRyb2xUd29QbGFjZWhvbGRlcjogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29QbGFjZWhvbGRlciA6ICcnLFxyXG4gICAgICAgIGNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6IGRhdGEgPyBkYXRhLmNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2cgOiAnJyxcclxuICAgICAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiBkYXRhID8gZGF0YS5jb250cm9sVHdvUnF1aXJlZEVycm9yTXNnIDogJycsXHJcbiAgICAgICAgY29udHJvbFR3b1BhdHRlcm5FcnJvck1zZzogZGF0YSA/IGRhdGEuY29udHJvbFR3b1BhdHRlcm5FcnJvck1zZyA6ICcnLFxyXG4gICAgICAgIGRhdGVDb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiBkYXRhID8gZGF0YS5kYXRlQ29udHJvbE9uZVJxdWlyZWQgOiAnJyxcclxuICAgICAgICBkYXRlQ29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogZGF0YSA/IGRhdGEuZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2cgOiAnJyxcclxuICAgICAgICBhY2NlcHREb2NtZW50OiBkYXRhID8gZGF0YS5hY2NlcHREb2NtZW50IDogJycsXHJcbiAgICAgICAgdXBsb2FkSW1nOiBkYXRhID8gZGF0YS51cGxvYWRJbWcgOiAnJyxcclxuICAgICAgICB1cGxvYWRUaXRsZTogZGF0YSA/IGRhdGEudXBsb2FkVGl0bGUgOiAnJyxcclxuICAgICAgICBmaWxlTGlzdFRpdGxlOiBkYXRhID8gZGF0YS5maWxlTGlzdFRpdGxlIDogJycsXHJcbiAgICAgICAgZmlsZUlucHV0SWQ6IGRhdGEgPyBkYXRhLmZpbGVJbnB1dElkIDogJycsXHJcbiAgICAgICAgZmlsZXNBcnJheTogZGF0YSA/IGRhdGEuZmlsZXNBcnJheSA6ICcnLFxyXG4gICAgICAgIGZpbGVSZW1vdmVCdG5UeHQ6IGRhdGEgPyBkYXRhLmZpbGVSZW1vdmVCdG5UeHQgOiAnJyxcclxuICAgICAgICBmaWxlUmVtb3ZlQnRuSWQ6IGRhdGEgPyBkYXRhLmZpbGVSZW1vdmVCdG5JZCA6ICcnLFxyXG4gICAgICAgIHVwbG9hZEltZ0FsdFR4dDogZGF0YSA/IGRhdGEudXBsb2FkSW1nQWx0VHh0IDogJycsXHJcbiAgICAgICAgY2FuY2VsQnRuVGV4dDogZGF0YSA/IGRhdGEuY2FuY2VsQnRuVGV4dCA6ICcnLFxyXG4gICAgICAgIHN1Ym1pdEJ0blR4dDogZGF0YSA/IGRhdGEuc3VibWl0QnRuVHh0IDogJycsXHJcbiAgICAgICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLnN1Ym1pdEJ0bkN1c3RvbUNsYXNzIDogJycsXHJcbiAgICAgICAgY2FuY2VsQnRuQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmNhbmNlbEJ0bkN1c3RvbUNsYXNzIDogJycsXHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgIHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==