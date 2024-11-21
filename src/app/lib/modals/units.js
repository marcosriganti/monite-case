import {Schema, model, models} from "mongoose";

const UnitSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Unit = models.Unit || model('Unit', UnitSchema);

export default Unit;