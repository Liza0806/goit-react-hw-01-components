import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem'
import {
  FriendListWrapper,
} 
from './Friendlist.styled'

export const FriendList = ({friends}) =>{
    return(
        <FriendListWrapper className="friend-list">
        {friends.map(el => (
            <FriendListItem
            key={el.id}
            status={el.isOnline}
            avatar={el.avatar}
            name={el.name}
            className="item"
          />
       ))}</FriendListWrapper>
    )
}


FriendList.propTypes ={
    isOnline: PropTypes.bool,
    name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
}