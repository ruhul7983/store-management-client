"use client";

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

// Styles for the invoice
const styles = StyleSheet.create({
    viewer: {
        width: "100vw",
        height: "100vh",
    },
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: "Helvetica",
    },
    header: {
        textAlign: "center",
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    table: {
        display: "flex",
        width: "100%",
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#000",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    cell: {
        flex: 1,
        textAlign: "left",
    },
    cellHeader: {
        fontWeight: "bold",
        flex: 1,
        textAlign: "left",
    },
    totalSection: {
        textAlign: "right",
        marginTop: 10,
    },
    signature: {
        display: "flex",
        flexDirection: "row",
        gap: "70px",
        marginTop: "30px",
    },
    upperLine: {
        borderTop: "1px",
        borderColor: "black",
    },
});

const InvoiceDocument = () => {
    const [invoiceData, setInvoiceData] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const data = localStorage.getItem("invoiceData");
            if (data) {
                setInvoiceData(JSON.parse(data));
            }
        }
    }, []);

    const calculateTotal = (items) =>
        items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    if (!invoiceData) {
        return <Text>Loading...</Text>;
    }

    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <Text style={{ fontSize: 20 }}>{invoiceData.companyName}</Text>
                        <Text>Belabo Bazar, Mosjid Road, Belabo, Narsigndi</Text>
                        <Text>Contact: 01318741969</Text>
                    </View>

                    {/* Client and Invoice Details */}
                    <View style={styles.section}>
                        <Text>Bill To: {invoiceData.clientName}</Text>
                        <Text>Invoice Number: {invoiceData.invoiceNumber}</Text>
                        <Text>Invoice Date: {invoiceData.invoiceDate}</Text>
                    </View>

                    {/* Items Table */}
                    <View style={styles.table}>
                        <View style={[styles.row, { backgroundColor: "#f0f0f0" }]}>
                            <Text style={styles.cellHeader}>Description</Text>
                            <Text style={styles.cellHeader}>Quantity</Text>
                            <Text style={styles.cellHeader}>Price</Text>
                            <Text style={styles.cellHeader}>Total</Text>
                        </View>
                        {invoiceData.items.map((item, index) => (
                            <View key={index} style={styles.row}>
                                <Text style={styles.cell}>{item.description}</Text>
                                <Text style={styles.cell}>{item.quantity}</Text>
                                <Text style={styles.cell}>Tk.{item.price}</Text>
                                <Text style={styles.cell}>
                                    Tk. {item.quantity * item.price}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Total Section */}
                    <View style={styles.totalSection}>
                        <Text>Total: Tk.{calculateTotal(invoiceData.items)}</Text>
                    </View>
                    <View style={styles.signature}>
                        <Text style={styles.upperLine}>Customer Signature</Text>
                        <Text style={styles.upperLine}>Shop Owner Signature</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default InvoiceDocument;
