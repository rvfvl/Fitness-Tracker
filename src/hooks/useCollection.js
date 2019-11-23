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
          snapshot.forEach(doc => results.push(doc.data()));
          setLoading(false);
          setData(results);
        },
        err => setError(err)
      );

    return () => unsubscribe();
  }, [name]);

  return { data, error, loading };
};

export default useCollection;