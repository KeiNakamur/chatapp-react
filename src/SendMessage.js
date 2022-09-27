import React, { useState } from 'react'
import { db, auth } from './firebase.js';
import firebase from "firebase/compat/app";

function SendMessage() {
    const [message, setMessage] = useState();

    function sendmessage(e) {
        //onSubmitでenter keyが押された際にページをロードされてしまうデフォルトの機能を
        //e.preventDefault()で止めてあげる
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        //firebaseのdbに送る必要があるのでimportするのを忘れず
        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            //以下でenter keyを押した時間を取得可能に
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
     }


  return (
    <div>
        <form onSubmit={sendmessage}>
            <div class="sendMsg">
                <input type="text" placeholder='メッセージを入力してください'
                /* setMessageでmesssage変数内にinputで入力された文字列を格納　 */
                onChange={(e) => setMessage(e.target.value)}
                value={message}/>
            </div>
        </form>
    </div>
  )
}

export default SendMessage;