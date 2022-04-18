import { Table } from "react-bootstrap";
import { formatLastWeekDate } from "../helpers/FormatDates";
import { FetchSingleCrypto } from "../interfaces/Interfaces";

interface SingleCryptoData {
  data: FetchSingleCrypto[];
}

const TableSingleCrypto = ({ data }: SingleCryptoData) => {
  console.log(data);
  let today = new Date();
  let reverseData: FetchSingleCrypto[] = [];
  data.forEach((el) => {
    reverseData.unshift(el);
  });
  console.log(reverseData);
  return (
    <div>
      <Table
        responsive
        striped
        hover
        variant="dark"
        id="example-fade-text"
        className="  text-center "
      >
        <thead>
          <tr>
            <th style={{ width: 100 }} className="vw-4">
              Date
            </th>
            <th style={{ width: 250 }} className="min-vw-22">
              Open price
            </th>
            <th>Close Price</th>
            <th style={{ width: 100 }}>Higher</th>
            <th>Lower</th>
          </tr>
        </thead>
        <tbody>
          {reverseData ? (
            reverseData.map(
              (crypto: FetchSingleCrypto, index) =>
                index >= 1 && (
                  <tr key={index}>
                    <td>{crypto.time_open.slice(0, 10)}</td>
                    <td>{crypto.open.toFixed(4)}$</td>
                    <td>{crypto.close.toFixed(4)}$</td>
                    <td>{crypto.high.toFixed(4)}$</td>
                    <td>{crypto.low.toFixed(4)}$</td>
                  </tr>
                )
            )
          ) : (
            <p>{`ERROR:`}</p>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableSingleCrypto;
