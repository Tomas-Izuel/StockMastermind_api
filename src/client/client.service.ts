import { Injectable } from '@nestjs/common';
import { Client } from './client';
import { client } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private clientRepository: Client) {}

  async findAll() {
    return this.clientRepository.findAll();
  }

  async findOne(id: number) {
    return this.clientRepository.findOne(id);
  }

  async getClientByName(name: string) {
    return this.clientRepository.getClientByName(name);
  }

  async create(data: Omit<client, 'id'>) {
    return this.clientRepository.create(data);
  }

  async update(id: number, data: Partial<client>) {
    return this.clientRepository.update(id, data);
  }

  async delete(id: number) {
    return this.clientRepository.delete(id);
  }
}
