import styled from '@emotion/styled'



export const StatsContainer = styled.div`
width: 600px;
padding: 50px;
margin: 50px auto;
border-radius: 16px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  color: #44236a;
 

`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const StatItem = styled.li`
width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
    padding-bottom: 8px;
  border-radius: 6px;

  .label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .percentage {
    font-size: 20px;
  
  }
`;