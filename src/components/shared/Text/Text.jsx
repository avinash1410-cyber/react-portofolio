import TextElement from './TextStyle';
import propTypes from 'prop-types';

const Text = ({ children, type, size, color, weight }) => {
  return (
    <TextElement
      as={type}
      textSize={size}
      textColor={color}
      textWeight={weight}
    >
      {children}
    </TextElement>
  );
};

Text.prototype = {
  textSize: propTypes.number,
  textColor: propTypes.string,
  textWeight: propTypes.number,
  type: propTypes.element.isRequired,
};
Text.defaultProps = {
  size: 1.5,
  color: 'var(--balck)',
  weight: 500,
};
export default Text;
