import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getList } from "../../selectors";
import { fetchList } from "../../redux/actions/list.actions";

import "./ListPage.scss";

function List({ list, fetchList }) {
  useEffect(() => {
    fetchList();
  });

  const handleSubmit = () => {
    fetchList();
  };
  return (
    <div className="list__wrapper">
      <h1>LIST</h1>
      <div>Length: {list.length}</div>
      <div>Content: {list}</div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: getList(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      fetchList,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
