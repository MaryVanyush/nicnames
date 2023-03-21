export default class Validator {
  validateUsername(name) {
    if (/(?!.*(\d)\1\1)^[a-z][\da-z_-]*\d{0,3}[a-z]$/gi.test(name)) {
      this.name = name;
      return this.name;
    }
    throw new Error(`${name} не соответствует параметрам`);
  }
}
