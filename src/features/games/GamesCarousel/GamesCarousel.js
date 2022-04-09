import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGames, gamesSelector } from "../gamesSlice";

import GameCard from "../GameCard";
import Loader from "../../loader/Loader";

const GamesCarousel = ({ delay = 3000, slidesQuantity = 5 }) => {
  const dispatch = useDispatch();
  const { games, loading } = useSelector(gamesSelector);
  const timeoutRef = React.useRef(null);

  const [activeIndex, setActiveIndex] = React.useState(3);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  React.useEffect(() => {
    if (games?.content?.length) {
      timeoutRef.current = setTimeout(
        () =>
          setActiveIndex((prevIndex) => {
            return prevIndex === games.content.length - 1 ? 0 : prevIndex + 1;
          }),
        delay
      );
    }
    return () => {
      resetTimeout();
    };
  }, [activeIndex, games, delay]);

  const GenerateItems = ({ activeIndex }) => {
    let Content = null;
    const modifiedArray = [];

    if (games?.content?.length) {
      /**in order to handle the loop we need to iterate the array using the given
       * quantity to complete the array with the missing items
       * **/
      for (let i = 0; i < slidesQuantity; i++) {
        let pointer = (i + activeIndex) % games.content.length;
        modifiedArray.push(games.content[pointer]);
      }

      const activeElement = Math.floor(slidesQuantity / 2);

      //active set the main game, the highlighted. Always be the 3rd element of the array
      Content = modifiedArray.map((game, index) => (
        <GameCard
          key={game.id}
          id={game.id}
          isActive={index === activeElement}
          name={game.name}
        />
      ));
    }

    return Content;
  };

  return (
    <div className="d-flex f-justify-content--center f-align-items--center full-height">
      {loading ? (
        <Loader />
      ) : (
        <div
          className="d-flex f-row f-align-items--center m-x-30"
          data-testid="carousel"
        >
          <GenerateItems activeIndex={activeIndex} />
        </div>
      )}
    </div>
  );
};

export default GamesCarousel;
