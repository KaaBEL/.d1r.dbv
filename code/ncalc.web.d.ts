export declare class ArgumentException extends Error {
}
export declare class EvaluationException extends Error {
}
export declare class BinaryExpression extends LogicalExpression {
    constructor(type: BinaryExpressionType, leftExpression: LogicalExpression, rightExpression: LogicalExpression);
    LeftExpression: LogicalExpression;
    RightExpression: LogicalExpression;
    Type: BinaryExpressionType;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare enum BinaryExpressionType {
    None = 0,
    And = 1,
    Or = 2,
    NotEqual = 3,
    LesserOrEqual = 4,
    GreaterOrEqual = 5,
    Lesser = 6,
    Greater = 7,
    Equal = 8,
    Minus = 9,
    Plus = 10,
    Modulo = 11,
    Div = 12,
    Times = 13,
    BitwiseOr = 14,
    BitwiseAnd = 15,
    BitwiseXOr = 16,
    LeftShift = 17,
    RightShift = 18,
    Unknown = 19,
    Exponentiation = 20
}
export declare class EvaluationVisitor extends LogicalExpressionVisitor {
    private readonly _options;
    private get IgnoreCase();
    constructor(options: EvaluateOptions);
    Result: any;
    private Evaluate;
    static FromJson(expression: any): any;
    Visit(expression: any): void;
    VisitTernary(expression: TernaryExpression): void;
    private static CommonTypes;
    private static GetMostPreciseType;
    CompareUsingMostPreciseType(a: any, b: any): number;
    private static IsReal;
    VisitBinaryExpression(expression: BinaryExpression): void;
    VisitUnaryExpression(expression: UnaryExpression): void;
    VisitValueExpression(expression: ValueExpression): void;
    VisitNCalcFunction(func: NCalcFunction): void;
    private CheckCase;
    Parameters: {
        [key: string]: any;
    };
    EvaluateFunction: {
        [key: string]: EvaluateFunctionHandler;
    };
    EvaluateParameter: {
        [key: string]: EvaluateParameterHandler;
    };
    private OnEvaluateFunction;
    private OnEvaluateParameter;
    VisitIdentifier(parameter: Identifier): void;
}
export declare class Identifier extends LogicalExpression {
    constructor(name: string);
    Name: string;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare abstract class LogicalExpressionVisitor {
    abstract Visit(expression: LogicalExpression): void;
    abstract Visit(expression: TernaryExpression): void;
    abstract Visit(expression: BinaryExpression): void;
    abstract Visit(expression: UnaryExpression): void;
    abstract Visit(expression: ValueExpression): void;
    abstract Visit(func: NCalcFunction): void;
    abstract Visit(func: Identifier): void;
    abstract Visit(expression: any): void;
}
export declare class LogicalExpression {
    constructor();
    ClassName: string;
    And(operand: object): BinaryExpression;
    And(operand: LogicalExpression): BinaryExpression;
    DividedBy(operand: object): BinaryExpression;
    DividedBy(operand: LogicalExpression): BinaryExpression;
    EqualsTo(operand: object): BinaryExpression;
    EqualsTo(operand: LogicalExpression): BinaryExpression;
    GreaterThan(operand: object): BinaryExpression;
    GreaterThan(operand: LogicalExpression): BinaryExpression;
    GreaterOrEqualThan(operand: object): BinaryExpression;
    GreaterOrEqualThan(operand: LogicalExpression): BinaryExpression;
    LesserThan(operand: object): BinaryExpression;
    LesserThan(operand: LogicalExpression): BinaryExpression;
    LesserOrEqualThan(operand: object): BinaryExpression;
    LesserOrEqualThan(operand: LogicalExpression): BinaryExpression;
    Minus(operand: object): BinaryExpression;
    Minus(operand: LogicalExpression): BinaryExpression;
    Modulo(operand: object): BinaryExpression;
    Modulo(operand: LogicalExpression): BinaryExpression;
    NotEqual(operand: object): BinaryExpression;
    NotEqual(operand: LogicalExpression): BinaryExpression;
    Or(operand: object): BinaryExpression;
    Or(operand: LogicalExpression): BinaryExpression;
    Plus(operand: object): BinaryExpression;
    Plus(operand: LogicalExpression): BinaryExpression;
    Mult(operand: object): BinaryExpression;
    Mult(operand: LogicalExpression): BinaryExpression;
    BitwiseOr(operand: object): BinaryExpression;
    BitwiseOr(operand: LogicalExpression): BinaryExpression;
    BitwiseAnd(operand: object): BinaryExpression;
    BitwiseAnd(operand: LogicalExpression): BinaryExpression;
    BitwiseXOr(operand: object): BinaryExpression;
    BitwiseXOr(operand: LogicalExpression): BinaryExpression;
    LeftShift(operand: object): BinaryExpression;
    LeftShift(operand: LogicalExpression): BinaryExpression;
    RightShift(operand: object): BinaryExpression;
    RightShift(operand: LogicalExpression): BinaryExpression;
    ToString(): string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare class NCalcFunction extends LogicalExpression {
    constructor(identifier: Identifier, expressions: LogicalExpression[]);
    Identifier: Identifier;
    Expressions: LogicalExpression[];
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare class SerializationVisitor extends LogicalExpressionVisitor {
    private readonly _numberFormatInfo;
    protected EncapsulateNoValue(expression: LogicalExpression): void;
    constructor();
    Result: string[];
    Visit(expression: LogicalExpression): void;
    Visit(expression: TernaryExpression): void;
    Visit(expression: BinaryExpression): void;
    Visit(expression: UnaryExpression): void;
    Visit(expression: ValueExpression): void;
    Visit(func: NCalcFunction): void;
    Visit(parameter: Identifier): void;
    protected VisitLogical(expression: LogicalExpression): void;
    VisitTernary(expression: TernaryExpression): void;
    VisitBinary(expression: BinaryExpression): void;
    VisitUnary(expression: UnaryExpression): void;
    VisitValue(expression: ValueExpression): void;
    VisitFunction(func: NCalcFunction): void;
    VisitIdentifier(parameter: Identifier): void;
}
export declare class TernaryExpression extends LogicalExpression {
    constructor(leftExpression: LogicalExpression, middleExpression: LogicalExpression, rightExpression: LogicalExpression);
    LeftExpression: LogicalExpression;
    MiddleExpression: LogicalExpression;
    RightExpression: LogicalExpression;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare class UnaryExpression extends LogicalExpression {
    constructor(type: UnaryExpressionType, expression: LogicalExpression);
    Expression: LogicalExpression;
    Type: UnaryExpressionType;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare enum UnaryExpressionType {
    Not = 0,
    Negate = 1,
    BitwiseNot = 2,
    Positive = 3
}
export declare class ValueExpression extends LogicalExpression {
    constructor();
    constructor(value: string);
    constructor(value: number);
    constructor(value: boolean);
    constructor(value: string, valueType: ValueType);
    constructor(value: number, valueType: ValueType);
    constructor(value: boolean, valueType: ValueType);
    Value: any;
    Type: ValueType;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare enum ValueType {
    None = 0,
    Integer = 1,
    String = 2,
    DateTime = 3,
    Float = 4,
    Boolean = 5
}

export declare class ErrorListener {
  private _errors;
  get errors(): any;
  syntaxError(...args: any): void;
  reportAmbiguity(): void;
  reportAttemptingFullContext(): void;
  reportContextSensitivity(): void;
}
export declare enum EvaluateOptions {
  None = 1,
  IgnoreCase = 2,
  NoCache = 4,
  IterateParameters = 8,
  RoundAwayFromZero = 16
}
export declare class Expression {
  Options: EvaluateOptions;
  /**
 * Orginal strings representation of the expression
 */
  protected OriginalExpression: string;
  private static _cacheEnabled;
  private static _compiledExpression;
  ParsedExpression: LogicalExpression;
  protected ParameterEnumerators: {
      [key: string]: any;
  };
  protected ParametersBackup: {
      [key: string]: object;
  };
  Parameters: {
      [key: string]: any;
  };
  get CacheEnabled(): boolean;
  set CacheEnabled(value: boolean);
  static get CachedExpressions(): {
      [key: string]: WeakRef<LogicalExpression>;
  };
  constructor(expression: LogicalExpression);
  constructor(expression: string);
  constructor(expression: LogicalExpression, options: EvaluateOptions);
  constructor(expression: string, options: EvaluateOptions);
  errors: any[];
  static Compile(expression: string, nocache: boolean): LogicalExpression;
  /**
 * Detects whether the expression has errors. This will simply return a boolean value.
 * You can access the error by using the `errors` getter.
 */
  HasErrors(): boolean;
  EvaluateFunction: {
      [key: string]: EvaluateFunctionHandler;
  };
  EvaluateParameter: {
      [key: string]: EvaluateParameterHandler;
  };
  Evaluate(): any;
}
export declare class FunctionArgs {
  private _result;
  HasResult: boolean;
  private _parameters;
  get Result(): any;
  set Result(value: any);
  get Parameters(): Expression[];
  set Parameters(value: Expression[]);
}
export declare class InvalidOperationException extends Error {
}
export declare enum TypeCode {
    Boolean = "boolean",
    Byte = "number",
    SByte = "number",
    Int16 = "number",
    UInt16 = "number",
    Int32 = "number",
    UInt32 = "number",
    Int64 = "bigint",
    UInt64 = "bigint",
    Single = "number",
    Double = "number",
    Decimal = "number"
}
export declare class Numbers {
    private static ConvertIfString;
    static Add(a: any, b: any): any;
    static Subtract(a: any, b: any): any;
    static Multiply(a: any, b: any): any;
    static Divide(a: any, b: any): any;
    static Modulo(a: any, b: any): any;
    static Max(a: any, b: any): any;
    static Min(a: any, b: any): any;
}
export declare class ParameterArgs {
  private _result;
  get Result(): any;
  set Result(value: any);
  HasResult: boolean;
}
export type EvaluateFunctionHandler = (args: FunctionArgs) => void;
export type EvaluateParameterHandler = (args: ParameterArgs) => void;
