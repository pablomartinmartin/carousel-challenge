import gamesReducer, {
  getGames,
  getGamesSuccess,
  getGamesFailed,
} from "./gamesSlice";

describe("games reducer", () => {
  it("should handle the initial state", () => {
    const nextState = gamesReducer(undefined, {
      games: {},
      loading: false,
    });
    expect(nextState).toEqual({
      games: {},
      loading: false,
    });
  });

  it("should handle the getGames", () => {
    const nextState = gamesReducer(
      undefined,
      getGames({
        loading: true,
      })
    );
    expect(nextState).toEqual({
      loading: true,
      games: {},
    });
  });

  it("should handle the getGamesSuccess", () => {
    const nextState = gamesReducer(
      undefined,
      getGamesSuccess({
        content: [
          {
            name: "FORNITE",
            id: 1,
          },
        ],
      })
    );
    expect(nextState).toEqual({
      loading: false,
      games: {
        content: [
          {
            name: "FORNITE",
            id: 1,
          },
        ],
      },
    });
  });

  it("should handle the getGamesFailed", () => {
    const nextState = gamesReducer(undefined, getGamesFailed());
    expect(nextState).toEqual({
      loading: false,
      games: {
        hasError: true,
      },
    });
  });
});
