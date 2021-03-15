import React from "react";
import '../components/UsersList';
import UsersList from "../components/UsersList";



const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "ABC",
      image:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      places: "5",
    },
  ];
  return <UsersList items={USERS} />
};

export default Users;
