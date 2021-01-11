import { Pipeline } from '../../../dist';

export interface ComponentOptions {
  pipeline: Pipeline;
  parentElement?: HTMLElement;
}

export type Component = (
  options: ComponentOptions,
) => { render(): HTMLElement | null };
