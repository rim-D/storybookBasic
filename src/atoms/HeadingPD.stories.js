import { createHeading } from "./Heading";

export default {
    title: 'Component/Heading/Pretendard',
};

const Template = ({ ...args }) => {
    return createHeading({ ...args});
}

export const Pretendard = Template.bind({});

Pretendard.args = {
    fontFamily: 'Pretendard',
    fontWeight: '800',
    size: 32,
    backgroundColor: 'transparent',
    text: 'I am 여기어때 잘난체32',
    color: '#000',
}





