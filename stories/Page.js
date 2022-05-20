import { createButton } from './Button';
import { createHeading } from './Heading';
import "./Page.css";

// 기본 셋팅 값
export const createPage = ({
    containerWidth = 1440,
    backgroundColor = '#f8f8f8'
}) => {
    const container = document.createElement('div');
          container.className = [`inner--${containerWidth}`];
          container.style.backgroundColor = backgroundColor;

    const mainText = createHeading({ text: 'Test Page'});
    const secontText = createHeading({ 
        size: 5,
        text: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. 
        It has survived not only five centuries, 
        but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 
        1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.`
    });

    const button = createButton({ 
        label: '더보기',
        backgroundColor: '#ff696f' 
    });

    container.append(mainText);
    container.append(secontText);
    container.append(button);

    return container;
}