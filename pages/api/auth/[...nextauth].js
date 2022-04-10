import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Email and Username",
    //   credentials: {
    //     email: { label: "Email", type: "text ", placeholder: "Email" },
    //     name: { label: "username", type: "text", placeholer: "username" },
    //   },
    //   authorize: async (credentials, req) => {},
    // }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID,
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET,
    // }),
    //...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user.image) {
        return;
      } else {
        session.user.image =
          "https://www.pngitem.com/pimgs/m/279-2799324_transparent-guest-png-become-a-member-svg-icon.png";
      }
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  debug: false,
});

// export default (req, res) => NextAuth(req, res, options);
