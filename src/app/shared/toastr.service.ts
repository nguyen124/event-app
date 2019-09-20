import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable({
    providedIn: 'root'
})
export class ToastrService {
    constructor() {

    }
    success(message: string, title?: string) {
        toastr.success(message);
    }
    info(message: string, title?: string) {
        toastr.success(message);
    }
    warning(message: string, title?: string) {
        toastr.success(message);
    }
    error(message: string, title?: string) {
        toastr.success(message);
    }
}