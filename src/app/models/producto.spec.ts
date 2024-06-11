import { Producto } from './producto';

describe('Producto', () => {
  it('should create an instance', () => {
    expect(new Producto("MONITOR", "LG-32' PANTALLA CURVA", "assets/images/monitor.png", 198000)).toBeTruthy();
  });
});
