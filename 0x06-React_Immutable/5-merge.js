import { Map, List } from 'immutable';

export function concatElements(page1=Array, page2=Array) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1=Object, page2=Object) {
    return Map(page1).merge(Map(page2));
}

const list1 = ['a', 'b', 'c'];
const list2 = ['d', 'e', 'f'];
const map1 = { a: 'b', b: 'c' };
const map2 = { d: 'e', e: 'f' };
console.log(concatElements(list1, list2).toJS());
console.log(mergeElements(map1, map2).toJS());