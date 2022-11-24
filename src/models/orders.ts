export interface IOrders {
  key:string;
  id: string;
  status: string;
  date: string;
  time: string;
  partnerON: string;
  comment?: string;
  distance: number;
  deliveryProce: number;
  courier: string;
  t1?: string;
  t2?: string;
  t3?: string;
  t4?: string;
  t5?: string;
  courierEarned: number;
  paymentStatues: string;
  paymentType: string;
  orderPrice: number;
  deliveryPrice: number;
}

