const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className="item">
      {isOnline ? <span class="status online"></span> : <span class="status offline"></span>}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;