import { IPlaylist, ITrack } from 'types';

export interface IPlaylistsResponse {
  data: {
    href: string;
    items: IPlaylist[];
  };
}

export interface IPlaylistResponse {
  data: IPlaylist;
}

export interface ISearchResponse {
  data: {
    tracks: {
      items: ITrack[];
    };
  };
}
