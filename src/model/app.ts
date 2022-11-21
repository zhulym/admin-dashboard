export interface ITeamData {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export interface IContactData {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export interface IInvoicesData {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}
