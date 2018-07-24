import React from "react";

const SearchBox = ({ keywords, changeKeywords }) => {
  return (
    <div className="row py-4">
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="Type your keywords"
          value={keywords}
          onChange={e => changeKeywords(e.target.value)}
        />
      </div>
    </div>
  );
};

export { SearchBox };
