const Schema = mongoose.Schema;

const gremio = new Schema({

    _id: ObjectId,
    Name: String,
    House:String,
    CantidadMiembros: Int32Array,
    Status: Boolean

});