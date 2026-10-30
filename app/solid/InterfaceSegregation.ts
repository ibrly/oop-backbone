// I: Interface Segregation. Clients should not depend on methods they don't use.
// One wide Machine interface forces a basic printer to stub out scan and fax.
// Small role interfaces let each device implement only what it can do.
export interface Machine {
    print(doc: string): string;
    scan(doc: string): string;
    fax(doc: string, to: string): string;
}

// Violates ISP: has to implement methods it can only refuse.
export class BasicPrinterAsMachine implements Machine {
    print(doc: string): string {
        return `printed ${doc}`;
    }

    scan(): string {
        throw new Error('BasicPrinter cannot scan');
    }

    fax(): string {
        throw new Error('BasicPrinter cannot fax');
    }
}

// Respects ISP: one interface per role.
export interface Printer {
    print(doc: string): string;
}

export interface Scanner {
    scan(doc: string): string;
}

export class BasicPrinter implements Printer {
    print(doc: string): string {
        return `printed ${doc}`;
    }
}

export class OfficePrinter implements Printer, Scanner {
    print(doc: string): string {
        return `printed ${doc}`;
    }

    scan(doc: string): string {
        return `scanned ${doc}`;
    }
}

// Callers ask only for the role they need, so any Printer works here.
export function printAll(printer: Printer, docs: string[]): string[] {
    return docs.map(doc => printer.print(doc));
}
