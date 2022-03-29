export default class Six {
    /*to specify the way to access and mutate the class members by create a private member and create setter
     (mutator) and getter (accessor)*/


    //getter (accessor)
    get member(): string {
        return this._member;
    }

    //setter (mutator)
    set member(value: string) {
        this._member = value;
    }

    //private member
    private _member: string = ''
}
