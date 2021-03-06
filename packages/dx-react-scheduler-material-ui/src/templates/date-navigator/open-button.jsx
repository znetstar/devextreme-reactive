import * as React from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CalendarToday from '@material-ui/icons/CalendarToday';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'clsx';
import { SMALL_LAYOUT_MEDIA_QUERY, LAYOUT_MEDIA_QUERY } from '../constants';

const styles = ({ spacing }) => ({
  textButton: {
    [`${LAYOUT_MEDIA_QUERY}`]: {
      display: 'none',
    },
  },
  iconButton: {
    '@media (min-width: 700px)': {
      display: 'none',
    },
    [`${SMALL_LAYOUT_MEDIA_QUERY}`]: {
      width: spacing(4),
      height: spacing(4),
      padding: 0,
    },
  },
});

const OpenButtonBase = React.memo(({
  text, onVisibilityToggle, classes, className, ...restProps
}) => (
  <React.Fragment>
    <Button
      onClick={onVisibilityToggle}
      className={classNames(classes.textButton, className)}
      {...restProps}
    >
      {text}
    </Button>
    <IconButton
      onClick={onVisibilityToggle}
      className={classNames(classes.iconButton, className)}
      {...restProps}
    >
      <CalendarToday />
    </IconButton>
  </React.Fragment>
));

OpenButtonBase.propTypes = {
  onVisibilityToggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

OpenButtonBase.defaultProps = {
  text: '',
  className: undefined,
};

export const OpenButton = withStyles(styles, { name: 'OpenButton' })(OpenButtonBase);
