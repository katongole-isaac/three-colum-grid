import "./style/card.styles.css";

const Card = ({ srcUrl, alt, card_header, card_text, bg_class }) => {
  return (
    <>
      <div className={`card-wrapper ${bg_class}`}>
        <div className="card-content">
          <div className="card-image-wrapper">
            <img src={srcUrl} alt={alt} />
          </div>
          <div className="card-header">
            <h3> {card_header} </h3>

            <p>{card_text}</p>
          </div>

          <div className="card-actions">
            <button className="btn"> Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
