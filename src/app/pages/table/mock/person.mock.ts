import {Person} from "../interfaces/person.interface";
import {faker} from "@faker-js/faker";


export function generatePerson(): Person {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({min: 18, max: 45}),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate({max: 18, mode: 'age'})
  }
}

export function moreGeneratePersons(cant: number = 20): Person[] {
  return Array.from({length: cant})
    .map(() => generatePerson())
}
