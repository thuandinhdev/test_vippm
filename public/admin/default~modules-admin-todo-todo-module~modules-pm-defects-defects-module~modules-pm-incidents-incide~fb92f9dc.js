(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-admin-todo-todo-module~modules-pm-defects-defects-module~modules-pm-incidents-incide~fb92f9dc"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-ul\"></i>&nbsp;{{'todos.title' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"createTodoForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'todos.create.fields.description' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" placeholder=\"{{'todos.create.placeholders.placeholder1' | translate}}\" type=\"text\"></textarea>\r\n                        <div *ngIf=\"isFormSubmitted && todoControl.description.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"todoControl.description.errors.required\">{{'todos.create.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"todoControl.description.errors.minlength\">{{'todos.create.error_messages.message2' | translate}}</div>\r\n                            <div *ngIf=\"todoControl.description.errors.maxlength\">{{'todos.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"due_date\">{{'todos.create.fields.due_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input #dp=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [minDate]=\"minDate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.due_date.errors }\" bsDatepicker class=\"form-control\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'todos.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                            <div *ngIf=\"isFormSubmitted && todoControl.due_date.errors\" class=\"invalid-feedback\">\r\n                                <div>{{'todos.create.error_messages.message5' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.create' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2 class=\"modal-title font-weight-normal\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-ul\"></i>&nbsp;{{'todos.title' | translate}}</h2>\r\n    <button (click)=\"bsModalRef.hide()\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n        <span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editTodoForm\" class=\"form\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">{{'todos.create.fields.description' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <textarea [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.description.errors }\" class=\"form-control\" formControlName=\"description\" id=\"description\" placeholder=\"{{'todos.create.placeholders.placeholder1' | translate}}\" type=\"text\"></textarea>\r\n                        <div *ngIf=\"isFormSubmitted && todoControl.description.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"todoControl.description.errors.required\">{{'todos.create.error_messages.message1' | translate}}</div>\r\n                            <div *ngIf=\"todoControl.description.errors.minlength\">{{'todos.create.error_messages.message2' | translate}}</div>\r\n                            <div *ngIf=\"todoControl.description.errors.maxlength\">{{'todos.create.error_messages.message3' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\" class=\"form-group\">\r\n                        <label for=\"status\">{{'todos.create.fields.status' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <ng-select [items]=\"('todos.status' | translate)\" [multiple]=\"false\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\" [searchable]=\"true\" bindLabel=\"label\" bindValue=\"id\" formControlName=\"status\" placeholder=\"{{'todos.create.placeholders.placeholder2' | translate}}\">\r\n                            <ng-template let-item=\"item\" ng-option-tmp>{{item.label}}</ng-template>\r\n                        </ng-select>\r\n                        <div *ngIf=\"isFormSubmitted && todoControl.status.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"todoControl.status.errors.required\">{{'todos.create.error_messages.message4' | translate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"due_date\">{{'todos.create.fields.due_date' | translate}}\r\n                            <span class=\"text-danger\">&nbsp;*</span></label>\r\n                        <div class=\"position-relative has-icon-left\">\r\n                            <input #dp=\"bsDatepicker\" [bsConfig]=\"datepickerConfig\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.due_date.errors }\" bsDatepicker class=\"form-control\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'todos.create.placeholders.placeholder3' | translate}}\" type=\"text\"/>\r\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n                            <div *ngIf=\"isFormSubmitted && todoControl.due_date.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"todoControl.due_date.errors.required\">{{'todos.create.error_messages.message5' | translate}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button (click)=\"onCancel()\" class=\"btn btn-cancel mb-0\" type=\"button\">{{'common.close' | translate}}</button>\r\n        <button class=\"btn btn-submit mb-0\" type=\"submit\">{{'common.update' | translate}}</button>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isPageloaded\" class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card bg-transparent\">\r\n            <div class=\"card-header p-0\">\r\n                <h4 class=\"sub-title mt-2\"><span>{{'todos.title' | translate}}</span></h4>\r\n                <button (click)=\"openTodoCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_create']\" class=\"btn btn-create mr-2 mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                </button>\r\n            </div>\r\n            <div *ngIf=\"todos.open.length > 0\" class=\"card-content pt-1\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"drag-container\">\r\n                        <div #pendingList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[doneList]\" [cdkDropListData]=\"todos.open\" cdkDropList class=\"item-list\">\r\n                            <div *ngFor=\"let item of todos.open\" cdkDrag class=\"item-box\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-1\">\r\n                                            <label class=\"checkbox-container checkbox-container-custom  p-1 mb-1 mt-0 mr-0\">\r\n                                                <input (change)=\"changeStatus(item, 2)\" class=\"form-control\" id=\"status{{item.id}}\" name=\"status\" type=\"checkbox\"/>\r\n                                                <span class=\"checkbox-checkmark\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <inline-edit-textarea (updateValue)=\"saveTodosDetail(item, 'description', $event);\" [elementFor]=\"'todos.inline_edit.description' | translate\" [fieldValue]=\"item.description\" [isRequired]=\"'true'\" [name]=\"'description'\"></inline-edit-textarea>\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <inline-edit-date (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\" [datepickerConfigs]=\"datepickerConfigs\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [fieldValue]=\"item.due_date\" [format]=\"loginUser.settings.date_format\" [isRequired]=\"'true'\" [name]=\"'due_date'\"></inline-edit-date>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageloaded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2\">\r\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\r\n                    <h4 class=\"main-title mb-0 mt-2\"><span>{{'todos.title' | translate}}</span></h4>\r\n                    <button (click)=\"openTodoCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\">\r\n                        <i class=\"fa fa-plus\"></i></button>\r\n                </div>\r\n                <div class=\"card-content pt-3 pb-3\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"drag-container\">\r\n                                    <div class=\"section-heading\">{{'common.status.open' | translate}}</div>\r\n                                    <div #pendingList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[doneList]\" [cdkDropListData]=\"todos.open\" cdkDropList class=\"item-list\">\r\n                                        <div *ngFor=\"let item of todos.open\" cdkDrag class=\"item-box\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-7\">\r\n                                                        <inline-edit-textarea (updateValue)=\"saveTodosDetail(item, 'description', $event);\" [elementFor]=\"'todos.inline_edit.description' | translate\" [fieldValue]=\"item.description\" [isRequired]=\"'true'\" [name]=\"'description'\"></inline-edit-textarea>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-5 text-right\">\r\n                                                        <inline-edit-date (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\" [datepickerConfigs]=\"datepickerConfigs\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [fieldValue]=\"item.due_date\" [format]=\"loginUser.settings.date_format\" [isRequired]=\"'true'\" [name]=\"'due_date'\"></inline-edit-date>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"drag-container\">\r\n                                    <div class=\"section-heading\">{{'common.status.completed' | translate}}</div>\r\n                                    <div #doneList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListConnectedTo]=\"[pendingList]\" [cdkDropListData]=\"todos.completed\" cdkDropList class=\"item-list\">\r\n                                        <div *ngFor=\"let item of todos.completed\" cdkDrag class=\"item-box\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-7\">\r\n                                                        <inline-edit-textarea (updateValue)=\"saveTodosDetail(item, 'description', $event);\" [elementFor]=\"'todos.inline_edit.description' | translate\" [fieldValue]=\"item.description\" [isRequired]=\"'true'\" [name]=\"'description'\"></inline-edit-textarea>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-5 text-right\">\r\n                                                        <inline-edit-date (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\" [datepickerConfigs]=\"datepickerConfigs\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [fieldValue]=\"item.due_date\" [format]=\"loginUser.settings.date_format\" [isRequired]=\"'true'\" [name]=\"'due_date'\"></inline-edit-date>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/todo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/todo.service.ts ***!
  \***********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TodoService.prototype.getAllTodos = function (params) {
        return this.http.post(this.apiUrl + "/api/todos/list", params);
    };
    TodoService.prototype.changeTodosStatus = function (todos) {
        return this.http.post(this.apiUrl + "/api/todos/update-list", todos);
    };
    TodoService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/todos");
    };
    TodoService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/todos/" + id);
    };
    TodoService.prototype.create = function (todo) {
        return this.http.post(this.apiUrl + "/api/todos", todo);
    };
    TodoService.prototype.update = function (todo) {
        return this.http.put(this.apiUrl + "/api/todos/" + todo.id, todo);
    };
    TodoService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/todos/" + id);
    };
    TodoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9jb21wb25lbnRzL2NyZWF0ZS10b2RvLW1vZGFsL2NyZWF0ZS10b2RvLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateTodoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoModalComponent", function() { return CreateTodoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");









