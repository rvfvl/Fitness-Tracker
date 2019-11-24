import { useState, useEffect } from "react";
import firebase from "config/firebase";

const useCollection = name => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(name)
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .onSnapshot(
        snapshot => {
          const results = [];
          snapshot.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
          setData(results);
          setLoading(false);
        },
        err => setError(err)
      );

    return () => unsubscribe();
  }, []);

  const addNewDatabaseRecord = () => {
    console.log("ADDED NEW RECORD TO FIREBASE");
  };

  return { data, error, loading, addNewDatabaseRecord };
};

export default useCollection;
