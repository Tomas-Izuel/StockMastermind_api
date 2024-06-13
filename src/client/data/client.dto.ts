export class CreateClientDto {
  cuil: number;
  name: string;
}

export class UpdateClientDto {
  cuil?: number;
  name?: string;
}
