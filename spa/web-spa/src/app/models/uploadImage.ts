export interface IUploadImage {
    fileName: string;
}
export interface IViewImage {
    url: string; 
    alt?: string; 
    isVisible: boolean; 
    id: number; 
    src: string;
    width: number;
}