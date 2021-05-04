import { v4 as uuidv4 } from "uuid";

export default class Ticket {
  constructor(
    private id: string,
    private currentValue: number,
    private closed: boolean,
    private closedDate: number,
    private reservationId: string
  ) {
    this.setId();
    this.setCurrentValue(currentValue);
    this.setClosed(closed);
    this.setClosedDate(closedDate);
    this.setReservationId(reservationId);
  }

  public getReservationId(): string {
    return this.reservationId;
  }
  public setReservationId(value: string) {
    this.reservationId = value;
  }
  public getClosedDate(): number {
    return this.closedDate;
  }
  public setClosedDate(value: number) {
    this.closedDate = value;
  }
  public getClosed(): boolean {
    return this.closed;
  }
  public setClosed(value: boolean) {
    this.closed = value;
  }
  public getCurrentValue(): number {
    return this.currentValue;
  }
  public setCurrentValue(value: number) {
    this.currentValue = value;
  }
  public getId(): string {
    return this.id;
  }
  public setId(value?: string) {
    if (!value) this.id = uuidv4();
    else this.id = value;
  }
}
