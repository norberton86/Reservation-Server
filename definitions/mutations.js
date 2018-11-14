const axios = require('axios')

const {
    GraphQLObjectType,
    GraphQLString,
    
    GraphQLNonNull
} = require('graphql')

export const Mutation = new GraphQLObjectType({

    name: 'Mutation',
    fields:{
        addReservation:{
            type:GraphQLString,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                hotelName:{type:new GraphQLNonNull(GraphQLString)},
                arrivalDate:{type:new GraphQLNonNull(GraphQLString)},
                departureDate:{type:new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue,args){

                return axios.post('http://localhost:3000/reservations',{
                    name:args.name,
                    hotelName:args.hotelName,
                    arrivalDate: args.arrivalDate,
                    departureDate: args.departureDate
                }).then(res=>res.data.id)
                
            }
        } 
    }

})