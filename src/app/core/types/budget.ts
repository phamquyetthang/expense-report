export interface IBudget {
  id?: string;
  amount: number;
  month: number;
}

export interface IExpense {
  id: string;
  amount: number;
  description: string;
  month: number;
  title: string;
  action: 'earn' | 'spend';
}
