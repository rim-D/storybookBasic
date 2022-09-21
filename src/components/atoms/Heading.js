import "./Heading.css";

// 기본 셋팅 값
export const createHeading = ({
    fontFamily = 'yg-jalnan',
    fontWeight = 'normal',
    size = 30,
    backgroundColor = 'transparent',
    text = '',
    color = '#000'
}) => {
    const heading = document.createElement(`h${size}`);
          heading.className = [`title fs${size}`];
          heading.style.fontFamily = [`${fontFamily}, -apple-system, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`]
          heading.style.fontWeight = fontWeight;
          heading.style.backgroundColor = backgroundColor;
          heading.style.color = color;
          heading.innerText = text;

    return heading;
}