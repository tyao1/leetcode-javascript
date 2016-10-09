/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.dp = [];
    if (!matrix.length || !matrix[0].length) return;

    for (var i = 0; i <= matrix.length; i++) {
        this.dp.push([]);
        for (var j = 0; j <= matrix[0].length; j++) {
            this.dp[i].push(0);
        }
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            this.dp[i + 1][j + 1] = this.dp[i + 1][j]  + this.dp[i][j + 1] + matrix[i][j] - this.dp[i][j];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2+1][col2+1] - this.dp[row1][col2+1] - this.dp[row2+1][col1] + this.dp[row1][col1];
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
