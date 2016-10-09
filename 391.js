/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    if (rectangles.length === 0 || rectangles[0].length === 0) return false;

    var x1 = Number.MAX_VALUE;
    var x2 = -Number.MIN_VALUE;
    var y1 = Number.MAX_VALUE;
    var y2 = -Number.MIN_VALUE;

    var set = new Set();
    var area = 0;

    for (var rect of rectangles) {
        x1 = Math.min(rect[0], x1);
        y1 = Math.min(rect[1], y1);
        x2 = Math.max(rect[2], x2);
        y2 = Math.max(rect[3], y2);

        area += (rect[2] - rect[0]) * (rect[3] - rect[1]);

        var s1 = rect[0] + " " + rect[1];
        var s2 = rect[0] + " " + rect[3];
        var s3 = rect[2] + " " + rect[3];
        var s4 = rect[2] + " " + rect[1];

        if (set.has(s1)) {
            set.delete(s1);
        } else {
            set.add(s1);
        }
        if (set.has(s2)) {
            set.delete(s2);
        } else {
            set.add(s2);
        }
        if (set.has(s3)) {
            set.delete(s3);
        } else {
            set.add(s3);
        }
        if (set.has(s4)) {
            set.delete(s4);
        } else {
            set.add(s4);
        }
    }
    if (area !== (x2-x1) * (y2-y1) || set.size !== 4 || !set.has(x1 + " " + y1) || !set.has(x1 + " " + y2) || !set.has(x2 + " " + y1) || !set.has(x2 + " " + y2)) return false;
    return true;
};
