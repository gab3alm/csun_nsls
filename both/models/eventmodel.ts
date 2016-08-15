export interface Event{
  creator:string;
  name:string;
  date:string;
  status:string;
  attendants:Array<student>;
}

interface student{
  ticketID:string;
  firstname:string;
  lastname:string;
  phone:string;
  email:string;
}