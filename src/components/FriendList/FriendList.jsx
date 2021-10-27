import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  const item = friends.map((item) => (
    <FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
  ));

  return <ul className={styles.friendList}>{item}</ul>;
};

FriendList.defaultProps = {
  friends: [],
};

export default FriendList;
