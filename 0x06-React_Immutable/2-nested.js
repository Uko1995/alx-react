import { Map } from  'immutable';

export default function accessImmutableObject(object, array) {
    return array.reduce((acc, key) => acc[key], object);
}