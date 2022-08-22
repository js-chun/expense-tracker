export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

const firstDay = (day = new Date()) => {
	return new Date(day.getFullYear(), day.getMonth(), 1)
}

const nextFirstDay = (day = new Date()) => {
	return new Date(day.getFullYear(), day.getMonth() + 1, 1)
}

export const isSameMonth = (
	compareDay = new Date(),
	anchorDay = new Date()
) => {
	return (
		compareDay >= firstDay(anchorDay) && compareDay < nextFirstDay(anchorDay)
	)
}
