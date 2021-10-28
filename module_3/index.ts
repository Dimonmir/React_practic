let str1 : string = 'Hello ';
let str2 : string = 'World';
let strResult : string = str1.concat(str2);
console.log(strResult);

interface IMyHometask {
    howIDoIt: string;
    simeArray: Array<string>;
    withData: [string, Array<string>] ;
}

let test: IMyHometask = {
    howIDoIt: str1,
    simeArray: [str2],
    withData: [str1,[str2]],
}
console.log(test);

const myArray: MyArray<number> = [1,2,3];
interface MyArray<T> {
    [N: number]: T;

    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
}
const initialValue:number = myArray.reduce((accumulator, value) => accumulator + value);
console.log(initialValue);

interface IHomeTask{
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win',
    }
}
console.log(homeTask);
// Недоделанное задание
type TMyType<T> = {
    [N in keyof T]: T extends React.ComponentType<IProps>? T[N] : T[N] ;
}
interface IProps {
    firstProp: string
}
function HomeComponent(IProps: { firstProp: string }) {
    return (
        <div>
            { IProps.firstProp }
        </div>
    )
}

const t = TMyType<HomeComponent firstProp = "test"/>;
