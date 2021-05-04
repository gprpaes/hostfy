import { v4 as uuidv4 } from "uuid";

export default class Income {
  constructor(
    private id: string,
    private referenceDate: number,
    private value: number,
    private cashflowId: string
  ) {
      this.setId();
      this.setValue(value);
      this.setReferenceDate(referenceDate);
      this.setCashflowId(cashflowId)
  }
  public getCashflowId(): string {
    return this.cashflowId;
  }
  public setCashflowId(value: string) {
    this.cashflowId = value;
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
  public setId(value?: string) {
    if (!value) this.id = uuidv4();
    else this.id = value;
  }
}
