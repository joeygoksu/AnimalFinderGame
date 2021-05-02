import {
  GAME_STARTED,
  GAME_RESETED,
  LEVEL_UP,
  CORRECT_ANSWER,
} from '../constants';

export const gameStarted = () => ({
  type: GAME_STARTED,
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
export const correctAnswer = (payload: CorrectAnswer) => ({
  type: CORRECT_ANSWER,
  payload: payload,
});
