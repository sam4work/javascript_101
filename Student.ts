class Student {

    // public Can use in this and all child class
    // protected Can use in this class and only in child class
    // private Can only work in the class

    protected id: string;

    public firstName: string;
    public lastName: string;

    private _accountNumber : string;

    public get accountNumber() : string {
        return this._accountNumber;
    }

    public set accountNumber(v : string) {
        this._accountNumber = v;
    }
    
}




const student = new Student();