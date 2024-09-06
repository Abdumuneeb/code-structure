import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Replace this with your own logic
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };

        // In a real app, you would want to check the credentials from a database
        if (credentials.username === 'admin' && credentials.password === 'password') {
          return user;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin' // Customize sign-in page
  },
  session: {
    strategy: 'jwt' // Use JWT for session management
  },
  callbacks: {
    async session({ session, user }) {
      // Add user properties to session
      if (user) {
        session.user = user;
      }
      return session;
    }
  }
});
