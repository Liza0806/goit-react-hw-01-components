import PropTypes from 'prop-types';
import {
  StatsContainer,
  Title,
  StatList, 
  StatItem}
  from './Statistics.styled'

  const getRandomColor = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;


export const StatsBoard = ({ data, title }) => {
    return ( <StatsContainer>
    {title && <Title>{title}</Title>}
      <StatList className="stat-list">
        {data.map(el => (
          <StatItem className="item" style={{ backgroundColor: getRandomColor() }} key={el.id}>
            <span className="label">{el.label} </span>
            <span className="percentage">{el.percentage} %</span>
          </StatItem>
        ))}
      </StatList></StatsContainer>
    );
  };
 
  StatsBoard.propTypes ={
    label: PropTypes.string,
    percentage: PropTypes.number,
  id: PropTypes.number,
}