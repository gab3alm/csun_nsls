export class snt_member{
  constructor(
    public leader:boolean,
    public auth_Code:string,
    public firstname:string,
    public lastname:string,
    public email:string,
    public availability:string[]
    ){}
}