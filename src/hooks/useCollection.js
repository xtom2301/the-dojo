import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  where,
  orderBy,
  onSnapshot,
  query,
} from 'firebase/firestore';

export const useCollection = (c, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const q = useRef(_query).current;
  const o = useRef(_orderBy).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }
    if (o) {
      ref = query(ref, orderBy(...o));
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('could not fetch the data');
      }
    );

    return () => unsubscribe();
  }, [c, q, o]);

  return { documents, error };
};
