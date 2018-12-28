export class ResponseData {
    public data: any;
    public msg: string;
    public status: string;
    public errors?: string[];
    [key: string]: any;
}

export interface IResponseData {
    data: any;
    msg: string;
    status: string;
    errors?: string[];
    [key: string]: any;
}