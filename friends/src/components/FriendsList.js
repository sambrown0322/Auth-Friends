import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [inputText, setInputText] = useState(initialFormValues);

  const handleChange = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };
  const fetchFriends = (e) => {
    // e.preventDefault();
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postNewFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      name: inputText.name,
      age: inputText.age,
      email: inputText.email,
    };
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        console.log(res);
        fetchFriends();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={fetchFriends}>Find friends</button>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h4>Age: {friend.age}</h4>
          </div>
        );
      })}
      <form onSubmit={postNewFriend}>
        Add a new friend:
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputText.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={inputText.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={inputText.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Add friend</button>
      </form>
    </div>
  );
}
