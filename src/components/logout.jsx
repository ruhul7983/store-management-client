"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
    const handleSignOut = async () => {
        await signOut({ redirect: true, callbackUrl: "/" });
    };
    return (
        <div>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    );
};

export default Logout;