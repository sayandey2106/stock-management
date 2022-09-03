import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../components/loader/loader";
import LoaderEm from "../../components/loader/loader_embed";
import {
  setLoader,
  unsetLoader
} from "../../actions/loader/loaderAction";
export class LoaderCon extends Component {
  render() {
    return (
      <Loader {...this.props} />
      // <LoaderEm {...this.props}/>
    );
  }
};
export const mapStateToProps = store => {
  return {
    loader: store.loader
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    setLoader: () => {
      dispatch(setLoader());
    },
    unsetLoader: () => {
      dispatch(unsetLoader());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoaderCon);
