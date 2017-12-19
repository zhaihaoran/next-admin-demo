const utils = {
	/**
	 * 洗牌
	 */
	shuffle(array) {
		// 因为最后一个元素是不用进行交换的，所以我们只用进行array.length-2次循环
		const endIndex = array.length - 2;
		for (let i = 0; i <= endIndex; i++) {
			// 第二个序号
			const j = i + Math.floor(Math.random() * (array.length - i));
			// 然后交换两个数,使用解构赋值快速完成交换！！
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	},
	// 生成随机数
	getRandomNumber(start, end) {
		return parseInt(Math.floor(start + Math.random() * (end - start)), 10);
	},
	/**
	 * 	json 转 url参数
	 */
	urlEncode(object) {
		return Object.keys(object)
			.map(v => `${v}=${object[v]}`)
			.join("&");
	}
};

export default utils;
