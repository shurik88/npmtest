/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="globals/bootstrap-notify/index.d.ts" />
/// <reference path="globals/bootstrap/index.d.ts" />
/// <reference path="globals/jquery/index.d.ts" />
/// <reference path="globals/moment/index.d.ts" />
/// <reference path="globals/nprogress/index.d.ts" />

declare var Cropper: any;
declare var MiniProfiler: any;
declare var tinymce: any;
declare var STORAGE_API: string;
declare function videojs(elem: any);
declare var LeaderLine: any;
declare var PlainDraggable: any;

interface LeaderLine {

}

interface String {
   replaceAll(search: string, replacement: string);
}

interface JQuery {
    inputmask(mask: string);
    select2();
    select2(config: any);
}

interface Array<T> {
    distinct(): Array<T>;
    max(): T;
    sum(func: (x: T) => number): number;
    orderBy(func: (x: T) => any): Array<T>;
    orderByDescending(func: (x: T) => any): Array<T>;
}

interface FileList {
   toArray(): Array<File>;
}

interface String {
    declinate(x: number, isSecondType?: boolean);
    padLeft(padString: String, length: number): string;
    padRight(padString: String, length: number): string;
    escapeSymbolsForFileName(): string;
}

