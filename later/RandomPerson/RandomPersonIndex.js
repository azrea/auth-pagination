import React, { useState, useEffect } from "react";
import { FormContainer, MainContainer } from "./StyledRandomPerson";
import {
  FaUser,
  FaEnvelope,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const RandomPersonIndex = () => {
  const [person, setPerson] = useState("");
  const [value, setValue] = useState("random person");
  const [title, setTitle] = useState("name");

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPerson(data.results);

    const person = data.results[0];

    const { title, first, last } = person.name;

    const { password } = person.login;

    const {
      dob: { age },
    } = person;

    const { email, phone } = person;

    const {
      street: { number, name },
      city,
      state,
      country,
    } = person.location;

    const { large: image } = person.picture;

    const newPerson = {
      image,
      name: `${title} ${first} ${last}`,
      age: age,
      email: email,
      phone: phone,
      location: `${number} ${name}, ${city}, ${state}, ${country} `,
      password: password,
    };
    setPerson(newPerson);
    setValue(name);
  };

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <MainContainer>
      <div className="redbg"></div>
      <div className="bluebg"></div>

      <FormContainer>
        <img
          src={(person && person.image) || defaultImage}
          alt=""
          className="infoImage"
        />
        <div className="information">
          <p>My {title} is </p>
          <h2 className="personName">{value}</h2>
          <div className="iconLine">
            <FaUser
              className="icon"
              onMouseOver={handleValue}
              data-label="name"
            />
            <FaEnvelope
              className="icon"
              onMouseOver={handleValue}
              data-label="email"
            />
            <FaCalendarTimes
              className="icon"
              onMouseOver={handleValue}
              data-label="age"
            />
            <FaMap
              className="icon"
              onMouseOver={handleValue}
              data-label="location"
            />
            <FaPhone
              className="icon"
              onMouseOver={handleValue}
              data-label="phone"
            />
            <FaLock
              className="icon"
              onMouseOver={handleValue}
              data-label="password"
            />
          </div>

          <button onClick={getPerson}>Random User</button>
        </div>
      </FormContainer>
    </MainContainer>
  );
};

export default RandomPersonIndex;
