import { v4 as uuidv4 } from "uuid";

export default class Reservation {
  constructor(
    private id: string | null,
    private bedroomId: string | null,
    private guestAmount: number | null,
    private startDate: number | null,
    private endDate: number | null,
    private totalValue: number | null,
    private reservationDate: number | null,
    private checkIn: boolean | null,
  ) {
    this.setId();
    this.setBedroomId(bedroomId);
    this.setGuestAmount(guestAmount);
    this.setStartDate(startDate);
    this.setEndDate(endDate);
    this.setTotalValue(totalValue);
    this.setReservationDate(reservationDate);
    this.setCheckIn(checkIn);
    
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
