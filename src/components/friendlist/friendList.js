import PropTypes from 'prop-types';
import {
  FriendListWrapper,
FriendListItem,
Status,
Avatar,
Name
} 
from './friendlist.styled'

export const FriendList = ({friends}) =>{
    return(
        <FriendListWrapper className="friend-list">
        {friends.map(el => (
        <FriendListItem className="item" key={el.id}>
 <Status className="status" style={{ backgroundColor: el.isOnline ? 'green' : 'red' }}>{el.isOnline}</Status>
  <Avatar className="avatar" src={el.avatar} alt="User avatar" width="48" />
  <Name className="name">{el.name}</Name>
</FriendListItem>))}</FriendListWrapper>
    )
}


FriendList.propTypes ={
    isOnline: PropTypes.bool,
    name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
}