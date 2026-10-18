// L: Liskov Substitution. Code written against a base type must keep working with any subtype.
// The classic trap: a Square that extends Rectangle breaks callers that set width and height
// independently. Modelling both as Shapes with an area keeps every substitution safe.
export class Rectangle {
    constructor(public width: number, public height: number) {
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

// Violates LSP: keeping the sides equal changes what setWidth/setHeight promise.
export class SquareAsRectangle extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }

    setWidth(width: number): void {
        this.width = width;
        this.height = width;
    }

    setHeight(height: number): void {
        this.width = height;
        this.height = height;
    }
}

// A caller that is correct for any real Rectangle
export function stretch(rectangle: Rectangle): number {
    rectangle.setWidth(5);
    rectangle.setHeight(4);
    return rectangle.area(); // expects 20
}

// Respects LSP: no shared setters to break, each shape only promises an area.
export interface Shape {
    area(): number;
}

export class Square implements Shape {
    constructor(private side: number) {
    }

    area(): number {
        return this.side ** 2;
    }
}
