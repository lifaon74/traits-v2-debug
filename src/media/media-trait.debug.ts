import { IImageGetElementTrait } from './image/traits/image-get-element/image-get-element.trait';
import { IImageGetHeightTrait } from './image/traits/image-get-height/image-get-height.trait';
import { IImageGetWidthTrait } from './image/traits/image-get-width/image-get-width.trait';
import { IImageToDataURLFunctionOptions, IImageToDataURLTrait } from './image/traits/image-to-data-url/image-to-data-url.trait';
import { IMedia } from './media/media.trait';
import { createMedia } from './media/traits/create-media';

/*---*/

export interface IImage extends // traits
  IMedia,
  IImageGetElementTrait,
  IImageGetWidthTrait,
  IImageGetHeightTrait,
  IImageToDataURLTrait
//
{
}

export function loadImage(
  src: string,
): Promise<IImage> {
  return new Promise<IImage>((
    resolve: (value: IImage | PromiseLike<IImage>) => void,
    reject: (reason?: any) => void,
  ): void => {
    const imageElement = new Image();

    const createImage = (): IImage => {
      const media: IMedia = createMedia(src);

      const getElement = (): HTMLImageElement => {
        return imageElement;
      };

      const getWidth = (): number => {
        return imageElement.naturalWidth;
      };

      const getHeight = (): number => {
        return imageElement.naturalHeight;
      };

      const toDataURL = (
        {
          type,
          quality,
        }: IImageToDataURLFunctionOptions = {},
      ): string => {
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.width = imageElement.naturalWidth;
        canvas.height = imageElement.naturalHeight;

        const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.drawImage(imageElement, 0, 0);

        return canvas.toDataURL(type, quality);
      };

      return {
        ...media,
        getElement,
        getWidth,
        getHeight,
        toDataURL,
      };
    };

    const onError = (): void => {
      reject(new Error(`Image failed to load`));

    };

    imageElement.onload = (): void => {
      if (
        (imageElement.naturalWidth === 0)
        || (imageElement.naturalHeight === 0)
      ) {
        onError();
      } else {
        resolve(createImage());
      }
    };

    imageElement.onerror = onError;

    imageElement.src = src;
  });

}

/*--------------------------*/

async function debugImageTrait1(): Promise<void> {
  const img = await loadImage('/assets/01.jpg');
  (window as any).img = img;
  console.log(img.getSource());
}

/*--------------------------*/

export function debugMediaTrait(): void {
  debugImageTrait1();
}
