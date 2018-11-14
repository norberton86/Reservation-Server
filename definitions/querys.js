
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql')

const axios = require('axios')

const ReservationType = new GraphQLObjectType({
    name:'Reservation',
    fields:()=>({
       name:{type:GraphQLString},
       id: {type:GraphQLInt},
       hotelName:{type:GraphQLString},
       arrivalDate: {type:GraphQLString},
       departureDate: {type:GraphQLString},
    })
})

export const Querys = new GraphQLObjectType({

    name: 'Querys',
    fields:{
        reservation:{
            type:ReservationType,
            args:{
                id:{type:GraphQLInt}
            },
            resolve(parentValue,args){
                return axios.get('http://localhost:3000/reservations/'+args.id).then(res=>res.data)
            }
        } ,
        reservations:{
            type:new GraphQLList(ReservationType),
            resolve(parentValue,args){
                return axios.get('http://localhost:3000/reservations').then(res=>res.data)
            }
        }     
    }

})