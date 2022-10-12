export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #328943",
    borderRadius: "20px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#99ddda",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles-</p>
      <button style={buttonStyle}>Fight!</button>
    </div>
  );
};
