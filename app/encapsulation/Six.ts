export default class Six {
    get member(): string {
        return this._member;
    }

    set member(value: string) {
        this._member = value;
    }

    private _member: string = ''
}
