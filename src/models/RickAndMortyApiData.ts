import { Character } from "./Character";

export interface PageInfo {
  count: number;
  next?: string;
  pages: number;
  prev?:string;
}

export interface RickAndMortyResponse {
  info: PageInfo,
  results: Character[]
}

export interface FetchResponse {
  isLoading: boolean;
  error: boolean;
  response?: RickAndMortyResponse | null;
}