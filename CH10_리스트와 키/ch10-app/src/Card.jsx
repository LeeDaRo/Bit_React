import React from 'react';

const styles = {
  card: {
    width: 300
  },
  cardBody1: {
    fontFamily: 'Nanum Myeongjo'
  },
  cardBody2: {
    fontFamily: 'Noto Sans KR'
  }

}
const Card = ({ titles, contents, imgs }) => {

  return (
    <>
      <div className="card" style={styles.card}>
        <img src={`./imgs/${imgs}`} className="card-img-top" alt="..." />
        <div className="card-body" style={styles.cardBody1}>
          <h5 className="card-title">{titles}</h5>
          <p className="card-text">{contents}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  );
};

export default Card;