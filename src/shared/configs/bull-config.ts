import { BullRootModuleOptions } from "@nestjs/bullmq";

export const bullConfig: BullRootModuleOptions = {
  connection: {
    host: 'redis-18177.c339.eu-west-3-1.ec2.redns.redis-cloud.com',
    port: 18177,
    username: '',
    password: '',
  }
};