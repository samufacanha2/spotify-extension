/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDebouncedState } from '@mantine/hooks';
import { usePlayer } from 'Contexts/player';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from 'services/api';
import { IPlaylist, ITrack } from 'types';
import { IPlaylistsResponse, ISearchResponse } from 'types/dtos';
import {
  Back,
  Container,
  Content,
  Header,
  HeaderContent,
  SearchContainer,
  SearchContent,
  SearchInput,
  TrackActions,
  TrackArtist,
  TrackContainer,
  TrackContent,
  TrackDuration,
  TrackImg,
  TrackName,
} from './styles';

import { FiSearch } from 'react-icons/fi';
import { parseMilliseconds } from 'utils';

import PlaylistModal from 'components/PlaylistModal';
import { AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai';

const Search: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('access_token');
  const [playlists, setPlaylists] = useState<IPlaylist[]>();

  const [tracks, setTracks] = useState<ITrack[]>();
  const [search, setSearch] = useDebouncedState<string>('', 200);

  const [playlistModalOpen, setPlaylistModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<ITrack>();

  const { player, setUris } = usePlayer();

  const handleBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    const getPlaylists = async () => {
      const playlistResponse: IPlaylistsResponse = await api.get(
        `/me/playlists`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setPlaylists(playlistResponse.data.items);
    };
    getPlaylists();
  }, []);

  useEffect(() => {
    const getTracks = async () => {
      const searchResponse: ISearchResponse = await api.get(
        `/search?q=${search}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      console.log(searchResponse);
      setTracks(searchResponse.data.tracks.items);
    };
    search && getTracks();
  }, [search]);

  const handlePlay = async (e: any, uri: string) => {
    e.preventDefault();

    uri && setUris([uri]);

    await player.current.togglePlay();
  };

  const openModal = (e: any, track: ITrack) => {
    e.preventDefault();

    setSelectedTrack(track);
    setPlaylistModalOpen(true);
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>Search</h1>
        </HeaderContent>

        <Back onClick={handleBack}>Back</Back>
      </Header>

      <Content>
        <PlaylistModal
          isOpen={playlistModalOpen}
          setIsOpen={setPlaylistModalOpen}
          selectedTrack={selectedTrack}
          playlists={playlists}
        />
        <SearchContainer>
          <SearchContent>
            <SearchInput
              placeholder="What do you want to listen?"
              defaultValue={search}
              onChange={e => setSearch(e.currentTarget.value)}
            />
            <FiSearch />
          </SearchContent>
        </SearchContainer>
        {tracks?.map(track => (
          <TrackContainer key={track.id}>
            <TrackImg
              src={track.album.images[0].url}
              alt={track.name}
              onClick={(e: any) => handlePlay(e, track.id)}
            />
            <TrackContent onClick={(e: any) => handlePlay(e, track.uri)}>
              <TrackName>{track.name}</TrackName>
              <TrackArtist>{track.artists[0].name}</TrackArtist>
              <TrackDuration>
                {parseMilliseconds(track.duration_ms)}
              </TrackDuration>
            </TrackContent>
            <TrackActions>
              <AiOutlinePlus onClick={(e: any) => openModal(e, track)} />
              <AiOutlineHeart />
            </TrackActions>
          </TrackContainer>
        ))}
      </Content>
    </Container>
  );
};

export default Search;
