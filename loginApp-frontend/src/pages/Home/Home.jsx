import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters, fetchLocations, fetchEpisodes } from '../../reducers/ramSlice';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import LocationCard from '../../components/LocationCard/LocationCard';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';

const HomeContainer = styled.div`
    padding: 1rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        text-align: start;
    }
`;

const CharacterLayout = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    text-align: center;
`;

const LocationLayout = styled(CharacterLayout)`

`;

const EpisodeLayout = styled(CharacterLayout)`

`;

const TitleSection = styled.h1`
  width: 100%;
  font-size: 3rem;
  border-bottom: 1px solid #fff;
  padding-bottom: 1rem;

  margin: 1.4rem 0;
`;

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.ram.characters);
  const locations = useSelector((state) => state.ram.locations);
  const episodes = useSelector((state) => state.ram.episodes);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  return (
    <HomeContainer>
      <TitleSection>Characters</TitleSection>
      <CharacterLayout>
      {
        characters.length > 0 && 
        characters.slice(0, 6).map((character) => (
          <CharacterCard
            key={character.id}
            {...character}
          />
        ))
      }
      </CharacterLayout>

      <TitleSection>Location</TitleSection>
      <LocationLayout>
      {/* write some component to map here, 6 card */
        locations.length > 0 && 
        locations.slice(0, 6).map((location) => (
          // console.log(location)
          <LocationCard
            key={location.id}
            {...location}
          />
        ))
      }
      </LocationLayout>
      
      <TitleSection>Episodes</TitleSection>
      <EpisodeLayout>
      {/* write some component to map here, 6 card */
        episodes.length > 0 && 
        episodes.slice(0, 6).map((episode) => (
          // console.log(episode)
          <EpisodeCard
            key={episode.id}
            {...episode}
          />
        ))
      }
      </EpisodeLayout>
    
    </HomeContainer>
  )
}

export default Home