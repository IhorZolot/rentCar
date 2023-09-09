export function hasExactCopy(arr, targetObject) {
	for (let i = 0; i < arr.length; i++) {
		if (isEqual(arr[i], targetObject)) {
			return true
		}
	}
	return false
}
function isEqual(obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2)
}