var CreateTodoModalComponent = /** @class */ (function () {
    function CreateTodoModalComponent(translate, datepipe, bsModalRef, formBuilder, toastr, todoService) {
        this.translate = translate;
        this.datepipe = datepipe;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.todoService = todoService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    Object.defineProperty(CreateTodoModalComponent.prototype, "todoControl", {
        get: function () {
            return this.createTodoForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.minDate = new Date();
        this.loadForms();
    };
    CreateTodoModalComponent.prototype.loadForms = function () {
        this.createTodoForm = this.formBuilder.group({
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            due_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            module_id: [this.todoParams.module_id],
            module_related_id: [this.todoParams.module_related_id]
        });
    };
    CreateTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTodoForm.invalid) {
            return;
        }
        this.createTodoForm.value.due_date = this.datepipe.transform(this.createTodoForm.value.due_date, 'yyyy-MM-dd');
        this.todoService.create(this.createTodoForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.create'), _this.translate.instant('todos.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTodoModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_8__["TodoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateTodoModalComponent.prototype, "todoParams", void 0);
    CreateTodoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-todo-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-todo-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-todo-modal.component.scss */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_8__["TodoService"]])
    ], CreateTodoModalComponent);
    return CreateTodoModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9jb21wb25lbnRzL2VkaXQtdG9kby1tb2RhbC9lZGl0LXRvZG8tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditTodoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoModalComponent", function() { return EditTodoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");









var EditTodoModalComponent = /** @class */ (function () {
    function EditTodoModalComponent(translate, bsModalRef, formBuilder, toastr, userService, todoService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.todoService = todoService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.users = [];
        this.assignMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    Object.defineProperty(EditTodoModalComponent.prototype, "todoControl", {
        get: function () {
            return this.editTodoForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    EditTodoModalComponent.prototype.loadForms = function () {
        this.editTodoForm = this.formBuilder.group({
            id: [this.todo.id],
            description: [this.todo.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            status: [this.todo.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            due_date: [new Date(this.todo.due_date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            module_id: [this.todo.module_id],
            module_related_id: [this.todo.module_related_id]
        });
    };
    EditTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTodoForm.invalid) {
            return;
        }
        this.todoService.update(this.editTodoForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditTodoModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_8__["TodoService"] }
    ]; };
    EditTodoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-todo-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-todo-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-todo-modal.component.scss */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_8__["TodoService"]])
    ], EditTodoModalComponent);
    return EditTodoModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox-container-custom {\n  padding-left: 0 !important;\n}\n\n.section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  max-width: 100%;\n  vertical-align: top;\n  padding: 10px 0;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 30px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 8px;\n}\n\n.item-box:hover {\n  box-shadow: 0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06);\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9mYXN0LWZvb2Qvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby1kZXRhaWwvdG9kby1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9wYWdlcy90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBRUksZUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdJO0VBQ0ksOEVBQUE7QUNEUjs7QURLQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLG1CQUFBO0FDSko7O0FET0E7RUFDSSxVQUFBO0FDSko7O0FET0E7RUFDSSxzREFBQTtBQ0pKOztBRE9BO0VBQ0ksc0RBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9wYWdlcy90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveC1jb250YWluZXItY3VzdG9tIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kcmFnLWNvbnRhaW5lciB7XHJcbiAgICAvLyB3aWR0aDogNjYwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLml0ZW0tYm94IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMTVweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgIH1cclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iLCIuY2hlY2tib3gtY29udGFpbmVyLWN1c3RvbSB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWxpc3Qge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1ib3gge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pdGVtLWJveDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMTVweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLml0ZW0tbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5pdGVtLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");













var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(translate, ngxRolesService, modalService, http, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.isPageloaded = false;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': this.module_id,
            'module_related_id': this.module_related_id
        };
        this.getTodos();
    };
    TodoDetailComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoDetailComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos(this.todoParams)
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) {
        });
    };
    TodoDetailComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
        }, function (error) {
        });
    };
    TodoDetailComponent.prototype.changeStatus = function (todo, status) {
        var _this = this;
        todo.status = status;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.openTodoCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                todoParams: this.todoParams
            }
        };
        this.modalRef = this.modalService.show(_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_11__["CreateTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.openTodoEditModal = function (todo) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                todo: todo
            }
        };
        this.modalRef = this.modalService.show(_components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__["EditTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.todoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('todos.messages.delete'), _this.translate.instant('todos.title'));
                    _this.getTodos();
                });
            }
        });
    };
    TodoDetailComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TodoDetailComponent.prototype, "module_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TodoDetailComponent.prototype, "module_related_id", void 0);
    TodoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-detail.component.scss */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo/todo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo/todo.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  width: 600px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #E9ECEF;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 60px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 20px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9mYXN0LWZvb2Qvc3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esc0JBQUE7TUFBQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7RUFHQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtBQ0RKOztBRElBO0VBQ0ksc0RBQUE7QUNESjs7QURJQTtFQUNJLHNEQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZHJhZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUVDRUY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLml0ZW0tYm94IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iLCIuc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXRlbS1saXN0IHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW0tYm94IHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo/todo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo/todo.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");














