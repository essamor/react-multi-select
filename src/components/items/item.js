import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Checkbox from "material-ui/Checkbox";
import ItemLabel from "./item_label";

import styles from "./item.scss";

const Item = ({
  item,
  height,
  onClick,
  withBorder,
  checked,
  indeterminate,
  disabled
}) => (
  <div
    className={classnames(styles.item, {
      [styles.with_border]: withBorder,
      [styles.selected]: checked,
      [styles.disabled]: disabled
    })}
    style={{ height }}
    onClick={onClick}
  >
    <Checkbox
      type="checkbox"
      color="primary"
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
    />
    <ItemLabel label={item.label}/>
  </div>
);

Item.propTypes = {
  item: PropTypes.object,
  height: PropTypes.number,
  withBorder: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool
};

Item.defaultProps = {
  item: {},
  height: 40,
  withBorder: false,
  checked: false,
  indeterminate: false,
  disabled: false
};

export default Item;
