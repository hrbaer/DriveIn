// The following algorithm for computing the date of Easter is based on the algorithm of Oudin (1940).
// It is valid for any Gregorian year.

function easterDate(y) {
  var fl = Math.floor;
  var c = fl(y / 100);
  var n = y - 19 * fl(y / 19);
  var k = fl((c - 17) / 25);
  var i = c - fl(c / 4) - fl((c - k) / 3) + 19 * n + 15;
  i = i - 30 * fl((i / 30));
  i = i - fl(i / 28) * (1 - fl(i / 28) * fl(29 / (i + 1)) * fl((21 - n) / 11));
  var j = y + fl(y / 4) + i + 2 - c + fl(c / 4);
  j = j - 7 * fl(j / 7);
  var l = i - j;
  var m = 3 + fl((l + 40) / 44);
  var d = l + 28 - 31 * fl(m / 4);

  return { y: y, m: m, d: d };
}
