import { v4 as uuidv4 } from "uuid";

export default class PropertyType {
  constructor(
    private id: string,
    private name: string,
    private description: string
  ) {
    this.setId();
    this.setName(name);
    this.setDescription(description);
  }

  public getId(): string {
    return this.id;
  }

  public setId(id?: string): void {
    if(!id) this.id = uuidv4();
    else this.id = id;
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
