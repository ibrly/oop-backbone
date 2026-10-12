export default interface Interface {
    increase(by: number): void;

    decrease(by: number): void;

    lessThan(value: number): boolean;

    greaterThan(value: number): boolean;
}
