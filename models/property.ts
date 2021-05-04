import { v4 as uuidv4 } from "uuid";

export default class Property {
  constructor(
    private id: string,
    private name: string,
    private propertyTypeId: string,
    private address: string,
    private roomAmount: number
  ) {}

  public getRoomAmount(): number {
    return this.roomAmount;
  }
  public setRoomAmount(value: number) {
    this.roomAmount = value;
  }
  public getAddress(): string {
    return this.address;
  }
  public setAddress(value: string) {
    this.address = value;
  }

  public setId(id?: string): void {
    if(!id) this.id = uuidv4();
    else this.id = id
  }

  public getId(): string {
    return this.id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setPropertyTypeId(propertyTypeId: string): void {
    this.propertyTypeId = propertyTypeId;
  }

  public getPropertyId(): string {
    return this.propertyTypeId;
  }
}
