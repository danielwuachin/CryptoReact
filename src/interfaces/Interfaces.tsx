export interface errors {
  err: boolean;
  status: number;
  statusText: string;
}

export interface FetchAllCryptos {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface FetchSingleCrypto {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export interface singleCrypto {
  name?: string;
  data: FetchSingleCrypto[];
}
