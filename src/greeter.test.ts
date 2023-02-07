import { greeter } from './greeter'

test('greets hello world', () => {
  expect(greeter('world')).toBe('Hello world!')
})

test('greet Paweł', () => {
  expect(greeter('Paweł')).toBe('Hello Paweł!')
})
