import { Map } from 'immutable';

export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

export const map2 = map.set(2, 'Benjamin').set(4, map.get(4) === '0liver' ? map.get(4) : 'Oliver');

console.log('Before mutation');
console.log(map.toObject());
console.log('After mutation');
console.log(map2.toObject());