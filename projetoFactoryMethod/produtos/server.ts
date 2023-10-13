import { Computador } from './computadores';

export class Server implements Computador {
  constructor(private name: string) {}

  ram(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
  hdd(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
  cpu(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
  type(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
}