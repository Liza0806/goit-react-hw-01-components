
import PropTypes from 'prop-types';
import  {
  ProfileStyle,
  StyledImage,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
  Stats
} from './UserProfile.styled';

export function UserProfile ({ avatar, username, tag, location, stats }){ 
return (
<ProfileStyle>
<div className="profile">
<div className="description">
  <StyledImage
    src={avatar}
    alt={username}
    className="avatar"
  />
  <Name className="name">{username}</Name>
  <Tag className="tag">@{tag}</Tag>
  <Location className="location">{location}</Location>
</div>

<Stats className="stats">
  <li>
    <Label
 className="label">Followers: </Label>
    <Quantity className="quantity">{stats.followers}</Quantity>
  </li>
  <li>
    <Label className="label">Views: </Label>
    <Quantity className="quantity">{stats.views}</Quantity>
  </li>
  <li>
    <Label className="label">Likes: </Label>
    <Quantity className="quantity">{stats.likes}</Quantity>
  </li>
</Stats>
</div></ProfileStyle>)};

UserProfile.propTypes ={
    username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}


