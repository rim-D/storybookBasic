import "./Button.css";

// 기본 셋팅 값
export const createButton = ({
    size = 'small',
    backgroundColor = 'gray',
    label = 'click me',
    onClick, 
}) => {
    const btn = document.createElement('button');
          btn.className = [`btn--${size}`];
          btn.style.backgroundColor = backgroundColor;
          btn.innerText = label;
          btn.addEventListener('click', onClick);

    return btn;
}