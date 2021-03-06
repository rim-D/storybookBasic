import { createHeading } from "./Heading";

export default {
    title: 'Component/Heading/NanumGothic',
};

const Template = ({ text, ...args }) => {
    return createHeading({ text, ...args});
}

export const NanumGothic = Template.bind({});

NanumGothic.args = {
    fontFamily: 'Nanum Gothic',
    fontWeight: '800',
    size: 32,
    backgroundColor: 'transparent',
    text: 'I am ëëęł ë32',
    color: '#000',
}




