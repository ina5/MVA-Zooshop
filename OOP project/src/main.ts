import { Cat } from './animals/cat';
import { FurType } from './common/fur';
import { Sex } from './common/sex';
import { Printer } from './method/printer';

const machka: Cat = new Cat('persiiska', 250, 'granuli', Sex.Female, FurType.Long, true);
const printer: Printer = new Printer();
printer.print(machka);
