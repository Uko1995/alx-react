import { Map, List } from 'immutable';

export default function mergeDeeplyElements(page1=Object, page2=Object) {
  return List(Map(page1).mergeDeep(Map(page2)));
}

const page1 = {
    'user-1': {
      id: 1,
      name: 'test',
      likes: {
        1: {
          uid: 1234,
        }
      }
    },
  };
  
  const page2 = {
    'user-1': {
      likes: {
        2: {
          uid: 134,
        }
      }
    },
  };
  
  console.log(mergeDeeplyElements(page1, page2).toJS());