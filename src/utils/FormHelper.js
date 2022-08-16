export const getDateString = (date = new Date()) => {
	let mm = date.getMonth() + 1
	let dd = date.getDate()
	let yyyy = date.getFullYear()

	mm = mm >= 10 ? mm : `0${mm}`
	dd = dd >= 10 ? dd : `0${dd}`
	return `${yyyy}-${mm}-${dd}`
}

export const getDateInTimezone = (date = new Date()) => {
	let offset = date.getTimezoneOffset() * 60 * 1000
	let result = new Date()
	result.setTime(date.getTime() + offset)
	return result
}
