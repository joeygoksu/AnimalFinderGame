import Tts from 'react-native-tts';
import { randomEnum } from '../../helpers/randomEnum';
import {
  GAME_RESETED,
  GAME_STARTED,
  LEVEL_UP,
  CORRECT_ANSWER,
  WRONG_ANSWER,
  WON_GAME,
  GAME_UPDATED,
} from '../constants';

export interface iGameReducer {
  hasStarted: boolean;
  level: number;
  answerStatus: number;
  question?: iQuestion;
  wonTheGame: boolean;
}

export enum iAnimal {
  ant = 'ant',
  bird = 'bird',
  cat = 'cat',
  chicken = 'chicken',
  cow = 'cow',
  dog = 'dog',
  elephant = 'elephant',
  fish = 'fish',
  fox = 'fox',
  horse = 'horse',
  kangaroo = 'kangaroo',
  lion = 'lion',
  monkey = 'monkey',
  penguin = 'penguin',
  pig = 'pig',
  rabbit = 'rabbit',
  sheep = 'sheep',
  tiger = 'tiger',
  whale = 'whale',
  wolf = 'wolf',
}

interface iQuestion {
  animalName: iAnimal;
}

const initialState: iGameReducer = {
  hasStarted: false,
  level: 1,
  answerStatus: 0,
  wonTheGame: false,
};

Tts.setDefaultRate(0.25);

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_STARTED:
      const pickAnimal = randomEnum(iAnimal);

      Tts.speak(`Find the ${pickAnimal}`);

      return {
        ...state,
        hasStarted: true,
        level: 1,
        answerStatus: 0,
        question: {
          animalName: pickAnimal,
        },
      };
    case GAME_UPDATED:
      const pickAnimal2 = randomEnum(iAnimal);

      Tts.speak(`Find the ${pickAnimal2}`);

      return {
        ...state,
        question: {
          animalName: pickAnimal2,
        },
      };
    case GAME_RESETED:
    case WRONG_ANSWER:
      return {
        ...state,
        hasStarted: false,
        level: 1,
        answerStatus: 0,
      };
    case LEVEL_UP:
      return {
        ...state,
        level: state.level + 1,
        answerStatus: 0,
      };
    case WON_GAME:
      return {
        ...state,
        wonTheGame: true,
      };
    case CORRECT_ANSWER:
      // LEVEL_UP
      if (state.answerStatus >= 2 && state.answerStatus < 5) {
        return {
          ...state,
          level: state.level + 1,
          answerStatus: 0,
        };
      }

      return {
        ...state,
        answerStatus: state.answerStatus + 1,
      };
    default:
      return state;
  }
};
