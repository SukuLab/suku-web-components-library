/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var SukuModalService = /** @class */ (function () {
    function SukuModalService(dialogService) {
        this.dialogService = dialogService;
        this.dialogHeight = 'auto';
        this.dialogWidth = '564px';
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    SukuModalService.prototype.openInfoModal = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var dialogRef = this.dialogService.open(SukuConfirmationComponent, {
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
        function (result) {
            console.log('result', result);
        }));
    };
    /**
     * @return {?}
     */
    SukuModalService.prototype.loader = /**
     * @return {?}
     */
    function () {
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
    SukuModalService.prototype.dialogWidth;
    /** @type {?} */
    SukuModalService.prototype.dialogHeight;
    /** @type {?} */
    SukuModalService.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7O0FBQzdGO0lBTUMsMEJBQW1CLGFBQXdCO1FBQXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU0sd0NBQWE7Ozs7SUFBcEIsVUFBcUIsSUFBSzs7WUFDbkIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDekIsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNuQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUN2QyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3ZDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7YUFDekM7U0FDRCxDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQU07WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRU0saUNBQU07OztJQUFiO0lBRUEsQ0FBQzs7Z0JBdkNELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBSlEsU0FBUzs7OzJCQURsQjtDQTJDQyxBQXhDRCxJQXdDQztTQXJDWSxnQkFBZ0I7OztJQUM1Qix1Q0FBbUI7O0lBQ25CLHdDQUFvQjs7SUFDUix5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vc3VrdS1jb25maXJtYXRpb24vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50JztcbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VNb2RhbFNlcnZpY2Uge1xuXHRwdWJsaWMgZGlhbG9nV2lkdGg7XG5cdHB1YmxpYyBkaWFsb2dIZWlnaHQ7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHtcblx0XHR0aGlzLmRpYWxvZ0hlaWdodCA9ICdhdXRvJztcblx0XHR0aGlzLmRpYWxvZ1dpZHRoID0gJzU2NHB4Jztcblx0fVxuXG5cdHB1YmxpYyBvcGVuSW5mb01vZGFsKGRhdGE/KSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oU3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuXHRcdFx0d2lkdGg6IHRoaXMuZGlhbG9nV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuZGlhbG9nSGVpZ2h0LFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRpY29uOiBkYXRhLmljb24sXG5cdFx0XHRcdGljb25DdXN0b21DbGFzczogZGF0YS5pY29uQ3VzdG9tQ2xhc3MsXG5cdFx0XHRcdGljb25JZDogZGF0YS5pY29uSWQsXG5cdFx0XHRcdHRpdGxlT25lOiBkYXRhLnRpdGxlT25lLFxuXHRcdFx0XHR0aXRsZU9uZUlkOiBkYXRhLnRpdGxlT25lSWQsXG5cdFx0XHRcdHRpdGxlVHdvOiBkYXRhLnRpdGxlVHdvLFxuXHRcdFx0XHR0aXRsZVR3b0lkOiBkYXRhLnRpdGxlT25lSWQsXG5cdFx0XHRcdHRpdGxlVGhyZWU6IGRhdGEudGl0bGVUaHJlZSxcblx0XHRcdFx0dGl0bGVUaHJlZUlkOiBkYXRhLnRpdGxlVGhyZWVJZCxcblx0XHRcdFx0YnV0dG9uTGFibGVPbmU6IGRhdGEuYnV0dG9uTGFibGVPbmUsXG5cdFx0XHRcdGJ1dHRvbkxhYmxlT25lSWQ6IGRhdGEuYnV0dG9uTGFibGVPbmVJZCxcblx0XHRcdFx0YnV0dG9uTGFibGVUd286IGRhdGEuYnV0dG9uTGFibGVUd28sXG5cdFx0XHRcdGJ1dHRvbkxhYmxlVHdvSWQ6IGRhdGEuYnV0dG9uTGFibGVUd29JZCxcblx0XHRcdFx0YnV0dG9uQ3VzdG9tQ2xhc3M6IGRhdGEuYnV0dG9uQ3VzdG9tQ2xhc3Ncblx0XHRcdH1cblx0XHR9KTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbG9hZGVyKCkge1xuXG5cdH1cbn1cblxuIl19