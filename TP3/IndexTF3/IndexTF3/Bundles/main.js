(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Proyecto Final\Proyecto-Grupo-1A-MisViajes\TP3\IndexTF3\AngularApp\src\main.ts */"zUnb");


/***/ }),

/***/ "1gVE":
/*!******************************************************************!*\
  !*** ./src/app/component/dashboard/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProfileComponent {
    constructor() {
        this.user_mail = "nacho@gmail.com";
        this.user_name = "nacho";
        this.user_img = "http://pbs.twimg.com/profile_images/722164198818627585/lyyqh02R_400x400.jpg";
        this.user_nom_com = "Nacho Cuatrin";
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 16, vars: 4, consts: [[1, "container-us"], [1, "row"], [1, "col-lg-4"], [1, "col-lg-8"], [1, "thumbnail"], ["id", "imagen", "alt", "profile picture", 2, "width", "35%", 3, "src"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Nombre de Usuario: ", ctx.user_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email: ", ctx.user_mail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Nombre Completo: ", ctx.user_nom_com, " ");
    } }, styles: [".container-us[_ngcontent-%COMP%]{\r\n    padding-top: 3rem;\r\n}\r\n\r\n#imagen[_ngcontent-%COMP%]{\r\n    border-radius: 70%;\r\n    min-height: 15%;\r\n    min-width: 10%;\r\n\r\n}\r\n\r\n.p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 3rem;\r\n    margin: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXVze1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbn1cclxuXHJcbiNpbWFnZW57XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxNSU7XHJcbiAgICBtaW4td2lkdGg6IDEwJTtcclxuXHJcbn1cclxuXHJcbi5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICBtYXJnaW46IDJweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "4k8j":
/*!************************************************!*\
  !*** ./src/app/component/log/log.component.ts ***!
  \************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "on2l");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class LogComponent {
    constructor(service, formBuilder, authService, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.form = this.formBuilder.group({
            usu_ali: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            usu_con: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]),
            ],
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.resetForm();
        }
        this.service.login(this.form.value).subscribe((res) => {
            this.authService.setAuth('juanp.caffa@gmail.com');
            this.router.navigate(["dashboard"]);
        }, (res) => {
            this.authService.setAuth('juanp.caffa@gmail.com');
            this.router.navigate(["dashboard"]);
        });
    }
    resetForm() {
        if (this.form != null)
            this.form.reset();
        this.formData = {
            usu_ali: '',
            usu_con: '',
        };
    }
}
LogComponent.ɵfac = function LogComponent_Factory(t) { return new (t || LogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogComponent, selectors: [["app-log"]], decls: 66, vars: 1, consts: [[1, "fotoLog"], [1, "login", 3, "formGroup", "submit"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "container-texto2"], [1, "footer-dark"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-md-3", "item"], ["href", "#"], [1, "col-md-6", "item", "text"], [1, "col", "item", "social"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "copyright"]], template: function LogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LogComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ingrese su Nombre de Usuario o Email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Recordarme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Compa\u00F1ia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Carrera");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Grupo 1.A Desarrollador FullStack - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Equipo integrado por 4 estudiantes de programaci\u00F3n FullStack.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Grupo 1.A \u00A9 2020 - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"]], styles: [".fotoLog[_ngcontent-%COMP%]{\n    background:url(\"/Bundles/assets/playas3.jpg\");\n    width: 100%;\n    min-width: 450px;\n    height: 70vh;\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    margin: auto;\n}\n\n.login[_ngcontent-%COMP%]{\n    width: 60%;\n    height: 640px;\n    margin: auto;\n    padding-top: 100px;\n\n}\n\n\n\n.footer-dark[_ngcontent-%COMP%] {\n    padding:50px 0;\n    color:#000;\n    background-color:#f5c0c0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top:0;\n    margin-bottom:12px;\n    font-weight:bold;\n    font-size:16px;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding:0;\n    list-style:none;\n    line-height:1.6;\n    font-size:14px;\n    margin-bottom:0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:inherit;\n    text-decoration:none;\n    opacity:0.6;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity:0.8;\n  }\n\n@media (max-width:767px) {\n    .footer-dark[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(.social) {\n      text-align:center;\n      padding-bottom:20px;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\n    margin-bottom:36px;\n  }\n\n@media (max-width:767px) {\n    .footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\n      margin-bottom:0;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity:0.6;\n    margin-bottom:0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\n    text-align:center;\n  }\n\n@media (max-width:991px) {\n    .footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\n      text-align:center;\n      margin-top:20px;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size:20px;\n    width:36px;\n    height:36px;\n    line-height:36px;\n    display:inline-block;\n    text-align:center;\n    border-radius:50%;\n    box-shadow:0 0 0 1px rgba(255,255,255,0.4);\n    margin:0 8px;\n    color:#000;\n    opacity:0.75;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    opacity:0.9;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    text-align:center;\n    padding-top:24px;\n    opacity:0.3;\n    font-size:13px;\n    margin-bottom:0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFFQSxVQUFVOztBQUNWO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtFQUNqQiIsImZpbGUiOiJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvdG9Mb2d7XG4gICAgYmFja2dyb3VuZDp1cmwoXCIvQnVuZGxlcy9hc3NldHMvcGxheWFzMy5qcGdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA0NTBweDtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbntcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjQwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcblxufVxuXG4vKkZvb3RiYXIqL1xuLmZvb3Rlci1kYXJrIHtcbiAgICBwYWRkaW5nOjUwcHggMDtcbiAgICBjb2xvcjojMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1YzBjMDtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIGgzIHtcbiAgICBtYXJnaW4tdG9wOjA7XG4gICAgbWFyZ2luLWJvdHRvbToxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayB1bCB7XG4gICAgcGFkZGluZzowO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBsaW5lLWhlaWdodDoxLjY7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgdWwgYSB7XG4gICAgY29sb3I6aW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICBvcGFjaXR5OjAuNjtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIHVsIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6MC44O1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5mb290ZXItZGFyayAuaXRlbTpub3QoLnNvY2lhbCkge1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnRleHQge1xuICAgIG1hcmdpbi1ib3R0b206MzZweDtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAuZm9vdGVyLWRhcmsgLml0ZW0udGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgfVxuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLml0ZW0udGV4dCBwIHtcbiAgICBvcGFjaXR5OjAuNjtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xuICAgIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwge1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsID4gYSB7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgd2lkdGg6MzZweDtcbiAgICBoZWlnaHQ6MzZweDtcbiAgICBsaW5lLWhlaWdodDozNnB4O1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIGJveC1zaGFkb3c6MCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgICBtYXJnaW46MCA4cHg7XG4gICAgY29sb3I6IzAwMDtcbiAgICBvcGFjaXR5OjAuNzU7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwgPiBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OjAuOTtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5jb3B5cmlnaHQge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHBhZGRpbmctdG9wOjI0cHg7XG4gICAgb3BhY2l0eTowLjM7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICB9XG5cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D/TJ":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 118, vars: 0, consts: [[1, "d-flex"], ["id", "sidebar-container", 1, "bg-primary"], [1, "logo"], [1, "text-dark", "font-weith-bold"], [1, "menu"], ["routerLink", "perfil", 1, "d-block", "p-3"], [1, "fas", "fa-user-friends"], ["routerLink", "", 1, "d-block", "p-3"], [1, "far", "fa-id-card"], [1, "fab", "fa-forumbee"], [1, "fas", "fa-cloud-sun"], [1, "fas", "fa-cog"], ["routerLink", "/", 1, "d-block", "p-3"], [1, "fas", "fa-sign-out-alt"], [1, "w-100"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "form-inline", "position-relative", "my-2", "d-inline-block"], ["type", "search", "placeholder", "Search", "aria-label", "Buscar", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-search", "position-absolute"], [1, "fas", "fa-search"], [1, "col-lg-9"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["src", "assets/ping.png", 1, "img-fluid", "rounded-circle", "avatar", "mr-2"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["id", "ventana1", "tabindex", "-1", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], [1, "container"], [1, "footer-dark"], [1, "row"], [1, "col-sm-6", "col-md-3", "item"], ["href", "#"], [1, "col-md-6", "item", "text"], [1, "col", "item", "social"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "copyright"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Viajar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Foro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Clima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Juan P. Caffa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Modal body text goes here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Compa\u00F1ia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Carrera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Grupo 1.A Desarrollador FullStack - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Equipo integrado por 4 estudiantes de programaci\u00F3n FullStack.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Grupo 1.A \u00A9 2020 - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    font-family: 'Heebo', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\n.bg-primary[_ngcontent-%COMP%]{\r\n    background-color: #f5c0c0 !important;\r\n}\r\n\r\n#sidebar-container[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n}\r\n\r\n#sidebar-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    padding: .875rem 1.25rem;\r\n}\r\n\r\n#sidebar-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .d-block[_ngcontent-%COMP%]{\r\n    width: 18rem;\r\n    color: #000;\r\n}\r\n\r\n#sidebar-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .d-block[_ngcontent-%COMP%]:hover{\r\n    background: #9fd8df;\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%]{\r\n    right: 5px;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%]{\r\n    max-width: 35px;\r\n}\r\n\r\n.container2[_ngcontent-%COMP%]{\r\n    margin: 10rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    background: #f8f8f8;\r\n    \r\n\r\n}\r\n\r\n\r\n\r\n.footer-dark[_ngcontent-%COMP%] {\r\n    padding:50px 0;\r\n    color:#000;\r\n    background-color:#f5c0c0;\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-top:0;\r\n    margin-bottom:12px;\r\n    font-weight:bold;\r\n    font-size:16px;\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding:0;\r\n    list-style:none;\r\n    line-height:1.6;\r\n    font-size:14px;\r\n    margin-bottom:0;\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color:inherit;\r\n    text-decoration:none;\r\n    opacity:0.6;\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    opacity:0.8;\r\n  }\r\n\r\n@media (max-width:767px) {\r\n    .footer-dark[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(.social) {\r\n      text-align:center;\r\n      padding-bottom:20px;\r\n    }\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\r\n    margin-bottom:36px;\r\n  }\r\n\r\n@media (max-width:767px) {\r\n    .footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\r\n      margin-bottom:0;\r\n    }\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    opacity:0.6;\r\n    margin-bottom:0;\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\r\n    text-align:center;\r\n  }\r\n\r\n@media (max-width:991px) {\r\n    .footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\r\n      text-align:center;\r\n      margin-top:20px;\r\n    }\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-size:20px;\r\n    width:36px;\r\n    height:36px;\r\n    line-height:36px;\r\n    display:inline-block;\r\n    text-align:center;\r\n    border-radius:50%;\r\n    box-shadow:0 0 0 1px rgba(255,255,255,0.4);\r\n    margin:0 8px;\r\n    color:#000;\r\n    opacity:0.75;\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    opacity:0.9;\r\n  }\r\n\r\n.footer-dark[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    text-align:center;\r\n    padding-top:24px;\r\n    opacity:0.3;\r\n    font-size:13px;\r\n    margin-bottom:0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7O0FBR3ZCOztBQUlBLFVBQVU7O0FBQ1Y7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0VBQ2pCIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzBjMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2lkZWJhci1jb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI3NpZGViYXItY29udGFpbmVyIC5sb2dve1xyXG4gICAgcGFkZGluZzogLjg3NXJlbSAxLjI1cmVtO1xyXG59XHJcblxyXG4jc2lkZWJhci1jb250YWluZXIgLm1lbnUgLmQtYmxvY2t7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuI3NpZGViYXItY29udGFpbmVyIC5tZW51IC5kLWJsb2NrOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzlmZDhkZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1zZWFyY2h7XHJcbiAgICByaWdodDogNXB4O1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcjJ7XHJcbiAgICBtYXJnaW46IDEwcmVtO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLypGb290YmFyKi9cclxuLmZvb3Rlci1kYXJrIHtcclxuICAgIHBhZGRpbmc6NTBweCAwO1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1YzBjMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kYXJrIGgzIHtcclxuICAgIG1hcmdpbi10b3A6MDtcclxuICAgIG1hcmdpbi1ib3R0b206MTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kYXJrIHVsIHtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNjtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRhcmsgdWwgYSB7XHJcbiAgICBjb2xvcjppbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBvcGFjaXR5OjAuNjtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kYXJrIHVsIGE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTowLjg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9vdGVyLWRhcmsgLml0ZW06bm90KC5zb2NpYWwpIHtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHtcclxuICAgIG1hcmdpbi1ib3R0b206MzZweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRhcmsgLml0ZW0udGV4dCBwIHtcclxuICAgIG9wYWNpdHk6MC42O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xyXG4gICAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCB7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwgPiBhIHtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgd2lkdGg6MzZweDtcclxuICAgIGhlaWdodDozNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzZweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJveC1zaGFkb3c6MCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICAgIG1hcmdpbjowIDhweDtcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgICBvcGFjaXR5OjAuNzU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwgPiBhOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6MC45O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRhcmsgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOjI0cHg7XHJcbiAgICBvcGFjaXR5OjAuMztcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "ObfR":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 0, consts: [[1, "navbar"], [1, "contenedorU"], ["routerLink", "", "routerLinkActive", "Active"], ["routerLink", ""], ["routerLink", "login", "routerLinkActive", "Active"], ["routerLink", "registro", "routerLinkActive", "Active"], ["routerLink", "dashboard", "routerLinkActive", "Active"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    background: #f5c0c0;\r\n    position: relative;\r\n    top: 0;\r\n}\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n    display: inline-block;\r\n\tpadding: 15px;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n\ttransition: .3s ease-out all;\r\n}\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tbackground: #9fd8df;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n.contenedorU[_ngcontent-%COMP%] {\r\n\tmax-width: 1000px;\r\n\twidth: 90%;\r\n\tmargin: auto;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWO0FBRUE7Q0FDQyxXQUFXO0lBQ1IscUJBQXFCO0NBQ3hCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCw0QkFBNEI7QUFDN0I7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLFlBQVk7Q0FDWixhQUFhO0NBQ2IsOEJBQThCO0FBQy9CIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypOYXZiYXIqL1xyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWMwYzA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXIgYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0dHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0IGFsbDtcclxufVxyXG5cclxuLm5hdmJhciBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjOWZkOGRmO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3JVIHtcclxuXHRtYXgtd2lkdGg6IDEwMDBweDtcclxuXHR3aWR0aDogOTAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'AngularApp';
        this.nombreUser = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TBWZ":
/*!****************************************************!*\
  !*** ./src/app/component/index/index.component.ts ***!
  \****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 134, vars: 0, consts: [[1, "conteiner-body"], [1, "logotipo"], [1, "container-texto"], [1, "titulo2"], [1, "pie"], [1, "navigator"], [1, "topnav"], [1, "button1"], [1, "button2"], [1, "texto"], [1, "texto1"], ["href", "#", "title", "corredores-turisticos", 2, "color", "#ff7171"], [1, "container1"], [1, "contenedor_tarjeta"], ["href", "#"], ["src", "assets/logo1.jpg", "alt", "", 1, "frontal"], [1, "trasera"], [1, "tit"], ["src", "assets/Comollego.jpg", "alt", "", 1, "frontal"], ["src", "assets/Transporte.jpg", "alt", "", 1, "frontal"], ["src", "assets/dondecomer.jpg", "alt", "", 1, "frontal"], ["src", "assets/mapa.jpg", "alt", "", 1, "frontal"], [1, "contenedor-texto2"], [1, "texto2"], [1, "turismo-txt"], [1, "turismo-des"], ["href", "#", "title", "Circutos-Termales", 2, "color", "#ff7171"], ["href", "https://gualeguaychu.gov.ar/tema/Museo%20del%20carnaval/", "title", "Circutos-Carnavales", 2, "color", "#ff7171"], ["href", "#", "title", "Circutos-Palacio", 2, "color", "#ff7171"], [1, "margen"], [1, "footer-dark"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-md-3", "item"], [1, "col-md-6", "item", "text"], [1, "col", "item", "social"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "copyright"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MisViajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Bienvenido a la p\u00E1gina de tur\u00EDsmo de Entre R\u00EDos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Museos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Corredores Tur\u00EDsticos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Clima ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Entre R\u00EDos es la escapada ideal de fin de semana, donde vas a poder disfrutar del verde, del r\u00EDo, de la naturaleza y de la historia. Con hermosos e intrigantes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "corredores tur\u00EDsticos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " donde podras recorrer increibles playas y termas como as\u00ED tambi\u00E9n, la rica historia no solo de la provincia si no del pa\u00EDs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Gu\u00EDa de Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "figcaption", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "INFORMACI\u00D3N GENERAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figcaption", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "COMO LLEGAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figcaption", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "TRANSPORTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "figcaption", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "DONDE COMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "figcaption", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "MAPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Parque Nacional - El Palmar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00BFPor qu\u00E9 visitar Entre R\u00EDos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "El turismo de la Provincia de Entre R\u00EDos se encuentra trazado por las enormes bondades de sus recursos naturales, la belleza natural de sus r\u00EDos, playas, aguas termales y su tierra. La tranquilidad y los paisajes provinciales se combinan con el c\u00E1lido servicio de los entrerrianos. Capital Nacional de los");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Circuitos Termales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " y emblem\u00E1tica en el despliegue de sus Carnavales, la provincia de Entre R\u00EDos cuenta con innumerables actividades y productos tur\u00EDsticos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Al visitar los ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "carnavales entrerrianos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ", podr\u00E1 encontrar deslumbrantes colores. El carnaval en la provincia de Entre R\u00EDos es el reflejo del brillo de los trajes de las mejores pasistas del pa\u00EDs y donde se combina el espect\u00E1culo, la diversi\u00F3n y la belleza con una distinguida recepci\u00F3n de los habitantes de la provincia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Nuestra propuesta es que puedas conocer Entre R\u00EDos a trav\u00E9s de los sentidos, con la suavidad de sus playas, con lo c\u00E1lido de sus termas y con los intensos sabores de sus quesos y embutidos. Y tengas un recorrido por la rica historia tanto nacional, provincia donde se formaron 4 presidentes de la naci\u00F3n y provincial, recorriendo la historia de Don Pancho Ram\u00EDrez y la Delfina, hasta recorrer los pasillos del imponente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Palacio San Jos\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ", donde vivi\u00F3 el Gral. Justo Jos\u00E9 de Urquiza, primer presidente de la Naci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Compa\u00F1ia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Carrera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Grupo 1.A Desarrollador FullStack - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Equipo integrado por 4 estudiantes de programaci\u00F3n FullStack.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Grupo 1.A \u00A9 2020 - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".conteiner-body[_ngcontent-%COMP%]{\n    font-family: 'Heebo', sans-serif;\n    background: #f8f8f8;\n    width: 100%;\n    margin: auto;\n}\n\n\n\n.logotipo[_ngcontent-%COMP%]{\n    background:url(\"/Bundles/assets/Palacio2.jpg\");\n    width: 100%;\n    min-width: 450px;\n    height: 100vh;\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    padding: calc(50vh - 50px);\n    margin: auto;\n}\n\n.pie[_ngcontent-%COMP%]{\n    margin: auto;\n    padding: 10px;\n    color: #f8f8f8;\n    font-size: 28px;\n    width: 90%;\n}\n\n.container-texto[_ngcontent-%COMP%]{\n    margin: auto;\n    width: 50%;\n    min-width: 300px;\n    text-align: center;\n}\n\n.titulo2[_ngcontent-%COMP%]{\n    background: #f0e4d7;\n    color: #333;\n    width: 25%;\n    height: 20%;\n    min-width: 250px;\n    margin: auto;\n    text-align: center;\n    line-height: 100px;\n}\n\n\n\n.texto[_ngcontent-%COMP%]{\n    background: #f8f8f8;\n    text-align: center;\n    font-size: 30px;\n    margin: auto;\n    padding-top: 5%;\n}\n\n.texto1[_ngcontent-%COMP%]{\n    padding: 40px 0;\n    font-size: 20px;\n    text-align: center;\n    width: 50%;\n    margin: auto;\n    min-width: 300px;\n}\n\n\n\n.topnav[_ngcontent-%COMP%] {\n    overflow: hidden;\n    background-color: #f8f8f8;\n    width: 98%;\n    min-width: 400px;\n    margin: auto;\n}\n\n.button1[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    background-color: #f0e4d7;\n    border: none;\n    color: #333;\n    text-align: center;\n    font-size: 150%;\n    padding: 15px;\n    width: 31.5%;\n    height: 80px;\n    transition: all 0.5s;\n    cursor: pointer;\n    margin: .5%;\n  }\n\n.button2[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    background-color: #9fd8df;\n    border: none;\n    color: #333;\n    text-align: center;\n    font-size: 140%;\n    padding: 15px;\n    width: 31.5%;\n    height: 80px;\n    transition: all 0.5s;\n    cursor: pointer;\n    margin: .5%;\n  }\n\n.button1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n\n.button1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n\n.button1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    padding-right: 25px;\n  }\n\n.button1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n    opacity: 1;\n    right: 0;\n  }\n\n.button2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n\n.button2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n\n.button2[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    padding-right: 25px;\n  }\n\n.button2[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n    opacity: 1;\n    right: 0;\n  }\n\n\n\n.cards[_ngcontent-%COMP%]{\n    max-width: 800px;\n    margin-left: 500px;\n}\n\n.container1[_ngcontent-%COMP%] {\n    background: #f8f8f8;\n    font-family: 'Heebo', sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.container1[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    margin: auto;\n    width: 55%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.contenedor_tarjeta[_ngcontent-%COMP%]{\n    height: 230px;\n    width: 230px;\n    margin: 20px;\n}\n\n.contenedor_tarjeta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n\n.contenedor_tarjeta[_ngcontent-%COMP%]:hover   figure[_ngcontent-%COMP%]{\n    transform: perspective(600px) rotateY(180deg);\n    box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.25);\n}\n\nfigure[_ngcontent-%COMP%]{\n    max-width: 221px;\n    max-height: 221px;\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    position: relative;\n    transition: all ease .5s;\n    transform-style: preserve-3d;\n    transform: perspective(600px) rotateY(0deg);\n}\n\nfigure.frontal[_ngcontent-%COMP%], figure.trasera[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    transition: all ease .5s;\n}\n\nfigure.frontal[_ngcontent-%COMP%] {\n    display: block;\n}\n\nfigure[_ngcontent-%COMP%]   .trasera[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0;\n    width: 221px;\n    height: 221px;\n    color: #fff;\n    background: #ff7171;\n    transform: perspective(600px) rotateY(180deg);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    overflow: auto;\n}\n\n@media screen and (max-width: 992px) { \n\tfigure[_ngcontent-%COMP%]   .trasera[_ngcontent-%COMP%] {\n\t\t\n\t\t-webkit-backface-visibility:visible;\n\t\t        backface-visibility:visible;\n\t\ttransform: perspective(600px) rotateY(0deg);\n\t}\n\n\t.contenedor_tarjeta[_ngcontent-%COMP%]:hover   figure[_ngcontent-%COMP%] {\n\t\ttransform: perspective(600px) rotateY(0deg);\t\n\t}\n\n}\n\n.tit[_ngcontent-%COMP%]{\n    font-size: 18px;\n    padding: 20px;\n    text-align: center;\n    margin-top: 60px;\n}\n\n\n\n.footer-dark[_ngcontent-%COMP%] {\n    padding:50px 0;\n    color:#000;\n    background-color:#f5c0c0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top:0;\n    margin-bottom:12px;\n    font-weight:bold;\n    font-size:16px;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding:0;\n    list-style:none;\n    line-height:1.6;\n    font-size:14px;\n    margin-bottom:0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:inherit;\n    text-decoration:none;\n    opacity:0.6;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity:0.8;\n  }\n\n@media (max-width:767px) {\n    .footer-dark[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(.social) {\n      text-align:center;\n      padding-bottom:20px;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\n    margin-bottom:36px;\n  }\n\n@media (max-width:767px) {\n    .footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\n      margin-bottom:0;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity:0.6;\n    margin-bottom:0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\n    text-align:center;\n  }\n\n@media (max-width:991px) {\n    .footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\n      text-align:center;\n      margin-top:20px;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size:20px;\n    width:36px;\n    height:36px;\n    line-height:36px;\n    display:inline-block;\n    text-align:center;\n    border-radius:50%;\n    box-shadow:0 0 0 1px rgba(255,255,255,0.4);\n    margin:0 8px;\n    color:#000;\n    opacity:0.75;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    opacity:0.9;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    text-align:center;\n    padding-top:24px;\n    opacity:0.3;\n    font-size:13px;\n    margin-bottom:0;\n  }\n\n\n\n.contenedor-texto2[_ngcontent-%COMP%]{\n    background:url(\"/Bundles/assets/Palmar.jpg\");\n    width: 100%;\n    min-width: 450px;\n    height: 60vh;\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    padding: calc(50vh - 50px);\n    margin: auto;\n  }\n\n.texto2[_ngcontent-%COMP%]{\n    width: 60%;  \n    font-size: 220%;\n    color: #ff7171;\n    margin: auto;\n    padding-top: 30%;\n    text-align: center;\n  }\n\n\n\n.turismo-txt[_ngcontent-%COMP%]{\n    background: #f8f8f8;\n    color:rgba(0, 0, 0, 0.75);\n    text-align: center;\n    font-size: 30px;\n    margin: auto;\n    padding-top: 8%;\n}\n\n.turismo-des[_ngcontent-%COMP%]{\n    padding: 40px 0;\n    font-size: 20px;\n    text-align: center;\n    width: 50%;\n    margin: auto;\n    min-width: 300px;\n}\n\n.margen[_ngcontent-%COMP%]{\n    background: #f8f8f8;\n    height: 100px;  \n}\n\n\n\n.go-top-container[_ngcontent-%COMP%]{\n  position: fixed;\n  bottom: 4rem;\n  right: 4rem;\n  width: 6.6rem;\n  height: 6.6rem;\n  z-index: -1;\n}\n\n.go-top-button[_ngcontent-%COMP%]{\n  width: 0rem;\n  height: 0rem;\n  background: #9fd8df;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: .2s;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n}\n\n.go-top-button.i[_ngcontent-%COMP%]{\n  position: absolute;\n  font-size: 1.7rem;\n  top: 48%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  color: #f8f8f8;\n  transition: .2s;\n}\n\n.show[_ngcontent-%COMP%]{\n  z-index: 10;\n}\n\n.show[_ngcontent-%COMP%]   .go-top-button[_ngcontent-%COMP%]{\n  animation: popup .3s ease-in-out;\n  width: 6.6rem;\n  height: 6.6rem;\n  z-index: 11;\n}\n\n.show[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n@keyframes popup{\n  0%{\n    width: 0rem;\n    height: 0rem;\n  }\n  50%{\n    width: 8rem;\n    height: 8rem;\n  }\n  100%{\n    width: 6.6rem;\n    height: 6.6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBOEJvQjs7QUFFcEI7SUFDSSw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFDQSxTQUFTOztBQUVUO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztFQUNiOztBQUNBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsUUFBUTtFQUNWOztBQUNBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsUUFBUTtFQUNWOztBQUVGLE9BQU87O0FBQ1A7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDZDQUE2QztJQUM3Qyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDJDQUEyQztBQUMvQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCOztBQUNBO0NBQ0M7RUFDQyxzQkFBc0I7RUFDdEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwyQ0FBMkM7Q0FDNUM7O0NBRUE7RUFDQywyQ0FBMkM7Q0FDNUM7O0FBRUQ7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUEsVUFBVTs7QUFDVjtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7SUFDckI7RUFDRjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtFQUNkOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNFLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkOztBQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDRTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsU0FBUztFQUNULHlDQUF5QztFQUN6QyxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlaW5lci1ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKk5hdmJhclxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZDogI2Y1YzBjMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbn1cblxuLm5hdmJhciBhIHtcblx0Y29sb3I6ICNmZmY7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogMTVweDtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICMwMDA7XG5cdHRyYW5zaXRpb246IC4zcyBlYXNlLW91dCBhbGw7XG59XG5cbi5uYXZiYXIgYTpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICM5ZmQ4ZGY7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW5lZG9yVSB7XG5cdG1heC13aWR0aDogMTAwMHB4O1xuXHR3aWR0aDogOTAlO1xuXHRtYXJnaW46IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi8qSW1hZ2VuIC8gUGFyYWxsYXgqL1xuXG4ubG9nb3RpcG97XG4gICAgYmFja2dyb3VuZDp1cmwoXCIvQnVuZGxlcy9hc3NldHMvUGFsYWNpbzIuanBnXCIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IGNhbGMoNTB2aCAtIDUwcHgpO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5waWV7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmOGY4Zjg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG4uY29udGFpbmVyLXRleHRve1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdHVsbzJ7XG4gICAgYmFja2dyb3VuZDogI2YwZTRkNztcbiAgICBjb2xvcjogIzMzMztcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMjAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XG59XG4vKlRleHRvcyovXG5cbi50ZXh0b3tcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbn1cbi50ZXh0bzF7XG4gICAgcGFkZGluZzogNDBweCAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLypOYXZpZ2F0b3IgYmFyKi9cblxuLnRvcG5hdiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uYnV0dG9uMSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGU0ZDc7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogMzEuNSU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IC41JTtcbiAgfVxuICAuYnV0dG9uMiB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmQ4ZGY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0MCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogMzEuNSU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IC41JTtcbiAgfVxuICAuYnV0dG9uMSBzcGFuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIFxuICAuYnV0dG9uMSBzcGFuOmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMGJiJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbiAgXG4gIC5idXR0b24xOmhvdmVyIHNwYW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIH1cbiAgXG4gIC5idXR0b24xOmhvdmVyIHNwYW46YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmJ1dHRvbjIgc3BhbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuICBcbiAgLmJ1dHRvbjIgc3BhbjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMDBiYic7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIFxuICAuYnV0dG9uMjpob3ZlciBzcGFuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB9XG4gIFxuICAuYnV0dG9uMjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuLypDYXJkKi9cbi5jYXJkc3tcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcbn1cblxuXG4uY29udGFpbmVyMSB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcbn1cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lcjF7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGVuZWRvcl90YXJqZXRhe1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cbi5jb250ZW5lZG9yX3RhcmpldGEgYXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGVuZWRvcl90YXJqZXRhOmhvdmVyIGZpZ3VyZXtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDYwMHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMjUpO1xufVxuXG5maWd1cmV7XG4gICAgbWF4LXdpZHRoOiAyMjFweDtcbiAgICBtYXgtaGVpZ2h0OiAyMjFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDYwMHB4KSByb3RhdGVZKDBkZWcpO1xufVxuXG5maWd1cmUuZnJvbnRhbCxcbmZpZ3VyZS50cmFzZXJhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG59XG5maWd1cmUuZnJvbnRhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmZpZ3VyZSAudHJhc2VyYXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMjFweDtcbiAgICBoZWlnaHQ6IDIyMXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICNmZjcxNzE7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg2MDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7IFxuXHRmaWd1cmUgLnRyYXNlcmEge1xuXHRcdC8qcG9zaXRpb246IHJlbGF0aXZlOyovXG5cdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlO1xuXHRcdHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNjAwcHgpIHJvdGF0ZVkoMGRlZyk7XG5cdH1cblxuXHQuY29udGVuZWRvcl90YXJqZXRhOmhvdmVyIGZpZ3VyZSB7XG5cdFx0dHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg2MDBweCkgcm90YXRlWSgwZGVnKTtcdFxuXHR9XG5cbn1cbi50aXR7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qRm9vdGJhciovXG4uZm9vdGVyLWRhcmsge1xuICAgIHBhZGRpbmc6NTBweCAwO1xuICAgIGNvbG9yOiMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVjMGMwO1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgaDMge1xuICAgIG1hcmdpbi10b3A6MDtcbiAgICBtYXJnaW4tYm90dG9tOjEycHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBmb250LXNpemU6MTZweDtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIHVsIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIGxpbmUtaGVpZ2h0OjEuNjtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayB1bCBhIHtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIG9wYWNpdHk6MC42O1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgdWwgYTpob3ZlciB7XG4gICAgb3BhY2l0eTowLjg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmZvb3Rlci1kYXJrIC5pdGVtOm5vdCguc29jaWFsKSB7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLml0ZW0udGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTozNnB4O1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHAge1xuICAgIG9wYWNpdHk6MC42O1xuICAgIG1hcmdpbi1ib3R0b206MDtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCB7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwgPiBhIHtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICB3aWR0aDozNnB4O1xuICAgIGhlaWdodDozNnB4O1xuICAgIGxpbmUtaGVpZ2h0OjM2cHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgYm94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICAgIG1hcmdpbjowIDhweDtcbiAgICBjb2xvcjojMDAwO1xuICAgIG9wYWNpdHk6MC43NTtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCA+IGE6aG92ZXIge1xuICAgIG9wYWNpdHk6MC45O1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLmNvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6MjRweDtcbiAgICBvcGFjaXR5OjAuMztcbiAgICBmb250LXNpemU6MTNweDtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cblxuICAvKlNlZ3VuZGEgSW1hZ2VuKi9cblxuICAuY29udGVuZWRvci10ZXh0bzJ7XG4gICAgYmFja2dyb3VuZDp1cmwoXCIvQnVuZGxlcy9hc3NldHMvUGFsbWFyLmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IGNhbGMoNTB2aCAtIDUwcHgpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAudGV4dG8ye1xuICAgIHdpZHRoOiA2MCU7ICBcbiAgICBmb250LXNpemU6IDIyMCU7XG4gICAgY29sb3I6ICNmZjcxNzE7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLypTZWd1bmRvIFRleHRvKi9cbiAgLnR1cmlzbW8tdHh0e1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogOCU7XG59XG4gIC50dXJpc21vLWRlc3tcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5cbi5tYXJnZW57XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBoZWlnaHQ6IDEwMHB4OyAgXG59XG5cbi8qSWNvbm8gZ28tdXAqL1xuXG4uZ28tdG9wLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDRyZW07XG4gIHJpZ2h0OiA0cmVtO1xuICB3aWR0aDogNi42cmVtO1xuICBoZWlnaHQ6IDYuNnJlbTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5nby10b3AtYnV0dG9ue1xuICB3aWR0aDogMHJlbTtcbiAgaGVpZ2h0OiAwcmVtO1xuICBiYWNrZ3JvdW5kOiAjOWZkOGRmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjJzO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5nby10b3AtYnV0dG9uLml7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIHRvcDogNDglO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuICBcblxuLnNob3d7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uc2hvdyAuZ28tdG9wLWJ1dHRvbntcbiAgYW5pbWF0aW9uOiBwb3B1cCAuM3MgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA2LjZyZW07XG4gIGhlaWdodDogNi42cmVtO1xuICB6LWluZGV4OiAxMTtcbn1cblxuLnNob3cgaXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbkBrZXlmcmFtZXMgcG9wdXB7XG4gIDAle1xuICAgIHdpZHRoOiAwcmVtO1xuICAgIGhlaWdodDogMHJlbTtcbiAgfVxuICA1MCV7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICB9XG4gIDEwMCV7XG4gICAgd2lkdGg6IDYuNnJlbTtcbiAgICBoZWlnaHQ6IDYuNnJlbTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _component_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/index/index.component */ "TBWZ");
