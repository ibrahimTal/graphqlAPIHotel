

const resolvers = {
    Query: {
        getAllHotels: async (parent, args, { Hotel }) => {
            try {
                const allHotels = await Hotel.find({});
                return allHotels;
            } catch (err) {
                throw err;
            }
        },
        getHotel: async (parent, { id }, { Hotel }) => {
            try {
                const hotel = await Hotel.findById(id);
                return hotel;
            } catch (err) {
                throw err;
            }
        },
        getHotelByName: async (parent, { name }, { Hotel }) => {
            try {
                const hotel = await Hotel.findOne({ name });
                return hotel;
            } catch (err) {
                throw err;
            }
        },
        
    },
    Mutation: {
        updateHote: async (parent, { id, name, description, stars, price }, { Hotel }) => {
            try {
                const hotel = await Hotel.findByIdAndUpdate(id, { name, description, stars, price }, { new: true });
                return hotel;
            } catch (err) {
                throw err;
            }
        },
        deleteHotel: async (parent, { id }, { Hotel }) => {
            try {
                const hotel = await Hotel.findByIdAndDelete(id);
                return hotel;
            } catch (err) {
                throw err;
            }
        }, 
        createHotel: async (parent, { name, description, stars, price }, { Hotel }) => {
            try {
                const hotel = await Hotel.create({ name, description, stars, price });
                return hotel;
            } catch (err) {
                throw err;
            }
        },
    }

}
