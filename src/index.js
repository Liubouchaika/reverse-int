module.exports = function reverse (n) {
  let int = Math.abs(n);
	let num = int.toString().split('').reverse().join('');
	return Number(num);
}
