// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = [];
    if (!matrix) return result;
    for (const [index, value] of matrix.entries()) {
        index % 2 ? result.push(...value.reverse()) : result.push(...value);
    }
    return result
}