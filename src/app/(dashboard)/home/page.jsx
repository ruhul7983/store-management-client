import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logout from "@/components/logout";
import UserName from "@/components/UserName";
const HomePage =async () => {
    const session = await getServerSession();

    // Redirect to '/' if not authenticated
    if (!session) {
        redirect("/");
    }

    
    return (
        <div className="bg-gray-300 min-h-screen">
            <div className="px-5 pt-3">
                <h1 className="text-2xl font-semibold py-3 text-gray-800 flex items-center gap-x-1">Dashboard <UserName></UserName></h1>
                <Logout></Logout>
                <h1 className="text-gray-800">Stock Info</h1>
                <div className="text-gray-800 grid grid-cols-3 gap-x-4 ">
                    <div className="py-5 px-2 bg-gray-400 rounded">
                        <h1 className="text-gray-800">Todays Stock In</h1>
                        <p>100</p>
                        <hr />
                        <h1 className="text-gray-800">Todays Stock Cost</h1>
                        <p>100</p>
                    </div>
                    <div className="py-5 px-2 bg-gray-400 rounded">
                        <h1 className="text-gray-800">Todays Stock Out</h1>
                        <p>100</p>
                        <hr />
                        <h1 className="text-gray-800">Todays Stock Cost</h1>
                        <p>100</p>
                    </div>
                    <div className="py-5 px-2 bg-gray-400 rounded">
                        <h1 className="text-gray-800">Todays Total Sales</h1>
                        <p>100</p>
                        <hr />
                        <h1 className="text-gray-800">Todays Total Profit</h1>
                        <p>100</p>
                    </div>
                </div>
                <h1 className="text-gray-800 mt-5">Cost</h1>
                <div className="text-gray-800 flex flex-row gap-x-4 items-center">
                    <div className="py-2 px-2 bg-gray-400 rounded">
                        <h1 className="text-gray-800">Todays Total Cost</h1>
                        <p>100</p>
                    </div>
                    <Button>Add New Cost</Button>
                </div>
                {/* Customer */}
                <div className="mt-5">
                    <div className="flex justify-between items-center">
                        <h1 className="">Customer</h1>
                        <Button>Add New Sell</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-x-2 pt-2">
                        <div className="py-2 px-2 bg-gray-400 rounded">
                            <h1 className="text-gray-800">Todays Total Customer</h1>
                            <p>10</p>
                        </div>
                        <div className="py-2 px-2 bg-gray-400 rounded">
                            <h1 className="text-gray-800">Getting Due Money Today</h1>
                            <p>10</p>
                        </div>
                        <div className="py-2 px-2 bg-gray-400 rounded">
                            <h1 className="text-gray-800">Selling Due</h1>
                            <p>10</p>
                        </div>
                    </div>
                </div>
                {/* Supplier */}
                <div className="mt-5">
                    <div className="flex justify-between items-center">
                        <h1 className="">Supplier</h1>
                        <Button>Add New Buy</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-x-2 pt-2">
                        <div className="py-2 px-2 bg-gray-400 rounded">
                            <h1 className="text-gray-800">Todays Total Supplier</h1>
                            <p>10</p>
                        </div>
                        <div className="py-2 px-2 bg-gray-400 rounded">
                            <h1 className="text-gray-800">Supplier Due</h1>
                            <p>10</p>
                        </div>
                        <div className="py-2 px-2 bg-gray-400 rounded">
                            <h1 className="text-gray-800">Supplier paid</h1>
                            <p>10</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomePage;