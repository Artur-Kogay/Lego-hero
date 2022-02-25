import { InputBase } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "350px",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxSizing: "border-box",
        borderRadius: "5px",
        fontSize: 16,
        padding: 16,

    },
    label: {
        fontSize: "12px",
        lineHeight: "14px",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
        opacity: "0.8",
        marginLeft: "4px",
        marginBottom: "8px",
    },

}));

const Input = ({ ...props }) => {
    const styles = useStyles();
    const { label } = { ...props };
    return (
        <>
        <div>
            <span className={styles.label}>{label}</span>
            <InputBase {...props} className={styles.root}/>
        </div>
        </>
    );
};

export default Input;
