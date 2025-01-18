"use client";

import { useState } from "react";

const InvoiceDetails = () => {
    const [items, setItems] = useState([]);
    const [clientName, setClientName] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const today = new Date();
    const invoiceDate = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const clientName = form.clientName.value;
        const invoiceNumber = form.invoiceNumber.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const item = { description, quantity, price }
        setItems([...items, item]);
        setClientName(clientName);
        setInvoiceNumber(invoiceNumber);
        form.description.value = "";
        form.quantity.value = "";
        form.price.value = "";
    }
    const invoiceData = {
        companyName: "Soinik Computers & Photocopy",
        clientName: clientName,
        invoiceNumber: invoiceNumber,
        invoiceDate: invoiceDate,
        items: items,
    };
    const handleShowPDF = () => {
        localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
        window.open("/pdf-viewer", "_blank");
    };

    return (
        <div className="max-w-6xl mx-auto px-3 md:px-0">
            <div className="space-y-2">

                <form onSubmit={handleForm}>
                    <h1 className="text-xl">Invoice to: </h1>
                    <input type="text" name="clientName" className="px-1 py-2 text-black rounded-sm w-[50%] focus:outline-0 border" id="" placeholder="eg. Ruhul Amin"  required/>
                    <h1 className="text-xl">Invoice Number: </h1>
                    <input type="text" name="invoiceNumber" className="px-1 py-2 text-black rounded-sm w-[50%] focus:outline-0 border" id="" placeholder="1001" required />

                    <div className="grid grid-cols-3 gap-x-3 pt-5">
                        <h1 className="">Description: </h1>
                        <h1 className="">Quantity: </h1>
                        <h1 className="">Price: </h1>

                    </div>
                    <div className="grid grid-cols-3 gap-x-3">
                        <input type="text" name="description" id="" className="px-1 py-2 rounded-sm text-black focus:outline-0 border" placeholder="product name" required />
                        <input type="number" name="quantity" id="" className="px-1 py-2 rounded-sm text-black focus:outline-0 border" placeholder="product quantity" required />
                        <input type="number" name="price" id="" className="px-1 py-2 rounded-sm text-black focus:outline-0 border" placeholder="product price" required />
                    </div>
                    {/* Viewing Items */}
                    <div className="py-2">
                        {
                            items.map((item, index) => <h1 key={index}>{item.description}. x{item.quantity} Price: {item.price}</h1>)
                        }

                    </div>
                    <div>
                        <button className="mt-2 px-3 py-2  bg-gray-500 rounded hover:bg-gray-800 transition-all text-white">Add Item</button>
                    </div>

                </form>
                <button className="p-3 bg-green-900 text-white rounded" onClick={handleShowPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default InvoiceDetails;