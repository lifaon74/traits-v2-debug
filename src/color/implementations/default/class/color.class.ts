import { COLOR_PRIVATE_CONTEXT, IColorPrivateContext, IColorStruct } from '../struct/color.struct';
import { normalizeColorValue } from '../../../helpers/normalize-color-value';
import { ColorStructGetAlphaImplementation } from '../struct/implementations/channels/alpha/color-struct.get-alpha.implementation';
import { ColorStructSetAlphaImplementation } from '../struct/implementations/channels/alpha/color-struct.set-alpha.implementation';
import { ColorStructSetBlueImplementation } from '../struct/implementations/channels/blue/color-struct.set-blue.implementation';
import { ColorStructGetBlueImplementation } from '../struct/implementations/channels/blue/color-struct.get-blue.implementation';
import { ColorStructSetGreenImplementation } from '../struct/implementations/channels/green/color-struct.set-green-implementation';
import { ColorStructGetGreenImplementation } from '../struct/implementations/channels/green/color-struct.get-green-implementation';
import { ColorStructSetRedImplementation } from '../struct/implementations/channels/red/color-struct.set-red-implementation';
import { ColorStructGetRedImplementation } from '../struct/implementations/channels/red/color-struct.get-red-implementation';
import { assembleTraitImplementations, createPrivateContext } from '@lifaon/traits';
import { ColorStructToRGBImplementation } from '../struct/implementations/to/to-rgb/color-struct.to-rgb.implementation';
import { ColorStructToRGBAImplementation } from '../struct/implementations/to/to-rgb/color-struct.to-rgba.implementation';
import { ColorStructToStringImplementation } from '../struct/implementations/to/to-string/color-struct.to-string.implementation';
import { ColorStructToHexImplementation } from '../struct/implementations/to/to-hex/color-struct.to-hex.implementation';
import { ColorStructToHSLAObjectImplementation } from '../struct/implementations/to/to-hsl/color-struct.to-hsla-object-implementation';
import { ColorStructToHSLAImplementation } from '../struct/implementations/to/to-hsl/color-struct.to-hsla-implementation';
import { ColorStructToHSLImplementation } from '../struct/implementations/to/to-hsl/color-struct.to-hsl.implementation';
import { ColorStructEqualsImplementation } from '../struct/implementations/comparison/equals/color-struct.equals.implementation';
import { ColorClassNewImplementation } from './implementations/color-class.new.implementation';
import { ColorClassParseRGBImplementation } from './implementations/color-class.parse-rgb.implementation';
import { ColorClassParseImplementation } from './implementations/color-class.parse.implementation';
import { ColorClassFromHSLAObjectImplementation } from './implementations/color-class.from-hsla-object.implementation';
import {
  ColorStructMixImplementation, IColorStructMixImplementationGColorConstraint
} from '../struct/implementations/operations/mix/color-struct-mix.implementation';
import { ColorStructDarkenImplementation } from '../struct/implementations/operations/darken/color-struct.lighten.implementation';
import { ColorStructGrayscaleImplementation } from '../struct/implementations/operations/grayscale/color-struct.grayscale.implementation';
import { ColorStructInvertImplementation } from '../struct/implementations/operations/invert/color-struct.invert.implementation';
import { ColorStructLightenImplementation } from '../struct/implementations/operations/lighten/color-struct-lighten.implementation';

/** CONSTRUCTOR **/


export function constructColor(
  instance: IColorStruct,
  r: number,
  g: number,
  b: number,
  a: number,
): void {
  // INFO private properties are ~3 times slower to assign
  createPrivateContext<IColorPrivateContext>(
    COLOR_PRIVATE_CONTEXT,
    instance,
    {
      r: normalizeColorValue(r, 'r'),
      g: normalizeColorValue(g, 'g'),
      b: normalizeColorValue(b, 'b'),
      a: normalizeColorValue(a, 'a'),
    },
  );
}


/** CLASS **/

// FOR PROTOTYPE

// CHANNELS

export interface IColorChannelsImplementations extends
  // r
  ColorStructGetRedImplementation<IColor>,
  ColorStructSetRedImplementation<IColor>,
  // g
  ColorStructGetGreenImplementation<IColor>,
  ColorStructSetGreenImplementation<IColor>,
  // b
  ColorStructGetBlueImplementation<IColor>,
  ColorStructSetBlueImplementation<IColor>,
  // a
  ColorStructGetAlphaImplementation<IColor>,
  ColorStructSetAlphaImplementation<IColor>
  //
{
}

