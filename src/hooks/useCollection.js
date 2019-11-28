import { useState, useEffect } from "react";
import firebase from "config/firebase";
import moment from "moment";

const sortArray = array =>
  array.sort((a, b) => {
    return a.createdAt.localeCompare(b.createdAt);
  });

const useCollection = name => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(name)
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .onSnapshot(
        snapshot => {
          const results = [];
          snapshot.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
          setData(sortArray(results));
          setLoading(false);
        },
        err => setError(err)
      );

    return () => unsubscribe();
  }, []);

  const addNewDatabaseRecord = _data => {
    const filteredData = Object.entries(_data).map(item => ({
      name: item[0].toLowerCase(),
      value: item[1].value
    }));

    const results = filteredData.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.value }),
      {}
    );

    firebase
      .firestore()
      .collection(name)
      .doc()
      .set({
        user_id: firebase.auth().currentUser.uid,
        createdAt: moment().format(),
        date: moment().format("D MMMM YYYY"),
        ...results
      });
  };

  const deleteDocument = id =>
    firebase
      .firestore()
      .collection(name)
      .doc(id)
      .delete();

  return { data, error, loading, addNewDatabaseRecord, deleteDocument };
};

export default useCollection;
