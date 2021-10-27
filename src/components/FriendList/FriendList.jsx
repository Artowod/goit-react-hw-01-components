import FriendListItem from "./FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
  const item = friends.map((item) => (
    <FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
  ));
    
  return <ul className="friend-list">{item}</ul>;
};

export default FriendList;
