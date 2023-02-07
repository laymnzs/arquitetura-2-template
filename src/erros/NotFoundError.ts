//Prática 2) Customizar novo error

import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError{
    constructor(
        message: string = "NotFound - Error 404 - Recurso não encontrado"
    ){
        super(404, message)
    }
}