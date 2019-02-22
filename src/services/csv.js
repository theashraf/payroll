import { createObjectCsvWriter as createCsvWriter } from 'csv-writer'
import { isArray } from 'util'

/**
 * takes an array and write
 * @param {Array}   header array of objects
 * @param {Array}   records
 *
 * @return {Promise} Promise
 */
export const csvWriter = (header, records) => {
	if (!isArray(header)) throw new Error('header should be an array')
	if (!isArray(records)) throw new Error('records should be an array')

	return createCsvWriter({
		path: `${__dirname}/../../output.csv`,
		header
	}).writeRecords(records)
}
