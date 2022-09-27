import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import { db, auth } from './firebase.js';
import SendMessage from './SendMessage';


function Line() {
    const [messages, setMessages] = useState([]);
    //useEffectで発火のタイミングを指定する
    useEffect(() => {
        //collection()関数でDBにアクセスできる
        //orderBy()でソート順を変更する
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapShot) => {
            setMessages(snapShot.docs.map((doc) => doc.data()));
        });
    }, []);
  return (
    <div>
        {console.log(messages)}
        <SignOut />
        <div class="msgs">
            {/*messagesに格納されたデータで表示させたいものをmap関数で取得*/}
            {messages.map(({id, text, photoURL, uid}) => (
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"
                }`}>
                        <img src={photoURL} alt=""/>
                        <p>{text}</p> 
                    </div>
                </div>
            ))}
        </div>
        <SendMessage />
    </div>
  )
}

export default Line;