import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  NotFoundException,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';

import { TaskService } from '../task/task.service';
import { CreateTaskDTO } from 'src/dto/task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  // add a task
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async addTask(
    @Res()
    res,
    @Body() createTaskDTO: CreateTaskDTO,
    @Request() req,
  ) {
    const task = await this.taskService.addTask(createTaskDTO, req.user._id);
    return res.status(HttpStatus.OK).json({
      message: 'Task has been created successfully',
      task,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put('/update/:id/:state')
  async updateTask(
    @Res()
    res,
    @Param('id') id,
    @Param('state') state,
    @Request() req,
  ) {
    const newState = JSON.parse(state);
    const task = await this.taskService.updateTask(id, newState);
    return res.status(HttpStatus.OK).json({
      message: 'Task has been updated successfully',
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
    const user = await this.taskService.getTask(taskID);
    if (!user) throw new NotFoundException('Task does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }
}
