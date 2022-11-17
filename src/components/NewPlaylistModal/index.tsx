import { useState } from 'react';
import api from 'services/api';
import {
  Background,
  Container,
  Content,
  CreateButton,
  Header,
  HeaderContent,
  PlaylistDescriptionInput,
  PlaylistNameInput,
  StyledCheckbox,
} from './styles';

interface PlaylistModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: any;
}
const NewPlaylistModal: React.FC<PlaylistModalProps> = ({
  isOpen,
  setIsOpen,
  onClose,
}: PlaylistModalProps) => {
  const accessToken = sessionStorage.getItem('access_token');
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isCollaborative, setIsCollaborative] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddToPlaylist = async () => {
    setLoading(true);

    await api.post(
      `/me/playlists`,
      {
        name: playlistName,
        description: playlistDescription,
        public: !isPrivate,
        collaborative: isCollaborative && isPrivate,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    await new Promise(resolve => setTimeout(resolve, 1500));
    onClose();
    setIsOpen(false);
    resetStates();
  };

  const resetStates = () => {
    setLoading(false);
    setPlaylistName('');
    setPlaylistDescription('');
    setIsPrivate(false);
    setIsCollaborative(false);
  };

  const handleBack = () => {
    setIsOpen(false);
  };

  return (
    <Background isOpen={isOpen} onClick={handleBack}>
      <Container
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        <Header>
          <HeaderContent>
            <h1>New Playlist</h1>
          </HeaderContent>
        </Header>
        <Content>
          <label>Playlist Name</label>
          <PlaylistNameInput
            placeholder="Playlist Name"
            value={playlistName}
            onChange={(e: any) => setPlaylistName(e.target.value)}
          />
          <label>Playlist Description</label>

          <PlaylistDescriptionInput
            placeholder="Playlist Description"
            value={playlistDescription}
            onChange={(e: any) => setPlaylistDescription(e.target.value)}
          />
          <label htmlFor="private">Is Private?</label>
          <StyledCheckbox
            checked={isPrivate}
            onChange={() => setIsPrivate(!isPrivate)}
            id="private"
            type={'checkbox'}
          />

          <label htmlFor="collaborative">Is Collaborative?</label>
          <StyledCheckbox
            checked={isCollaborative}
            onChange={() => setIsCollaborative(!isCollaborative)}
            id="collaborative"
            type={'checkbox'}
            disabled={!isPrivate}
          />

          <CreateButton onClick={handleAddToPlaylist}>
            {loading ? 'Creating...' : 'Create Playlist'}
          </CreateButton>
        </Content>
      </Container>
    </Background>
  );
};

export default NewPlaylistModal;
