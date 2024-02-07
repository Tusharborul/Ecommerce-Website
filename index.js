const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
// const random = require('random');
const Math = require('mathjs');
const FILE_PATH = './data.json';


const maCommit = n => {
  if (n === 0) return simpleGit().push();
  // const x = random.int(0, 54);

  // const y = random.int(0, 6);
  // if (x > 54) x = y;
  // if (y > 5) y = 2;
  let x = Math.random() * 54;
  let y = Math.random() * 6;

  const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
  // x = x + 1;
  // y = y + 1;
  const data = {
    date: DATE
  }

  console.log(Date);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, maCommit.bind(this, --n));
  });
}
maCommit(300);


