import { Pc } from './produtos/pc';
import { Server } from './produtos/server';

const pc01 = new Pc("samsung");
pc01.cpu('10 GHz');
pc01.hdd('1024 GB');
pc01.ram('32 GB');
pc01.type('ESSENTIAL');

const server01 = new Server("samsung");
server01.cpu('10 GHz');
server01.hdd('1024 GB');
server01.ram('32 GB');
server01.type('ESSENTIAL');

