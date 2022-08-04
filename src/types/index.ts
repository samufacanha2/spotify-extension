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
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
