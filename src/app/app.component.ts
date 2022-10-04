import { Component, OnInit } from '@angular/core';

// import custom validator to validate that password and confirm password fields match

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    ecmsData = {
        "idFlux": "test1", "dateCreateFlux": "2022-10-04T07:31:18.000+00:00",
        "dateValueFlux": "2022-10-04T07:31:18.000+00:00",
        "numFlux": 50, "amhDateSend": null, "amhDateBack": null,
        "amhStatus": null, "ecmsDateSend": null, "emsDateBack": null,
        "ecmsStatus": null, "numberTricpLoan": null, "amountTricpLoan": null,
        "numberLoansEligible": null, "amountLoansEligible": null, "numberCCR": null,
        "amountCCR": null, "numberCCU": null, "amountCCU": null, "numberCCOAU": null,
        "amounTCCOAU": null, "numberMob": null, "amountMob": null, "numberDemob": null,
        "amountDemob": null, "numberRR": null, "numberRU": null, "numberEvent": null, "amountEvent": null, "numberLoanTricp": null, "amountLoanTricp": null, "numberLoanAcc": 60, "amountLoanAcc": 70
    }
    
    registerForm: FormGroup;
    submitted = false;

    constructor() { }

    ngOnInit() {
    }

    // convenience getter for easy access to form fields
}
