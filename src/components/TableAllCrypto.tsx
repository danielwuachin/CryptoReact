import { memo, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FetchAllCryptos } from "../interfaces/Interfaces";
import Loader from "./Loader";

const TableAllCrypto = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<FetchAllCryptos[]>([]);

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

  return (
    <div className=" d-flex flex-column align-items-center">
      {isPending ? (
        <>
          <div>
            <Loader />
          </div>
        </>
      ) : (
        <>
          <Pagination className="align-self-center fs-1" size="lg">
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
                        className=" "
                        onClick={() => changePage(1)}
                      />
                      <Pagination.Prev
                        disabled
                        onClick={() => changePage(page - 1)}
                      />

                      <Pagination.Item active onClick={() => changePage(page)}>
                        {page}
                      </Pagination.Item>
                      <Pagination.Item
                        onClick={() => changePage(page + 1)}
                        className=""
                      >
                        {page + 1}
                      </Pagination.Item>
                      <Pagination.Item
                        onClick={() => changePage(page + 1)}
                        className=""
                      >
                        {page + 2}
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
                      <Pagination.First onClick={() => changePage(1)} />
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
                        {page - 2}
                      </Pagination.Item>
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
            className="  text-center rounded"
          >
            <thead>
              <tr>
                <th style={{ width: 100 }} className="vw-4">
                  Rank
                </th>
                <th>Name</th>
                <th style={{ width: 150 }}>Symbol</th>
                <th style={{ width: 100 }}>Type</th>
                <th style={{ width: 100 }}>Active</th>
              </tr>
            </thead>
            <tbody>
              {currentItems ? (
                currentItems.map((crypto: FetchAllCryptos, index) => (
                  <tr key={index}>
                    <td>{crypto.rank}</td>
                    <td>
                      <NavLink
                        className="text-ligth"
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
                    <td
                      className={crypto.is_active ? "" : "text-warning bg-dark"}
                    >
                      {crypto.is_active ? "YES" : "NO"}
                    </td>
                  </tr>
                ))
              ) : (
                <p>{`ERROR:${error.status} - ${error.statusText}`}</p>
              )}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default memo(TableAllCrypto);
