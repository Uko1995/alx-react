import { Map } from 'immutable';

const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

const map2 = Map({
    2: 'Benjamin',
    4: 'Oliver'
});

map.merge(map2);

export default [map, map2];