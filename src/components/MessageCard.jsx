function MessageCard({ name, children , date }) {
  const generateRandomGradient = () => {
    const getRandomColor = () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;

    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(135deg, ${color1}, ${color2})`;
    return gradient;
  };

  const randomGradient = generateRandomGradient();

  return (
    <div className="message-card">
      <div className="message-info">
        <div
          className="message-image"
          style={{
            backgroundImage: randomGradient,
            width: "50px",
            height: "50px",
            borderRadius: "50px",
          }}
        ></div>
        <div className="message-data">
          <h3>{name}</h3>
          <p>{`Sent: ${date}`}</p>
        </div>
      </div>
      <h4>{children}</h4>
      <div className="separator"></div>
    </div>
  );
}

export default MessageCard;
