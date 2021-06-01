export interface Member {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  sex: string;
  dob: string;
  birth_place: string;
  birth_country: string;
  height: string;
  weight: string;
  eyes_color: string;
  hair_color: string;
  photo: string;
  description: string;
}

export const members = [
  {
    id: 1,
    first_name: 'Jonathan',
    last_name: 'Fleurimond',
    middle_name: 'Ciceron',
    sex: 'Male',
    dob: '08/06/1977',
    birth_place: 'Port-au-Prince',
    birth_country: 'Haiti',
    height: '1.80 m',
    weight: '198 kg',
    eyes_color: 'brown',
    hair_color: 'black',
    photo: 'image',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    first_name: 'Erley',
    last_name: 'Fleurimond',
    middle_name: 'Ethan',
    sex: 'Male',
    dob: '05/14/2010',
    birth_place: 'Port-au-Prince',
    birth_country: 'Haiti',
    height: '1.20 m',
    weight: '198 kg',
    eyes_color: 'brown',
    hair_color: 'black',
    photo: 'image',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 3,
    first_name: 'Loelaye',
    last_name: 'Fleurimond',
    middle_name: 'Irla',
    sex: 'Female',
    dob: '11/02/2018',
    birth_place: 'Philadelphia',
    birth_country: 'United States of America',
    height: '0.70 m',
    weight: '198 kg',
    eyes_color: 'brown',
    hair_color: 'black',
    photo: 'image',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 3,
    first_name: 'Irla',
    last_name: 'Deshommes',
    middle_name: '',
    sex: 'Female',
    dob: '10/04/1986',
    birth_place: 'Fonds-Verrettes',
    birth_country: 'Haiti',
    height: '0.70 m',
    weight: '198 kg',
    eyes_color: 'brown',
    hair_color: 'black',
    photo: 'image',
    price: 799,
    description: 'A large phone with one of the best screens'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/