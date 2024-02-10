
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Artiste
 * 
 */
export type Artiste = $Result.DefaultSelection<Prisma.$ArtistePayload>
/**
 * Model Concert
 * 
 */
export type Concert = $Result.DefaultSelection<Prisma.$ConcertPayload>
/**
 * Model Joue
 * 
 */
export type Joue = $Result.DefaultSelection<Prisma.$JouePayload>
/**
 * Model Participe
 * 
 */
export type Participe = $Result.DefaultSelection<Prisma.$ParticipePayload>
/**
 * Model Realise
 * 
 */
export type Realise = $Result.DefaultSelection<Prisma.$RealisePayload>
/**
 * Model Style
 * 
 */
export type Style = $Result.DefaultSelection<Prisma.$StylePayload>
/**
 * Model Ville
 * 
 */
export type Ville = $Result.DefaultSelection<Prisma.$VillePayload>
/**
 * Model Visiteur
 * 
 */
export type Visiteur = $Result.DefaultSelection<Prisma.$VisiteurPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Artistes
 * const artistes = await prisma.artiste.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Artistes
   * const artistes = await prisma.artiste.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.artiste`: Exposes CRUD operations for the **Artiste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artistes
    * const artistes = await prisma.artiste.findMany()
    * ```
    */
  get artiste(): Prisma.ArtisteDelegate<ExtArgs>;

  /**
   * `prisma.concert`: Exposes CRUD operations for the **Concert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Concerts
    * const concerts = await prisma.concert.findMany()
    * ```
    */
  get concert(): Prisma.ConcertDelegate<ExtArgs>;

  /**
   * `prisma.joue`: Exposes CRUD operations for the **Joue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Joues
    * const joues = await prisma.joue.findMany()
    * ```
    */
  get joue(): Prisma.JoueDelegate<ExtArgs>;

  /**
   * `prisma.participe`: Exposes CRUD operations for the **Participe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participes
    * const participes = await prisma.participe.findMany()
    * ```
    */
  get participe(): Prisma.ParticipeDelegate<ExtArgs>;

  /**
   * `prisma.realise`: Exposes CRUD operations for the **Realise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Realises
    * const realises = await prisma.realise.findMany()
    * ```
    */
  get realise(): Prisma.RealiseDelegate<ExtArgs>;

  /**
   * `prisma.style`: Exposes CRUD operations for the **Style** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Styles
    * const styles = await prisma.style.findMany()
    * ```
    */
  get style(): Prisma.StyleDelegate<ExtArgs>;

  /**
   * `prisma.ville`: Exposes CRUD operations for the **Ville** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villes
    * const villes = await prisma.ville.findMany()
    * ```
    */
  get ville(): Prisma.VilleDelegate<ExtArgs>;

  /**
   * `prisma.visiteur`: Exposes CRUD operations for the **Visiteur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visiteurs
    * const visiteurs = await prisma.visiteur.findMany()
    * ```
    */
  get visiteur(): Prisma.VisiteurDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Artiste: 'Artiste',
    Concert: 'Concert',
    Joue: 'Joue',
    Participe: 'Participe',
    Realise: 'Realise',
    Style: 'Style',
    Ville: 'Ville',
    Visiteur: 'Visiteur'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'artiste' | 'concert' | 'joue' | 'participe' | 'realise' | 'style' | 'ville' | 'visiteur'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Artiste: {
        payload: Prisma.$ArtistePayload<ExtArgs>
        fields: Prisma.ArtisteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtisteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtisteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload>
          }
          findFirst: {
            args: Prisma.ArtisteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtisteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload>
          }
          findMany: {
            args: Prisma.ArtisteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload>[]
          }
          create: {
            args: Prisma.ArtisteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload>
          }
          createMany: {
            args: Prisma.ArtisteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtisteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload>
          }
          update: {
            args: Prisma.ArtisteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload>
          }
          deleteMany: {
            args: Prisma.ArtisteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtisteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtisteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistePayload>
          }
          aggregate: {
            args: Prisma.ArtisteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtiste>
          }
          groupBy: {
            args: Prisma.ArtisteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtisteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtisteCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtisteCountAggregateOutputType> | number
          }
        }
      }
      Concert: {
        payload: Prisma.$ConcertPayload<ExtArgs>
        fields: Prisma.ConcertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConcertFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConcertFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload>
          }
          findFirst: {
            args: Prisma.ConcertFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConcertFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload>
          }
          findMany: {
            args: Prisma.ConcertFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload>[]
          }
          create: {
            args: Prisma.ConcertCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload>
          }
          createMany: {
            args: Prisma.ConcertCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConcertDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload>
          }
          update: {
            args: Prisma.ConcertUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload>
          }
          deleteMany: {
            args: Prisma.ConcertDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConcertUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConcertUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConcertPayload>
          }
          aggregate: {
            args: Prisma.ConcertAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConcert>
          }
          groupBy: {
            args: Prisma.ConcertGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConcertGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConcertCountArgs<ExtArgs>,
            result: $Utils.Optional<ConcertCountAggregateOutputType> | number
          }
        }
      }
      Joue: {
        payload: Prisma.$JouePayload<ExtArgs>
        fields: Prisma.JoueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload>
          }
          findFirst: {
            args: Prisma.JoueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload>
          }
          findMany: {
            args: Prisma.JoueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload>[]
          }
          create: {
            args: Prisma.JoueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload>
          }
          createMany: {
            args: Prisma.JoueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JoueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload>
          }
          update: {
            args: Prisma.JoueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload>
          }
          deleteMany: {
            args: Prisma.JoueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JoueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JoueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JouePayload>
          }
          aggregate: {
            args: Prisma.JoueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJoue>
          }
          groupBy: {
            args: Prisma.JoueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JoueGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoueCountArgs<ExtArgs>,
            result: $Utils.Optional<JoueCountAggregateOutputType> | number
          }
        }
      }
      Participe: {
        payload: Prisma.$ParticipePayload<ExtArgs>
        fields: Prisma.ParticipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload>
          }
          findFirst: {
            args: Prisma.ParticipeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload>
          }
          findMany: {
            args: Prisma.ParticipeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload>[]
          }
          create: {
            args: Prisma.ParticipeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload>
          }
          createMany: {
            args: Prisma.ParticipeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ParticipeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload>
          }
          update: {
            args: Prisma.ParticipeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload>
          }
          deleteMany: {
            args: Prisma.ParticipeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParticipeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipePayload>
          }
          aggregate: {
            args: Prisma.ParticipeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParticipe>
          }
          groupBy: {
            args: Prisma.ParticipeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParticipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipeCountArgs<ExtArgs>,
            result: $Utils.Optional<ParticipeCountAggregateOutputType> | number
          }
        }
      }
      Realise: {
        payload: Prisma.$RealisePayload<ExtArgs>
        fields: Prisma.RealiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RealiseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RealiseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload>
          }
          findFirst: {
            args: Prisma.RealiseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RealiseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload>
          }
          findMany: {
            args: Prisma.RealiseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload>[]
          }
          create: {
            args: Prisma.RealiseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload>
          }
          createMany: {
            args: Prisma.RealiseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RealiseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload>
          }
          update: {
            args: Prisma.RealiseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload>
          }
          deleteMany: {
            args: Prisma.RealiseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RealiseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RealiseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RealisePayload>
          }
          aggregate: {
            args: Prisma.RealiseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRealise>
          }
          groupBy: {
            args: Prisma.RealiseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RealiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RealiseCountArgs<ExtArgs>,
            result: $Utils.Optional<RealiseCountAggregateOutputType> | number
          }
        }
      }
      Style: {
        payload: Prisma.$StylePayload<ExtArgs>
        fields: Prisma.StyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StyleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StyleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload>
          }
          findFirst: {
            args: Prisma.StyleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StyleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload>
          }
          findMany: {
            args: Prisma.StyleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload>[]
          }
          create: {
            args: Prisma.StyleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload>
          }
          createMany: {
            args: Prisma.StyleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StyleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload>
          }
          update: {
            args: Prisma.StyleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload>
          }
          deleteMany: {
            args: Prisma.StyleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StyleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StyleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StylePayload>
          }
          aggregate: {
            args: Prisma.StyleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStyle>
          }
          groupBy: {
            args: Prisma.StyleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.StyleCountArgs<ExtArgs>,
            result: $Utils.Optional<StyleCountAggregateOutputType> | number
          }
        }
      }
      Ville: {
        payload: Prisma.$VillePayload<ExtArgs>
        fields: Prisma.VilleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VilleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VilleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          findFirst: {
            args: Prisma.VilleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VilleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          findMany: {
            args: Prisma.VilleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload>[]
          }
          create: {
            args: Prisma.VilleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          createMany: {
            args: Prisma.VilleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VilleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          update: {
            args: Prisma.VilleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          deleteMany: {
            args: Prisma.VilleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VilleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VilleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          aggregate: {
            args: Prisma.VilleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVille>
          }
          groupBy: {
            args: Prisma.VilleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VilleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VilleCountArgs<ExtArgs>,
            result: $Utils.Optional<VilleCountAggregateOutputType> | number
          }
        }
      }
      Visiteur: {
        payload: Prisma.$VisiteurPayload<ExtArgs>
        fields: Prisma.VisiteurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisiteurFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisiteurFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload>
          }
          findFirst: {
            args: Prisma.VisiteurFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisiteurFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload>
          }
          findMany: {
            args: Prisma.VisiteurFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload>[]
          }
          create: {
            args: Prisma.VisiteurCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload>
          }
          createMany: {
            args: Prisma.VisiteurCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VisiteurDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload>
          }
          update: {
            args: Prisma.VisiteurUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload>
          }
          deleteMany: {
            args: Prisma.VisiteurDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VisiteurUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VisiteurUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteurPayload>
          }
          aggregate: {
            args: Prisma.VisiteurAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVisiteur>
          }
          groupBy: {
            args: Prisma.VisiteurGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VisiteurGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisiteurCountArgs<ExtArgs>,
            result: $Utils.Optional<VisiteurCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArtisteCountOutputType
   */

  export type ArtisteCountOutputType = {
    Realise: number
  }

  export type ArtisteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Realise?: boolean | ArtisteCountOutputTypeCountRealiseArgs
  }

  // Custom InputTypes

  /**
   * ArtisteCountOutputType without action
   */
  export type ArtisteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisteCountOutputType
     */
    select?: ArtisteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArtisteCountOutputType without action
   */
  export type ArtisteCountOutputTypeCountRealiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealiseWhereInput
  }



  /**
   * Count Type ConcertCountOutputType
   */

  export type ConcertCountOutputType = {
    Joue: number
    Participe: number
    Realise: number
  }

  export type ConcertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Joue?: boolean | ConcertCountOutputTypeCountJoueArgs
    Participe?: boolean | ConcertCountOutputTypeCountParticipeArgs
    Realise?: boolean | ConcertCountOutputTypeCountRealiseArgs
  }

  // Custom InputTypes

  /**
   * ConcertCountOutputType without action
   */
  export type ConcertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConcertCountOutputType
     */
    select?: ConcertCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConcertCountOutputType without action
   */
  export type ConcertCountOutputTypeCountJoueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoueWhereInput
  }


  /**
   * ConcertCountOutputType without action
   */
  export type ConcertCountOutputTypeCountParticipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipeWhereInput
  }


  /**
   * ConcertCountOutputType without action
   */
  export type ConcertCountOutputTypeCountRealiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealiseWhereInput
  }



  /**
   * Count Type StyleCountOutputType
   */

  export type StyleCountOutputType = {
    Artiste: number
    Joue: number
  }

  export type StyleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artiste?: boolean | StyleCountOutputTypeCountArtisteArgs
    Joue?: boolean | StyleCountOutputTypeCountJoueArgs
  }

  // Custom InputTypes

  /**
   * StyleCountOutputType without action
   */
  export type StyleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleCountOutputType
     */
    select?: StyleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StyleCountOutputType without action
   */
  export type StyleCountOutputTypeCountArtisteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisteWhereInput
  }


  /**
   * StyleCountOutputType without action
   */
  export type StyleCountOutputTypeCountJoueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoueWhereInput
  }



  /**
   * Count Type VilleCountOutputType
   */

  export type VilleCountOutputType = {
    Concert: number
    Visiteur: number
  }

  export type VilleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Concert?: boolean | VilleCountOutputTypeCountConcertArgs
    Visiteur?: boolean | VilleCountOutputTypeCountVisiteurArgs
  }

  // Custom InputTypes

  /**
   * VilleCountOutputType without action
   */
  export type VilleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VilleCountOutputType
     */
    select?: VilleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VilleCountOutputType without action
   */
  export type VilleCountOutputTypeCountConcertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConcertWhereInput
  }


  /**
   * VilleCountOutputType without action
   */
  export type VilleCountOutputTypeCountVisiteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteurWhereInput
  }



  /**
   * Count Type VisiteurCountOutputType
   */

  export type VisiteurCountOutputType = {
    Participe: number
    other_Visiteur: number
  }

  export type VisiteurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participe?: boolean | VisiteurCountOutputTypeCountParticipeArgs
    other_Visiteur?: boolean | VisiteurCountOutputTypeCountOther_VisiteurArgs
  }

  // Custom InputTypes

  /**
   * VisiteurCountOutputType without action
   */
  export type VisiteurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteurCountOutputType
     */
    select?: VisiteurCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VisiteurCountOutputType without action
   */
  export type VisiteurCountOutputTypeCountParticipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipeWhereInput
  }


  /**
   * VisiteurCountOutputType without action
   */
  export type VisiteurCountOutputTypeCountOther_VisiteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteurWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Artiste
   */

  export type AggregateArtiste = {
    _count: ArtisteCountAggregateOutputType | null
    _avg: ArtisteAvgAggregateOutputType | null
    _sum: ArtisteSumAggregateOutputType | null
    _min: ArtisteMinAggregateOutputType | null
    _max: ArtisteMaxAggregateOutputType | null
  }

  export type ArtisteAvgAggregateOutputType = {
    IdArtiste: number | null
    idStyle: number | null
  }

  export type ArtisteSumAggregateOutputType = {
    IdArtiste: number | null
    idStyle: number | null
  }

  export type ArtisteMinAggregateOutputType = {
    IdArtiste: number | null
    pseudo: string | null
    idStyle: number | null
  }

  export type ArtisteMaxAggregateOutputType = {
    IdArtiste: number | null
    pseudo: string | null
    idStyle: number | null
  }

  export type ArtisteCountAggregateOutputType = {
    IdArtiste: number
    pseudo: number
    idStyle: number
    _all: number
  }


  export type ArtisteAvgAggregateInputType = {
    IdArtiste?: true
    idStyle?: true
  }

  export type ArtisteSumAggregateInputType = {
    IdArtiste?: true
    idStyle?: true
  }

  export type ArtisteMinAggregateInputType = {
    IdArtiste?: true
    pseudo?: true
    idStyle?: true
  }

  export type ArtisteMaxAggregateInputType = {
    IdArtiste?: true
    pseudo?: true
    idStyle?: true
  }

  export type ArtisteCountAggregateInputType = {
    IdArtiste?: true
    pseudo?: true
    idStyle?: true
    _all?: true
  }

  export type ArtisteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artiste to aggregate.
     */
    where?: ArtisteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistes to fetch.
     */
    orderBy?: ArtisteOrderByWithRelationInput | ArtisteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtisteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artistes
    **/
    _count?: true | ArtisteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtisteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtisteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtisteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtisteMaxAggregateInputType
  }

  export type GetArtisteAggregateType<T extends ArtisteAggregateArgs> = {
        [P in keyof T & keyof AggregateArtiste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtiste[P]>
      : GetScalarType<T[P], AggregateArtiste[P]>
  }




  export type ArtisteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisteWhereInput
    orderBy?: ArtisteOrderByWithAggregationInput | ArtisteOrderByWithAggregationInput[]
    by: ArtisteScalarFieldEnum[] | ArtisteScalarFieldEnum
    having?: ArtisteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtisteCountAggregateInputType | true
    _avg?: ArtisteAvgAggregateInputType
    _sum?: ArtisteSumAggregateInputType
    _min?: ArtisteMinAggregateInputType
    _max?: ArtisteMaxAggregateInputType
  }

  export type ArtisteGroupByOutputType = {
    IdArtiste: number
    pseudo: string | null
    idStyle: number | null
    _count: ArtisteCountAggregateOutputType | null
    _avg: ArtisteAvgAggregateOutputType | null
    _sum: ArtisteSumAggregateOutputType | null
    _min: ArtisteMinAggregateOutputType | null
    _max: ArtisteMaxAggregateOutputType | null
  }

  type GetArtisteGroupByPayload<T extends ArtisteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtisteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtisteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtisteGroupByOutputType[P]>
            : GetScalarType<T[P], ArtisteGroupByOutputType[P]>
        }
      >
    >


  export type ArtisteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdArtiste?: boolean
    pseudo?: boolean
    idStyle?: boolean
    Style?: boolean | Artiste$StyleArgs<ExtArgs>
    Realise?: boolean | Artiste$RealiseArgs<ExtArgs>
    _count?: boolean | ArtisteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artiste"]>

  export type ArtisteSelectScalar = {
    IdArtiste?: boolean
    pseudo?: boolean
    idStyle?: boolean
  }

  export type ArtisteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Style?: boolean | Artiste$StyleArgs<ExtArgs>
    Realise?: boolean | Artiste$RealiseArgs<ExtArgs>
    _count?: boolean | ArtisteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArtistePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artiste"
    objects: {
      Style: Prisma.$StylePayload<ExtArgs> | null
      Realise: Prisma.$RealisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdArtiste: number
      pseudo: string | null
      idStyle: number | null
    }, ExtArgs["result"]["artiste"]>
    composites: {}
  }


  type ArtisteGetPayload<S extends boolean | null | undefined | ArtisteDefaultArgs> = $Result.GetResult<Prisma.$ArtistePayload, S>

  type ArtisteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtisteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtisteCountAggregateInputType | true
    }

  export interface ArtisteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artiste'], meta: { name: 'Artiste' } }
    /**
     * Find zero or one Artiste that matches the filter.
     * @param {ArtisteFindUniqueArgs} args - Arguments to find a Artiste
     * @example
     * // Get one Artiste
     * const artiste = await prisma.artiste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtisteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtisteFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artiste that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtisteFindUniqueOrThrowArgs} args - Arguments to find a Artiste
     * @example
     * // Get one Artiste
     * const artiste = await prisma.artiste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtisteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtisteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artiste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisteFindFirstArgs} args - Arguments to find a Artiste
     * @example
     * // Get one Artiste
     * const artiste = await prisma.artiste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtisteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtisteFindFirstArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artiste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisteFindFirstOrThrowArgs} args - Arguments to find a Artiste
     * @example
     * // Get one Artiste
     * const artiste = await prisma.artiste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtisteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtisteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artistes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artistes
     * const artistes = await prisma.artiste.findMany()
     * 
     * // Get first 10 Artistes
     * const artistes = await prisma.artiste.findMany({ take: 10 })
     * 
     * // Only select the `IdArtiste`
     * const artisteWithIdArtisteOnly = await prisma.artiste.findMany({ select: { IdArtiste: true } })
     * 
    **/
    findMany<T extends ArtisteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtisteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artiste.
     * @param {ArtisteCreateArgs} args - Arguments to create a Artiste.
     * @example
     * // Create one Artiste
     * const Artiste = await prisma.artiste.create({
     *   data: {
     *     // ... data to create a Artiste
     *   }
     * })
     * 
    **/
    create<T extends ArtisteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtisteCreateArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artistes.
     *     @param {ArtisteCreateManyArgs} args - Arguments to create many Artistes.
     *     @example
     *     // Create many Artistes
     *     const artiste = await prisma.artiste.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtisteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtisteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artiste.
     * @param {ArtisteDeleteArgs} args - Arguments to delete one Artiste.
     * @example
     * // Delete one Artiste
     * const Artiste = await prisma.artiste.delete({
     *   where: {
     *     // ... filter to delete one Artiste
     *   }
     * })
     * 
    **/
    delete<T extends ArtisteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtisteDeleteArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artiste.
     * @param {ArtisteUpdateArgs} args - Arguments to update one Artiste.
     * @example
     * // Update one Artiste
     * const artiste = await prisma.artiste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtisteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtisteUpdateArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artistes.
     * @param {ArtisteDeleteManyArgs} args - Arguments to filter Artistes to delete.
     * @example
     * // Delete a few Artistes
     * const { count } = await prisma.artiste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtisteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtisteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artistes
     * const artiste = await prisma.artiste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtisteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtisteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artiste.
     * @param {ArtisteUpsertArgs} args - Arguments to update or create a Artiste.
     * @example
     * // Update or create a Artiste
     * const artiste = await prisma.artiste.upsert({
     *   create: {
     *     // ... data to create a Artiste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artiste we want to update
     *   }
     * })
    **/
    upsert<T extends ArtisteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtisteUpsertArgs<ExtArgs>>
    ): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Artistes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisteCountArgs} args - Arguments to filter Artistes to count.
     * @example
     * // Count the number of Artistes
     * const count = await prisma.artiste.count({
     *   where: {
     *     // ... the filter for the Artistes we want to count
     *   }
     * })
    **/
    count<T extends ArtisteCountArgs>(
      args?: Subset<T, ArtisteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtisteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artiste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtisteAggregateArgs>(args: Subset<T, ArtisteAggregateArgs>): Prisma.PrismaPromise<GetArtisteAggregateType<T>>

    /**
     * Group by Artiste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtisteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtisteGroupByArgs['orderBy'] }
        : { orderBy?: ArtisteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtisteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtisteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artiste model
   */
  readonly fields: ArtisteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artiste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtisteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Style<T extends Artiste$StyleArgs<ExtArgs> = {}>(args?: Subset<T, Artiste$StyleArgs<ExtArgs>>): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Realise<T extends Artiste$RealiseArgs<ExtArgs> = {}>(args?: Subset<T, Artiste$RealiseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artiste model
   */ 
  interface ArtisteFieldRefs {
    readonly IdArtiste: FieldRef<"Artiste", 'Int'>
    readonly pseudo: FieldRef<"Artiste", 'String'>
    readonly idStyle: FieldRef<"Artiste", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Artiste findUnique
   */
  export type ArtisteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * Filter, which Artiste to fetch.
     */
    where: ArtisteWhereUniqueInput
  }


  /**
   * Artiste findUniqueOrThrow
   */
  export type ArtisteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * Filter, which Artiste to fetch.
     */
    where: ArtisteWhereUniqueInput
  }


  /**
   * Artiste findFirst
   */
  export type ArtisteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * Filter, which Artiste to fetch.
     */
    where?: ArtisteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistes to fetch.
     */
    orderBy?: ArtisteOrderByWithRelationInput | ArtisteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistes.
     */
    cursor?: ArtisteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistes.
     */
    distinct?: ArtisteScalarFieldEnum | ArtisteScalarFieldEnum[]
  }


  /**
   * Artiste findFirstOrThrow
   */
  export type ArtisteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * Filter, which Artiste to fetch.
     */
    where?: ArtisteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistes to fetch.
     */
    orderBy?: ArtisteOrderByWithRelationInput | ArtisteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistes.
     */
    cursor?: ArtisteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistes.
     */
    distinct?: ArtisteScalarFieldEnum | ArtisteScalarFieldEnum[]
  }


  /**
   * Artiste findMany
   */
  export type ArtisteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * Filter, which Artistes to fetch.
     */
    where?: ArtisteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistes to fetch.
     */
    orderBy?: ArtisteOrderByWithRelationInput | ArtisteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artistes.
     */
    cursor?: ArtisteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistes.
     */
    skip?: number
    distinct?: ArtisteScalarFieldEnum | ArtisteScalarFieldEnum[]
  }


  /**
   * Artiste create
   */
  export type ArtisteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * The data needed to create a Artiste.
     */
    data?: XOR<ArtisteCreateInput, ArtisteUncheckedCreateInput>
  }


  /**
   * Artiste createMany
   */
  export type ArtisteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artistes.
     */
    data: ArtisteCreateManyInput | ArtisteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Artiste update
   */
  export type ArtisteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * The data needed to update a Artiste.
     */
    data: XOR<ArtisteUpdateInput, ArtisteUncheckedUpdateInput>
    /**
     * Choose, which Artiste to update.
     */
    where: ArtisteWhereUniqueInput
  }


  /**
   * Artiste updateMany
   */
  export type ArtisteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artistes.
     */
    data: XOR<ArtisteUpdateManyMutationInput, ArtisteUncheckedUpdateManyInput>
    /**
     * Filter which Artistes to update
     */
    where?: ArtisteWhereInput
  }


  /**
   * Artiste upsert
   */
  export type ArtisteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * The filter to search for the Artiste to update in case it exists.
     */
    where: ArtisteWhereUniqueInput
    /**
     * In case the Artiste found by the `where` argument doesn't exist, create a new Artiste with this data.
     */
    create: XOR<ArtisteCreateInput, ArtisteUncheckedCreateInput>
    /**
     * In case the Artiste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtisteUpdateInput, ArtisteUncheckedUpdateInput>
  }


  /**
   * Artiste delete
   */
  export type ArtisteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    /**
     * Filter which Artiste to delete.
     */
    where: ArtisteWhereUniqueInput
  }


  /**
   * Artiste deleteMany
   */
  export type ArtisteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artistes to delete
     */
    where?: ArtisteWhereInput
  }


  /**
   * Artiste.Style
   */
  export type Artiste$StyleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    where?: StyleWhereInput
  }


  /**
   * Artiste.Realise
   */
  export type Artiste$RealiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    where?: RealiseWhereInput
    orderBy?: RealiseOrderByWithRelationInput | RealiseOrderByWithRelationInput[]
    cursor?: RealiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RealiseScalarFieldEnum | RealiseScalarFieldEnum[]
  }


  /**
   * Artiste without action
   */
  export type ArtisteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
  }



  /**
   * Model Concert
   */

  export type AggregateConcert = {
    _count: ConcertCountAggregateOutputType | null
    _avg: ConcertAvgAggregateOutputType | null
    _sum: ConcertSumAggregateOutputType | null
    _min: ConcertMinAggregateOutputType | null
    _max: ConcertMaxAggregateOutputType | null
  }

  export type ConcertAvgAggregateOutputType = {
    idConcert: number | null
    nbrPlaceDisponible: number | null
    idVille: number | null
  }

  export type ConcertSumAggregateOutputType = {
    idConcert: number | null
    nbrPlaceDisponible: number | null
    idVille: number | null
  }

  export type ConcertMinAggregateOutputType = {
    idConcert: number | null
    dateConcert: Date | null
    nbrPlaceDisponible: number | null
    idVille: number | null
  }

  export type ConcertMaxAggregateOutputType = {
    idConcert: number | null
    dateConcert: Date | null
    nbrPlaceDisponible: number | null
    idVille: number | null
  }

  export type ConcertCountAggregateOutputType = {
    idConcert: number
    dateConcert: number
    nbrPlaceDisponible: number
    idVille: number
    _all: number
  }


  export type ConcertAvgAggregateInputType = {
    idConcert?: true
    nbrPlaceDisponible?: true
    idVille?: true
  }

  export type ConcertSumAggregateInputType = {
    idConcert?: true
    nbrPlaceDisponible?: true
    idVille?: true
  }

  export type ConcertMinAggregateInputType = {
    idConcert?: true
    dateConcert?: true
    nbrPlaceDisponible?: true
    idVille?: true
  }

  export type ConcertMaxAggregateInputType = {
    idConcert?: true
    dateConcert?: true
    nbrPlaceDisponible?: true
    idVille?: true
  }

  export type ConcertCountAggregateInputType = {
    idConcert?: true
    dateConcert?: true
    nbrPlaceDisponible?: true
    idVille?: true
    _all?: true
  }

  export type ConcertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concert to aggregate.
     */
    where?: ConcertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concerts to fetch.
     */
    orderBy?: ConcertOrderByWithRelationInput | ConcertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConcertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Concerts
    **/
    _count?: true | ConcertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConcertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConcertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConcertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConcertMaxAggregateInputType
  }

  export type GetConcertAggregateType<T extends ConcertAggregateArgs> = {
        [P in keyof T & keyof AggregateConcert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConcert[P]>
      : GetScalarType<T[P], AggregateConcert[P]>
  }




  export type ConcertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConcertWhereInput
    orderBy?: ConcertOrderByWithAggregationInput | ConcertOrderByWithAggregationInput[]
    by: ConcertScalarFieldEnum[] | ConcertScalarFieldEnum
    having?: ConcertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConcertCountAggregateInputType | true
    _avg?: ConcertAvgAggregateInputType
    _sum?: ConcertSumAggregateInputType
    _min?: ConcertMinAggregateInputType
    _max?: ConcertMaxAggregateInputType
  }

  export type ConcertGroupByOutputType = {
    idConcert: number
    dateConcert: Date | null
    nbrPlaceDisponible: number | null
    idVille: number
    _count: ConcertCountAggregateOutputType | null
    _avg: ConcertAvgAggregateOutputType | null
    _sum: ConcertSumAggregateOutputType | null
    _min: ConcertMinAggregateOutputType | null
    _max: ConcertMaxAggregateOutputType | null
  }

  type GetConcertGroupByPayload<T extends ConcertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConcertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConcertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConcertGroupByOutputType[P]>
            : GetScalarType<T[P], ConcertGroupByOutputType[P]>
        }
      >
    >


  export type ConcertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idConcert?: boolean
    dateConcert?: boolean
    nbrPlaceDisponible?: boolean
    idVille?: boolean
    Ville?: boolean | VilleDefaultArgs<ExtArgs>
    Joue?: boolean | Concert$JoueArgs<ExtArgs>
    Participe?: boolean | Concert$ParticipeArgs<ExtArgs>
    Realise?: boolean | Concert$RealiseArgs<ExtArgs>
    _count?: boolean | ConcertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concert"]>

  export type ConcertSelectScalar = {
    idConcert?: boolean
    dateConcert?: boolean
    nbrPlaceDisponible?: boolean
    idVille?: boolean
  }

  export type ConcertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ville?: boolean | VilleDefaultArgs<ExtArgs>
    Joue?: boolean | Concert$JoueArgs<ExtArgs>
    Participe?: boolean | Concert$ParticipeArgs<ExtArgs>
    Realise?: boolean | Concert$RealiseArgs<ExtArgs>
    _count?: boolean | ConcertCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConcertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Concert"
    objects: {
      Ville: Prisma.$VillePayload<ExtArgs>
      Joue: Prisma.$JouePayload<ExtArgs>[]
      Participe: Prisma.$ParticipePayload<ExtArgs>[]
      Realise: Prisma.$RealisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idConcert: number
      dateConcert: Date | null
      nbrPlaceDisponible: number | null
      idVille: number
    }, ExtArgs["result"]["concert"]>
    composites: {}
  }


  type ConcertGetPayload<S extends boolean | null | undefined | ConcertDefaultArgs> = $Result.GetResult<Prisma.$ConcertPayload, S>

  type ConcertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConcertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConcertCountAggregateInputType | true
    }

  export interface ConcertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Concert'], meta: { name: 'Concert' } }
    /**
     * Find zero or one Concert that matches the filter.
     * @param {ConcertFindUniqueArgs} args - Arguments to find a Concert
     * @example
     * // Get one Concert
     * const concert = await prisma.concert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConcertFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConcertFindUniqueArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Concert that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConcertFindUniqueOrThrowArgs} args - Arguments to find a Concert
     * @example
     * // Get one Concert
     * const concert = await prisma.concert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConcertFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConcertFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Concert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcertFindFirstArgs} args - Arguments to find a Concert
     * @example
     * // Get one Concert
     * const concert = await prisma.concert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConcertFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConcertFindFirstArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Concert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcertFindFirstOrThrowArgs} args - Arguments to find a Concert
     * @example
     * // Get one Concert
     * const concert = await prisma.concert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConcertFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConcertFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Concerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcertFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Concerts
     * const concerts = await prisma.concert.findMany()
     * 
     * // Get first 10 Concerts
     * const concerts = await prisma.concert.findMany({ take: 10 })
     * 
     * // Only select the `idConcert`
     * const concertWithIdConcertOnly = await prisma.concert.findMany({ select: { idConcert: true } })
     * 
    **/
    findMany<T extends ConcertFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConcertFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Concert.
     * @param {ConcertCreateArgs} args - Arguments to create a Concert.
     * @example
     * // Create one Concert
     * const Concert = await prisma.concert.create({
     *   data: {
     *     // ... data to create a Concert
     *   }
     * })
     * 
    **/
    create<T extends ConcertCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConcertCreateArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Concerts.
     *     @param {ConcertCreateManyArgs} args - Arguments to create many Concerts.
     *     @example
     *     // Create many Concerts
     *     const concert = await prisma.concert.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConcertCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConcertCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Concert.
     * @param {ConcertDeleteArgs} args - Arguments to delete one Concert.
     * @example
     * // Delete one Concert
     * const Concert = await prisma.concert.delete({
     *   where: {
     *     // ... filter to delete one Concert
     *   }
     * })
     * 
    **/
    delete<T extends ConcertDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConcertDeleteArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Concert.
     * @param {ConcertUpdateArgs} args - Arguments to update one Concert.
     * @example
     * // Update one Concert
     * const concert = await prisma.concert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConcertUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConcertUpdateArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Concerts.
     * @param {ConcertDeleteManyArgs} args - Arguments to filter Concerts to delete.
     * @example
     * // Delete a few Concerts
     * const { count } = await prisma.concert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConcertDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConcertDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Concerts
     * const concert = await prisma.concert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConcertUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConcertUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Concert.
     * @param {ConcertUpsertArgs} args - Arguments to update or create a Concert.
     * @example
     * // Update or create a Concert
     * const concert = await prisma.concert.upsert({
     *   create: {
     *     // ... data to create a Concert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Concert we want to update
     *   }
     * })
    **/
    upsert<T extends ConcertUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConcertUpsertArgs<ExtArgs>>
    ): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Concerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcertCountArgs} args - Arguments to filter Concerts to count.
     * @example
     * // Count the number of Concerts
     * const count = await prisma.concert.count({
     *   where: {
     *     // ... the filter for the Concerts we want to count
     *   }
     * })
    **/
    count<T extends ConcertCountArgs>(
      args?: Subset<T, ConcertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConcertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Concert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConcertAggregateArgs>(args: Subset<T, ConcertAggregateArgs>): Prisma.PrismaPromise<GetConcertAggregateType<T>>

    /**
     * Group by Concert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConcertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConcertGroupByArgs['orderBy'] }
        : { orderBy?: ConcertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConcertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConcertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Concert model
   */
  readonly fields: ConcertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Concert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConcertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Ville<T extends VilleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VilleDefaultArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Joue<T extends Concert$JoueArgs<ExtArgs> = {}>(args?: Subset<T, Concert$JoueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'findMany'> | Null>;

    Participe<T extends Concert$ParticipeArgs<ExtArgs> = {}>(args?: Subset<T, Concert$ParticipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'findMany'> | Null>;

    Realise<T extends Concert$RealiseArgs<ExtArgs> = {}>(args?: Subset<T, Concert$RealiseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Concert model
   */ 
  interface ConcertFieldRefs {
    readonly idConcert: FieldRef<"Concert", 'Int'>
    readonly dateConcert: FieldRef<"Concert", 'DateTime'>
    readonly nbrPlaceDisponible: FieldRef<"Concert", 'Int'>
    readonly idVille: FieldRef<"Concert", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Concert findUnique
   */
  export type ConcertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * Filter, which Concert to fetch.
     */
    where: ConcertWhereUniqueInput
  }


  /**
   * Concert findUniqueOrThrow
   */
  export type ConcertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * Filter, which Concert to fetch.
     */
    where: ConcertWhereUniqueInput
  }


  /**
   * Concert findFirst
   */
  export type ConcertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * Filter, which Concert to fetch.
     */
    where?: ConcertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concerts to fetch.
     */
    orderBy?: ConcertOrderByWithRelationInput | ConcertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concerts.
     */
    cursor?: ConcertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concerts.
     */
    distinct?: ConcertScalarFieldEnum | ConcertScalarFieldEnum[]
  }


  /**
   * Concert findFirstOrThrow
   */
  export type ConcertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * Filter, which Concert to fetch.
     */
    where?: ConcertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concerts to fetch.
     */
    orderBy?: ConcertOrderByWithRelationInput | ConcertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concerts.
     */
    cursor?: ConcertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concerts.
     */
    distinct?: ConcertScalarFieldEnum | ConcertScalarFieldEnum[]
  }


  /**
   * Concert findMany
   */
  export type ConcertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * Filter, which Concerts to fetch.
     */
    where?: ConcertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concerts to fetch.
     */
    orderBy?: ConcertOrderByWithRelationInput | ConcertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Concerts.
     */
    cursor?: ConcertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concerts.
     */
    skip?: number
    distinct?: ConcertScalarFieldEnum | ConcertScalarFieldEnum[]
  }


  /**
   * Concert create
   */
  export type ConcertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * The data needed to create a Concert.
     */
    data: XOR<ConcertCreateInput, ConcertUncheckedCreateInput>
  }


  /**
   * Concert createMany
   */
  export type ConcertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Concerts.
     */
    data: ConcertCreateManyInput | ConcertCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Concert update
   */
  export type ConcertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * The data needed to update a Concert.
     */
    data: XOR<ConcertUpdateInput, ConcertUncheckedUpdateInput>
    /**
     * Choose, which Concert to update.
     */
    where: ConcertWhereUniqueInput
  }


  /**
   * Concert updateMany
   */
  export type ConcertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Concerts.
     */
    data: XOR<ConcertUpdateManyMutationInput, ConcertUncheckedUpdateManyInput>
    /**
     * Filter which Concerts to update
     */
    where?: ConcertWhereInput
  }


  /**
   * Concert upsert
   */
  export type ConcertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * The filter to search for the Concert to update in case it exists.
     */
    where: ConcertWhereUniqueInput
    /**
     * In case the Concert found by the `where` argument doesn't exist, create a new Concert with this data.
     */
    create: XOR<ConcertCreateInput, ConcertUncheckedCreateInput>
    /**
     * In case the Concert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConcertUpdateInput, ConcertUncheckedUpdateInput>
  }


  /**
   * Concert delete
   */
  export type ConcertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    /**
     * Filter which Concert to delete.
     */
    where: ConcertWhereUniqueInput
  }


  /**
   * Concert deleteMany
   */
  export type ConcertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concerts to delete
     */
    where?: ConcertWhereInput
  }


  /**
   * Concert.Joue
   */
  export type Concert$JoueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    where?: JoueWhereInput
    orderBy?: JoueOrderByWithRelationInput | JoueOrderByWithRelationInput[]
    cursor?: JoueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoueScalarFieldEnum | JoueScalarFieldEnum[]
  }


  /**
   * Concert.Participe
   */
  export type Concert$ParticipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    where?: ParticipeWhereInput
    orderBy?: ParticipeOrderByWithRelationInput | ParticipeOrderByWithRelationInput[]
    cursor?: ParticipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipeScalarFieldEnum | ParticipeScalarFieldEnum[]
  }


  /**
   * Concert.Realise
   */
  export type Concert$RealiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    where?: RealiseWhereInput
    orderBy?: RealiseOrderByWithRelationInput | RealiseOrderByWithRelationInput[]
    cursor?: RealiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RealiseScalarFieldEnum | RealiseScalarFieldEnum[]
  }


  /**
   * Concert without action
   */
  export type ConcertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
  }



  /**
   * Model Joue
   */

  export type AggregateJoue = {
    _count: JoueCountAggregateOutputType | null
    _avg: JoueAvgAggregateOutputType | null
    _sum: JoueSumAggregateOutputType | null
    _min: JoueMinAggregateOutputType | null
    _max: JoueMaxAggregateOutputType | null
  }

  export type JoueAvgAggregateOutputType = {
    idConcert: number | null
    idStyle: number | null
  }

  export type JoueSumAggregateOutputType = {
    idConcert: number | null
    idStyle: number | null
  }

  export type JoueMinAggregateOutputType = {
    idConcert: number | null
    idStyle: number | null
  }

  export type JoueMaxAggregateOutputType = {
    idConcert: number | null
    idStyle: number | null
  }

  export type JoueCountAggregateOutputType = {
    idConcert: number
    idStyle: number
    _all: number
  }


  export type JoueAvgAggregateInputType = {
    idConcert?: true
    idStyle?: true
  }

  export type JoueSumAggregateInputType = {
    idConcert?: true
    idStyle?: true
  }

  export type JoueMinAggregateInputType = {
    idConcert?: true
    idStyle?: true
  }

  export type JoueMaxAggregateInputType = {
    idConcert?: true
    idStyle?: true
  }

  export type JoueCountAggregateInputType = {
    idConcert?: true
    idStyle?: true
    _all?: true
  }

  export type JoueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Joue to aggregate.
     */
    where?: JoueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joues to fetch.
     */
    orderBy?: JoueOrderByWithRelationInput | JoueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Joues
    **/
    _count?: true | JoueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JoueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JoueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoueMaxAggregateInputType
  }

  export type GetJoueAggregateType<T extends JoueAggregateArgs> = {
        [P in keyof T & keyof AggregateJoue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoue[P]>
      : GetScalarType<T[P], AggregateJoue[P]>
  }




  export type JoueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoueWhereInput
    orderBy?: JoueOrderByWithAggregationInput | JoueOrderByWithAggregationInput[]
    by: JoueScalarFieldEnum[] | JoueScalarFieldEnum
    having?: JoueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoueCountAggregateInputType | true
    _avg?: JoueAvgAggregateInputType
    _sum?: JoueSumAggregateInputType
    _min?: JoueMinAggregateInputType
    _max?: JoueMaxAggregateInputType
  }

  export type JoueGroupByOutputType = {
    idConcert: number
    idStyle: number
    _count: JoueCountAggregateOutputType | null
    _avg: JoueAvgAggregateOutputType | null
    _sum: JoueSumAggregateOutputType | null
    _min: JoueMinAggregateOutputType | null
    _max: JoueMaxAggregateOutputType | null
  }

  type GetJoueGroupByPayload<T extends JoueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoueGroupByOutputType[P]>
            : GetScalarType<T[P], JoueGroupByOutputType[P]>
        }
      >
    >


  export type JoueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idConcert?: boolean
    idStyle?: boolean
    Concert?: boolean | ConcertDefaultArgs<ExtArgs>
    Style?: boolean | StyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joue"]>

  export type JoueSelectScalar = {
    idConcert?: boolean
    idStyle?: boolean
  }

  export type JoueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Concert?: boolean | ConcertDefaultArgs<ExtArgs>
    Style?: boolean | StyleDefaultArgs<ExtArgs>
  }


  export type $JouePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Joue"
    objects: {
      Concert: Prisma.$ConcertPayload<ExtArgs>
      Style: Prisma.$StylePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idConcert: number
      idStyle: number
    }, ExtArgs["result"]["joue"]>
    composites: {}
  }


  type JoueGetPayload<S extends boolean | null | undefined | JoueDefaultArgs> = $Result.GetResult<Prisma.$JouePayload, S>

  type JoueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JoueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JoueCountAggregateInputType | true
    }

  export interface JoueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Joue'], meta: { name: 'Joue' } }
    /**
     * Find zero or one Joue that matches the filter.
     * @param {JoueFindUniqueArgs} args - Arguments to find a Joue
     * @example
     * // Get one Joue
     * const joue = await prisma.joue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JoueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JoueFindUniqueArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Joue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JoueFindUniqueOrThrowArgs} args - Arguments to find a Joue
     * @example
     * // Get one Joue
     * const joue = await prisma.joue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JoueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JoueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Joue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueFindFirstArgs} args - Arguments to find a Joue
     * @example
     * // Get one Joue
     * const joue = await prisma.joue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JoueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JoueFindFirstArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Joue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueFindFirstOrThrowArgs} args - Arguments to find a Joue
     * @example
     * // Get one Joue
     * const joue = await prisma.joue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JoueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JoueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Joues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Joues
     * const joues = await prisma.joue.findMany()
     * 
     * // Get first 10 Joues
     * const joues = await prisma.joue.findMany({ take: 10 })
     * 
     * // Only select the `idConcert`
     * const joueWithIdConcertOnly = await prisma.joue.findMany({ select: { idConcert: true } })
     * 
    **/
    findMany<T extends JoueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JoueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Joue.
     * @param {JoueCreateArgs} args - Arguments to create a Joue.
     * @example
     * // Create one Joue
     * const Joue = await prisma.joue.create({
     *   data: {
     *     // ... data to create a Joue
     *   }
     * })
     * 
    **/
    create<T extends JoueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JoueCreateArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Joues.
     *     @param {JoueCreateManyArgs} args - Arguments to create many Joues.
     *     @example
     *     // Create many Joues
     *     const joue = await prisma.joue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JoueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JoueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Joue.
     * @param {JoueDeleteArgs} args - Arguments to delete one Joue.
     * @example
     * // Delete one Joue
     * const Joue = await prisma.joue.delete({
     *   where: {
     *     // ... filter to delete one Joue
     *   }
     * })
     * 
    **/
    delete<T extends JoueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JoueDeleteArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Joue.
     * @param {JoueUpdateArgs} args - Arguments to update one Joue.
     * @example
     * // Update one Joue
     * const joue = await prisma.joue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JoueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JoueUpdateArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Joues.
     * @param {JoueDeleteManyArgs} args - Arguments to filter Joues to delete.
     * @example
     * // Delete a few Joues
     * const { count } = await prisma.joue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JoueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JoueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Joues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Joues
     * const joue = await prisma.joue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JoueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JoueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Joue.
     * @param {JoueUpsertArgs} args - Arguments to update or create a Joue.
     * @example
     * // Update or create a Joue
     * const joue = await prisma.joue.upsert({
     *   create: {
     *     // ... data to create a Joue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Joue we want to update
     *   }
     * })
    **/
    upsert<T extends JoueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JoueUpsertArgs<ExtArgs>>
    ): Prisma__JoueClient<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Joues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueCountArgs} args - Arguments to filter Joues to count.
     * @example
     * // Count the number of Joues
     * const count = await prisma.joue.count({
     *   where: {
     *     // ... the filter for the Joues we want to count
     *   }
     * })
    **/
    count<T extends JoueCountArgs>(
      args?: Subset<T, JoueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Joue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoueAggregateArgs>(args: Subset<T, JoueAggregateArgs>): Prisma.PrismaPromise<GetJoueAggregateType<T>>

    /**
     * Group by Joue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoueGroupByArgs['orderBy'] }
        : { orderBy?: JoueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Joue model
   */
  readonly fields: JoueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Joue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Concert<T extends ConcertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConcertDefaultArgs<ExtArgs>>): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Style<T extends StyleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StyleDefaultArgs<ExtArgs>>): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Joue model
   */ 
  interface JoueFieldRefs {
    readonly idConcert: FieldRef<"Joue", 'Int'>
    readonly idStyle: FieldRef<"Joue", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Joue findUnique
   */
  export type JoueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * Filter, which Joue to fetch.
     */
    where: JoueWhereUniqueInput
  }


  /**
   * Joue findUniqueOrThrow
   */
  export type JoueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * Filter, which Joue to fetch.
     */
    where: JoueWhereUniqueInput
  }


  /**
   * Joue findFirst
   */
  export type JoueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * Filter, which Joue to fetch.
     */
    where?: JoueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joues to fetch.
     */
    orderBy?: JoueOrderByWithRelationInput | JoueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Joues.
     */
    cursor?: JoueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Joues.
     */
    distinct?: JoueScalarFieldEnum | JoueScalarFieldEnum[]
  }


  /**
   * Joue findFirstOrThrow
   */
  export type JoueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * Filter, which Joue to fetch.
     */
    where?: JoueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joues to fetch.
     */
    orderBy?: JoueOrderByWithRelationInput | JoueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Joues.
     */
    cursor?: JoueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Joues.
     */
    distinct?: JoueScalarFieldEnum | JoueScalarFieldEnum[]
  }


  /**
   * Joue findMany
   */
  export type JoueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * Filter, which Joues to fetch.
     */
    where?: JoueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joues to fetch.
     */
    orderBy?: JoueOrderByWithRelationInput | JoueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Joues.
     */
    cursor?: JoueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joues.
     */
    skip?: number
    distinct?: JoueScalarFieldEnum | JoueScalarFieldEnum[]
  }


  /**
   * Joue create
   */
  export type JoueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * The data needed to create a Joue.
     */
    data: XOR<JoueCreateInput, JoueUncheckedCreateInput>
  }


  /**
   * Joue createMany
   */
  export type JoueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Joues.
     */
    data: JoueCreateManyInput | JoueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Joue update
   */
  export type JoueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * The data needed to update a Joue.
     */
    data: XOR<JoueUpdateInput, JoueUncheckedUpdateInput>
    /**
     * Choose, which Joue to update.
     */
    where: JoueWhereUniqueInput
  }


  /**
   * Joue updateMany
   */
  export type JoueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Joues.
     */
    data: XOR<JoueUpdateManyMutationInput, JoueUncheckedUpdateManyInput>
    /**
     * Filter which Joues to update
     */
    where?: JoueWhereInput
  }


  /**
   * Joue upsert
   */
  export type JoueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * The filter to search for the Joue to update in case it exists.
     */
    where: JoueWhereUniqueInput
    /**
     * In case the Joue found by the `where` argument doesn't exist, create a new Joue with this data.
     */
    create: XOR<JoueCreateInput, JoueUncheckedCreateInput>
    /**
     * In case the Joue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoueUpdateInput, JoueUncheckedUpdateInput>
  }


  /**
   * Joue delete
   */
  export type JoueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    /**
     * Filter which Joue to delete.
     */
    where: JoueWhereUniqueInput
  }


  /**
   * Joue deleteMany
   */
  export type JoueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Joues to delete
     */
    where?: JoueWhereInput
  }


  /**
   * Joue without action
   */
  export type JoueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
  }



  /**
   * Model Participe
   */

  export type AggregateParticipe = {
    _count: ParticipeCountAggregateOutputType | null
    _avg: ParticipeAvgAggregateOutputType | null
    _sum: ParticipeSumAggregateOutputType | null
    _min: ParticipeMinAggregateOutputType | null
    _max: ParticipeMaxAggregateOutputType | null
  }

  export type ParticipeAvgAggregateOutputType = {
    idConcert: number | null
    idVisiteur: number | null
  }

  export type ParticipeSumAggregateOutputType = {
    idConcert: number | null
    idVisiteur: number | null
  }

  export type ParticipeMinAggregateOutputType = {
    idConcert: number | null
    idVisiteur: number | null
  }

  export type ParticipeMaxAggregateOutputType = {
    idConcert: number | null
    idVisiteur: number | null
  }

  export type ParticipeCountAggregateOutputType = {
    idConcert: number
    idVisiteur: number
    _all: number
  }


  export type ParticipeAvgAggregateInputType = {
    idConcert?: true
    idVisiteur?: true
  }

  export type ParticipeSumAggregateInputType = {
    idConcert?: true
    idVisiteur?: true
  }

  export type ParticipeMinAggregateInputType = {
    idConcert?: true
    idVisiteur?: true
  }

  export type ParticipeMaxAggregateInputType = {
    idConcert?: true
    idVisiteur?: true
  }

  export type ParticipeCountAggregateInputType = {
    idConcert?: true
    idVisiteur?: true
    _all?: true
  }

  export type ParticipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participe to aggregate.
     */
    where?: ParticipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participes to fetch.
     */
    orderBy?: ParticipeOrderByWithRelationInput | ParticipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participes
    **/
    _count?: true | ParticipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipeMaxAggregateInputType
  }

  export type GetParticipeAggregateType<T extends ParticipeAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipe[P]>
      : GetScalarType<T[P], AggregateParticipe[P]>
  }




  export type ParticipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipeWhereInput
    orderBy?: ParticipeOrderByWithAggregationInput | ParticipeOrderByWithAggregationInput[]
    by: ParticipeScalarFieldEnum[] | ParticipeScalarFieldEnum
    having?: ParticipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipeCountAggregateInputType | true
    _avg?: ParticipeAvgAggregateInputType
    _sum?: ParticipeSumAggregateInputType
    _min?: ParticipeMinAggregateInputType
    _max?: ParticipeMaxAggregateInputType
  }

  export type ParticipeGroupByOutputType = {
    idConcert: number
    idVisiteur: number
    _count: ParticipeCountAggregateOutputType | null
    _avg: ParticipeAvgAggregateOutputType | null
    _sum: ParticipeSumAggregateOutputType | null
    _min: ParticipeMinAggregateOutputType | null
    _max: ParticipeMaxAggregateOutputType | null
  }

  type GetParticipeGroupByPayload<T extends ParticipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipeGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipeGroupByOutputType[P]>
        }
      >
    >


  export type ParticipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idConcert?: boolean
    idVisiteur?: boolean
    Concert?: boolean | ConcertDefaultArgs<ExtArgs>
    Visiteur?: boolean | VisiteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participe"]>

  export type ParticipeSelectScalar = {
    idConcert?: boolean
    idVisiteur?: boolean
  }

  export type ParticipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Concert?: boolean | ConcertDefaultArgs<ExtArgs>
    Visiteur?: boolean | VisiteurDefaultArgs<ExtArgs>
  }


  export type $ParticipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participe"
    objects: {
      Concert: Prisma.$ConcertPayload<ExtArgs>
      Visiteur: Prisma.$VisiteurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idConcert: number
      idVisiteur: number
    }, ExtArgs["result"]["participe"]>
    composites: {}
  }


  type ParticipeGetPayload<S extends boolean | null | undefined | ParticipeDefaultArgs> = $Result.GetResult<Prisma.$ParticipePayload, S>

  type ParticipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParticipeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParticipeCountAggregateInputType | true
    }

  export interface ParticipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participe'], meta: { name: 'Participe' } }
    /**
     * Find zero or one Participe that matches the filter.
     * @param {ParticipeFindUniqueArgs} args - Arguments to find a Participe
     * @example
     * // Get one Participe
     * const participe = await prisma.participe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParticipeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipeFindUniqueArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Participe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParticipeFindUniqueOrThrowArgs} args - Arguments to find a Participe
     * @example
     * // Get one Participe
     * const participe = await prisma.participe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParticipeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Participe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipeFindFirstArgs} args - Arguments to find a Participe
     * @example
     * // Get one Participe
     * const participe = await prisma.participe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParticipeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipeFindFirstArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Participe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipeFindFirstOrThrowArgs} args - Arguments to find a Participe
     * @example
     * // Get one Participe
     * const participe = await prisma.participe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParticipeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Participes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participes
     * const participes = await prisma.participe.findMany()
     * 
     * // Get first 10 Participes
     * const participes = await prisma.participe.findMany({ take: 10 })
     * 
     * // Only select the `idConcert`
     * const participeWithIdConcertOnly = await prisma.participe.findMany({ select: { idConcert: true } })
     * 
    **/
    findMany<T extends ParticipeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Participe.
     * @param {ParticipeCreateArgs} args - Arguments to create a Participe.
     * @example
     * // Create one Participe
     * const Participe = await prisma.participe.create({
     *   data: {
     *     // ... data to create a Participe
     *   }
     * })
     * 
    **/
    create<T extends ParticipeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipeCreateArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Participes.
     *     @param {ParticipeCreateManyArgs} args - Arguments to create many Participes.
     *     @example
     *     // Create many Participes
     *     const participe = await prisma.participe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParticipeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participe.
     * @param {ParticipeDeleteArgs} args - Arguments to delete one Participe.
     * @example
     * // Delete one Participe
     * const Participe = await prisma.participe.delete({
     *   where: {
     *     // ... filter to delete one Participe
     *   }
     * })
     * 
    **/
    delete<T extends ParticipeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipeDeleteArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Participe.
     * @param {ParticipeUpdateArgs} args - Arguments to update one Participe.
     * @example
     * // Update one Participe
     * const participe = await prisma.participe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParticipeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipeUpdateArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Participes.
     * @param {ParticipeDeleteManyArgs} args - Arguments to filter Participes to delete.
     * @example
     * // Delete a few Participes
     * const { count } = await prisma.participe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParticipeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participes
     * const participe = await prisma.participe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParticipeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participe.
     * @param {ParticipeUpsertArgs} args - Arguments to update or create a Participe.
     * @example
     * // Update or create a Participe
     * const participe = await prisma.participe.upsert({
     *   create: {
     *     // ... data to create a Participe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participe we want to update
     *   }
     * })
    **/
    upsert<T extends ParticipeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipeUpsertArgs<ExtArgs>>
    ): Prisma__ParticipeClient<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Participes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipeCountArgs} args - Arguments to filter Participes to count.
     * @example
     * // Count the number of Participes
     * const count = await prisma.participe.count({
     *   where: {
     *     // ... the filter for the Participes we want to count
     *   }
     * })
    **/
    count<T extends ParticipeCountArgs>(
      args?: Subset<T, ParticipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipeAggregateArgs>(args: Subset<T, ParticipeAggregateArgs>): Prisma.PrismaPromise<GetParticipeAggregateType<T>>

    /**
     * Group by Participe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipeGroupByArgs['orderBy'] }
        : { orderBy?: ParticipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participe model
   */
  readonly fields: ParticipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Concert<T extends ConcertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConcertDefaultArgs<ExtArgs>>): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Visiteur<T extends VisiteurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisiteurDefaultArgs<ExtArgs>>): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Participe model
   */ 
  interface ParticipeFieldRefs {
    readonly idConcert: FieldRef<"Participe", 'Int'>
    readonly idVisiteur: FieldRef<"Participe", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Participe findUnique
   */
  export type ParticipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * Filter, which Participe to fetch.
     */
    where: ParticipeWhereUniqueInput
  }


  /**
   * Participe findUniqueOrThrow
   */
  export type ParticipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * Filter, which Participe to fetch.
     */
    where: ParticipeWhereUniqueInput
  }


  /**
   * Participe findFirst
   */
  export type ParticipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * Filter, which Participe to fetch.
     */
    where?: ParticipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participes to fetch.
     */
    orderBy?: ParticipeOrderByWithRelationInput | ParticipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participes.
     */
    cursor?: ParticipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participes.
     */
    distinct?: ParticipeScalarFieldEnum | ParticipeScalarFieldEnum[]
  }


  /**
   * Participe findFirstOrThrow
   */
  export type ParticipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * Filter, which Participe to fetch.
     */
    where?: ParticipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participes to fetch.
     */
    orderBy?: ParticipeOrderByWithRelationInput | ParticipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participes.
     */
    cursor?: ParticipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participes.
     */
    distinct?: ParticipeScalarFieldEnum | ParticipeScalarFieldEnum[]
  }


  /**
   * Participe findMany
   */
  export type ParticipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * Filter, which Participes to fetch.
     */
    where?: ParticipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participes to fetch.
     */
    orderBy?: ParticipeOrderByWithRelationInput | ParticipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participes.
     */
    cursor?: ParticipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participes.
     */
    skip?: number
    distinct?: ParticipeScalarFieldEnum | ParticipeScalarFieldEnum[]
  }


  /**
   * Participe create
   */
  export type ParticipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Participe.
     */
    data: XOR<ParticipeCreateInput, ParticipeUncheckedCreateInput>
  }


  /**
   * Participe createMany
   */
  export type ParticipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participes.
     */
    data: ParticipeCreateManyInput | ParticipeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Participe update
   */
  export type ParticipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Participe.
     */
    data: XOR<ParticipeUpdateInput, ParticipeUncheckedUpdateInput>
    /**
     * Choose, which Participe to update.
     */
    where: ParticipeWhereUniqueInput
  }


  /**
   * Participe updateMany
   */
  export type ParticipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participes.
     */
    data: XOR<ParticipeUpdateManyMutationInput, ParticipeUncheckedUpdateManyInput>
    /**
     * Filter which Participes to update
     */
    where?: ParticipeWhereInput
  }


  /**
   * Participe upsert
   */
  export type ParticipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Participe to update in case it exists.
     */
    where: ParticipeWhereUniqueInput
    /**
     * In case the Participe found by the `where` argument doesn't exist, create a new Participe with this data.
     */
    create: XOR<ParticipeCreateInput, ParticipeUncheckedCreateInput>
    /**
     * In case the Participe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipeUpdateInput, ParticipeUncheckedUpdateInput>
  }


  /**
   * Participe delete
   */
  export type ParticipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    /**
     * Filter which Participe to delete.
     */
    where: ParticipeWhereUniqueInput
  }


  /**
   * Participe deleteMany
   */
  export type ParticipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participes to delete
     */
    where?: ParticipeWhereInput
  }


  /**
   * Participe without action
   */
  export type ParticipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
  }



  /**
   * Model Realise
   */

  export type AggregateRealise = {
    _count: RealiseCountAggregateOutputType | null
    _avg: RealiseAvgAggregateOutputType | null
    _sum: RealiseSumAggregateOutputType | null
    _min: RealiseMinAggregateOutputType | null
    _max: RealiseMaxAggregateOutputType | null
  }

  export type RealiseAvgAggregateOutputType = {
    IdArtiste: number | null
    idConcert: number | null
  }

  export type RealiseSumAggregateOutputType = {
    IdArtiste: number | null
    idConcert: number | null
  }

  export type RealiseMinAggregateOutputType = {
    IdArtiste: number | null
    idConcert: number | null
  }

  export type RealiseMaxAggregateOutputType = {
    IdArtiste: number | null
    idConcert: number | null
  }

  export type RealiseCountAggregateOutputType = {
    IdArtiste: number
    idConcert: number
    _all: number
  }


  export type RealiseAvgAggregateInputType = {
    IdArtiste?: true
    idConcert?: true
  }

  export type RealiseSumAggregateInputType = {
    IdArtiste?: true
    idConcert?: true
  }

  export type RealiseMinAggregateInputType = {
    IdArtiste?: true
    idConcert?: true
  }

  export type RealiseMaxAggregateInputType = {
    IdArtiste?: true
    idConcert?: true
  }

  export type RealiseCountAggregateInputType = {
    IdArtiste?: true
    idConcert?: true
    _all?: true
  }

  export type RealiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Realise to aggregate.
     */
    where?: RealiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realises to fetch.
     */
    orderBy?: RealiseOrderByWithRelationInput | RealiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Realises
    **/
    _count?: true | RealiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealiseMaxAggregateInputType
  }

  export type GetRealiseAggregateType<T extends RealiseAggregateArgs> = {
        [P in keyof T & keyof AggregateRealise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealise[P]>
      : GetScalarType<T[P], AggregateRealise[P]>
  }




  export type RealiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealiseWhereInput
    orderBy?: RealiseOrderByWithAggregationInput | RealiseOrderByWithAggregationInput[]
    by: RealiseScalarFieldEnum[] | RealiseScalarFieldEnum
    having?: RealiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealiseCountAggregateInputType | true
    _avg?: RealiseAvgAggregateInputType
    _sum?: RealiseSumAggregateInputType
    _min?: RealiseMinAggregateInputType
    _max?: RealiseMaxAggregateInputType
  }

  export type RealiseGroupByOutputType = {
    IdArtiste: number
    idConcert: number
    _count: RealiseCountAggregateOutputType | null
    _avg: RealiseAvgAggregateOutputType | null
    _sum: RealiseSumAggregateOutputType | null
    _min: RealiseMinAggregateOutputType | null
    _max: RealiseMaxAggregateOutputType | null
  }

  type GetRealiseGroupByPayload<T extends RealiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RealiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealiseGroupByOutputType[P]>
            : GetScalarType<T[P], RealiseGroupByOutputType[P]>
        }
      >
    >


  export type RealiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdArtiste?: boolean
    idConcert?: boolean
    Artiste?: boolean | ArtisteDefaultArgs<ExtArgs>
    Concert?: boolean | ConcertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realise"]>

  export type RealiseSelectScalar = {
    IdArtiste?: boolean
    idConcert?: boolean
  }

  export type RealiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artiste?: boolean | ArtisteDefaultArgs<ExtArgs>
    Concert?: boolean | ConcertDefaultArgs<ExtArgs>
  }


  export type $RealisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Realise"
    objects: {
      Artiste: Prisma.$ArtistePayload<ExtArgs>
      Concert: Prisma.$ConcertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdArtiste: number
      idConcert: number
    }, ExtArgs["result"]["realise"]>
    composites: {}
  }


  type RealiseGetPayload<S extends boolean | null | undefined | RealiseDefaultArgs> = $Result.GetResult<Prisma.$RealisePayload, S>

  type RealiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RealiseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RealiseCountAggregateInputType | true
    }

  export interface RealiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Realise'], meta: { name: 'Realise' } }
    /**
     * Find zero or one Realise that matches the filter.
     * @param {RealiseFindUniqueArgs} args - Arguments to find a Realise
     * @example
     * // Get one Realise
     * const realise = await prisma.realise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealiseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RealiseFindUniqueArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Realise that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealiseFindUniqueOrThrowArgs} args - Arguments to find a Realise
     * @example
     * // Get one Realise
     * const realise = await prisma.realise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealiseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RealiseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Realise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealiseFindFirstArgs} args - Arguments to find a Realise
     * @example
     * // Get one Realise
     * const realise = await prisma.realise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealiseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RealiseFindFirstArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Realise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealiseFindFirstOrThrowArgs} args - Arguments to find a Realise
     * @example
     * // Get one Realise
     * const realise = await prisma.realise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealiseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RealiseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Realises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealiseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Realises
     * const realises = await prisma.realise.findMany()
     * 
     * // Get first 10 Realises
     * const realises = await prisma.realise.findMany({ take: 10 })
     * 
     * // Only select the `IdArtiste`
     * const realiseWithIdArtisteOnly = await prisma.realise.findMany({ select: { IdArtiste: true } })
     * 
    **/
    findMany<T extends RealiseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RealiseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Realise.
     * @param {RealiseCreateArgs} args - Arguments to create a Realise.
     * @example
     * // Create one Realise
     * const Realise = await prisma.realise.create({
     *   data: {
     *     // ... data to create a Realise
     *   }
     * })
     * 
    **/
    create<T extends RealiseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RealiseCreateArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Realises.
     *     @param {RealiseCreateManyArgs} args - Arguments to create many Realises.
     *     @example
     *     // Create many Realises
     *     const realise = await prisma.realise.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealiseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RealiseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Realise.
     * @param {RealiseDeleteArgs} args - Arguments to delete one Realise.
     * @example
     * // Delete one Realise
     * const Realise = await prisma.realise.delete({
     *   where: {
     *     // ... filter to delete one Realise
     *   }
     * })
     * 
    **/
    delete<T extends RealiseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RealiseDeleteArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Realise.
     * @param {RealiseUpdateArgs} args - Arguments to update one Realise.
     * @example
     * // Update one Realise
     * const realise = await prisma.realise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealiseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RealiseUpdateArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Realises.
     * @param {RealiseDeleteManyArgs} args - Arguments to filter Realises to delete.
     * @example
     * // Delete a few Realises
     * const { count } = await prisma.realise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealiseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RealiseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Realises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Realises
     * const realise = await prisma.realise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealiseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RealiseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Realise.
     * @param {RealiseUpsertArgs} args - Arguments to update or create a Realise.
     * @example
     * // Update or create a Realise
     * const realise = await prisma.realise.upsert({
     *   create: {
     *     // ... data to create a Realise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Realise we want to update
     *   }
     * })
    **/
    upsert<T extends RealiseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RealiseUpsertArgs<ExtArgs>>
    ): Prisma__RealiseClient<$Result.GetResult<Prisma.$RealisePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Realises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealiseCountArgs} args - Arguments to filter Realises to count.
     * @example
     * // Count the number of Realises
     * const count = await prisma.realise.count({
     *   where: {
     *     // ... the filter for the Realises we want to count
     *   }
     * })
    **/
    count<T extends RealiseCountArgs>(
      args?: Subset<T, RealiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Realise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealiseAggregateArgs>(args: Subset<T, RealiseAggregateArgs>): Prisma.PrismaPromise<GetRealiseAggregateType<T>>

    /**
     * Group by Realise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealiseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealiseGroupByArgs['orderBy'] }
        : { orderBy?: RealiseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Realise model
   */
  readonly fields: RealiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Realise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RealiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Artiste<T extends ArtisteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtisteDefaultArgs<ExtArgs>>): Prisma__ArtisteClient<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Concert<T extends ConcertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConcertDefaultArgs<ExtArgs>>): Prisma__ConcertClient<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Realise model
   */ 
  interface RealiseFieldRefs {
    readonly IdArtiste: FieldRef<"Realise", 'Int'>
    readonly idConcert: FieldRef<"Realise", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Realise findUnique
   */
  export type RealiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * Filter, which Realise to fetch.
     */
    where: RealiseWhereUniqueInput
  }


  /**
   * Realise findUniqueOrThrow
   */
  export type RealiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * Filter, which Realise to fetch.
     */
    where: RealiseWhereUniqueInput
  }


  /**
   * Realise findFirst
   */
  export type RealiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * Filter, which Realise to fetch.
     */
    where?: RealiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realises to fetch.
     */
    orderBy?: RealiseOrderByWithRelationInput | RealiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Realises.
     */
    cursor?: RealiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Realises.
     */
    distinct?: RealiseScalarFieldEnum | RealiseScalarFieldEnum[]
  }


  /**
   * Realise findFirstOrThrow
   */
  export type RealiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * Filter, which Realise to fetch.
     */
    where?: RealiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realises to fetch.
     */
    orderBy?: RealiseOrderByWithRelationInput | RealiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Realises.
     */
    cursor?: RealiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Realises.
     */
    distinct?: RealiseScalarFieldEnum | RealiseScalarFieldEnum[]
  }


  /**
   * Realise findMany
   */
  export type RealiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * Filter, which Realises to fetch.
     */
    where?: RealiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realises to fetch.
     */
    orderBy?: RealiseOrderByWithRelationInput | RealiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Realises.
     */
    cursor?: RealiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realises.
     */
    skip?: number
    distinct?: RealiseScalarFieldEnum | RealiseScalarFieldEnum[]
  }


  /**
   * Realise create
   */
  export type RealiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * The data needed to create a Realise.
     */
    data: XOR<RealiseCreateInput, RealiseUncheckedCreateInput>
  }


  /**
   * Realise createMany
   */
  export type RealiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Realises.
     */
    data: RealiseCreateManyInput | RealiseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Realise update
   */
  export type RealiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * The data needed to update a Realise.
     */
    data: XOR<RealiseUpdateInput, RealiseUncheckedUpdateInput>
    /**
     * Choose, which Realise to update.
     */
    where: RealiseWhereUniqueInput
  }


  /**
   * Realise updateMany
   */
  export type RealiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Realises.
     */
    data: XOR<RealiseUpdateManyMutationInput, RealiseUncheckedUpdateManyInput>
    /**
     * Filter which Realises to update
     */
    where?: RealiseWhereInput
  }


  /**
   * Realise upsert
   */
  export type RealiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * The filter to search for the Realise to update in case it exists.
     */
    where: RealiseWhereUniqueInput
    /**
     * In case the Realise found by the `where` argument doesn't exist, create a new Realise with this data.
     */
    create: XOR<RealiseCreateInput, RealiseUncheckedCreateInput>
    /**
     * In case the Realise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealiseUpdateInput, RealiseUncheckedUpdateInput>
  }


  /**
   * Realise delete
   */
  export type RealiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
    /**
     * Filter which Realise to delete.
     */
    where: RealiseWhereUniqueInput
  }


  /**
   * Realise deleteMany
   */
  export type RealiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Realises to delete
     */
    where?: RealiseWhereInput
  }


  /**
   * Realise without action
   */
  export type RealiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realise
     */
    select?: RealiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealiseInclude<ExtArgs> | null
  }



  /**
   * Model Style
   */

  export type AggregateStyle = {
    _count: StyleCountAggregateOutputType | null
    _avg: StyleAvgAggregateOutputType | null
    _sum: StyleSumAggregateOutputType | null
    _min: StyleMinAggregateOutputType | null
    _max: StyleMaxAggregateOutputType | null
  }

  export type StyleAvgAggregateOutputType = {
    idStyle: number | null
  }

  export type StyleSumAggregateOutputType = {
    idStyle: number | null
  }

  export type StyleMinAggregateOutputType = {
    idStyle: number | null
    libelle: string | null
    description: string | null
  }

  export type StyleMaxAggregateOutputType = {
    idStyle: number | null
    libelle: string | null
    description: string | null
  }

  export type StyleCountAggregateOutputType = {
    idStyle: number
    libelle: number
    description: number
    _all: number
  }


  export type StyleAvgAggregateInputType = {
    idStyle?: true
  }

  export type StyleSumAggregateInputType = {
    idStyle?: true
  }

  export type StyleMinAggregateInputType = {
    idStyle?: true
    libelle?: true
    description?: true
  }

  export type StyleMaxAggregateInputType = {
    idStyle?: true
    libelle?: true
    description?: true
  }

  export type StyleCountAggregateInputType = {
    idStyle?: true
    libelle?: true
    description?: true
    _all?: true
  }

  export type StyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Style to aggregate.
     */
    where?: StyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Styles to fetch.
     */
    orderBy?: StyleOrderByWithRelationInput | StyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Styles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Styles
    **/
    _count?: true | StyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StyleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StyleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StyleMaxAggregateInputType
  }

  export type GetStyleAggregateType<T extends StyleAggregateArgs> = {
        [P in keyof T & keyof AggregateStyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStyle[P]>
      : GetScalarType<T[P], AggregateStyle[P]>
  }




  export type StyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StyleWhereInput
    orderBy?: StyleOrderByWithAggregationInput | StyleOrderByWithAggregationInput[]
    by: StyleScalarFieldEnum[] | StyleScalarFieldEnum
    having?: StyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StyleCountAggregateInputType | true
    _avg?: StyleAvgAggregateInputType
    _sum?: StyleSumAggregateInputType
    _min?: StyleMinAggregateInputType
    _max?: StyleMaxAggregateInputType
  }

  export type StyleGroupByOutputType = {
    idStyle: number
    libelle: string | null
    description: string | null
    _count: StyleCountAggregateOutputType | null
    _avg: StyleAvgAggregateOutputType | null
    _sum: StyleSumAggregateOutputType | null
    _min: StyleMinAggregateOutputType | null
    _max: StyleMaxAggregateOutputType | null
  }

  type GetStyleGroupByPayload<T extends StyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StyleGroupByOutputType[P]>
            : GetScalarType<T[P], StyleGroupByOutputType[P]>
        }
      >
    >


  export type StyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idStyle?: boolean
    libelle?: boolean
    description?: boolean
    Artiste?: boolean | Style$ArtisteArgs<ExtArgs>
    Joue?: boolean | Style$JoueArgs<ExtArgs>
    _count?: boolean | StyleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["style"]>

  export type StyleSelectScalar = {
    idStyle?: boolean
    libelle?: boolean
    description?: boolean
  }

  export type StyleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artiste?: boolean | Style$ArtisteArgs<ExtArgs>
    Joue?: boolean | Style$JoueArgs<ExtArgs>
    _count?: boolean | StyleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Style"
    objects: {
      Artiste: Prisma.$ArtistePayload<ExtArgs>[]
      Joue: Prisma.$JouePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idStyle: number
      libelle: string | null
      description: string | null
    }, ExtArgs["result"]["style"]>
    composites: {}
  }


  type StyleGetPayload<S extends boolean | null | undefined | StyleDefaultArgs> = $Result.GetResult<Prisma.$StylePayload, S>

  type StyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StyleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StyleCountAggregateInputType | true
    }

  export interface StyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Style'], meta: { name: 'Style' } }
    /**
     * Find zero or one Style that matches the filter.
     * @param {StyleFindUniqueArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StyleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StyleFindUniqueArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Style that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StyleFindUniqueOrThrowArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StyleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StyleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Style that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleFindFirstArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StyleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StyleFindFirstArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Style that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleFindFirstOrThrowArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StyleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StyleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Styles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Styles
     * const styles = await prisma.style.findMany()
     * 
     * // Get first 10 Styles
     * const styles = await prisma.style.findMany({ take: 10 })
     * 
     * // Only select the `idStyle`
     * const styleWithIdStyleOnly = await prisma.style.findMany({ select: { idStyle: true } })
     * 
    **/
    findMany<T extends StyleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StyleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Style.
     * @param {StyleCreateArgs} args - Arguments to create a Style.
     * @example
     * // Create one Style
     * const Style = await prisma.style.create({
     *   data: {
     *     // ... data to create a Style
     *   }
     * })
     * 
    **/
    create<T extends StyleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StyleCreateArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Styles.
     *     @param {StyleCreateManyArgs} args - Arguments to create many Styles.
     *     @example
     *     // Create many Styles
     *     const style = await prisma.style.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StyleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StyleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Style.
     * @param {StyleDeleteArgs} args - Arguments to delete one Style.
     * @example
     * // Delete one Style
     * const Style = await prisma.style.delete({
     *   where: {
     *     // ... filter to delete one Style
     *   }
     * })
     * 
    **/
    delete<T extends StyleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StyleDeleteArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Style.
     * @param {StyleUpdateArgs} args - Arguments to update one Style.
     * @example
     * // Update one Style
     * const style = await prisma.style.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StyleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StyleUpdateArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Styles.
     * @param {StyleDeleteManyArgs} args - Arguments to filter Styles to delete.
     * @example
     * // Delete a few Styles
     * const { count } = await prisma.style.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StyleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StyleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Styles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Styles
     * const style = await prisma.style.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StyleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StyleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Style.
     * @param {StyleUpsertArgs} args - Arguments to update or create a Style.
     * @example
     * // Update or create a Style
     * const style = await prisma.style.upsert({
     *   create: {
     *     // ... data to create a Style
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Style we want to update
     *   }
     * })
    **/
    upsert<T extends StyleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StyleUpsertArgs<ExtArgs>>
    ): Prisma__StyleClient<$Result.GetResult<Prisma.$StylePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Styles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleCountArgs} args - Arguments to filter Styles to count.
     * @example
     * // Count the number of Styles
     * const count = await prisma.style.count({
     *   where: {
     *     // ... the filter for the Styles we want to count
     *   }
     * })
    **/
    count<T extends StyleCountArgs>(
      args?: Subset<T, StyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Style.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StyleAggregateArgs>(args: Subset<T, StyleAggregateArgs>): Prisma.PrismaPromise<GetStyleAggregateType<T>>

    /**
     * Group by Style.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StyleGroupByArgs['orderBy'] }
        : { orderBy?: StyleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Style model
   */
  readonly fields: StyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Style.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Artiste<T extends Style$ArtisteArgs<ExtArgs> = {}>(args?: Subset<T, Style$ArtisteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistePayload<ExtArgs>, T, 'findMany'> | Null>;

    Joue<T extends Style$JoueArgs<ExtArgs> = {}>(args?: Subset<T, Style$JoueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JouePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Style model
   */ 
  interface StyleFieldRefs {
    readonly idStyle: FieldRef<"Style", 'Int'>
    readonly libelle: FieldRef<"Style", 'String'>
    readonly description: FieldRef<"Style", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Style findUnique
   */
  export type StyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * Filter, which Style to fetch.
     */
    where: StyleWhereUniqueInput
  }


  /**
   * Style findUniqueOrThrow
   */
  export type StyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * Filter, which Style to fetch.
     */
    where: StyleWhereUniqueInput
  }


  /**
   * Style findFirst
   */
  export type StyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * Filter, which Style to fetch.
     */
    where?: StyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Styles to fetch.
     */
    orderBy?: StyleOrderByWithRelationInput | StyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Styles.
     */
    cursor?: StyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Styles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Styles.
     */
    distinct?: StyleScalarFieldEnum | StyleScalarFieldEnum[]
  }


  /**
   * Style findFirstOrThrow
   */
  export type StyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * Filter, which Style to fetch.
     */
    where?: StyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Styles to fetch.
     */
    orderBy?: StyleOrderByWithRelationInput | StyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Styles.
     */
    cursor?: StyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Styles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Styles.
     */
    distinct?: StyleScalarFieldEnum | StyleScalarFieldEnum[]
  }


  /**
   * Style findMany
   */
  export type StyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * Filter, which Styles to fetch.
     */
    where?: StyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Styles to fetch.
     */
    orderBy?: StyleOrderByWithRelationInput | StyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Styles.
     */
    cursor?: StyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Styles.
     */
    skip?: number
    distinct?: StyleScalarFieldEnum | StyleScalarFieldEnum[]
  }


  /**
   * Style create
   */
  export type StyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * The data needed to create a Style.
     */
    data?: XOR<StyleCreateInput, StyleUncheckedCreateInput>
  }


  /**
   * Style createMany
   */
  export type StyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Styles.
     */
    data: StyleCreateManyInput | StyleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Style update
   */
  export type StyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * The data needed to update a Style.
     */
    data: XOR<StyleUpdateInput, StyleUncheckedUpdateInput>
    /**
     * Choose, which Style to update.
     */
    where: StyleWhereUniqueInput
  }


  /**
   * Style updateMany
   */
  export type StyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Styles.
     */
    data: XOR<StyleUpdateManyMutationInput, StyleUncheckedUpdateManyInput>
    /**
     * Filter which Styles to update
     */
    where?: StyleWhereInput
  }


  /**
   * Style upsert
   */
  export type StyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * The filter to search for the Style to update in case it exists.
     */
    where: StyleWhereUniqueInput
    /**
     * In case the Style found by the `where` argument doesn't exist, create a new Style with this data.
     */
    create: XOR<StyleCreateInput, StyleUncheckedCreateInput>
    /**
     * In case the Style was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StyleUpdateInput, StyleUncheckedUpdateInput>
  }


  /**
   * Style delete
   */
  export type StyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
    /**
     * Filter which Style to delete.
     */
    where: StyleWhereUniqueInput
  }


  /**
   * Style deleteMany
   */
  export type StyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Styles to delete
     */
    where?: StyleWhereInput
  }


  /**
   * Style.Artiste
   */
  export type Style$ArtisteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artiste
     */
    select?: ArtisteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtisteInclude<ExtArgs> | null
    where?: ArtisteWhereInput
    orderBy?: ArtisteOrderByWithRelationInput | ArtisteOrderByWithRelationInput[]
    cursor?: ArtisteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtisteScalarFieldEnum | ArtisteScalarFieldEnum[]
  }


  /**
   * Style.Joue
   */
  export type Style$JoueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joue
     */
    select?: JoueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JoueInclude<ExtArgs> | null
    where?: JoueWhereInput
    orderBy?: JoueOrderByWithRelationInput | JoueOrderByWithRelationInput[]
    cursor?: JoueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoueScalarFieldEnum | JoueScalarFieldEnum[]
  }


  /**
   * Style without action
   */
  export type StyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Style
     */
    select?: StyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StyleInclude<ExtArgs> | null
  }



  /**
   * Model Ville
   */

  export type AggregateVille = {
    _count: VilleCountAggregateOutputType | null
    _avg: VilleAvgAggregateOutputType | null
    _sum: VilleSumAggregateOutputType | null
    _min: VilleMinAggregateOutputType | null
    _max: VilleMaxAggregateOutputType | null
  }

  export type VilleAvgAggregateOutputType = {
    idVille: number | null
  }

  export type VilleSumAggregateOutputType = {
    idVille: number | null
  }

  export type VilleMinAggregateOutputType = {
    idVille: number | null
    nom: string | null
    coordonnees: string | null
  }

  export type VilleMaxAggregateOutputType = {
    idVille: number | null
    nom: string | null
    coordonnees: string | null
  }

  export type VilleCountAggregateOutputType = {
    idVille: number
    nom: number
    coordonnees: number
    _all: number
  }


  export type VilleAvgAggregateInputType = {
    idVille?: true
  }

  export type VilleSumAggregateInputType = {
    idVille?: true
  }

  export type VilleMinAggregateInputType = {
    idVille?: true
    nom?: true
    coordonnees?: true
  }

  export type VilleMaxAggregateInputType = {
    idVille?: true
    nom?: true
    coordonnees?: true
  }

  export type VilleCountAggregateInputType = {
    idVille?: true
    nom?: true
    coordonnees?: true
    _all?: true
  }

  export type VilleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ville to aggregate.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Villes
    **/
    _count?: true | VilleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VilleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VilleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VilleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VilleMaxAggregateInputType
  }

  export type GetVilleAggregateType<T extends VilleAggregateArgs> = {
        [P in keyof T & keyof AggregateVille]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVille[P]>
      : GetScalarType<T[P], AggregateVille[P]>
  }




  export type VilleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VilleWhereInput
    orderBy?: VilleOrderByWithAggregationInput | VilleOrderByWithAggregationInput[]
    by: VilleScalarFieldEnum[] | VilleScalarFieldEnum
    having?: VilleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VilleCountAggregateInputType | true
    _avg?: VilleAvgAggregateInputType
    _sum?: VilleSumAggregateInputType
    _min?: VilleMinAggregateInputType
    _max?: VilleMaxAggregateInputType
  }

  export type VilleGroupByOutputType = {
    idVille: number
    nom: string | null
    coordonnees: string | null
    _count: VilleCountAggregateOutputType | null
    _avg: VilleAvgAggregateOutputType | null
    _sum: VilleSumAggregateOutputType | null
    _min: VilleMinAggregateOutputType | null
    _max: VilleMaxAggregateOutputType | null
  }

  type GetVilleGroupByPayload<T extends VilleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VilleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VilleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VilleGroupByOutputType[P]>
            : GetScalarType<T[P], VilleGroupByOutputType[P]>
        }
      >
    >


  export type VilleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVille?: boolean
    nom?: boolean
    coordonnees?: boolean
    Concert?: boolean | Ville$ConcertArgs<ExtArgs>
    Visiteur?: boolean | Ville$VisiteurArgs<ExtArgs>
    _count?: boolean | VilleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ville"]>

  export type VilleSelectScalar = {
    idVille?: boolean
    nom?: boolean
    coordonnees?: boolean
  }

  export type VilleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Concert?: boolean | Ville$ConcertArgs<ExtArgs>
    Visiteur?: boolean | Ville$VisiteurArgs<ExtArgs>
    _count?: boolean | VilleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VillePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ville"
    objects: {
      Concert: Prisma.$ConcertPayload<ExtArgs>[]
      Visiteur: Prisma.$VisiteurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idVille: number
      nom: string | null
      coordonnees: string | null
    }, ExtArgs["result"]["ville"]>
    composites: {}
  }


  type VilleGetPayload<S extends boolean | null | undefined | VilleDefaultArgs> = $Result.GetResult<Prisma.$VillePayload, S>

  type VilleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VilleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VilleCountAggregateInputType | true
    }

  export interface VilleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ville'], meta: { name: 'Ville' } }
    /**
     * Find zero or one Ville that matches the filter.
     * @param {VilleFindUniqueArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VilleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VilleFindUniqueArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ville that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VilleFindUniqueOrThrowArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VilleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VilleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ville that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindFirstArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VilleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VilleFindFirstArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ville that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindFirstOrThrowArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VilleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VilleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Villes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villes
     * const villes = await prisma.ville.findMany()
     * 
     * // Get first 10 Villes
     * const villes = await prisma.ville.findMany({ take: 10 })
     * 
     * // Only select the `idVille`
     * const villeWithIdVilleOnly = await prisma.ville.findMany({ select: { idVille: true } })
     * 
    **/
    findMany<T extends VilleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VilleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ville.
     * @param {VilleCreateArgs} args - Arguments to create a Ville.
     * @example
     * // Create one Ville
     * const Ville = await prisma.ville.create({
     *   data: {
     *     // ... data to create a Ville
     *   }
     * })
     * 
    **/
    create<T extends VilleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VilleCreateArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Villes.
     *     @param {VilleCreateManyArgs} args - Arguments to create many Villes.
     *     @example
     *     // Create many Villes
     *     const ville = await prisma.ville.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VilleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VilleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ville.
     * @param {VilleDeleteArgs} args - Arguments to delete one Ville.
     * @example
     * // Delete one Ville
     * const Ville = await prisma.ville.delete({
     *   where: {
     *     // ... filter to delete one Ville
     *   }
     * })
     * 
    **/
    delete<T extends VilleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VilleDeleteArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ville.
     * @param {VilleUpdateArgs} args - Arguments to update one Ville.
     * @example
     * // Update one Ville
     * const ville = await prisma.ville.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VilleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VilleUpdateArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Villes.
     * @param {VilleDeleteManyArgs} args - Arguments to filter Villes to delete.
     * @example
     * // Delete a few Villes
     * const { count } = await prisma.ville.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VilleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VilleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villes
     * const ville = await prisma.ville.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VilleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VilleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ville.
     * @param {VilleUpsertArgs} args - Arguments to update or create a Ville.
     * @example
     * // Update or create a Ville
     * const ville = await prisma.ville.upsert({
     *   create: {
     *     // ... data to create a Ville
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ville we want to update
     *   }
     * })
    **/
    upsert<T extends VilleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VilleUpsertArgs<ExtArgs>>
    ): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Villes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleCountArgs} args - Arguments to filter Villes to count.
     * @example
     * // Count the number of Villes
     * const count = await prisma.ville.count({
     *   where: {
     *     // ... the filter for the Villes we want to count
     *   }
     * })
    **/
    count<T extends VilleCountArgs>(
      args?: Subset<T, VilleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VilleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ville.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VilleAggregateArgs>(args: Subset<T, VilleAggregateArgs>): Prisma.PrismaPromise<GetVilleAggregateType<T>>

    /**
     * Group by Ville.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VilleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VilleGroupByArgs['orderBy'] }
        : { orderBy?: VilleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VilleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVilleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ville model
   */
  readonly fields: VilleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ville.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VilleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Concert<T extends Ville$ConcertArgs<ExtArgs> = {}>(args?: Subset<T, Ville$ConcertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcertPayload<ExtArgs>, T, 'findMany'> | Null>;

    Visiteur<T extends Ville$VisiteurArgs<ExtArgs> = {}>(args?: Subset<T, Ville$VisiteurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ville model
   */ 
  interface VilleFieldRefs {
    readonly idVille: FieldRef<"Ville", 'Int'>
    readonly nom: FieldRef<"Ville", 'String'>
    readonly coordonnees: FieldRef<"Ville", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Ville findUnique
   */
  export type VilleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where: VilleWhereUniqueInput
  }


  /**
   * Ville findUniqueOrThrow
   */
  export type VilleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where: VilleWhereUniqueInput
  }


  /**
   * Ville findFirst
   */
  export type VilleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villes.
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villes.
     */
    distinct?: VilleScalarFieldEnum | VilleScalarFieldEnum[]
  }


  /**
   * Ville findFirstOrThrow
   */
  export type VilleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villes.
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villes.
     */
    distinct?: VilleScalarFieldEnum | VilleScalarFieldEnum[]
  }


  /**
   * Ville findMany
   */
  export type VilleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Villes to fetch.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Villes.
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    distinct?: VilleScalarFieldEnum | VilleScalarFieldEnum[]
  }


  /**
   * Ville create
   */
  export type VilleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * The data needed to create a Ville.
     */
    data?: XOR<VilleCreateInput, VilleUncheckedCreateInput>
  }


  /**
   * Ville createMany
   */
  export type VilleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Villes.
     */
    data: VilleCreateManyInput | VilleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ville update
   */
  export type VilleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * The data needed to update a Ville.
     */
    data: XOR<VilleUpdateInput, VilleUncheckedUpdateInput>
    /**
     * Choose, which Ville to update.
     */
    where: VilleWhereUniqueInput
  }


  /**
   * Ville updateMany
   */
  export type VilleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Villes.
     */
    data: XOR<VilleUpdateManyMutationInput, VilleUncheckedUpdateManyInput>
    /**
     * Filter which Villes to update
     */
    where?: VilleWhereInput
  }


  /**
   * Ville upsert
   */
  export type VilleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * The filter to search for the Ville to update in case it exists.
     */
    where: VilleWhereUniqueInput
    /**
     * In case the Ville found by the `where` argument doesn't exist, create a new Ville with this data.
     */
    create: XOR<VilleCreateInput, VilleUncheckedCreateInput>
    /**
     * In case the Ville was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VilleUpdateInput, VilleUncheckedUpdateInput>
  }


  /**
   * Ville delete
   */
  export type VilleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter which Ville to delete.
     */
    where: VilleWhereUniqueInput
  }


  /**
   * Ville deleteMany
   */
  export type VilleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Villes to delete
     */
    where?: VilleWhereInput
  }


  /**
   * Ville.Concert
   */
  export type Ville$ConcertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concert
     */
    select?: ConcertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConcertInclude<ExtArgs> | null
    where?: ConcertWhereInput
    orderBy?: ConcertOrderByWithRelationInput | ConcertOrderByWithRelationInput[]
    cursor?: ConcertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConcertScalarFieldEnum | ConcertScalarFieldEnum[]
  }


  /**
   * Ville.Visiteur
   */
  export type Ville$VisiteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    where?: VisiteurWhereInput
    orderBy?: VisiteurOrderByWithRelationInput | VisiteurOrderByWithRelationInput[]
    cursor?: VisiteurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisiteurScalarFieldEnum | VisiteurScalarFieldEnum[]
  }


  /**
   * Ville without action
   */
  export type VilleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
  }



  /**
   * Model Visiteur
   */

  export type AggregateVisiteur = {
    _count: VisiteurCountAggregateOutputType | null
    _avg: VisiteurAvgAggregateOutputType | null
    _sum: VisiteurSumAggregateOutputType | null
    _min: VisiteurMinAggregateOutputType | null
    _max: VisiteurMaxAggregateOutputType | null
  }

  export type VisiteurAvgAggregateOutputType = {
    idVisiteur: number | null
    age: number | null
    idParrain: number | null
    idVille: number | null
  }

  export type VisiteurSumAggregateOutputType = {
    idVisiteur: number | null
    age: number | null
    idParrain: number | null
    idVille: number | null
  }

  export type VisiteurMinAggregateOutputType = {
    idVisiteur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    age: number | null
    adresse: string | null
    idParrain: number | null
    idVille: number | null
  }

  export type VisiteurMaxAggregateOutputType = {
    idVisiteur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    age: number | null
    adresse: string | null
    idParrain: number | null
    idVille: number | null
  }

  export type VisiteurCountAggregateOutputType = {
    idVisiteur: number
    nom: number
    prenom: number
    email: number
    age: number
    adresse: number
    idParrain: number
    idVille: number
    _all: number
  }


  export type VisiteurAvgAggregateInputType = {
    idVisiteur?: true
    age?: true
    idParrain?: true
    idVille?: true
  }

  export type VisiteurSumAggregateInputType = {
    idVisiteur?: true
    age?: true
    idParrain?: true
    idVille?: true
  }

  export type VisiteurMinAggregateInputType = {
    idVisiteur?: true
    nom?: true
    prenom?: true
    email?: true
    age?: true
    adresse?: true
    idParrain?: true
    idVille?: true
  }

  export type VisiteurMaxAggregateInputType = {
    idVisiteur?: true
    nom?: true
    prenom?: true
    email?: true
    age?: true
    adresse?: true
    idParrain?: true
    idVille?: true
  }

  export type VisiteurCountAggregateInputType = {
    idVisiteur?: true
    nom?: true
    prenom?: true
    email?: true
    age?: true
    adresse?: true
    idParrain?: true
    idVille?: true
    _all?: true
  }

  export type VisiteurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visiteur to aggregate.
     */
    where?: VisiteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visiteurs to fetch.
     */
    orderBy?: VisiteurOrderByWithRelationInput | VisiteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisiteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visiteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visiteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visiteurs
    **/
    _count?: true | VisiteurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisiteurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisiteurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisiteurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisiteurMaxAggregateInputType
  }

  export type GetVisiteurAggregateType<T extends VisiteurAggregateArgs> = {
        [P in keyof T & keyof AggregateVisiteur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisiteur[P]>
      : GetScalarType<T[P], AggregateVisiteur[P]>
  }




  export type VisiteurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteurWhereInput
    orderBy?: VisiteurOrderByWithAggregationInput | VisiteurOrderByWithAggregationInput[]
    by: VisiteurScalarFieldEnum[] | VisiteurScalarFieldEnum
    having?: VisiteurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisiteurCountAggregateInputType | true
    _avg?: VisiteurAvgAggregateInputType
    _sum?: VisiteurSumAggregateInputType
    _min?: VisiteurMinAggregateInputType
    _max?: VisiteurMaxAggregateInputType
  }

  export type VisiteurGroupByOutputType = {
    idVisiteur: number
    nom: string | null
    prenom: string | null
    email: string | null
    age: number | null
    adresse: string | null
    idParrain: number | null
    idVille: number | null
    _count: VisiteurCountAggregateOutputType | null
    _avg: VisiteurAvgAggregateOutputType | null
    _sum: VisiteurSumAggregateOutputType | null
    _min: VisiteurMinAggregateOutputType | null
    _max: VisiteurMaxAggregateOutputType | null
  }

  type GetVisiteurGroupByPayload<T extends VisiteurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisiteurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisiteurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisiteurGroupByOutputType[P]>
            : GetScalarType<T[P], VisiteurGroupByOutputType[P]>
        }
      >
    >


  export type VisiteurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVisiteur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    age?: boolean
    adresse?: boolean
    idParrain?: boolean
    idVille?: boolean
    Participe?: boolean | Visiteur$ParticipeArgs<ExtArgs>
    Visiteur?: boolean | Visiteur$VisiteurArgs<ExtArgs>
    other_Visiteur?: boolean | Visiteur$other_VisiteurArgs<ExtArgs>
    Ville?: boolean | Visiteur$VilleArgs<ExtArgs>
    _count?: boolean | VisiteurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visiteur"]>

  export type VisiteurSelectScalar = {
    idVisiteur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    age?: boolean
    adresse?: boolean
    idParrain?: boolean
    idVille?: boolean
  }

  export type VisiteurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participe?: boolean | Visiteur$ParticipeArgs<ExtArgs>
    Visiteur?: boolean | Visiteur$VisiteurArgs<ExtArgs>
    other_Visiteur?: boolean | Visiteur$other_VisiteurArgs<ExtArgs>
    Ville?: boolean | Visiteur$VilleArgs<ExtArgs>
    _count?: boolean | VisiteurCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VisiteurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visiteur"
    objects: {
      Participe: Prisma.$ParticipePayload<ExtArgs>[]
      Visiteur: Prisma.$VisiteurPayload<ExtArgs> | null
      other_Visiteur: Prisma.$VisiteurPayload<ExtArgs>[]
      Ville: Prisma.$VillePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idVisiteur: number
      nom: string | null
      prenom: string | null
      email: string | null
      age: number | null
      adresse: string | null
      idParrain: number | null
      idVille: number | null
    }, ExtArgs["result"]["visiteur"]>
    composites: {}
  }


  type VisiteurGetPayload<S extends boolean | null | undefined | VisiteurDefaultArgs> = $Result.GetResult<Prisma.$VisiteurPayload, S>

  type VisiteurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VisiteurFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VisiteurCountAggregateInputType | true
    }

  export interface VisiteurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visiteur'], meta: { name: 'Visiteur' } }
    /**
     * Find zero or one Visiteur that matches the filter.
     * @param {VisiteurFindUniqueArgs} args - Arguments to find a Visiteur
     * @example
     * // Get one Visiteur
     * const visiteur = await prisma.visiteur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisiteurFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteurFindUniqueArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Visiteur that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisiteurFindUniqueOrThrowArgs} args - Arguments to find a Visiteur
     * @example
     * // Get one Visiteur
     * const visiteur = await prisma.visiteur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisiteurFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteurFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Visiteur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteurFindFirstArgs} args - Arguments to find a Visiteur
     * @example
     * // Get one Visiteur
     * const visiteur = await prisma.visiteur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisiteurFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteurFindFirstArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Visiteur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteurFindFirstOrThrowArgs} args - Arguments to find a Visiteur
     * @example
     * // Get one Visiteur
     * const visiteur = await prisma.visiteur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisiteurFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteurFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Visiteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visiteurs
     * const visiteurs = await prisma.visiteur.findMany()
     * 
     * // Get first 10 Visiteurs
     * const visiteurs = await prisma.visiteur.findMany({ take: 10 })
     * 
     * // Only select the `idVisiteur`
     * const visiteurWithIdVisiteurOnly = await prisma.visiteur.findMany({ select: { idVisiteur: true } })
     * 
    **/
    findMany<T extends VisiteurFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteurFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Visiteur.
     * @param {VisiteurCreateArgs} args - Arguments to create a Visiteur.
     * @example
     * // Create one Visiteur
     * const Visiteur = await prisma.visiteur.create({
     *   data: {
     *     // ... data to create a Visiteur
     *   }
     * })
     * 
    **/
    create<T extends VisiteurCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteurCreateArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Visiteurs.
     *     @param {VisiteurCreateManyArgs} args - Arguments to create many Visiteurs.
     *     @example
     *     // Create many Visiteurs
     *     const visiteur = await prisma.visiteur.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VisiteurCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteurCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visiteur.
     * @param {VisiteurDeleteArgs} args - Arguments to delete one Visiteur.
     * @example
     * // Delete one Visiteur
     * const Visiteur = await prisma.visiteur.delete({
     *   where: {
     *     // ... filter to delete one Visiteur
     *   }
     * })
     * 
    **/
    delete<T extends VisiteurDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteurDeleteArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Visiteur.
     * @param {VisiteurUpdateArgs} args - Arguments to update one Visiteur.
     * @example
     * // Update one Visiteur
     * const visiteur = await prisma.visiteur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisiteurUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteurUpdateArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Visiteurs.
     * @param {VisiteurDeleteManyArgs} args - Arguments to filter Visiteurs to delete.
     * @example
     * // Delete a few Visiteurs
     * const { count } = await prisma.visiteur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisiteurDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteurDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visiteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visiteurs
     * const visiteur = await prisma.visiteur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisiteurUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteurUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visiteur.
     * @param {VisiteurUpsertArgs} args - Arguments to update or create a Visiteur.
     * @example
     * // Update or create a Visiteur
     * const visiteur = await prisma.visiteur.upsert({
     *   create: {
     *     // ... data to create a Visiteur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visiteur we want to update
     *   }
     * })
    **/
    upsert<T extends VisiteurUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteurUpsertArgs<ExtArgs>>
    ): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Visiteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteurCountArgs} args - Arguments to filter Visiteurs to count.
     * @example
     * // Count the number of Visiteurs
     * const count = await prisma.visiteur.count({
     *   where: {
     *     // ... the filter for the Visiteurs we want to count
     *   }
     * })
    **/
    count<T extends VisiteurCountArgs>(
      args?: Subset<T, VisiteurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisiteurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visiteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisiteurAggregateArgs>(args: Subset<T, VisiteurAggregateArgs>): Prisma.PrismaPromise<GetVisiteurAggregateType<T>>

    /**
     * Group by Visiteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisiteurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisiteurGroupByArgs['orderBy'] }
        : { orderBy?: VisiteurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisiteurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisiteurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visiteur model
   */
  readonly fields: VisiteurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visiteur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisiteurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Participe<T extends Visiteur$ParticipeArgs<ExtArgs> = {}>(args?: Subset<T, Visiteur$ParticipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipePayload<ExtArgs>, T, 'findMany'> | Null>;

    Visiteur<T extends Visiteur$VisiteurArgs<ExtArgs> = {}>(args?: Subset<T, Visiteur$VisiteurArgs<ExtArgs>>): Prisma__VisiteurClient<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    other_Visiteur<T extends Visiteur$other_VisiteurArgs<ExtArgs> = {}>(args?: Subset<T, Visiteur$other_VisiteurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiteurPayload<ExtArgs>, T, 'findMany'> | Null>;

    Ville<T extends Visiteur$VilleArgs<ExtArgs> = {}>(args?: Subset<T, Visiteur$VilleArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Visiteur model
   */ 
  interface VisiteurFieldRefs {
    readonly idVisiteur: FieldRef<"Visiteur", 'Int'>
    readonly nom: FieldRef<"Visiteur", 'String'>
    readonly prenom: FieldRef<"Visiteur", 'String'>
    readonly email: FieldRef<"Visiteur", 'String'>
    readonly age: FieldRef<"Visiteur", 'Int'>
    readonly adresse: FieldRef<"Visiteur", 'String'>
    readonly idParrain: FieldRef<"Visiteur", 'Int'>
    readonly idVille: FieldRef<"Visiteur", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Visiteur findUnique
   */
  export type VisiteurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * Filter, which Visiteur to fetch.
     */
    where: VisiteurWhereUniqueInput
  }


  /**
   * Visiteur findUniqueOrThrow
   */
  export type VisiteurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * Filter, which Visiteur to fetch.
     */
    where: VisiteurWhereUniqueInput
  }


  /**
   * Visiteur findFirst
   */
  export type VisiteurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * Filter, which Visiteur to fetch.
     */
    where?: VisiteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visiteurs to fetch.
     */
    orderBy?: VisiteurOrderByWithRelationInput | VisiteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visiteurs.
     */
    cursor?: VisiteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visiteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visiteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visiteurs.
     */
    distinct?: VisiteurScalarFieldEnum | VisiteurScalarFieldEnum[]
  }


  /**
   * Visiteur findFirstOrThrow
   */
  export type VisiteurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * Filter, which Visiteur to fetch.
     */
    where?: VisiteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visiteurs to fetch.
     */
    orderBy?: VisiteurOrderByWithRelationInput | VisiteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visiteurs.
     */
    cursor?: VisiteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visiteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visiteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visiteurs.
     */
    distinct?: VisiteurScalarFieldEnum | VisiteurScalarFieldEnum[]
  }


  /**
   * Visiteur findMany
   */
  export type VisiteurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * Filter, which Visiteurs to fetch.
     */
    where?: VisiteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visiteurs to fetch.
     */
    orderBy?: VisiteurOrderByWithRelationInput | VisiteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visiteurs.
     */
    cursor?: VisiteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visiteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visiteurs.
     */
    skip?: number
    distinct?: VisiteurScalarFieldEnum | VisiteurScalarFieldEnum[]
  }


  /**
   * Visiteur create
   */
  export type VisiteurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * The data needed to create a Visiteur.
     */
    data?: XOR<VisiteurCreateInput, VisiteurUncheckedCreateInput>
  }


  /**
   * Visiteur createMany
   */
  export type VisiteurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visiteurs.
     */
    data: VisiteurCreateManyInput | VisiteurCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Visiteur update
   */
  export type VisiteurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * The data needed to update a Visiteur.
     */
    data: XOR<VisiteurUpdateInput, VisiteurUncheckedUpdateInput>
    /**
     * Choose, which Visiteur to update.
     */
    where: VisiteurWhereUniqueInput
  }


  /**
   * Visiteur updateMany
   */
  export type VisiteurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visiteurs.
     */
    data: XOR<VisiteurUpdateManyMutationInput, VisiteurUncheckedUpdateManyInput>
    /**
     * Filter which Visiteurs to update
     */
    where?: VisiteurWhereInput
  }


  /**
   * Visiteur upsert
   */
  export type VisiteurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * The filter to search for the Visiteur to update in case it exists.
     */
    where: VisiteurWhereUniqueInput
    /**
     * In case the Visiteur found by the `where` argument doesn't exist, create a new Visiteur with this data.
     */
    create: XOR<VisiteurCreateInput, VisiteurUncheckedCreateInput>
    /**
     * In case the Visiteur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisiteurUpdateInput, VisiteurUncheckedUpdateInput>
  }


  /**
   * Visiteur delete
   */
  export type VisiteurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    /**
     * Filter which Visiteur to delete.
     */
    where: VisiteurWhereUniqueInput
  }


  /**
   * Visiteur deleteMany
   */
  export type VisiteurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visiteurs to delete
     */
    where?: VisiteurWhereInput
  }


  /**
   * Visiteur.Participe
   */
  export type Visiteur$ParticipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participe
     */
    select?: ParticipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipeInclude<ExtArgs> | null
    where?: ParticipeWhereInput
    orderBy?: ParticipeOrderByWithRelationInput | ParticipeOrderByWithRelationInput[]
    cursor?: ParticipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipeScalarFieldEnum | ParticipeScalarFieldEnum[]
  }


  /**
   * Visiteur.Visiteur
   */
  export type Visiteur$VisiteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    where?: VisiteurWhereInput
  }


  /**
   * Visiteur.other_Visiteur
   */
  export type Visiteur$other_VisiteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
    where?: VisiteurWhereInput
    orderBy?: VisiteurOrderByWithRelationInput | VisiteurOrderByWithRelationInput[]
    cursor?: VisiteurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisiteurScalarFieldEnum | VisiteurScalarFieldEnum[]
  }


  /**
   * Visiteur.Ville
   */
  export type Visiteur$VilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VilleInclude<ExtArgs> | null
    where?: VilleWhereInput
  }


  /**
   * Visiteur without action
   */
  export type VisiteurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visiteur
     */
    select?: VisiteurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteurInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArtisteScalarFieldEnum: {
    IdArtiste: 'IdArtiste',
    pseudo: 'pseudo',
    idStyle: 'idStyle'
  };

  export type ArtisteScalarFieldEnum = (typeof ArtisteScalarFieldEnum)[keyof typeof ArtisteScalarFieldEnum]


  export const ConcertScalarFieldEnum: {
    idConcert: 'idConcert',
    dateConcert: 'dateConcert',
    nbrPlaceDisponible: 'nbrPlaceDisponible',
    idVille: 'idVille'
  };

  export type ConcertScalarFieldEnum = (typeof ConcertScalarFieldEnum)[keyof typeof ConcertScalarFieldEnum]


  export const JoueScalarFieldEnum: {
    idConcert: 'idConcert',
    idStyle: 'idStyle'
  };

  export type JoueScalarFieldEnum = (typeof JoueScalarFieldEnum)[keyof typeof JoueScalarFieldEnum]


  export const ParticipeScalarFieldEnum: {
    idConcert: 'idConcert',
    idVisiteur: 'idVisiteur'
  };

  export type ParticipeScalarFieldEnum = (typeof ParticipeScalarFieldEnum)[keyof typeof ParticipeScalarFieldEnum]


  export const RealiseScalarFieldEnum: {
    IdArtiste: 'IdArtiste',
    idConcert: 'idConcert'
  };

  export type RealiseScalarFieldEnum = (typeof RealiseScalarFieldEnum)[keyof typeof RealiseScalarFieldEnum]


  export const StyleScalarFieldEnum: {
    idStyle: 'idStyle',
    libelle: 'libelle',
    description: 'description'
  };

  export type StyleScalarFieldEnum = (typeof StyleScalarFieldEnum)[keyof typeof StyleScalarFieldEnum]


  export const VilleScalarFieldEnum: {
    idVille: 'idVille',
    nom: 'nom',
    coordonnees: 'coordonnees'
  };

  export type VilleScalarFieldEnum = (typeof VilleScalarFieldEnum)[keyof typeof VilleScalarFieldEnum]


  export const VisiteurScalarFieldEnum: {
    idVisiteur: 'idVisiteur',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    age: 'age',
    adresse: 'adresse',
    idParrain: 'idParrain',
    idVille: 'idVille'
  };

  export type VisiteurScalarFieldEnum = (typeof VisiteurScalarFieldEnum)[keyof typeof VisiteurScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ArtisteWhereInput = {
    AND?: ArtisteWhereInput | ArtisteWhereInput[]
    OR?: ArtisteWhereInput[]
    NOT?: ArtisteWhereInput | ArtisteWhereInput[]
    IdArtiste?: IntFilter<"Artiste"> | number
    pseudo?: StringNullableFilter<"Artiste"> | string | null
    idStyle?: IntNullableFilter<"Artiste"> | number | null
    Style?: XOR<StyleNullableRelationFilter, StyleWhereInput> | null
    Realise?: RealiseListRelationFilter
  }

  export type ArtisteOrderByWithRelationInput = {
    IdArtiste?: SortOrder
    pseudo?: SortOrderInput | SortOrder
    idStyle?: SortOrderInput | SortOrder
    Style?: StyleOrderByWithRelationInput
    Realise?: RealiseOrderByRelationAggregateInput
  }

  export type ArtisteWhereUniqueInput = Prisma.AtLeast<{
    IdArtiste?: number
    AND?: ArtisteWhereInput | ArtisteWhereInput[]
    OR?: ArtisteWhereInput[]
    NOT?: ArtisteWhereInput | ArtisteWhereInput[]
    pseudo?: StringNullableFilter<"Artiste"> | string | null
    idStyle?: IntNullableFilter<"Artiste"> | number | null
    Style?: XOR<StyleNullableRelationFilter, StyleWhereInput> | null
    Realise?: RealiseListRelationFilter
  }, "IdArtiste">

  export type ArtisteOrderByWithAggregationInput = {
    IdArtiste?: SortOrder
    pseudo?: SortOrderInput | SortOrder
    idStyle?: SortOrderInput | SortOrder
    _count?: ArtisteCountOrderByAggregateInput
    _avg?: ArtisteAvgOrderByAggregateInput
    _max?: ArtisteMaxOrderByAggregateInput
    _min?: ArtisteMinOrderByAggregateInput
    _sum?: ArtisteSumOrderByAggregateInput
  }

  export type ArtisteScalarWhereWithAggregatesInput = {
    AND?: ArtisteScalarWhereWithAggregatesInput | ArtisteScalarWhereWithAggregatesInput[]
    OR?: ArtisteScalarWhereWithAggregatesInput[]
    NOT?: ArtisteScalarWhereWithAggregatesInput | ArtisteScalarWhereWithAggregatesInput[]
    IdArtiste?: IntWithAggregatesFilter<"Artiste"> | number
    pseudo?: StringNullableWithAggregatesFilter<"Artiste"> | string | null
    idStyle?: IntNullableWithAggregatesFilter<"Artiste"> | number | null
  }

  export type ConcertWhereInput = {
    AND?: ConcertWhereInput | ConcertWhereInput[]
    OR?: ConcertWhereInput[]
    NOT?: ConcertWhereInput | ConcertWhereInput[]
    idConcert?: IntFilter<"Concert"> | number
    dateConcert?: DateTimeNullableFilter<"Concert"> | Date | string | null
    nbrPlaceDisponible?: IntNullableFilter<"Concert"> | number | null
    idVille?: IntFilter<"Concert"> | number
    Ville?: XOR<VilleRelationFilter, VilleWhereInput>
    Joue?: JoueListRelationFilter
    Participe?: ParticipeListRelationFilter
    Realise?: RealiseListRelationFilter
  }

  export type ConcertOrderByWithRelationInput = {
    idConcert?: SortOrder
    dateConcert?: SortOrderInput | SortOrder
    nbrPlaceDisponible?: SortOrderInput | SortOrder
    idVille?: SortOrder
    Ville?: VilleOrderByWithRelationInput
    Joue?: JoueOrderByRelationAggregateInput
    Participe?: ParticipeOrderByRelationAggregateInput
    Realise?: RealiseOrderByRelationAggregateInput
  }

  export type ConcertWhereUniqueInput = Prisma.AtLeast<{
    idConcert?: number
    AND?: ConcertWhereInput | ConcertWhereInput[]
    OR?: ConcertWhereInput[]
    NOT?: ConcertWhereInput | ConcertWhereInput[]
    dateConcert?: DateTimeNullableFilter<"Concert"> | Date | string | null
    nbrPlaceDisponible?: IntNullableFilter<"Concert"> | number | null
    idVille?: IntFilter<"Concert"> | number
    Ville?: XOR<VilleRelationFilter, VilleWhereInput>
    Joue?: JoueListRelationFilter
    Participe?: ParticipeListRelationFilter
    Realise?: RealiseListRelationFilter
  }, "idConcert">

  export type ConcertOrderByWithAggregationInput = {
    idConcert?: SortOrder
    dateConcert?: SortOrderInput | SortOrder
    nbrPlaceDisponible?: SortOrderInput | SortOrder
    idVille?: SortOrder
    _count?: ConcertCountOrderByAggregateInput
    _avg?: ConcertAvgOrderByAggregateInput
    _max?: ConcertMaxOrderByAggregateInput
    _min?: ConcertMinOrderByAggregateInput
    _sum?: ConcertSumOrderByAggregateInput
  }

  export type ConcertScalarWhereWithAggregatesInput = {
    AND?: ConcertScalarWhereWithAggregatesInput | ConcertScalarWhereWithAggregatesInput[]
    OR?: ConcertScalarWhereWithAggregatesInput[]
    NOT?: ConcertScalarWhereWithAggregatesInput | ConcertScalarWhereWithAggregatesInput[]
    idConcert?: IntWithAggregatesFilter<"Concert"> | number
    dateConcert?: DateTimeNullableWithAggregatesFilter<"Concert"> | Date | string | null
    nbrPlaceDisponible?: IntNullableWithAggregatesFilter<"Concert"> | number | null
    idVille?: IntWithAggregatesFilter<"Concert"> | number
  }

  export type JoueWhereInput = {
    AND?: JoueWhereInput | JoueWhereInput[]
    OR?: JoueWhereInput[]
    NOT?: JoueWhereInput | JoueWhereInput[]
    idConcert?: IntFilter<"Joue"> | number
    idStyle?: IntFilter<"Joue"> | number
    Concert?: XOR<ConcertRelationFilter, ConcertWhereInput>
    Style?: XOR<StyleRelationFilter, StyleWhereInput>
  }

  export type JoueOrderByWithRelationInput = {
    idConcert?: SortOrder
    idStyle?: SortOrder
    Concert?: ConcertOrderByWithRelationInput
    Style?: StyleOrderByWithRelationInput
  }

  export type JoueWhereUniqueInput = Prisma.AtLeast<{
    idConcert_idStyle?: JoueIdConcertIdStyleCompoundUniqueInput
    AND?: JoueWhereInput | JoueWhereInput[]
    OR?: JoueWhereInput[]
    NOT?: JoueWhereInput | JoueWhereInput[]
    idConcert?: IntFilter<"Joue"> | number
    idStyle?: IntFilter<"Joue"> | number
    Concert?: XOR<ConcertRelationFilter, ConcertWhereInput>
    Style?: XOR<StyleRelationFilter, StyleWhereInput>
  }, "idConcert_idStyle">

  export type JoueOrderByWithAggregationInput = {
    idConcert?: SortOrder
    idStyle?: SortOrder
    _count?: JoueCountOrderByAggregateInput
    _avg?: JoueAvgOrderByAggregateInput
    _max?: JoueMaxOrderByAggregateInput
    _min?: JoueMinOrderByAggregateInput
    _sum?: JoueSumOrderByAggregateInput
  }

  export type JoueScalarWhereWithAggregatesInput = {
    AND?: JoueScalarWhereWithAggregatesInput | JoueScalarWhereWithAggregatesInput[]
    OR?: JoueScalarWhereWithAggregatesInput[]
    NOT?: JoueScalarWhereWithAggregatesInput | JoueScalarWhereWithAggregatesInput[]
    idConcert?: IntWithAggregatesFilter<"Joue"> | number
    idStyle?: IntWithAggregatesFilter<"Joue"> | number
  }

  export type ParticipeWhereInput = {
    AND?: ParticipeWhereInput | ParticipeWhereInput[]
    OR?: ParticipeWhereInput[]
    NOT?: ParticipeWhereInput | ParticipeWhereInput[]
    idConcert?: IntFilter<"Participe"> | number
    idVisiteur?: IntFilter<"Participe"> | number
    Concert?: XOR<ConcertRelationFilter, ConcertWhereInput>
    Visiteur?: XOR<VisiteurRelationFilter, VisiteurWhereInput>
  }

  export type ParticipeOrderByWithRelationInput = {
    idConcert?: SortOrder
    idVisiteur?: SortOrder
    Concert?: ConcertOrderByWithRelationInput
    Visiteur?: VisiteurOrderByWithRelationInput
  }

  export type ParticipeWhereUniqueInput = Prisma.AtLeast<{
    idConcert_idVisiteur?: ParticipeIdConcertIdVisiteurCompoundUniqueInput
    AND?: ParticipeWhereInput | ParticipeWhereInput[]
    OR?: ParticipeWhereInput[]
    NOT?: ParticipeWhereInput | ParticipeWhereInput[]
    idConcert?: IntFilter<"Participe"> | number
    idVisiteur?: IntFilter<"Participe"> | number
    Concert?: XOR<ConcertRelationFilter, ConcertWhereInput>
    Visiteur?: XOR<VisiteurRelationFilter, VisiteurWhereInput>
  }, "idConcert_idVisiteur">

  export type ParticipeOrderByWithAggregationInput = {
    idConcert?: SortOrder
    idVisiteur?: SortOrder
    _count?: ParticipeCountOrderByAggregateInput
    _avg?: ParticipeAvgOrderByAggregateInput
    _max?: ParticipeMaxOrderByAggregateInput
    _min?: ParticipeMinOrderByAggregateInput
    _sum?: ParticipeSumOrderByAggregateInput
  }

  export type ParticipeScalarWhereWithAggregatesInput = {
    AND?: ParticipeScalarWhereWithAggregatesInput | ParticipeScalarWhereWithAggregatesInput[]
    OR?: ParticipeScalarWhereWithAggregatesInput[]
    NOT?: ParticipeScalarWhereWithAggregatesInput | ParticipeScalarWhereWithAggregatesInput[]
    idConcert?: IntWithAggregatesFilter<"Participe"> | number
    idVisiteur?: IntWithAggregatesFilter<"Participe"> | number
  }

  export type RealiseWhereInput = {
    AND?: RealiseWhereInput | RealiseWhereInput[]
    OR?: RealiseWhereInput[]
    NOT?: RealiseWhereInput | RealiseWhereInput[]
    IdArtiste?: IntFilter<"Realise"> | number
    idConcert?: IntFilter<"Realise"> | number
    Artiste?: XOR<ArtisteRelationFilter, ArtisteWhereInput>
    Concert?: XOR<ConcertRelationFilter, ConcertWhereInput>
  }

  export type RealiseOrderByWithRelationInput = {
    IdArtiste?: SortOrder
    idConcert?: SortOrder
    Artiste?: ArtisteOrderByWithRelationInput
    Concert?: ConcertOrderByWithRelationInput
  }

  export type RealiseWhereUniqueInput = Prisma.AtLeast<{
    IdArtiste_idConcert?: RealiseIdArtisteIdConcertCompoundUniqueInput
    AND?: RealiseWhereInput | RealiseWhereInput[]
    OR?: RealiseWhereInput[]
    NOT?: RealiseWhereInput | RealiseWhereInput[]
    IdArtiste?: IntFilter<"Realise"> | number
    idConcert?: IntFilter<"Realise"> | number
    Artiste?: XOR<ArtisteRelationFilter, ArtisteWhereInput>
    Concert?: XOR<ConcertRelationFilter, ConcertWhereInput>
  }, "IdArtiste_idConcert">

  export type RealiseOrderByWithAggregationInput = {
    IdArtiste?: SortOrder
    idConcert?: SortOrder
    _count?: RealiseCountOrderByAggregateInput
    _avg?: RealiseAvgOrderByAggregateInput
    _max?: RealiseMaxOrderByAggregateInput
    _min?: RealiseMinOrderByAggregateInput
    _sum?: RealiseSumOrderByAggregateInput
  }

  export type RealiseScalarWhereWithAggregatesInput = {
    AND?: RealiseScalarWhereWithAggregatesInput | RealiseScalarWhereWithAggregatesInput[]
    OR?: RealiseScalarWhereWithAggregatesInput[]
    NOT?: RealiseScalarWhereWithAggregatesInput | RealiseScalarWhereWithAggregatesInput[]
    IdArtiste?: IntWithAggregatesFilter<"Realise"> | number
    idConcert?: IntWithAggregatesFilter<"Realise"> | number
  }

  export type StyleWhereInput = {
    AND?: StyleWhereInput | StyleWhereInput[]
    OR?: StyleWhereInput[]
    NOT?: StyleWhereInput | StyleWhereInput[]
    idStyle?: IntFilter<"Style"> | number
    libelle?: StringNullableFilter<"Style"> | string | null
    description?: StringNullableFilter<"Style"> | string | null
    Artiste?: ArtisteListRelationFilter
    Joue?: JoueListRelationFilter
  }

  export type StyleOrderByWithRelationInput = {
    idStyle?: SortOrder
    libelle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    Artiste?: ArtisteOrderByRelationAggregateInput
    Joue?: JoueOrderByRelationAggregateInput
  }

  export type StyleWhereUniqueInput = Prisma.AtLeast<{
    idStyle?: number
    AND?: StyleWhereInput | StyleWhereInput[]
    OR?: StyleWhereInput[]
    NOT?: StyleWhereInput | StyleWhereInput[]
    libelle?: StringNullableFilter<"Style"> | string | null
    description?: StringNullableFilter<"Style"> | string | null
    Artiste?: ArtisteListRelationFilter
    Joue?: JoueListRelationFilter
  }, "idStyle">

  export type StyleOrderByWithAggregationInput = {
    idStyle?: SortOrder
    libelle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: StyleCountOrderByAggregateInput
    _avg?: StyleAvgOrderByAggregateInput
    _max?: StyleMaxOrderByAggregateInput
    _min?: StyleMinOrderByAggregateInput
    _sum?: StyleSumOrderByAggregateInput
  }

  export type StyleScalarWhereWithAggregatesInput = {
    AND?: StyleScalarWhereWithAggregatesInput | StyleScalarWhereWithAggregatesInput[]
    OR?: StyleScalarWhereWithAggregatesInput[]
    NOT?: StyleScalarWhereWithAggregatesInput | StyleScalarWhereWithAggregatesInput[]
    idStyle?: IntWithAggregatesFilter<"Style"> | number
    libelle?: StringNullableWithAggregatesFilter<"Style"> | string | null
    description?: StringNullableWithAggregatesFilter<"Style"> | string | null
  }

  export type VilleWhereInput = {
    AND?: VilleWhereInput | VilleWhereInput[]
    OR?: VilleWhereInput[]
    NOT?: VilleWhereInput | VilleWhereInput[]
    idVille?: IntFilter<"Ville"> | number
    nom?: StringNullableFilter<"Ville"> | string | null
    coordonnees?: StringNullableFilter<"Ville"> | string | null
    Concert?: ConcertListRelationFilter
    Visiteur?: VisiteurListRelationFilter
  }

  export type VilleOrderByWithRelationInput = {
    idVille?: SortOrder
    nom?: SortOrderInput | SortOrder
    coordonnees?: SortOrderInput | SortOrder
    Concert?: ConcertOrderByRelationAggregateInput
    Visiteur?: VisiteurOrderByRelationAggregateInput
  }

  export type VilleWhereUniqueInput = Prisma.AtLeast<{
    idVille?: number
    AND?: VilleWhereInput | VilleWhereInput[]
    OR?: VilleWhereInput[]
    NOT?: VilleWhereInput | VilleWhereInput[]
    nom?: StringNullableFilter<"Ville"> | string | null
    coordonnees?: StringNullableFilter<"Ville"> | string | null
    Concert?: ConcertListRelationFilter
    Visiteur?: VisiteurListRelationFilter
  }, "idVille">

  export type VilleOrderByWithAggregationInput = {
    idVille?: SortOrder
    nom?: SortOrderInput | SortOrder
    coordonnees?: SortOrderInput | SortOrder
    _count?: VilleCountOrderByAggregateInput
    _avg?: VilleAvgOrderByAggregateInput
    _max?: VilleMaxOrderByAggregateInput
    _min?: VilleMinOrderByAggregateInput
    _sum?: VilleSumOrderByAggregateInput
  }

  export type VilleScalarWhereWithAggregatesInput = {
    AND?: VilleScalarWhereWithAggregatesInput | VilleScalarWhereWithAggregatesInput[]
    OR?: VilleScalarWhereWithAggregatesInput[]
    NOT?: VilleScalarWhereWithAggregatesInput | VilleScalarWhereWithAggregatesInput[]
    idVille?: IntWithAggregatesFilter<"Ville"> | number
    nom?: StringNullableWithAggregatesFilter<"Ville"> | string | null
    coordonnees?: StringNullableWithAggregatesFilter<"Ville"> | string | null
  }

  export type VisiteurWhereInput = {
    AND?: VisiteurWhereInput | VisiteurWhereInput[]
    OR?: VisiteurWhereInput[]
    NOT?: VisiteurWhereInput | VisiteurWhereInput[]
    idVisiteur?: IntFilter<"Visiteur"> | number
    nom?: StringNullableFilter<"Visiteur"> | string | null
    prenom?: StringNullableFilter<"Visiteur"> | string | null
    email?: StringNullableFilter<"Visiteur"> | string | null
    age?: IntNullableFilter<"Visiteur"> | number | null
    adresse?: StringNullableFilter<"Visiteur"> | string | null
    idParrain?: IntNullableFilter<"Visiteur"> | number | null
    idVille?: IntNullableFilter<"Visiteur"> | number | null
    Participe?: ParticipeListRelationFilter
    Visiteur?: XOR<VisiteurNullableRelationFilter, VisiteurWhereInput> | null
    other_Visiteur?: VisiteurListRelationFilter
    Ville?: XOR<VilleNullableRelationFilter, VilleWhereInput> | null
  }

  export type VisiteurOrderByWithRelationInput = {
    idVisiteur?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    idParrain?: SortOrderInput | SortOrder
    idVille?: SortOrderInput | SortOrder
    Participe?: ParticipeOrderByRelationAggregateInput
    Visiteur?: VisiteurOrderByWithRelationInput
    other_Visiteur?: VisiteurOrderByRelationAggregateInput
    Ville?: VilleOrderByWithRelationInput
  }

  export type VisiteurWhereUniqueInput = Prisma.AtLeast<{
    idVisiteur?: number
    AND?: VisiteurWhereInput | VisiteurWhereInput[]
    OR?: VisiteurWhereInput[]
    NOT?: VisiteurWhereInput | VisiteurWhereInput[]
    nom?: StringNullableFilter<"Visiteur"> | string | null
    prenom?: StringNullableFilter<"Visiteur"> | string | null
    email?: StringNullableFilter<"Visiteur"> | string | null
    age?: IntNullableFilter<"Visiteur"> | number | null
    adresse?: StringNullableFilter<"Visiteur"> | string | null
    idParrain?: IntNullableFilter<"Visiteur"> | number | null
    idVille?: IntNullableFilter<"Visiteur"> | number | null
    Participe?: ParticipeListRelationFilter
    Visiteur?: XOR<VisiteurNullableRelationFilter, VisiteurWhereInput> | null
    other_Visiteur?: VisiteurListRelationFilter
    Ville?: XOR<VilleNullableRelationFilter, VilleWhereInput> | null
  }, "idVisiteur">

  export type VisiteurOrderByWithAggregationInput = {
    idVisiteur?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    idParrain?: SortOrderInput | SortOrder
    idVille?: SortOrderInput | SortOrder
    _count?: VisiteurCountOrderByAggregateInput
    _avg?: VisiteurAvgOrderByAggregateInput
    _max?: VisiteurMaxOrderByAggregateInput
    _min?: VisiteurMinOrderByAggregateInput
    _sum?: VisiteurSumOrderByAggregateInput
  }

  export type VisiteurScalarWhereWithAggregatesInput = {
    AND?: VisiteurScalarWhereWithAggregatesInput | VisiteurScalarWhereWithAggregatesInput[]
    OR?: VisiteurScalarWhereWithAggregatesInput[]
    NOT?: VisiteurScalarWhereWithAggregatesInput | VisiteurScalarWhereWithAggregatesInput[]
    idVisiteur?: IntWithAggregatesFilter<"Visiteur"> | number
    nom?: StringNullableWithAggregatesFilter<"Visiteur"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"Visiteur"> | string | null
    email?: StringNullableWithAggregatesFilter<"Visiteur"> | string | null
    age?: IntNullableWithAggregatesFilter<"Visiteur"> | number | null
    adresse?: StringNullableWithAggregatesFilter<"Visiteur"> | string | null
    idParrain?: IntNullableWithAggregatesFilter<"Visiteur"> | number | null
    idVille?: IntNullableWithAggregatesFilter<"Visiteur"> | number | null
  }

  export type ArtisteCreateInput = {
    pseudo?: string | null
    Style?: StyleCreateNestedOneWithoutArtisteInput
    Realise?: RealiseCreateNestedManyWithoutArtisteInput
  }

  export type ArtisteUncheckedCreateInput = {
    IdArtiste?: number
    pseudo?: string | null
    idStyle?: number | null
    Realise?: RealiseUncheckedCreateNestedManyWithoutArtisteInput
  }

  export type ArtisteUpdateInput = {
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    Style?: StyleUpdateOneWithoutArtisteNestedInput
    Realise?: RealiseUpdateManyWithoutArtisteNestedInput
  }

  export type ArtisteUncheckedUpdateInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    idStyle?: NullableIntFieldUpdateOperationsInput | number | null
    Realise?: RealiseUncheckedUpdateManyWithoutArtisteNestedInput
  }

  export type ArtisteCreateManyInput = {
    IdArtiste?: number
    pseudo?: string | null
    idStyle?: number | null
  }

  export type ArtisteUpdateManyMutationInput = {
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtisteUncheckedUpdateManyInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    idStyle?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConcertCreateInput = {
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    Ville: VilleCreateNestedOneWithoutConcertInput
    Joue?: JoueCreateNestedManyWithoutConcertInput
    Participe?: ParticipeCreateNestedManyWithoutConcertInput
    Realise?: RealiseCreateNestedManyWithoutConcertInput
  }

  export type ConcertUncheckedCreateInput = {
    idConcert?: number
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    idVille: number
    Joue?: JoueUncheckedCreateNestedManyWithoutConcertInput
    Participe?: ParticipeUncheckedCreateNestedManyWithoutConcertInput
    Realise?: RealiseUncheckedCreateNestedManyWithoutConcertInput
  }

  export type ConcertUpdateInput = {
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    Ville?: VilleUpdateOneRequiredWithoutConcertNestedInput
    Joue?: JoueUpdateManyWithoutConcertNestedInput
    Participe?: ParticipeUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUpdateManyWithoutConcertNestedInput
  }

  export type ConcertUncheckedUpdateInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: IntFieldUpdateOperationsInput | number
    Joue?: JoueUncheckedUpdateManyWithoutConcertNestedInput
    Participe?: ParticipeUncheckedUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUncheckedUpdateManyWithoutConcertNestedInput
  }

  export type ConcertCreateManyInput = {
    idConcert?: number
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    idVille: number
  }

  export type ConcertUpdateManyMutationInput = {
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConcertUncheckedUpdateManyInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: IntFieldUpdateOperationsInput | number
  }

  export type JoueCreateInput = {
    Concert: ConcertCreateNestedOneWithoutJoueInput
    Style: StyleCreateNestedOneWithoutJoueInput
  }

  export type JoueUncheckedCreateInput = {
    idConcert: number
    idStyle: number
  }

  export type JoueUpdateInput = {
    Concert?: ConcertUpdateOneRequiredWithoutJoueNestedInput
    Style?: StyleUpdateOneRequiredWithoutJoueNestedInput
  }

  export type JoueUncheckedUpdateInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    idStyle?: IntFieldUpdateOperationsInput | number
  }

  export type JoueCreateManyInput = {
    idConcert: number
    idStyle: number
  }

  export type JoueUpdateManyMutationInput = {

  }

  export type JoueUncheckedUpdateManyInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    idStyle?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipeCreateInput = {
    Concert: ConcertCreateNestedOneWithoutParticipeInput
    Visiteur: VisiteurCreateNestedOneWithoutParticipeInput
  }

  export type ParticipeUncheckedCreateInput = {
    idConcert: number
    idVisiteur: number
  }

  export type ParticipeUpdateInput = {
    Concert?: ConcertUpdateOneRequiredWithoutParticipeNestedInput
    Visiteur?: VisiteurUpdateOneRequiredWithoutParticipeNestedInput
  }

  export type ParticipeUncheckedUpdateInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    idVisiteur?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipeCreateManyInput = {
    idConcert: number
    idVisiteur: number
  }

  export type ParticipeUpdateManyMutationInput = {

  }

  export type ParticipeUncheckedUpdateManyInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    idVisiteur?: IntFieldUpdateOperationsInput | number
  }

  export type RealiseCreateInput = {
    Artiste: ArtisteCreateNestedOneWithoutRealiseInput
    Concert: ConcertCreateNestedOneWithoutRealiseInput
  }

  export type RealiseUncheckedCreateInput = {
    IdArtiste: number
    idConcert: number
  }

  export type RealiseUpdateInput = {
    Artiste?: ArtisteUpdateOneRequiredWithoutRealiseNestedInput
    Concert?: ConcertUpdateOneRequiredWithoutRealiseNestedInput
  }

  export type RealiseUncheckedUpdateInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type RealiseCreateManyInput = {
    IdArtiste: number
    idConcert: number
  }

  export type RealiseUpdateManyMutationInput = {

  }

  export type RealiseUncheckedUpdateManyInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type StyleCreateInput = {
    libelle?: string | null
    description?: string | null
    Artiste?: ArtisteCreateNestedManyWithoutStyleInput
    Joue?: JoueCreateNestedManyWithoutStyleInput
  }

  export type StyleUncheckedCreateInput = {
    idStyle?: number
    libelle?: string | null
    description?: string | null
    Artiste?: ArtisteUncheckedCreateNestedManyWithoutStyleInput
    Joue?: JoueUncheckedCreateNestedManyWithoutStyleInput
  }

  export type StyleUpdateInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Artiste?: ArtisteUpdateManyWithoutStyleNestedInput
    Joue?: JoueUpdateManyWithoutStyleNestedInput
  }

  export type StyleUncheckedUpdateInput = {
    idStyle?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Artiste?: ArtisteUncheckedUpdateManyWithoutStyleNestedInput
    Joue?: JoueUncheckedUpdateManyWithoutStyleNestedInput
  }

  export type StyleCreateManyInput = {
    idStyle?: number
    libelle?: string | null
    description?: string | null
  }

  export type StyleUpdateManyMutationInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StyleUncheckedUpdateManyInput = {
    idStyle?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VilleCreateInput = {
    nom?: string | null
    coordonnees?: string | null
    Concert?: ConcertCreateNestedManyWithoutVilleInput
    Visiteur?: VisiteurCreateNestedManyWithoutVilleInput
  }

  export type VilleUncheckedCreateInput = {
    idVille?: number
    nom?: string | null
    coordonnees?: string | null
    Concert?: ConcertUncheckedCreateNestedManyWithoutVilleInput
    Visiteur?: VisiteurUncheckedCreateNestedManyWithoutVilleInput
  }

  export type VilleUpdateInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
    Concert?: ConcertUpdateManyWithoutVilleNestedInput
    Visiteur?: VisiteurUpdateManyWithoutVilleNestedInput
  }

  export type VilleUncheckedUpdateInput = {
    idVille?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
    Concert?: ConcertUncheckedUpdateManyWithoutVilleNestedInput
    Visiteur?: VisiteurUncheckedUpdateManyWithoutVilleNestedInput
  }

  export type VilleCreateManyInput = {
    idVille?: number
    nom?: string | null
    coordonnees?: string | null
  }

  export type VilleUpdateManyMutationInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VilleUncheckedUpdateManyInput = {
    idVille?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiteurCreateInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    Participe?: ParticipeCreateNestedManyWithoutVisiteurInput
    Visiteur?: VisiteurCreateNestedOneWithoutOther_VisiteurInput
    other_Visiteur?: VisiteurCreateNestedManyWithoutVisiteurInput
    Ville?: VilleCreateNestedOneWithoutVisiteurInput
  }

  export type VisiteurUncheckedCreateInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idParrain?: number | null
    idVille?: number | null
    Participe?: ParticipeUncheckedCreateNestedManyWithoutVisiteurInput
    other_Visiteur?: VisiteurUncheckedCreateNestedManyWithoutVisiteurInput
  }

  export type VisiteurUpdateInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    Participe?: ParticipeUpdateManyWithoutVisiteurNestedInput
    Visiteur?: VisiteurUpdateOneWithoutOther_VisiteurNestedInput
    other_Visiteur?: VisiteurUpdateManyWithoutVisiteurNestedInput
    Ville?: VilleUpdateOneWithoutVisiteurNestedInput
  }

  export type VisiteurUncheckedUpdateInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idParrain?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: NullableIntFieldUpdateOperationsInput | number | null
    Participe?: ParticipeUncheckedUpdateManyWithoutVisiteurNestedInput
    other_Visiteur?: VisiteurUncheckedUpdateManyWithoutVisiteurNestedInput
  }

  export type VisiteurCreateManyInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idParrain?: number | null
    idVille?: number | null
  }

  export type VisiteurUpdateManyMutationInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiteurUncheckedUpdateManyInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idParrain?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StyleNullableRelationFilter = {
    is?: StyleWhereInput | null
    isNot?: StyleWhereInput | null
  }

  export type RealiseListRelationFilter = {
    every?: RealiseWhereInput
    some?: RealiseWhereInput
    none?: RealiseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RealiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtisteCountOrderByAggregateInput = {
    IdArtiste?: SortOrder
    pseudo?: SortOrder
    idStyle?: SortOrder
  }

  export type ArtisteAvgOrderByAggregateInput = {
    IdArtiste?: SortOrder
    idStyle?: SortOrder
  }

  export type ArtisteMaxOrderByAggregateInput = {
    IdArtiste?: SortOrder
    pseudo?: SortOrder
    idStyle?: SortOrder
  }

  export type ArtisteMinOrderByAggregateInput = {
    IdArtiste?: SortOrder
    pseudo?: SortOrder
    idStyle?: SortOrder
  }

  export type ArtisteSumOrderByAggregateInput = {
    IdArtiste?: SortOrder
    idStyle?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VilleRelationFilter = {
    is?: VilleWhereInput
    isNot?: VilleWhereInput
  }

  export type JoueListRelationFilter = {
    every?: JoueWhereInput
    some?: JoueWhereInput
    none?: JoueWhereInput
  }

  export type ParticipeListRelationFilter = {
    every?: ParticipeWhereInput
    some?: ParticipeWhereInput
    none?: ParticipeWhereInput
  }

  export type JoueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConcertCountOrderByAggregateInput = {
    idConcert?: SortOrder
    dateConcert?: SortOrder
    nbrPlaceDisponible?: SortOrder
    idVille?: SortOrder
  }

  export type ConcertAvgOrderByAggregateInput = {
    idConcert?: SortOrder
    nbrPlaceDisponible?: SortOrder
    idVille?: SortOrder
  }

  export type ConcertMaxOrderByAggregateInput = {
    idConcert?: SortOrder
    dateConcert?: SortOrder
    nbrPlaceDisponible?: SortOrder
    idVille?: SortOrder
  }

  export type ConcertMinOrderByAggregateInput = {
    idConcert?: SortOrder
    dateConcert?: SortOrder
    nbrPlaceDisponible?: SortOrder
    idVille?: SortOrder
  }

  export type ConcertSumOrderByAggregateInput = {
    idConcert?: SortOrder
    nbrPlaceDisponible?: SortOrder
    idVille?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ConcertRelationFilter = {
    is?: ConcertWhereInput
    isNot?: ConcertWhereInput
  }

  export type StyleRelationFilter = {
    is?: StyleWhereInput
    isNot?: StyleWhereInput
  }

  export type JoueIdConcertIdStyleCompoundUniqueInput = {
    idConcert: number
    idStyle: number
  }

  export type JoueCountOrderByAggregateInput = {
    idConcert?: SortOrder
    idStyle?: SortOrder
  }

  export type JoueAvgOrderByAggregateInput = {
    idConcert?: SortOrder
    idStyle?: SortOrder
  }

  export type JoueMaxOrderByAggregateInput = {
    idConcert?: SortOrder
    idStyle?: SortOrder
  }

  export type JoueMinOrderByAggregateInput = {
    idConcert?: SortOrder
    idStyle?: SortOrder
  }

  export type JoueSumOrderByAggregateInput = {
    idConcert?: SortOrder
    idStyle?: SortOrder
  }

  export type VisiteurRelationFilter = {
    is?: VisiteurWhereInput
    isNot?: VisiteurWhereInput
  }

  export type ParticipeIdConcertIdVisiteurCompoundUniqueInput = {
    idConcert: number
    idVisiteur: number
  }

  export type ParticipeCountOrderByAggregateInput = {
    idConcert?: SortOrder
    idVisiteur?: SortOrder
  }

  export type ParticipeAvgOrderByAggregateInput = {
    idConcert?: SortOrder
    idVisiteur?: SortOrder
  }

  export type ParticipeMaxOrderByAggregateInput = {
    idConcert?: SortOrder
    idVisiteur?: SortOrder
  }

  export type ParticipeMinOrderByAggregateInput = {
    idConcert?: SortOrder
    idVisiteur?: SortOrder
  }

  export type ParticipeSumOrderByAggregateInput = {
    idConcert?: SortOrder
    idVisiteur?: SortOrder
  }

  export type ArtisteRelationFilter = {
    is?: ArtisteWhereInput
    isNot?: ArtisteWhereInput
  }

  export type RealiseIdArtisteIdConcertCompoundUniqueInput = {
    IdArtiste: number
    idConcert: number
  }

  export type RealiseCountOrderByAggregateInput = {
    IdArtiste?: SortOrder
    idConcert?: SortOrder
  }

  export type RealiseAvgOrderByAggregateInput = {
    IdArtiste?: SortOrder
    idConcert?: SortOrder
  }

  export type RealiseMaxOrderByAggregateInput = {
    IdArtiste?: SortOrder
    idConcert?: SortOrder
  }

  export type RealiseMinOrderByAggregateInput = {
    IdArtiste?: SortOrder
    idConcert?: SortOrder
  }

  export type RealiseSumOrderByAggregateInput = {
    IdArtiste?: SortOrder
    idConcert?: SortOrder
  }

  export type ArtisteListRelationFilter = {
    every?: ArtisteWhereInput
    some?: ArtisteWhereInput
    none?: ArtisteWhereInput
  }

  export type ArtisteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StyleCountOrderByAggregateInput = {
    idStyle?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
  }

  export type StyleAvgOrderByAggregateInput = {
    idStyle?: SortOrder
  }

  export type StyleMaxOrderByAggregateInput = {
    idStyle?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
  }

  export type StyleMinOrderByAggregateInput = {
    idStyle?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
  }

  export type StyleSumOrderByAggregateInput = {
    idStyle?: SortOrder
  }

  export type ConcertListRelationFilter = {
    every?: ConcertWhereInput
    some?: ConcertWhereInput
    none?: ConcertWhereInput
  }

  export type VisiteurListRelationFilter = {
    every?: VisiteurWhereInput
    some?: VisiteurWhereInput
    none?: VisiteurWhereInput
  }

  export type ConcertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisiteurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VilleCountOrderByAggregateInput = {
    idVille?: SortOrder
    nom?: SortOrder
    coordonnees?: SortOrder
  }

  export type VilleAvgOrderByAggregateInput = {
    idVille?: SortOrder
  }

  export type VilleMaxOrderByAggregateInput = {
    idVille?: SortOrder
    nom?: SortOrder
    coordonnees?: SortOrder
  }

  export type VilleMinOrderByAggregateInput = {
    idVille?: SortOrder
    nom?: SortOrder
    coordonnees?: SortOrder
  }

  export type VilleSumOrderByAggregateInput = {
    idVille?: SortOrder
  }

  export type VisiteurNullableRelationFilter = {
    is?: VisiteurWhereInput | null
    isNot?: VisiteurWhereInput | null
  }

  export type VilleNullableRelationFilter = {
    is?: VilleWhereInput | null
    isNot?: VilleWhereInput | null
  }

  export type VisiteurCountOrderByAggregateInput = {
    idVisiteur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    age?: SortOrder
    adresse?: SortOrder
    idParrain?: SortOrder
    idVille?: SortOrder
  }

  export type VisiteurAvgOrderByAggregateInput = {
    idVisiteur?: SortOrder
    age?: SortOrder
    idParrain?: SortOrder
    idVille?: SortOrder
  }

  export type VisiteurMaxOrderByAggregateInput = {
    idVisiteur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    age?: SortOrder
    adresse?: SortOrder
    idParrain?: SortOrder
    idVille?: SortOrder
  }

  export type VisiteurMinOrderByAggregateInput = {
    idVisiteur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    age?: SortOrder
    adresse?: SortOrder
    idParrain?: SortOrder
    idVille?: SortOrder
  }

  export type VisiteurSumOrderByAggregateInput = {
    idVisiteur?: SortOrder
    age?: SortOrder
    idParrain?: SortOrder
    idVille?: SortOrder
  }

  export type StyleCreateNestedOneWithoutArtisteInput = {
    create?: XOR<StyleCreateWithoutArtisteInput, StyleUncheckedCreateWithoutArtisteInput>
    connectOrCreate?: StyleCreateOrConnectWithoutArtisteInput
    connect?: StyleWhereUniqueInput
  }

  export type RealiseCreateNestedManyWithoutArtisteInput = {
    create?: XOR<RealiseCreateWithoutArtisteInput, RealiseUncheckedCreateWithoutArtisteInput> | RealiseCreateWithoutArtisteInput[] | RealiseUncheckedCreateWithoutArtisteInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutArtisteInput | RealiseCreateOrConnectWithoutArtisteInput[]
    createMany?: RealiseCreateManyArtisteInputEnvelope
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
  }

  export type RealiseUncheckedCreateNestedManyWithoutArtisteInput = {
    create?: XOR<RealiseCreateWithoutArtisteInput, RealiseUncheckedCreateWithoutArtisteInput> | RealiseCreateWithoutArtisteInput[] | RealiseUncheckedCreateWithoutArtisteInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutArtisteInput | RealiseCreateOrConnectWithoutArtisteInput[]
    createMany?: RealiseCreateManyArtisteInputEnvelope
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StyleUpdateOneWithoutArtisteNestedInput = {
    create?: XOR<StyleCreateWithoutArtisteInput, StyleUncheckedCreateWithoutArtisteInput>
    connectOrCreate?: StyleCreateOrConnectWithoutArtisteInput
    upsert?: StyleUpsertWithoutArtisteInput
    disconnect?: StyleWhereInput | boolean
    delete?: StyleWhereInput | boolean
    connect?: StyleWhereUniqueInput
    update?: XOR<XOR<StyleUpdateToOneWithWhereWithoutArtisteInput, StyleUpdateWithoutArtisteInput>, StyleUncheckedUpdateWithoutArtisteInput>
  }

  export type RealiseUpdateManyWithoutArtisteNestedInput = {
    create?: XOR<RealiseCreateWithoutArtisteInput, RealiseUncheckedCreateWithoutArtisteInput> | RealiseCreateWithoutArtisteInput[] | RealiseUncheckedCreateWithoutArtisteInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutArtisteInput | RealiseCreateOrConnectWithoutArtisteInput[]
    upsert?: RealiseUpsertWithWhereUniqueWithoutArtisteInput | RealiseUpsertWithWhereUniqueWithoutArtisteInput[]
    createMany?: RealiseCreateManyArtisteInputEnvelope
    set?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    disconnect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    delete?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    update?: RealiseUpdateWithWhereUniqueWithoutArtisteInput | RealiseUpdateWithWhereUniqueWithoutArtisteInput[]
    updateMany?: RealiseUpdateManyWithWhereWithoutArtisteInput | RealiseUpdateManyWithWhereWithoutArtisteInput[]
    deleteMany?: RealiseScalarWhereInput | RealiseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RealiseUncheckedUpdateManyWithoutArtisteNestedInput = {
    create?: XOR<RealiseCreateWithoutArtisteInput, RealiseUncheckedCreateWithoutArtisteInput> | RealiseCreateWithoutArtisteInput[] | RealiseUncheckedCreateWithoutArtisteInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutArtisteInput | RealiseCreateOrConnectWithoutArtisteInput[]
    upsert?: RealiseUpsertWithWhereUniqueWithoutArtisteInput | RealiseUpsertWithWhereUniqueWithoutArtisteInput[]
    createMany?: RealiseCreateManyArtisteInputEnvelope
    set?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    disconnect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    delete?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    update?: RealiseUpdateWithWhereUniqueWithoutArtisteInput | RealiseUpdateWithWhereUniqueWithoutArtisteInput[]
    updateMany?: RealiseUpdateManyWithWhereWithoutArtisteInput | RealiseUpdateManyWithWhereWithoutArtisteInput[]
    deleteMany?: RealiseScalarWhereInput | RealiseScalarWhereInput[]
  }

  export type VilleCreateNestedOneWithoutConcertInput = {
    create?: XOR<VilleCreateWithoutConcertInput, VilleUncheckedCreateWithoutConcertInput>
    connectOrCreate?: VilleCreateOrConnectWithoutConcertInput
    connect?: VilleWhereUniqueInput
  }

  export type JoueCreateNestedManyWithoutConcertInput = {
    create?: XOR<JoueCreateWithoutConcertInput, JoueUncheckedCreateWithoutConcertInput> | JoueCreateWithoutConcertInput[] | JoueUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutConcertInput | JoueCreateOrConnectWithoutConcertInput[]
    createMany?: JoueCreateManyConcertInputEnvelope
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
  }

  export type ParticipeCreateNestedManyWithoutConcertInput = {
    create?: XOR<ParticipeCreateWithoutConcertInput, ParticipeUncheckedCreateWithoutConcertInput> | ParticipeCreateWithoutConcertInput[] | ParticipeUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutConcertInput | ParticipeCreateOrConnectWithoutConcertInput[]
    createMany?: ParticipeCreateManyConcertInputEnvelope
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
  }

  export type RealiseCreateNestedManyWithoutConcertInput = {
    create?: XOR<RealiseCreateWithoutConcertInput, RealiseUncheckedCreateWithoutConcertInput> | RealiseCreateWithoutConcertInput[] | RealiseUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutConcertInput | RealiseCreateOrConnectWithoutConcertInput[]
    createMany?: RealiseCreateManyConcertInputEnvelope
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
  }

  export type JoueUncheckedCreateNestedManyWithoutConcertInput = {
    create?: XOR<JoueCreateWithoutConcertInput, JoueUncheckedCreateWithoutConcertInput> | JoueCreateWithoutConcertInput[] | JoueUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutConcertInput | JoueCreateOrConnectWithoutConcertInput[]
    createMany?: JoueCreateManyConcertInputEnvelope
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
  }

  export type ParticipeUncheckedCreateNestedManyWithoutConcertInput = {
    create?: XOR<ParticipeCreateWithoutConcertInput, ParticipeUncheckedCreateWithoutConcertInput> | ParticipeCreateWithoutConcertInput[] | ParticipeUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutConcertInput | ParticipeCreateOrConnectWithoutConcertInput[]
    createMany?: ParticipeCreateManyConcertInputEnvelope
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
  }

  export type RealiseUncheckedCreateNestedManyWithoutConcertInput = {
    create?: XOR<RealiseCreateWithoutConcertInput, RealiseUncheckedCreateWithoutConcertInput> | RealiseCreateWithoutConcertInput[] | RealiseUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutConcertInput | RealiseCreateOrConnectWithoutConcertInput[]
    createMany?: RealiseCreateManyConcertInputEnvelope
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VilleUpdateOneRequiredWithoutConcertNestedInput = {
    create?: XOR<VilleCreateWithoutConcertInput, VilleUncheckedCreateWithoutConcertInput>
    connectOrCreate?: VilleCreateOrConnectWithoutConcertInput
    upsert?: VilleUpsertWithoutConcertInput
    connect?: VilleWhereUniqueInput
    update?: XOR<XOR<VilleUpdateToOneWithWhereWithoutConcertInput, VilleUpdateWithoutConcertInput>, VilleUncheckedUpdateWithoutConcertInput>
  }

  export type JoueUpdateManyWithoutConcertNestedInput = {
    create?: XOR<JoueCreateWithoutConcertInput, JoueUncheckedCreateWithoutConcertInput> | JoueCreateWithoutConcertInput[] | JoueUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutConcertInput | JoueCreateOrConnectWithoutConcertInput[]
    upsert?: JoueUpsertWithWhereUniqueWithoutConcertInput | JoueUpsertWithWhereUniqueWithoutConcertInput[]
    createMany?: JoueCreateManyConcertInputEnvelope
    set?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    disconnect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    delete?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    update?: JoueUpdateWithWhereUniqueWithoutConcertInput | JoueUpdateWithWhereUniqueWithoutConcertInput[]
    updateMany?: JoueUpdateManyWithWhereWithoutConcertInput | JoueUpdateManyWithWhereWithoutConcertInput[]
    deleteMany?: JoueScalarWhereInput | JoueScalarWhereInput[]
  }

  export type ParticipeUpdateManyWithoutConcertNestedInput = {
    create?: XOR<ParticipeCreateWithoutConcertInput, ParticipeUncheckedCreateWithoutConcertInput> | ParticipeCreateWithoutConcertInput[] | ParticipeUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutConcertInput | ParticipeCreateOrConnectWithoutConcertInput[]
    upsert?: ParticipeUpsertWithWhereUniqueWithoutConcertInput | ParticipeUpsertWithWhereUniqueWithoutConcertInput[]
    createMany?: ParticipeCreateManyConcertInputEnvelope
    set?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    disconnect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    delete?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    update?: ParticipeUpdateWithWhereUniqueWithoutConcertInput | ParticipeUpdateWithWhereUniqueWithoutConcertInput[]
    updateMany?: ParticipeUpdateManyWithWhereWithoutConcertInput | ParticipeUpdateManyWithWhereWithoutConcertInput[]
    deleteMany?: ParticipeScalarWhereInput | ParticipeScalarWhereInput[]
  }

  export type RealiseUpdateManyWithoutConcertNestedInput = {
    create?: XOR<RealiseCreateWithoutConcertInput, RealiseUncheckedCreateWithoutConcertInput> | RealiseCreateWithoutConcertInput[] | RealiseUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutConcertInput | RealiseCreateOrConnectWithoutConcertInput[]
    upsert?: RealiseUpsertWithWhereUniqueWithoutConcertInput | RealiseUpsertWithWhereUniqueWithoutConcertInput[]
    createMany?: RealiseCreateManyConcertInputEnvelope
    set?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    disconnect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    delete?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    update?: RealiseUpdateWithWhereUniqueWithoutConcertInput | RealiseUpdateWithWhereUniqueWithoutConcertInput[]
    updateMany?: RealiseUpdateManyWithWhereWithoutConcertInput | RealiseUpdateManyWithWhereWithoutConcertInput[]
    deleteMany?: RealiseScalarWhereInput | RealiseScalarWhereInput[]
  }

  export type JoueUncheckedUpdateManyWithoutConcertNestedInput = {
    create?: XOR<JoueCreateWithoutConcertInput, JoueUncheckedCreateWithoutConcertInput> | JoueCreateWithoutConcertInput[] | JoueUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutConcertInput | JoueCreateOrConnectWithoutConcertInput[]
    upsert?: JoueUpsertWithWhereUniqueWithoutConcertInput | JoueUpsertWithWhereUniqueWithoutConcertInput[]
    createMany?: JoueCreateManyConcertInputEnvelope
    set?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    disconnect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    delete?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    update?: JoueUpdateWithWhereUniqueWithoutConcertInput | JoueUpdateWithWhereUniqueWithoutConcertInput[]
    updateMany?: JoueUpdateManyWithWhereWithoutConcertInput | JoueUpdateManyWithWhereWithoutConcertInput[]
    deleteMany?: JoueScalarWhereInput | JoueScalarWhereInput[]
  }

  export type ParticipeUncheckedUpdateManyWithoutConcertNestedInput = {
    create?: XOR<ParticipeCreateWithoutConcertInput, ParticipeUncheckedCreateWithoutConcertInput> | ParticipeCreateWithoutConcertInput[] | ParticipeUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutConcertInput | ParticipeCreateOrConnectWithoutConcertInput[]
    upsert?: ParticipeUpsertWithWhereUniqueWithoutConcertInput | ParticipeUpsertWithWhereUniqueWithoutConcertInput[]
    createMany?: ParticipeCreateManyConcertInputEnvelope
    set?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    disconnect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    delete?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    update?: ParticipeUpdateWithWhereUniqueWithoutConcertInput | ParticipeUpdateWithWhereUniqueWithoutConcertInput[]
    updateMany?: ParticipeUpdateManyWithWhereWithoutConcertInput | ParticipeUpdateManyWithWhereWithoutConcertInput[]
    deleteMany?: ParticipeScalarWhereInput | ParticipeScalarWhereInput[]
  }

  export type RealiseUncheckedUpdateManyWithoutConcertNestedInput = {
    create?: XOR<RealiseCreateWithoutConcertInput, RealiseUncheckedCreateWithoutConcertInput> | RealiseCreateWithoutConcertInput[] | RealiseUncheckedCreateWithoutConcertInput[]
    connectOrCreate?: RealiseCreateOrConnectWithoutConcertInput | RealiseCreateOrConnectWithoutConcertInput[]
    upsert?: RealiseUpsertWithWhereUniqueWithoutConcertInput | RealiseUpsertWithWhereUniqueWithoutConcertInput[]
    createMany?: RealiseCreateManyConcertInputEnvelope
    set?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    disconnect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    delete?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    connect?: RealiseWhereUniqueInput | RealiseWhereUniqueInput[]
    update?: RealiseUpdateWithWhereUniqueWithoutConcertInput | RealiseUpdateWithWhereUniqueWithoutConcertInput[]
    updateMany?: RealiseUpdateManyWithWhereWithoutConcertInput | RealiseUpdateManyWithWhereWithoutConcertInput[]
    deleteMany?: RealiseScalarWhereInput | RealiseScalarWhereInput[]
  }

  export type ConcertCreateNestedOneWithoutJoueInput = {
    create?: XOR<ConcertCreateWithoutJoueInput, ConcertUncheckedCreateWithoutJoueInput>
    connectOrCreate?: ConcertCreateOrConnectWithoutJoueInput
    connect?: ConcertWhereUniqueInput
  }

  export type StyleCreateNestedOneWithoutJoueInput = {
    create?: XOR<StyleCreateWithoutJoueInput, StyleUncheckedCreateWithoutJoueInput>
    connectOrCreate?: StyleCreateOrConnectWithoutJoueInput
    connect?: StyleWhereUniqueInput
  }

  export type ConcertUpdateOneRequiredWithoutJoueNestedInput = {
    create?: XOR<ConcertCreateWithoutJoueInput, ConcertUncheckedCreateWithoutJoueInput>
    connectOrCreate?: ConcertCreateOrConnectWithoutJoueInput
    upsert?: ConcertUpsertWithoutJoueInput
    connect?: ConcertWhereUniqueInput
    update?: XOR<XOR<ConcertUpdateToOneWithWhereWithoutJoueInput, ConcertUpdateWithoutJoueInput>, ConcertUncheckedUpdateWithoutJoueInput>
  }

  export type StyleUpdateOneRequiredWithoutJoueNestedInput = {
    create?: XOR<StyleCreateWithoutJoueInput, StyleUncheckedCreateWithoutJoueInput>
    connectOrCreate?: StyleCreateOrConnectWithoutJoueInput
    upsert?: StyleUpsertWithoutJoueInput
    connect?: StyleWhereUniqueInput
    update?: XOR<XOR<StyleUpdateToOneWithWhereWithoutJoueInput, StyleUpdateWithoutJoueInput>, StyleUncheckedUpdateWithoutJoueInput>
  }

  export type ConcertCreateNestedOneWithoutParticipeInput = {
    create?: XOR<ConcertCreateWithoutParticipeInput, ConcertUncheckedCreateWithoutParticipeInput>
    connectOrCreate?: ConcertCreateOrConnectWithoutParticipeInput
    connect?: ConcertWhereUniqueInput
  }

  export type VisiteurCreateNestedOneWithoutParticipeInput = {
    create?: XOR<VisiteurCreateWithoutParticipeInput, VisiteurUncheckedCreateWithoutParticipeInput>
    connectOrCreate?: VisiteurCreateOrConnectWithoutParticipeInput
    connect?: VisiteurWhereUniqueInput
  }

  export type ConcertUpdateOneRequiredWithoutParticipeNestedInput = {
    create?: XOR<ConcertCreateWithoutParticipeInput, ConcertUncheckedCreateWithoutParticipeInput>
    connectOrCreate?: ConcertCreateOrConnectWithoutParticipeInput
    upsert?: ConcertUpsertWithoutParticipeInput
    connect?: ConcertWhereUniqueInput
    update?: XOR<XOR<ConcertUpdateToOneWithWhereWithoutParticipeInput, ConcertUpdateWithoutParticipeInput>, ConcertUncheckedUpdateWithoutParticipeInput>
  }

  export type VisiteurUpdateOneRequiredWithoutParticipeNestedInput = {
    create?: XOR<VisiteurCreateWithoutParticipeInput, VisiteurUncheckedCreateWithoutParticipeInput>
    connectOrCreate?: VisiteurCreateOrConnectWithoutParticipeInput
    upsert?: VisiteurUpsertWithoutParticipeInput
    connect?: VisiteurWhereUniqueInput
    update?: XOR<XOR<VisiteurUpdateToOneWithWhereWithoutParticipeInput, VisiteurUpdateWithoutParticipeInput>, VisiteurUncheckedUpdateWithoutParticipeInput>
  }

  export type ArtisteCreateNestedOneWithoutRealiseInput = {
    create?: XOR<ArtisteCreateWithoutRealiseInput, ArtisteUncheckedCreateWithoutRealiseInput>
    connectOrCreate?: ArtisteCreateOrConnectWithoutRealiseInput
    connect?: ArtisteWhereUniqueInput
  }

  export type ConcertCreateNestedOneWithoutRealiseInput = {
    create?: XOR<ConcertCreateWithoutRealiseInput, ConcertUncheckedCreateWithoutRealiseInput>
    connectOrCreate?: ConcertCreateOrConnectWithoutRealiseInput
    connect?: ConcertWhereUniqueInput
  }

  export type ArtisteUpdateOneRequiredWithoutRealiseNestedInput = {
    create?: XOR<ArtisteCreateWithoutRealiseInput, ArtisteUncheckedCreateWithoutRealiseInput>
    connectOrCreate?: ArtisteCreateOrConnectWithoutRealiseInput
    upsert?: ArtisteUpsertWithoutRealiseInput
    connect?: ArtisteWhereUniqueInput
    update?: XOR<XOR<ArtisteUpdateToOneWithWhereWithoutRealiseInput, ArtisteUpdateWithoutRealiseInput>, ArtisteUncheckedUpdateWithoutRealiseInput>
  }

  export type ConcertUpdateOneRequiredWithoutRealiseNestedInput = {
    create?: XOR<ConcertCreateWithoutRealiseInput, ConcertUncheckedCreateWithoutRealiseInput>
    connectOrCreate?: ConcertCreateOrConnectWithoutRealiseInput
    upsert?: ConcertUpsertWithoutRealiseInput
    connect?: ConcertWhereUniqueInput
    update?: XOR<XOR<ConcertUpdateToOneWithWhereWithoutRealiseInput, ConcertUpdateWithoutRealiseInput>, ConcertUncheckedUpdateWithoutRealiseInput>
  }

  export type ArtisteCreateNestedManyWithoutStyleInput = {
    create?: XOR<ArtisteCreateWithoutStyleInput, ArtisteUncheckedCreateWithoutStyleInput> | ArtisteCreateWithoutStyleInput[] | ArtisteUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: ArtisteCreateOrConnectWithoutStyleInput | ArtisteCreateOrConnectWithoutStyleInput[]
    createMany?: ArtisteCreateManyStyleInputEnvelope
    connect?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
  }

  export type JoueCreateNestedManyWithoutStyleInput = {
    create?: XOR<JoueCreateWithoutStyleInput, JoueUncheckedCreateWithoutStyleInput> | JoueCreateWithoutStyleInput[] | JoueUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutStyleInput | JoueCreateOrConnectWithoutStyleInput[]
    createMany?: JoueCreateManyStyleInputEnvelope
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
  }

  export type ArtisteUncheckedCreateNestedManyWithoutStyleInput = {
    create?: XOR<ArtisteCreateWithoutStyleInput, ArtisteUncheckedCreateWithoutStyleInput> | ArtisteCreateWithoutStyleInput[] | ArtisteUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: ArtisteCreateOrConnectWithoutStyleInput | ArtisteCreateOrConnectWithoutStyleInput[]
    createMany?: ArtisteCreateManyStyleInputEnvelope
    connect?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
  }

  export type JoueUncheckedCreateNestedManyWithoutStyleInput = {
    create?: XOR<JoueCreateWithoutStyleInput, JoueUncheckedCreateWithoutStyleInput> | JoueCreateWithoutStyleInput[] | JoueUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutStyleInput | JoueCreateOrConnectWithoutStyleInput[]
    createMany?: JoueCreateManyStyleInputEnvelope
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
  }

  export type ArtisteUpdateManyWithoutStyleNestedInput = {
    create?: XOR<ArtisteCreateWithoutStyleInput, ArtisteUncheckedCreateWithoutStyleInput> | ArtisteCreateWithoutStyleInput[] | ArtisteUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: ArtisteCreateOrConnectWithoutStyleInput | ArtisteCreateOrConnectWithoutStyleInput[]
    upsert?: ArtisteUpsertWithWhereUniqueWithoutStyleInput | ArtisteUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: ArtisteCreateManyStyleInputEnvelope
    set?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    disconnect?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    delete?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    connect?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    update?: ArtisteUpdateWithWhereUniqueWithoutStyleInput | ArtisteUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: ArtisteUpdateManyWithWhereWithoutStyleInput | ArtisteUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: ArtisteScalarWhereInput | ArtisteScalarWhereInput[]
  }

  export type JoueUpdateManyWithoutStyleNestedInput = {
    create?: XOR<JoueCreateWithoutStyleInput, JoueUncheckedCreateWithoutStyleInput> | JoueCreateWithoutStyleInput[] | JoueUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutStyleInput | JoueCreateOrConnectWithoutStyleInput[]
    upsert?: JoueUpsertWithWhereUniqueWithoutStyleInput | JoueUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: JoueCreateManyStyleInputEnvelope
    set?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    disconnect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    delete?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    update?: JoueUpdateWithWhereUniqueWithoutStyleInput | JoueUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: JoueUpdateManyWithWhereWithoutStyleInput | JoueUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: JoueScalarWhereInput | JoueScalarWhereInput[]
  }

  export type ArtisteUncheckedUpdateManyWithoutStyleNestedInput = {
    create?: XOR<ArtisteCreateWithoutStyleInput, ArtisteUncheckedCreateWithoutStyleInput> | ArtisteCreateWithoutStyleInput[] | ArtisteUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: ArtisteCreateOrConnectWithoutStyleInput | ArtisteCreateOrConnectWithoutStyleInput[]
    upsert?: ArtisteUpsertWithWhereUniqueWithoutStyleInput | ArtisteUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: ArtisteCreateManyStyleInputEnvelope
    set?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    disconnect?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    delete?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    connect?: ArtisteWhereUniqueInput | ArtisteWhereUniqueInput[]
    update?: ArtisteUpdateWithWhereUniqueWithoutStyleInput | ArtisteUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: ArtisteUpdateManyWithWhereWithoutStyleInput | ArtisteUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: ArtisteScalarWhereInput | ArtisteScalarWhereInput[]
  }

  export type JoueUncheckedUpdateManyWithoutStyleNestedInput = {
    create?: XOR<JoueCreateWithoutStyleInput, JoueUncheckedCreateWithoutStyleInput> | JoueCreateWithoutStyleInput[] | JoueUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: JoueCreateOrConnectWithoutStyleInput | JoueCreateOrConnectWithoutStyleInput[]
    upsert?: JoueUpsertWithWhereUniqueWithoutStyleInput | JoueUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: JoueCreateManyStyleInputEnvelope
    set?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    disconnect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    delete?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    connect?: JoueWhereUniqueInput | JoueWhereUniqueInput[]
    update?: JoueUpdateWithWhereUniqueWithoutStyleInput | JoueUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: JoueUpdateManyWithWhereWithoutStyleInput | JoueUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: JoueScalarWhereInput | JoueScalarWhereInput[]
  }

  export type ConcertCreateNestedManyWithoutVilleInput = {
    create?: XOR<ConcertCreateWithoutVilleInput, ConcertUncheckedCreateWithoutVilleInput> | ConcertCreateWithoutVilleInput[] | ConcertUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: ConcertCreateOrConnectWithoutVilleInput | ConcertCreateOrConnectWithoutVilleInput[]
    createMany?: ConcertCreateManyVilleInputEnvelope
    connect?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
  }

  export type VisiteurCreateNestedManyWithoutVilleInput = {
    create?: XOR<VisiteurCreateWithoutVilleInput, VisiteurUncheckedCreateWithoutVilleInput> | VisiteurCreateWithoutVilleInput[] | VisiteurUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVilleInput | VisiteurCreateOrConnectWithoutVilleInput[]
    createMany?: VisiteurCreateManyVilleInputEnvelope
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
  }

  export type ConcertUncheckedCreateNestedManyWithoutVilleInput = {
    create?: XOR<ConcertCreateWithoutVilleInput, ConcertUncheckedCreateWithoutVilleInput> | ConcertCreateWithoutVilleInput[] | ConcertUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: ConcertCreateOrConnectWithoutVilleInput | ConcertCreateOrConnectWithoutVilleInput[]
    createMany?: ConcertCreateManyVilleInputEnvelope
    connect?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
  }

  export type VisiteurUncheckedCreateNestedManyWithoutVilleInput = {
    create?: XOR<VisiteurCreateWithoutVilleInput, VisiteurUncheckedCreateWithoutVilleInput> | VisiteurCreateWithoutVilleInput[] | VisiteurUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVilleInput | VisiteurCreateOrConnectWithoutVilleInput[]
    createMany?: VisiteurCreateManyVilleInputEnvelope
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
  }

  export type ConcertUpdateManyWithoutVilleNestedInput = {
    create?: XOR<ConcertCreateWithoutVilleInput, ConcertUncheckedCreateWithoutVilleInput> | ConcertCreateWithoutVilleInput[] | ConcertUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: ConcertCreateOrConnectWithoutVilleInput | ConcertCreateOrConnectWithoutVilleInput[]
    upsert?: ConcertUpsertWithWhereUniqueWithoutVilleInput | ConcertUpsertWithWhereUniqueWithoutVilleInput[]
    createMany?: ConcertCreateManyVilleInputEnvelope
    set?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    disconnect?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    delete?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    connect?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    update?: ConcertUpdateWithWhereUniqueWithoutVilleInput | ConcertUpdateWithWhereUniqueWithoutVilleInput[]
    updateMany?: ConcertUpdateManyWithWhereWithoutVilleInput | ConcertUpdateManyWithWhereWithoutVilleInput[]
    deleteMany?: ConcertScalarWhereInput | ConcertScalarWhereInput[]
  }

  export type VisiteurUpdateManyWithoutVilleNestedInput = {
    create?: XOR<VisiteurCreateWithoutVilleInput, VisiteurUncheckedCreateWithoutVilleInput> | VisiteurCreateWithoutVilleInput[] | VisiteurUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVilleInput | VisiteurCreateOrConnectWithoutVilleInput[]
    upsert?: VisiteurUpsertWithWhereUniqueWithoutVilleInput | VisiteurUpsertWithWhereUniqueWithoutVilleInput[]
    createMany?: VisiteurCreateManyVilleInputEnvelope
    set?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    disconnect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    delete?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    update?: VisiteurUpdateWithWhereUniqueWithoutVilleInput | VisiteurUpdateWithWhereUniqueWithoutVilleInput[]
    updateMany?: VisiteurUpdateManyWithWhereWithoutVilleInput | VisiteurUpdateManyWithWhereWithoutVilleInput[]
    deleteMany?: VisiteurScalarWhereInput | VisiteurScalarWhereInput[]
  }

  export type ConcertUncheckedUpdateManyWithoutVilleNestedInput = {
    create?: XOR<ConcertCreateWithoutVilleInput, ConcertUncheckedCreateWithoutVilleInput> | ConcertCreateWithoutVilleInput[] | ConcertUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: ConcertCreateOrConnectWithoutVilleInput | ConcertCreateOrConnectWithoutVilleInput[]
    upsert?: ConcertUpsertWithWhereUniqueWithoutVilleInput | ConcertUpsertWithWhereUniqueWithoutVilleInput[]
    createMany?: ConcertCreateManyVilleInputEnvelope
    set?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    disconnect?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    delete?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    connect?: ConcertWhereUniqueInput | ConcertWhereUniqueInput[]
    update?: ConcertUpdateWithWhereUniqueWithoutVilleInput | ConcertUpdateWithWhereUniqueWithoutVilleInput[]
    updateMany?: ConcertUpdateManyWithWhereWithoutVilleInput | ConcertUpdateManyWithWhereWithoutVilleInput[]
    deleteMany?: ConcertScalarWhereInput | ConcertScalarWhereInput[]
  }

  export type VisiteurUncheckedUpdateManyWithoutVilleNestedInput = {
    create?: XOR<VisiteurCreateWithoutVilleInput, VisiteurUncheckedCreateWithoutVilleInput> | VisiteurCreateWithoutVilleInput[] | VisiteurUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVilleInput | VisiteurCreateOrConnectWithoutVilleInput[]
    upsert?: VisiteurUpsertWithWhereUniqueWithoutVilleInput | VisiteurUpsertWithWhereUniqueWithoutVilleInput[]
    createMany?: VisiteurCreateManyVilleInputEnvelope
    set?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    disconnect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    delete?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    update?: VisiteurUpdateWithWhereUniqueWithoutVilleInput | VisiteurUpdateWithWhereUniqueWithoutVilleInput[]
    updateMany?: VisiteurUpdateManyWithWhereWithoutVilleInput | VisiteurUpdateManyWithWhereWithoutVilleInput[]
    deleteMany?: VisiteurScalarWhereInput | VisiteurScalarWhereInput[]
  }

  export type ParticipeCreateNestedManyWithoutVisiteurInput = {
    create?: XOR<ParticipeCreateWithoutVisiteurInput, ParticipeUncheckedCreateWithoutVisiteurInput> | ParticipeCreateWithoutVisiteurInput[] | ParticipeUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutVisiteurInput | ParticipeCreateOrConnectWithoutVisiteurInput[]
    createMany?: ParticipeCreateManyVisiteurInputEnvelope
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
  }

  export type VisiteurCreateNestedOneWithoutOther_VisiteurInput = {
    create?: XOR<VisiteurCreateWithoutOther_VisiteurInput, VisiteurUncheckedCreateWithoutOther_VisiteurInput>
    connectOrCreate?: VisiteurCreateOrConnectWithoutOther_VisiteurInput
    connect?: VisiteurWhereUniqueInput
  }

  export type VisiteurCreateNestedManyWithoutVisiteurInput = {
    create?: XOR<VisiteurCreateWithoutVisiteurInput, VisiteurUncheckedCreateWithoutVisiteurInput> | VisiteurCreateWithoutVisiteurInput[] | VisiteurUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVisiteurInput | VisiteurCreateOrConnectWithoutVisiteurInput[]
    createMany?: VisiteurCreateManyVisiteurInputEnvelope
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
  }

  export type VilleCreateNestedOneWithoutVisiteurInput = {
    create?: XOR<VilleCreateWithoutVisiteurInput, VilleUncheckedCreateWithoutVisiteurInput>
    connectOrCreate?: VilleCreateOrConnectWithoutVisiteurInput
    connect?: VilleWhereUniqueInput
  }

  export type ParticipeUncheckedCreateNestedManyWithoutVisiteurInput = {
    create?: XOR<ParticipeCreateWithoutVisiteurInput, ParticipeUncheckedCreateWithoutVisiteurInput> | ParticipeCreateWithoutVisiteurInput[] | ParticipeUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutVisiteurInput | ParticipeCreateOrConnectWithoutVisiteurInput[]
    createMany?: ParticipeCreateManyVisiteurInputEnvelope
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
  }

  export type VisiteurUncheckedCreateNestedManyWithoutVisiteurInput = {
    create?: XOR<VisiteurCreateWithoutVisiteurInput, VisiteurUncheckedCreateWithoutVisiteurInput> | VisiteurCreateWithoutVisiteurInput[] | VisiteurUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVisiteurInput | VisiteurCreateOrConnectWithoutVisiteurInput[]
    createMany?: VisiteurCreateManyVisiteurInputEnvelope
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
  }

  export type ParticipeUpdateManyWithoutVisiteurNestedInput = {
    create?: XOR<ParticipeCreateWithoutVisiteurInput, ParticipeUncheckedCreateWithoutVisiteurInput> | ParticipeCreateWithoutVisiteurInput[] | ParticipeUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutVisiteurInput | ParticipeCreateOrConnectWithoutVisiteurInput[]
    upsert?: ParticipeUpsertWithWhereUniqueWithoutVisiteurInput | ParticipeUpsertWithWhereUniqueWithoutVisiteurInput[]
    createMany?: ParticipeCreateManyVisiteurInputEnvelope
    set?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    disconnect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    delete?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    update?: ParticipeUpdateWithWhereUniqueWithoutVisiteurInput | ParticipeUpdateWithWhereUniqueWithoutVisiteurInput[]
    updateMany?: ParticipeUpdateManyWithWhereWithoutVisiteurInput | ParticipeUpdateManyWithWhereWithoutVisiteurInput[]
    deleteMany?: ParticipeScalarWhereInput | ParticipeScalarWhereInput[]
  }

  export type VisiteurUpdateOneWithoutOther_VisiteurNestedInput = {
    create?: XOR<VisiteurCreateWithoutOther_VisiteurInput, VisiteurUncheckedCreateWithoutOther_VisiteurInput>
    connectOrCreate?: VisiteurCreateOrConnectWithoutOther_VisiteurInput
    upsert?: VisiteurUpsertWithoutOther_VisiteurInput
    disconnect?: VisiteurWhereInput | boolean
    delete?: VisiteurWhereInput | boolean
    connect?: VisiteurWhereUniqueInput
    update?: XOR<XOR<VisiteurUpdateToOneWithWhereWithoutOther_VisiteurInput, VisiteurUpdateWithoutOther_VisiteurInput>, VisiteurUncheckedUpdateWithoutOther_VisiteurInput>
  }

  export type VisiteurUpdateManyWithoutVisiteurNestedInput = {
    create?: XOR<VisiteurCreateWithoutVisiteurInput, VisiteurUncheckedCreateWithoutVisiteurInput> | VisiteurCreateWithoutVisiteurInput[] | VisiteurUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVisiteurInput | VisiteurCreateOrConnectWithoutVisiteurInput[]
    upsert?: VisiteurUpsertWithWhereUniqueWithoutVisiteurInput | VisiteurUpsertWithWhereUniqueWithoutVisiteurInput[]
    createMany?: VisiteurCreateManyVisiteurInputEnvelope
    set?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    disconnect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    delete?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    update?: VisiteurUpdateWithWhereUniqueWithoutVisiteurInput | VisiteurUpdateWithWhereUniqueWithoutVisiteurInput[]
    updateMany?: VisiteurUpdateManyWithWhereWithoutVisiteurInput | VisiteurUpdateManyWithWhereWithoutVisiteurInput[]
    deleteMany?: VisiteurScalarWhereInput | VisiteurScalarWhereInput[]
  }

  export type VilleUpdateOneWithoutVisiteurNestedInput = {
    create?: XOR<VilleCreateWithoutVisiteurInput, VilleUncheckedCreateWithoutVisiteurInput>
    connectOrCreate?: VilleCreateOrConnectWithoutVisiteurInput
    upsert?: VilleUpsertWithoutVisiteurInput
    disconnect?: VilleWhereInput | boolean
    delete?: VilleWhereInput | boolean
    connect?: VilleWhereUniqueInput
    update?: XOR<XOR<VilleUpdateToOneWithWhereWithoutVisiteurInput, VilleUpdateWithoutVisiteurInput>, VilleUncheckedUpdateWithoutVisiteurInput>
  }

  export type ParticipeUncheckedUpdateManyWithoutVisiteurNestedInput = {
    create?: XOR<ParticipeCreateWithoutVisiteurInput, ParticipeUncheckedCreateWithoutVisiteurInput> | ParticipeCreateWithoutVisiteurInput[] | ParticipeUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: ParticipeCreateOrConnectWithoutVisiteurInput | ParticipeCreateOrConnectWithoutVisiteurInput[]
    upsert?: ParticipeUpsertWithWhereUniqueWithoutVisiteurInput | ParticipeUpsertWithWhereUniqueWithoutVisiteurInput[]
    createMany?: ParticipeCreateManyVisiteurInputEnvelope
    set?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    disconnect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    delete?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    connect?: ParticipeWhereUniqueInput | ParticipeWhereUniqueInput[]
    update?: ParticipeUpdateWithWhereUniqueWithoutVisiteurInput | ParticipeUpdateWithWhereUniqueWithoutVisiteurInput[]
    updateMany?: ParticipeUpdateManyWithWhereWithoutVisiteurInput | ParticipeUpdateManyWithWhereWithoutVisiteurInput[]
    deleteMany?: ParticipeScalarWhereInput | ParticipeScalarWhereInput[]
  }

  export type VisiteurUncheckedUpdateManyWithoutVisiteurNestedInput = {
    create?: XOR<VisiteurCreateWithoutVisiteurInput, VisiteurUncheckedCreateWithoutVisiteurInput> | VisiteurCreateWithoutVisiteurInput[] | VisiteurUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteurCreateOrConnectWithoutVisiteurInput | VisiteurCreateOrConnectWithoutVisiteurInput[]
    upsert?: VisiteurUpsertWithWhereUniqueWithoutVisiteurInput | VisiteurUpsertWithWhereUniqueWithoutVisiteurInput[]
    createMany?: VisiteurCreateManyVisiteurInputEnvelope
    set?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    disconnect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    delete?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    connect?: VisiteurWhereUniqueInput | VisiteurWhereUniqueInput[]
    update?: VisiteurUpdateWithWhereUniqueWithoutVisiteurInput | VisiteurUpdateWithWhereUniqueWithoutVisiteurInput[]
    updateMany?: VisiteurUpdateManyWithWhereWithoutVisiteurInput | VisiteurUpdateManyWithWhereWithoutVisiteurInput[]
    deleteMany?: VisiteurScalarWhereInput | VisiteurScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StyleCreateWithoutArtisteInput = {
    libelle?: string | null
    description?: string | null
    Joue?: JoueCreateNestedManyWithoutStyleInput
  }

  export type StyleUncheckedCreateWithoutArtisteInput = {
    idStyle?: number
    libelle?: string | null
    description?: string | null
    Joue?: JoueUncheckedCreateNestedManyWithoutStyleInput
  }

  export type StyleCreateOrConnectWithoutArtisteInput = {
    where: StyleWhereUniqueInput
    create: XOR<StyleCreateWithoutArtisteInput, StyleUncheckedCreateWithoutArtisteInput>
  }

  export type RealiseCreateWithoutArtisteInput = {
    Concert: ConcertCreateNestedOneWithoutRealiseInput
  }

  export type RealiseUncheckedCreateWithoutArtisteInput = {
    idConcert: number
  }

  export type RealiseCreateOrConnectWithoutArtisteInput = {
    where: RealiseWhereUniqueInput
    create: XOR<RealiseCreateWithoutArtisteInput, RealiseUncheckedCreateWithoutArtisteInput>
  }

  export type RealiseCreateManyArtisteInputEnvelope = {
    data: RealiseCreateManyArtisteInput | RealiseCreateManyArtisteInput[]
    skipDuplicates?: boolean
  }

  export type StyleUpsertWithoutArtisteInput = {
    update: XOR<StyleUpdateWithoutArtisteInput, StyleUncheckedUpdateWithoutArtisteInput>
    create: XOR<StyleCreateWithoutArtisteInput, StyleUncheckedCreateWithoutArtisteInput>
    where?: StyleWhereInput
  }

  export type StyleUpdateToOneWithWhereWithoutArtisteInput = {
    where?: StyleWhereInput
    data: XOR<StyleUpdateWithoutArtisteInput, StyleUncheckedUpdateWithoutArtisteInput>
  }

  export type StyleUpdateWithoutArtisteInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Joue?: JoueUpdateManyWithoutStyleNestedInput
  }

  export type StyleUncheckedUpdateWithoutArtisteInput = {
    idStyle?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Joue?: JoueUncheckedUpdateManyWithoutStyleNestedInput
  }

  export type RealiseUpsertWithWhereUniqueWithoutArtisteInput = {
    where: RealiseWhereUniqueInput
    update: XOR<RealiseUpdateWithoutArtisteInput, RealiseUncheckedUpdateWithoutArtisteInput>
    create: XOR<RealiseCreateWithoutArtisteInput, RealiseUncheckedCreateWithoutArtisteInput>
  }

  export type RealiseUpdateWithWhereUniqueWithoutArtisteInput = {
    where: RealiseWhereUniqueInput
    data: XOR<RealiseUpdateWithoutArtisteInput, RealiseUncheckedUpdateWithoutArtisteInput>
  }

  export type RealiseUpdateManyWithWhereWithoutArtisteInput = {
    where: RealiseScalarWhereInput
    data: XOR<RealiseUpdateManyMutationInput, RealiseUncheckedUpdateManyWithoutArtisteInput>
  }

  export type RealiseScalarWhereInput = {
    AND?: RealiseScalarWhereInput | RealiseScalarWhereInput[]
    OR?: RealiseScalarWhereInput[]
    NOT?: RealiseScalarWhereInput | RealiseScalarWhereInput[]
    IdArtiste?: IntFilter<"Realise"> | number
    idConcert?: IntFilter<"Realise"> | number
  }

  export type VilleCreateWithoutConcertInput = {
    nom?: string | null
    coordonnees?: string | null
    Visiteur?: VisiteurCreateNestedManyWithoutVilleInput
  }

  export type VilleUncheckedCreateWithoutConcertInput = {
    idVille?: number
    nom?: string | null
    coordonnees?: string | null
    Visiteur?: VisiteurUncheckedCreateNestedManyWithoutVilleInput
  }

  export type VilleCreateOrConnectWithoutConcertInput = {
    where: VilleWhereUniqueInput
    create: XOR<VilleCreateWithoutConcertInput, VilleUncheckedCreateWithoutConcertInput>
  }

  export type JoueCreateWithoutConcertInput = {
    Style: StyleCreateNestedOneWithoutJoueInput
  }

  export type JoueUncheckedCreateWithoutConcertInput = {
    idStyle: number
  }

  export type JoueCreateOrConnectWithoutConcertInput = {
    where: JoueWhereUniqueInput
    create: XOR<JoueCreateWithoutConcertInput, JoueUncheckedCreateWithoutConcertInput>
  }

  export type JoueCreateManyConcertInputEnvelope = {
    data: JoueCreateManyConcertInput | JoueCreateManyConcertInput[]
    skipDuplicates?: boolean
  }

  export type ParticipeCreateWithoutConcertInput = {
    Visiteur: VisiteurCreateNestedOneWithoutParticipeInput
  }

  export type ParticipeUncheckedCreateWithoutConcertInput = {
    idVisiteur: number
  }

  export type ParticipeCreateOrConnectWithoutConcertInput = {
    where: ParticipeWhereUniqueInput
    create: XOR<ParticipeCreateWithoutConcertInput, ParticipeUncheckedCreateWithoutConcertInput>
  }

  export type ParticipeCreateManyConcertInputEnvelope = {
    data: ParticipeCreateManyConcertInput | ParticipeCreateManyConcertInput[]
    skipDuplicates?: boolean
  }

  export type RealiseCreateWithoutConcertInput = {
    Artiste: ArtisteCreateNestedOneWithoutRealiseInput
  }

  export type RealiseUncheckedCreateWithoutConcertInput = {
    IdArtiste: number
  }

  export type RealiseCreateOrConnectWithoutConcertInput = {
    where: RealiseWhereUniqueInput
    create: XOR<RealiseCreateWithoutConcertInput, RealiseUncheckedCreateWithoutConcertInput>
  }

  export type RealiseCreateManyConcertInputEnvelope = {
    data: RealiseCreateManyConcertInput | RealiseCreateManyConcertInput[]
    skipDuplicates?: boolean
  }

  export type VilleUpsertWithoutConcertInput = {
    update: XOR<VilleUpdateWithoutConcertInput, VilleUncheckedUpdateWithoutConcertInput>
    create: XOR<VilleCreateWithoutConcertInput, VilleUncheckedCreateWithoutConcertInput>
    where?: VilleWhereInput
  }

  export type VilleUpdateToOneWithWhereWithoutConcertInput = {
    where?: VilleWhereInput
    data: XOR<VilleUpdateWithoutConcertInput, VilleUncheckedUpdateWithoutConcertInput>
  }

  export type VilleUpdateWithoutConcertInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
    Visiteur?: VisiteurUpdateManyWithoutVilleNestedInput
  }

  export type VilleUncheckedUpdateWithoutConcertInput = {
    idVille?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
    Visiteur?: VisiteurUncheckedUpdateManyWithoutVilleNestedInput
  }

  export type JoueUpsertWithWhereUniqueWithoutConcertInput = {
    where: JoueWhereUniqueInput
    update: XOR<JoueUpdateWithoutConcertInput, JoueUncheckedUpdateWithoutConcertInput>
    create: XOR<JoueCreateWithoutConcertInput, JoueUncheckedCreateWithoutConcertInput>
  }

  export type JoueUpdateWithWhereUniqueWithoutConcertInput = {
    where: JoueWhereUniqueInput
    data: XOR<JoueUpdateWithoutConcertInput, JoueUncheckedUpdateWithoutConcertInput>
  }

  export type JoueUpdateManyWithWhereWithoutConcertInput = {
    where: JoueScalarWhereInput
    data: XOR<JoueUpdateManyMutationInput, JoueUncheckedUpdateManyWithoutConcertInput>
  }

  export type JoueScalarWhereInput = {
    AND?: JoueScalarWhereInput | JoueScalarWhereInput[]
    OR?: JoueScalarWhereInput[]
    NOT?: JoueScalarWhereInput | JoueScalarWhereInput[]
    idConcert?: IntFilter<"Joue"> | number
    idStyle?: IntFilter<"Joue"> | number
  }

  export type ParticipeUpsertWithWhereUniqueWithoutConcertInput = {
    where: ParticipeWhereUniqueInput
    update: XOR<ParticipeUpdateWithoutConcertInput, ParticipeUncheckedUpdateWithoutConcertInput>
    create: XOR<ParticipeCreateWithoutConcertInput, ParticipeUncheckedCreateWithoutConcertInput>
  }

  export type ParticipeUpdateWithWhereUniqueWithoutConcertInput = {
    where: ParticipeWhereUniqueInput
    data: XOR<ParticipeUpdateWithoutConcertInput, ParticipeUncheckedUpdateWithoutConcertInput>
  }

  export type ParticipeUpdateManyWithWhereWithoutConcertInput = {
    where: ParticipeScalarWhereInput
    data: XOR<ParticipeUpdateManyMutationInput, ParticipeUncheckedUpdateManyWithoutConcertInput>
  }

  export type ParticipeScalarWhereInput = {
    AND?: ParticipeScalarWhereInput | ParticipeScalarWhereInput[]
    OR?: ParticipeScalarWhereInput[]
    NOT?: ParticipeScalarWhereInput | ParticipeScalarWhereInput[]
    idConcert?: IntFilter<"Participe"> | number
    idVisiteur?: IntFilter<"Participe"> | number
  }

  export type RealiseUpsertWithWhereUniqueWithoutConcertInput = {
    where: RealiseWhereUniqueInput
    update: XOR<RealiseUpdateWithoutConcertInput, RealiseUncheckedUpdateWithoutConcertInput>
    create: XOR<RealiseCreateWithoutConcertInput, RealiseUncheckedCreateWithoutConcertInput>
  }

  export type RealiseUpdateWithWhereUniqueWithoutConcertInput = {
    where: RealiseWhereUniqueInput
    data: XOR<RealiseUpdateWithoutConcertInput, RealiseUncheckedUpdateWithoutConcertInput>
  }

  export type RealiseUpdateManyWithWhereWithoutConcertInput = {
    where: RealiseScalarWhereInput
    data: XOR<RealiseUpdateManyMutationInput, RealiseUncheckedUpdateManyWithoutConcertInput>
  }

  export type ConcertCreateWithoutJoueInput = {
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    Ville: VilleCreateNestedOneWithoutConcertInput
    Participe?: ParticipeCreateNestedManyWithoutConcertInput
    Realise?: RealiseCreateNestedManyWithoutConcertInput
  }

  export type ConcertUncheckedCreateWithoutJoueInput = {
    idConcert?: number
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    idVille: number
    Participe?: ParticipeUncheckedCreateNestedManyWithoutConcertInput
    Realise?: RealiseUncheckedCreateNestedManyWithoutConcertInput
  }

  export type ConcertCreateOrConnectWithoutJoueInput = {
    where: ConcertWhereUniqueInput
    create: XOR<ConcertCreateWithoutJoueInput, ConcertUncheckedCreateWithoutJoueInput>
  }

  export type StyleCreateWithoutJoueInput = {
    libelle?: string | null
    description?: string | null
    Artiste?: ArtisteCreateNestedManyWithoutStyleInput
  }

  export type StyleUncheckedCreateWithoutJoueInput = {
    idStyle?: number
    libelle?: string | null
    description?: string | null
    Artiste?: ArtisteUncheckedCreateNestedManyWithoutStyleInput
  }

  export type StyleCreateOrConnectWithoutJoueInput = {
    where: StyleWhereUniqueInput
    create: XOR<StyleCreateWithoutJoueInput, StyleUncheckedCreateWithoutJoueInput>
  }

  export type ConcertUpsertWithoutJoueInput = {
    update: XOR<ConcertUpdateWithoutJoueInput, ConcertUncheckedUpdateWithoutJoueInput>
    create: XOR<ConcertCreateWithoutJoueInput, ConcertUncheckedCreateWithoutJoueInput>
    where?: ConcertWhereInput
  }

  export type ConcertUpdateToOneWithWhereWithoutJoueInput = {
    where?: ConcertWhereInput
    data: XOR<ConcertUpdateWithoutJoueInput, ConcertUncheckedUpdateWithoutJoueInput>
  }

  export type ConcertUpdateWithoutJoueInput = {
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    Ville?: VilleUpdateOneRequiredWithoutConcertNestedInput
    Participe?: ParticipeUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUpdateManyWithoutConcertNestedInput
  }

  export type ConcertUncheckedUpdateWithoutJoueInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: IntFieldUpdateOperationsInput | number
    Participe?: ParticipeUncheckedUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUncheckedUpdateManyWithoutConcertNestedInput
  }

  export type StyleUpsertWithoutJoueInput = {
    update: XOR<StyleUpdateWithoutJoueInput, StyleUncheckedUpdateWithoutJoueInput>
    create: XOR<StyleCreateWithoutJoueInput, StyleUncheckedCreateWithoutJoueInput>
    where?: StyleWhereInput
  }

  export type StyleUpdateToOneWithWhereWithoutJoueInput = {
    where?: StyleWhereInput
    data: XOR<StyleUpdateWithoutJoueInput, StyleUncheckedUpdateWithoutJoueInput>
  }

  export type StyleUpdateWithoutJoueInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Artiste?: ArtisteUpdateManyWithoutStyleNestedInput
  }

  export type StyleUncheckedUpdateWithoutJoueInput = {
    idStyle?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Artiste?: ArtisteUncheckedUpdateManyWithoutStyleNestedInput
  }

  export type ConcertCreateWithoutParticipeInput = {
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    Ville: VilleCreateNestedOneWithoutConcertInput
    Joue?: JoueCreateNestedManyWithoutConcertInput
    Realise?: RealiseCreateNestedManyWithoutConcertInput
  }

  export type ConcertUncheckedCreateWithoutParticipeInput = {
    idConcert?: number
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    idVille: number
    Joue?: JoueUncheckedCreateNestedManyWithoutConcertInput
    Realise?: RealiseUncheckedCreateNestedManyWithoutConcertInput
  }

  export type ConcertCreateOrConnectWithoutParticipeInput = {
    where: ConcertWhereUniqueInput
    create: XOR<ConcertCreateWithoutParticipeInput, ConcertUncheckedCreateWithoutParticipeInput>
  }

  export type VisiteurCreateWithoutParticipeInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    Visiteur?: VisiteurCreateNestedOneWithoutOther_VisiteurInput
    other_Visiteur?: VisiteurCreateNestedManyWithoutVisiteurInput
    Ville?: VilleCreateNestedOneWithoutVisiteurInput
  }

  export type VisiteurUncheckedCreateWithoutParticipeInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idParrain?: number | null
    idVille?: number | null
    other_Visiteur?: VisiteurUncheckedCreateNestedManyWithoutVisiteurInput
  }

  export type VisiteurCreateOrConnectWithoutParticipeInput = {
    where: VisiteurWhereUniqueInput
    create: XOR<VisiteurCreateWithoutParticipeInput, VisiteurUncheckedCreateWithoutParticipeInput>
  }

  export type ConcertUpsertWithoutParticipeInput = {
    update: XOR<ConcertUpdateWithoutParticipeInput, ConcertUncheckedUpdateWithoutParticipeInput>
    create: XOR<ConcertCreateWithoutParticipeInput, ConcertUncheckedCreateWithoutParticipeInput>
    where?: ConcertWhereInput
  }

  export type ConcertUpdateToOneWithWhereWithoutParticipeInput = {
    where?: ConcertWhereInput
    data: XOR<ConcertUpdateWithoutParticipeInput, ConcertUncheckedUpdateWithoutParticipeInput>
  }

  export type ConcertUpdateWithoutParticipeInput = {
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    Ville?: VilleUpdateOneRequiredWithoutConcertNestedInput
    Joue?: JoueUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUpdateManyWithoutConcertNestedInput
  }

  export type ConcertUncheckedUpdateWithoutParticipeInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: IntFieldUpdateOperationsInput | number
    Joue?: JoueUncheckedUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUncheckedUpdateManyWithoutConcertNestedInput
  }

  export type VisiteurUpsertWithoutParticipeInput = {
    update: XOR<VisiteurUpdateWithoutParticipeInput, VisiteurUncheckedUpdateWithoutParticipeInput>
    create: XOR<VisiteurCreateWithoutParticipeInput, VisiteurUncheckedCreateWithoutParticipeInput>
    where?: VisiteurWhereInput
  }

  export type VisiteurUpdateToOneWithWhereWithoutParticipeInput = {
    where?: VisiteurWhereInput
    data: XOR<VisiteurUpdateWithoutParticipeInput, VisiteurUncheckedUpdateWithoutParticipeInput>
  }

  export type VisiteurUpdateWithoutParticipeInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    Visiteur?: VisiteurUpdateOneWithoutOther_VisiteurNestedInput
    other_Visiteur?: VisiteurUpdateManyWithoutVisiteurNestedInput
    Ville?: VilleUpdateOneWithoutVisiteurNestedInput
  }

  export type VisiteurUncheckedUpdateWithoutParticipeInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idParrain?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: NullableIntFieldUpdateOperationsInput | number | null
    other_Visiteur?: VisiteurUncheckedUpdateManyWithoutVisiteurNestedInput
  }

  export type ArtisteCreateWithoutRealiseInput = {
    pseudo?: string | null
    Style?: StyleCreateNestedOneWithoutArtisteInput
  }

  export type ArtisteUncheckedCreateWithoutRealiseInput = {
    IdArtiste?: number
    pseudo?: string | null
    idStyle?: number | null
  }

  export type ArtisteCreateOrConnectWithoutRealiseInput = {
    where: ArtisteWhereUniqueInput
    create: XOR<ArtisteCreateWithoutRealiseInput, ArtisteUncheckedCreateWithoutRealiseInput>
  }

  export type ConcertCreateWithoutRealiseInput = {
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    Ville: VilleCreateNestedOneWithoutConcertInput
    Joue?: JoueCreateNestedManyWithoutConcertInput
    Participe?: ParticipeCreateNestedManyWithoutConcertInput
  }

  export type ConcertUncheckedCreateWithoutRealiseInput = {
    idConcert?: number
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    idVille: number
    Joue?: JoueUncheckedCreateNestedManyWithoutConcertInput
    Participe?: ParticipeUncheckedCreateNestedManyWithoutConcertInput
  }

  export type ConcertCreateOrConnectWithoutRealiseInput = {
    where: ConcertWhereUniqueInput
    create: XOR<ConcertCreateWithoutRealiseInput, ConcertUncheckedCreateWithoutRealiseInput>
  }

  export type ArtisteUpsertWithoutRealiseInput = {
    update: XOR<ArtisteUpdateWithoutRealiseInput, ArtisteUncheckedUpdateWithoutRealiseInput>
    create: XOR<ArtisteCreateWithoutRealiseInput, ArtisteUncheckedCreateWithoutRealiseInput>
    where?: ArtisteWhereInput
  }

  export type ArtisteUpdateToOneWithWhereWithoutRealiseInput = {
    where?: ArtisteWhereInput
    data: XOR<ArtisteUpdateWithoutRealiseInput, ArtisteUncheckedUpdateWithoutRealiseInput>
  }

  export type ArtisteUpdateWithoutRealiseInput = {
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    Style?: StyleUpdateOneWithoutArtisteNestedInput
  }

  export type ArtisteUncheckedUpdateWithoutRealiseInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    idStyle?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConcertUpsertWithoutRealiseInput = {
    update: XOR<ConcertUpdateWithoutRealiseInput, ConcertUncheckedUpdateWithoutRealiseInput>
    create: XOR<ConcertCreateWithoutRealiseInput, ConcertUncheckedCreateWithoutRealiseInput>
    where?: ConcertWhereInput
  }

  export type ConcertUpdateToOneWithWhereWithoutRealiseInput = {
    where?: ConcertWhereInput
    data: XOR<ConcertUpdateWithoutRealiseInput, ConcertUncheckedUpdateWithoutRealiseInput>
  }

  export type ConcertUpdateWithoutRealiseInput = {
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    Ville?: VilleUpdateOneRequiredWithoutConcertNestedInput
    Joue?: JoueUpdateManyWithoutConcertNestedInput
    Participe?: ParticipeUpdateManyWithoutConcertNestedInput
  }

  export type ConcertUncheckedUpdateWithoutRealiseInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: IntFieldUpdateOperationsInput | number
    Joue?: JoueUncheckedUpdateManyWithoutConcertNestedInput
    Participe?: ParticipeUncheckedUpdateManyWithoutConcertNestedInput
  }

  export type ArtisteCreateWithoutStyleInput = {
    pseudo?: string | null
    Realise?: RealiseCreateNestedManyWithoutArtisteInput
  }

  export type ArtisteUncheckedCreateWithoutStyleInput = {
    IdArtiste?: number
    pseudo?: string | null
    Realise?: RealiseUncheckedCreateNestedManyWithoutArtisteInput
  }

  export type ArtisteCreateOrConnectWithoutStyleInput = {
    where: ArtisteWhereUniqueInput
    create: XOR<ArtisteCreateWithoutStyleInput, ArtisteUncheckedCreateWithoutStyleInput>
  }

  export type ArtisteCreateManyStyleInputEnvelope = {
    data: ArtisteCreateManyStyleInput | ArtisteCreateManyStyleInput[]
    skipDuplicates?: boolean
  }

  export type JoueCreateWithoutStyleInput = {
    Concert: ConcertCreateNestedOneWithoutJoueInput
  }

  export type JoueUncheckedCreateWithoutStyleInput = {
    idConcert: number
  }

  export type JoueCreateOrConnectWithoutStyleInput = {
    where: JoueWhereUniqueInput
    create: XOR<JoueCreateWithoutStyleInput, JoueUncheckedCreateWithoutStyleInput>
  }

  export type JoueCreateManyStyleInputEnvelope = {
    data: JoueCreateManyStyleInput | JoueCreateManyStyleInput[]
    skipDuplicates?: boolean
  }

  export type ArtisteUpsertWithWhereUniqueWithoutStyleInput = {
    where: ArtisteWhereUniqueInput
    update: XOR<ArtisteUpdateWithoutStyleInput, ArtisteUncheckedUpdateWithoutStyleInput>
    create: XOR<ArtisteCreateWithoutStyleInput, ArtisteUncheckedCreateWithoutStyleInput>
  }

  export type ArtisteUpdateWithWhereUniqueWithoutStyleInput = {
    where: ArtisteWhereUniqueInput
    data: XOR<ArtisteUpdateWithoutStyleInput, ArtisteUncheckedUpdateWithoutStyleInput>
  }

  export type ArtisteUpdateManyWithWhereWithoutStyleInput = {
    where: ArtisteScalarWhereInput
    data: XOR<ArtisteUpdateManyMutationInput, ArtisteUncheckedUpdateManyWithoutStyleInput>
  }

  export type ArtisteScalarWhereInput = {
    AND?: ArtisteScalarWhereInput | ArtisteScalarWhereInput[]
    OR?: ArtisteScalarWhereInput[]
    NOT?: ArtisteScalarWhereInput | ArtisteScalarWhereInput[]
    IdArtiste?: IntFilter<"Artiste"> | number
    pseudo?: StringNullableFilter<"Artiste"> | string | null
    idStyle?: IntNullableFilter<"Artiste"> | number | null
  }

  export type JoueUpsertWithWhereUniqueWithoutStyleInput = {
    where: JoueWhereUniqueInput
    update: XOR<JoueUpdateWithoutStyleInput, JoueUncheckedUpdateWithoutStyleInput>
    create: XOR<JoueCreateWithoutStyleInput, JoueUncheckedCreateWithoutStyleInput>
  }

  export type JoueUpdateWithWhereUniqueWithoutStyleInput = {
    where: JoueWhereUniqueInput
    data: XOR<JoueUpdateWithoutStyleInput, JoueUncheckedUpdateWithoutStyleInput>
  }

  export type JoueUpdateManyWithWhereWithoutStyleInput = {
    where: JoueScalarWhereInput
    data: XOR<JoueUpdateManyMutationInput, JoueUncheckedUpdateManyWithoutStyleInput>
  }

  export type ConcertCreateWithoutVilleInput = {
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    Joue?: JoueCreateNestedManyWithoutConcertInput
    Participe?: ParticipeCreateNestedManyWithoutConcertInput
    Realise?: RealiseCreateNestedManyWithoutConcertInput
  }

  export type ConcertUncheckedCreateWithoutVilleInput = {
    idConcert?: number
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
    Joue?: JoueUncheckedCreateNestedManyWithoutConcertInput
    Participe?: ParticipeUncheckedCreateNestedManyWithoutConcertInput
    Realise?: RealiseUncheckedCreateNestedManyWithoutConcertInput
  }

  export type ConcertCreateOrConnectWithoutVilleInput = {
    where: ConcertWhereUniqueInput
    create: XOR<ConcertCreateWithoutVilleInput, ConcertUncheckedCreateWithoutVilleInput>
  }

  export type ConcertCreateManyVilleInputEnvelope = {
    data: ConcertCreateManyVilleInput | ConcertCreateManyVilleInput[]
    skipDuplicates?: boolean
  }

  export type VisiteurCreateWithoutVilleInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    Participe?: ParticipeCreateNestedManyWithoutVisiteurInput
    Visiteur?: VisiteurCreateNestedOneWithoutOther_VisiteurInput
    other_Visiteur?: VisiteurCreateNestedManyWithoutVisiteurInput
  }

  export type VisiteurUncheckedCreateWithoutVilleInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idParrain?: number | null
    Participe?: ParticipeUncheckedCreateNestedManyWithoutVisiteurInput
    other_Visiteur?: VisiteurUncheckedCreateNestedManyWithoutVisiteurInput
  }

  export type VisiteurCreateOrConnectWithoutVilleInput = {
    where: VisiteurWhereUniqueInput
    create: XOR<VisiteurCreateWithoutVilleInput, VisiteurUncheckedCreateWithoutVilleInput>
  }

  export type VisiteurCreateManyVilleInputEnvelope = {
    data: VisiteurCreateManyVilleInput | VisiteurCreateManyVilleInput[]
    skipDuplicates?: boolean
  }

  export type ConcertUpsertWithWhereUniqueWithoutVilleInput = {
    where: ConcertWhereUniqueInput
    update: XOR<ConcertUpdateWithoutVilleInput, ConcertUncheckedUpdateWithoutVilleInput>
    create: XOR<ConcertCreateWithoutVilleInput, ConcertUncheckedCreateWithoutVilleInput>
  }

  export type ConcertUpdateWithWhereUniqueWithoutVilleInput = {
    where: ConcertWhereUniqueInput
    data: XOR<ConcertUpdateWithoutVilleInput, ConcertUncheckedUpdateWithoutVilleInput>
  }

  export type ConcertUpdateManyWithWhereWithoutVilleInput = {
    where: ConcertScalarWhereInput
    data: XOR<ConcertUpdateManyMutationInput, ConcertUncheckedUpdateManyWithoutVilleInput>
  }

  export type ConcertScalarWhereInput = {
    AND?: ConcertScalarWhereInput | ConcertScalarWhereInput[]
    OR?: ConcertScalarWhereInput[]
    NOT?: ConcertScalarWhereInput | ConcertScalarWhereInput[]
    idConcert?: IntFilter<"Concert"> | number
    dateConcert?: DateTimeNullableFilter<"Concert"> | Date | string | null
    nbrPlaceDisponible?: IntNullableFilter<"Concert"> | number | null
    idVille?: IntFilter<"Concert"> | number
  }

  export type VisiteurUpsertWithWhereUniqueWithoutVilleInput = {
    where: VisiteurWhereUniqueInput
    update: XOR<VisiteurUpdateWithoutVilleInput, VisiteurUncheckedUpdateWithoutVilleInput>
    create: XOR<VisiteurCreateWithoutVilleInput, VisiteurUncheckedCreateWithoutVilleInput>
  }

  export type VisiteurUpdateWithWhereUniqueWithoutVilleInput = {
    where: VisiteurWhereUniqueInput
    data: XOR<VisiteurUpdateWithoutVilleInput, VisiteurUncheckedUpdateWithoutVilleInput>
  }

  export type VisiteurUpdateManyWithWhereWithoutVilleInput = {
    where: VisiteurScalarWhereInput
    data: XOR<VisiteurUpdateManyMutationInput, VisiteurUncheckedUpdateManyWithoutVilleInput>
  }

  export type VisiteurScalarWhereInput = {
    AND?: VisiteurScalarWhereInput | VisiteurScalarWhereInput[]
    OR?: VisiteurScalarWhereInput[]
    NOT?: VisiteurScalarWhereInput | VisiteurScalarWhereInput[]
    idVisiteur?: IntFilter<"Visiteur"> | number
    nom?: StringNullableFilter<"Visiteur"> | string | null
    prenom?: StringNullableFilter<"Visiteur"> | string | null
    email?: StringNullableFilter<"Visiteur"> | string | null
    age?: IntNullableFilter<"Visiteur"> | number | null
    adresse?: StringNullableFilter<"Visiteur"> | string | null
    idParrain?: IntNullableFilter<"Visiteur"> | number | null
    idVille?: IntNullableFilter<"Visiteur"> | number | null
  }

  export type ParticipeCreateWithoutVisiteurInput = {
    Concert: ConcertCreateNestedOneWithoutParticipeInput
  }

  export type ParticipeUncheckedCreateWithoutVisiteurInput = {
    idConcert: number
  }

  export type ParticipeCreateOrConnectWithoutVisiteurInput = {
    where: ParticipeWhereUniqueInput
    create: XOR<ParticipeCreateWithoutVisiteurInput, ParticipeUncheckedCreateWithoutVisiteurInput>
  }

  export type ParticipeCreateManyVisiteurInputEnvelope = {
    data: ParticipeCreateManyVisiteurInput | ParticipeCreateManyVisiteurInput[]
    skipDuplicates?: boolean
  }

  export type VisiteurCreateWithoutOther_VisiteurInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    Participe?: ParticipeCreateNestedManyWithoutVisiteurInput
    Visiteur?: VisiteurCreateNestedOneWithoutOther_VisiteurInput
    Ville?: VilleCreateNestedOneWithoutVisiteurInput
  }

  export type VisiteurUncheckedCreateWithoutOther_VisiteurInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idParrain?: number | null
    idVille?: number | null
    Participe?: ParticipeUncheckedCreateNestedManyWithoutVisiteurInput
  }

  export type VisiteurCreateOrConnectWithoutOther_VisiteurInput = {
    where: VisiteurWhereUniqueInput
    create: XOR<VisiteurCreateWithoutOther_VisiteurInput, VisiteurUncheckedCreateWithoutOther_VisiteurInput>
  }

  export type VisiteurCreateWithoutVisiteurInput = {
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    Participe?: ParticipeCreateNestedManyWithoutVisiteurInput
    other_Visiteur?: VisiteurCreateNestedManyWithoutVisiteurInput
    Ville?: VilleCreateNestedOneWithoutVisiteurInput
  }

  export type VisiteurUncheckedCreateWithoutVisiteurInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idVille?: number | null
    Participe?: ParticipeUncheckedCreateNestedManyWithoutVisiteurInput
    other_Visiteur?: VisiteurUncheckedCreateNestedManyWithoutVisiteurInput
  }

  export type VisiteurCreateOrConnectWithoutVisiteurInput = {
    where: VisiteurWhereUniqueInput
    create: XOR<VisiteurCreateWithoutVisiteurInput, VisiteurUncheckedCreateWithoutVisiteurInput>
  }

  export type VisiteurCreateManyVisiteurInputEnvelope = {
    data: VisiteurCreateManyVisiteurInput | VisiteurCreateManyVisiteurInput[]
    skipDuplicates?: boolean
  }

  export type VilleCreateWithoutVisiteurInput = {
    nom?: string | null
    coordonnees?: string | null
    Concert?: ConcertCreateNestedManyWithoutVilleInput
  }

  export type VilleUncheckedCreateWithoutVisiteurInput = {
    idVille?: number
    nom?: string | null
    coordonnees?: string | null
    Concert?: ConcertUncheckedCreateNestedManyWithoutVilleInput
  }

  export type VilleCreateOrConnectWithoutVisiteurInput = {
    where: VilleWhereUniqueInput
    create: XOR<VilleCreateWithoutVisiteurInput, VilleUncheckedCreateWithoutVisiteurInput>
  }

  export type ParticipeUpsertWithWhereUniqueWithoutVisiteurInput = {
    where: ParticipeWhereUniqueInput
    update: XOR<ParticipeUpdateWithoutVisiteurInput, ParticipeUncheckedUpdateWithoutVisiteurInput>
    create: XOR<ParticipeCreateWithoutVisiteurInput, ParticipeUncheckedCreateWithoutVisiteurInput>
  }

  export type ParticipeUpdateWithWhereUniqueWithoutVisiteurInput = {
    where: ParticipeWhereUniqueInput
    data: XOR<ParticipeUpdateWithoutVisiteurInput, ParticipeUncheckedUpdateWithoutVisiteurInput>
  }

  export type ParticipeUpdateManyWithWhereWithoutVisiteurInput = {
    where: ParticipeScalarWhereInput
    data: XOR<ParticipeUpdateManyMutationInput, ParticipeUncheckedUpdateManyWithoutVisiteurInput>
  }

  export type VisiteurUpsertWithoutOther_VisiteurInput = {
    update: XOR<VisiteurUpdateWithoutOther_VisiteurInput, VisiteurUncheckedUpdateWithoutOther_VisiteurInput>
    create: XOR<VisiteurCreateWithoutOther_VisiteurInput, VisiteurUncheckedCreateWithoutOther_VisiteurInput>
    where?: VisiteurWhereInput
  }

  export type VisiteurUpdateToOneWithWhereWithoutOther_VisiteurInput = {
    where?: VisiteurWhereInput
    data: XOR<VisiteurUpdateWithoutOther_VisiteurInput, VisiteurUncheckedUpdateWithoutOther_VisiteurInput>
  }

  export type VisiteurUpdateWithoutOther_VisiteurInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    Participe?: ParticipeUpdateManyWithoutVisiteurNestedInput
    Visiteur?: VisiteurUpdateOneWithoutOther_VisiteurNestedInput
    Ville?: VilleUpdateOneWithoutVisiteurNestedInput
  }

  export type VisiteurUncheckedUpdateWithoutOther_VisiteurInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idParrain?: NullableIntFieldUpdateOperationsInput | number | null
    idVille?: NullableIntFieldUpdateOperationsInput | number | null
    Participe?: ParticipeUncheckedUpdateManyWithoutVisiteurNestedInput
  }

  export type VisiteurUpsertWithWhereUniqueWithoutVisiteurInput = {
    where: VisiteurWhereUniqueInput
    update: XOR<VisiteurUpdateWithoutVisiteurInput, VisiteurUncheckedUpdateWithoutVisiteurInput>
    create: XOR<VisiteurCreateWithoutVisiteurInput, VisiteurUncheckedCreateWithoutVisiteurInput>
  }

  export type VisiteurUpdateWithWhereUniqueWithoutVisiteurInput = {
    where: VisiteurWhereUniqueInput
    data: XOR<VisiteurUpdateWithoutVisiteurInput, VisiteurUncheckedUpdateWithoutVisiteurInput>
  }

  export type VisiteurUpdateManyWithWhereWithoutVisiteurInput = {
    where: VisiteurScalarWhereInput
    data: XOR<VisiteurUpdateManyMutationInput, VisiteurUncheckedUpdateManyWithoutVisiteurInput>
  }

  export type VilleUpsertWithoutVisiteurInput = {
    update: XOR<VilleUpdateWithoutVisiteurInput, VilleUncheckedUpdateWithoutVisiteurInput>
    create: XOR<VilleCreateWithoutVisiteurInput, VilleUncheckedCreateWithoutVisiteurInput>
    where?: VilleWhereInput
  }

  export type VilleUpdateToOneWithWhereWithoutVisiteurInput = {
    where?: VilleWhereInput
    data: XOR<VilleUpdateWithoutVisiteurInput, VilleUncheckedUpdateWithoutVisiteurInput>
  }

  export type VilleUpdateWithoutVisiteurInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
    Concert?: ConcertUpdateManyWithoutVilleNestedInput
  }

  export type VilleUncheckedUpdateWithoutVisiteurInput = {
    idVille?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    coordonnees?: NullableStringFieldUpdateOperationsInput | string | null
    Concert?: ConcertUncheckedUpdateManyWithoutVilleNestedInput
  }

  export type RealiseCreateManyArtisteInput = {
    idConcert: number
  }

  export type RealiseUpdateWithoutArtisteInput = {
    Concert?: ConcertUpdateOneRequiredWithoutRealiseNestedInput
  }

  export type RealiseUncheckedUpdateWithoutArtisteInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type RealiseUncheckedUpdateManyWithoutArtisteInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type JoueCreateManyConcertInput = {
    idStyle: number
  }

  export type ParticipeCreateManyConcertInput = {
    idVisiteur: number
  }

  export type RealiseCreateManyConcertInput = {
    IdArtiste: number
  }

  export type JoueUpdateWithoutConcertInput = {
    Style?: StyleUpdateOneRequiredWithoutJoueNestedInput
  }

  export type JoueUncheckedUpdateWithoutConcertInput = {
    idStyle?: IntFieldUpdateOperationsInput | number
  }

  export type JoueUncheckedUpdateManyWithoutConcertInput = {
    idStyle?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipeUpdateWithoutConcertInput = {
    Visiteur?: VisiteurUpdateOneRequiredWithoutParticipeNestedInput
  }

  export type ParticipeUncheckedUpdateWithoutConcertInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipeUncheckedUpdateManyWithoutConcertInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
  }

  export type RealiseUpdateWithoutConcertInput = {
    Artiste?: ArtisteUpdateOneRequiredWithoutRealiseNestedInput
  }

  export type RealiseUncheckedUpdateWithoutConcertInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
  }

  export type RealiseUncheckedUpdateManyWithoutConcertInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
  }

  export type ArtisteCreateManyStyleInput = {
    IdArtiste?: number
    pseudo?: string | null
  }

  export type JoueCreateManyStyleInput = {
    idConcert: number
  }

  export type ArtisteUpdateWithoutStyleInput = {
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    Realise?: RealiseUpdateManyWithoutArtisteNestedInput
  }

  export type ArtisteUncheckedUpdateWithoutStyleInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    Realise?: RealiseUncheckedUpdateManyWithoutArtisteNestedInput
  }

  export type ArtisteUncheckedUpdateManyWithoutStyleInput = {
    IdArtiste?: IntFieldUpdateOperationsInput | number
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JoueUpdateWithoutStyleInput = {
    Concert?: ConcertUpdateOneRequiredWithoutJoueNestedInput
  }

  export type JoueUncheckedUpdateWithoutStyleInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type JoueUncheckedUpdateManyWithoutStyleInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type ConcertCreateManyVilleInput = {
    idConcert?: number
    dateConcert?: Date | string | null
    nbrPlaceDisponible?: number | null
  }

  export type VisiteurCreateManyVilleInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idParrain?: number | null
  }

  export type ConcertUpdateWithoutVilleInput = {
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    Joue?: JoueUpdateManyWithoutConcertNestedInput
    Participe?: ParticipeUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUpdateManyWithoutConcertNestedInput
  }

  export type ConcertUncheckedUpdateWithoutVilleInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
    Joue?: JoueUncheckedUpdateManyWithoutConcertNestedInput
    Participe?: ParticipeUncheckedUpdateManyWithoutConcertNestedInput
    Realise?: RealiseUncheckedUpdateManyWithoutConcertNestedInput
  }

  export type ConcertUncheckedUpdateManyWithoutVilleInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
    dateConcert?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nbrPlaceDisponible?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VisiteurUpdateWithoutVilleInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    Participe?: ParticipeUpdateManyWithoutVisiteurNestedInput
    Visiteur?: VisiteurUpdateOneWithoutOther_VisiteurNestedInput
    other_Visiteur?: VisiteurUpdateManyWithoutVisiteurNestedInput
  }

  export type VisiteurUncheckedUpdateWithoutVilleInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idParrain?: NullableIntFieldUpdateOperationsInput | number | null
    Participe?: ParticipeUncheckedUpdateManyWithoutVisiteurNestedInput
    other_Visiteur?: VisiteurUncheckedUpdateManyWithoutVisiteurNestedInput
  }

  export type VisiteurUncheckedUpdateManyWithoutVilleInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idParrain?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ParticipeCreateManyVisiteurInput = {
    idConcert: number
  }

  export type VisiteurCreateManyVisiteurInput = {
    idVisiteur?: number
    nom?: string | null
    prenom?: string | null
    email?: string | null
    age?: number | null
    adresse?: string | null
    idVille?: number | null
  }

  export type ParticipeUpdateWithoutVisiteurInput = {
    Concert?: ConcertUpdateOneRequiredWithoutParticipeNestedInput
  }

  export type ParticipeUncheckedUpdateWithoutVisiteurInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipeUncheckedUpdateManyWithoutVisiteurInput = {
    idConcert?: IntFieldUpdateOperationsInput | number
  }

  export type VisiteurUpdateWithoutVisiteurInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    Participe?: ParticipeUpdateManyWithoutVisiteurNestedInput
    other_Visiteur?: VisiteurUpdateManyWithoutVisiteurNestedInput
    Ville?: VilleUpdateOneWithoutVisiteurNestedInput
  }

  export type VisiteurUncheckedUpdateWithoutVisiteurInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idVille?: NullableIntFieldUpdateOperationsInput | number | null
    Participe?: ParticipeUncheckedUpdateManyWithoutVisiteurNestedInput
    other_Visiteur?: VisiteurUncheckedUpdateManyWithoutVisiteurNestedInput
  }

  export type VisiteurUncheckedUpdateManyWithoutVisiteurInput = {
    idVisiteur?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    idVille?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ArtisteCountOutputTypeDefaultArgs instead
     */
    export type ArtisteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtisteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConcertCountOutputTypeDefaultArgs instead
     */
    export type ConcertCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConcertCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StyleCountOutputTypeDefaultArgs instead
     */
    export type StyleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StyleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VilleCountOutputTypeDefaultArgs instead
     */
    export type VilleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VilleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisiteurCountOutputTypeDefaultArgs instead
     */
    export type VisiteurCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisiteurCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtisteDefaultArgs instead
     */
    export type ArtisteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtisteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConcertDefaultArgs instead
     */
    export type ConcertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConcertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JoueDefaultArgs instead
     */
    export type JoueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JoueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParticipeDefaultArgs instead
     */
    export type ParticipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParticipeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RealiseDefaultArgs instead
     */
    export type RealiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RealiseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StyleDefaultArgs instead
     */
    export type StyleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StyleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VilleDefaultArgs instead
     */
    export type VilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VilleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisiteurDefaultArgs instead
     */
    export type VisiteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisiteurDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}