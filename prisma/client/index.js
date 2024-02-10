
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ArtisteScalarFieldEnum = {
  IdArtiste: 'IdArtiste',
  pseudo: 'pseudo',
  idStyle: 'idStyle'
};

exports.Prisma.ConcertScalarFieldEnum = {
  idConcert: 'idConcert',
  dateConcert: 'dateConcert',
  nbrPlaceDisponible: 'nbrPlaceDisponible',
  idVille: 'idVille'
};

exports.Prisma.JoueScalarFieldEnum = {
  idConcert: 'idConcert',
  idStyle: 'idStyle'
};

exports.Prisma.ParticipeScalarFieldEnum = {
  idConcert: 'idConcert',
  idVisiteur: 'idVisiteur'
};

exports.Prisma.RealiseScalarFieldEnum = {
  IdArtiste: 'IdArtiste',
  idConcert: 'idConcert'
};

exports.Prisma.StyleScalarFieldEnum = {
  idStyle: 'idStyle',
  libelle: 'libelle',
  description: 'description'
};

exports.Prisma.VilleScalarFieldEnum = {
  idVille: 'idVille',
  nom: 'nom',
  coordonnees: 'coordonnees'
};

exports.Prisma.VisiteurScalarFieldEnum = {
  idVisiteur: 'idVisiteur',
  nom: 'nom',
  prenom: 'prenom',
  email: 'email',
  age: 'age',
  adresse: 'adresse',
  idParrain: 'idParrain',
  idVille: 'idVille'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Artiste: 'Artiste',
  Concert: 'Concert',
  Joue: 'Joue',
  Participe: 'Participe',
  Realise: 'Realise',
  Style: 'Style',
  Ville: 'Ville',
  Visiteur: 'Visiteur'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/maximelemesle/Documents/03_MDS_21-24/03_MDS_23-24/07_Conception API/exo_express_v2/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9wcmlzbWEvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgQXJ0aXN0ZSB7CiAgSWRBcnRpc3RlIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBwc2V1ZG8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIGlkU3R5bGUgICBJbnQ/ICAgICAgQGRiLlVuc2lnbmVkSW50CiAgU3R5bGUgICAgIFN0eWxlPyAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRTdHlsZV0sIHJlZmVyZW5jZXM6IFtpZFN0eWxlXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogIkFydGlzdGVfaWJma18xIikKICBSZWFsaXNlICAgUmVhbGlzZVtdCgogIEBAaW5kZXgoW2lkU3R5bGVdLCBtYXA6ICJpZFN0eWxlIikKfQoKbW9kZWwgQ29uY2VydCB7CiAgaWRDb25jZXJ0ICAgICAgICAgIEludCAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGRhdGVDb25jZXJ0ICAgICAgICBEYXRlVGltZT8gICBAZGIuRGF0ZQogIG5iclBsYWNlRGlzcG9uaWJsZSBJbnQ/CiAgaWRWaWxsZSAgICAgICAgICAgIEludCAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIFZpbGxlICAgICAgICAgICAgICBWaWxsZSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRWaWxsZV0sIHJlZmVyZW5jZXM6IFtpZFZpbGxlXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJDb25jZXJ0X2liZmtfMSIpCiAgSm91ZSAgICAgICAgICAgICAgIEpvdWVbXQogIFBhcnRpY2lwZSAgICAgICAgICBQYXJ0aWNpcGVbXQogIFJlYWxpc2UgICAgICAgICAgICBSZWFsaXNlW10KCiAgQEBpbmRleChbaWRWaWxsZV0sIG1hcDogImlkVmlsbGUiKQp9Cgptb2RlbCBKb3VlIHsKICBpZENvbmNlcnQgSW50ICAgICBAZGIuVW5zaWduZWRJbnQKICBpZFN0eWxlICAgSW50ICAgICBAZGIuVW5zaWduZWRJbnQKICBDb25jZXJ0ICAgQ29uY2VydCBAcmVsYXRpb24oZmllbGRzOiBbaWRDb25jZXJ0XSwgcmVmZXJlbmNlczogW2lkQ29uY2VydF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiSm91ZV9pYmZrXzEiKQogIFN0eWxlICAgICBTdHlsZSAgIEByZWxhdGlvbihmaWVsZHM6IFtpZFN0eWxlXSwgcmVmZXJlbmNlczogW2lkU3R5bGVdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogIkpvdWVfaWJma18yIikKCiAgQEBpZChbaWRDb25jZXJ0LCBpZFN0eWxlXSkKICBAQGluZGV4KFtpZFN0eWxlXSwgbWFwOiAiaWRTdHlsZSIpCn0KCm1vZGVsIFBhcnRpY2lwZSB7CiAgaWRDb25jZXJ0ICBJbnQgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZFZpc2l0ZXVyIEludCAgICAgIEBkYi5VbnNpZ25lZEludAogIENvbmNlcnQgICAgQ29uY2VydCAgQHJlbGF0aW9uKGZpZWxkczogW2lkQ29uY2VydF0sIHJlZmVyZW5jZXM6IFtpZENvbmNlcnRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogIlBhcnRpY2lwZV9pYmZrXzEiKQogIFZpc2l0ZXVyICAgVmlzaXRldXIgQHJlbGF0aW9uKGZpZWxkczogW2lkVmlzaXRldXJdLCByZWZlcmVuY2VzOiBbaWRWaXNpdGV1cl0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiUGFydGljaXBlX2liZmtfMiIpCgogIEBAaWQoW2lkQ29uY2VydCwgaWRWaXNpdGV1cl0pCiAgQEBpbmRleChbaWRWaXNpdGV1cl0sIG1hcDogImlkVmlzaXRldXIiKQp9Cgptb2RlbCBSZWFsaXNlIHsKICBJZEFydGlzdGUgSW50ICAgICBAZGIuVW5zaWduZWRJbnQKICBpZENvbmNlcnQgSW50ICAgICBAZGIuVW5zaWduZWRJbnQKICBBcnRpc3RlICAgQXJ0aXN0ZSBAcmVsYXRpb24oZmllbGRzOiBbSWRBcnRpc3RlXSwgcmVmZXJlbmNlczogW0lkQXJ0aXN0ZV0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiUmVhbGlzZV9pYmZrXzEiKQogIENvbmNlcnQgICBDb25jZXJ0IEByZWxhdGlvbihmaWVsZHM6IFtpZENvbmNlcnRdLCByZWZlcmVuY2VzOiBbaWRDb25jZXJ0XSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJSZWFsaXNlX2liZmtfMiIpCgogIEBAaWQoW0lkQXJ0aXN0ZSwgaWRDb25jZXJ0XSkKICBAQGluZGV4KFtpZENvbmNlcnRdLCBtYXA6ICJpZENvbmNlcnQiKQp9Cgptb2RlbCBTdHlsZSB7CiAgaWRTdHlsZSAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGxpYmVsbGUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKICBkZXNjcmlwdGlvbiBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTAwMCkKICBBcnRpc3RlICAgICBBcnRpc3RlW10KICBKb3VlICAgICAgICBKb3VlW10KfQoKbW9kZWwgVmlsbGUgewogIGlkVmlsbGUgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tICAgICAgICAgU3RyaW5nPyAgICBAZGIuVmFyQ2hhcig1MCkKICBjb29yZG9ubmVlcyBTdHJpbmc/ICAgIEBkYi5UZXh0CiAgQ29uY2VydCAgICAgQ29uY2VydFtdCiAgVmlzaXRldXIgICAgVmlzaXRldXJbXQp9Cgptb2RlbCBWaXNpdGV1ciB7CiAgaWRWaXNpdGV1ciAgICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tICAgICAgICAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoNTApCiAgcHJlbm9tICAgICAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoNTApCiAgZW1haWwgICAgICAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoNTApCiAgYWdlICAgICAgICAgICAgSW50PwogIGFkcmVzc2UgICAgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDI1NSkKICBpZFBhcnJhaW4gICAgICBJbnQ/ICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZFZpbGxlICAgICAgICBJbnQ/ICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBQYXJ0aWNpcGUgICAgICBQYXJ0aWNpcGVbXQogIFZpc2l0ZXVyICAgICAgIFZpc2l0ZXVyPyAgIEByZWxhdGlvbigiVmlzaXRldXJUb1Zpc2l0ZXVyIiwgZmllbGRzOiBbaWRQYXJyYWluXSwgcmVmZXJlbmNlczogW2lkVmlzaXRldXJdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiVmlzaXRldXJfaWJma18xIikKICBvdGhlcl9WaXNpdGV1ciBWaXNpdGV1cltdICBAcmVsYXRpb24oIlZpc2l0ZXVyVG9WaXNpdGV1ciIpCiAgVmlsbGUgICAgICAgICAgVmlsbGU/ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkVmlsbGVdLCByZWZlcmVuY2VzOiBbaWRWaWxsZV0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJWaXNpdGV1cl9pYmZrXzIiKQoKICBAQGluZGV4KFtpZFBhcnJhaW5dLCBtYXA6ICJpZFBhcnJhaW4iKQogIEBAaW5kZXgoW2lkVmlsbGVdLCBtYXA6ICJpZFZpbGxlIikKfQo=",
  "inlineSchemaHash": "cdcc0c1e6e127af8ef3a40f6a03c4fecc8a0cca3ede12349d10af40b2c47e5c7",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Artiste\":{\"dbName\":null,\"fields\":[{\"name\":\"IdArtiste\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pseudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idStyle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Style\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Style\",\"relationName\":\"ArtisteToStyle\",\"relationFromFields\":[\"idStyle\"],\"relationToFields\":[\"idStyle\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Realise\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Realise\",\"relationName\":\"ArtisteToRealise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Concert\":{\"dbName\":null,\"fields\":[{\"name\":\"idConcert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateConcert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nbrPlaceDisponible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idVille\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ville\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ville\",\"relationName\":\"ConcertToVille\",\"relationFromFields\":[\"idVille\"],\"relationToFields\":[\"idVille\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Joue\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Joue\",\"relationName\":\"ConcertToJoue\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Participe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Participe\",\"relationName\":\"ConcertToParticipe\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Realise\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Realise\",\"relationName\":\"ConcertToRealise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Joue\":{\"dbName\":null,\"fields\":[{\"name\":\"idConcert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idStyle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Concert\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Concert\",\"relationName\":\"ConcertToJoue\",\"relationFromFields\":[\"idConcert\"],\"relationToFields\":[\"idConcert\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Style\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Style\",\"relationName\":\"JoueToStyle\",\"relationFromFields\":[\"idStyle\"],\"relationToFields\":[\"idStyle\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idConcert\",\"idStyle\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Participe\":{\"dbName\":null,\"fields\":[{\"name\":\"idConcert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idVisiteur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Concert\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Concert\",\"relationName\":\"ConcertToParticipe\",\"relationFromFields\":[\"idConcert\"],\"relationToFields\":[\"idConcert\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Visiteur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visiteur\",\"relationName\":\"ParticipeToVisiteur\",\"relationFromFields\":[\"idVisiteur\"],\"relationToFields\":[\"idVisiteur\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idConcert\",\"idVisiteur\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Realise\":{\"dbName\":null,\"fields\":[{\"name\":\"IdArtiste\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idConcert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artiste\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artiste\",\"relationName\":\"ArtisteToRealise\",\"relationFromFields\":[\"IdArtiste\"],\"relationToFields\":[\"IdArtiste\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Concert\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Concert\",\"relationName\":\"ConcertToRealise\",\"relationFromFields\":[\"idConcert\"],\"relationToFields\":[\"idConcert\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"IdArtiste\",\"idConcert\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Style\":{\"dbName\":null,\"fields\":[{\"name\":\"idStyle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libelle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artiste\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artiste\",\"relationName\":\"ArtisteToStyle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Joue\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Joue\",\"relationName\":\"JoueToStyle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ville\":{\"dbName\":null,\"fields\":[{\"name\":\"idVille\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coordonnees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Concert\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Concert\",\"relationName\":\"ConcertToVille\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Visiteur\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visiteur\",\"relationName\":\"VilleToVisiteur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Visiteur\":{\"dbName\":null,\"fields\":[{\"name\":\"idVisiteur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prenom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adresse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idParrain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idVille\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Participe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Participe\",\"relationName\":\"ParticipeToVisiteur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Visiteur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visiteur\",\"relationName\":\"VisiteurToVisiteur\",\"relationFromFields\":[\"idParrain\"],\"relationToFields\":[\"idVisiteur\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_Visiteur\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Visiteur\",\"relationName\":\"VisiteurToVisiteur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ville\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ville\",\"relationName\":\"VilleToVisiteur\",\"relationFromFields\":[\"idVille\"],\"relationToFields\":[\"idVille\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/client/schema.prisma")
