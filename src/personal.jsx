/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function AppendPersonalComponent({
  setPersonalDetailsInfo,
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  function StorePersonalDetails() {
    let info = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      validity: 1
    };

    setPersonalDetailsInfo(info);
  }

  function InputReset() {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  }

  function DeletData() {
    InputReset();
    StorePersonalDetails()
  }

  useEffect(() => {
    const clearResume = document.querySelector("#clearResumeContainer");
    if (clearResume) {
      clearResume.addEventListener("click", () => {
        InputReset()
        setPersonalDetailsInfo("");
      });
    }
  }, [fullName, email, phoneNumber, address]);

  return (
    <div id="personalInput">
      <div className="heading">Personal Details</div>
      <form id="personalForm">
        <div className="personalInfoContainer">
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            type="text"
            required
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="First and Last name"
          />
        </div>
        <div className="personalInfoContainer">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="personalInfoContainer">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            id="phoneNumber"
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            required
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="personalInfoContainer">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            required
            name="address"
            autoComplete="address-level1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter City and Country"
          />
        </div>
      </form>
      <div className="cancelSaveContainer">
        <button className="deleteButton" onClick={DeletData}>
          Delete
        </button>
        <button className="cancelButton" onClick={InputReset}>
          Cancel
        </button>
        <button className="saveButton" onClick={StorePersonalDetails}>
          Save
        </button>
      </div>
    </div>
  );
}
