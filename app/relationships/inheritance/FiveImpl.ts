import Five from './Five';

export class FiveImpl extends Five {
    aaaa() {
        super.aaaa();
        console.log('Override')
    }

    constructor(
        e: number,
        b: number
    ) {
        super(e,
              b);
        console.log(e,
                    b,
                    e,
                    b)
    }
}
