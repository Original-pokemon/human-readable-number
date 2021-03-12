module.exports = function toReadable (number) {
  const num = String(number).split('').reverse();
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const dozens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety ']
  const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  let str = '';
  let unitsChar = '';
  let dozensChar = '';
  let hundredChar = '';

  if (number === 0) return 'zero';

  if (num.length === 1) {
    unitsChar = units[ num[0] ];
  }

  if (num.length === 2) {
    if (num[1] == 1) {
      unitsChar = '';
      dozensChar = teen[ num[0] ];
    } else {
      unitsChar = units[ num[0] ];
      dozensChar = dozens[ num[1] ]
    }
  }

  if (num.length === 3) {
    if (num[1] == 1) {
      unitsChar = '';
      dozensChar = teen[ num[0] ];
      hundredChar = `${units[ num[2] ]} hundred`
    } else {
      unitsChar = units[ num[0] ];
      dozensChar = dozens[ num[1] ]
      hundredChar = `${units[ num[2] ]} hundred`
    }
  }


  str = `${hundredChar} ${dozensChar}${unitsChar}`

  return str.trim()
}


