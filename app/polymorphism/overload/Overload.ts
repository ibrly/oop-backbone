// TypeScript overloads: several call signatures for one implementation.
// Callers only see the overload signatures; the implementation signature must be compatible with all of them
// and narrows the arguments at runtime, because JavaScript has a single function body.
export default class Formatter {
    format(value: number): string;
    format(value: Date): string;
    format(values: number[], separator?: string): string;
    format(value: number | Date | number[], separator: string = ', '): string {
        if (Array.isArray(value)) {
            return value.map(item => this.format(item)).join(separator);
        }
        if (value instanceof Date) {
            return value.toISOString().slice(0, 10);
        }
        return value.toFixed(2);
    }
}
