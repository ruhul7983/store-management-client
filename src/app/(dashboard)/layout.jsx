"use client";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { MdHome, MdSettings, MdPerson, MdHelp } from "react-icons/md";

const menuItems = [
    {
        title: "Home",
        link: "/home",
        icon: <MdHome />,
    },
    {
        title: "Purchase",
        link: "/purchase",
        icon: <MdPerson />,
    },
    {
        title: "Sell",
        link: "/sell",
        icon: <MdSettings />,
    },
    {
        title: "Help",
        link: "/help",
        icon: <MdHelp />,
    },
];

const DashboardLayout = ({ children }) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <SessionProvider>
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <div
                    className={`${collapse ? "w-[4%]" : "w-[12%]"
                        } fixed top-0 left-0 h-full bg-white border-r-2 shadow-sm transition-all duration-300 ease-in-out`}
                >
                    <div
                        className={`flex items-center ${collapse ? "justify-center" : "pl-3 justify-between"
                            } pt-2`}
                    >
                        {!collapse && (
                            <h1 className="text-2xl font-semibold hidden md:block">
                                DokanHisab
                            </h1>
                        )}
                        {collapse ? (
                            <MdKeyboardDoubleArrowRight
                                onClick={() => setCollapse(false)}
                                className="text-3xl mr-2 hidden md:block"
                            />
                        ) : (
                            <MdKeyboardDoubleArrowLeft
                                onClick={() => setCollapse(true)}
                                className="text-3xl mr-2 hidden md:block"
                            />
                        )}
                    </div>
                    <div className={`pl-3 ${collapse && "pl-0"}`}>
                        <div>
                            {menuItems.map((item) => (
                                <div
                                    key={item.title}
                                    className={`flex items-center ${collapse ? "justify-center" : "gap-x-3"
                                        } mt-3`}
                                >
                                    <Link href={item.link}>
                                        <h1 className="text-2xl">{item.icon}</h1>
                                    </Link>
                                    {!collapse && (
                                        <Link href={item.link}>
                                            <h1 className="hidden md:block">{item.title}</h1>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div
                    className={`${collapse ? "ml-[4%]" : "ml-[12%]"} w-full transition-all duration-300 ease-in-out`}
                >
                    <div className="py-3 border-b-2 shadow-sm">
                        <div className="flex justify-end items-center gap-x-2 pr-4">
                            <h1>Md Ruhul Amin</h1>
                            <Image
                                className="rounded-full"
                                src="https://res.cloudinary.com/db4c4ud2n/image/upload/v1729533278/A_nedhpy.jpg"
                                alt="Your icon"
                                height={40}
                                width={40}
                            />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </SessionProvider>

    );
};

export default DashboardLayout;
