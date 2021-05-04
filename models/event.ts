import { v4 as uuidv4 } from "uuid";

export default class Event {
  constructor(
    private id: string,
    private type: string,
    private description: string,
    private reservationId: string
  ) {}

  public getReservationId(): string {
    return this.reservationId;
  }
  public setReservationId(value: string) {
    this.reservationId = value;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(value: string) {
    this.description = value;
  }
  public getType(): string {
    return this.type;
  }
  public setType(value: string) {
    this.type = value;
  }
  public getId(): string {
    return this.id;
  }
  public setId(value?: string) {
    if (!value) this.id = uuidv4();
    else this.id = value;
  }
}
