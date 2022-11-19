export interface IPartners {
  key: number;
  id:number,
  organization: string;
  type: string;
  nickName: string;
  password: string;
  passwordCheck: string;
  phone: string;
  adresses: {adress:string}[];
  rate: string;
  comment: string;
  timeCooking: number;
  status: string;
}
