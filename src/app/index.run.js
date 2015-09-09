(function() {
  'use strict';

  angular
    .module('helloYeo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
