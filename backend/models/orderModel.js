import mongoose from 'mongoose'

const shippingSchema = {
    address: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: Number, required: true},
    country: {type: String, required: true},
};

const paymentSchema = {
    paymentMethod: {type: String, required: true}
};

const orderItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    productQty: {type: Number, required: true},
    image: {type: String, required: true},
    price: {type: String, required: true},
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    shipping: shippingSchema,
    payment: paymentSchema,
    orderItems: [orderItemSchema],
    itemsPrice: {type: Number},
    taxPrice: {type: Number},
    shippingPrice: {type: Number},
    totalPrice: {type: Number},
    isPaid: {type: Boolean, default: false},
    paidAt: {type: Date},
    isDelivered: {type: Boolean, default: false},
    deliveredAt: {type: Date}
}, {
    timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;