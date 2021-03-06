import React, { useState, useEffect } from "react";
import { db } from "../utils/database";
import { doc, getDoc } from "firebase/firestore";

const useDocument = (c, id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let docRef = doc(db, c, id);
      const docSnap = await getDoc(docRef);
      let results = [];
      results.push({ ...docSnap.data() });
      setData(results);
    };
    getData();
  }, [id]);
  if (!data) return null;
  return data;
};

export default useDocument;
