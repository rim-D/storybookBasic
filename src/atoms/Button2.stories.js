import { Button2 } from "./Button2";


export default {
    title: 'Component/Button2',
};
const Template = (args) => {
    const btn = document.createElement('button');
    btn.innerText = args.label;
  
    const mode = args.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    btn.className = ['storybook-button', 'storybook-button--medium', mode].join(' ');
  
    return btn;
  };
  
  //👇 Each story then reuses that template
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Button',
  };