import colorNames from "colornames";

const ColorInput = ({
  bgColorValue,
  setBgColorValue,
  bgHexValue,
  setBgHexValue,
  textColorValue,
  setTextColorValue,
  textHexValue,
  setTextHexValue
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="bgColor">Background Color:</label>
      <input
        autoFocus
        name="bgColor"
        type="text"
        placeholder="Add a Background Color Name"
        required
        value={bgColorValue}
        onChange={(e) => {
          setBgColorValue(e.target.value);
          setBgHexValue(colorNames(e.target.value));
        }}
      />

      <label htmlFor="textColor">Text Color:</label>
      <input
        name="textColor"
        type="text"
        placeholder="Add a Text Color Name"
        required
        value={textColorValue}
        onChange={(e) => {
          setTextColorValue(e.target.value);
          setTextHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default ColorInput;
