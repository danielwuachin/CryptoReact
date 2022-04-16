import { useState } from "react";
import { Fade, Pagination, Table } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { FetchAllCryptos } from "../interfaces/Interfaces";
import Loader from "./Loader";
/* dejo de funcionar al setearle datos al current items, dice que hay demasiadas respuestas, no entiendo */
const TableAllCrypto = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<FetchAllCryptos[]>();

  const { data, isPending, error } = useFetch(
    "https://api.coinpaprika.com/v1/coins"
  );
  setCurrentItems(data.slice(0, 14));
  console.log(data.slice(0, 14));
  console.log(isPending);
  console.log(currentItems);

  let itemsPerPage = 15;

  /*   let pageCount = data ? Math.ceil(data.length / itemsPerPage) : 0;

  let paginateItems = data.slice(currentItems, currentItems + itemsPerPage); */
  let pageCount: number[] = [];
  for (let i = 1; i <= data.length; i++) pageCount.push(i);

  const changePage = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    let paginatedPost = data.slice(startIndex, startIndex + itemsPerPage);
    setCurrentItems(paginatedPost);
  };
  return (
    <div
      aria-controls="example-fade-text"
      aria-expanded={true}
      className=" col-12"
    >
      {isPending ? (
        <>
          <Fade in={isPending}>
            <div id="example-fade-text">
              <Loader />
            </div>
          </Fade>
        </>
      ) : (
        <>
          {/* <Fade in={!isPending} mountOnEnter={true} timeout={999} > */}
          <Pagination>
            <Pagination.First className="bg-dark " />
            <Pagination.Prev />
            <Pagination.Item>{pageCount[0]}</Pagination.Item>
            <Pagination.Ellipsis />

            {pageCount.map((page) => {
              if (page === currentPage) {
                if (page)
                  return (
                    <>
                      <Pagination.Item active>{page}</Pagination.Item>
                      <Pagination.Item>{page + 1}</Pagination.Item>
                      <Pagination.Item>{page + 2}</Pagination.Item>
                    </>
                  );
              }
            })}

            <Pagination.Ellipsis />
            <Pagination.Item>{pageCount[pageCount.length - 1]}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

          <Table
            responsive
            striped
            bordered
            hover
            variant="dark"
            id="example-fade-text"
            className="  text-center "
          >
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Type</th>
                <th>Is active</th>
              </tr>
            </thead>
            <tbody>
              {currentItems
                ? currentItems.map((crypto: FetchAllCryptos, index) => (
                    <tr key={index}>
                      <td>{crypto.rank}</td>
                      <td>{crypto.name}</td>
                      <td>{crypto.symbol}</td>
                      <td>{crypto.type}</td>
                      <td>{crypto.is_active ? "SI" : "NO"}</td>
                    </tr>
                  ))
                : "nothing"}
            </tbody>
          </Table>
        </>
        /* </Fade> */
      )}
    </div>
  );
};

export default TableAllCrypto;
