import { v4 as uuidv4 } from "uuid";

export default class Spent {
  constructor(
    private id: string,
    private referenceDate: number,
    private value: number,
    private projection: boolean,
    private projectionValue: number,
    private cashflowId: string
  ) {
    this.setId();
    this.setReferenceDate(referenceDate);
    this.setValue(value);
    this.setProjection(projection);
    this.setProjectionValue(projectionValue);
    this.setCashflowId(cashflowId)
}
  public getProjectionValue(): number {
    return this.projectionValue;
  }
  public setProjectionValue(value: number) {
    this.projectionValue = value;
  }
  public getProjection(): boolean {
    return this.projection;
  }
  public setProjection(value: boolean) {
    this.projection = value;
  }
  public getValue(): number {
    return this.value;
  }
  public setValue(value: number) {
    this.value = value;
  }
  public getReferenceDate(): number {
    return this.referenceDate;
  }
  public setReferenceDate(value: number) {
    this.referenceDate = value;
  }
  public getId(): string {
    return this.id;
  }
  public setId(id?: string) {
    if (!id) this.id = uuidv4();
    else this.id = id;
  }

  public getCashflowId(): string {
    return this.cashflowId;
  }
  public setCashflowId(value: string) {
    this.cashflowId = value;
  }
}
