/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var total = (C - A) * (D - B) + (G - E) * (H - F);
    var h1 = Math.max(A, E);
    var h2 = Math.min(C, G);
    var h = h2 - h1;

    var v1 = Math.max(B, F);
    var v2 = Math.min(D, H);
    var v = v2 - v1;

    if(h<=0 || v<=0) return total;
    return total-h*v;
};
