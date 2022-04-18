import { memo, useState } from "react";
import { Fade, Pagination, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FetchAllCryptos } from "../interfaces/Interfaces";
import Loader from "./Loader";

const TableAllCrypto = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<FetchAllCryptos[]>([]);
  const [search, setSearch] = useState("");

  const { data, isPending, error } = useFetch(
    "https://api.coinpaprika.com/v1/coins"
  );

  let itemsPerPage = 15;

  let pageCount: number[] = [];
  for (let i = 1; i <= data.length / itemsPerPage; i++) pageCount.push(i);

  const changePage = (page: number = 1) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    let paginatedPost: FetchAllCryptos[] = data.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    setCurrentItems(paginatedPost);
  };

  const filteredCryptos = () => {
    if (search.length === 0) {
      setCurrentItems(
        data.slice(currentPage - 1, currentPage - 1 + itemsPerPage)
      );
      return currentItems;
    }

    // si hay algo en la caja de texto
    const filtered: FetchAllCryptos[] = data.filter((crypto: FetchAllCryptos) =>
      crypto.name.includes(search)
    );
    setCurrentItems(
      filtered.slice(currentPage - 1, currentPage - 1 + itemsPerPage)
    );
    return currentItems;
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changePage(1);
    setSearch(event.target.value);
    filteredCryptos();
  };

  return (
    <div
      aria-controls="example-fade-text"
      aria-expanded={true}
      className=" d-flex flex-column"
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
          {/* <input
            className="mb-2 form-control"
            placeholder="Search Crypto"
            value={search}
            onChange={onSearchChange}
            type="text"
          /> */}
          {/* <Fade in={!isPending} mountOnEnter={true} timeout={999} > */}
          <Pagination className="align-self-center" size="lg">
            {pageCount.map((page) => {
              if (currentItems.length === 0) {
                setCurrentItems(data.slice(0, 15));
              }
              if (page === currentPage) {
                if (currentPage === 1) {
                  return (
                    <>
                      <Pagination.First
                        disabled
                        className="bg-dark "
                        onClick={() => changePage(1)}
                      />
                      <Pagination.Prev
                        disabled
                        onClick={() => changePage(page - 1)}
                      />
                      <Pagination.Item active onClick={() => changePage(page)}>
                        {page}
                      </Pagination.Item>
                      <Pagination.Item onClick={() => changePage(page + 1)}>
                        {page + 1}
                      </Pagination.Item>

                      <Pagination.Next onClick={() => changePage(page + 1)} />
                      <Pagination.Last
                        onClick={() => changePage(pageCount.length)}
                      />
                    </>
                  );
                }
                if (currentPage > 1 && currentPage < pageCount.length) {
                  return (
                    <>
                      <Pagination.First
                        onClick={() => changePage(1)}
                        className="bg-dark "
                      />
                      <Pagination.Prev onClick={() => changePage(page - 1)} />
                      <Pagination.Item onClick={() => changePage(page - 1)}>
                        {page - 1}
                      </Pagination.Item>
                      <Pagination.Item active onClick={() => changePage(page)}>
                        {page}
                      </Pagination.Item>
                      <Pagination.Item onClick={() => changePage(page + 1)}>
                        {page + 1}
                      </Pagination.Item>

                      <Pagination.Next onClick={() => changePage(page + 1)} />
                      <Pagination.Last
                        onClick={() => changePage(pageCount.length)}
                      />
                    </>
                  );
                }
                if (currentPage === pageCount.length) {
                  return (
                    <>
                      <Pagination.First
                        onClick={() => changePage(1)}
                        className="bg-dark "
                      />
                      <Pagination.Prev onClick={() => changePage(page - 1)} />
                      <Pagination.Item onClick={() => changePage(page - 1)}>
                        {page - 1}
                      </Pagination.Item>
                      <Pagination.Item active onClick={() => changePage(page)}>
                        {page}
                      </Pagination.Item>

                      <Pagination.Next
                        disabled
                        onClick={() => changePage(page + 1)}
                      />
                      <Pagination.Last
                        disabled
                        onClick={() => changePage(pageCount.length)}
                      />
                    </>
                  );
                }
              }
            })}
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
                <th style={{ width: 100 }} className="vw-4">
                  Rank
                </th>
                <th style={{ width: 250 }} className="min-vw-22">
                  Name
                </th>
                <th>Symbol</th>
                <th style={{ width: 100 }}>Type</th>
                <th>Is active</th>
              </tr>
            </thead>
            <tbody>
              {currentItems ? (
                currentItems.map((crypto: FetchAllCryptos, index) => (
                  <tr key={index}>
                    <td>{crypto.rank}</td>
                    <td>
                      <NavLink
                        to={`/${crypto.name}`}
                        state={{
                          nombre: crypto.name,
                          id: crypto.id,
                          is_active: crypto.is_active,
                        }}
                      >
                        {crypto.name}
                      </NavLink>
                    </td>
                    <td>{crypto.symbol}</td>
                    <td>{crypto.type}</td>
                    <td>{crypto.is_active ? "YES" : "NO"}</td>
                  </tr>
                ))
              ) : (
                <p>{`ERROR:${error.status} - ${error.statusText}`}</p>
              )}
            </tbody>
          </Table>
        </>
        /* </Fade> */
      )}
    </div>
  );
};

export default memo(TableAllCrypto);
