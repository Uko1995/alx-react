import { Seq } from 'immutable';

export default function printBestStudents(arg=Object) {
    const Studentgrades =  Seq(arg)
        .filter(x => x.score >= 70)
        .map(x => ({
            ...x,
            firstName: x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1),
            lastName: x.lastName.charAt(0).toUpperCase() + x.lastName.slice(1),
        })
    );
    console.log(Studentgrades.toJS());
}

const grades = {
    1: {
      score: 99,
      firstName: "guillaume",
      lastName: "salva",
    }
  };

console.log(printBestStudents(grades));