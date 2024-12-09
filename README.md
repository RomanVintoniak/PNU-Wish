# PNU-Wish

PNU-Wish is a simple NestJS API application for managing student data. It provides CRUD operations for students and includes additional features such as a cron job and a queue to send birthday wishes to students via email.

The project leverages several key packages to implement its features effectively:
- **Typeorm**: To integrate with the database using TypeORM for managing student data.
- **Nestjs/schedule**: For scheduling cron jobs to automate daily tasks.
- **BullMQ**: For managing job queues and processing tasks asynchronously.
- **Nodemailer**: To send birthday emails to students.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete student records.
- **Birthday Wish Automation**:
  - A cron job runs daily to find students with birthdays on the current day.
  - A queue processes the sending of email wishes to these students.

## Available Endpoints

| Method | Endpoint          | Description                          |
|--------|-------------------|--------------------------------------|
| GET    | `/students`       | Retrieve all students               |
| GET    | `/students/:id`   | Retrieve a single student by ID     |
| GET    | `/students/birthdays-today` | Retrieve all students who have birthdays today |
| POST   | `/students`       | Create a new student                |
| PUT    | `/students/:id`   | Update an existing student by ID    |
| DELETE | `/students/:id`   | Delete a student by ID              |
