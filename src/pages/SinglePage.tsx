import { useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import TableSingleCrypto from "../components/TableSingleCrypto";
import TitleSingle from "../components/TitleSingle";
import { formatDate, formatLastWeekDate } from "../helpers/FormatDates";
import { useFetch } from "../hooks/useFetch";
import CardsSingleCrypto from "../components/CardsSingleCrypto";
import Header from "../components/Header";

interface props {
  id?: string;
  is_active: boolean;
}

const SinglePage = () => {
  const { cryptoName } = useParams();

  let currentDate = new Date(),
    lastWeekDate = new Date();

  const location = useLocation();
  const state = location.state as props;

  const { data, isPending } = useFetch(
    `https://api.coinpaprika.com/v1/coins/${
      state.id
    }/ohlcv/historical?start=${formatLastWeekDate(
      lastWeekDate,
      7
    )}&end=${formatDate(currentDate)}`
  );

  return (
    <div className="mx-4">
      <Header />
      <div className="d-flex flex-column text-center">
        {isPending ? (
          <>
            <div id="example-fade-text">
              <Loader />
            </div>
          </>
        ) : state.is_active ? (
          <>
            <TitleSingle
              data={data}
              name={
                cryptoName ? cryptoName : "Sorry, we can't find that crypto"
              }
            />
            <CardsSingleCrypto data={data} />
            <TableSingleCrypto data={data} />
          </>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <h4 className="my-5">
              Sorry, but that crypto is not active and we don't have recrods to
              show you 😥
            </h4>
            <iframe
              src="https://giphy.com/embed/9Y5BbDSkSTiY8"
              width="480"
              height="336"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePage;
