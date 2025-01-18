import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        isRegistering: { label: "Registering", type: "hidden" }, // Flag to differentiate login vs register
      },
      async authorize(credentials) {
        const { email, password, isRegistering } = credentials;

        try {
          if (isRegistering === "true") {
            // Registration flow
            if (!email || !password) {
              throw new Error("Email and password are required for registration");
            }

            const registerResponse = await fetch("http://localhost:5000/api/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });

            if (!registerResponse.ok) {
              const errorData = await registerResponse.json();
              throw new Error(errorData.message || "Registration failed");
            }

            return await registerResponse.json(); // Registration successful
          } else {
            // Login flow
            const loginResponse = await fetch("http://localhost:5000/api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });

            if (!loginResponse.ok) {
              const errorData = await loginResponse.json();
              throw new Error(errorData.message || "Invalid credentials");
            }

            return await loginResponse.json(); // Login successful
          }
        } catch (error) {
          console.error("Authentication error:", error.message);
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
  debug: true,
});
