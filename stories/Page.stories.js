import { createPage } from "./Page";

export default {
    title: 'Page/page1',
};

const Template = ({ label, ...args }) => {
    return createPage({ label, ...args });
}

export const page1 = Template.bind({});
