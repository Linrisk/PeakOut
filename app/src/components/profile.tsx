import React from 'react';
import './Profile.css'; // Style CSS pour ce composant

interface ProfileProps {
  name: string;
  age: number;
  description: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, age, description, imageUrl }) => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={imageUrl} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>{name}, {age}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
