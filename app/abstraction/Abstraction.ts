export default abstract class Abstraction {
    //is way to give a guideline to other developers in abstraction to show up the class members and functionality
    //can use member field
    //can use access modifier
    //all abs methods must be implemented in derived class
    protected unit: string = 'cm';

    public abstract area(): number

    public abstract describe(): string

    abstract label: string
}
