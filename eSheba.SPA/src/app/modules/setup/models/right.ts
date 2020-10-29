import { User } from '../../user/models/user';

export interface Right {
  id: number;
  code: string;
  name: string;
  createdby: User;
  datecreated: Date;
}
