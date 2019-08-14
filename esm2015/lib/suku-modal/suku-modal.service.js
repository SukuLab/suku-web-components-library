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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7Ozs7O0FBUzFHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFNNUIsWUFBbUIsYUFBd0I7UUFBeEIsa0JBQWEsR0FBYixhQUFhLENBQVc7UUFEcEMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTSxzQkFBc0IsQ0FBQyxJQUFLOztjQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDcEUsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDckMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDMUMsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElB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QUksQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFBLENBQUMsQ0FBQyxFQUFFO2dCQUN6RCxvQkFBb0IsRUFBRSxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQSxDQUFDLENBQUMsRUFBRTthQUV6RDtTQUNELENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7WUF6SEQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVlEsU0FBUzs7Ozs7SUFjakIsbURBQStCOztJQUMvQixvREFBZ0M7O0lBQ2hDLG1EQUErQjs7SUFDL0IseUNBQWtFOztJQUN0RCx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWt1Q29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi1tb2RhbC9zdWt1LWNvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuLy8gaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnOyBcblxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFN1a3VNb2RhbFNlcnZpY2Uge1xuXHQvLyBwdWJsaWMgdXBsb2FkRmlsZXMgPSAgbmV3IFN1YmplY3Q8YW55PigpOyBcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoO1xuXHRwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0O1xuXHRwdWJsaWMgY29uZmlybWF0aW9uRGlhbG9nQ2xvc2U7XG5cdHB1YmxpYyBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XG5cdFx0dGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQgPSAnYXV0byc7XG5cdFx0dGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCA9ICc1MDBweCc7XG5cdH1cblxuXHRwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZyhkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMub25EaWFsb2dDbG9zZS5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uTW9kYWxEaWFsb2coZGF0YT8pIHtcblx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aW1nU3JjOiBkYXRhID8gZGF0YS5pbWdTcmMgOiAnJyxcblx0XHRcdFx0bWVzc2FnZTogZGF0YSA/IGRhdGEubWVzc2FnZSA6ICcnLFxuICBcdFx0XHRcdGRlc2NyaXB0aW9uOiBkYXRhID8gZGF0YS5kZXNjcmlwdGlvbiA6ICcnLFxuICBcdFx0XHRcdGJ1dHRvblRleHQ6IGRhdGEgPyBkYXRhLmJ1dHRvblRleHQgOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG4gICAgXG4gICAgcHVibGljIG9wZW5MaWNlbnNlTW9kYWxEaWFsb2dEaWFsb2coZGF0YT8pIHtcblx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1QWRkTGljZW5zZU1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXG5cdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGNvbnRyb2xPbmU6IGRhdGE/IGRhdGEuY29udHJvbE9uZTogJycsXG5cdFx0XHRcdGNvbnRyb2xUd286IGRhdGE/IGRhdGEuY29udHJvbFR3bzogJycsXG5cdFx0XHRcdGRhdGVDb250cm9sT25lOiBkYXRhPyBkYXRhLmRhdGVDb250cm9sT25lOiAnJywgXG5cdFx0XHRcdGNvbnRyb2xUd29SZXF1aXJlZGQ6IGRhdGE/IGRhdGEuY29udHJvbFR3b1JlcXVpcmVkZDogJycsXG5cdFx0XHRcdGRhdGVDb250cm9sVHdvOiBkYXRhPyBkYXRhLmRhdGVDb250cm9sVHdvOiAnJyxcblx0XHRcdFx0J2NvbnRyb2xPbmVSZXF1aXJlZCc6IGRhdGE/IGRhdGEuY29udHJvbE9uZVJlcXVpcmVkOiAnJyxcblx0XHRcdFx0Y29udHJvbFR3b1JlcXVpcmVkOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29SZXF1aXJlZDogJycsXG5cdFx0XHRcdGRhdGVDb250cm9sT25lUmVxdWlyZWQ6IGRhdGE/IGRhdGEuZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZDogJycsXG5cdFx0XHRcdGRhdGVDb250cm9sVHdvUmVxdWlyZWQ6IGRhdGE/IGRhdGEuZGF0ZUNvbnRyb2xUd29SZXF1aXJlZDogJycsXG5cdFx0XHRcdCdjb250cm9sT25lUGF0dGVybkVuYWJsZWQnOiBkYXRhPyBkYXRhLmNvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZDogJycsXG5cdFx0XHRcdCdjb250cm9sVHdvUGF0dGVybkVuYWJsZWQnOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZDogJycsXG5cdFx0XHRcdCdjb250cm9sT25lUGF0dGVybic6IGRhdGE/IGRhdGEuY29udHJvbE9uZVBhdHRlcm46ICcnLFxuXHRcdFx0XHQnY29udHJvbFR3b1BhdHRlcm4nOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuOiAnJyxcblx0XHRcdFx0J3RpdGxlJzogZGF0YT8gZGF0YS50aXRsZTogJycsXG5cdFx0XHRcdCdzdWJUaXRsZSc6IGRhdGE/IGRhdGEuc3ViVGl0bGU6ICcnLFxuXHRcdFx0XHQnY29udHJvbEhpbnQnOiBkYXRhPyBkYXRhLmNvbnRyb2xIaW50OiAnJyxcblx0XHRcdFx0J2hpbnRDbGFzcyc6IGRhdGE/IGRhdGEuaGludENsYXNzOiAnJyxcblx0XHRcdFx0J2hlYWRlckN1dG9tU3R5bGUnOiBkYXRhPyBkYXRhLmhlYWRlckN1dG9tU3R5bGU6ICcnLFxuXHRcdFx0XHQnc3RhcnREYXRlTWF4RGF0ZSc6IGRhdGE/IGRhdGEuc3RhcnREYXRlTWF4RGF0ZTogJycsXG5cdFx0XHRcdCdlbmREYXRlTWF4RGF0ZSc6IGRhdGE/IGRhdGEuZW5kRGF0ZU1heERhdGU6ICcnLFxuXHRcdFx0XHQnc3RhcnREYXRlTWluRGF0ZSc6IGRhdGE/IGRhdGEuc3RhcnREYXRlTWluRGF0ZTogJycsXG5cdFx0XHRcdCdlbmREYXRlTWluRGF0ZSc6IGRhdGE/IGRhdGEuZW5kRGF0ZU1pbkRhdGU6ICcnLFxuXHRcdFx0XHQnY29udHJvbE9uZUlkJzogZGF0YT8gZGF0YS5jb250cm9sT25lSWQ6ICcnLFxuXHRcdFx0XHRjb250cm9sVHdvSWQ6IGRhdGE/IGRhdGEuY29udHJvbFR3b0lkOiAnJyxcblx0XHRcdFx0ZGF0ZUNvbnRyb2xPbmVJZDogZGF0YT8gZGF0YS5kYXRlQ29udHJvbE9uZUlkOiAnJyxcblx0XHRcdFx0ZGF0ZUNvbnRyb2xUd29JZDogZGF0YT8gZGF0YS5kYXRlQ29udHJvbFR3b0lkOiAnJyxcblx0XHRcdFx0Y29udHJvbFR3b1Rvb2xUaXA6IGRhdGE/IGRhdGEuY29udHJvbFR3b1Rvb2xUaXA6ICcnLCBcblx0XHRcdFx0Y29udHJvbE9uZVBsYWNlaG9sZGVyOiBkYXRhPyBkYXRhLmNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJycsXG5cdFx0XHRcdGNvbnRyb2xUd29QbGFjZWhvbGRlcjogZGF0YT8gZGF0YS5jb250cm9sVHdvUGxhY2Vob2xkZXI6ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyOiBkYXRhPyBkYXRhLmRhdGVDb250cm9sT25lUGxhY2Vob2xkZXI6ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbFR3b1BsYWNlaG9sZGVyOiBkYXRhPyBkYXRhLmRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXI6ICcnLFxuXHRcdFx0XHRjb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiBkYXRhPyBkYXRhLmNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6ICcnLFxuXHRcdFx0XHRjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6ICcnLFxuXHRcdFx0XHRjb250cm9sVHdvUGF0dGVybkVycm9yTXNnOiBkYXRhPyBkYXRhLmNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2c6ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogZGF0YT8gZGF0YS5kYXRlQ29udHJvbE9uZVJxdWlyZWQ6ICcnLFxuXHRcdFx0XHRkYXRlQ29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogZGF0YT8gZGF0YS5kYXRlQ29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogJycsXG5cdFx0XHRcdGFjY2VwdERvY21lbnQ6IGRhdGE/IGRhdGEuYWNjZXB0RG9jbWVudDogJycsXG5cdFx0XHRcdHVwbG9hZEltZzogZGF0YT8gZGF0YS51cGxvYWRJbWc6ICcnLFxuXHRcdFx0XHR1cGxvYWRUaXRsZTogZGF0YT8gZGF0YS51cGxvYWRUaXRsZTogJycsXG5cdFx0XHRcdGZpbGVMaXN0VGl0bGU6IGRhdGE/IGRhdGEuZmlsZUxpc3RUaXRsZTogJycsXG5cdFx0XHRcdGZpbGVJbnB1dElkOiBkYXRhPyBkYXRhLmZpbGVJbnB1dElkOiAnJyxcblx0XHRcdFx0ZmlsZXNBcnJheTogZGF0YT8gZGF0YS5maWxlc0FycmF5OiAnJyxcblx0XHRcdFx0ZmlsZVJlbW92ZUJ0blR4dDogZGF0YT8gZGF0YS5maWxlUmVtb3ZlQnRuVHh0OiAnJyxcblx0XHRcdFx0ZmlsZVJlbW92ZUJ0bklkOiBkYXRhPyBkYXRhLmZpbGVSZW1vdmVCdG5JZDogJycsXG5cdFx0XHRcdHVwbG9hZEltZ0FsdFR4dDogZGF0YT8gZGF0YS51cGxvYWRJbWdBbHRUeHQ6ICcnLFxuXHRcdFx0XHRjYW5jZWxCdG5UZXh0OiBkYXRhPyBkYXRhLmNhbmNlbEJ0blRleHQ6ICcnLFxuXHRcdFx0XHRzdWJtaXRCdG5UeHQ6IGRhdGE/IGRhdGEuc3VibWl0QnRuVHh0OiAnJyxcblx0XHRcdFx0c3VibWl0QnRuQ3VzdG9tQ2xhc3M6IGRhdGE/IGRhdGEuc3VibWl0QnRuQ3VzdG9tQ2xhc3M6ICcnLFxuXHRcdFx0XHRjYW5jZWxCdG5DdXN0b21DbGFzczogZGF0YT8gZGF0YS5jYW5jZWxCdG5DdXN0b21DbGFzczogJycsXG5cdFx0XHRcdFxuXHRcdFx0fSBcdFxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2UuZW1pdChyZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==