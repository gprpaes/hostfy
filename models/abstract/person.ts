abstract class Person {
  constructor(
    protected name: string,
    protected email: string,
    protected cpf: string,
    protected address: string,
    protected phone: string,
    protected birthday: number
  ) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.address = address;
    this.phone = phone;
    this.birthday = birthday;
  }

  abstract setName(name: string): void
  abstract setEmail(Email: string): void
  abstract setAddress(address: string): void
  abstract setCpf(cpf: string): void
  abstract setPhone(phone: string): void
  abstract setBirthday(birthday: number): void

  abstract getName(): string;
  abstract getEmail(): string;
  abstract getAddress(): string;
  abstract getCpf(): string;
  abstract getPhone(): string;
  abstract getBirthday(): number;

}

export default Person;
