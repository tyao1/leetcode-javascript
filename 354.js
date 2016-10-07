/**
 * @param {number[][]} envelopes
 * @return {number}
 */

var sort = (a,b) => (a[0] - b[0] || ( a[0] === b[0] && b[1] - a[1] ));
var maxEnvelopes = function(envelopes) {
    if (!envelopes.length) return 0;
    if (envelopes.length === 1) return 1;
    // sort the envelopes
    envelopes.sort(sort);
    var temp = [envelopes[0]];
    var len = envelopes.length;
    for (var i = 1; i < len; i++) {
        var num = envelopes[i];
        var index = temp.findIndex(val => val[1] >= num[1]);
        if (index < 0) temp.push(num);
        else temp[index] = num;
    }
    return temp.length;
};
