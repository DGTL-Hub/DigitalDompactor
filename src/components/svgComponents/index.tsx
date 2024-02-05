interface Props {
  x: number;
  y: number;
  element: HTMLElement;
}

function MySVGComponent() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="5" fill="red"/>
    </svg>
  );
}

function CloseShape() {
  const svgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10
  };

  return (
    <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <title>Escape Shape</title>
      <circle fill="#970101" cx="25" cy="25" r="22"></circle>
      <rect fill="white" x="23" y="14" width="4" height="22"></rect>
      <rect fill="white" x="14" y="23" width="22" height="4"></rect>
    </svg>
  );
}

function moveElement({ element, x, y }: Props) {
  element.style.transform = `translate(${x}px, ${y}px)`;
}

const svgComponents = { MySVGComponent, CloseShape, moveElement };
export default svgComponents;
