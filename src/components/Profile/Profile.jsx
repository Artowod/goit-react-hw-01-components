import ProfileStatsElement from "./ProfileStatsElement";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const profileStatsElement = Object.entries(stats).map(([key, value]) => (
    <ProfileStatsElement key={key} label={key} quantity={value} />
  ));

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {profileStatsElement}
        {/*<ProfileStatsElement label="Followers" quantity={stats.followers} />
        <ProfileStatsElement label="Views" quantity={stats.views} />
        <ProfileStatsElement label="Likes" quantity={stats.likes} /> */}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
