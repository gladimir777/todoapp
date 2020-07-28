import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';

import { TaskService } from '../task/task.service';
import { CreateTaskDTO } from 'src/dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  // add a task
  @Post('/create/:userID')
  async addTask(
    @Res()
    res,
    @Body() createTaskDTO: CreateTaskDTO,
    @Param('userID') userID: string,
  ) {
    console.log('Datos', createTaskDTO);
    const task = await this.taskService.addTask(createTaskDTO, userID);
    return res.status(HttpStatus.OK).json({
      message: 'Task has been created successfully',
      task,
    });
  }

  // Retrieve users list
  @Get('all')
  async getAllUsers(@Res() res) {
    const taks = await this.taskService.getAllTasks();
    return res.status(HttpStatus.OK).json(taks);
  }

  // Fetch a particular user using ID
  @Get('/:taskID')
  async getUser(@Res() res, @Param('taskID') taskID) {
    console.log('ID', taskID);
    const user = await this.taskService.getTask(taskID);
    if (!user) throw new NotFoundException('Task does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }
}
