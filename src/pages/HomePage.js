import { signOut } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";

const HomePage = () => {
     const handleSignOut = () => {
          signOut(auth);
     };

     return <div>Sign out</div>;
};

export default HomePage;
