import { createContext, useContext, useRef, useState } from 'react';

interface IPlayer {
  player: React.RefObject<any>;
  uris: string[];
  setUris: React.Dispatch<React.SetStateAction<string[]>>;
}

export const PlayerContext = createContext({} as IPlayer);

export const PlayerProvider: React.FC<{ children: any }> = ({ children }) => {
  const player = useRef<any>(null);
  const [uris, setUris] = useState(['spotify:artist:6HQYnRM4OzToCYPpVBInuU']);

  const values: IPlayer = {
    player,
    uris,
    setUris,
  };

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
