'use strict';
/**
 * 整数が17で割り切れるかどうか判定する
 * @param {number} num
 */
function isMultipleOfSeventeen (num) {
    return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
