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
    text: 'I am 나눔고딕32',
    color: '#000',
}




