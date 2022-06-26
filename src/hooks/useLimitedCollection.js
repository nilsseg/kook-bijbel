import React, { useEffect, useState } from "react";
import { db } from "../utils/database";
import {
  collection,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";

const useLimitedCollection = (c, limits, filterObject = {}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unsub;
    let ref = collection(db, c);
    const filters = Object.entries(filterObject);
    const queries = filters.map(([field, value]) =>
      // where(field, "in", [value])
      query(ref, where(field, "in", value), limit(limits))
    );
    unsub = onSnapshot(...queries, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setData(results);
    });

    return () => unsub();
  }, [c, JSON.stringify(filterObject)]);
  // console.log(data);

  if (!data) return null;
  return data;
};

export default useLimitedCollection;
