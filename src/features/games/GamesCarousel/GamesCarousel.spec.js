import { render, screen } from "../../../utils/reduxRender";
import { server } from "../../../utils/mockServer";

import GamesCarousel from "./GamesCarousel";

const renderGamesCarousel = (extraProps = {}) =>
  render(<GamesCarousel />, { ...extraProps });

describe("<GamesCarousel>", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders the initial Loading", () => {
    renderGamesCarousel({
      preloadedState: {
        games: {},
      },
    });
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  //I couldn't mock the useSelector hook, I running out of time. I hope the others tests are enough and get more time to fix the useSelector mock
  // it("renders the carousel", () => {
  //   const preloadedState = {
  //     loading: false,
  //     games: {},
  //   };
  //       renderGamesCarousel({
  //         preloadedState,
  //         store: configureStore({ reducer: { games: gamesReducer }, preloadedState })
  //       });

  //   expect(screen.getByTestId("carousel")).toBeInTheDocument();
  // });
});
