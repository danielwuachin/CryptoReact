const Title = () => {
  return (
    <div className="d-flex flex-column text-center mb-5">
      <div>
        <img
          src="./img/logo-dark.png"
          className="d-inline-block align-top mt-0 shadow rounded mb-4 hero-image"
          alt="crypto7-logo"
        />
      </div>
      <h4>
        Crypto7 is your friend to know the status of all crypto currencies in
        the world!
      </h4>
      <hr />
      <br />
      <h6>
        Click on the name of some of the cryptocurrencies below in the table to
        see his historical data between a week ago to today!
      </h6>
    </div>
  );
};

export default Title;
