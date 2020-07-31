export class CreateTaskDTO {
  readonly name: string;
  state: Boolean;
  readonly description: string;
  readonly created_at: Date;
}
