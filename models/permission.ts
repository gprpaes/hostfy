import { v4 as uuidv4 } from "uuid";

export default class Permission {
  public getCanEditGuest(): boolean {
      return this.canEditGuest;
  }
  public setCanEditGuest(value: boolean) {
      this.canEditGuest = value;
  }
  public getCanViewGuest(): boolean {
      return this.canViewGuest;
  }
  public setCanViewGuest(value: boolean) {
      this.canViewGuest = value;
  }
  public getCanEditReport(): boolean {
      return this.canEditReport;
  }
  public setCanEditReport(value: boolean) {
      this.canEditReport = value;
  }
  public getCanViewReport(): boolean {
      return this.canViewReport;
  }
  public setCanViewReport(value: boolean) {
      this.canViewReport = value;
  }
  public getCanEditFinacial(): boolean {
      return this.canEditFinacial;
  }
  public setCanEditFinacial(value: boolean) {
      this.canEditFinacial = value;
  }
  public getCanViewFinancial(): boolean {
      return this.canViewFinancial;
  }
  public setCanViewFinancial(value: boolean) {
      this.canViewFinancial = value;
  }
  public getDescription(): string {
      return this.description;
  }
  public setDescription(value: string) {
      this.description = value;
  }
  public getName(): string {
      return this.name;
  }
  public setName(value: string) {
      this.name = value;
  }
  public getId(): string {
      return this.id;
  }
  public setId() {
      this.id = uuidv4();
  }
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private canViewFinancial: boolean,
    private canEditFinacial: boolean,
    private canViewReport: boolean,
    private canEditReport: boolean,
    private canViewGuest: boolean,
    private canEditGuest: boolean
  ){

  }



}
