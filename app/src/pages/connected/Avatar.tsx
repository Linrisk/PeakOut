import React, { useState } from "react";
import Avatar from "avataaars";
import { BsScissors } from "react-icons/bs";
import { FaGlasses } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { RiTShirt2Fill } from "react-icons/ri"; import { IoEyeSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { TbColorPicker } from "react-icons/tb";
import { RiTShirt2Line } from "react-icons/ri";
import "./Avatar.css";
function ChooseAvatarPage() {
  const optionLists = {
    topType: [
      "NoHair",
      "EyePatch",
      "Hat",
      "Hijab",
      "Turban",
      "WinterHat1",
      "WinterHat2",
      "WinterHat3",
      "WinterHat4",
      "LongHairBigHair",
      "LongHairBob",
      "LongHairBun",
      "LongHairCurly",
    ],
    accessoriesType: [
      "Blank",
      "Kurt",
      "Prescription01",
      "Prescription02",
      "Round",
      "Sunglasses",
      "Wayfarers",
    ],
    hairColor: ["BrownDark", "Black", "Platinium", "Red", "Blond"],
    facialHairType: ["Blank", "BeardMedium"],
    clotheType: ["Hoodie", "BlazerShirt"],
    eyeType: ["Happy", "WinkWacky", "Side", "Cry", "Close"],
    eyebrowType: ["Default", "UpDown", "Angry"],
    mouthType: ["Smile", "Serious", "Vomit", "Sad", "Default"],
    skinColor: ["Light", "Dark", "Brown", "Pale", "Yellow"],
  };

  const [avatarOptions, setAvatarOptions] = useState({
    topType: "LongHairMiaWallace",
    accessoriesType: "Prescription02",
    hairColor: "BrownDark",
    facialHairType: "Blank",
    clotheType: "Hoodie",
    clotheColor: "PastelBlue",
    eyeType: "Happy",
    eyebrowType: "Default",
    mouthType: "Smile",
    skinColor: "Light",
  });

  const handleOptionChange = (option, value) => {
    setAvatarOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  const getNextOption = (option) => {
    const options = optionLists[option];
    const currentIndex = options.indexOf(avatarOptions[option]);
    const nextIndex = (currentIndex + 1) % options.length;
    return options[nextIndex];
  };

  const getIconForOption = (option) => {
    switch (option) {
      case "topType":
        return <BsScissors className="icon-options-avatar" />;
      case "accessoriesType":
        return <FaGlasses className="icon-options-avatar" />;
      case "facialHairType":
        return <GiBeard className="icon-options-avatar" />;
      case "hairColor":
        return <IoIosColorPalette className="icon-options-avatar" />;
      case "skinColor":
        return <RiTShirt2Fill style={{ color: 'white' }} className="icon-options-avatar" />;
      case "eyeType":
        return <IoEyeSharp className="icon-options-avatar" />;
      case "eyebrowType":
        return <FaPencilAlt className="icon-options-avatar" />;
      case "mouthType":
        return <BsEmojiSmile className="icon-options-avatar" />;
      case "clotheColor":
        return <TbColorPicker className="icon-options-avatar" />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <h1 style={{margin:0}}>Choose Avatar</h1>

      <Avatar
        style={{ width: "300px", height: "300px" }}

        {...avatarOptions}
      />
      <div
        id="rowChange"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {Object.keys(optionLists).map((option) => (
          <div
            key={option}
            className="btn-choose-avatar"
            onClick={() => handleOptionChange(option, getNextOption(option))}
          >
            {getIconForOption(option)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseAvatarPage;
