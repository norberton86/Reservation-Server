const {GraphQLSchema} = require('graphql')
import {Querys} from './querys'
import {Mutation} from './mutations'

module.exports = new GraphQLSchema({
    query:Querys,
    mutation:Mutation
})