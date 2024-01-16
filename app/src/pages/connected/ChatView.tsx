import React from 'react';
import './ChatView.css'; // Style CSS pour ce composant
import Layout from '../../components/LayoutApp';

import use1 from '../../assets/images/use1.jpg';
import use2 from '../../assets/images/use2.jpg';
import use3 from '../../assets/images/use3.jpg';
import use4 from '../../assets/images/use4.jpg';
import use5 from '../../assets/images/use5.jpg';
import use6 from '../../assets/images/use6.jpg';
import use7 from '../../assets/images/use7.jpg';
import use8 from '../../assets/images/use8.jpg';
import use9 from '../../assets/images/use9.jpg';
import use10 from '../../assets/images/use10.jpg';

import '../../assets/css/Chat.css';

const ChatView = () => {
  const recentUsers = [
    {
      name: 'Alice',
      lastMessage: 'Salut ! Comment vas-tu ?',
      profileImage: use1,
    },
    {
      name: 'Bob',
      lastMessage: 'Bonjour, as-tu terminé ce projet ?',
      profileImage: use2,
    },
    {
      name: 'Alice',
      lastMessage: 'Salut ! Comment vas-tu ?',
      profileImage: use3,
    },
    {
      name: 'Bob',
      lastMessage: 'Bonjour, as-tu terminé ce projet ?',
      profileImage: use4,
    },
    {
      name: 'Alice',
      lastMessage: 'Salut ! Comment vas-tu ?',
      profileImage: use5,
    },
    {
      name: 'Bob',
      lastMessage: 'Bonjour, as-tu terminé ce projet ?',
      profileImage: use6,
    },
    {
      name: 'Alice',
      lastMessage: 'Salut ! Comment vas-tu ?',
      profileImage: use7,
    },
    {
      name: 'Bob',
      lastMessage: 'Bonjour, as-tu terminé ce projet ?',
      profileImage: use8,
    },
    {
      name: 'Alice',
      lastMessage: 'Salut ! Comment vas-tu ?',
      profileImage: use9,
    },
    {
      name: 'Bob',
      lastMessage: 'Bonjour, as-tu terminé ce projet ?',
      profileImage: use10,
    },
  ];
  const RecentUserBubble = ({ profileImage }) => (
    <img src={profileImage} alt="Profile" className="recent-user-image" />
  );


  return (
    <Layout>
      <div className="chat-view" style={{  }}>
        <div className="recent-users" style={{ height: '20%' }}>
          <div className="row-last-conversation">
          <h3 className="last-conversations-title">Dernières conversations</h3>

          </div>
          <div className="scrollable-users">
            {recentUsers.map((user, index) => (
              <RecentUserBubble
                key={index}
                profileImage={user.profileImage}
              />
            ))}
          </div>
          <h3 className="list-messages-title">Messages</h3>
          <div className="message-list" style={{ height: 'fit-content', alignItems:'center',justifyContent: 'space-evenly', padding: '0.5rem', display: 'flex', flexDirection:'column' }}>
          {recentUsers.map((user, index) => (
            <div key={index} className="message" style={{ height: 'fit-content', justifyContent: 'center', padding: '0.7rem',margin:'0.5rem', display: 'flex', borderRadius: 5, width: '100%' }}>
              <img src={user.profileImage} alt="Profile" className="recent-user-image" style={{paddingLeft:'0.5rem'}} />
              <div className="message-content" style={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '0.3rem' }}>
                <p style={{ margin: 0 }}>{user.name}</p>
                <p style={{ margin: 0 }}>{user.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Layout>
  );
};
export default ChatView;
