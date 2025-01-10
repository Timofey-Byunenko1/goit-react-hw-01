import React from "react"; // Импорт React
import Profile from "./components/Profile/Profile"; // Импорт компонента Profile
import FriendList from "./components/FriendList/FriendList"; // Импорт компонента FriendList

// Импорт данных
import userData from "./userData.json";
import friends from "./friends.json";

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

