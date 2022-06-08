import { createButton } from "./Button";

export default {
    title: 'Component/Button',
};

const Template = ({ label, ...args }) => {
    return createButton({ label, ...args});
}


export const Small = Template.bind({});
Small.args = {
    label: "small btn",
    backgroundColor: 'yellow',
    onClick() {
        alert(`I'm small btn`);
    }
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: "large btn",
    backgroundColor: '#00a2be',
    onClick() {
        alert(`I'm large btn`);
    }
}
