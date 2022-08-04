import { IPlaylist } from 'types';

export interface IPlaylistResponse {
  data: {
    href: string;
    items: IPlaylist[];
  };
}
