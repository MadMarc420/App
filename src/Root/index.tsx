import React, { useEffect, useState } from "react";
import App from "./App";
import Landing from "./Landing";
import { HashRouter } from "react-router-dom";
import { loadTokenPrices } from "../helpers";
import Background from "../components/Background";

function Root() {
    const isApp = (): boolean => {
        // return window.location.host.includes("app");
        return true;
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTokenPrices().then(() => setLoading(false));
    }, []);

    // if (loading) return <Loading />;

    const app = () => (
        <HashRouter>
            <App />
            <Background />
        </HashRouter>
    );

    return isApp() ? app() : <Landing />;
}

export default Root;
