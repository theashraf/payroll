import { isNumber, isDate } from 'util'

const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

/**
 * takes a year,month and return the last day date in that year&month as a Date Object
 * @param {number}   year
 * @param {number}   month
 *
 * @return {Date} Date
 */
export const getLastDayInMonth = (year, month) => {
	if (!isNumber(year)) throw new Error('year should be a valid number')
	if (!isNumber(month)) throw new Error('month should be a valid number')
	return new Date(year, month + 1, 0)
}

/**
 * takes a year,month and return the 15th day date in that year&month as a Date Object
 * @param {number}   year
 * @param {number}   month
 *
 * @return {Date} Date
 */
export const get15thDayNameInMonth = (year, month) => {
	if (!isNumber(year)) throw new Error('year should be a valid number')
	if (!isNumber(month)) throw new Error('month should be a valid number')

	const d = new Date(year, month)
	d.setDate(15)
	return d
}

/**
 * takes a date and return if that date is a weekend(friday or saturday) or not
 * @param {Date}   date
 *
 * @return {boolean} boolean
 */
export const isWeekend = date => {
	if (!isDate(date)) throw new Error('date should be a valid Date object')

	return weekDays[date.getDay()] === 'fri' || weekDays[date.getDay()] === 'sat'
}

/**
 * takes a date and return the next Wednesday date
 * @param {Date}   date
 *
 * @return {Date} Date
 */
export const getNextWednesday = date => {
	if (!isDate(date)) throw new Error('date should be a valid Date object')

	const d = new Date(date)
	const dayName = d.getDay()
	if (weekDays[dayName] === 'fri') {
		return addDays(date, 5)
	} else if (weekDays[dayName] === 'sat') {
		return addDays(date, 4)
	}
	return d
}

/**
 * takes a date object and days in number
 * return the addition of the given days to the given date
 * @param {Date}   date
 * @param {number} days
 *
 * @return {Date} Date
 */
export const addDays = (date, days) => {
	if (!isDate(date)) throw new Error('date should be a valid Date object')
	if (!isNumber(days)) throw new Error('year should be a valid number')

	const d = new Date(date)
	d.setDate(d.getDate() + days)
	return d
}

/**
 * takes a date object and days in number
 * return the subtraction of date and days
 * @param {Date}   date
 * @param {number} days
 *
 * @return {Date} Date
 */
export const minusDays = (date, days) => {
	if (!isDate(date)) throw new Error('date should be a valid Date object')
	if (!isNumber(days)) throw new Error('year should be a valid number')

	const d = new Date(date)
	d.setDate(d.getDate() - days)
	return d
}

/**
 * takes a date and check if this date is a weekend or not
 * if it's weekend then return the date before weekend
 * if it's not weekend then return the given date
 * @param {Date}   date
 *
 * @return {Date} Date
 */
export const getDayBeforeWeekend = date => {
	if (!isDate(date)) throw new Error('date should be a valid Date object')

	if (weekDays[date.getDay()] === 'fri') {
		return minusDays(date, 1)
	} else if (weekDays[date.getDay()] === 'sat') {
		return minusDays(date, 2)
	}
	return date
}
