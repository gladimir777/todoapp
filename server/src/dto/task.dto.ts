export class CreateTaskDTO {
  readonly name: string;
  readonly state: Boolean;
  readonly description: string;
  //readonly user_id: any;
  readonly created_at: Date;
}
