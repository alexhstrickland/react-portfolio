import React from "react";

const PageContext = React.createContext({
    display: false,
    msg: "default value",
    name: '',
    email: '',
    message: '',
    onclick: () => undefined
});

export default PageContext;