var TodoComponent = /** @class */ (function () {
    function TodoComponent(translate, ngxRolesService, modalService, http, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.isPageloaded = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': 6,
            'module_related_id': 0
        };
        this.getTodos();
    };
    TodoComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos({ 'length': 10 })
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) {
        });
    };
    TodoComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
            _this.getTodos();
        }, function (error) {
        });
    };
    TodoComponent.prototype.openTodoCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                todoParams: this.todoParams
            }
        };
        this.modalRef = this.modalService.show(_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__["CreateTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoComponent.prototype.openTodoEditModal = function (todo) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: 'inmodal modal-dialog-centered modal-md animated fadeIn',
            initialState: {
                todo: todo
            }
        };
        this.modalRef = this.modalService.show(_components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.todoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('todos.messages.delete'), _this.translate.instant('todos.title'));
                    _this.getTodos();
                });
            }
        });
    };
    TodoComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.scss */ "./src/app/modules/admin/todo/pages/todo/todo.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/todo-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/todo/todo-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TodoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRoutingModule", function() { return TodoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/modules/admin/todo/pages/todo/todo.component.ts");
/* harmony import */ var _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/todo-detail/todo-detail.component */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts");






var routes = [
    {
        path: '',
        component: _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]
    },
    {
        path: 'detail',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__["TodoDetailComponent"],
        data: {
            breadcrumbs: {
                text: 'common.detail',
                icon: 'fa fa-product-hunt',
                show: true,
                isHome: true
            }
        }
    },
];
var TodoRoutingModule = /** @class */ (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/todo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/todo/todo.module.ts ***!
  \***************************************************/
/*! exports provided: TodoModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/modules/admin/todo/todo-routing.module.ts");
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/modules/admin/todo/pages/todo/todo.component.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");
/* harmony import */ var _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/todo-detail/todo-detail.component */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts");



















var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__["TodoComponent"],
                _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTodoModalComponent"],
                _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTodoModalComponent"],
                _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__["TodoDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _todo_routing_module__WEBPACK_IMPORTED_MODULE_14__["TodoRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            exports: [_pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__["TodoDetailComponent"]],
            entryComponents: [_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTodoModalComponent"], _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTodoModalComponent"]]
        })
    ], TodoModule);
    return TodoModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=default~modules-admin-todo-todo-module~modules-pm-defects-defects-module~modules-pm-incidents-incide~fb92f9dc.js.map