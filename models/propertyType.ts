import { v4 as uuidv4 } from "uuid";

export default class PropertyType {
  constructor(
    private id: string,
    private name: string,
    private description: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = uuidv4();
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string) {
    this.description = description;
  }
}
