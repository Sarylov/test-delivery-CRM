export interface ICouriers {
  key: number;
  id: number;
  status: "работает"|"не работает";
  fullName: string;
  active:"на линии"|"не на линии"
  phone: string;
  nickName: string;
  comment?: string;
  movementType: "машина" | "велосипед" | "пешком";
  rate: string;
  password: string;
  passwordCheck: string;
}
