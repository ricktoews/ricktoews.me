

/*
 * Format dates for home content posts.
 */
var monthName = ['January', 'February', 'March',
                 'April', 'May', 'June',
                 'July', 'August', 'September',
                 'October', 'November', 'December',
                ];

// In: yyyy-mm-dd; Out: MonthName Date, FullYear
function formatDate(date) {
  var parts = date.split('-');
  var dt = new Date(parts[0], parts[1] - 1, parts[2]);
  var mo = monthName[dt.getMonth()];
  var da = dt.getDate();
  var yr = dt.getFullYear();
  var fmt = `${mo} ${da}, ${yr}`;
  return fmt;
}



