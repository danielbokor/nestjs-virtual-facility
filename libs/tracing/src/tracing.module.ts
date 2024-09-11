import { Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats-client.module';
import { TracingLogger } from './tracing.logger';
import { TracingService } from './tracing.service';

@Module({
  imports: [NatsClientModule],
  providers: [TracingService, TracingLogger],
  exports: [TracingService, TracingLogger],
})
export class TracingModule {}
