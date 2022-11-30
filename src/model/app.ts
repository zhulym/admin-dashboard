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

export interface IProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  city: string;
  country: string;
}

export interface IFaqData {
  id: string;
  title: string;
  question: string;
}

export interface IPieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface IGeographyData {
  id: string;
  value: number;
}

export interface ITransaction {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

export interface IStats {
  title: string;
  subtitle: string;
  progress: string;
  increase: string;
}

export interface IDashboardData {
  transactions: ITransaction[];
  stats: IStats[];
}

export enum StatsTypes {
  Email = 'Emails Sent',
  Sale = 'Sales Obtained',
  Client = 'New Clients',
  Traffic = 'Traffic Received',
}