/* harmony import */ var _component_log_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/log/log.component */ "4k8j");
/* harmony import */ var _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/registro/registro.component */ "k7kH");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "D/TJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/usuario.service */ "on2l");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _component_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/dashboard/profile/profile.component */ "1gVE");
/* harmony import */ var _component_dashboard_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/dashboard/inicio/inicio.component */ "kr9o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _component_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        _component_log_log_component__WEBPACK_IMPORTED_MODULE_5__["LogComponent"],
        _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"],
        _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _component_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _component_dashboard_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_13__["InicioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();


/***/ }),

/***/ "k7kH":
/*!**********************************************************!*\
  !*** ./src/app/component/registro/registro.component.ts ***!
  \**********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "on2l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RegistroComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dato necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dato necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dato necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dato necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dato necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dato necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dato necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegistroComponent {
    constructor(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            usu_ali: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            usu_nom_com: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            usu_con: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)])],
            usu_cor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])],
            usu_con2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)])],
            usu_cor2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])],
            usu_cel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() {
        this.resetForm();
    }
    ValidForm(campo) {
        return this.form.controls[campo].errors &&
            this.form.controls[campo].touched;
    }
    onSubmit(form) {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.resetForm(form);
        }
        this.insertRecord(form);
    }
    resetForm(form) {
        if (form != null)
            form.reset();
        this.service.formData = {
            usu_id: null,
            usu_nom_com: "",
            usu_ali: "",
            usu_cor: "",
            usu_con: "",
            usu_cel: "",
            usu_niv_id: null,
        };
    }
    insertRecord(form) {
        console.log(form.value);
        this.service.postUsuario(form.value).subscribe(res => {
            this.resetForm(form);
        });
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 103, vars: 8, consts: [[1, "fotoLog"], [1, "container-texto2"], [1, "txt1"], [1, "container"], ["autocomplete", "off", 3, "formGroup", "submit"], ["type", "hidden"], [1, "form-group"], [1, "col-md-5", "mb-3"], ["type", "text", "formControlName", "usu_ali", 1, "form-control"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "formControlName", "usu_nom_com", 1, "form-control"], [1, "form-group1"], ["type", "text", "formControlName", "usu_cel", 1, "form-control"], ["type", "text", "formControlName", "usu_cor", 1, "form-control"], ["type", "email", "formControlName", "usu_cor2", 1, "form-control"], ["type", "password", "formControlName", "usu_con", 1, "form-control"], ["type", "password", "formControlName", "usu_con2", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControleName", "termsLabel", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "float-end"], [1, "footer-dark"], [1, "row"], [1, "col-sm-6", "col-md-3", "item"], ["href", "#"], [1, "col-md-6", "item", "text"], [1, "col", "item", "social"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "copyright"], [1, "form-text", "text-danger"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Registro de Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegistroComponent_Template_form_submit_7_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nombre de Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RegistroComponent_span_14_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nombre completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegistroComponent_span_19_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Numero de Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegistroComponent_span_25_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RegistroComponent_span_30_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegistroComponent_span_35_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, RegistroComponent_span_40_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, RegistroComponent_span_46_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Acepto los t\u00E9rminos y condiciones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Debe aceptar los terminos y condiciones para poder continuar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Enviar Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Compa\u00F1ia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Carrera");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Grupo 1.A Desarrollador FullStack - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Equipo integrado por 4 estudiantes de programaci\u00F3n FullStack.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Grupo 1.A \u00A9 2020 - Entre R\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ValidForm("usu_ali"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ValidForm("usu_nom_com"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ValidForm("usu_cel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ValidForm("usu_cor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ValidForm("usu_cor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ValidForm("usu_con"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ValidForm("usu_con"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".fotoLog[_ngcontent-%COMP%]{\n    background:url(\"/Bundles/assets/parana.png\");\n    width: 100%;\n    min-width: 450px;\n    height: 80vh;\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    margin: auto;\n}\n\n.container[_ngcontent-%COMP%]{\n    width: 70%;\n    margin: auto;\n    padding-top: 4%;\n}\n\n.txt1[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: auto;\n    padding-top: 2%;\n}\n\n\n\n.footer-dark[_ngcontent-%COMP%] {\n    padding:50px 0;\n    color:#000;\n    background-color:#f5c0c0;\n    margin-top: 8%;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top:0;\n    margin-bottom:12px;\n    font-weight:bold;\n    font-size:16px;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding:0;\n    list-style:none;\n    line-height:1.6;\n    font-size:14px;\n    margin-bottom:0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:inherit;\n    text-decoration:none;\n    opacity:0.6;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity:0.8;\n  }\n\n@media (max-width:767px) {\n    .footer-dark[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(.social) {\n      text-align:center;\n      padding-bottom:20px;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\n    margin-bottom:36px;\n  }\n\n@media (max-width:767px) {\n    .footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%] {\n      margin-bottom:0;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity:0.6;\n    margin-bottom:0;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\n    text-align:center;\n  }\n\n@media (max-width:991px) {\n    .footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] {\n      text-align:center;\n      margin-top:20px;\n    }\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size:20px;\n    width:36px;\n    height:36px;\n    line-height:36px;\n    display:inline-block;\n    text-align:center;\n    border-radius:50%;\n    box-shadow:0 0 0 1px rgba(255,255,255,0.4);\n    margin:0 8px;\n    color:#000;\n    opacity:0.75;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    opacity:0.9;\n  }\n\n.footer-dark[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    text-align:center;\n    padding-top:24px;\n    opacity:0.3;\n    font-size:13px;\n    margin-bottom:0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBR0EsVUFBVTs7QUFDVjtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtFQUNqQiIsImZpbGUiOiJyZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm90b0xvZ3tcbiAgICBiYWNrZ3JvdW5kOnVybChcIi9CdW5kbGVzL2Fzc2V0cy9wYXJhbmEucG5nXCIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA0JTtcbn1cblxuLnR4dDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMiU7XG59XG5cblxuLypGb290YmFyKi9cbi5mb290ZXItZGFyayB7XG4gICAgcGFkZGluZzo1MHB4IDA7XG4gICAgY29sb3I6IzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWMwYzA7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayBoMyB7XG4gICAgbWFyZ2luLXRvcDowO1xuICAgIG1hcmdpbi1ib3R0b206MTJweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgdWwge1xuICAgIHBhZGRpbmc6MDtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgbGluZS1oZWlnaHQ6MS42O1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206MDtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIHVsIGEge1xuICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgb3BhY2l0eTowLjY7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayB1bCBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OjAuODtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAuZm9vdGVyLWRhcmsgLml0ZW06bm90KC5zb2NpYWwpIHtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgcGFkZGluZy1ib3R0b206MjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOjM2cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmZvb3Rlci1kYXJrIC5pdGVtLnRleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTowO1xuICAgIH1cbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnRleHQgcCB7XG4gICAgb3BhY2l0eTowLjY7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsIHtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCA+IGEge1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIHdpZHRoOjM2cHg7XG4gICAgaGVpZ2h0OjM2cHg7XG4gICAgbGluZS1oZWlnaHQ6MzZweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICBib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gICAgbWFyZ2luOjAgOHB4O1xuICAgIGNvbG9yOiMwMDA7XG4gICAgb3BhY2l0eTowLjc1O1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsID4gYTpob3ZlciB7XG4gICAgb3BhY2l0eTowLjk7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuY29weXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDoyNHB4O1xuICAgIG9wYWNpdHk6MC4zO1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206MDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "kr9o":
/*!****************************************************************!*\
  !*** ./src/app/component/dashboard/inicio/inicio.component.ts ***!
  \****************************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 9, vars: 0, consts: [["id", "content"], [1, "ty-3"], [1, "container"], [1, "row"], [1, "col-lg-9"], [1, "font-weigth-bold", "mb-0"], [1, "lead", "text-muted"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bienvenido...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "En esta secci\u00F3n podras realizar consultas y modificaciones con respecto a la administraci\u00F3n de la p\u00E1gina como del foro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#content[_ngcontent-%COMP%]{\r\n    overflow-y: auto;\r\n    height: 100vh;\r\n    padding-bottom: 5rem;\r\n}\r\n.p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    text-shadow: darkgray;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    color: #ff7171;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbn1cclxuLnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogZGFya2dyYXk7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjogI2ZmNzE3MTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthService {
    constructor(router) {
        this.router = router;
    }
    // ...
    canActivate() {
        if (!this.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !!token;
    }
    setAuth(email) {
        localStorage.setItem('token', email);
    }
    logout() {
        localStorage.removeItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "on2l":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UsuarioService {
    //constructor() {  }
    constructor(http) {
        this.http = http;
        this.rootURL = 'https://localhost:44350/api';
    }
    postUsuario(formData) {
        console.log(formData);
        return this.http.post(this.rootURL + '/usuarios', formData);
    }
    login(data) {
        return this.http.post(this.rootURL + '/login', data);
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "D/TJ");
/* harmony import */ var _component_dashboard_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/dashboard/inicio/inicio.component */ "kr9o");
/* harmony import */ var _component_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/dashboard/profile/profile.component */ "1gVE");
/* harmony import */ var _component_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/index/index.component */ "TBWZ");
/* harmony import */ var _component_log_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/log/log.component */ "4k8j");
/* harmony import */ var _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/registro/registro.component */ "k7kH");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    //Componente Index
    { path: '',
        component: _component_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        pathMatch: 'full' },
    { path: 'login',
        component: _component_log_log_component__WEBPACK_IMPORTED_MODULE_5__["LogComponent"] },
    { path: 'registro',
        component: _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"] },
    { path: 'dashboard',
        component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
        children: [
            { path: '',
                component: _component_dashboard_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"],
                pathMatch: 'prefix'
            },
            { path: 'perfil',
                component: _component_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
        ]
    },
    { path: '**',
        redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map