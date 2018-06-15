import { connect } from "react-redux";
import { PicturesDisplay } from "./PicturesDisplay";
import { picturesSelector } from "./../../selectors";

const mapStateToProps = state => {
  const pics = picturesSelector(state);
  debugger;
  return pics ? { pics: [...pics.toJS()] } : "No pics to load";
};

export const PicturesContainer = connect(mapStateToProps)(PicturesDisplay);
