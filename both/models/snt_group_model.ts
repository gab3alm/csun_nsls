import {snt_member} from '../classes/snt_member';

export interface sntGroupModel{
  group_name:string;
  createdAt:string;
  group_size:number;
  auth_code:string;
  members:[snt_member];
}