import { useState, useEffect } from "react";
import {
  errors,
  FetchAllCryptos,
  FetchSingleCrypto,
} from "../interfaces/Interfaces";
type all = FetchAllCryptos[];
type single = FetchSingleCrypto[];
export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<errors>({
    err: false,
    status: 200,
    statusText: "none",
  });

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          // eslint-disable-next-line no-throw-literal
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }
        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false, status: 200, statusText: "none" });
      } catch (err: any) {
        setIsPending(true);
        setError(err);
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};
