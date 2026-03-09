import reducer from './reducer/auth';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({ reducer });
