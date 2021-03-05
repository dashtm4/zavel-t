import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getList } from "../../selectors";
import { fetchList } from "../../redux/actions/list.action";

import "./List.scss";

function List({ list }) {
  console.log("list", list);

  useEffect(() => {
    console.log("invoke fetchList");
    fetchList();
  });

  return <div>List</div>;
}

const mapStateToProps = (state) => ({
  list: getList(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    fetchList,
  }),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
