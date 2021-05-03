import {
  GAME_STARTED,
  GAME_RESETED,
  LEVEL_UP,
  CORRECT_ANSWER,
  WRONG_ANSWER,
  WON_GAME,
  GAME_UPDATED,
} from '../constants';

export const gameStarted = () => ({
  type: GAME_STARTED,
});

export const gameUpdated = () => ({
  type: GAME_UPDATED,
});

export const gameReseted = () => ({
  type: GAME_RESETED,
});

interface LevelUp {
  level: number;
  answerStatus: number;
}
export const levelUp = (payload: LevelUp) => ({
  type: LEVEL_UP,
  payload: payload,
});

interface CorrectAnswer {
  answerStatus: number;
}
export const correctAnswer = (payload?: CorrectAnswer) => ({
  type: CORRECT_ANSWER,
  payload: payload,
});

export const wrongAnswer = () => ({
  type: WRONG_ANSWER,
});

export const winTheGame = () => ({
  type: WON_GAME,
});
