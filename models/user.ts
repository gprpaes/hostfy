import Person from "./abstract/person";
import { v4 as uuidv4 } from "uuid";

export default class User extends Person {
  constructor(
    private id: string,
    private username: string,
    private password: string,
    private propertyId: string,
    private position: string,
    private isSuperUser: boolean,
    private parentUserId: string,
    private permissionId: string,
    private blocked: boolean,
    private created: number,
    protected name: string,
    protected email: string,
    protected cpf: string,
    protected address: string,
    protected phone: string,
    protected birthday: number
  ) {
    super(name, email, cpf, address, phone, birthday);
    this.setId();
    this.setUsername(username);
    this.setPassword(password);
    this.setPropertyId(propertyId);
    this.setPosition(position);
    this.setIsSuperUser(isSuperUser);
    this.setParentUserId(parentUserId);
    this.setPermissionId(permissionId);
    this.setBlocked(blocked);
    this.setCreated();
  }

  public getCreated(): number {
    return this.created;
  }

  public setCreated(): void {
    this.created = Date.now().valueOf();
  }
  public getBlocked(): boolean {
    return this.blocked;
  }
  public setBlocked(value: boolean) {
    this.blocked = value;
  }
  public getPermissionId(): string {
    return this.permissionId;
  }
  public setPermissionId(value: string) {
    this.permissionId = value;
  }
  public getParentUserId(): string {
    return this.parentUserId;
  }
  public setParentUserId(value: string) {
    this.parentUserId = value;
  }
  public getIsSuperUser(): boolean {
    return this.isSuperUser;
  }
  public setIsSuperUser(value: boolean) {
    this.isSuperUser = value;
  }
  public getPosition(): string {
    return this.position;
  }
  public setPosition(value: string) {
    this.position = value;
  }
  public getPropertyId(): string {
    return this.propertyId;
  }
  public setPropertyId(value: string) {
    this.propertyId = value;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(value: string) {
    this.password = value;
  }
  public getUsername(): string {
    return this.username;
  }
  public setUsername(value: string) {
    this.username = value;
  }
  public getId(): string {
    return this.id;
  }
  public setId() {
    this.id = uuidv4();
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
