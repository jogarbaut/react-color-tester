import { useState } from "react";

import ColorInput from "./ColorInput";
import ColorDisplay from "./ColorDisplay";

const Content = () => {
  const [bgColorValue, setBgColorValue] = useState("");
  const [bgHexValue, setBgHexValue] = useState("");
  const [textColorValue, setTextColorValue] = useState("")
  const [textHexValue, setTextHexValue] = useState("");

  return (
    <main>
      <ColorDisplay
        bgColorValue={bgColorValue}
        bgHexValue={bgHexValue}
        textColorValue={textColorValue}
        textHexValue={textHexValue}
      />
      <ColorInput
        bgColorValue={bgColorValue}
        setBgColorValue={setBgColorValue}
        bgHexValue={bgHexValue}
        setBgHexValue={setBgHexValue}
        textColorValue={textColorValue}
        setTextColorValue={setTextColorValue}
        textHexValue={textHexValue}
        setTextHexValue={setTextHexValue}
      />
    </main>
  );
};

export default Content;
