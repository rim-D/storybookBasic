import "./Heading.css";

// 기본 셋팅 값
export const createHeading = ({
    size = 1,
    backgroundColor = 'transparent',
    text = '',
}) => {
    const heading = document.createElement(`h${size}`);
          heading.className = [`title--h${size}`];
          heading.style.backgroundColor = backgroundColor;
          heading.innerText = text;

    return heading;
}