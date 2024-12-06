import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string

  @Column()
  email: string

  @Column('date')
  dateOfBirth: Date;
}
