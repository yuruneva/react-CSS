export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-Styled Jsx-</p>
        <button className="button">Fight!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #328943;
          border-radius: 20px;
          padding: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: #3d84a8;
        }

        .button {
          background-color: #99ddda;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
