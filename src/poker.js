
//var arr = ['1H','2S','3D','4C','1S','3H','2S','4S','TS','JD','QH','KS','JC'];

function getCount(arr){
    var count = 0;
    var brr = arr.sort().reduce(function(a,i,index, array){ 
        if(a.length>0){
                if(a[a.length-1][0][0] == i[0]){
                    a[a.length-1].push(i)
                }else{
                    a.push([i])
                }
        }else{
            a.push([i])
        }return a 
    },[])
    if(brr.length<13){
        count = -1;
    }
    var crr = brr.map(function(item){
        var s = item.sort().join('').match(/(\w\w)\1*/g);
        if(s.length<4){
            count = -1
        }
        return s.map(i => i.length/2)
    });
    if(count > -1){
       count = Math.min.apply(null,crr.map(a => Math.min.apply(null,a)))
    }
    console.log(count);
    return count;
}

var arr1 = [
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
];
var arr2 = [
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
  'KD',
];
var arr3 = [
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
  'KD',
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
  'KD',
];

getCount(arr1);
getCount(arr2);
getCount(arr3);

/*
const numberHash = n => {
  if (n === 'H') {
    return 9;
  } else if (n === 'J') {
    return 10;
  } else if (n === 'Q') {
    return 11;
  } else if (n === 'K') {
    return 12;
  } else {
    return Number.parseInt(n) - 1;
  }
};

const suitHash = s => {
  switch (s) {
    case 'H': return 0;
    case 'C': return 13;
    case 'D': return 26;
    case 'S': return 39;
  }
};

const hash = card => numberHash(card[0]) + suitHash(card[1]);

const solve = a => {
  const registry = [];
  for (let i = 0; i < 52; i++) {
    registry[i] = 0;
  }
  a.forEach(card => registry[hash(card)] += 1);
  return registry.reduce((min, count) => Math.min(min, count), registry[0]);
};

const run = (a, expected) => console.log(solve(a) === expected);

run([
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
], 0);

run([
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
  'KD',
], 1);

run([
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
  'KD',
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  'TH',
  'JH',
  'QH',
  'KH',
  '1C',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  'TC',
  'JC',
  'QC',
  'KC',
  '1S',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  'TS',
  'JS',
  'QS',
  'KS',
  '1D',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  'TD',
  'JD',
  'QD',
  'KD',
], 2);
*/