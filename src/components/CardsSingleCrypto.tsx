import { singleCrypto } from "../interfaces/Interfaces";

const CardsSingleCrypto = ({ data }: singleCrypto) => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3  d-inline border border-secondary rounded-start  cards">
          <h5>Open Price</h5>
          <p className="mb-0">{data.open.toFixed(4)}$</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 d-inline border border-secondary  cards">
          <h5>Close Price</h5>
          <p className="mb-0"> {data.close.toFixed(4)}$</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 d-inline border border-secondary  cards">
          <h5>High Price</h5>
          <p className="mb-0">{data.high.toFixed(4)}$</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 d-inline border border-secondary rounded-end cards">
          <h5>Low Price</h5>
          <p className="mb-0">{data.low.toFixed(4)}$</p>
        </div>
      </div>
    </div>
  );
};

export default CardsSingleCrypto;
