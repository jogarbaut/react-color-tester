const ColorDisplay = ({ bgColorValue, bgHexValue, textColorValue, textHexValue }) => {
  return (
    <section
      className="box" 
      style={{ 
        backgroundColor: bgColorValue,
        color: textColorValue ? textColorValue : "#000"
      }}
      >
        <p>{bgColorValue ? bgColorValue : "Enter a Color!"}</p>
    </section>
  )
}

ColorDisplay.defaultProps = {
  backgroundColor: "Enter a Color Value!"
}

export default ColorDisplay