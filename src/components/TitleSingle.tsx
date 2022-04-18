interface singleCrypto {
  name: string;
}

const TitleSingle = ({ name }: singleCrypto) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default TitleSingle;
