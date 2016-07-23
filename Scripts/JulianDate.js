(function(topLevel) {

  const ML = 30.6001;

  /*
   * Date to Julian Day
   * Meeus formula 7.1
   */
  function ymd2jd(y, m, d) {
    if (m <= 2) {
      m += 12;
      y -= 1;
    }
    var a = (y / 100) | 0;
    var b = 0;
    if ((y * 100 + m) * 100 + d >= 15821005) {
      b = 2 - a + ((a / 4) | 0);
    }
    return ((365.25 * (4716 + y)) | 0) + ((ML * (m + 1)) | 0) + d + b - 1524.5;
  }


  /*
   * Julian Day to date
   */
  function jd2ymd(jd) {
    jd += 0.5;
    var z = jd | 0;
    var f = jd - z;
    var a;
    if (z < 2299161) {
      a = z;
    }
    else {
      var α = ((z - 1867216.25) / 36524.25) | 0;
      a = z + 1 + α - ((α / 4) | 0);
    }
    var b = a + 1524;
    var c = ((b - 122.1) / 365.25) | 0;
    var d = (365.25 * c) | 0;
    var e = ((b - d) / ML) | 0;

    var day   = b - d - ((ML * e) | 0) + f;
    var month = e < 14 ? e - 1 : e - 13;
    var year  = month > 2 ? c - 4716 : c - 4715;

    return { year: year, month: month, day: day };
  }

  var JulianDate = {
    ymd2jd: ymd2jd,
    jd2ymd: jd2ymd
  }

  if (typeof exports !== "undefined") {
    exports.JulianDate = JulianDate;
  }
  else {
    topLevel.JulianDate = JulianDate;
  }


  })(typeof window === "undefined" ? global : window);
