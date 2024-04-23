import { useState } from "react";

export default function menuState() {
  const [isMobile, setMobile] = useState(false);
  const [isActive, setActive] = useState(false);


  return {
    isMobile,
    setMobile,
    isActive,
    setActive,
  };
}
