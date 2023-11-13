/* Core */
import { createLogger } from 'redux-logger';

const middleware = [createLogger({})]; // middleware это посредник ,который позволяет нам манипулировать над store или action до его выполнения

export { middleware };
