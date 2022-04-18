export interface errors {
  err: boolean;
  status: number;
  statusText: string;
}

// Generated by https://quicktype.io

export interface FetchAllCryptos {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export enum Type {
  Coin = "coin",
  Token = "token",
}
// Generated by https://quicktype.io

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
