/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class SukuModalService {
    /**
     * @param {?} dialogService
     */
    constructor(dialogService) {
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
    openConfirmationDialogInterest(data) {
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
            this.onDialogCloseInterest.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialogList(data) {
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
            this.onDialogCloseList.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialogPlaceBid(data) {
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
            this.onDialogClosePlaceBid.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialogAcceptBid(data) {
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
            this.onDialogCloseAcceptBid.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialogSendPayment(data) {
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
            this.onDialogCloseSendPayment.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialogDeleteList(data) {
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
            this.onDialogCloseDeleteList.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialogCancelBid(data) {
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
            this.onDialogCloseCancelBid.emit(result);
        }));
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openConfirmationDialogUpdateInterest(data) {
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
            this.onDialogCloseUpdateInterest.emit(result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQUk3RixNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBYzVCLFlBQW1CLGFBQXdCO1FBQXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFXOztRQVRwQywwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRSxzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvRCwwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRSwyQkFBc0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRSw2QkFBd0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RSw0QkFBdUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyRSwyQkFBc0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRSxnQ0FBMkIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUcvRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTSw4QkFBOEIsQ0FBQyxJQUFLOztjQUNwQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDcEUsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDckMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDMUMsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDckQ7U0FDRCxDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLDBCQUEwQixDQUFDLElBQUs7O2NBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNwRSxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNyRDtTQUNELENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ00sOEJBQThCLENBQUMsSUFBSzs7Y0FDcEMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQzFDLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3JEO1NBQ0QsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDTSwrQkFBK0IsQ0FBQyxJQUFLOztjQUNyQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDcEUsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDckMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDMUMsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDckQ7U0FDRCxDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUNNLGlDQUFpQyxDQUFDLElBQUs7O2NBQ3ZDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNwRSxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNyRDtTQUNELENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ00sZ0NBQWdDLENBQUMsSUFBSzs7Y0FDdEMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQzFDLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3JEO1NBQ0QsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSwrQkFBK0IsQ0FBQyxJQUFLOztjQUNyQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDcEUsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDckMsWUFBWSxFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDMUMsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDckQ7U0FDRCxDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLG9DQUFvQyxDQUFDLElBQUs7O2NBQzFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNwRSxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNyRDtTQUNELENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7OztZQXhPRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFKUSxTQUFTOzs7OztJQU1qQixtREFBK0I7O0lBQy9CLG9EQUFnQzs7SUFDaEMsbURBQStCOztJQUUvQixpREFBMEU7O0lBQzFFLDZDQUFzRTs7SUFDdEUsaURBQTBFOztJQUMxRSxrREFBMkU7O0lBQzNFLG9EQUE2RTs7SUFDN0UsbURBQTRFOztJQUM1RSxrREFBMkU7O0lBQzNFLHVEQUFnRjs7SUFFcEUseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFN1a3VDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9zdWt1LWNvbmZpcm1hdGlvbi9zdWt1LWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VrdU1vZGFsU2VydmljZSB7XG5cdHB1YmxpYyBjb25maXJtYXRpb25EaWFsb2dXaWR0aDtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodDtcblx0cHVibGljIGNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlO1xuXHQvLyBwdWJsaWMgb25EaWFsb2dDbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljIG9uRGlhbG9nQ2xvc2VJbnRlcmVzdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljIG9uRGlhbG9nQ2xvc2VMaXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZVBsYWNlQmlkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWMgb25EaWFsb2dDbG9zZUFjY2VwdEJpZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljIG9uRGlhbG9nQ2xvc2VTZW5kUGF5bWVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljXHRvbkRpYWxvZ0Nsb3NlRGVsZXRlTGlzdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljIG9uRGlhbG9nQ2xvc2VDYW5jZWxCaWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdHB1YmxpYyBvbkRpYWxvZ0Nsb3NlVXBkYXRlSW50ZXJlc3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGRpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZykge1xuXHRcdHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGggPSAnNTAwcHgnO1xuXHR9XG5cblx0cHVibGljIG9wZW5Db25maXJtYXRpb25EaWFsb2dJbnRlcmVzdChkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMub25EaWFsb2dDbG9zZUludGVyZXN0LmVtaXQocmVzdWx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nTGlzdChkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMub25EaWFsb2dDbG9zZUxpc3QuZW1pdChyZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nUGxhY2VCaWQoZGF0YT8pIHtcblx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50LCB7XG5cdFx0XHR3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcblx0XHRcdGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXG5cdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0aWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG5cdFx0XHRcdHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmUgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd29JZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd29JZCA6ICcnLFxuXHRcdFx0XHRidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2VQbGFjZUJpZC5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIG9wZW5Db25maXJtYXRpb25EaWFsb2dBY2NlcHRCaWQoZGF0YT8pIHtcblx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50LCB7XG5cdFx0XHR3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcblx0XHRcdGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXG5cdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0aWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG5cdFx0XHRcdHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmUgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd29JZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd29JZCA6ICcnLFxuXHRcdFx0XHRidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2VBY2NlcHRCaWQuZW1pdChyZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG5cdHB1YmxpYyBvcGVuQ29uZmlybWF0aW9uRGlhbG9nU2VuZFBheW1lbnQoZGF0YT8pIHtcblx0XHRjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50LCB7XG5cdFx0XHR3aWR0aDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dXaWR0aCxcblx0XHRcdGhlaWdodDogdGhpcy5jb25maXJtYXRpb25EaWFsb2dIZWlnaHQsXG5cdFx0XHRkaXNhYmxlQ2xvc2U6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nQ2xvc2UsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGljb246IGRhdGEgPyBkYXRhLmljb24gOiAnJyxcblx0XHRcdFx0aWNvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5pY29uQ3VzdG9tQ2xhc3MgOiAnJyxcblx0XHRcdFx0aWNvbklkOiBkYXRhID8gZGF0YS5pY29uSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmU6IGRhdGEgPyBkYXRhLnRpdGxlT25lIDogJycsXG5cdFx0XHRcdHRpdGxlT25lSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUd286IGRhdGEgPyBkYXRhLnRpdGxlVHdvIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvSWQ6IGRhdGEgPyBkYXRhLnRpdGxlT25lSWQgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZTogZGF0YSA/IGRhdGEudGl0bGVUaHJlZSA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlSWQ6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZTogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmUgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmVJZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVPbmVJZCA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3bzogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd28gOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd29JZDogZGF0YSA/IGRhdGEuYnV0dG9uTGFibGVUd29JZCA6ICcnLFxuXHRcdFx0XHRidXR0b25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3MgOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLm9uRGlhbG9nQ2xvc2VTZW5kUGF5bWVudC5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIG9wZW5Db25maXJtYXRpb25EaWFsb2dEZWxldGVMaXN0KGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlRGVsZXRlTGlzdC5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZ0NhbmNlbEJpZChkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0hlaWdodCxcblx0XHRcdGRpc2FibGVDbG9zZTogdGhpcy5jb25maXJtYXRpb25EaWFsb2dDbG9zZSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YSA/IGRhdGEuaWNvbiA6ICcnLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmljb25DdXN0b21DbGFzcyA6ICcnLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEgPyBkYXRhLmljb25JZCA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YSA/IGRhdGEudGl0bGVPbmUgOiAnJyxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YSA/IGRhdGEudGl0bGVUd28gOiAnJyxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YSA/IGRhdGEudGl0bGVPbmVJZCA6ICcnLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhID8gZGF0YS50aXRsZVRocmVlIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YSA/IGRhdGEudGl0bGVUaHJlZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZSA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZU9uZUlkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3byA6ICcnLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhID8gZGF0YS5idXR0b25MYWJsZVR3b0lkIDogJycsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhID8gZGF0YS5idXR0b25DdXN0b21DbGFzcyA6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdHRoaXMub25EaWFsb2dDbG9zZUNhbmNlbEJpZC5lbWl0KHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgb3BlbkNvbmZpcm1hdGlvbkRpYWxvZ1VwZGF0ZUludGVyZXN0KGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuY29uZmlybWF0aW9uRGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGlzYWJsZUNsb3NlOiB0aGlzLmNvbmZpcm1hdGlvbkRpYWxvZ0Nsb3NlLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhID8gZGF0YS5pY29uIDogJycsXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YSA/IGRhdGEuaWNvbkN1c3RvbUNsYXNzIDogJycsXG5cdFx0XHRcdGljb25JZDogZGF0YSA/IGRhdGEuaWNvbklkIDogJycsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhID8gZGF0YS50aXRsZU9uZSA6ICcnLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhID8gZGF0YS50aXRsZVR3byA6ICcnLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhID8gZGF0YS50aXRsZU9uZUlkIDogJycsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEgPyBkYXRhLnRpdGxlVGhyZWUgOiAnJyxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhID8gZGF0YS50aXRsZVRocmVlSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlT25lSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvIDogJycsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEgPyBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQgOiAnJyxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEgPyBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzIDogJydcblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5vbkRpYWxvZ0Nsb3NlVXBkYXRlSW50ZXJlc3QuZW1pdChyZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=