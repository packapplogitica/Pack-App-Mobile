import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import { errorToJSON } from "next/dist/server/render";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '660881731916-5nsuke276n4p4nb7ejn8u4ios88hgvnu.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await res.json()
        // console.log('entrando aca en authorize', data)
        if (!data.user) {
          //  console.log('entrando aca')
          throw errorToJSON({ error: data.message.error, message: data.message.message, statusCode: data.statusCode })
        }
        const user = data.user.profile;
        user.token = data.user.token
        user.email = data.user.email
        user.isRegistrationComplete = data.user.isRegistrationComplete
        user.registrationStep = data.user.registrationStep
        // console.log("USUARIO", user.token);



        return user;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
    error: "/404",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'google') {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/validate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: profile.email,
              name: profile.name,
              picture: profile.picture,
              googleId: profile.sub,
            }),
          });

          const data = await response.json();
          // console.log('la data', data)
          // Store the backend token
          account.access_token = data.access_token;
          account.isRegistrationComplete = data.isRegistrationComplete;
          account.registrationStep = data.registrationStep;
          account.email = data.user.email
          account.user = data.user.profile
          return true;
        } catch (error) {
          return false;
        }
      }

      account.access_token = user.access_token?? user.token;
      account.isRegistrationComplete = user.isRegistrationComplete;
      account.registrationStep = user.registrationStep;
      account.email = user.email
      account.user = user.profile
      return true;
    },
    async jwt({ token, user, trigger, session, account }) {
      // Initial sign-in
      if (account) {
        // console.log('la cunetra en el else',account)
        // Set all account-related data at once during sign-in
        token.accessToken = account.access_token;
        token.isRegistrationComplete = account.isRegistrationComplete;
        token.registrationStep = account.registrationStep;
        token.email = account.email;
        token.provider = account.provider;
        token.user = account.provider === 'google' ? account.user : user;
      }
    
      // Handle session updates
      if (trigger === 'update') {
        return { ...token, ...session };
      }
    
      return token;
    },
    async session({ session, token, user }) {
      // console.log('las token', token)
      // console.log('las session', session)
      // console.log('las user', user)
      session.isRegistrationComplete = token.isRegistrationComplete;
      session.registrationStep = token.registrationStep;
      session.user = token.user
      session.user.token= token.accessToken
      session.email = token.email

      console.log('/////////')
      // console.log('las session', session)

      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
