import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LoginService } from '@shurik88/auth';
import { CheckPasswordService } from '@shurik88/auth';
import { AlertService } from '@shurik88/alert';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    providers: [LoginService,  AlertService, CheckPasswordService],
    templateUrl: '../Templates/app.html'
})
export class AppComponent implements OnInit {
    @ViewChild('changePasswordComponent')
    changePasswordComponent: any;
    
    @ViewChild('changePasswordDialog')
    changePasswordDialogRef: ElementRef;


    constructor(private router: Router,
        private loginService: LoginService,
        private alertService: AlertService) {
        
    }

    ngOnInit(): void {
        this.router.events.subscribe(() => {
            $('.modal:visible').hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        });
    }

  
}
