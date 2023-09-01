import PropTypes from 'prop-types';
import { 
    FriendListItemSt,
  Status,
  Avatar,
  Name
  } 
  from './Friendlist.styled'

export const FriendListItem = ({id, isOnline, avatar, name}) => {
return(
<FriendListItemSt className="item" key={id}>
 <Status className="status" style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</Status>
  <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
  <Name className="name">{name}</Name>
</FriendListItemSt>)

}
FriendListItem.propTypes ={
    isOnline: PropTypes.bool,
    name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
}