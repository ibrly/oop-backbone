export default class Animal {
    constructor(
        public name: string,
        public legs: number
    ) {
    }

    speak(): string {
        return `${this.name} makes a sound`;
    }
}
