export default interface Count {
    increase(number: number): void;

    decrease(number: number): void;

    lessThan(number: number): void;

    greaterThan(number: number): void;
}
