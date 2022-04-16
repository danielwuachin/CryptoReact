import Loader from "../components/Loader";
import TableAllCrypto from "../components/TableAllCrypto";
import Title from "../components/Title";

const MainComponent = () => {
  return (
    <div className="h-100">
      <Title />
      <TableAllCrypto />
    </div>
  );
};

export default MainComponent;
