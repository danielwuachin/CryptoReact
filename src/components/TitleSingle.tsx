import { singleCrypto } from "../interfaces/Interfaces";

const TitleSingle = ({ name, data }: singleCrypto) => {
  let currentPrice: string = ((data.close + data.open) / 2).toFixed(4);

  return (
    <div className="mb-5 mt-3 d-flex flex-sm-row flex-column justify-content-around align-items-center">
      <h2>
        {name && name.toUpperCase()}
        <p> </p>
      </h2>
      <h2 className="align-self-center">
        {currentPrice}$<p className="fs-6 fw-light mb-0">*aproximated price</p>
      </h2>
    </div>
  );
};

export default TitleSingle;
