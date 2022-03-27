
export interface IImageToDataURLFunctionOptions {
  type?: string,
  quality?: number,
}

export interface IImageToDataURLFunction {
  (
    options?: IImageToDataURLFunctionOptions,
  ): string;
}

export interface IImageToDataURLTrait {
  toDataURL: IImageToDataURLFunction;
}

