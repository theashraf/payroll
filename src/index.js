import { payroll } from './services/payroll'
import { csvWriter } from './services/csv'
import { argv } from 'yargs'
import { isNumber } from 'util'

const start = async () => {
	try {
		if (!isNumber(argv.baseSalaries))
			throw new Error('baseSalaries should be a valid number')
		if (!isNumber(argv.bouns)) throw new Error('bouns should be a valid number')

		const records = payroll(argv.baseSalaries, argv.bouns, new Date())
		console.log(records)
		//CSV file columns
		const header = [
			{ id: 'date', title: 'DATE' },
			{ id: 'salary', title: 'SALARY' }
		]
		await csvWriter(header, records)
	} catch (err) {
		throw err
	}
}

start()
