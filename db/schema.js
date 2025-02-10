import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemgremio = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    House: String,
    CantidadMiembros: Number,
    Status: Boolean
});

const gremio = model("gremio", schemgremio);
export default gremio; 