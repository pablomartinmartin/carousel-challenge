import { render, screen } from "../../../utils/reduxRender";
import { server } from "../../../utils/mockServer";

import GameCard from "./GameCard";

const renderGameCard = (extraProps = {}) =>
  render(<GameCard {...extraProps} />);

describe("<GameCard>", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders the active card", () => {
    renderGameCard({
      name: "FORTNITE",
      isActive: true,
    });

    expect(screen.getByTestId("game-card")).toBeInTheDocument();
    expect(screen.getByTestId("game-card")).toHaveClass("game-card--active");
    expect(screen.getByText("FORTNITE")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders the not active card", () => {
    renderGameCard({
      name: "FORTNITE",
      isActive: false,
    });

    expect(screen.getByTestId("game-card")).toBeInTheDocument();
    expect(screen.getByTestId("game-card")).toHaveClass("game-card--inactive");
    expect(screen.queryByText("FORTNITE")).not.toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
