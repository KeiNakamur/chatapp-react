import './App.css';
import SignIn from './SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Line from './Line';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {/* userに何かしらのデータ(nullでない)場合、<Line>コンポーネントへ、userに何かしらのデータがない(null)の場合、<SignIn>コンポーネントへ */} 
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;
