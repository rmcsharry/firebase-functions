import { UserPreferences } from './user-preferences.model';

export interface User {
  name: string | undefined;
  email: string | undefined;
  balance: number;
  preferences: UserPreferences
}