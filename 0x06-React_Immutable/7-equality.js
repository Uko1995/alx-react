import  { Map, isMap } from 'immutable';

export default function areMapsEqual(map1=Object, map2=Object) {
    return (isMap(map1) && isMap(map2)) ? true : false;
}

const map1 = new Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
);
const map2 = new Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
);
  
console.log(areMapsEqual(map1, map2));