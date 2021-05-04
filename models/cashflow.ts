import { v4 as uuidv4 } from "uuid";

export default class Cashflow {
  constructor(
    private id: string,
    private referenceMonth: number,
    private propertyTypeId: string,
    private userId: string,
    private balance: number
  ) {
      this.setId();
      this.setReferenceMonth(referenceMonth);
      this.setPropertyTypeId(propertyTypeId);
      this.setUserId(userId);
      this.setBalance(balance);
  }

  public getId(): string {
    return this.id;
  }

  public setId(id?: string): void {
    if (!id) this.id = uuidv4();
    else this.id = id;
  }

  public getBalance(): number {
    return this.balance;
  }
  public setBalance(value: number) {
    this.balance = value;
  }
  public getUserId(): string {
    return this.userId;
  }
  public setUserId(value: string) {
    this.userId = value;
  }
  public getPropertyTypeId(): string {
    return this.propertyTypeId;
  }
  public setPropertyTypeId(value: string) {
    this.propertyTypeId = value;
  }
  public getReferenceMonth(): number {
    return this.referenceMonth;
  }
  public setReferenceMonth(value: number) {
    this.referenceMonth = value;
  }
}
