import { createHeading } from "./Heading";

export default {
    title: 'Component/Heading',
};

const Template = ({ text, ...args }) => {
    return createHeading({ text, ...args});
}


export const H1 = Template.bind({});
export const H2 = Template.bind({});

H1.args = {
    size: 1,
    text: "I am H1",
}
H2.args = {
    size: 2,
    text: "I am H2",
}



