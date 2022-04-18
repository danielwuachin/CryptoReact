import { Fade } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import TableSingleCrypto from "../components/TableSingleCrypto";
import TitleSingle from "../components/TitleSingle";
import { formatDate, formatLastWeekDate } from "../helpers/FormatDates";
import { useFetch } from "../hooks/useFetch";

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

  console.log(state.is_active);
  console.log(state);

  const { data, isPending, error } = useFetch(
    `https://api.coinpaprika.com/v1/coins/${
      state.id
    }/ohlcv/historical?start=${formatLastWeekDate(
      lastWeekDate,
      7
    )}&end=${formatDate(currentDate)}`
  );
  console.log(data);

  return (
    <>
      <div className="d-flex flex-column text-center">
        <TitleSingle
          name={cryptoName ? cryptoName : "Sorry, we can't find that crypto"}
        />
        {isPending ? (
          <>
            <Fade in={isPending}>
              <div id="example-fade-text">
                <Loader />
              </div>
            </Fade>
          </>
        ) : state.is_active ? (
          <TableSingleCrypto data={data} />
        ) : (
          <h4>
            Sorry, but this crypto is not active and we don't have recrods to
            show😥
          </h4>
        )}
      </div>
    </>
  );
};

export default SinglePage;
