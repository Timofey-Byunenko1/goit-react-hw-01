import React from "react"; 
import Profile from "./components/FriendList/Profile/Profile";
import FriendList from "./components/FriendList/FriendList"; 
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

// Импорт данных
import userData from "./userData.json";
import friends from "./friends.json";
import transaction from "./transactions.json";

import "./App.css";

const App = () => (
  <div>
    {/* Компонент Profile */}
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    
    {/* Компонент FriendList */}
    <FriendList friends={friends} />
  </div>
);

export default App;

