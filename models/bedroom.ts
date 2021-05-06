import { v4 as uuidv4 } from "uuid";

export default class Bedroom {
  constructor(
    private id: string | null,
    private number: string | null,
    private type: string | null,
    private bedType: string | null,
    private capacity: number | null,
    private status: string | null,
    private propertyId: string | null,
    private booked: boolean | null
  ) {
    this.setId();
    this.setNumber(number);
    this.setType(type);
    this.setBedType(bedType);
    this.setCapacity(capacity);
    this.setStatus(status);
    this.setPropertyId(propertyId);
    this.setBooked(booked);
  }

  public getBooked(): boolean {
    return this.booked;
  }
  public setBooked(value: boolean) {
    this.booked = value;
  }
  public getPropertyId(): string {
    return this.propertyId;
  }
  public setPropertyId(value: string) {
    this.propertyId = value;
  }
  public getStatus(): string {
    return this.status;
  }
  public setStatus(value: string) {
    this.status = value;
  }
  public getCapacity(): number {
    return this.capacity;
  }
  public setCapacity(value: number) {
    this.capacity = value;
  }
  public getBedType(): string {
    return this.bedType;
  }
  public setBedType(value: string) {
    this.bedType = value;
  }
  public getType(): string {
    return this.type;
  }
  public setType(value: string) {
    this.type = value;
  }
  public getNumber(): string {
    return this.number;
  }
  public setNumber(value: string) {
    this.number = value;
  }
  public getId(): string {
    return this.id;
  }
  public setId(value?: string) {
    if (!value) this.id = uuidv4();
    else this.id = value;
  }
}
