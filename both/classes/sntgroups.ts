export class sntGroup{
  constructor(
    public group_name:string,
    public createdAt:string,
    public group_size:string,
    public auth_code:string,
    public members:string[]
    ){}
}