import { createHeading } from "./Heading";

export default {
    title: 'Component/Heading/GmarketSans',
    argTypes: {
        fontFamily: {
            description: "-",
        },
        fontWeight: {
            description: 'bold medium normal',
            defaultValue: 'bold',
        }
    }
};

const Template = ({ ...args }) => {
    return createHeading({ ...args});
}

export const GmarketSans = Template.bind({});

GmarketSans.args = {
    fontFamily: 'GmarketSans',
    fontWeight: 'bold',
    size: 32,
    backgroundColor: 'transparent',
    text: 'I am 지마켓산스32',
    color: '#000',
}





