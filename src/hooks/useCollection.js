import { useEffect, useState } from "react";
import { db } from "../utils/database";
import { collection, onSnapshot, query, where } from "firebase/firestore";

// Original hook before the addition to perform compound queries
// const useCollection = (c) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     let ref = collection(db, c);
//     const unsub = onSnapshot(ref, (snapshot) => {
//       let results = [];
//       snapshot.docs.forEach((doc) => {
//         results.push({ ...doc.data(), id: doc.id });
//       });
//       setData(results);
//     });
//     return () => unsub();
//   }, [c]);
//   console.log(data);

//   if (!data) return null;
//   return data;
// };

// Hook to obtain data with the possibility to perform compound queries
const useCollection = (c, filterObject = {}) => {
  const [data, setData] = useState([]);

  /**
   * {filterObject
   * cuisineType:["Mediterraans"]
   * }
   */

  useEffect(() => {
    let unsub;
    let ref = collection(db, c);
    const filters = Object.entries(filterObject);
    // if there no queries than the filterObject (and thus filters) is 0(empty) than we'll fetch all the data
    if (filters.length === 0) {
      unsub = onSnapshot(ref, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setData(results);
      });
    } else {
      const queries = filters.map(([field, value]) =>
        // where(field, "in", [value])
        query(ref, where(field, "in", value))
      );
      // let searchQuery = query(ref, ...whereStatements);
      unsub = onSnapshot(...queries, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setData(results);
      });
    }

    return () => unsub();
  }, [c, JSON.stringify(filterObject)]);
  // console.log(data);

  if (!data) return null;
  return data;
};
export default useCollection;
