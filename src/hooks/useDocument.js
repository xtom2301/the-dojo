import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = doc(db, 'projects', id);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError('Document not found :c');
        }
      },
      (err) => {
        console.log(err.message);
        setError('failed to get document');
      }
    );

    return () => unsubscribe();
  }, [c, id]);

  return { document, error };
};
