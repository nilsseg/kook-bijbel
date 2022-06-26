import React, { useEffect, useState } from "react";
import { db } from "../utils/database";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHollowHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row } from "react-bootstrap";

function RecipeRating({ recipeId }) {
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const { currentUser } = useAuth();

  // Als er iets wijzigt aan rating dan halen we de gegevens terug op
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "recipe", recipeId, "rating"),
      (snapshot) => setLikes(snapshot.docs)
    );
    return () => unsub();
  }, [db]);

  // Bij aanpassing van likes, het aantal aanpassen > zorgen dat er niet onder 0 kan worden geklikt
  useEffect(() => {
    currentUser &&
      setHasLiked(
        likes.findIndex((like) => like.id === currentUser.uid) !== -1
      );
  }, [likes]);

  // op basis van state de userId weghalen of toevoegen aan de subcollection rating
  const likeRecipe = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "recipe", recipeId, "rating", currentUser.uid));
    } else {
      await setDoc(doc(db, "recipe", recipeId, "rating", currentUser.uid), {
        username: currentUser.displayName,
      });
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {currentUser && (
            <span>
              {" "}
              {hasLiked ? (
                <FontAwesomeIcon icon={faHeart} onClick={likeRecipe} />
              ) : (
                <FontAwesomeIcon icon={faHollowHeart} onClick={likeRecipe} />
              )}
            </span>
          )}
          {likes.length > 0 && <span>{likes.length} likes</span>}
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeRating;
