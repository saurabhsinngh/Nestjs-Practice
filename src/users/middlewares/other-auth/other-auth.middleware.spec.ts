import { OtherAuthMiddleware } from './other-auth.middleware';

describe('OtherAuthMiddleware', () => {
  it('should be defined', () => {
    expect(new OtherAuthMiddleware()).toBeDefined();
  });
});
