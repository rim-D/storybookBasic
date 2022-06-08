import "./Button.css";

export const Primary = () => {
  const btn = document.createElement('button');
  btn.innerText = 'Button';

  btn.className = [
    'storybook-button',
    'storybook-button--medium',
    'storybook-button--primary',
  ].join(' ');

  return btn;
};