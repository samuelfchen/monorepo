abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // console.log(this.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(): void;
  // {
  //   // console.log(`Department (${this.id}): ${this.name}`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return (this.instance = new AccountingDepartment("d2", []));
  }

  describe() {
    console.log("Accounting department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);
it.describe();

it.addEmployee("Max");
it.addEmployee("Manu");

it.printEmployeeInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();
// console.log(accounting.mostRecentReport)
accounting.addReport("Something went wrong!");
accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();

accounting.describe();

const accounting2 = AccountingDepartment.getInstance();
accounting2.describe();