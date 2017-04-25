'use strict';

import menuFactory from '../menuFactory';

const styles = {

  pageWrap(isOpen, width, right) {
    return {
      transition: 'all 0.5s'
    };
  },

  outerContainer(isOpen) {
    return {
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

export default menuFactory(styles);
