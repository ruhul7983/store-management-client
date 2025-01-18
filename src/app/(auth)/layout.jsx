import Link from "next/link";


const layout = ({ children }) => {
    return (
        <div>
            <div className="max-w-6xl flex justify-between mx-auto items-center">
                <div>
                    Store Management
                </div>
                <div className="">
                    <ul className="flex gap-x-3 py-3">
                        <li><Link href={""}>Home</Link></li>
                        <li><Link href={""}>Home</Link></li>
                        <li><Link href={""}>Home</Link></li>
                        <li><Link href={""}>Home</Link></li>
                    </ul>
                </div>
                <div>
                    Dark Mode
                </div>

            </div>
            {children}

        </div>
    );
};

export default layout;