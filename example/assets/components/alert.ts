import { Component } from './types';

export const alert: Component = ({ pipeline }) => {
  pipeline
    .getChannel('button')
    ?.subscribe('button-clicked', () => window.alert('Button clicked'));

  return {
    render: () => null,
  };
};
