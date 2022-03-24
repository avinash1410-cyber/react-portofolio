import Text from '../../shared/Text/Text';
import { Card } from './skillCardStyle';

const SkillCard = ({name}) => {
  return (
    <Card><Text type='h4' size={1.5}>{name}</Text></Card>
  )
}

export default SkillCard