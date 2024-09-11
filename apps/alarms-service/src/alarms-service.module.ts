import { TracingModule } from '@app/tracing';
import { NatsClientModule } from '@app/tracing/nats-client/nats-client.module';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AlarmsServiceController } from './alarms-service.controller';
import { AlarmsServiceService } from './alarms-service.service';
import { NOTIFICATIONS_SERVICE } from './constants';

@Module({
  imports: [
    NatsClientModule,
    ClientsModule.register([
      {
        name: NOTIFICATIONS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: 'notifications-service',
        },
      },
    ]),
    TracingModule,
  ],
  controllers: [AlarmsServiceController],
  providers: [AlarmsServiceService],
})
export class AlarmsServiceModule {}
