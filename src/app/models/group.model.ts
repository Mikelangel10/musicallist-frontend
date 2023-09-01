import { Genre } from './genre.model';

export interface Group {
  _id: String;
  name: String;
  fundationDate: Number;
  genres: Genre[];
  members: String;
}
