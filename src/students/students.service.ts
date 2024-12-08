import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
  ) { }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    let student = await this.studentsRepository.findOneBy({ email: createStudentDto.email });

    if (student) {
      throw new ConflictException(`A student with email ${createStudentDto.email} already exists`);
    }

    student = this.studentsRepository.create(createStudentDto);
    return await this.studentsRepository.save(student)
  }

  async findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentsRepository.findOne({ where: { id } });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    this.studentsRepository.merge(student, updateStudentDto);
    return await this.studentsRepository.save(student);
  }

  async remove(id: number): Promise<Student> {
    const student = await this.findOne(id);

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return await this.studentsRepository.remove(student);
  }

  async getStudentsWithBirthdayToday(): Promise<Student[]> {
    const today = new Date();
    const month = today.getMonth() + 1; // Months are 0-based
    const day = today.getDate();

    return await this.studentsRepository.createQueryBuilder('studentsWithBirthdayToday')
      .where('MONTH(dateOfBirth) = :month', { month })
      .andWhere('DAY(dateOfBirth) = :day', { day })
      .getMany();
  }
}
