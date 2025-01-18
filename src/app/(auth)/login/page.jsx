"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoading(true);
        
        try {
          // Explicitly set redirect: false
          const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
            isRegistering: "false", 
          });
      
          if (!result) {
            alert("Server is not responding. Please try again later.");
            setLoading(false);
            return;
          }
      
          if (result.error) {
            // Handle the error returned by NextAuth
            alert(result.error);
            setLoading(false);
            return;
          }
      
          router.push("/home"); // Redirect to dashboard or any other page
        } catch (error) {
          console.error("Error during registration:", error);
          alert("Something went wrong. Please try again!");
        } finally {
          setLoading(false);
        }
      };
      
    return (
        <div className="flex justify-center items-center min-h-[90vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Log in here</CardTitle>
          <CardDescription>Create an account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Email</Label>
                <input
                  className="py-2 pl-1 focus:outline-0 border"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Password</Label>
                <input
                  className="py-2 pl-1 focus:outline-0 border"
                  name="password"
                  id="password"
                  placeholder="Must be 6 characters"
                  required
                  type="password"
                />
              </div>
            </div>
            <Button type="submit" className="mt-4" disabled={loading}>
              {loading ? "Logging..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
    );
};

export default LoginPage;