export interface IMediaGetSourceFunction {
  (): string;
}

export interface IMediaGetSourceTrait {
  getSource: IMediaGetSourceFunction;
}
