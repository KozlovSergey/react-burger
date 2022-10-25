export type TIngredient = {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
  index: number;
};

export type TOrder = {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: number,
  status: 'done' | 'pending' | 'created';
  updatedAt: string,
  _id: string,
}

export type TOrderMessage = {
  success: boolean,
  orders: ReadonlyArray<TOrder>,
  total: number,
  totalToday : number,
}

export type TUser = {
  email: string; 
  name: string;
  password?: string 
} 