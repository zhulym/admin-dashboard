import { Serie } from '@nivo/line';
import { BarDatum } from '@nivo/bar';
import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { IContactData, IDashboardData, IFaqData, IGeographyData, IInvoicesData, IPieData, ITeamData } from 'model/app';

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

  public getBarData = (): AxiosPromise<BarDatum[]> => {
    return this.instance.get<BarDatum[]>('/mockBar.json');
  };

  public getPieData = (): AxiosPromise<IPieData[]> => {
    return this.instance.get<IPieData[]>('/mockPie.json');
  };

  public getLineData = (): AxiosPromise<Serie[]> => {
    return this.instance.get<Serie[]>('/mockLine.json');
  };

  public getGeographyData = (): AxiosPromise<IGeographyData[]> => {
    return this.instance.get<IGeographyData[]>('/mockGeography.json');
  };
  public getDashboardData = (): AxiosPromise<IDashboardData> => {
    return this.instance.get<IDashboardData>('/mockDashboard.json');
  };
}

export default new ApiService();
