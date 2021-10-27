import StatsElement from "./ProfileStatsElement/ProfileStatsElement";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar"/>
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <StatsElement label="Followers" quantity={stats.followers} />
      <StatsElement label="Views" quantity={stats.views} />
      <StatsElement label="Likes" quantity={stats.likes} />
    </ul>
  </div>
);

export default Profile;
