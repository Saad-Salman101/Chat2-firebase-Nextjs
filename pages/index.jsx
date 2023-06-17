// import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
// import { useDispatch, useSelector } from "react-redux";
import SignIn from "../components/SignIn";
import Chat from "../components/Chat";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main>
      {user ? <Chat /> : <SignIn />}
      </main>
    </>
  );
}
