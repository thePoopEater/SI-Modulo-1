import { Module } from '@nestjs/common';
import { SolicitudEventoController } from './solicitud-evento.controller';
import { SolicitudEventoService } from './solicitud-evento.service';

@Module({
  controllers: [SolicitudEventoController],
  providers: [SolicitudEventoService],
})
export class SolicitudEventoModule {}
