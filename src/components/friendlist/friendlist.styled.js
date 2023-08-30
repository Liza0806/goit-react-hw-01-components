import styled from '@emotion/styled'

export const FriendListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FriendListItem = styled.li`
width: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  padding: 10px;
 
`;

export const Name = styled.p`
  font-size: 30px;
  margin-left: 10px;
  color: #44236a`;