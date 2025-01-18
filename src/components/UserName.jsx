"use client";

import { useSession } from "next-auth/react";

const UserName = () => {
    const { data: session, status } = useSession();
    return (
        <div>
            <h1>{session?.user?.email}</h1>
        </div>
    );
};

export default UserName;