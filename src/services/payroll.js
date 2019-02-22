import {
	get15thDayNameInMonth,
	getLastDayInMonth,
	getDayBeforeWeekend,
	getNextWednesday,
	isWeekend
} from '../utils/payroll'
import { isDate, isNumber } from 'util'

/**
 * return date to pay monthly bouns
 * @param {Date}   date
 * @param {number} days
 *
 * @return {Date} Date
 */
export const getDateToPayMonthlyBouns = date => {
	if (!isDate(date)) throw new Error('date should be a valid Date object')

	let d = new Date(date)
	d.setMonth(d.getMonth() + 1)
	d = get15thDayNameInMonth(d.getFullYear(), d.getMonth())
	if (isWeekend(d)) {
		return getNextWednesday(d)
	}
	return d
}

/**
 * returns Date to pay monthly base salary
 * @param {Date}   date
 * @param {number} days
 *
 * @return {Date} Date
 */
export const getDateToPayMonthlySalaries = date => {
	if (!isDate(date)) throw new Error('date should be a valid Date object')

	let d = new Date(date)
	d = getLastDayInMonth(d.getFullYear(), d.getMonth())
	if (isWeekend(d)) {
		return getDayBeforeWeekend(d)
	}
	return d
}

/**
 * calculate the sales payroll
 * takes a total base salaries & total monthly bouns & given start date
 * return an array of next 12 months date of payment and salary to pay at that date
 * @param {number}   totalBaseSalaries
 * @param {number} totalBouns
 * @param {Date} startDate
 *
 * @return {Array} Array
 */
export const payroll = (totalBaseSalaries, totalBouns, startDate) => {
	if (!isNumber(totalBaseSalaries))
		throw new Error('totalBaseSalaries should be a valid number')
	if (!isNumber(totalBouns))
		throw new Error('totalBouns should be a valid number')
	if (!isDate(startDate))
		throw new Error('startDate should be a valid Date object')

	let d = new Date(startDate)
	const records = []
	for (let m = 0; m < 12; m++) {
		records.push({
			date: getDateToPayMonthlySalaries(d).toDateString(),
			salary: totalBaseSalaries
		})
		records.push({
			date: getDateToPayMonthlyBouns(d).toDateString(),
			salary: totalBouns
		})
		d.setMonth(d.getMonth() + 1)
	}
	return records
}
