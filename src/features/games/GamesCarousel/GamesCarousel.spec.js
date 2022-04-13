import { within } from "@testing-library/dom";

import { render, screen } from "../../../utils/reduxRender";
import { server } from "../../../utils/mockServer";

import GamesCarousel from "./GamesCarousel";
import { act } from "react-dom/test-utils";

describe("<GamesCarousel>", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders the initial Loading", () => {
    render(<GamesCarousel />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders the carousel", async () => {
    render(<GamesCarousel />);
    const carousel = await screen.findByTestId("carousel");

    expect(carousel).toBeInTheDocument();
    expect(screen.queryByTestId("loader")).toBeNull();
  });

  it("renders the active image in the carousel", async () => {
    render(<GamesCarousel />);
    const carousel = await screen.findByTestId("carousel");
    const card = await screen.findAllByTestId("game-card");
    const label = within(card[2]).getByText("COD WARZONE");
    const img = within(card[2]).getByRole("img");

    expect(carousel).toBeInTheDocument();
    expect(card[2]).toHaveClass("game-card game-card--active");
    expect(label).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "CODWarzone.webp");
    expect(img).toHaveClass("game-card__img");
  });

  describe("timers", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });
    it("renders the active image in the carousel and change every 3 seconds", async () => {
      render(<GamesCarousel />);
      const carousel = await screen.findByTestId("carousel");
      let card = await screen.findAllByTestId("game-card");
      let label = within(card[2]).getByText("COD WARZONE");
      const img = within(card[2]).getByRole("img");

      expect(carousel).toBeInTheDocument();
      expect(card[2]).toHaveClass("game-card game-card--active");
      expect(label).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "CODWarzone.webp");
      expect(img).toHaveClass("game-card__img");

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      card = await screen.findAllByTestId("game-card");
      label = within(card[2]).getByText("CS: GLOBAL OFFENSIVE");

      expect(card[2]).toHaveClass("game-card game-card--active");
      expect(label).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      card = await screen.findAllByTestId("game-card");
      label = within(card[2]).getByText("LEAGUE OF LEGENDS");

      expect(card[2]).toHaveClass("game-card game-card--active");
      expect(label).toBeInTheDocument();
    });
  });
});
