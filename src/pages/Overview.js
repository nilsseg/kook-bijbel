import React, { useState } from "react";
import useCollection from "../hooks/useCollection";
import BigCard from "../components/BigCard";
import "../styles/Overview.css";
import { Row, Col } from "react-bootstrap";
import { Filter } from "../components/Filter";
import SearchBar from "../components/SearchBar";

function Overview() {
  const [filters, setFilters] = useState({});
  const recipes = useCollection("recipe", filters);

  console.log(recipes);
  return (
    <main className="overview" style={{ padding: "0em 5em" }}>
      <Row>
        <Col xs={2} style={{ minWidth: "15em" }}>
          <h2 className="overview__title">Zin in</h2>

          <SearchBar
            setRecipeNameFilter={setFilters}
            recipeNameFilter={filters}
          />
          <Filter setFilters={setFilters} selectedFilters={filters} />
        </Col>
        <Col>
          <h2 className="overview__title">Overview</h2>
          <section className="overview__items">
            {recipes.map((recipe, i) => (
              <BigCard recipe={recipe} key={recipe.id} />
            ))}
          </section>
        </Col>
      </Row>
    </main>
  );
}

export default Overview;
