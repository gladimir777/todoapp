export class CreateUserDTO {
  readonly name: string;
  readonly user_name: string;
  readonly password: string;
  readonly tasks: [string];
  readonly created_at: Date;
}