export const ColorChannelsImplementations = [
  // r
  ColorStructGetRedImplementation,
  ColorStructSetRedImplementation,
  // g
  ColorStructGetGreenImplementation,
  ColorStructSetGreenImplementation,
  // b
  ColorStructGetBlueImplementation,
  ColorStructSetBlueImplementation,
  // a
  ColorStructGetAlphaImplementation,
  ColorStructSetAlphaImplementation,
];


// TO

export interface IColorToImplementations extends
  // rgb
  ColorStructToRGBImplementation<IColor>,
  ColorStructToRGBAImplementation<IColor>,
  // hsl
  ColorStructToHSLImplementation<IColor>,
  ColorStructToHSLAImplementation<IColor>,
  ColorStructToHSLAObjectImplementation<IColor>,
  // to - others
  ColorStructToHexImplementation<IColor>,
  ColorStructToStringImplementation<IColor>
  //
{
}

export const ColorToImplementations = [
  // rgb
  ColorStructToRGBImplementation,
  ColorStructToRGBAImplementation,
  // hsl
  ColorStructToHSLImplementation,
  ColorStructToHSLAImplementation,
  ColorStructToHSLAObjectImplementation,
  // to - others
  ColorStructToHexImplementation,
  ColorStructToStringImplementation,
];

// OPERATIONS

export interface IColorOperationsImplementations extends
  // implementations
  ColorStructMixImplementation<IColor, IColorStructMixImplementationGColorConstraint, IColor>,
  ColorStructGrayscaleImplementation<IColor, IColor>,
  ColorStructInvertImplementation<IColor, IColor>,
  ColorStructLightenImplementation<IColor, IColor>,
  ColorStructDarkenImplementation<IColor, IColor>
  //
{
}

export const ColorOperationsImplementations = [
  ColorStructMixImplementation,
  ColorStructGrayscaleImplementation,
  ColorStructInvertImplementation,
  ColorStructLightenImplementation,
  ColorStructDarkenImplementation,
];

// ALL

export interface IColorImplementations extends
  // implementations
  // new
  ColorClassNewImplementation<IColor>,
  IColorChannelsImplementations,
  // comparison
  ColorStructEqualsImplementation<IColor>,
  IColorOperationsImplementations,
  IColorToImplementations
  //
{
}

export const ColorImplementations = [
  // new
  ColorClassNewImplementation,
  ...ColorChannelsImplementations,
  // comparison
  ColorStructEqualsImplementation,
  ...ColorOperationsImplementations,
  ...ColorToImplementations,
];

// FOR CONSTRUCTOR

export interface IColorConstructorImplementations extends
  // implementations
  // new
  ColorClassNewImplementation<IColor>,
  // parse
  ColorClassParseRGBImplementation<IColorConstructor, IColor>,
  ColorClassParseImplementation<IColorConstructor, IColor>,
  // from
  ColorClassFromHSLAObjectImplementation<IColorConstructor, IColor>
  //
{
}

export const ColorConstructorImplementations = [
  // new
  ColorClassNewImplementation,
  // parse
  ColorClassParseRGBImplementation,
  ColorClassParseImplementation,
  // from
  ColorClassFromHSLAObjectImplementation,
];

export interface IHavingConstructorWithColorConstructorImplementations {
  constructor: IColorConstructorImplementations;
}

export interface IColorImplementationsHavingColorConstructor extends IColorImplementations, IHavingConstructorWithColorConstructorImplementations {

}

export interface IColorImplementationsConstructor extends IColorConstructorImplementations {
  new(): IColorImplementationsHavingColorConstructor;
}

export interface IColor extends IColorStruct, IColorImplementationsHavingColorConstructor {
  r: number;
  g: number;
  b: number;
  a: number;
}


export interface IColorConstructor extends IColorConstructorImplementations {
  new(
    r: number,
    g: number,
    b: number,
    a: number,
  ): IColor;
}


const ColorImplementationsConstructor = assembleTraitImplementations<IColorImplementationsConstructor>(ColorImplementations, ColorConstructorImplementations);

export class Color extends ColorImplementationsConstructor implements IColor {
  readonly [COLOR_PRIVATE_CONTEXT]: IColorPrivateContext;

  constructor(
    r: number,
    g: number,
    b: number,
    a: number,
  ) {
    super();
    constructColor(this, r, g, b, a);
  }

  get r(): number {
    return this.getRed();
  }

  set r(value: number) {
    this.setRed(value);
  }

  get g(): number {
    return this.getGreen();
  }

  set g(value: number) {
    this.setGreen(value);
  }

  get b(): number {
    return this.getBlue();
  }

  set b(value: number) {
    this.setBlue(value);
  }

  get a(): number {
    return this.getAlpha();
  }

  set a(value: number) {
    this.setAlpha(value);
  }
}
