// O: Open/Closed. Open for extension, closed for modification.
// New discounts are new classes; the checkout never needs another if/else branch.
export interface Discount {
    applies(total: number): boolean;

    apply(total: number): number;
}

export class PercentOff implements Discount {
    constructor(private percent: number) {
    }

    applies(): boolean {
        return true;
    }

    apply(total: number): number {
        return total * (1 - this.percent / 100);
    }
}

export class AmountOffAbove implements Discount {
    constructor(private threshold: number, private amount: number) {
    }

    applies(total: number): boolean {
        return total >= this.threshold;
    }

    apply(total: number): number {
        return total - this.amount;
    }
}

export class Checkout {
    constructor(private discounts: Discount[]) {
    }

    // applied in order; adding a discount type doesn't change this method
    price(total: number): number {
        return this.discounts.reduce((current, discount) => discount.applies(current) ? discount.apply(current) : current, total);
    }
}
