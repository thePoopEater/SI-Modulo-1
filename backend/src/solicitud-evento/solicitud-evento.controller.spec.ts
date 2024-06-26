import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudEventoController } from './solicitud-evento.controller';

describe('SolicitudEventoController', () => {
  let controller: SolicitudEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudEventoController],
    }).compile();

    controller = module.get<SolicitudEventoController>(SolicitudEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
