export interface ICouriers {
  key: string;
  id: string;
  status: string;
  fullName: string;
  phone: string;
  nickName: string;
  comment?: string;
  movementType: "машина" | "велосипед" | "пешком";
  rate: string;
  password: string;
  passwordCheck: string;
}
