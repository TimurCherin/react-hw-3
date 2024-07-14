import './App.css';
import Profile from "./components/userProfile";
import user from "./info/userProfile.json";
import Statistics from "./components/stats";
import statsInfo from "./info/statsInfo.json";
import frendsInfo from "./info/friends.json"
import FriendsList from "./components/listFriends";
import Transaction from "./components/transactions";
import transaktionInfo from './info/transactionInfo.json';

function App() {
  return (
    <div>
      <Profile userInfo={user} />
      <Statistics stats={statsInfo} />
      <FriendsList friends={frendsInfo} />
      <Transaction transactions={transaktionInfo} />
    </div>
  );
}

export default App;
