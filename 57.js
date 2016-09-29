/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  var ret = [];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i].end < newInterval.start) {
      ret.push(intervals[i]);
    } else if (intervals[i].start > newInterval.end) {
      ret.push(newInterval);
      for (;i<intervals.length;i++){
        ret.push(intervals[i])
      }
      return ret;
      // newInterval = intervals[i];
    } else {
      newInterval.start = Math.min(newInterval.start, intervals[i].start);
      newInterval.end = Math.max(newInterval.end, intervals[i].end);
    }
  }
  ret.push(newInterval);
  return ret;
};
