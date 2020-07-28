import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDTO } from '../dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<ITask>,
    @InjectModel('User') private readonly userModel: Model<IUser>,
  ) {}
  // fetch all tasks
  async getAllTasks(): Promise<ITask[]> {
    const tasks = await this.taskModel.find().exec();
    return tasks;
  }
  // Get a single task
  async getTask(taskID: string): Promise<ITask> {
    const task = await this.taskModel
      .findById(taskID)
      .populate('user_id')
      .exec();
    return task;
  }
  // post a single task
  async addTask(createTaskDTO: CreateTaskDTO, userID: string): Promise<ITask> {
    console.log('task service', userID);
    const user = await this.userModel.findById(userID);
    console.log('user', user);
    const newTask = await this.taskModel(createTaskDTO);

    user.taks.push(newTask._id);
    user.save();
    return newTask.save();
  }
  // Edit task details
  async updateTask(
    taskID: string,
    createTaskDTO: CreateTaskDTO,
  ): Promise<ITask> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(
      taskID,
      createTaskDTO,
      { new: true },
    );
    return updatedTask;
  }
  // Delete a task
  async deleteTask(taskID: string): Promise<any> {
    const deletedTask = await this.taskModel.findByIdAndRemove(taskID);
    return deletedTask;
  }
}
