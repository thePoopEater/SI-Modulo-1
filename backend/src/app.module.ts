import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolicitudEventoModule } from './solicitud-evento/solicitud-evento.module';

@Module({
  imports: [SolicitudEventoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
