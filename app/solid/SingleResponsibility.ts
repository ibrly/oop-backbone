// S: Single Responsibility. A class should have one reason to change.
// The report only knows its data; formatting and delivery live in their own classes,
// so switching from text to CSV, or from console to email, doesn't touch the report.
export class SalesReport {
    constructor(private sales: number[]) {
    }

    total(): number {
        return this.sales.reduce((sum, sale) => sum + sale, 0);
    }

    count(): number {
        return this.sales.length;
    }
}

export class ReportFormatter {
    asText(report: SalesReport): string {
        return `${report.count()} sales, total ${report.total()}`;
    }

    asCsv(report: SalesReport): string {
        return `count,total\n${report.count()},${report.total()}`;
    }
}

export class ReportSender {
    readonly outbox: string[] = [];

    send(content: string): void {
        this.outbox.push(content); // stands in for email, Slack, a file...
    }
}
