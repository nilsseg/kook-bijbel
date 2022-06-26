import React from "react";

const Feedback = ({ comment, score, updateForm }) => {
  const onChange = e => updateForm(e.target.name, e.target.value);

  return (
    <div>
      <label htmlFor="comment">Comment</label>
      <textarea
        type="text"
        name="comment"
        value={comment}
        placeholder="Geef een korte feedback"
        id="comment"
        onChange={onChange}
      />
    </div>
  );
};

export default Feedback;
