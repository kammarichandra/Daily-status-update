import React, { useRef, useState } from 'react';

function Checkoutform() {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
        payment: '',
        instructions: '',
        items: [
            {
                product: '',
                quantity: 1,
            },
        ],
    });

    const screenshotref = useRef(null);
    const [error, seterror] = useState({});
    const [order, setorder] = useState(null);

    const handlechange = (e) => {
        const { name, value } = e.target;

        setformdata({
            ...formdata,
            [name]: value,
        });
    };

    const handleitemchange = (index, field, value) => {
        const updateditems = [...formdata.items];

        updateditems[index] = {
            ...updateditems[index],
            [field]: value,
        };

        setformdata({
            ...formdata,
            items: updateditems,
        });
    };

    const addItem = () => {
        setformdata({
            ...formdata,
            items: [
                ...formdata.items,
                {
                    product: '',
                    quantity: 1,
                },
            ],
        });
    };

    const removeItem = (index) => {
        const updatedItems = formdata.items.filter((_, i) => i !== index);

        setformdata({
            ...formdata,
            items: updatedItems.length > 0 ? updatedItems : [{ product: '', quantity: 1 }],
        });
    };

    const validate = () => {
        const newErrors = {};

        if (formdata.name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        if (formdata.email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!formdata.email.includes('@')) {
            newErrors.email = 'Enter a valid email';
        }

        if (!/^\d{10}$/.test(formdata.phone)) {
            newErrors.phone = 'Phone number must contain 10 digits';
        }

        if (formdata.address.trim() === '') {
            newErrors.address = 'Address is required';
        }

        if (formdata.city.trim() === '') {
            newErrors.city = 'City is required';
        }

        if (!/^\d{6}$/.test(formdata.pincode)) {
            newErrors.pincode = 'Pincode must contain 6 digits';
        }

        if (formdata.payment === '') {
            newErrors.payment = 'Select a payment method';
        }

        if (formdata.items.length === 0) {
            newErrors.items = 'Add at least one product';
        }

        formdata.items.forEach((item, index) => {
            if (item.product.trim() === '') {
                newErrors[`product${index}`] = 'Product name is required';
            }

            if (Number(item.quantity) < 1) {
                newErrors[`quantity${index}`] = 'Quantity must be at least 1';
            }
        });

        return newErrors;
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            seterror(validationErrors);
            setorder(null);
            return;
        }

        seterror({});

        const screenshot = screenshotref.current?.files[0];
        const finalOrder = {
            ...formdata,
            paymentScreenshot: screenshot?.name || 'No screenshot uploaded',
        };

        console.log('ORDER:', finalOrder);
        setorder(finalOrder);
    };

    return (
        <div style={styles.container}>
            <h1>🛒 Checkout</h1>

            <form onSubmit={handlesubmit}>
                <div style={styles.field}>
                    <label>Customer Name</label>
                    <input
                        name="name"
                        value={formdata.name}
                        onChange={handlechange}
                        placeholder="Enter your name"
                    />
                    {error.name && <p style={styles.error}>{error.name}</p>}
                </div>

                <div style={styles.field}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handlechange}
                        placeholder="Enter email"
                    />
                    {error.email && <p style={styles.error}>{error.email}</p>}
                </div>

                <div style={styles.field}>
                    <label>Phone</label>
                    <input
                        name="phone"
                        value={formdata.phone}
                        onChange={handlechange}
                        placeholder="10 digit phone number"
                    />
                    {error.phone && <p style={styles.error}>{error.phone}</p>}
                </div>

                <div style={styles.field}>
                    <label>Address</label>
                    <textarea
                        name="address"
                        value={formdata.address}
                        onChange={handlechange}
                        placeholder="Enter delivery address"
                    />
                    {error.address && <p style={styles.error}>{error.address}</p>}
                </div>

                <div style={styles.field}>
                    <label>City</label>
                    <input
                        name="city"
                        value={formdata.city}
                        onChange={handlechange}
                        placeholder="Enter city"
                    />
                    {error.city && <p style={styles.error}>{error.city}</p>}
                </div>

                <div style={styles.field}>
                    <label>Pincode</label>
                    <input
                        name="pincode"
                        value={formdata.pincode}
                        onChange={handlechange}
                        placeholder="6 digit pincode"
                    />
                    {error.pincode && <p style={styles.error}>{error.pincode}</p>}
                </div>

                <div style={styles.field}>
                    <label>Payment Method</label>
                    <select name="payment" value={formdata.payment} onChange={handlechange}>
                        <option value="">Select Payment</option>
                        <option value="UPI">UPI</option>
                        <option value="Card">Credit / Debit Card</option>
                        <option value="COD">Cash on Delivery</option>
                    </select>
                    {error.payment && <p style={styles.error}>{error.payment}</p>}
                </div>

                <div style={styles.field}>
                    <label>Payment Screenshot</label>
                    <input type="file" ref={screenshotref} />
                </div>

                <h2>Order Items</h2>

                {formdata.items.map((item, index) => (
                    <div key={index} style={styles.item}>
                        <input
                            placeholder="Product name"
                            value={item.product}
                            onChange={(e) => handleitemchange(index, 'product', e.target.value)}
                        />

                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleitemchange(index, 'quantity', e.target.value)}
                        />

                        <button type="button" onClick={() => removeItem(index)}>
                            Remove
                        </button>

                        {error[`product${index}`] && (
                            <p style={styles.error}>{error[`product${index}`]}</p>
                        )}

                        {error[`quantity${index}`] && (
                            <p style={styles.error}>{error[`quantity${index}`]}</p>
                        )}
                    </div>
                ))}

                {error.items && <p style={styles.error}>{error.items}</p>}

                <button type="button" onClick={addItem}>
                    + Add Product
                </button>

                <div style={styles.field}>
                    <label>Delivery Instructions</label>
                    <textarea
                        name="instructions"
                        value={formdata.instructions}
                        onChange={handlechange}
                        placeholder="Example: Leave at security"
                    />
                </div>

                <br />

                <button type="submit">Place Order</button>
            </form>

            {order && (
                <div style={styles.result}>
                    <h2>✅ Order Placed!</h2>

                    <p><strong>Name:</strong> {order.name}</p>
                    <p><strong>Email:</strong> {order.email}</p>
                    <p><strong>Phone:</strong> {order.phone}</p>
                    <p><strong>Address:</strong> {order.address}</p>
                    <p><strong>City:</strong> {order.city}</p>
                    <p><strong>Payment:</strong> {order.payment}</p>
                    <p><strong>Screenshot:</strong> {order.paymentScreenshot}</p>

                    <h3>Products</h3>
                    {order.items.map((item, index) => (
                        <p key={index}>
                            {item.product} × {item.quantity}
                        </p>
                    ))}

                    <p><strong>Instructions:</strong> {order.instructions || 'None'}</p>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '700px',
        margin: '40px auto',
        padding: '24px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '18px',
        gap: '8px',
    },
    item: {
        display: 'flex',
        gap: '10px',
        marginBottom: '12px',
        flexWrap: 'wrap',
    },
    error: {
        margin: 0,
        color: 'red',
        fontSize: '14px',
    },
    result: {
        marginTop: '24px',
        padding: '16px',
        backgroundColor: '#eafaf1',
        borderRadius: '10px',
    },
};

export default Checkoutform;