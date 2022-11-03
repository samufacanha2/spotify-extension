import { IPlaylist } from 'types';

export interface IPlaylistsResponse {
  data: {
    href: string;
    items: IPlaylist[];
  };
}

export interface IPlaylistResponse {
  data: IPlaylist;
}
