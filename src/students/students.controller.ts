import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService
  ) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get('/birthdays-today')
  getStudentsWithBirthdayToday(): Promise<Student[]> {
    return this.studentsService.getStudentsWithBirthdayToday();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<Student> {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Student> {
    return this.studentsService.remove(+id);
  }
}
