export interface EventModel{
  creator:string;
  name:string;
  date:string;
  status:string;
  archived:boolean;
  attendants:Array<student>;
}

interface student{
  IPaddress:any;
  ticket:string;
  firstname:string;
  lastname:string;
  email:string;
  phone:string;
  date:string;
  credit:boolean;
}