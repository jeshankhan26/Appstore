import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import logo from "../../public/Modern_Letter_S_Logo-removebg-preview (1).png";
import { updateProfile } from "firebase/auth";
import { AuthContext } from '../../public/Provider/AuthProvider';
import { NavLink } from 'react-router';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [message, setMessage] = useState('');

  // Update state when user is loaded
  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL
      });
      setMessage("✅ Profile updated successfully!");
    } catch (error) {
      setMessage("❌ Error updating profile: " + error.message);
    }
  };

  // Show loading or fallback if user is not available yet
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-500 text-white">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-base-500 px-4 py-12">
        <div className="w-full max-w-md border-2 border-indigo-600 bg-base-500 text-white rounded-lg p-8">
          <div className="text-center">
            <img alt="Your Company" src={logo} className="mx-auto h-30 w-30" />
            <h2 className="mt-6 text-2xl font-bold text-white">Profile Info</h2>
          </div>

          <div className="text-center mt-4">
            {user.photoURL && (
              <img src={user.photoURL} alt="User" className="w-20 h-20 mx-auto rounded-full" />
            )}
            <p className="mt-2">Name: {user.displayName || 'N/A'}</p>
            <p>Email: {user.email}</p>
          </div>

          <form onSubmit={handleUpdate} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Update Name</label>
              <input
                type="text"
                className="w-full rounded-md px-3 py-2 "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Update Photo URL</label>
              <input
                type="text"
                className="w-full rounded-md px-3 py-2 "
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
            >
              Save Changes
            </button>

            {message && <p className="text-sm text-green-400 mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
