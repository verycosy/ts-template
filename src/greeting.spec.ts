import { greeting } from './greeting';

it('return "hello world"', () => {
  const result = greeting();

  expect(result).toBe('hello world');
});
