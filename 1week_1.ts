//string
const ssookE: string = '쑤기'; // 작은따옴표
let text: string = "Hello, TypeScript!"; // 큰따옴표
let template: string = `안녕하세요, ${text}`; // 백틱 + 템플릿 리터럴

//string타입이 아닌 숫자를 할당했기 때문
const wrongStr: string = 123;

//number
const age: number = 26;
let intNum: number = 42;
let floatNum: number = 3.14;
let hexNum: number = 0xff;
let binNum: number = 0b1010;
let octNum: number = 0o52;

//number타입이 아닌 문자열을 할당했기 때문
const wrongNum: number = '26';

// boolean
const isMac: boolean = true;
const isGram: boolean = false;

// boolean타입이 아닌 문자열을 할당했기 때문
const wrongBool: boolean = 'true'; 

//null
const isNull: null = null;
let user: string | null = null;

// null타입이 아닌 undefined를 할당했기 때문
const wrongNull: null = undefined;

// undefined
const isUndefined: undefined = undefined;
let notInit: undefined;

// undefined타입이 아닌 null을 할당했기 때문
const wrongUndefined: undefined = null;

// symbol
const isSymbol: symbol = Symbol('symbol');

// symbol타입이 아닌 문자열을 할당했기 때문
const wrongSymbol: symbol = 'symbol'; 

// bigint
let bigNumber: bigint = 900930992547140991n;
let anotherBig: bigint = BigInt(12345678901234567890);

// bigint타입이 아닌 숫자를 할당했기 때문 
const wrongBig: bigint = 123;


// object
const yaho: object = { yaho: 'yaho' };
let engName: { firstName: string; lastName: string } = {
    firstName: "Ahn",
    lastName: "Ohtani"
};

// object타입이 아닌 문자열을 할당했기 때문
const wrongObj: object = 'string';

//반환값 타입 불일치 시 에러
function getName(): string {
  return 123;
}

