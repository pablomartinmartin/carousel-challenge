import React from "react";

import styled from "styled-components";

import { GAME_IMG_MAP } from "../utils";

import "./GameCard.scss";

const GameName = ({ className, children }) => (
  <label className={className}>{children}</label>
);

const StyledGameName = styled(GameName)`
  color: #221236;
  font-weight: bold;
  font-size: 1.1rem;
`;

const GameCard = ({ name, isActive }) => (
  <div
    className={`d-flex f-column game-card ${
      isActive ? "game-card--active" : "game-card--inactive"
    }`}
    data-testid="game-card"
  >
    <picture className="game-card__img-wrapper p-t-40 p-b-30 p-l-26 p-r-26">
      <source
        className="game-card__img"
        srcSet={GAME_IMG_MAP[name]["img"]}
        type="image/webp"
      />
      <img
        className="game-card__img"
        src={GAME_IMG_MAP[name]["img"]}
        alt={name}
      />
    </picture>
    {isActive ? (
      <div className="m-t-30">
        <StyledGameName>{GAME_IMG_MAP[name].name}</StyledGameName>
      </div>
    ) : null}
  </div>
);

export default GameCard;
