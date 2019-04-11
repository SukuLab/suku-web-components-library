import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuProfileHeaderComponent implements OnInit {
    fullStars: number;
    fullStarsArray: any[];
    halfStar: number;
    emptyStars: number;
    emptyStarsArray: any[];
    _ratingValue: any;
    profileImage: string;
    userName: string;
    nameWeight: string;
    nameCustomClass: string;
    nameSize: string;
    nameColor: any;
    userNameId: any;
    accountType: string;
    accountWeight: string;
    accountCustomClass: string;
    accountSize: string;
    accountColor: string;
    accountId: string;
    ratingCustomClass: string;
    rateDetails: string;
    rateDetailColor: string;
    ratingDetailWeight: string;
    rateDetailSize: string;
    rateDetailsCustomClass: string;
    ratingPrivacy: Boolean;
    rateDetailsId: string;
    rating: EventEmitter<{}>;
    customClass: any;
    ratingValue: number;
    subHeadingOne: string;
    subHeadingOneId: string;
    subHeadingTwo: string;
    subHeadingTwoId: string;
    editvisibility: boolean;
    changePasswordvisibility: boolean;
    mail: string;
    mailTxtSize: string;
    mailTextColor: string;
    mailWeight: string;
    mailcustomClass: string;
    mailId: string;
    mailIcon: string;
    mailIconClass: string;
    number: string;
    phnumberSize: string;
    phnumberColor: string;
    phnumberWeight: string;
    phnumberCustomClass: string;
    phNumberIcon: string;
    phoneId: string;
    addressIcon: string;
    address: string;
    addressSize: string;
    addressColor: string;
    addressWeight: string;
    addressId: string;
    addressCustomClass: string;
    samBadgeIcon: string;
    samBadgeClass: string;
    samIconAction: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
