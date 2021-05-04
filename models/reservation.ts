import { v4 as uuidv4 } from "uuid";

export default class Reservation {
  constructor(
    private id: string,
    private bedroomId: string,
    private guestAmount: number,
    private startDate: number,
    private endDate: number,
    private totalValue: number,
    private reservationDate: number,
    private checkIn: boolean,
    private checkOut: boolean
  ) {
    this.setId();
    this.setBedroomId(bedroomId);
    this.setGuestAmount(guestAmount);
    this.setStartDate(startDate);
    this.setEndDate(endDate);
    this.setTotalValue(totalValue);
    this.setReservationDate(reservationDate);
    this.setCheckIn(checkIn);
    this.setCheckOut(checkOut);
  }

  public getCheckOut(): boolean {
    return this.checkOut;
  }
  public setCheckOut(value: boolean) {
    this.checkOut = value;
  }
  public getCheckIn(): boolean {
    return this.checkIn;
  }
  public setCheckIn(value: boolean) {
    this.checkIn = value;
  }
  public getReservationDate(): number {
    return this.reservationDate;
  }
  public setReservationDate(value: number) {
    this.reservationDate = value;
  }
  public getTotalValue(): number {
    return this.totalValue;
  }
  public setTotalValue(value: number) {
    this.totalValue = value;
  }
  public getGuestAmount(): number {
    return this.guestAmount;
  }
  public setGuestAmount(value: number) {
    this.guestAmount = value;
  }
  public getEndDate(): number {
    return this.endDate;
  }
  public setEndDate(value: number) {
    this.endDate = value;
  }
  public getStartDate(): number {
    return this.startDate;
  }
  public setStartDate(value: number) {
    this.startDate = value;
  }
  public getBedroomId(): string {
    return this.bedroomId;
  }
  public setBedroomId(value: string) {
    this.bedroomId = value;
  }
  public getId(): string {
    return this.id;
  }
  public setId(value?: string) {
    if (!value) this.id = uuidv4();
    else this.id = value;
  }
}
