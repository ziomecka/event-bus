import { Component } from './types';

export const button: Component = ({ pipeline, parentElement }) => {
  const channel = pipeline.addChannel('button', ['button-clicked']);

  const addListener = (button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
      channel.emit('button-clicked');
    });
  };

  const createButton = (textContent = 'button') => {
    const button = document.createElement('button');
    button.textContent = textContent;
    addListener(button);

    parentElement && parentElement.append(button);

    return button;
  };

  return {
    render: createButton,
  };
};
