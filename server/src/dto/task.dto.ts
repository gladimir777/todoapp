export class CreateTaskDTO {
  readonly name: string;
  state: Boolean;
  readonly description: string;
  //readonly user_id: any;
  readonly created_at: Date;
}
