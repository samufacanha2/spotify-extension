export interface IPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  images: Image[];
  name: string;
  owner: IOwner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: ITracks;
  type: string;
  uri: string;
  id: string;
}

export interface IOwner {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface ITracks {
  href: string;
  total: number;
  items: ITrackItem[];
}

export interface ITrackItem {
  added_at: string;
  track: ITrack;
}

export interface ITrack {
  id: string;
  name: string;
  artists: IArtist[];
  duration_ms: number;
  album: IAlbum;
  uri: string;
}

export interface IAlbum {
  id: string;
  name: string;
  images: Image[];
}

export interface IArtist {
  id: string;
  name: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
