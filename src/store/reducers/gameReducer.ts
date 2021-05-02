import { randomEnum } from '../../helpers/randomEnum';
import {
  GAME_RESETED,
  GAME_STARTED,
  LEVEL_UP,
  CORRECT_ANSWER,
} from '../constants';

export interface iGameReducer {
  hasStarted: boolean;
  level: number;
  answerStatus: number;
  question?: iQuestion;
}

enum iAnimal {
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
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_STARTED:
      return {
        ...state,
        hasStarted: true,
        level: 1,
        answerStatus: 0,
        question: {
          animalName: randomEnum(iAnimal),
        },
      };
    case GAME_RESETED:
      return {
        ...state,
        hasStarted: false,
        level: 1,
        answerStatus: 0,
      };
    case LEVEL_UP:
      return {
        ...state,
        level: action.payload.level + 1,
        answerStatus: 0,
      };
    case CORRECT_ANSWER:
      return {
        ...state,
        answerStatus: action.payload.answerStatus + 1,
      };
    default:
      return state;
  }
};
