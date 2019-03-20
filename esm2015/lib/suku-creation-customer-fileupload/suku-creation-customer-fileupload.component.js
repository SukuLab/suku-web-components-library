/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export class SukuCreationCustomerFileuploadComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.onFileChange = new EventEmitter();
        this.submitData = new EventEmitter();
        this.docType = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('suku-creation-customer-fileupload');
        this.docType = [
            {
                name: 'passport',
                value: 'passport'
            },
            {
                name: 'license',
                value: 'license'
            },
            {
                name: 'idCard',
                value: 'idCard'
            },
            {
                name: 'other',
                value: 'other'
            }
        ];
    }
    /**
     * @param {?} val
     * @return {?}
     */
    imageType(val) {
        this.documentType = val;
        console.log('val', val);
        if (val) {
            this.uploadType = val;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    fileupload(e) {
        console.log(e);
        if (this.documentType) {
            /** @type {?} */
            const files = e.target.files;
            /** @type {?} */
            const maxFileSize = 9999999;
            /** @type {?} */
            let currentFileSize;
            /** @type {?} */
            const file = e.target.files[0];
            currentFileSize = file.size;
            if (currentFileSize <= maxFileSize) {
                if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
                    if (e.target.files && e.target.files.length > 0) {
                        for (let i = 0; i < e.target.files.length; i++) {
                            /** @type {?} */
                            const file = e.target.files[i];
                            /** @type {?} */
                            const docType = this.uploadType;
                            /** @type {?} */
                            const data = {
                                file: file,
                                documentType: docType
                            };
                            this.onFileChange.emit(data);
                            currentFileSize = file.size;
                        }
                        e.target.value = '';
                    }
                }
                else {
                    this.snackbar('The file type jpg/jpeg/png files are allowed!');
                }
            }
            else {
                this.snackbar('The file size cannot exceed 10 MB');
            }
        }
        else {
            this.snackbar('Please select document type.');
        }
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    snackbar(msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    }
}
SukuCreationCustomerFileuploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-creation-customer-fileupload',
                template: "<div class=\"col Rectangle-2 d-flex\">\n  <div class=\"col p-3\">\n    <div class=\"col p-5 col-xs-12 offset-xs-1 noPadding \">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"col flexCol p-0\">\n            <div class=\"col-sm-10 pL0 f14 textdev\">\n              <span class=\"poppins\">Upload the following Documents:</span>\n            </div>\n            <div class=\"col-sm-12 pL0 textdev\">\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 1. Controller's Driver's License:</p>\n              <p class=\"mB-0 Spring-Cases txtFlow\"> 2. EIN documentation (IRS-issued SS4 confirmation letter)</p>\n            </div>\n          </div>  \n        </div>\n        <div class=\"col\">\n          <div class=\"col pl-sm-5 pr-sm-5\">\n            <mat-form-field class=\"col pl-sm-5 pr-sm-5\">\n                <mat-select placeholder=\"type of Document\" id=\"uploadDoc\"  #types (selectionChange)=\"imageType(types.value)\">\n                  <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\n                    {{type.name}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n          </div>\n          <div class=\"col flexCol p-0\">\n            <div class=\" col-sm-8 offset-sm-2 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\n              <div class=\"col-sm-5 col-xs-4 p-4 \">\n                <a onclick=\"document.getElementById('myFileInput').click()\" class=\" fa fa-cloud-upload f60 text-muted center-block  pT9 \"\n                  id=\"saleTwoUpload\" style=\"width: 100%\"> </a>\n                <input type=\"file\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\n                  name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\"/>\n              </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\n                pdf/doc/docx\n                files\n                are allowed! </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\n                10\n                MB</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>",
                styles: [".display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}"]
            }] }
];
/** @nocollapse */
SukuCreationCustomerFileuploadComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
SukuCreationCustomerFileuploadComponent.propDecorators = {
    onFileChange: [{ type: Output }],
    submitData: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.onFileChange;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.submitData;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.imagepath;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.showPdfErrorMsg;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.showMessage;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.docType;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.uploadType;
    /** @type {?} */
    SukuCreationCustomerFileuploadComponent.prototype.documentType;
    /**
     * @type {?}
     * @private
     */
    SukuCreationCustomerFileuploadComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQvc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2hELE1BQU0sT0FBTyx1Q0FBdUM7Ozs7SUFTbkQsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQVIvQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJekMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUc4QixDQUFDOzs7O0lBRTdDLFFBQVE7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkO2dCQUNDLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsVUFBVTthQUNqQjtZQUNEO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxPQUFPO2FBQ2Q7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBRztRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUcsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUE7U0FDdEI7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTs7a0JBQ2xCLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7O2tCQUN0QixXQUFXLEdBQUcsT0FBTzs7Z0JBQ3ZCLGVBQWU7O2tCQUNiLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUIsSUFBSSxlQUFlLElBQUksV0FBVyxFQUFFO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO29CQUN0RixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tDQUNuQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztrQ0FDeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVOztrQ0FDL0IsSUFBSSxHQUFHO2dDQUNMLElBQUksRUFBRyxJQUFJO2dDQUNYLFlBQVksRUFBRSxPQUFPOzZCQUN0Qjs0QkFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDN0IsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQzVCO3dCQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztxQkFDcEI7aUJBQ0Q7cUJBQU07b0JBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO2lCQUNuRTthQUNEO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsbUNBQW1DLENBQUMsQ0FBQzthQUNqRDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDL0M7SUFDRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxHQUFHO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLE9BQU87WUFDM0IsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDSixDQUFDOzs7WUF0RkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLHlvRkFBaUU7O2FBRWpFOzs7O1lBTlEsV0FBVzs7OzJCQVFsQixNQUFNO3lCQUNOLE1BQU07Ozs7SUFEUCwrREFBNEM7O0lBQzVDLDZEQUEwQzs7SUFDMUMsNERBQVU7O0lBQ1Ysa0VBQWdCOztJQUNoQiw4REFBWTs7SUFDWCwwREFBYTs7SUFDYiw2REFBVzs7SUFDWCwrREFBYTs7Ozs7SUFDRiwyREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybXNNb2R1bGUsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtY3JlYXRpb24tY3VzdG9tZXItZmlsZXVwbG9hZCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNyZWF0aW9uLWN1c3RvbWVyLWZpbGV1cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDcmVhdGlvbkN1c3RvbWVyRmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBPdXRwdXQoKSBvbkZpbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRpbWFnZXBhdGg7XG5cdHNob3dQZGZFcnJvck1zZztcblx0c2hvd01lc3NhZ2U7XG4gIGRvY1R5cGUgPSBbXTtcbiAgdXBsb2FkVHlwZTtcbiAgZG9jdW1lbnRUeXBlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZygnc3VrdS1jcmVhdGlvbi1jdXN0b21lci1maWxldXBsb2FkJyk7XG5cdFx0dGhpcy5kb2NUeXBlID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAncGFzc3BvcnQnLFxuXHRcdFx0XHR2YWx1ZTogJ3Bhc3Nwb3J0J1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2xpY2Vuc2UnLFxuXHRcdFx0XHR2YWx1ZTogJ2xpY2Vuc2UnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnaWRDYXJkJyxcblx0XHRcdFx0dmFsdWU6ICdpZENhcmQnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnb3RoZXInLFxuXHRcdFx0XHR2YWx1ZTogJ290aGVyJ1xuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHRpbWFnZVR5cGUodmFsKSB7XG4gICAgdGhpcy5kb2N1bWVudFR5cGUgPSB2YWw7XG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XG4gICAgaWYodmFsKSB7XG4gICAgICB0aGlzLnVwbG9hZFR5cGUgPSB2YWxcbiAgICB9XG5cdH1cblxuXHRmaWxldXBsb2FkKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZih0aGlzLmRvY3VtZW50VHlwZSkge1xuXHRcdGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG5cdFx0Y29uc3QgbWF4RmlsZVNpemUgPSA5OTk5OTk5O1xuXHRcdGxldCBjdXJyZW50RmlsZVNpemU7XG5cdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblx0XHRpZiAoY3VycmVudEZpbGVTaXplIDw9IG1heEZpbGVTaXplKSB7XG5cdFx0XHRpZiAoZmlsZS50eXBlID09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9qcGcnKSB7XG5cdFx0XHRcdGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgZG9jVHlwZSA9IHRoaXMudXBsb2FkVHlwZTtcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgIGZpbGUgOiBmaWxlLFxuICAgICAgICAgICAgICBkb2N1bWVudFR5cGU6IGRvY1R5cGVcbiAgICAgICAgICAgIH07XG5cdFx0XHRcdFx0XHR0aGlzLm9uRmlsZUNoYW5nZS5lbWl0KGRhdGEpO1xuXHRcdFx0XHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlLnRhcmdldC52YWx1ZSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuICAgICAgICB0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSB0eXBlIGpwZy9qcGVnL3BuZyBmaWxlcyBhcmUgYWxsb3dlZCEnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zbmFja2JhcignVGhlIGZpbGUgc2l6ZSBjYW5ub3QgZXhjZWVkIDEwIE1CJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuc25hY2tiYXIoJ1BsZWFzZSBzZWxlY3QgZG9jdW1lbnQgdHlwZS4nKTtcbiAgfVxuXHR9XG5cblx0c25hY2tiYXIobXNnKSB7XG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHRkdXJhdGlvbjogMzUwMFxuXHRcdH0pO1xuXHR9XG59Il19