import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import { name, tag, location, avatar, stats } from "./assets/user.json";
import statisticalData from "./assets/statistical-data.json";
import friendsData from "./assets/friends.json";
function App() {
  return (
    <div className="App">
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
    </div>
  );
}

export default App;
