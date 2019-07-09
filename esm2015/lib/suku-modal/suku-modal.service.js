/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
        this.dialogHeight = 'auto';
        this.dialogWidth = '564px';
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    openInfoModal(data) {
        /** @type {?} */
        const dialogRef = this.dialogService.open(SukuConfirmationComponent, {
            width: this.dialogWidth,
            height: this.dialogHeight,
            data: {
                icon: data.icon,
                iconCustomClass: data.iconCustomClass,
                iconId: data.iconId,
                titleOne: data.titleOne,
                titleOneId: data.titleOneId,
                titleTwo: data.titleTwo,
                titleTwoId: data.titleOneId,
                titleThree: data.titleThree,
                titleThreeId: data.titleThreeId,
                buttonLableOne: data.buttonLableOne,
                buttonLableOneId: data.buttonLableOneId,
                buttonLableTwo: data.buttonLableTwo,
                buttonLableTwoId: data.buttonLableTwoId,
                buttonCustomClass: data.buttonCustomClass
            }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            console.log('result', result);
        }));
    }
    /**
     * @return {?}
     */
    loader() {
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
    SukuModalService.prototype.dialogWidth;
    /** @type {?} */
    SukuModalService.prototype.dialogHeight;
    /** @type {?} */
    SukuModalService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7O0FBSTdGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFHNUIsWUFBbUIsYUFBd0I7UUFBeEIsa0JBQWEsR0FBYixhQUFhLENBQVc7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBSzs7Y0FDbkIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDekIsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNuQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUN2QyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3ZDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7YUFDekM7U0FDRCxDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLE1BQU07SUFFYixDQUFDOzs7WUF2Q0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsU0FBUzs7Ozs7SUFNakIsdUNBQW1COztJQUNuQix3Q0FBb0I7O0lBQ1IseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1TW9kYWxTZXJ2aWNlIHtcblx0cHVibGljIGRpYWxvZ1dpZHRoO1xuXHRwdWJsaWMgZGlhbG9nSGVpZ2h0O1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7XG5cdFx0dGhpcy5kaWFsb2dIZWlnaHQgPSAnYXV0byc7XG5cdFx0dGhpcy5kaWFsb2dXaWR0aCA9ICc1NjRweCc7XG5cdH1cblxuXHRwdWJsaWMgb3BlbkluZm9Nb2RhbChkYXRhPykge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFN1a3VDb25maXJtYXRpb25Db21wb25lbnQsIHtcblx0XHRcdHdpZHRoOiB0aGlzLmRpYWxvZ1dpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmRpYWxvZ0hlaWdodCxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0aWNvbjogZGF0YS5pY29uLFxuXHRcdFx0XHRpY29uQ3VzdG9tQ2xhc3M6IGRhdGEuaWNvbkN1c3RvbUNsYXNzLFxuXHRcdFx0XHRpY29uSWQ6IGRhdGEuaWNvbklkLFxuXHRcdFx0XHR0aXRsZU9uZTogZGF0YS50aXRsZU9uZSxcblx0XHRcdFx0dGl0bGVPbmVJZDogZGF0YS50aXRsZU9uZUlkLFxuXHRcdFx0XHR0aXRsZVR3bzogZGF0YS50aXRsZVR3byxcblx0XHRcdFx0dGl0bGVUd29JZDogZGF0YS50aXRsZU9uZUlkLFxuXHRcdFx0XHR0aXRsZVRocmVlOiBkYXRhLnRpdGxlVGhyZWUsXG5cdFx0XHRcdHRpdGxlVGhyZWVJZDogZGF0YS50aXRsZVRocmVlSWQsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lOiBkYXRhLmJ1dHRvbkxhYmxlT25lLFxuXHRcdFx0XHRidXR0b25MYWJsZU9uZUlkOiBkYXRhLmJ1dHRvbkxhYmxlT25lSWQsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvOiBkYXRhLmJ1dHRvbkxhYmxlVHdvLFxuXHRcdFx0XHRidXR0b25MYWJsZVR3b0lkOiBkYXRhLmJ1dHRvbkxhYmxlVHdvSWQsXG5cdFx0XHRcdGJ1dHRvbkN1c3RvbUNsYXNzOiBkYXRhLmJ1dHRvbkN1c3RvbUNsYXNzXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGxvYWRlcigpIHtcblxuXHR9XG59XG5cbiJdfQ==