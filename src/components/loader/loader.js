import React from "react";
import { CircularProgress } from "material-ui/Progress";

import styles from "./loader.scss";

const Loader = () => (
  <div className={styles.loader}>
    <CircularProgress style={{ width: 100 }} />
  </div>
);

export default Loader;
