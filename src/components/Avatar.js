import userAvatar01 from "@assets/userAvatar01.svg";
import userAvatar02 from "@assets/userAvatar02.svg";
import userAvatar03 from "@assets/userAvatar03.svg";
import userAvatar04 from "@assets/userAvatar04.svg";
import userAvatar05 from "@assets/userAvatar05.svg";
import userAvatar06 from "@assets/userAvatar06.svg";
import userAvatar07 from "@assets/userAvatar07.svg";
import userAvatar08 from "@assets/userAvatar08.svg";
import userAvatar09 from "@assets/userAvatar09.svg";

export function getAvatar(index) {
  const avatars = [
    userAvatar01,
    userAvatar02,
    userAvatar03,
    userAvatar04,
    userAvatar05,
    userAvatar06,
    userAvatar07,
    userAvatar08,
    userAvatar09,
  ];
  return avatars[index];
}
