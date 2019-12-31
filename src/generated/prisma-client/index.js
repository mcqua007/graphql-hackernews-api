"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Task",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Todo",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/sean-07306b/hacker-news-clone-2/dev`
});
exports.prisma = new exports.Prisma();
