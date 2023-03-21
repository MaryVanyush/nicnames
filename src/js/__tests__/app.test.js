import Validator from '../app';

test('check clase Validator', () => {
  const received = new Validator();
  received.validateUsername('Nameeeeee');
  let expected = { name: 'Nameeeeee' };
  expect(received).toEqual(expected);

  received.validateUsername('Nam123eeeee');
  expected = { name: 'Nam123eeeee' };
  expect(received).toEqual(expected);

  received.validateUsername('Nam2eeeee');
  expected = { name: 'Nam2eeeee' };
  expect(received).toEqual(expected);

  received.validateUsername('Ne-nn');
  expected = { name: 'Ne-nn' };
  expect(received).toEqual(expected);

  received.validateUsername('Na');
  expected = { name: 'Na' };
  expect(received).toEqual(expected);

  received.validateUsername('nam____e-eeeee');
  expected = { name: 'nam____e-eeeee' };
  expect(received).toEqual(expected);
});

test('check clase Validator with error name', () => {
  expect(() => {
    const received = new Validator();
    received.validateUsername('Имя');
  }).toThrow('Имя не соответствует параметрам');
});

test('check clase Validator with error name', () => {
  expect(() => {
    const received = new Validator();
    received.validateUsername('Ne0');
  }).toThrow('Ne0 не соответствует параметрам');
});

test('check clase Validator with error name', () => {
  expect(() => {
    const received = new Validator();
    received.validateUsername('Ne-');
  }).toThrow('Ne- не соответствует параметрам');
});

test('check clase Validator with error name', () => {
  expect(() => {
    const received = new Validator();
    received.validateUsername('_Ne_');
  }).toThrow('_Ne_ не соответствует параметрам');
});

test('check clase Validator with error name', () => {
  expect(() => {
    const received = new Validator();
    received.validateUsername('Nam99999eeeee');
  }).toThrow('Nam99999eeeee не соответствует параметрам');
});
