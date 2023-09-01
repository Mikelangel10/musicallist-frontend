import { Group } from './group.model';
import { Genre } from './genre.model';

export interface User {
  _id: String;
  name: String;
  email: String;
  genres: Genre[];
  groups: Group[];
}
