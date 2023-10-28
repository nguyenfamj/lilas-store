export default class UIHelpers {
  static conditionalClassNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  };
}
