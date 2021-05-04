import Person from "./abstract/person";
import { v4 as uuidv4 } from "uuid";

export default class Guest extends Person {
  constructor(
    private id: string,
    private reservationId: string,
    protected name: string,
    protected email: string,
    protected cpf: string,
    protected address: string,
    protected phone: string,
    protected birthday: number
  ) {
    super(name, email, cpf, address, phone, birthday);
    this.setId();
    this.setReservationId(reservationId);
  }

  public getId(): string {
    return this.id;
  }

  public setId(id?: string): void {
    if(!id) this.id = uuidv4();
    else this.id = id;
  }

  public getReservationId(): string {
    return this.reservationId;
  }

  public setReservationId(reservationId: string): void {
    this.reservationId = reservationId;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public setAddress(address: string): void {
    this.address = address;
  }
  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }
  public setPhone(phone: string): void {
    this.phone = phone;
  }
  public setBirthday(birthday: number): void {
    this.birthday = birthday;
  }
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getAddress(): string {
    return this.address;
  }
  public getCpf(): string {
    return this.cpf;
  }
  public getPhone(): string {
    return this.phone;
  }
  public getBirthday(): number {
    return this.birthday;
  }
}
