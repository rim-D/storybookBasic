import { createHeading } from "./Heading";

export default {
    title: 'Component/Heading/YgJalnan',
};

const Template = ({ text, ...args }) => {
    return createHeading({ text, ...args});
}

export const YgJalnan = Template.bind({});

YgJalnan.args = {
    fontFamily: 'yg-jalnan',
    fontWeight: '800',
    size: 32,
    backgroundColor: 'transparent',
    text: 'I am 여기어때 잘난체32',
    color: '#000',
}





