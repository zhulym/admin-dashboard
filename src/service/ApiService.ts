import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { IContactData, IFaqData, IInvoicesData, ITeamData } from 'model/app';

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.PUBLIC_URL}/data`,
    });
  }

  public getTeamData = (): AxiosPromise<ITeamData[]> => {
    return this.instance.get<ITeamData[]>('/mockTeam.json');
  };

  public getContactData = (): AxiosPromise<IContactData[]> => {
    return this.instance.get<IContactData[]>('/mockContacts.json');
  };

  public getInvoicesData = (): AxiosPromise<IInvoicesData[]> => {
    return this.instance.get<IInvoicesData[]>('/mockInvoices.json');
  };

  public getFaqData = (): AxiosPromise<IFaqData[]> => {
    return this.instance.get<IFaqData[]>('/mockFAQ.json');
  };
}

export default new ApiService();
