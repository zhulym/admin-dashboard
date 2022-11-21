import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { IContactData, IInvoicesData, ITeamData } from 'model/app';

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.PUBLIC_URL}/data`,
    });
  }

  public getTeamData = (): AxiosPromise<ITeamData[]> => {
    return this.instance.get('/mockTeam.json');
  };

  public getContactData = (): AxiosPromise<IContactData[]> => {
    return this.instance.get('/mockContacts.json');
  };

  public getInvoicesData = (): AxiosPromise<IInvoicesData[]> => {
    return this.instance.get('/mockInvoices.json');
  };
}

export default new ApiService();
