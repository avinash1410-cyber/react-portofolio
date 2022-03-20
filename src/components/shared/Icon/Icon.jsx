import { IconElement } from './IconStyle';

const Icon = ({ icon, size, color }) => {
  return (
    <IconElement
      iconSize={size}
      iconColor={color}
      className={icon}
    ></IconElement>
  );
};

Icon.defaultProps = {
  size: 1.5,
  color: 'var(--black)',
};
export default Icon;
