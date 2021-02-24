import React from 'react';
import { StyleSheet } from "react-native"

const weather = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
        padding:5
    },
    image: {
        width: "100%",
        alignItems: "center",
        color: "#faab18"
    },
    info: {
        width: "100%"
    },
    state: {
       fontSize: 22,
        alignSelf: "center",
        color: "#546747",
        fontWeight: "bold"
    },
    degrees: {
        fontSize: 24,
        alignSelf: "center",
        color: "#546747",
        fontWeight: "bold"
    },
    condition: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin:10
    },
    text: {
        fontSize: 13,
        fontWeight: "400",
        alignSelf: "center",
    },
    directionButton: {
        flex: 2,
        width: "100%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: "#faab18",
    },
    direction: {
        fontSize: 15,
        color: "#546747",
        fontWeight: "bold"
    },
    phoneButton: {
        display: "flex",
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: "#faab18",
        marginLeft: 10
    },
    phoneIcon: {
        fontSize: 25,
        color: "#546747"
    },
    imageBox: {
        borderBottomWidth: 6,
        borderColor: '#faab18',
        width: "auto",
        height: 120,

    },
    
})
module.exports = weather;