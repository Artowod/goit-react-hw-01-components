import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import { name, tag, location, avatar, stats } from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friendsData from "./data/friends.json";
import transactions from "./data/transactions.json";
import "./App.css";
import "./shared/styles/reset.css";

function App() {
  return (
    <div className="App">
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
