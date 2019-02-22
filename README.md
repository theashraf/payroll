# Sales Payroll Problem Statement

it's a small command-line utility to help a fictional company determine the dates on which they need to pay salaries to their Sales Department.

The company handles their Sales payroll in the following way:

Sales staff get a regular fixed base monthly salary, plus a monthly bonus.

The base salaries are paid on the last day of the month unless that day is a Friday or a Saturday (weekend). In that case, salaries are paid before the weekend. For the sake of this application, please don't take into account public holidays.

On the 15th of every month, bonuses are paid for the previous month unless that day is a weekend. In that case, they are paid the first Wednesday after the 15th.

The output of the utility should be a CSV file, containing the payment dates for the next twelve months. The CSV file should contain a column for the month name, a column that contains the salary.

# Installation

```bash
git clone https://github.com/theashraf/payroll.git
cd payroll
npm run setup
```

# Usage

```bash
npm start -- --baseSalaries 5000 --bouns 500 # it will generate output.csv in the root dir of the project
```

# Development setup

```bash
npm run setup && npm run dev -- --baseSalaries 5000 --bouns 500
```
