import React, { useEffect, useState } from "react";
import useCollection from "../hooks/useCollection";
import useDebounce from "../hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Form, InputGroup } from "react-bootstrap";
import "../styles/SearchBar.css";

function SearchBar({ setRecipeNameFilter, recipeNameFilter }) {
  const [search, setSearch] = useState("");

  const recipes = useCollection("recipe");
  // zoeken naar recept uitstellen om database niet te overbelasten door debounce
  const debouncedSearch = useDebounce(search, 500);
  // zoekterm vergelijken met data maar eerst alles in lowercase zetten
  useEffect(() => {
    const newFilter = recipes.filter((recipe) => {
      return recipe.nameRecipe
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
    });
    const newData = Array.from(newFilter);

    // als er een zoekterm wordt ingegeven dan gaan we de opgehaalde data in 1 array steken om alles door te geven aan firebase
    if (debouncedSearch.length != 0) {
      const result = newData.map((element) => [element["nameRecipe"]]).flat();
      setRecipeNameFilter({ nameRecipe: result });
    } else {
      setRecipeNameFilter({});
    }
  }, [debouncedSearch]);

  const clearInput = () => {
    setSearch("");
    setRecipeNameFilter({});
  };

  return (
    <Form className="search">
      <Form.Group className="search__inputs">
        <InputGroup>
          <Form.Control
            type="searchInputs"
            value={search}
            name="recipeName"
            placeholder="Zoek naar een recept"
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputGroup.Text className="search__icon">
            {debouncedSearch.length === 0 ? (
              <FontAwesomeIcon icon={faMagnifyingGlass} id="clearBtn" />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={clearInput}
                id="clearBtn"
              />
            )}
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
