import { v4 as uuidv4 } from "uuid";

export default class Property {
  constructor(
    private id: string | null,
    private name: string | null,
    private propertyTypeId: string | null,
    private address: string | null,
    private roomAmount: number | null,
    private cnpj: string | null
  ) {
    this.setId();
    this.setName(name);
    this.setRoomAmount(roomAmount);
    this.setAddress(address);
    this.setPropertyTypeId(propertyTypeId)
    this.setCnpj(cnpj)
  }

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

  public getCnpj(): string {
    return this.cnpj;
  }
  public setCnpj(value: string) {
    this.cnpj = value;
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
