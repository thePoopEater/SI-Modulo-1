import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudEventoService } from './solicitud-evento.service';

describe('SolicitudEventoService', () => {
  let service: SolicitudEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudEventoService],
    }).compile();

    service = module.get<SolicitudEventoService>(SolicitudEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
