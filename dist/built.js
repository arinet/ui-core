/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(2);
	(function webpackMissingModule() { throw new Error("Cannot find module \"./src/strap-templates.js\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ari.ui.core', [
	'ui.bootstrap.accordion',
	'ui.bootstrap.alert',
	'ui.bootstrap.buttons',
	'ui.bootstrap.collapse',
	'ui.bootstrap.dateparser',
	'ui.bootstrap.datepicker',
	'ui.bootstrap.timepicker',
	'ui.bootstrap.dropdown',
	'ui.bootstrap.modal',
	'ui.bootstrap.progressbar',
	'ui.bootstrap.rating',
	'ui.bootstrap.tabs',
	'ui.bootstrap.transition',
	'ui.bootstrap.position',
	'mgcrea.ngStrap.helpers.dimensions',
	'mgcrea.ngStrap.popover',
	'mgcrea.ngStrap.tooltip',
	'ari.ui.core.ui-bootstrap-templates',
	'ari.ui.core.ng-strap-templates'
	]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module("ari.ui.core.ui-bootstrap-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/accordion/accordion-group.html","<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a href class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{\'text-muted\': isDisabled}\">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class=\"panel-collapse\" collapse=\"!isOpen\">\n	  <div class=\"panel-body\" ng-transclude></div>\n  </div>\n</div>\n");
	$templateCache.put("template/accordion/accordion.html","<div class=\"panel-group\" ng-transclude></div>");
	$templateCache.put("template/alert/alert.html","<div class=\"alert\" ng-class=\"[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]\" role=\"alert\">\n    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n");
	$templateCache.put("template/datepicker/datepicker.html","<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n</div>");
	$templateCache.put("template/datepicker/day.html","<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n  <thead>\n    <tr>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in rows track by $index\">\n      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{\'btn-info\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\'text-muted\': dt.secondary, \'text-info\': dt.current}\">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");
	$templateCache.put("template/datepicker/month.html","<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n  <thead>\n    <tr>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in rows track by $index\">\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\'btn-info\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\'text-info\': dt.current}\">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");
	$templateCache.put("template/datepicker/popup.html","<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}\" ng-keydown=\"keydown($event)\">\n	<li ng-transclude></li>\n	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n		<span class=\"btn-group pull-left\">\n			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select(\'today\')\">{{ getText(\'current\') }}</button>\n			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n");
	$templateCache.put("template/datepicker/year.html","<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n  <thead>\n    <tr>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in rows track by $index\">\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\'btn-info\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\'text-info\': dt.current}\">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");
	$templateCache.put("template/timepicker/timepicker.html","<table>\n	<tbody>\n		<tr class=\"text-center\">\n			<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n			<td ng-show=\"showMeridian\"></td>\n		</tr>\n		<tr>\n			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{\'has-error\': invalidHours}\">\n				<input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n			</td>\n			<td>:</td>\n			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{\'has-error\': invalidMinutes}\">\n				<input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n			</td>\n			<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n		</tr>\n		<tr class=\"text-center\">\n			<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n			<td ng-show=\"showMeridian\"></td>\n		</tr>\n	</tbody>\n</table>\n");
	$templateCache.put("template/modal/backdrop.html","<div class=\"modal-backdrop fade {{ backdropClass }}\"\n     ng-class=\"{in: animate}\"\n     ng-style=\"{\'z-index\': 1040 + (index && 1 || 0) + index*10}\"\n></div>\n");
	$templateCache.put("template/modal/window.html","<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{\'z-index\': 1050 + index*10, display: \'block\'}\" ng-click=\"close($event)\">\n    <div class=\"modal-dialog\" ng-class=\"{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}\"><div class=\"modal-content\" modal-transclude></div></div>\n</div>");
	$templateCache.put("template/progressbar/bar.html","<div class=\"progress-bar\" ng-class=\"type && \'progress-bar-\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + \'%\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>");
	$templateCache.put("template/progressbar/progress.html","<div class=\"progress\" ng-transclude></div>");
	$templateCache.put("template/progressbar/progressbar.html","<div class=\"progress\">\n  <div class=\"progress-bar\" ng-class=\"type && \'progress-bar-\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + \'%\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n</div>");
	$templateCache.put("template/rating/rating.html","<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')\">\n        <span class=\"sr-only\">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>");
	$templateCache.put("template/tabs/tab.html","<li ng-class=\"{active: active, disabled: disabled}\">\n  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n</li>\n");
	$templateCache.put("template/tabs/tabset.html","<div>\n  <ul class=\"nav nav-{{type || \'tabs\'}}\" ng-class=\"{\'nav-stacked\': vertical, \'nav-justified\': justified}\" ng-transclude></ul>\n  <div class=\"tab-content\">\n    <div class=\"tab-pane\" \n         ng-repeat=\"tab in tabs\" \n         ng-class=\"{active: tab.active}\"\n         tab-content-transclude=\"tab\">\n    </div>\n  </div>\n</div>\n");}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])
	
	.constant('accordionConfig', {
	  closeOthers: true
	})
	
	.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {
	
	  // This array keeps track of the accordion groups
	  this.groups = [];
	
	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if ( closeOthers ) {
	      angular.forEach(this.groups, function (group) {
	        if ( group !== openGroup ) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };
	
	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);
	
	    groupScope.$on('$destroy', function (event) {
	      that.removeGroup(groupScope);
	    });
	  };
	
	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if ( index !== -1 ) {
	      this.groups.splice(index, 1);
	    }
	  };
	
	}])
	
	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('accordion', function () {
	  return {
	    restrict:'EA',
	    controller:'AccordionController',
	    transclude: true,
	    replace: false,
	    templateUrl: 'template/accordion/accordion.html'
	  };
	})
	
	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('accordionGroup', function() {
	  return {
	    require:'^accordion',         // We need this directive to be inside an accordion
	    restrict:'EA',
	    transclude:true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl:'template/accordion/accordion-group.html',
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);
	
	      scope.$watch('isOpen', function(value) {
	        if ( value ) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });
	
	      scope.toggleOpen = function() {
	        if ( !scope.isDisabled ) {
	          scope.isOpen = !scope.isOpen;
	        }
	      };
	    }
	  };
	})
	
	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	// <accordion-group>
	//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
	// </accordion-group>
	.directive('accordionHeading', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^accordionGroup',
	    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, function() {}));
	    }
	  };
	})
	
	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	// <div class="accordion-group">
	//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
	//   ...
	// </div>
	.directive('accordionTransclude', function() {
	  return {
	    require: '^accordionGroup',
	    link: function(scope, element, attr, controller) {
	      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
	        if ( heading ) {
	          element.html('');
	          element.append(heading);
	        }
	      });
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.alert', [])
	
	.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
	  $scope.closeable = 'close' in $attrs;
	  this.close = $scope.close;
	}])
	
	.directive('alert', function () {
	  return {
	    restrict:'EA',
	    controller:'AlertController',
	    templateUrl:'template/alert/alert.html',
	    transclude:true,
	    replace:true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	})
	
	.directive('dismissOnTimeout', ['$timeout', function($timeout) {
	  return {
	    require: 'alert',
	    link: function(scope, element, attrs, alertCtrl) {
	      $timeout(function(){
	        alertCtrl.close();
	      }, parseInt(attrs.dismissOnTimeout, 10));
	    }
	  };
	}]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.buttons', [])
	
	.constant('buttonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})
	
	.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])
	
	.directive('btnRadio', function () {
	  return {
	    require: ['btnRadio', 'ngModel'],
	    controller: 'ButtonsController',
	    link: function (scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
	      };
	
	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function () {
	        var isActive = element.hasClass(buttonsCtrl.activeClass);
	
	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function () {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	    }
	  };
	})
	
	.directive('btnCheckbox', function () {
	  return {
	    require: ['btnCheckbox', 'ngModel'],
	    controller: 'ButtonsController',
	    link: function (scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }
	
	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }
	
	      function getCheckboxValue(attributeValue, defaultValue) {
	        var val = scope.$eval(attributeValue);
	        return angular.isDefined(val) ? val : defaultValue;
	      }
	
	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };
	
	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function () {
	        scope.$apply(function () {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition'])
	
	  .directive('collapse', ['$transition', function ($transition) {
	
	    return {
	      link: function (scope, element, attrs) {
	
	        var initialAnimSkip = true;
	        var currentTransition;
	
	        function doTransition(change) {
	          var newTransition = $transition(element, change);
	          if (currentTransition) {
	            currentTransition.cancel();
	          }
	          currentTransition = newTransition;
	          newTransition.then(newTransitionDone, newTransitionDone);
	          return newTransition;
	
	          function newTransitionDone() {
	            // Make sure it's this transition, otherwise, leave it alone.
	            if (currentTransition === newTransition) {
	              currentTransition = undefined;
	            }
	          }
	        }
	
	        function expand() {
	          if (initialAnimSkip) {
	            initialAnimSkip = false;
	            expandDone();
	          } else {
	            element.removeClass('collapse').addClass('collapsing');
	            doTransition({ height: element[0].scrollHeight + 'px' }).then(expandDone);
	          }
	        }
	
	        function expandDone() {
	          element.removeClass('collapsing');
	          element.addClass('collapse in');
	          element.css({height: 'auto'});
	        }
	
	        function collapse() {
	          if (initialAnimSkip) {
	            initialAnimSkip = false;
	            collapseDone();
	            element.css({height: 0});
	          } else {
	            // CSS transitions don't work with height: auto, so we have to manually change the height to a specific value
	            element.css({ height: element[0].scrollHeight + 'px' });
	            //trigger reflow so a browser realizes that height was updated from auto to a specific value
	            var x = element[0].offsetWidth;
	
	            element.removeClass('collapse in').addClass('collapsing');
	
	            doTransition({ height: 0 }).then(collapseDone);
	          }
	        }
	
	        function collapseDone() {
	          element.removeClass('collapsing');
	          element.addClass('collapse');
	        }
	
	        scope.$watch(attrs.collapse, function (shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.dateparser', [])
	
	.service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
	
	  this.parsers = {};
	
	  var formatCodeToRegex = {
	    'yyyy': {
	      regex: '\\d{4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'yy': {
	      regex: '\\d{2}',
	      apply: function(value) { this.year = +value + 2000; }
	    },
	    'y': {
	      regex: '\\d{1,4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'MMMM': {
	      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
	    },
	    'MMM': {
	      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
	    },
	    'MM': {
	      regex: '0[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'M': {
	      regex: '[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'dd': {
	      regex: '[0-2][0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'd': {
	      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'EEEE': {
	      regex: $locale.DATETIME_FORMATS.DAY.join('|')
	    },
	    'EEE': {
	      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
	    }
	  };
	
	  function createParser(format) {
	    var map = [], regex = format.split('');
	
	    angular.forEach(formatCodeToRegex, function(data, code) {
	      var index = format.indexOf(code);
	
	      if (index > -1) {
	        format = format.split('');
	
	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + code.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');
	
	        map.push({ index: index, apply: data.apply });
	      }
	    });
	
	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }
	
	  this.parse = function(input, format) {
	    if ( !angular.isString(input) || !format ) {
	      return input;
	    }
	
	    format = $locale.DATETIME_FORMATS[format] || format;
	
	    if ( !this.parsers[format] ) {
	      this.parsers[format] = createParser(format);
	    }
	
	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex);
	
	    if ( results && results.length ) {
	      var fields = { year: 1900, month: 0, date: 1, hours: 0 }, dt;
	
	      for( var i = 1, n = results.length; i < n; i++ ) {
	        var mapper = map[i-1];
	        if ( mapper.apply ) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }
	
	      if ( isValid(fields.year, fields.month, fields.date) ) {
	        dt = new Date( fields.year, fields.month, fields.date, fields.hours);
	      }
	
	      return dt;
	    }
	  };
	
	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if ( month === 1 && date > 28) {
	        return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	    }
	
	    if ( month === 3 || month === 5 || month === 8 || month === 10) {
	        return date < 31;
	    }
	
	    return true;
	  }
	}]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])
	
	.constant('datepickerConfig', {
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  datepickerMode: 'day',
	  minMode: 'day',
	  maxMode: 'year',
	  showWeeks: true,
	  startingDay: 0,
	  yearRange: 20,
	  minDate: null,
	  maxDate: null
	})
	
	.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;
	
	  // Modes chain
	  this.modes = ['day', 'month', 'year'];
	
	  // Configuration attributes
	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
	                   'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange'], function( key, index ) {
	    self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
	  });
	
	  // Watchable date attributes
	  angular.forEach(['minDate', 'maxDate'], function( key ) {
	    if ( $attrs[key] ) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = value ? new Date(value) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
	    }
	  });
	
	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
	  this.activeDate = angular.isDefined($attrs.initDate) ? $scope.$parent.$eval($attrs.initDate) : new Date();
	
	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };
	
	  this.init = function( ngModelCtrl_ ) {
	    ngModelCtrl = ngModelCtrl_;
	
	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };
	
	  this.render = function() {
	    if ( ngModelCtrl.$modelValue ) {
	      var date = new Date( ngModelCtrl.$modelValue ),
	          isValid = !isNaN(date);
	
	      if ( isValid ) {
	        this.activeDate = date;
	      } else {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	      ngModelCtrl.$setValidity('date', isValid);
	    }
	    this.refreshView();
	  };
	
	  this.refreshView = function() {
	    if ( this.element ) {
	      this._refreshView();
	
	      var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
	      ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
	    }
	  };
	
	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
	    return {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0
	    };
	  };
	
	  this.isDisabled = function( date ) {
	    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
	  };
	
	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };
	
	  $scope.select = function( date ) {
	    if ( $scope.datepickerMode === self.minMode ) {
	      var dt = ngModelCtrl.$modelValue ? new Date( ngModelCtrl.$modelValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
	      ngModelCtrl.$setViewValue( dt );
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) - 1 ];
	    }
	  };
	
	  $scope.move = function( direction ) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };
	
	  $scope.toggleMode = function( direction ) {
	    direction = direction || 1;
	
	    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
	      return;
	    }
	
	    $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) + direction ];
	  };
	
	  // Key event mapper
	  $scope.keys = { 13:'enter', 32:'space', 33:'pageup', 34:'pagedown', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down' };
	
	  var focusElement = function() {
	    $timeout(function() {
	      self.element[0].focus();
	    }, 0 , false);
	  };
	
	  // Listen for focus requests from popup directive
	  $scope.$on('datepicker.focus', focusElement);
	
	  $scope.keydown = function( evt ) {
	    var key = $scope.keys[evt.which];
	
	    if ( !key || evt.shiftKey || evt.altKey ) {
	      return;
	    }
	
	    evt.preventDefault();
	    evt.stopPropagation();
	
	    if (key === 'enter' || key === 'space') {
	      if ( self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	      focusElement();
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	      focusElement();
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])
	
	.directive( 'datepicker', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/datepicker.html',
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&'
	    },
	    require: ['datepicker', '?^ngModel'],
	    controller: 'DatepickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if ( ngModelCtrl ) {
	        datepickerCtrl.init( ngModelCtrl );
	      }
	    }
	  };
	})
	
	.directive('daypicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/day.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      scope.showWeeks = ctrl.showWeeks;
	
	      ctrl.step = { months: 1 };
	      ctrl.element = element;
	
	      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      function getDaysInMonth( year, month ) {
	        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
	      }
	
	      function getDates(startDate, n) {
	        var dates = new Array(n), current = new Date(startDate), i = 0;
	        current.setHours(12); // Prevent repeated dates because of timezone bug
	        while ( i < n ) {
	          dates[i++] = new Date(current);
	          current.setDate( current.getDate() + 1 );
	        }
	        return dates;
	      }
	
	      ctrl._refreshView = function() {
	        var year = ctrl.activeDate.getFullYear(),
	          month = ctrl.activeDate.getMonth(),
	          firstDayOfMonth = new Date(year, month, 1),
	          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
	          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
	          firstDate = new Date(firstDayOfMonth);
	
	        if ( numDisplayedFromPreviousMonth > 0 ) {
	          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
	        }
	
	        // 42 is the number of days on a six-month calendar
	        var days = getDates(firstDate, 42);
	        for (var i = 0; i < 42; i ++) {
	          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
	            secondary: days[i].getMonth() !== month,
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.labels = new Array(7);
	        for (var j = 0; j < 7; j++) {
	          scope.labels[j] = {
	            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
	            full: dateFilter(days[j].date, 'EEEE')
	          };
	        }
	
	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
	        scope.rows = ctrl.split(days, 7);
	
	        if ( scope.showWeeks ) {
	          scope.weekNumbers = [];
	          var weekNumber = getISO8601WeekNumber( scope.rows[0][0].date ),
	              numWeeks = scope.rows.length;
	          while( scope.weekNumbers.push(weekNumber++) < numWeeks ) {}
	        }
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
	      };
	
	      function getISO8601WeekNumber(date) {
	        var checkDate = new Date(date);
	        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	        var time = checkDate.getTime();
	        checkDate.setMonth(0); // Compare with Jan 1
	        checkDate.setDate(1);
	        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	      }
	
	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getDate();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 7;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 7;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setMonth(month, 1);
	          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
	        } else if (key === 'home') {
	          date = 1;
	        } else if (key === 'end') {
	          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
	        }
	        ctrl.activeDate.setDate(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.directive('monthpicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/month.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      ctrl.step = { years: 1 };
	      ctrl.element = element;
	
	      ctrl._refreshView = function() {
	        var months = new Array(12),
	            year = ctrl.activeDate.getFullYear();
	
	        for ( var i = 0; i < 12; i++ ) {
	          months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
	        scope.rows = ctrl.split(months, 3);
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
	      };
	
	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getMonth();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 3;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 3;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setFullYear(year);
	        } else if (key === 'home') {
	          date = 0;
	        } else if (key === 'end') {
	          date = 11;
	        }
	        ctrl.activeDate.setMonth(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.directive('yearpicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/year.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      var range = ctrl.yearRange;
	
	      ctrl.step = { years: range };
	      ctrl.element = element;
	
	      function getStartingYear( year ) {
	        return parseInt((year - 1) / range, 10) * range + 1;
	      }
	
	      ctrl._refreshView = function() {
	        var years = new Array(range);
	
	        for ( var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++ ) {
	          years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.title = [years[0].label, years[range - 1].label].join(' - ');
	        scope.rows = ctrl.split(years, 5);
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return date1.getFullYear() - date2.getFullYear();
	      };
	
	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getFullYear();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 5;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 5;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
	        } else if (key === 'home') {
	          date = getStartingYear( ctrl.activeDate.getFullYear() );
	        } else if (key === 'end') {
	          date = getStartingYear( ctrl.activeDate.getFullYear() ) + range - 1;
	        }
	        ctrl.activeDate.setFullYear(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.constant('datepickerPopupConfig', {
	  datepickerPopup: 'yyyy-MM-dd',
	  currentText: 'Today',
	  clearText: 'Clear',
	  closeText: 'Done',
	  closeOnDateSelection: true,
	  appendToBody: false,
	  showButtonBar: true
	})
	
	.directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig',
	function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
	  return {
	    restrict: 'EA',
	    require: 'ngModel',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&'
	    },
	    link: function(scope, element, attrs, ngModel) {
	      var dateFormat,
	          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
	          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
	
	      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
	
	      scope.getText = function( key ) {
	        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	      };
	
	      attrs.$observe('datepickerPopup', function(value) {
	          dateFormat = value || datepickerPopupConfig.datepickerPopup;
	          ngModel.$render();
	      });
	
	      // popup element used to display calendar
	      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
	      popupEl.attr({
	        'ng-model': 'date',
	        'ng-change': 'dateSelection()'
	      });
	
	      function cameltoDash( string ){
	        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	      }
	
	      // datepicker element
	      var datepickerEl = angular.element(popupEl.children()[0]);
	      if ( attrs.datepickerOptions ) {
	        angular.forEach(scope.$parent.$eval(attrs.datepickerOptions), function( value, option ) {
	          datepickerEl.attr( cameltoDash(option), value );
	        });
	      }
	
	      scope.watchData = {};
	      angular.forEach(['minDate', 'maxDate', 'datepickerMode'], function( key ) {
	        if ( attrs[key] ) {
	          var getAttribute = $parse(attrs[key]);
	          scope.$parent.$watch(getAttribute, function(value){
	            scope.watchData[key] = value;
	          });
	          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
	
	          // Propagate changes from datepicker to outside
	          if ( key === 'datepickerMode' ) {
	            var setAttribute = getAttribute.assign;
	            scope.$watch('watchData.' + key, function(value, oldvalue) {
	              if ( value !== oldvalue ) {
	                setAttribute(scope.$parent, value);
	              }
	            });
	          }
	        }
	      });
	      if (attrs.dateDisabled) {
	        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
	      }
	
	      function parseDate(viewValue) {
	        if (!viewValue) {
	          ngModel.$setValidity('date', true);
	          return null;
	        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	          ngModel.$setValidity('date', true);
	          return viewValue;
	        } else if (angular.isString(viewValue)) {
	          var date = dateParser.parse(viewValue, dateFormat) || new Date(viewValue);
	          if (isNaN(date)) {
	            ngModel.$setValidity('date', false);
	            return undefined;
	          } else {
	            ngModel.$setValidity('date', true);
	            return date;
	          }
	        } else {
	          ngModel.$setValidity('date', false);
	          return undefined;
	        }
	      }
	      ngModel.$parsers.unshift(parseDate);
	
	      // Inner change
	      scope.dateSelection = function(dt) {
	        if (angular.isDefined(dt)) {
	          scope.date = dt;
	        }
	        ngModel.$setViewValue(scope.date);
	        ngModel.$render();
	
	        if ( closeOnDateSelection ) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };
	
	      element.bind('input change keyup', function() {
	        scope.$apply(function() {
	          scope.date = ngModel.$modelValue;
	        });
	      });
	
	      // Outter change
	      ngModel.$render = function() {
	        var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
	        element.val(date);
	        scope.date = parseDate( ngModel.$modelValue );
	      };
	
	      var documentClickBind = function(event) {
	        if (scope.isOpen && event.target !== element[0]) {
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	        }
	      };
	
	      var keydown = function(evt, noApply) {
	        scope.keydown(evt);
	      };
	      element.bind('keydown', keydown);
	
	      scope.keydown = function(evt) {
	        if (evt.which === 27) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          scope.close();
	        } else if (evt.which === 40 && !scope.isOpen) {
	          scope.isOpen = true;
	        }
	      };
	
	      scope.$watch('isOpen', function(value) {
	        if (value) {
	          scope.$broadcast('datepicker.focus');
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top = scope.position.top + element.prop('offsetHeight');
	
	          $document.bind('click', documentClickBind);
	        } else {
	          $document.unbind('click', documentClickBind);
	        }
	      });
	
	      scope.select = function( date ) {
	        if (date === 'today') {
	          var today = new Date();
	          if (angular.isDate(ngModel.$modelValue)) {
	            date = new Date(ngModel.$modelValue);
	            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	          } else {
	            date = new Date(today.setHours(0, 0, 0, 0));
	          }
	        }
	        scope.dateSelection( date );
	      };
	
	      scope.close = function() {
	        scope.isOpen = false;
	        element[0].focus();
	      };
	
	      var $popup = $compile(popupEl)(scope);
	      // Prevent jQuery cache memory leak (template is now redundant after linking)
	      popupEl.remove();
	
	      if ( appendToBody ) {
	        $document.find('body').append($popup);
	      } else {
	        element.after($popup);
	      }
	
	      scope.$on('$destroy', function() {
	        $popup.remove();
	        element.unbind('keydown', keydown);
	        $document.unbind('click', documentClickBind);
	      });
	    }
	  };
	}])
	
	.directive('datepickerPopupWrap', function() {
	  return {
	    restrict:'EA',
	    replace: true,
	    transclude: true,
	    templateUrl: 'template/datepicker/popup.html',
	    link:function (scope, element, attrs) {
	      element.bind('click', function(event) {
	        event.preventDefault();
	        event.stopPropagation();
	      });
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.timepicker', [])
	
	.constant('timepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  showMeridian: true,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true
	})
	
	.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
	
	  this.init = function( ngModelCtrl_, inputs ) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1);
	
	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	    if ( mousewheel ) {
	      this.setupMousewheelEvents( hoursInputEl, minutesInputEl );
	    }
	
	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents( hoursInputEl, minutesInputEl );
	  };
	
	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = parseInt(value, 10);
	    });
	  }
	
	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = parseInt(value, 10);
	    });
	  }
	
	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;
	
	      if ( ngModelCtrl.$error.time ) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
	          selected.setHours( hours );
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    });
	  }
	
	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate ( ) {
	    var hours = parseInt( $scope.hours, 10 );
	    var valid = ( $scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
	    if ( !valid ) {
	      return undefined;
	    }
	
	    if ( $scope.showMeridian ) {
	      if ( hours === 12 ) {
	        hours = 0;
	      }
	      if ( $scope.meridian === meridians[1] ) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }
	
	  function getMinutesFromTemplate() {
	    var minutes = parseInt($scope.minutes, 10);
	    return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
	  }
	
	  function pad( value ) {
	    return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value;
	  }
	
	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function( hoursInputEl, minutesInputEl ) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
	      return (e.detail || delta > 0);
	    };
	
	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours() );
	      e.preventDefault();
	    });
	
	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes() );
	      e.preventDefault();
	    });
	
	  };
	
	  this.setupInputEvents = function( hoursInputEl, minutesInputEl ) {
	    if ( $scope.readonlyInput ) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      return;
	    }
	
	    var invalidate = function(invalidHours, invalidMinutes) {
	      ngModelCtrl.$setViewValue( null );
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	    };
	
	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate();
	
	      if ( angular.isDefined(hours) ) {
	        selected.setHours( hours );
	        refresh( 'h' );
	      } else {
	        invalidate(true);
	      }
	    };
	
	    hoursInputEl.bind('blur', function(e) {
	      if ( !$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply( function() {
	          $scope.hours = pad( $scope.hours );
	        });
	      }
	    });
	
	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate();
	
	      if ( angular.isDefined(minutes) ) {
	        selected.setMinutes( minutes );
	        refresh( 'm' );
	      } else {
	        invalidate(undefined, true);
	      }
	    };
	
	    minutesInputEl.bind('blur', function(e) {
	      if ( !$scope.invalidMinutes && $scope.minutes < 10 ) {
	        $scope.$apply( function() {
	          $scope.minutes = pad( $scope.minutes );
	        });
	      }
	    });
	
	  };
	
	  this.render = function() {
	    var date = ngModelCtrl.$modelValue ? new Date( ngModelCtrl.$modelValue ) : null;
	
	    if ( isNaN(date) ) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if ( date ) {
	        selected = date;
	      }
	      makeValid();
	      updateTemplate();
	    }
	  };
	
	  // Call internally when we know that model is valid.
	  function refresh( keyboardChange ) {
	    makeValid();
	    ngModelCtrl.$setViewValue( new Date(selected) );
	    updateTemplate( keyboardChange );
	  }
	
	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	  }
	
	  function updateTemplate( keyboardChange ) {
	    var hours = selected.getHours(), minutes = selected.getMinutes();
	
	    if ( $scope.showMeridian ) {
	      hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
	    }
	
	    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
	    $scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
	    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	  }
	
	  function addMinutes( minutes ) {
	    var dt = new Date( selected.getTime() + minutes * 60000 );
	    selected.setHours( dt.getHours(), dt.getMinutes() );
	    refresh();
	  }
	
	  $scope.incrementHours = function() {
	    addMinutes( hourStep * 60 );
	  };
	  $scope.decrementHours = function() {
	    addMinutes( - hourStep * 60 );
	  };
	  $scope.incrementMinutes = function() {
	    addMinutes( minuteStep );
	  };
	  $scope.decrementMinutes = function() {
	    addMinutes( - minuteStep );
	  };
	  $scope.toggleMeridian = function() {
	    addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
	  };
	}])
	
	.directive('timepicker', function () {
	  return {
	    restrict: 'EA',
	    require: ['timepicker', '?^ngModel'],
	    controller:'TimepickerController',
	    replace: true,
	    scope: {},
	    templateUrl: 'template/timepicker/timepicker.html',
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if ( ngModelCtrl ) {
	        timepickerCtrl.init( ngModelCtrl, element.find('input') );
	      }
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.dropdown', [])
	
	.constant('dropdownConfig', {
	  openClass: 'open'
	})
	
	.service('dropdownService', ['$document', function($document) {
	  var openScope = null;
	
	  this.open = function( dropdownScope ) {
	    if ( !openScope ) {
	      $document.bind('click', closeDropdown);
	      $document.bind('keydown', escapeKeyBind);
	    }
	
	    if ( openScope && openScope !== dropdownScope ) {
	        openScope.isOpen = false;
	    }
	
	    openScope = dropdownScope;
	  };
	
	  this.close = function( dropdownScope ) {
	    if ( openScope === dropdownScope ) {
	      openScope = null;
	      $document.unbind('click', closeDropdown);
	      $document.unbind('keydown', escapeKeyBind);
	    }
	  };
	
	  var closeDropdown = function( evt ) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }
	
	    var toggleElement = openScope.getToggleElement();
	    if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
	        return;
	    }
	
	    openScope.$apply(function() {
	      openScope.isOpen = false;
	    });
	  };
	
	  var escapeKeyBind = function( evt ) {
	    if ( evt.which === 27 ) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    }
	  };
	}])
	
	.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
	  var self = this,
	      scope = $scope.$new(), // create a child scope so we are not polluting original one
	      openClass = dropdownConfig.openClass,
	      getIsOpen,
	      setIsOpen = angular.noop,
	      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
	
	  this.init = function( element ) {
	    self.$element = element;
	
	    if ( $attrs.isOpen ) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;
	
	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }
	  };
	
	  this.toggle = function( open ) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };
	
	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };
	
	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };
	
	  scope.focusToggleElement = function() {
	    if ( self.toggleElement ) {
	      self.toggleElement[0].focus();
	    }
	  };
	
	  scope.$watch('isOpen', function( isOpen, wasOpen ) {
	    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);
	
	    if ( isOpen ) {
	      scope.focusToggleElement();
	      dropdownService.open( scope );
	    } else {
	      dropdownService.close( scope );
	    }
	
	    setIsOpen($scope, isOpen);
	    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	      toggleInvoker($scope, { open: !!isOpen });
	    }
	  });
	
	  $scope.$on('$locationChangeSuccess', function() {
	    scope.isOpen = false;
	  });
	
	  $scope.$on('$destroy', function() {
	    scope.$destroy();
	  });
	}])
	
	.directive('dropdown', function() {
	  return {
	    controller: 'DropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init( element );
	    }
	  };
	})
	
	.directive('dropdownToggle', function() {
	  return {
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if ( !dropdownCtrl ) {
	        return;
	      }
	
	      dropdownCtrl.toggleElement = element;
	
	      var toggleDropdown = function(event) {
	        event.preventDefault();
	
	        if ( !element.hasClass('disabled') && !attrs.disabled ) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };
	
	      element.bind('click', toggleDropdown);
	
	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
	        element.attr('aria-expanded', !!isOpen);
	      });
	
	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition'])
	
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function () {
	    return {
	      createNew: function () {
	        var stack = [];
	
	        return {
	          add: function (key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function (key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function () {
	            return stack[stack.length - 1];
	          },
	          remove: function (key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function () {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function () {
	            return stack.length;
	          }
	        };
	      }
	    };
	  })
	
	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('modalBackdrop', ['$timeout', function ($timeout) {
	    return {
	      restrict: 'EA',
	      replace: true,
	      templateUrl: 'template/modal/backdrop.html',
	      link: function (scope, element, attrs) {
	        scope.backdropClass = attrs.backdropClass || '';
	
	        scope.animate = false;
	
	        //trigger CSS transitions
	        $timeout(function () {
	          scope.animate = true;
	        });
	      }
	    };
	  }])
	
	  .directive('modalWindow', ['$modalStack', '$timeout', function ($modalStack, $timeout) {
	    return {
	      restrict: 'EA',
	      scope: {
	        index: '@',
	        animate: '='
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'template/modal/window.html';
	      },
	      link: function (scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        scope.size = attrs.size;
	
	        $timeout(function () {
	          // trigger CSS transitions
	          scope.animate = true;
	
	          /**
	           * Auto-focusing of a freshly-opened modal element causes any child elements
	           * with the autofocus attribute to lose focus. This is an issue on touch
	           * based devices which will show and then hide the onscreen keyboard.
	           * Attempts to refocus the autofocus element via JavaScript will not reopen
	           * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	           * the modal element if the modal does not contain an autofocus element.
	           */
	          if (!element[0].querySelectorAll('[autofocus]').length) {
	            element[0].focus();
	          }
	        });
	
	        scope.close = function (evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };
	      }
	    };
	  }])
	
	  .directive('modalTransclude', function () {
	    return {
	      link: function($scope, $element, $attrs, controller, $transclude) {
	        $transclude($scope.$parent, function(clone) {
	          $element.empty();
	          $element.append(clone);
	        });
	      }
	    };
	  })
	
	  .factory('$modalStack', ['$transition', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap',
	    function ($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
	
	      var OPENED_MODAL_CLASS = 'modal-open';
	
	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var $modalStack = {};
	
	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }
	        return topBackdropIndex;
	      }
	
	      $rootScope.$watch(backdropIndex, function(newBackdropIndex){
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });
	
	      function removeModalWindow(modalInstance) {
	
	        var body = $document.find('body').eq(0);
	        var modalWindow = openedWindows.get(modalInstance).value;
	
	        //clean up the stack
	        openedWindows.remove(modalInstance);
	
	        //remove window DOM element
	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, function() {
	          modalWindow.modalScope.$destroy();
	          body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
	          checkRemoveBackdrop();
	        });
	      }
	
	      function checkRemoveBackdrop() {
	          //remove backdrop if no longer needed
	          if (backdropDomEl && backdropIndex() == -1) {
	            var backdropScopeRef = backdropScope;
	            removeAfterAnimate(backdropDomEl, backdropScope, 150, function () {
	              backdropScopeRef.$destroy();
	              backdropScopeRef = null;
	            });
	            backdropDomEl = undefined;
	            backdropScope = undefined;
	          }
	      }
	
	      function removeAfterAnimate(domEl, scope, emulateTime, done) {
	        // Closing animation
	        scope.animate = false;
	
	        var transitionEndEventName = $transition.transitionEndEventName;
	        if (transitionEndEventName) {
	          // transition out
	          var timeout = $timeout(afterAnimating, emulateTime);
	
	          domEl.bind(transitionEndEventName, function () {
	            $timeout.cancel(timeout);
	            afterAnimating();
	            scope.$apply();
	          });
	        } else {
	          // Ensure this call is async
	          $timeout(afterAnimating);
	        }
	
	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;
	
	          domEl.remove();
	          if (done) {
	            done();
	          }
	        }
	      }
	
	      $document.bind('keydown', function (evt) {
	        var modal;
	
	        if (evt.which === 27) {
	          modal = openedWindows.top();
	          if (modal && modal.value.keyboard) {
	            evt.preventDefault();
	            $rootScope.$apply(function () {
	              $modalStack.dismiss(modal.key, 'escape key press');
	            });
	          }
	        }
	      });
	
	      $modalStack.open = function (modalInstance, modal) {
	
	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard
	        });
	
	        var body = $document.find('body').eq(0),
	            currBackdropIndex = backdropIndex();
	
	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.index = currBackdropIndex;
	          var angularBackgroundDomEl = angular.element('<div modal-backdrop></div>');
	          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
	          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
	          body.append(backdropDomEl);
	        }
	
	        var angularDomEl = angular.element('<div modal-window></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'size': modal.size,
	          'index': openedWindows.length() - 1,
	          'animate': 'animate'
	        }).html(modal.content);
	
	        var modalDomEl = $compile(angularDomEl)(modal.scope);
	        openedWindows.top().value.modalDomEl = modalDomEl;
	        body.append(modalDomEl);
	        body.addClass(OPENED_MODAL_CLASS);
	      };
	
	      $modalStack.close = function (modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance);
	        }
	      };
	
	      $modalStack.dismiss = function (modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance);
	        }
	      };
	
	      $modalStack.dismissAll = function (reason) {
	        var topModal = this.getTop();
	        while (topModal) {
	          this.dismiss(topModal.key, reason);
	          topModal = this.getTop();
	        }
	      };
	
	      $modalStack.getTop = function () {
	        return openedWindows.top();
	      };
	
	      return $modalStack;
	    }])
	
	  .provider('$modal', function () {
	
	    var $modalProvider = {
	      options: {
	        backdrop: true, //can be also false or 'static'
	        keyboard: true
	      },
	      $get: ['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', '$modalStack',
	        function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
	
	          var $modal = {};
	
	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $http.get(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl,
	                {cache: $templateCache}).then(function (result) {
	                  return result.data;
	              });
	          }
	
	          function getResolvePromises(resolves) {
	            var promisesArr = [];
	            angular.forEach(resolves, function (value) {
	              if (angular.isFunction(value) || angular.isArray(value)) {
	                promisesArr.push($q.when($injector.invoke(value)));
	              }
	            });
	            return promisesArr;
	          }
	
	          $modal.open = function (modalOptions) {
	
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	
	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              close: function (result) {
	                $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                $modalStack.dismiss(modalInstance, reason);
	              }
	            };
	
	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};
	
	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }
	
	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
	
	
	            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
	
	              var modalScope = (modalOptions.scope || $rootScope).$new();
	              modalScope.$close = modalInstance.close;
	              modalScope.$dismiss = modalInstance.dismiss;
	
	              var ctrlInstance, ctrlLocals = {};
	              var resolveIter = 1;
	
	              //controllers
	              if (modalOptions.controller) {
	                ctrlLocals.$scope = modalScope;
	                ctrlLocals.$modalInstance = modalInstance;
	                angular.forEach(modalOptions.resolve, function (value, key) {
	                  ctrlLocals[key] = tplAndVars[resolveIter++];
	                });
	
	                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
	                if (modalOptions.controllerAs) {
	                  modalScope[modalOptions.controllerAs] = ctrlInstance;
	                }
	              }
	
	              $modalStack.open(modalInstance, {
	                scope: modalScope,
	                deferred: modalResultDeferred,
	                content: tplAndVars[0],
	                backdrop: modalOptions.backdrop,
	                keyboard: modalOptions.keyboard,
	                backdropClass: modalOptions.backdropClass,
	                windowClass: modalOptions.windowClass,
	                windowTemplateUrl: modalOptions.windowTemplateUrl,
	                size: modalOptions.size
	              });
	
	            }, function resolveError(reason) {
	              modalResultDeferred.reject(reason);
	            });
	
	            templateAndResolvePromise.then(function () {
	              modalOpenedDeferred.resolve(true);
	            }, function () {
	              modalOpenedDeferred.reject(false);
	            });
	
	            return modalInstance;
	          };
	
	          return $modal;
	        }]
	    };
	
	    return $modalProvider;
	  });
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.progressbar', [])
	
	.constant('progressConfig', {
	  animate: true,
	  max: 100
	})
	
	.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
	    var self = this,
	        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
	
	    this.bars = [];
	    $scope.max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max;
	
	    this.addBar = function(bar, element) {
	        if ( !animate ) {
	            element.css({'transition': 'none'});
	        }
	
	        this.bars.push(bar);
	
	        bar.$watch('value', function( value ) {
	            bar.percent = +(100 * value / $scope.max).toFixed(2);
	        });
	
	        bar.$on('$destroy', function() {
	            element = null;
	            self.removeBar(bar);
	        });
	    };
	
	    this.removeBar = function(bar) {
	        this.bars.splice(this.bars.indexOf(bar), 1);
	    };
	}])
	
	.directive('progress', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        controller: 'ProgressController',
	        require: 'progress',
	        scope: {},
	        templateUrl: 'template/progressbar/progress.html'
	    };
	})
	
	.directive('bar', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        require: '^progress',
	        scope: {
	            value: '=',
	            type: '@'
	        },
	        templateUrl: 'template/progressbar/bar.html',
	        link: function(scope, element, attrs, progressCtrl) {
	            progressCtrl.addBar(scope, element);
	        }
	    };
	})
	
	.directive('progressbar', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        controller: 'ProgressController',
	        scope: {
	            value: '=',
	            type: '@'
	        },
	        templateUrl: 'template/progressbar/progressbar.html',
	        link: function(scope, element, attrs, progressCtrl) {
	            progressCtrl.addBar(scope, angular.element(element.children()[0]));
	        }
	    };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.rating', [])
	
	.constant('ratingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null
	})
	
	.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl  = { $setViewValue: angular.noop };
	
	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	
	    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) :
	                        new Array( angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max );
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };
	
	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff }, states[i]);
	    }
	    return states;
	  };
	
	  $scope.rate = function(value) {
	    if ( !$scope.readonly && value >= 0 && value <= $scope.range.length ) {
	      ngModelCtrl.$setViewValue(value);
	      ngModelCtrl.$render();
	    }
	  };
	
	  $scope.enter = function(value) {
	    if ( !$scope.readonly ) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };
	
	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };
	
	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate( $scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1) );
	    }
	  };
	
	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	  };
	}])
	
	.directive('rating', function() {
	  return {
	    restrict: 'EA',
	    require: ['rating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'RatingController',
	    templateUrl: 'template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if ( ngModelCtrl ) {
	        ratingCtrl.init( ngModelCtrl );
	      }
	    }
	  };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {
	/**
	 * @ngdoc overview
	 * @name ui.bootstrap.tabs
	 *
	 * @description
	 * AngularJS version of the tabs directive.
	 */
	
	angular.module('ui.bootstrap.tabs', [])
	
	.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
	  var ctrl = this,
	      tabs = ctrl.tabs = $scope.tabs = [];
	
	  ctrl.select = function(selectedTab) {
	    angular.forEach(tabs, function(tab) {
	      if (tab.active && tab !== selectedTab) {
	        tab.active = false;
	        tab.onDeselect();
	      }
	    });
	    selectedTab.active = true;
	    selectedTab.onSelect();
	  };
	
	  ctrl.addTab = function addTab(tab) {
	    tabs.push(tab);
	    // we can't run the select function on the first tab
	    // since that would select it twice
	    if (tabs.length === 1) {
	      tab.active = true;
	    } else if (tab.active) {
	      ctrl.select(tab);
	    }
	  };
	
	  ctrl.removeTab = function removeTab(tab) {
	    var index = tabs.indexOf(tab);
	    //Select a new tab if the tab to be removed is selected and not destroyed
	    if (tab.active && tabs.length > 1 && !destroyed) {
	      //If this is the last tab, select the previous tab. else, the next tab.
	      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
	      ctrl.select(tabs[newActiveIndex]);
	    }
	    tabs.splice(index, 1);
	  };
	
	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });
	}])
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabset
	 * @restrict EA
	 *
	 * @description
	 * Tabset is the outer container for the tabs directive
	 *
	 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
	 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab heading="Tab 1"><b>First</b> Content!</tab>
	      <tab heading="Tab 2"><i>Second</i> Content!</tab>
	    </tabset>
	    <hr />
	    <tabset vertical="true">
	      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
	      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
	    </tabset>
	    <tabset justified="true">
	      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
	      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tabset', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@'
	    },
	    controller: 'TabsetController',
	    templateUrl: 'template/tabs/tabset.html',
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tab
	 * @restrict EA
	 *
	 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
	 * @param {string=} select An expression to evaluate when the tab is selected.
	 * @param {boolean=} active A binding, telling whether or not this tab is selected.
	 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
	 *
	 * @description
	 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <div ng-controller="TabsDemoCtrl">
	      <button class="btn btn-small" ng-click="items[0].active = true">
	        Select item 1, using active binding
	      </button>
	      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
	        Enable/disable item 2, using disabled binding
	      </button>
	      <br />
	      <tabset>
	        <tab heading="Tab 1">First Tab</tab>
	        <tab select="alertMe()">
	          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
	          Second Tab, with alert callback and html heading!
	        </tab>
	        <tab ng-repeat="item in items"
	          heading="{{item.title}}"
	          disabled="item.disabled"
	          active="item.active">
	          {{item.content}}
	        </tab>
	      </tabset>
	    </div>
	  </file>
	  <file name="script.js">
	    function TabsDemoCtrl($scope) {
	      $scope.items = [
	        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
	        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
	      ];
	
	      $scope.alertMe = function() {
	        setTimeout(function() {
	          alert("You've selected the alert tab!");
	        });
	      };
	    };
	  </file>
	</example>
	 */
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabHeading
	 * @restrict EA
	 *
	 * @description
	 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab>
	        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
	        And some content, too!
	      </tab>
	      <tab>
	        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
	        That's right.
	      </tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tab', ['$parse', function($parse) {
	  return {
	    require: '^tabset',
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/tabs/tab.html',
	    transclude: true,
	    scope: {
	      active: '=?',
	      heading: '@',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    compile: function(elm, attrs, transclude) {
	      return function postLink(scope, elm, attrs, tabsetCtrl) {
	        scope.$watch('active', function(active) {
	          if (active) {
	            tabsetCtrl.select(scope);
	          }
	        });
	
	        scope.disabled = false;
	        if ( attrs.disabled ) {
	          scope.$parent.$watch($parse(attrs.disabled), function(value) {
	            scope.disabled = !! value;
	          });
	        }
	
	        scope.select = function() {
	          if ( !scope.disabled ) {
	            scope.active = true;
	          }
	        };
	
	        tabsetCtrl.addTab(scope);
	        scope.$on('$destroy', function() {
	          tabsetCtrl.removeTab(scope);
	        });
	
	        //We need to transclude later, once the content container is ready.
	        //when this link happens, we're inside a tab heading.
	        scope.$transcludeFn = transclude;
	      };
	    }
	  };
	}])
	
	.directive('tabHeadingTransclude', [function() {
	  return {
	    restrict: 'A',
	    require: '^tab',
	    link: function(scope, elm, attrs, tabCtrl) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	}])
	
	.directive('tabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^tabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.tabContentTransclude);
	
	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };
	  function isTabHeading(node) {
	    return node.tagName &&  (
	      node.hasAttribute('tab-heading') ||
	      node.hasAttribute('data-tab-heading') ||
	      node.tagName.toLowerCase() === 'tab-heading' ||
	      node.tagName.toLowerCase() === 'data-tab-heading'
	    );
	  }
	})
	
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.transition', [])
	
	/**
	 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
	 * @param  {DOMElement} element  The DOMElement that will be animated.
	 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
	 *   - As a string, it represents the css class to be added to the element.
	 *   - As an object, it represents a hash of style attributes to be applied to the element.
	 *   - As a function, it represents a function to be called that will cause the transition to occur.
	 * @return {Promise}  A promise that is resolved when the transition finishes.
	 */
	.factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {
	
	  var $transition = function(element, trigger, options) {
	    options = options || {};
	    var deferred = $q.defer();
	    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
	
	    var transitionEndHandler = function(event) {
	      $rootScope.$apply(function() {
	        element.unbind(endEventName, transitionEndHandler);
	        deferred.resolve(element);
	      });
	    };
	
	    if (endEventName) {
	      element.bind(endEventName, transitionEndHandler);
	    }
	
	    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
	    $timeout(function() {
	      if ( angular.isString(trigger) ) {
	        element.addClass(trigger);
	      } else if ( angular.isFunction(trigger) ) {
	        trigger(element);
	      } else if ( angular.isObject(trigger) ) {
	        element.css(trigger);
	      }
	      //If browser does not support transitions, instantly resolve
	      if ( !endEventName ) {
	        deferred.resolve(element);
	      }
	    });
	
	    // Add our custom cancel function to the promise that is returned
	    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
	    // i.e. it will therefore never raise a transitionEnd event for that transition
	    deferred.promise.cancel = function() {
	      if ( endEventName ) {
	        element.unbind(endEventName, transitionEndHandler);
	      }
	      deferred.reject('Transition cancelled');
	    };
	
	    return deferred.promise;
	  };
	
	  // Work out the name of the transitionEnd event
	  var transElement = document.createElement('trans');
	  var transitionEndEventNames = {
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'transition': 'transitionend'
	  };
	  var animationEndEventNames = {
	    'WebkitTransition': 'webkitAnimationEnd',
	    'MozTransition': 'animationend',
	    'OTransition': 'oAnimationEnd',
	    'transition': 'animationend'
	  };
	  function findEndEventName(endEventNames) {
	    for (var name in endEventNames){
	      if (transElement.style[name] !== undefined) {
	        return endEventNames[name];
	      }
	    }
	  }
	  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
	  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
	  return $transition;
	}]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module('ui.bootstrap.position', [])
	
	/**
	 * A set of utility methods that can be use to retrieve position of DOM elements.
	 * It is meant to be used where we need to absolute-position DOM elements in
	 * relation to other, existing elements (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$position', ['$document', '$window', function ($document, $window) {
	
	    function getStyle(el, cssprop) {
	      if (el.currentStyle) { //IE
	        return el.currentStyle[cssprop];
	      } else if ($window.getComputedStyle) {
	        return $window.getComputedStyle(el)[cssprop];
	      }
	      // finally try and get inline style
	      return el.style[cssprop];
	    }
	
	    /**
	     * Checks if a given element is statically positioned
	     * @param element - raw DOM element
	     */
	    function isStaticPositioned(element) {
	      return (getStyle(element, 'position') || 'static' ) === 'static';
	    }
	
	    /**
	     * returns the closest, non-statically positioned parentOffset of a given element
	     * @param element
	     */
	    var parentOffsetEl = function (element) {
	      var docDomEl = $document[0];
	      var offsetParent = element.offsetParent || docDomEl;
	      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docDomEl;
	    };
	
	    return {
	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/
	       */
	      position: function (element) {
	        var elBCR = this.offset(element);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = parentOffsetEl(element[0]);
	        if (offsetParentEl != $document[0]) {
	          offsetParentBCR = this.offset(angular.element(offsetParentEl));
	          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }
	
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: elBCR.top - offsetParentBCR.top,
	          left: elBCR.left - offsetParentBCR.left
	        };
	      },
	
	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/
	       */
	      offset: function (element) {
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	        };
	      },
	
	      /**
	       * Provides coordinates for the targetEl in relation to hostEl
	       */
	      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {
	
	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';
	
	        var hostElPos,
	          targetElWidth,
	          targetElHeight,
	          targetElPos;
	
	        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
	
	        targetElWidth = targetEl.prop('offsetWidth');
	        targetElHeight = targetEl.prop('offsetHeight');
	
	        var shiftWidth = {
	          center: function () {
	            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	          },
	          left: function () {
	            return hostElPos.left;
	          },
	          right: function () {
	            return hostElPos.left + hostElPos.width;
	          }
	        };
	
	        var shiftHeight = {
	          center: function () {
	            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	          },
	          top: function () {
	            return hostElPos.top;
	          },
	          bottom: function () {
	            return hostElPos.top + hostElPos.height;
	          }
	        };
	
	        switch (pos0) {
	          case 'right':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: shiftWidth[pos0]()
	            };
	            break;
	          case 'left':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: hostElPos.left - targetElWidth
	            };
	            break;
	          case 'bottom':
	            targetElPos = {
	              top: shiftHeight[pos0](),
	              left: shiftWidth[pos1]()
	            };
	            break;
	          default:
	            targetElPos = {
	              top: hostElPos.top - targetElHeight,
	              left: shiftWidth[pos1]()
	            };
	            break;
	        }
	
	        return targetElPos;
	      }
	    };
	  }]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	angular.module('mgcrea.ngStrap.helpers.dimensions', [])
	
	  .factory('dimensions', function($document, $window) {
	
	    var jqLite = angular.element;
	    var fn = {};
	
	    /**
	     * Test the element nodeName
	     * @param element
	     * @param name
	     */
	    var nodeName = fn.nodeName = function(element, name) {
	      return element.nodeName && element.nodeName.toLowerCase() === name.toLowerCase();
	    };
	
	    /**
	     * Returns the element computed style
	     * @param element
	     * @param prop
	     * @param extra
	     */
	    fn.css = function(element, prop, extra) {
	      var value;
	      if (element.currentStyle) { //IE
	        value = element.currentStyle[prop];
	      } else if (window.getComputedStyle) {
	        value = window.getComputedStyle(element)[prop];
	      } else {
	        value = element.style[prop];
	      }
	      return extra === true ? parseFloat(value) || 0 : value;
	    };
	
	    /**
	     * Provides read-only equivalent of jQuery's offset function:
	     * @required-by bootstrap-tooltip, bootstrap-affix
	     * @url http://api.jquery.com/offset/
	     * @param element
	     */
	    fn.offset = function(element) {
	      var boxRect = element.getBoundingClientRect();
	      var docElement = element.ownerDocument;
	      return {
	        width: boxRect.width || element.offsetWidth,
	        height: boxRect.height || element.offsetHeight,
	        top: boxRect.top + (window.pageYOffset || docElement.documentElement.scrollTop) - (docElement.documentElement.clientTop || 0),
	        left: boxRect.left + (window.pageXOffset || docElement.documentElement.scrollLeft) - (docElement.documentElement.clientLeft || 0)
	      };
	    };
	
	    /**
	     * Provides read-only equivalent of jQuery's position function
	     * @required-by bootstrap-tooltip, bootstrap-affix
	     * @url http://api.jquery.com/offset/
	     * @param element
	     */
	    fn.position = function(element) {
	
	      var offsetParentRect = {top: 0, left: 0},
	          offsetParentElement,
	          offset;
	
	      // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
	      if (fn.css(element, 'position') === 'fixed') {
	
	        // We assume that getBoundingClientRect is available when computed position is fixed
	        offset = element.getBoundingClientRect();
	
	      } else {
	
	        // Get *real* offsetParentElement
	        offsetParentElement = offsetParent(element);
	
	        // Get correct offsets
	        offset = fn.offset(element);
	        if (!nodeName(offsetParentElement, 'html')) {
	          offsetParentRect = fn.offset(offsetParentElement);
	        }
	
	        // Add offsetParent borders
	        offsetParentRect.top += fn.css(offsetParentElement, 'borderTopWidth', true);
	        offsetParentRect.left += fn.css(offsetParentElement, 'borderLeftWidth', true);
	      }
	
	      // Subtract parent offsets and element margins
	      return {
	        width: element.offsetWidth,
	        height: element.offsetHeight,
	        top: offset.top - offsetParentRect.top - fn.css(element, 'marginTop', true),
	        left: offset.left - offsetParentRect.left - fn.css(element, 'marginLeft', true)
	      };
	
	    };
	
	    /**
	     * Returns the closest, non-statically positioned offsetParent of a given element
	     * @required-by fn.position
	     * @param element
	     */
	    var offsetParent = function offsetParentElement(element) {
	      var docElement = element.ownerDocument;
	      var offsetParent = element.offsetParent || docElement;
	      if(nodeName(offsetParent, '#document')) return docElement.documentElement;
	      while(offsetParent && !nodeName(offsetParent, 'html') && fn.css(offsetParent, 'position') === 'static') {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docElement.documentElement;
	    };
	
	    /**
	     * Provides equivalent of jQuery's height function
	     * @required-by bootstrap-affix
	     * @url http://api.jquery.com/height/
	     * @param element
	     * @param outer
	     */
	    fn.height = function(element, outer) {
	      var value = element.offsetHeight;
	      if(outer) {
	        value += fn.css(element, 'marginTop', true) + fn.css(element, 'marginBottom', true);
	      } else {
	        value -= fn.css(element, 'paddingTop', true) + fn.css(element, 'paddingBottom', true) + fn.css(element, 'borderTopWidth', true) + fn.css(element, 'borderBottomWidth', true);
	      }
	      return value;
	    };
	
	    /**
	     * Provides equivalent of jQuery's width function
	     * @required-by bootstrap-affix
	     * @url http://api.jquery.com/width/
	     * @param element
	     * @param outer
	     */
	    fn.width = function(element, outer) {
	      var value = element.offsetWidth;
	      if(outer) {
	        value += fn.css(element, 'marginLeft', true) + fn.css(element, 'marginRight', true);
	      } else {
	        value -= fn.css(element, 'paddingLeft', true) + fn.css(element, 'paddingRight', true) + fn.css(element, 'borderLeftWidth', true) + fn.css(element, 'borderRightWidth', true);
	      }
	      return value;
	    };
	
	    return fn;
	
	  });
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	angular.module('mgcrea.ngStrap.popover', ['mgcrea.ngStrap.tooltip'])
	
	  .provider('$popover', function() {
	
	    var defaults = this.defaults = {
	      animation: 'am-fade',
	      customClass: '',
	      container: false,
	      target: false,
	      placement: 'right',
	      template: 'popover/popover.tpl.html',
	      contentTemplate: false,
	      trigger: 'click',
	      keyboard: true,
	      html: false,
	      title: '',
	      content: '',
	      delay: 0,
	      autoClose: false
	    };
	
	    this.$get = function($tooltip) {
	
	      function PopoverFactory(element, config) {
	
	        // Common vars
	        var options = angular.extend({}, defaults, config);
	
	        var $popover = $tooltip(element, options);
	
	        // Support scope as string options [/*title, */content]
	        if(options.content) {
	          $popover.$scope.content = options.content;
	        }
	
	        return $popover;
	
	      }
	
	      return PopoverFactory;
	
	    };
	
	  })
	
	  .directive('bsPopover', function($window, $sce, $popover) {
	
	    var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
	
	    return {
	      restrict: 'EAC',
	      scope: true,
	      link: function postLink(scope, element, attr) {
	
	        // Directive options
	        var options = {scope: scope};
	        angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'customClass', 'autoClose'], function(key) {
	          if(angular.isDefined(attr[key])) options[key] = attr[key];
	        });
	
	        // Support scope as data-attrs
	        angular.forEach(['title', 'content'], function(key) {
	          attr[key] && attr.$observe(key, function(newValue, oldValue) {
	            scope[key] = $sce.trustAsHtml(newValue);
	            angular.isDefined(oldValue) && requestAnimationFrame(function() {
	              popover && popover.$applyPlacement();
	            });
	          });
	        });
	
	        // Support scope as an object
	        attr.bsPopover && scope.$watch(attr.bsPopover, function(newValue, oldValue) {
	          if(angular.isObject(newValue)) {
	            angular.extend(scope, newValue);
	          } else {
	            scope.content = newValue;
	          }
	          angular.isDefined(oldValue) && requestAnimationFrame(function() {
	            popover && popover.$applyPlacement();
	          });
	        }, true);
	
	        // Visibility binding support
	        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
	          if(!popover || !angular.isDefined(newValue)) return;
	          if(angular.isString(newValue)) newValue = !!newValue.match(/true|,?(popover),?/i);
	          newValue === true ? popover.show() : popover.hide();
	        });
	
	        // Initialize popover
	        var popover = $popover(element, options);
	
	        // Garbage collection
	        scope.$on('$destroy', function() {
	          if (popover) popover.destroy();
	          options = null;
	          popover = null;
	        });
	
	      }
	    };
	
	  });
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	angular.module('mgcrea.ngStrap.tooltip', ['mgcrea.ngStrap.helpers.dimensions'])
	
	  .provider('$tooltip', function() {
	
	    var defaults = this.defaults = {
	      animation: 'am-fade',
	      customClass: '',
	      prefixClass: 'tooltip',
	      prefixEvent: 'tooltip',
	      container: false,
	      target: false,
	      placement: 'top',
	      template: 'tooltip/tooltip.tpl.html',
	      contentTemplate: false,
	      trigger: 'hover focus',
	      keyboard: false,
	      html: false,
	      show: false,
	      title: '',
	      type: '',
	      delay: 0,
	      autoClose: false,
	      bsEnabled: true
	    };
	
	    this.$get = function($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $sce, dimensions, $$rAF, $timeout) {
	
	      var trim = String.prototype.trim;
	      var isTouch = 'createTouch' in $window.document;
	      var htmlReplaceRegExp = /ng-bind="/ig;
	      var $body = angular.element($window.document);
	
	      function TooltipFactory(element, config) {
	
	        var $tooltip = {};
	
	        // Common vars
	        var nodeName = element[0].nodeName.toLowerCase();
	        var options = $tooltip.$options = angular.extend({}, defaults, config);
	        $tooltip.$promise = fetchTemplate(options.template);
	        var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();
	        if(options.delay && angular.isString(options.delay)) {
	          var split = options.delay.split(',').map(parseFloat);
	          options.delay = split.length > 1 ? {show: split[0], hide: split[1]} : split[0];
	        }
	
	        // Support scope as string options
	        if(options.title) {
	          scope.title = $sce.trustAsHtml(options.title);
	        }
	
	        // Provide scope helpers
	        scope.$setEnabled = function(isEnabled) {
	          scope.$$postDigest(function() {
	            $tooltip.setEnabled(isEnabled);
	          });
	        };
	        scope.$hide = function() {
	          scope.$$postDigest(function() {
	            $tooltip.hide();
	          });
	        };
	        scope.$show = function() {
	          scope.$$postDigest(function() {
	            $tooltip.show();
	          });
	        };
	        scope.$toggle = function() {
	          scope.$$postDigest(function() {
	            $tooltip.toggle();
	          });
	        };
	        $tooltip.$isShown = scope.$isShown = false;
	
	        // Private vars
	        var timeout, hoverState;
	
	        // Support contentTemplate option
	        if(options.contentTemplate) {
	          $tooltip.$promise = $tooltip.$promise.then(function(template) {
	            var templateEl = angular.element(template);
	            return fetchTemplate(options.contentTemplate)
	            .then(function(contentTemplate) {
	              var contentEl = findElement('[ng-bind="content"]', templateEl[0]);
	              if(!contentEl.length) contentEl = findElement('[ng-bind="title"]', templateEl[0]);
	              contentEl.removeAttr('ng-bind').html(contentTemplate);
	              return templateEl[0].outerHTML;
	            });
	          });
	        }
	
	        // Fetch, compile then initialize tooltip
	        var tipLinker, tipElement, tipTemplate, tipContainer, tipScope;
	        $tooltip.$promise.then(function(template) {
	          if(angular.isObject(template)) template = template.data;
	          if(options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
	          template = trim.apply(template);
	          tipTemplate = template;
	          tipLinker = $compile(template);
	          $tooltip.init();
	        });
	
	        $tooltip.init = function() {
	
	          // Options: delay
	          if (options.delay && angular.isNumber(options.delay)) {
	            options.delay = {
	              show: options.delay,
	              hide: options.delay
	            };
	          }
	
	          // Replace trigger on touch devices ?
	          // if(isTouch && options.trigger === defaults.trigger) {
	          //   options.trigger.replace(/hover/g, 'click');
	          // }
	
	          // Options : container
	          if(options.container === 'self') {
	            tipContainer = element;
	          } else if(angular.isElement(options.container)) {
	            tipContainer = options.container;
	          } else if(options.container) {
	            tipContainer = findElement(options.container);
	          }
	
	          // Options: trigger
	          bindTriggerEvents();
	
	          // Options: target
	          if(options.target) {
	            options.target = angular.isElement(options.target) ? options.target : findElement(options.target);
	          }
	
	          // Options: show
	          if(options.show) {
	            scope.$$postDigest(function() {
	              options.trigger === 'focus' ? element[0].focus() : $tooltip.show();
	            });
	          }
	
	        };
	
	        $tooltip.destroy = function() {
	
	          // Unbind events
	          unbindTriggerEvents();
	
	          // Remove element
	          destroyTipElement();
	
	          // Destroy scope
	          scope.$destroy();
	
	        };
	
	        $tooltip.enter = function() {
	
	          clearTimeout(timeout);
	          hoverState = 'in';
	          if (!options.delay || !options.delay.show) {
	            return $tooltip.show();
	          }
	
	          timeout = setTimeout(function() {
	            if (hoverState ==='in') $tooltip.show();
	          }, options.delay.show);
	
	        };
	
	        $tooltip.show = function() {
	          if (!options.bsEnabled) return;
	
	          scope.$emit(options.prefixEvent + '.show.before', $tooltip);
	          var parent, after;
	          if (options.container) {
	            parent = tipContainer;
	            if (tipContainer[0].lastChild) {
	              after = angular.element(tipContainer[0].lastChild);
	            } else {
	              after = null;
	            }
	          } else {
	            parent = null;
	            after = element;
	          }
	
	
	          // Hide any existing tipElement
	          if(tipElement) destroyTipElement();
	          // Fetch a cloned element linked from template
	          tipScope = $tooltip.$scope.$new();
	          tipElement = $tooltip.$element = tipLinker(tipScope, function(clonedElement, scope) {});
	
	          // Set the initial positioning.  Make the tooltip invisible
	          // so IE doesn't try to focus on it off screen.
	          tipElement.css({top: '-9999px', left: '-9999px', display: 'block', visibility: 'hidden'}).addClass(options.placement);
	
	          // Options: animation
	          if(options.animation) tipElement.addClass(options.animation);
	          // Options: type
	          if(options.type) tipElement.addClass(options.prefixClass + '-' + options.type);
	          // Options: custom classes
	          if(options.customClass) tipElement.addClass(options.customClass);
	
	          // Support v1.3+ $animate
	          // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
	          var promise = $animate.enter(tipElement, parent, after, enterAnimateCallback);
	          if(promise && promise.then) promise.then(enterAnimateCallback);
	
	          $tooltip.$isShown = scope.$isShown = true;
	          safeDigest(scope);
	          $$rAF(function () {
	            $tooltip.$applyPlacement();
	
	            // Once placed, make the tooltip visible
	            if(tipElement) tipElement.css({visibility: 'visible'});
	          }); // var a = bodyEl.offsetWidth + 1; ?
	
	          // Bind events
	          if(options.keyboard) {
	            if(options.trigger !== 'focus') {
	              $tooltip.focus();
	            }
	            bindKeyboardEvents();
	          }
	
	          if(options.autoClose) {
	            bindAutoCloseEvents();
	          }
	
	        };
	
	        function enterAnimateCallback() {
	          scope.$emit(options.prefixEvent + '.show', $tooltip);
	        }
	
	        $tooltip.leave = function() {
	
	          clearTimeout(timeout);
	          hoverState = 'out';
	          if (!options.delay || !options.delay.hide) {
	            return $tooltip.hide();
	          }
	          timeout = setTimeout(function () {
	            if (hoverState === 'out') {
	              $tooltip.hide();
	            }
	          }, options.delay.hide);
	
	        };
	
	        var _blur;
	        $tooltip.hide = function(blur) {
	
	          if(!$tooltip.$isShown) return;
	          scope.$emit(options.prefixEvent + '.hide.before', $tooltip);
	
	          // store blur value for leaveAnimateCallback to use
	          _blur = blur;
	
	          // Support v1.3+ $animate
	          // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
	          var promise = $animate.leave(tipElement, leaveAnimateCallback);
	          if(promise && promise.then) promise.then(leaveAnimateCallback);
	
	          $tooltip.$isShown = scope.$isShown = false;
	          safeDigest(scope);
	
	          // Unbind events
	          if(options.keyboard && tipElement !== null) {
	            unbindKeyboardEvents();
	          }
	
	          if(options.autoClose && tipElement !== null) {
	            unbindAutoCloseEvents();
	          }
	        };
	
	        function leaveAnimateCallback() {
	          scope.$emit(options.prefixEvent + '.hide', $tooltip);
	          // Allow to blur the input when hidden, like when pressing enter key
	          if(_blur && options.trigger === 'focus') {
	            return element[0].blur();
	          }
	
	          // clean up child scopes
	          destroyTipElement();
	        }
	
	        $tooltip.toggle = function() {
	          $tooltip.$isShown ? $tooltip.leave() : $tooltip.enter();
	        };
	
	        $tooltip.focus = function() {
	          tipElement[0].focus();
	        };
	
	        $tooltip.setEnabled = function(isEnabled) {
	          options.bsEnabled = isEnabled;
	        };
	
	        // Protected methods
	
	        $tooltip.$applyPlacement = function() {
	          if(!tipElement) return;
	
	          // Get the position of the tooltip element.
	          var elementPosition = getPosition();
	
	          // Get the height and width of the tooltip so we can center it.
	          var tipWidth = tipElement.prop('offsetWidth'),
	              tipHeight = tipElement.prop('offsetHeight');
	
	          // Get the tooltip's top and left coordinates to center it with this directive.
	          var tipPosition = getCalculatedOffset(options.placement, elementPosition, tipWidth, tipHeight);
	
	          // Now set the calculated positioning.
	          tipPosition.top += 'px';
	          tipPosition.left += 'px';
	          tipElement.css(tipPosition);
	
	        };
	
	        $tooltip.$onKeyUp = function(evt) {
	          if (evt.which === 27 && $tooltip.$isShown) {
	            $tooltip.hide();
	            evt.stopPropagation();
	          }
	        };
	
	        $tooltip.$onFocusKeyUp = function(evt) {
	          if (evt.which === 27) {
	            element[0].blur();
	            evt.stopPropagation();
	          }
	        };
	
	        $tooltip.$onFocusElementMouseDown = function(evt) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          // Some browsers do not auto-focus buttons (eg. Safari)
	          $tooltip.$isShown ? element[0].blur() : element[0].focus();
	        };
	
	        // bind/unbind events
	        function bindTriggerEvents() {
	          var triggers = options.trigger.split(' ');
	          angular.forEach(triggers, function(trigger) {
	            if(trigger === 'click') {
	              element.on('click', $tooltip.toggle);
	            } else if(trigger !== 'manual') {
	              element.on(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
	              element.on(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
	              nodeName === 'button' && trigger !== 'hover' && element.on(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
	            }
	          });
	        }
	
	        function unbindTriggerEvents() {
	          var triggers = options.trigger.split(' ');
	          for (var i = triggers.length; i--;) {
	            var trigger = triggers[i];
	            if(trigger === 'click') {
	              element.off('click', $tooltip.toggle);
	            } else if(trigger !== 'manual') {
	              element.off(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
	              element.off(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
	              nodeName === 'button' && trigger !== 'hover' && element.off(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
	            }
	          }
	        }
	
	        function bindKeyboardEvents() {
	          if(options.trigger !== 'focus') {
	            tipElement.on('keyup', $tooltip.$onKeyUp);
	          } else {
	            element.on('keyup', $tooltip.$onFocusKeyUp);
	          }
	        }
	
	        function unbindKeyboardEvents() {
	          if(options.trigger !== 'focus') {
	            tipElement.off('keyup', $tooltip.$onKeyUp);
	          } else {
	            element.off('keyup', $tooltip.$onFocusKeyUp);
	          }
	        }
	
	        var _autoCloseEventsBinded = false;
	        function bindAutoCloseEvents() {
	          // use timeout to hookup the events to prevent
	          // event bubbling from being processed imediately.
	          $timeout(function() {
	            // Stop propagation when clicking inside tooltip
	            tipElement.on('click', stopEventPropagation);
	
	            // Hide when clicking outside tooltip
	            $body.on('click', $tooltip.hide);
	
	            _autoCloseEventsBinded = true;
	          }, 0, false);
	        }
	
	        function unbindAutoCloseEvents() {
	          if (_autoCloseEventsBinded) {
	            tipElement.off('click', stopEventPropagation);
	            $body.off('click', $tooltip.hide);
	            _autoCloseEventsBinded = false;
	          }
	        }
	
	        function stopEventPropagation(event) {
	          event.stopPropagation();
	        }
	
	        // Private methods
	
	        function getPosition() {
	          if(options.container === 'body') {
	            return dimensions.offset(options.target[0] || element[0]);
	          } else {
	            return dimensions.position(options.target[0] || element[0]);
	          }
	        }
	
	        function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
	          var offset;
	          var split = placement.split('-');
	
	          switch (split[0]) {
	          case 'right':
	            offset = {
	              top: position.top + position.height / 2 - actualHeight / 2,
	              left: position.left + position.width
	            };
	            break;
	          case 'bottom':
	            offset = {
	              top: position.top + position.height,
	              left: position.left + position.width / 2 - actualWidth / 2
	            };
	            break;
	          case 'left':
	            offset = {
	              top: position.top + position.height / 2 - actualHeight / 2,
	              left: position.left - actualWidth
	            };
	            break;
	          default:
	            offset = {
	              top: position.top - actualHeight,
	              left: position.left + position.width / 2 - actualWidth / 2
	            };
	            break;
	          }
	
	          if(!split[1]) {
	            return offset;
	          }
	
	          // Add support for corners @todo css
	          if(split[0] === 'top' || split[0] === 'bottom') {
	            switch (split[1]) {
	            case 'left':
	              offset.left = position.left;
	              break;
	            case 'right':
	              offset.left =  position.left + position.width - actualWidth;
	            }
	          } else if(split[0] === 'left' || split[0] === 'right') {
	            switch (split[1]) {
	            case 'top':
	              offset.top = position.top - actualHeight;
	              break;
	            case 'bottom':
	              offset.top = position.top + position.height;
	            }
	          }
	
	          return offset;
	        }
	
	        function destroyTipElement() {
	          // Cancel pending callbacks
	          clearTimeout(timeout);
	
	          if($tooltip.$isShown && tipElement !== null) {
	            if(options.autoClose) {
	              unbindAutoCloseEvents();
	            }
	
	            if(options.keyboard) {
	              unbindKeyboardEvents();
	            }
	          }
	
	          if(tipScope) {
	            tipScope.$destroy();
	            tipScope = null;
	          }
	
	          if(tipElement) {
	            tipElement.remove();
	            tipElement = $tooltip.$element = null;
	          }
	        }
	
	        return $tooltip;
	
	      }
	
	      // Helper functions
	
	      function safeDigest(scope) {
	        scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
	      }
	
	      function findElement(query, element) {
	        return angular.element((element || document).querySelectorAll(query));
	      }
	
	      var fetchPromises = {};
	      function fetchTemplate(template) {
	        if(fetchPromises[template]) return fetchPromises[template];
	        return (fetchPromises[template] = $q.when($templateCache.get(template) || $http.get(template))
	        .then(function(res) {
	          if(angular.isObject(res)) {
	            $templateCache.put(template, res.data);
	            return res.data;
	          }
	          return res;
	        }));
	      }
	
	      return TooltipFactory;
	
	    };
	
	  })
	
	  .directive('bsTooltip', function($window, $location, $sce, $tooltip, $$rAF) {
	
	    return {
	      restrict: 'EAC',
	      scope: true,
	      link: function postLink(scope, element, attr, transclusion) {
	
	        // Directive options
	        var options = {scope: scope};
	        angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'type', 'customClass'], function(key) {
	          if(angular.isDefined(attr[key])) options[key] = attr[key];
	        });
	
	        // overwrite inherited title value when no value specified
	        // fix for angular 1.3.1 531a8de72c439d8ddd064874bf364c00cedabb11
	        if (!scope.hasOwnProperty('title')){
	          scope.title = '';
	        }
	
	        // Observe scope attributes for change
	        attr.$observe('title', function(newValue) {
	          if (angular.isDefined(newValue) || !scope.hasOwnProperty('title')) {
	            var oldValue = scope.title;
	            scope.title = $sce.trustAsHtml(newValue);
	            angular.isDefined(oldValue) && $$rAF(function() {
	              tooltip && tooltip.$applyPlacement();
	            });
	          }
	        });
	
	        // Support scope as an object
	        attr.bsTooltip && scope.$watch(attr.bsTooltip, function(newValue, oldValue) {
	          if(angular.isObject(newValue)) {
	            angular.extend(scope, newValue);
	          } else {
	            scope.title = newValue;
	          }
	          angular.isDefined(oldValue) && $$rAF(function() {
	            tooltip && tooltip.$applyPlacement();
	          });
	        }, true);
	
	        // Visibility binding support
	        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
	          if(!tooltip || !angular.isDefined(newValue)) return;
	          if(angular.isString(newValue)) newValue = !!newValue.match(/true|,?(tooltip),?/i);
	          newValue === true ? tooltip.show() : tooltip.hide();
	        });
	
	        // Enabled binding support
	        attr.bsEnabled && scope.$watch(attr.bsEnabled, function(newValue, oldValue) {
	          // console.warn('scope.$watch(%s)', attr.bsEnabled, newValue, oldValue);
	          if(!tooltip || !angular.isDefined(newValue)) return;
	          if(angular.isString(newValue)) newValue = !!newValue.match(/true|1|,?(tooltip),?/i);
	          newValue === false ? tooltip.setEnabled(false) : tooltip.setEnabled(true);
	        });
	
	        // Initialize popover
	        var tooltip = $tooltip(element, options);
	
	        // Garbage collection
	        scope.$on('$destroy', function() {
	          if(tooltip) tooltip.destroy();
	          options = null;
	          tooltip = null;
	        });
	
	      }
	    };
	
	  });
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular;

/***/ }
/******/ ])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjIyOThhNmE0MjIxYTk3ODQxNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91aS10ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9hbGVydC9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9idXR0b25zL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvY29sbGFwc2UvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZGF0ZXBhcnNlci9kYXRlcGFyc2VyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZHJvcGRvd24vZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvcmF0aW5nL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy90YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zdHJhcC9zcmMvaGVscGVycy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zdHJhcC9zcmMvcG9wb3Zlci9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zdHJhcC9zcmMvdG9vbHRpcC90b29sdGlwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7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O0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsRUFBQzs7Ozs7Ozs7QUM5bkJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXFCLDhCQUE4QjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBRzs7Ozs7Ozs7QUNwSkg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWCxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBLElBQUc7Ozs7Ozs7O0FDeEdIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDREQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QywrQkFBK0I7QUFDN0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFlBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVzs7QUFFWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBZ0c7O0FBRWhHO0FBQ0E7QUFDQSwyQkFBMEIsd0VBQXdFOztBQUVsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsc0JBQXNCO0FBQ2pFLFlBQVcsRUFBRSxtQ0FBbUM7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVzs7QUFFWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXVDLEtBQUs7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBOztBQUVBOztBQUVBLElBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQSxJQUFHOzs7Ozs7OztBQ3JtQkgsMEIiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiMjI5OGE2YTQyMjFhOTc4NDE2MVxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCdhcmkudWkuY29yZScsIFtcbid1aS5ib290c3RyYXAuYWNjb3JkaW9uJyxcbid1aS5ib290c3RyYXAuYWxlcnQnLFxuJ3VpLmJvb3RzdHJhcC5idXR0b25zJyxcbid1aS5ib290c3RyYXAuY29sbGFwc2UnLFxuJ3VpLmJvb3RzdHJhcC5kYXRlcGFyc2VyJyxcbid1aS5ib290c3RyYXAuZGF0ZXBpY2tlcicsXG4ndWkuYm9vdHN0cmFwLnRpbWVwaWNrZXInLFxuJ3VpLmJvb3RzdHJhcC5kcm9wZG93bicsXG4ndWkuYm9vdHN0cmFwLm1vZGFsJyxcbid1aS5ib290c3RyYXAucHJvZ3Jlc3NiYXInLFxuJ3VpLmJvb3RzdHJhcC5yYXRpbmcnLFxuJ3VpLmJvb3RzdHJhcC50YWJzJyxcbid1aS5ib290c3RyYXAudHJhbnNpdGlvbicsXG4ndWkuYm9vdHN0cmFwLnBvc2l0aW9uJyxcbidtZ2NyZWEubmdTdHJhcC5oZWxwZXJzLmRpbWVuc2lvbnMnLFxuJ21nY3JlYS5uZ1N0cmFwLnBvcG92ZXInLFxuJ21nY3JlYS5uZ1N0cmFwLnRvb2x0aXAnLFxuJ2FyaS51aS5jb3JlLnVpLWJvb3RzdHJhcC10ZW1wbGF0ZXMnLFxuJ2FyaS51aS5jb3JlLm5nLXN0cmFwLXRlbXBsYXRlcydcbl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZShcImFyaS51aS5jb3JlLnVpLWJvb3RzdHJhcC10ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG4gICAgPGg0IGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxuICAgICAgPGEgaHJlZiBjbGFzcz1cXFwiYWNjb3JkaW9uLXRvZ2dsZVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU9wZW4oKVxcXCIgYWNjb3JkaW9uLXRyYW5zY2x1ZGU9XFxcImhlYWRpbmdcXFwiPjxzcGFuIG5nLWNsYXNzPVxcXCJ7XFwndGV4dC1tdXRlZFxcJzogaXNEaXNhYmxlZH1cXFwiPnt7aGVhZGluZ319PC9zcGFuPjwvYT5cXG4gICAgPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwicGFuZWwtY29sbGFwc2VcXFwiIGNvbGxhcHNlPVxcXCIhaXNPcGVuXFxcIj5cXG5cdCAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicGFuZWwtZ3JvdXBcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiYWxlcnRcXFwiIG5nLWNsYXNzPVxcXCJbXFwnYWxlcnQtXFwnICsgKHR5cGUgfHwgXFwnd2FybmluZ1xcJyksIGNsb3NlYWJsZSA/IFxcJ2FsZXJ0LWRpc21pc3NhYmxlXFwnIDogbnVsbF1cXFwiIHJvbGU9XFxcImFsZXJ0XFxcIj5cXG4gICAgPGJ1dHRvbiBuZy1zaG93PVxcXCJjbG9zZWFibGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+XFxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxkaXYgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbFwiLFwiPGRpdiBuZy1zd2l0Y2g9XFxcImRhdGVwaWNrZXJNb2RlXFxcIiByb2xlPVxcXCJhcHBsaWNhdGlvblxcXCIgbmcta2V5ZG93bj1cXFwia2V5ZG93bigkZXZlbnQpXFxcIj5cXG4gIDxkYXlwaWNrZXIgbmctc3dpdGNoLXdoZW49XFxcImRheVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvZGF5cGlja2VyPlxcbiAgPG1vbnRocGlja2VyIG5nLXN3aXRjaC13aGVuPVxcXCJtb250aFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvbW9udGhwaWNrZXI+XFxuICA8eWVhcnBpY2tlciBuZy1zd2l0Y2gtd2hlbj1cXFwieWVhclxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwveWVhcnBpY2tlcj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RheS5odG1sXCIsXCI8dGFibGUgcm9sZT1cXFwiZ3JpZFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cXFwie3thY3RpdmVEYXRlSWR9fVxcXCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoLTEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoIGNvbHNwYW49XFxcInt7NSArIHNob3dXZWVrc319XFxcIj48YnV0dG9uIGlkPVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIHJvbGU9XFxcImhlYWRpbmdcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1vZGUoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKDEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgICA8dHI+XFxuICAgICAgPHRoIG5nLXNob3c9XFxcInNob3dXZWVrc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48L3RoPlxcbiAgICAgIDx0aCBuZy1yZXBlYXQ9XFxcImxhYmVsIGluIGxhYmVscyB0cmFjayBieSAkaW5kZXhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PHNtYWxsIGFyaWEtbGFiZWw9XFxcInt7bGFiZWwuZnVsbH19XFxcIj57e2xhYmVsLmFiYnJ9fTwvc21hbGw+PC90aD5cXG4gICAgPC90cj5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XFxcInJvdyBpbiByb3dzIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxuICAgICAgPHRkIG5nLXNob3c9XFxcInNob3dXZWVrc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyIGg2XFxcIj48ZW0+e3sgd2Vla051bWJlcnNbJGluZGV4XSB9fTwvZW0+PC90ZD5cXG4gICAgICA8dGQgbmctcmVwZWF0PVxcXCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiByb2xlPVxcXCJncmlkY2VsbFxcXCIgaWQ9XFxcInt7ZHQudWlkfX1cXFwiIGFyaWEtZGlzYWJsZWQ9XFxcInt7ISFkdC5kaXNhYmxlZH19XFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2J0bi1pbmZvXFwnOiBkdC5zZWxlY3RlZCwgYWN0aXZlOiBpc0FjdGl2ZShkdCl9XFxcIiBuZy1jbGljaz1cXFwic2VsZWN0KGR0LmRhdGUpXFxcIiBuZy1kaXNhYmxlZD1cXFwiZHQuZGlzYWJsZWRcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PHNwYW4gbmctY2xhc3M9XFxcIntcXCd0ZXh0LW11dGVkXFwnOiBkdC5zZWNvbmRhcnksIFxcJ3RleHQtaW5mb1xcJzogZHQuY3VycmVudH1cXFwiPnt7ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLFwiPHRhYmxlIHJvbGU9XFxcImdyaWRcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwie3t1bmlxdWVJZH19LXRpdGxlXFxcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XFxcInt7YWN0aXZlRGF0ZUlkfX1cXFwiPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKC0xKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIGlkPVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIHJvbGU9XFxcImhlYWRpbmdcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1vZGUoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKDEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgPC90aGVhZD5cXG4gIDx0Ym9keT5cXG4gICAgPHRyIG5nLXJlcGVhdD1cXFwicm93IGluIHJvd3MgdHJhY2sgYnkgJGluZGV4XFxcIj5cXG4gICAgICA8dGQgbmctcmVwZWF0PVxcXCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiByb2xlPVxcXCJncmlkY2VsbFxcXCIgaWQ9XFxcInt7ZHQudWlkfX1cXFwiIGFyaWEtZGlzYWJsZWQ9XFxcInt7ISFkdC5kaXNhYmxlZH19XFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnYnRuLWluZm9cXCc6IGR0LnNlbGVjdGVkLCBhY3RpdmU6IGlzQWN0aXZlKGR0KX1cXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QoZHQuZGF0ZSlcXFwiIG5nLWRpc2FibGVkPVxcXCJkdC5kaXNhYmxlZFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBuZy1jbGFzcz1cXFwie1xcJ3RleHQtaW5mb1xcJzogZHQuY3VycmVudH1cXFwiPnt7ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbFwiLFwiPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZy1zdHlsZT1cXFwie2Rpc3BsYXk6IChpc09wZW4gJiYgXFwnYmxvY2tcXCcpIHx8IFxcJ25vbmVcXCcsIHRvcDogcG9zaXRpb24udG9wK1xcJ3B4XFwnLCBsZWZ0OiBwb3NpdGlvbi5sZWZ0K1xcJ3B4XFwnfVxcXCIgbmcta2V5ZG93bj1cXFwia2V5ZG93bigkZXZlbnQpXFxcIj5cXG5cdDxsaSBuZy10cmFuc2NsdWRlPjwvbGk+XFxuXHQ8bGkgbmctaWY9XFxcInNob3dCdXR0b25CYXJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjEwcHggOXB4IDJweFxcXCI+XFxuXHRcdDxzcGFuIGNsYXNzPVxcXCJidG4tZ3JvdXAgcHVsbC1sZWZ0XFxcIj5cXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWluZm9cXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QoXFwndG9kYXlcXCcpXFxcIj57eyBnZXRUZXh0KFxcJ2N1cnJlbnRcXCcpIH19PC9idXR0b24+XFxuXHRcdFx0PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QobnVsbClcXFwiPnt7IGdldFRleHQoXFwnY2xlYXJcXCcpIH19PC9idXR0b24+XFxuXHRcdDwvc3Bhbj5cXG5cdFx0PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj57eyBnZXRUZXh0KFxcJ2Nsb3NlXFwnKSB9fTwvYnV0dG9uPlxcblx0PC9saT5cXG48L3VsPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIsXCI8dGFibGUgcm9sZT1cXFwiZ3JpZFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cXFwie3thY3RpdmVEYXRlSWR9fVxcXCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoLTEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoIGNvbHNwYW49XFxcIjNcXFwiPjxidXR0b24gaWQ9XFxcInt7dW5pcXVlSWR9fS10aXRsZVxcXCIgcm9sZT1cXFwiaGVhZGluZ1xcXCIgYXJpYS1saXZlPVxcXCJhc3NlcnRpdmVcXFwiIGFyaWEtYXRvbWljPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlTW9kZSgpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO1xcXCI+PHN0cm9uZz57e3RpdGxlfX08L3N0cm9uZz48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoMSlcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgIDwvdHI+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVxcXCJyb3cgaW4gcm93cyB0cmFjayBieSAkaW5kZXhcXFwiPlxcbiAgICAgIDx0ZCBuZy1yZXBlYXQ9XFxcImR0IGluIHJvdyB0cmFjayBieSBkdC5kYXRlXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHJvbGU9XFxcImdyaWRjZWxsXFxcIiBpZD1cXFwie3tkdC51aWR9fVxcXCIgYXJpYS1kaXNhYmxlZD1cXFwie3shIWR0LmRpc2FibGVkfX1cXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xhc3M9XFxcIntcXCdidG4taW5mb1xcJzogZHQuc2VsZWN0ZWQsIGFjdGl2ZTogaXNBY3RpdmUoZHQpfVxcXCIgbmctY2xpY2s9XFxcInNlbGVjdChkdC5kYXRlKVxcXCIgbmctZGlzYWJsZWQ9XFxcImR0LmRpc2FibGVkXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxzcGFuIG5nLWNsYXNzPVxcXCJ7XFwndGV4dC1pbmZvXFwnOiBkdC5jdXJyZW50fVxcXCI+e3tkdC5sYWJlbH19PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIixcIjx0YWJsZT5cXG5cdDx0Ym9keT5cXG5cdFx0PHRyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJpbmNyZW1lbnRIb3VycygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJpbmNyZW1lbnRNaW51dGVzKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcXFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cXFwic2hvd01lcmlkaWFuXFxcIj48L3RkPlxcblx0XHQ8L3RyPlxcblx0XHQ8dHI+XFxuXHRcdFx0PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MHB4O1xcXCIgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnaGFzLWVycm9yXFwnOiBpbnZhbGlkSG91cnN9XFxcIj5cXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuZy1tb2RlbD1cXFwiaG91cnNcXFwiIG5nLWNoYW5nZT1cXFwidXBkYXRlSG91cnMoKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclxcXCIgbmctbW91c2V3aGVlbD1cXFwiaW5jcmVtZW50SG91cnMoKVxcXCIgbmctcmVhZG9ubHk9XFxcInJlYWRvbmx5SW5wdXRcXFwiIG1heGxlbmd0aD1cXFwiMlxcXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQ+OjwvdGQ+XFxuXHRcdFx0PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MHB4O1xcXCIgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnaGFzLWVycm9yXFwnOiBpbnZhbGlkTWludXRlc31cXFwiPlxcblx0XHRcdFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5nLW1vZGVsPVxcXCJtaW51dGVzXFxcIiBuZy1jaGFuZ2U9XFxcInVwZGF0ZU1pbnV0ZXMoKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclxcXCIgbmctcmVhZG9ubHk9XFxcInJlYWRvbmx5SW5wdXRcXFwiIG1heGxlbmd0aD1cXFwiMlxcXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cXFwic2hvd01lcmlkaWFuXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCB0ZXh0LWNlbnRlclxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1lcmlkaWFuKClcXFwiPnt7bWVyaWRpYW59fTwvYnV0dG9uPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHRcdDx0ciBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcblx0XHRcdDx0ZD48YSBuZy1jbGljaz1cXFwiZGVjcmVtZW50SG91cnMoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJkZWNyZW1lbnRNaW51dGVzKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blxcXCI+PC9zcGFuPjwvYT48L3RkPlxcblx0XHRcdDx0ZCBuZy1zaG93PVxcXCJzaG93TWVyaWRpYW5cXFwiPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHQ8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYmFja2Ryb3AgZmFkZSB7eyBiYWNrZHJvcENsYXNzIH19XFxcIlxcbiAgICAgbmctY2xhc3M9XFxcIntpbjogYW5pbWF0ZX1cXFwiXFxuICAgICBuZy1zdHlsZT1cXFwie1xcJ3otaW5kZXhcXCc6IDEwNDAgKyAoaW5kZXggJiYgMSB8fCAwKSArIGluZGV4KjEwfVxcXCJcXG4+PC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvbW9kYWwvd2luZG93Lmh0bWxcIixcIjxkaXYgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBuZy1jbGFzcz1cXFwie2luOiBhbmltYXRlfVxcXCIgbmctc3R5bGU9XFxcIntcXCd6LWluZGV4XFwnOiAxMDUwICsgaW5kZXgqMTAsIGRpc3BsYXk6IFxcJ2Jsb2NrXFwnfVxcXCIgbmctY2xpY2s9XFxcImNsb3NlKCRldmVudClcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnbW9kYWwtc21cXCc6IHNpemUgPT0gXFwnc21cXCcsIFxcJ21vZGFsLWxnXFwnOiBzaXplID09IFxcJ2xnXFwnfVxcXCI+PGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCIgbW9kYWwtdHJhbnNjbHVkZT48L2Rpdj48L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyXFxcIiBuZy1jbGFzcz1cXFwidHlwZSAmJiBcXCdwcm9ncmVzcy1iYXItXFwnICsgdHlwZVxcXCIgcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiIGFyaWEtdmFsdWVub3c9XFxcInt7dmFsdWV9fVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3ttYXh9fVxcXCIgbmctc3R5bGU9XFxcInt3aWR0aDogcGVyY2VudCArIFxcJyVcXCd9XFxcIiBhcmlhLXZhbHVldGV4dD1cXFwie3twZXJjZW50IHwgbnVtYmVyOjB9fSVcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3MuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyXFxcIiBuZy1jbGFzcz1cXFwidHlwZSAmJiBcXCdwcm9ncmVzcy1iYXItXFwnICsgdHlwZVxcXCIgcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiIGFyaWEtdmFsdWVub3c9XFxcInt7dmFsdWV9fVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3ttYXh9fVxcXCIgbmctc3R5bGU9XFxcInt3aWR0aDogcGVyY2VudCArIFxcJyVcXCd9XFxcIiBhcmlhLXZhbHVldGV4dD1cXFwie3twZXJjZW50IHwgbnVtYmVyOjB9fSVcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIsXCI8c3BhbiBuZy1tb3VzZWxlYXZlPVxcXCJyZXNldCgpXFxcIiBuZy1rZXlkb3duPVxcXCJvbktleWRvd24oJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIHJvbGU9XFxcInNsaWRlclxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3tyYW5nZS5sZW5ndGh9fVxcXCIgYXJpYS12YWx1ZW5vdz1cXFwie3t2YWx1ZX19XFxcIj5cXG4gICAgPGkgbmctcmVwZWF0PVxcXCJyIGluIHJhbmdlIHRyYWNrIGJ5ICRpbmRleFxcXCIgbmctbW91c2VlbnRlcj1cXFwiZW50ZXIoJGluZGV4ICsgMSlcXFwiIG5nLWNsaWNrPVxcXCJyYXRlKCRpbmRleCArIDEpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uXFxcIiBuZy1jbGFzcz1cXFwiJGluZGV4IDwgdmFsdWUgJiYgKHIuc3RhdGVPbiB8fCBcXCdnbHlwaGljb24tc3RhclxcJykgfHwgKHIuc3RhdGVPZmYgfHwgXFwnZ2x5cGhpY29uLXN0YXItZW1wdHlcXCcpXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj4oe3sgJGluZGV4IDwgdmFsdWUgPyBcXCcqXFwnIDogXFwnIFxcJyB9fSk8L3NwYW4+XFxuICAgIDwvaT5cXG48L3NwYW4+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvdGFicy90YWIuaHRtbFwiLFwiPGxpIG5nLWNsYXNzPVxcXCJ7YWN0aXZlOiBhY3RpdmUsIGRpc2FibGVkOiBkaXNhYmxlZH1cXFwiPlxcbiAgPGEgaHJlZiBuZy1jbGljaz1cXFwic2VsZWN0KClcXFwiIHRhYi1oZWFkaW5nLXRyYW5zY2x1ZGU+e3toZWFkaW5nfX08L2E+XFxuPC9saT5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sXCIsXCI8ZGl2PlxcbiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXt7dHlwZSB8fCBcXCd0YWJzXFwnfX1cXFwiIG5nLWNsYXNzPVxcXCJ7XFwnbmF2LXN0YWNrZWRcXCc6IHZlcnRpY2FsLCBcXCduYXYtanVzdGlmaWVkXFwnOiBqdXN0aWZpZWR9XFxcIiBuZy10cmFuc2NsdWRlPjwvdWw+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0YWItY29udGVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYi1wYW5lXFxcIiBcXG4gICAgICAgICBuZy1yZXBlYXQ9XFxcInRhYiBpbiB0YWJzXFxcIiBcXG4gICAgICAgICBuZy1jbGFzcz1cXFwie2FjdGl2ZTogdGFiLmFjdGl2ZX1cXFwiXFxuICAgICAgICAgdGFiLWNvbnRlbnQtdHJhbnNjbHVkZT1cXFwidGFiXFxcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIik7fV0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdWktdGVtcGxhdGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5hY2NvcmRpb24nLCBbJ3VpLmJvb3RzdHJhcC5jb2xsYXBzZSddKVxuXG4uY29uc3RhbnQoJ2FjY29yZGlvbkNvbmZpZycsIHtcbiAgY2xvc2VPdGhlcnM6IHRydWVcbn0pXG5cbi5jb250cm9sbGVyKCdBY2NvcmRpb25Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJ2FjY29yZGlvbkNvbmZpZycsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgYWNjb3JkaW9uQ29uZmlnKSB7XG5cbiAgLy8gVGhpcyBhcnJheSBrZWVwcyB0cmFjayBvZiB0aGUgYWNjb3JkaW9uIGdyb3Vwc1xuICB0aGlzLmdyb3VwcyA9IFtdO1xuXG4gIC8vIEVuc3VyZSB0aGF0IGFsbCB0aGUgZ3JvdXBzIGluIHRoaXMgYWNjb3JkaW9uIGFyZSBjbG9zZWQsIHVubGVzcyBjbG9zZS1vdGhlcnMgZXhwbGljaXRseSBzYXlzIG5vdCB0b1xuICB0aGlzLmNsb3NlT3RoZXJzID0gZnVuY3Rpb24ob3Blbkdyb3VwKSB7XG4gICAgdmFyIGNsb3NlT3RoZXJzID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmNsb3NlT3RoZXJzKSA/ICRzY29wZS4kZXZhbCgkYXR0cnMuY2xvc2VPdGhlcnMpIDogYWNjb3JkaW9uQ29uZmlnLmNsb3NlT3RoZXJzO1xuICAgIGlmICggY2xvc2VPdGhlcnMgKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5ncm91cHMsIGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICBpZiAoIGdyb3VwICE9PSBvcGVuR3JvdXAgKSB7XG4gICAgICAgICAgZ3JvdXAuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhY2NvcmRpb24tZ3JvdXAgZGlyZWN0aXZlIHRvIGFkZCBpdHNlbGYgdG8gdGhlIGFjY29yZGlvblxuICB0aGlzLmFkZEdyb3VwID0gZnVuY3Rpb24oZ3JvdXBTY29wZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwU2NvcGUpO1xuXG4gICAgZ3JvdXBTY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGF0LnJlbW92ZUdyb3VwKGdyb3VwU2NvcGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFjY29yZGlvbi1ncm91cCBkaXJlY3RpdmUgd2hlbiB0byByZW1vdmUgaXRzZWxmXG4gIHRoaXMucmVtb3ZlR3JvdXAgPSBmdW5jdGlvbihncm91cCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuICAgIGlmICggaW5kZXggIT09IC0xICkge1xuICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbn1dKVxuXG4vLyBUaGUgYWNjb3JkaW9uIGRpcmVjdGl2ZSBzaW1wbHkgc2V0cyB1cCB0aGUgZGlyZWN0aXZlIGNvbnRyb2xsZXJcbi8vIGFuZCBhZGRzIGFuIGFjY29yZGlvbiBDU1MgY2xhc3MgdG8gaXRzZWxmIGVsZW1lbnQuXG4uZGlyZWN0aXZlKCdhY2NvcmRpb24nLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6J0VBJyxcbiAgICBjb250cm9sbGVyOidBY2NvcmRpb25Db250cm9sbGVyJyxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi5odG1sJ1xuICB9O1xufSlcblxuLy8gVGhlIGFjY29yZGlvbi1ncm91cCBkaXJlY3RpdmUgaW5kaWNhdGVzIGEgYmxvY2sgb2YgaHRtbCB0aGF0IHdpbGwgZXhwYW5kIGFuZCBjb2xsYXBzZSBpbiBhbiBhY2NvcmRpb25cbi5kaXJlY3RpdmUoJ2FjY29yZGlvbkdyb3VwJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTonXmFjY29yZGlvbicsICAgICAgICAgLy8gV2UgbmVlZCB0aGlzIGRpcmVjdGl2ZSB0byBiZSBpbnNpZGUgYW4gYWNjb3JkaW9uXG4gICAgcmVzdHJpY3Q6J0VBJyxcbiAgICB0cmFuc2NsdWRlOnRydWUsICAgICAgICAgICAgICAvLyBJdCB0cmFuc2NsdWRlcyB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdGl2ZSBpbnRvIHRoZSB0ZW1wbGF0ZVxuICAgIHJlcGxhY2U6IHRydWUsICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGRpcmVjdGl2ZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIHRlbXBsYXRlXG4gICAgdGVtcGxhdGVVcmw6J3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAJywgICAgICAgICAgICAgICAvLyBJbnRlcnBvbGF0ZSB0aGUgaGVhZGluZyBhdHRyaWJ1dGUgb250byB0aGlzIHNjb3BlXG4gICAgICBpc09wZW46ICc9PycsXG4gICAgICBpc0Rpc2FibGVkOiAnPT8nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0SGVhZGluZyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gZWxlbWVudDtcbiAgICAgIH07XG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGFjY29yZGlvbkN0cmwpIHtcbiAgICAgIGFjY29yZGlvbkN0cmwuYWRkR3JvdXAoc2NvcGUpO1xuXG4gICAgICBzY29wZS4kd2F0Y2goJ2lzT3BlbicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgYWNjb3JkaW9uQ3RybC5jbG9zZU90aGVycyhzY29wZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzY29wZS50b2dnbGVPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggIXNjb3BlLmlzRGlzYWJsZWQgKSB7XG4gICAgICAgICAgc2NvcGUuaXNPcGVuID0gIXNjb3BlLmlzT3BlbjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59KVxuXG4vLyBVc2UgYWNjb3JkaW9uLWhlYWRpbmcgYmVsb3cgYW4gYWNjb3JkaW9uLWdyb3VwIHRvIHByb3ZpZGUgYSBoZWFkaW5nIGNvbnRhaW5pbmcgSFRNTFxuLy8gPGFjY29yZGlvbi1ncm91cD5cbi8vICAgPGFjY29yZGlvbi1oZWFkaW5nPkhlYWRpbmcgY29udGFpbmluZyBIVE1MIC0gPGltZyBzcmM9XCIuLi5cIj48L2FjY29yZGlvbi1oZWFkaW5nPlxuLy8gPC9hY2NvcmRpb24tZ3JvdXA+XG4uZGlyZWN0aXZlKCdhY2NvcmRpb25IZWFkaW5nJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSwgICAvLyBHcmFiIHRoZSBjb250ZW50cyB0byBiZSB1c2VkIGFzIHRoZSBoZWFkaW5nXG4gICAgdGVtcGxhdGU6ICcnLCAgICAgICAvLyBJbiBlZmZlY3QgcmVtb3ZlIHRoaXMgZWxlbWVudCFcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHJlcXVpcmU6ICdeYWNjb3JkaW9uR3JvdXAnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyLCBhY2NvcmRpb25Hcm91cEN0cmwsIHRyYW5zY2x1ZGUpIHtcbiAgICAgIC8vIFBhc3MgdGhlIGhlYWRpbmcgdG8gdGhlIGFjY29yZGlvbi1ncm91cCBjb250cm9sbGVyXG4gICAgICAvLyBzbyB0aGF0IGl0IGNhbiBiZSB0cmFuc2NsdWRlZCBpbnRvIHRoZSByaWdodCBwbGFjZSBpbiB0aGUgdGVtcGxhdGVcbiAgICAgIC8vIFtUaGUgc2Vjb25kIHBhcmFtZXRlciB0byB0cmFuc2NsdWRlIGNhdXNlcyB0aGUgZWxlbWVudHMgdG8gYmUgY2xvbmVkIHNvIHRoYXQgdGhleSB3b3JrIGluIG5nLXJlcGVhdF1cbiAgICAgIGFjY29yZGlvbkdyb3VwQ3RybC5zZXRIZWFkaW5nKHRyYW5zY2x1ZGUoc2NvcGUsIGZ1bmN0aW9uKCkge30pKTtcbiAgICB9XG4gIH07XG59KVxuXG4vLyBVc2UgaW4gdGhlIGFjY29yZGlvbi1ncm91cCB0ZW1wbGF0ZSB0byBpbmRpY2F0ZSB3aGVyZSB5b3Ugd2FudCB0aGUgaGVhZGluZyB0byBiZSB0cmFuc2NsdWRlZFxuLy8gWW91IG11c3QgcHJvdmlkZSB0aGUgcHJvcGVydHkgb24gdGhlIGFjY29yZGlvbi1ncm91cCBjb250cm9sbGVyIHRoYXQgd2lsbCBob2xkIHRoZSB0cmFuc2NsdWRlZCBlbGVtZW50XG4vLyA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWdyb3VwXCI+XG4vLyAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGluZ1wiID48YSAuLi4gYWNjb3JkaW9uLXRyYW5zY2x1ZGU9XCJoZWFkaW5nXCI+Li4uPC9hPjwvZGl2PlxuLy8gICAuLi5cbi8vIDwvZGl2PlxuLmRpcmVjdGl2ZSgnYWNjb3JkaW9uVHJhbnNjbHVkZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6ICdeYWNjb3JkaW9uR3JvdXAnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyLCBjb250cm9sbGVyKSB7XG4gICAgICBzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBjb250cm9sbGVyW2F0dHIuYWNjb3JkaW9uVHJhbnNjbHVkZV07IH0sIGZ1bmN0aW9uKGhlYWRpbmcpIHtcbiAgICAgICAgaWYgKCBoZWFkaW5nICkge1xuICAgICAgICAgIGVsZW1lbnQuaHRtbCgnJyk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoaGVhZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2FjY29yZGlvbi9hY2NvcmRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmFsZXJ0JywgW10pXG5cbi5jb250cm9sbGVyKCdBbGVydENvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMpIHtcbiAgJHNjb3BlLmNsb3NlYWJsZSA9ICdjbG9zZScgaW4gJGF0dHJzO1xuICB0aGlzLmNsb3NlID0gJHNjb3BlLmNsb3NlO1xufV0pXG5cbi5kaXJlY3RpdmUoJ2FsZXJ0JywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OidFQScsXG4gICAgY29udHJvbGxlcjonQWxlcnRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDondGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbCcsXG4gICAgdHJhbnNjbHVkZTp0cnVlLFxuICAgIHJlcGxhY2U6dHJ1ZSxcbiAgICBzY29wZToge1xuICAgICAgdHlwZTogJ0AnLFxuICAgICAgY2xvc2U6ICcmJ1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ2Rpc21pc3NPblRpbWVvdXQnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24oJHRpbWVvdXQpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiAnYWxlcnQnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgYWxlcnRDdHJsKSB7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBhbGVydEN0cmwuY2xvc2UoKTtcbiAgICAgIH0sIHBhcnNlSW50KGF0dHJzLmRpc21pc3NPblRpbWVvdXQsIDEwKSk7XG4gICAgfVxuICB9O1xufV0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2FsZXJ0L2FsZXJ0LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5idXR0b25zJywgW10pXG5cbi5jb25zdGFudCgnYnV0dG9uQ29uZmlnJywge1xuICBhY3RpdmVDbGFzczogJ2FjdGl2ZScsXG4gIHRvZ2dsZUV2ZW50OiAnY2xpY2snXG59KVxuXG4uY29udHJvbGxlcignQnV0dG9uc0NvbnRyb2xsZXInLCBbJ2J1dHRvbkNvbmZpZycsIGZ1bmN0aW9uKGJ1dHRvbkNvbmZpZykge1xuICB0aGlzLmFjdGl2ZUNsYXNzID0gYnV0dG9uQ29uZmlnLmFjdGl2ZUNsYXNzIHx8ICdhY3RpdmUnO1xuICB0aGlzLnRvZ2dsZUV2ZW50ID0gYnV0dG9uQ29uZmlnLnRvZ2dsZUV2ZW50IHx8ICdjbGljayc7XG59XSlcblxuLmRpcmVjdGl2ZSgnYnRuUmFkaW8nLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogWydidG5SYWRpbycsICduZ01vZGVsJ10sXG4gICAgY29udHJvbGxlcjogJ0J1dHRvbnNDb250cm9sbGVyJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIGJ1dHRvbnNDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG5cbiAgICAgIC8vbW9kZWwgLT4gVUlcbiAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoYnV0dG9uc0N0cmwuYWN0aXZlQ2xhc3MsIGFuZ3VsYXIuZXF1YWxzKG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlLCBzY29wZS4kZXZhbChhdHRycy5idG5SYWRpbykpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vdWktPm1vZGVsXG4gICAgICBlbGVtZW50LmJpbmQoYnV0dG9uc0N0cmwudG9nZ2xlRXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQWN0aXZlID0gZWxlbWVudC5oYXNDbGFzcyhidXR0b25zQ3RybC5hY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgaWYgKCFpc0FjdGl2ZSB8fCBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy51bmNoZWNrYWJsZSkpIHtcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZShpc0FjdGl2ZSA/IG51bGwgOiBzY29wZS4kZXZhbChhdHRycy5idG5SYWRpbykpO1xuICAgICAgICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCdidG5DaGVja2JveCcsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiBbJ2J0bkNoZWNrYm94JywgJ25nTW9kZWwnXSxcbiAgICBjb250cm9sbGVyOiAnQnV0dG9uc0NvbnRyb2xsZXInLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICB2YXIgYnV0dG9uc0N0cmwgPSBjdHJsc1swXSwgbmdNb2RlbEN0cmwgPSBjdHJsc1sxXTtcblxuICAgICAgZnVuY3Rpb24gZ2V0VHJ1ZVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShhdHRycy5idG5DaGVja2JveFRydWUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRGYWxzZVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShhdHRycy5idG5DaGVja2JveEZhbHNlLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldENoZWNrYm94VmFsdWUoYXR0cmlidXRlVmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgdmFsID0gc2NvcGUuJGV2YWwoYXR0cmlidXRlVmFsdWUpO1xuICAgICAgICByZXR1cm4gYW5ndWxhci5pc0RlZmluZWQodmFsKSA/IHZhbCA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgLy9tb2RlbCAtPiBVSVxuICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhidXR0b25zQ3RybC5hY3RpdmVDbGFzcywgYW5ndWxhci5lcXVhbHMobmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUsIGdldFRydWVWYWx1ZSgpKSk7XG4gICAgICB9O1xuXG4gICAgICAvL3VpLT5tb2RlbFxuICAgICAgZWxlbWVudC5iaW5kKGJ1dHRvbnNDdHJsLnRvZ2dsZUV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZShlbGVtZW50Lmhhc0NsYXNzKGJ1dHRvbnNDdHJsLmFjdGl2ZUNsYXNzKSA/IGdldEZhbHNlVmFsdWUoKSA6IGdldFRydWVWYWx1ZSgpKTtcbiAgICAgICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvYnV0dG9ucy9idXR0b25zLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5jb2xsYXBzZScsIFsndWkuYm9vdHN0cmFwLnRyYW5zaXRpb24nXSlcblxuICAuZGlyZWN0aXZlKCdjb2xsYXBzZScsIFsnJHRyYW5zaXRpb24nLCBmdW5jdGlvbiAoJHRyYW5zaXRpb24pIHtcblxuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgdmFyIGluaXRpYWxBbmltU2tpcCA9IHRydWU7XG4gICAgICAgIHZhciBjdXJyZW50VHJhbnNpdGlvbjtcblxuICAgICAgICBmdW5jdGlvbiBkb1RyYW5zaXRpb24oY2hhbmdlKSB7XG4gICAgICAgICAgdmFyIG5ld1RyYW5zaXRpb24gPSAkdHJhbnNpdGlvbihlbGVtZW50LCBjaGFuZ2UpO1xuICAgICAgICAgIGlmIChjdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uY2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uID0gbmV3VHJhbnNpdGlvbjtcbiAgICAgICAgICBuZXdUcmFuc2l0aW9uLnRoZW4obmV3VHJhbnNpdGlvbkRvbmUsIG5ld1RyYW5zaXRpb25Eb25lKTtcbiAgICAgICAgICByZXR1cm4gbmV3VHJhbnNpdGlvbjtcblxuICAgICAgICAgIGZ1bmN0aW9uIG5ld1RyYW5zaXRpb25Eb25lKCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGl0J3MgdGhpcyB0cmFuc2l0aW9uLCBvdGhlcndpc2UsIGxlYXZlIGl0IGFsb25lLlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUcmFuc2l0aW9uID09PSBuZXdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4cGFuZCgpIHtcbiAgICAgICAgICBpZiAoaW5pdGlhbEFuaW1Ta2lwKSB7XG4gICAgICAgICAgICBpbml0aWFsQW5pbVNraXAgPSBmYWxzZTtcbiAgICAgICAgICAgIGV4cGFuZERvbmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKS5hZGRDbGFzcygnY29sbGFwc2luZycpO1xuICAgICAgICAgICAgZG9UcmFuc2l0aW9uKHsgaGVpZ2h0OiBlbGVtZW50WzBdLnNjcm9sbEhlaWdodCArICdweCcgfSkudGhlbihleHBhbmREb25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHBhbmREb25lKCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKTtcbiAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdjb2xsYXBzZSBpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY3NzKHtoZWlnaHQ6ICdhdXRvJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29sbGFwc2UoKSB7XG4gICAgICAgICAgaWYgKGluaXRpYWxBbmltU2tpcCkge1xuICAgICAgICAgICAgaW5pdGlhbEFuaW1Ta2lwID0gZmFsc2U7XG4gICAgICAgICAgICBjb2xsYXBzZURvbmUoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtoZWlnaHQ6IDB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zIGRvbid0IHdvcmsgd2l0aCBoZWlnaHQ6IGF1dG8sIHNvIHdlIGhhdmUgdG8gbWFudWFsbHkgY2hhbmdlIHRoZSBoZWlnaHQgdG8gYSBzcGVjaWZpYyB2YWx1ZVxuICAgICAgICAgICAgZWxlbWVudC5jc3MoeyBoZWlnaHQ6IGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JyB9KTtcbiAgICAgICAgICAgIC8vdHJpZ2dlciByZWZsb3cgc28gYSBicm93c2VyIHJlYWxpemVzIHRoYXQgaGVpZ2h0IHdhcyB1cGRhdGVkIGZyb20gYXV0byB0byBhIHNwZWNpZmljIHZhbHVlXG4gICAgICAgICAgICB2YXIgeCA9IGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlIGluJykuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKTtcblxuICAgICAgICAgICAgZG9UcmFuc2l0aW9uKHsgaGVpZ2h0OiAwIH0pLnRoZW4oY29sbGFwc2VEb25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb2xsYXBzZURvbmUoKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpO1xuICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuY29sbGFwc2UsIGZ1bmN0aW9uIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgY29sbGFwc2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvY29sbGFwc2UvY29sbGFwc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmRhdGVwYXJzZXInLCBbXSlcblxuLnNlcnZpY2UoJ2RhdGVQYXJzZXInLCBbJyRsb2NhbGUnLCAnb3JkZXJCeUZpbHRlcicsIGZ1bmN0aW9uKCRsb2NhbGUsIG9yZGVyQnlGaWx0ZXIpIHtcblxuICB0aGlzLnBhcnNlcnMgPSB7fTtcblxuICB2YXIgZm9ybWF0Q29kZVRvUmVnZXggPSB7XG4gICAgJ3l5eXknOiB7XG4gICAgICByZWdleDogJ1xcXFxkezR9JyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLnllYXIgPSArdmFsdWU7IH1cbiAgICB9LFxuICAgICd5eSc6IHtcbiAgICAgIHJlZ2V4OiAnXFxcXGR7Mn0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMueWVhciA9ICt2YWx1ZSArIDIwMDA7IH1cbiAgICB9LFxuICAgICd5Jzoge1xuICAgICAgcmVnZXg6ICdcXFxcZHsxLDR9JyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLnllYXIgPSArdmFsdWU7IH1cbiAgICB9LFxuICAgICdNTU1NJzoge1xuICAgICAgcmVnZXg6ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5NT05USC5qb2luKCd8JyksXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5tb250aCA9ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5NT05USC5pbmRleE9mKHZhbHVlKTsgfVxuICAgIH0sXG4gICAgJ01NTSc6IHtcbiAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlRNT05USC5qb2luKCd8JyksXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5tb250aCA9ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5TSE9SVE1PTlRILmluZGV4T2YodmFsdWUpOyB9XG4gICAgfSxcbiAgICAnTU0nOiB7XG4gICAgICByZWdleDogJzBbMS05XXwxWzAtMl0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSB2YWx1ZSAtIDE7IH1cbiAgICB9LFxuICAgICdNJzoge1xuICAgICAgcmVnZXg6ICdbMS05XXwxWzAtMl0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSB2YWx1ZSAtIDE7IH1cbiAgICB9LFxuICAgICdkZCc6IHtcbiAgICAgIHJlZ2V4OiAnWzAtMl1bMC05XXsxfXwzWzAtMV17MX0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuZGF0ZSA9ICt2YWx1ZTsgfVxuICAgIH0sXG4gICAgJ2QnOiB7XG4gICAgICByZWdleDogJ1sxLTJdP1swLTldezF9fDNbMC0xXXsxfScsXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5kYXRlID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAnRUVFRSc6IHtcbiAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuREFZLmpvaW4oJ3wnKVxuICAgIH0sXG4gICAgJ0VFRSc6IHtcbiAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlREQVkuam9pbignfCcpXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihmb3JtYXQpIHtcbiAgICB2YXIgbWFwID0gW10sIHJlZ2V4ID0gZm9ybWF0LnNwbGl0KCcnKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChmb3JtYXRDb2RlVG9SZWdleCwgZnVuY3Rpb24oZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGluZGV4ID0gZm9ybWF0LmluZGV4T2YoY29kZSk7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5zcGxpdCgnJyk7XG5cbiAgICAgICAgcmVnZXhbaW5kZXhdID0gJygnICsgZGF0YS5yZWdleCArICcpJztcbiAgICAgICAgZm9ybWF0W2luZGV4XSA9ICckJzsgLy8gQ3VzdG9tIHN5bWJvbCB0byBkZWZpbmUgY29uc3VtZWQgcGFydCBvZiBmb3JtYXRcbiAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMSwgbiA9IGluZGV4ICsgY29kZS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICByZWdleFtpXSA9ICcnO1xuICAgICAgICAgIGZvcm1hdFtpXSA9ICckJztcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQuam9pbignJyk7XG5cbiAgICAgICAgbWFwLnB1c2goeyBpbmRleDogaW5kZXgsIGFwcGx5OiBkYXRhLmFwcGx5IH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKCdeJyArIHJlZ2V4LmpvaW4oJycpICsgJyQnKSxcbiAgICAgIG1hcDogb3JkZXJCeUZpbHRlcihtYXAsICdpbmRleCcpXG4gICAgfTtcbiAgfVxuXG4gIHRoaXMucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgZm9ybWF0KSB7XG4gICAgaWYgKCAhYW5ndWxhci5pc1N0cmluZyhpbnB1dCkgfHwgIWZvcm1hdCApIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFNbZm9ybWF0XSB8fCBmb3JtYXQ7XG5cbiAgICBpZiAoICF0aGlzLnBhcnNlcnNbZm9ybWF0XSApIHtcbiAgICAgIHRoaXMucGFyc2Vyc1tmb3JtYXRdID0gY3JlYXRlUGFyc2VyKGZvcm1hdCk7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlciA9IHRoaXMucGFyc2Vyc1tmb3JtYXRdLFxuICAgICAgICByZWdleCA9IHBhcnNlci5yZWdleCxcbiAgICAgICAgbWFwID0gcGFyc2VyLm1hcCxcbiAgICAgICAgcmVzdWx0cyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmICggcmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCApIHtcbiAgICAgIHZhciBmaWVsZHMgPSB7IHllYXI6IDE5MDAsIG1vbnRoOiAwLCBkYXRlOiAxLCBob3VyczogMCB9LCBkdDtcblxuICAgICAgZm9yKCB2YXIgaSA9IDEsIG4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IG47IGkrKyApIHtcbiAgICAgICAgdmFyIG1hcHBlciA9IG1hcFtpLTFdO1xuICAgICAgICBpZiAoIG1hcHBlci5hcHBseSApIHtcbiAgICAgICAgICBtYXBwZXIuYXBwbHkuY2FsbChmaWVsZHMsIHJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICggaXNWYWxpZChmaWVsZHMueWVhciwgZmllbGRzLm1vbnRoLCBmaWVsZHMuZGF0ZSkgKSB7XG4gICAgICAgIGR0ID0gbmV3IERhdGUoIGZpZWxkcy55ZWFyLCBmaWVsZHMubW9udGgsIGZpZWxkcy5kYXRlLCBmaWVsZHMuaG91cnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHQ7XG4gICAgfVxuICB9O1xuXG4gIC8vIENoZWNrIGlmIGRhdGUgaXMgdmFsaWQgZm9yIHNwZWNpZmljIG1vbnRoIChhbmQgeWVhciBmb3IgRmVicnVhcnkpLlxuICAvLyBNb250aDogMCA9IEphbiwgMSA9IEZlYiwgZXRjXG4gIGZ1bmN0aW9uIGlzVmFsaWQoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgICBpZiAoIG1vbnRoID09PSAxICYmIGRhdGUgPiAyOCkge1xuICAgICAgICByZXR1cm4gZGF0ZSA9PT0gMjkgJiYgKCh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoIG1vbnRoID09PSAzIHx8IG1vbnRoID09PSA1IHx8IG1vbnRoID09PSA4IHx8IG1vbnRoID09PSAxMCkge1xuICAgICAgICByZXR1cm4gZGF0ZSA8IDMxO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZGF0ZXBhcnNlci9kYXRlcGFyc2VyLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5kYXRlcGlja2VyJywgWyd1aS5ib290c3RyYXAuZGF0ZXBhcnNlcicsICd1aS5ib290c3RyYXAucG9zaXRpb24nXSlcblxuLmNvbnN0YW50KCdkYXRlcGlja2VyQ29uZmlnJywge1xuICBmb3JtYXREYXk6ICdkZCcsXG4gIGZvcm1hdE1vbnRoOiAnTU1NTScsXG4gIGZvcm1hdFllYXI6ICd5eXl5JyxcbiAgZm9ybWF0RGF5SGVhZGVyOiAnRUVFJyxcbiAgZm9ybWF0RGF5VGl0bGU6ICdNTU1NIHl5eXknLFxuICBmb3JtYXRNb250aFRpdGxlOiAneXl5eScsXG4gIGRhdGVwaWNrZXJNb2RlOiAnZGF5JyxcbiAgbWluTW9kZTogJ2RheScsXG4gIG1heE1vZGU6ICd5ZWFyJyxcbiAgc2hvd1dlZWtzOiB0cnVlLFxuICBzdGFydGluZ0RheTogMCxcbiAgeWVhclJhbmdlOiAyMCxcbiAgbWluRGF0ZTogbnVsbCxcbiAgbWF4RGF0ZTogbnVsbFxufSlcblxuLmNvbnRyb2xsZXIoJ0RhdGVwaWNrZXJDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRwYXJzZScsICckaW50ZXJwb2xhdGUnLCAnJHRpbWVvdXQnLCAnJGxvZycsICdkYXRlRmlsdGVyJywgJ2RhdGVwaWNrZXJDb25maWcnLCBmdW5jdGlvbigkc2NvcGUsICRhdHRycywgJHBhcnNlLCAkaW50ZXJwb2xhdGUsICR0aW1lb3V0LCAkbG9nLCBkYXRlRmlsdGVyLCBkYXRlcGlja2VyQ29uZmlnKSB7XG4gIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIG5nTW9kZWxDdHJsID0geyAkc2V0Vmlld1ZhbHVlOiBhbmd1bGFyLm5vb3AgfTsgLy8gbnVsbE1vZGVsQ3RybDtcblxuICAvLyBNb2RlcyBjaGFpblxuICB0aGlzLm1vZGVzID0gWydkYXknLCAnbW9udGgnLCAneWVhciddO1xuXG4gIC8vIENvbmZpZ3VyYXRpb24gYXR0cmlidXRlc1xuICBhbmd1bGFyLmZvckVhY2goWydmb3JtYXREYXknLCAnZm9ybWF0TW9udGgnLCAnZm9ybWF0WWVhcicsICdmb3JtYXREYXlIZWFkZXInLCAnZm9ybWF0RGF5VGl0bGUnLCAnZm9ybWF0TW9udGhUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgJ21pbk1vZGUnLCAnbWF4TW9kZScsICdzaG93V2Vla3MnLCAnc3RhcnRpbmdEYXknLCAneWVhclJhbmdlJ10sIGZ1bmN0aW9uKCBrZXksIGluZGV4ICkge1xuICAgIHNlbGZba2V5XSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRyc1trZXldKSA/IChpbmRleCA8IDggPyAkaW50ZXJwb2xhdGUoJGF0dHJzW2tleV0pKCRzY29wZS4kcGFyZW50KSA6ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRyc1trZXldKSkgOiBkYXRlcGlja2VyQ29uZmlnW2tleV07XG4gIH0pO1xuXG4gIC8vIFdhdGNoYWJsZSBkYXRlIGF0dHJpYnV0ZXNcbiAgYW5ndWxhci5mb3JFYWNoKFsnbWluRGF0ZScsICdtYXhEYXRlJ10sIGZ1bmN0aW9uKCBrZXkgKSB7XG4gICAgaWYgKCAkYXR0cnNba2V5XSApIHtcbiAgICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzW2tleV0pLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBzZWxmW2tleV0gPSB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XG4gICAgICAgIHNlbGYucmVmcmVzaFZpZXcoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmW2tleV0gPSBkYXRlcGlja2VyQ29uZmlnW2tleV0gPyBuZXcgRGF0ZShkYXRlcGlja2VyQ29uZmlnW2tleV0pIDogbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS5kYXRlcGlja2VyTW9kZSA9ICRzY29wZS5kYXRlcGlja2VyTW9kZSB8fCBkYXRlcGlja2VyQ29uZmlnLmRhdGVwaWNrZXJNb2RlO1xuICAkc2NvcGUudW5pcXVlSWQgPSAnZGF0ZXBpY2tlci0nICsgJHNjb3BlLiRpZCArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcbiAgdGhpcy5hY3RpdmVEYXRlID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmluaXREYXRlKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5pbml0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG4gICRzY29wZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKGRhdGVPYmplY3QpIHtcbiAgICBpZiAoc2VsZi5jb21wYXJlKGRhdGVPYmplY3QuZGF0ZSwgc2VsZi5hY3RpdmVEYXRlKSA9PT0gMCkge1xuICAgICAgJHNjb3BlLmFjdGl2ZURhdGVJZCA9IGRhdGVPYmplY3QudWlkO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbiggbmdNb2RlbEN0cmxfICkge1xuICAgIG5nTW9kZWxDdHJsID0gbmdNb2RlbEN0cmxfO1xuXG4gICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCBuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSApIHtcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoIG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlICksXG4gICAgICAgICAgaXNWYWxpZCA9ICFpc05hTihkYXRlKTtcblxuICAgICAgaWYgKCBpc1ZhbGlkICkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5lcnJvcignRGF0ZXBpY2tlciBkaXJlY3RpdmU6IFwibmctbW9kZWxcIiB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBvYmplY3QsIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAwMS4wMS4xOTcwIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBSRkMyODIyIG9yIElTTyA4NjAxIGRhdGUuJyk7XG4gICAgICB9XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ2RhdGUnLCBpc1ZhbGlkKTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9O1xuXG4gIHRoaXMucmVmcmVzaFZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIHRoaXMuZWxlbWVudCApIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hWaWV3KCk7XG5cbiAgICAgIHZhciBkYXRlID0gbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgPyBuZXcgRGF0ZShuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSkgOiBudWxsO1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdkYXRlLWRpc2FibGVkJywgIWRhdGUgfHwgKHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rpc2FibGVkKGRhdGUpKSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY3JlYXRlRGF0ZU9iamVjdCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xuICAgIHZhciBtb2RlbCA9IG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlID8gbmV3IERhdGUobmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUpIDogbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgIGxhYmVsOiBkYXRlRmlsdGVyKGRhdGUsIGZvcm1hdCksXG4gICAgICBzZWxlY3RlZDogbW9kZWwgJiYgdGhpcy5jb21wYXJlKGRhdGUsIG1vZGVsKSA9PT0gMCxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQoZGF0ZSksXG4gICAgICBjdXJyZW50OiB0aGlzLmNvbXBhcmUoZGF0ZSwgbmV3IERhdGUoKSkgPT09IDBcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uKCBkYXRlICkge1xuICAgIHJldHVybiAoKHRoaXMubWluRGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA8IDApIHx8ICh0aGlzLm1heERhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPiAwKSB8fCAoJGF0dHJzLmRhdGVEaXNhYmxlZCAmJiAkc2NvcGUuZGF0ZURpc2FibGVkKHtkYXRlOiBkYXRlLCBtb2RlOiAkc2NvcGUuZGF0ZXBpY2tlck1vZGV9KSkpO1xuICB9O1xuXG4gIC8vIFNwbGl0IGFycmF5IGludG8gc21hbGxlciBhcnJheXNcbiAgdGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGFyciwgc2l6ZSkge1xuICAgIHZhciBhcnJheXMgPSBbXTtcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIGFycmF5cy5wdXNoKGFyci5zcGxpY2UoMCwgc2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlzO1xuICB9O1xuXG4gICRzY29wZS5zZWxlY3QgPSBmdW5jdGlvbiggZGF0ZSApIHtcbiAgICBpZiAoICRzY29wZS5kYXRlcGlja2VyTW9kZSA9PT0gc2VsZi5taW5Nb2RlICkge1xuICAgICAgdmFyIGR0ID0gbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgPyBuZXcgRGF0ZSggbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgKSA6IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgZHQuc2V0RnVsbFllYXIoIGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSApO1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSggZHQgKTtcbiAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5hY3RpdmVEYXRlID0gZGF0ZTtcbiAgICAgICRzY29wZS5kYXRlcGlja2VyTW9kZSA9IHNlbGYubW9kZXNbIHNlbGYubW9kZXMuaW5kZXhPZiggJHNjb3BlLmRhdGVwaWNrZXJNb2RlICkgLSAxIF07XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5tb3ZlID0gZnVuY3Rpb24oIGRpcmVjdGlvbiApIHtcbiAgICB2YXIgeWVhciA9IHNlbGYuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgZGlyZWN0aW9uICogKHNlbGYuc3RlcC55ZWFycyB8fCAwKSxcbiAgICAgICAgbW9udGggPSBzZWxmLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIGRpcmVjdGlvbiAqIChzZWxmLnN0ZXAubW9udGhzIHx8IDApO1xuICAgIHNlbGYuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XG4gICAgc2VsZi5yZWZyZXNoVmlldygpO1xuICB9O1xuXG4gICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oIGRpcmVjdGlvbiApIHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgMTtcblxuICAgIGlmICgoJHNjb3BlLmRhdGVwaWNrZXJNb2RlID09PSBzZWxmLm1heE1vZGUgJiYgZGlyZWN0aW9uID09PSAxKSB8fCAoJHNjb3BlLmRhdGVwaWNrZXJNb2RlID09PSBzZWxmLm1pbk1vZGUgJiYgZGlyZWN0aW9uID09PSAtMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkc2NvcGUuZGF0ZXBpY2tlck1vZGUgPSBzZWxmLm1vZGVzWyBzZWxmLm1vZGVzLmluZGV4T2YoICRzY29wZS5kYXRlcGlja2VyTW9kZSApICsgZGlyZWN0aW9uIF07XG4gIH07XG5cbiAgLy8gS2V5IGV2ZW50IG1hcHBlclxuICAkc2NvcGUua2V5cyA9IHsgMTM6J2VudGVyJywgMzI6J3NwYWNlJywgMzM6J3BhZ2V1cCcsIDM0OidwYWdlZG93bicsIDM1OidlbmQnLCAzNjonaG9tZScsIDM3OidsZWZ0JywgMzg6J3VwJywgMzk6J3JpZ2h0JywgNDA6J2Rvd24nIH07XG5cbiAgdmFyIGZvY3VzRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5lbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgfSwgMCAsIGZhbHNlKTtcbiAgfTtcblxuICAvLyBMaXN0ZW4gZm9yIGZvY3VzIHJlcXVlc3RzIGZyb20gcG9wdXAgZGlyZWN0aXZlXG4gICRzY29wZS4kb24oJ2RhdGVwaWNrZXIuZm9jdXMnLCBmb2N1c0VsZW1lbnQpO1xuXG4gICRzY29wZS5rZXlkb3duID0gZnVuY3Rpb24oIGV2dCApIHtcbiAgICB2YXIga2V5ID0gJHNjb3BlLmtleXNbZXZ0LndoaWNoXTtcblxuICAgIGlmICggIWtleSB8fCBldnQuc2hpZnRLZXkgfHwgZXZ0LmFsdEtleSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoa2V5ID09PSAnZW50ZXInIHx8IGtleSA9PT0gJ3NwYWNlJykge1xuICAgICAgaWYgKCBzZWxmLmlzRGlzYWJsZWQoc2VsZi5hY3RpdmVEYXRlKSkge1xuICAgICAgICByZXR1cm47IC8vIGRvIG5vdGhpbmdcbiAgICAgIH1cbiAgICAgICRzY29wZS5zZWxlY3Qoc2VsZi5hY3RpdmVEYXRlKTtcbiAgICAgIGZvY3VzRWxlbWVudCgpO1xuICAgIH0gZWxzZSBpZiAoZXZ0LmN0cmxLZXkgJiYgKGtleSA9PT0gJ3VwJyB8fCBrZXkgPT09ICdkb3duJykpIHtcbiAgICAgICRzY29wZS50b2dnbGVNb2RlKGtleSA9PT0gJ3VwJyA/IDEgOiAtMSk7XG4gICAgICBmb2N1c0VsZW1lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5oYW5kbGVLZXlEb3duKGtleSwgZXZ0KTtcbiAgICAgIHNlbGYucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSggJ2RhdGVwaWNrZXInLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgZGF0ZXBpY2tlck1vZGU6ICc9PycsXG4gICAgICBkYXRlRGlzYWJsZWQ6ICcmJ1xuICAgIH0sXG4gICAgcmVxdWlyZTogWydkYXRlcGlja2VyJywgJz9ebmdNb2RlbCddLFxuICAgIGNvbnRyb2xsZXI6ICdEYXRlcGlja2VyQ29udHJvbGxlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIGRhdGVwaWNrZXJDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG5cbiAgICAgIGlmICggbmdNb2RlbEN0cmwgKSB7XG4gICAgICAgIGRhdGVwaWNrZXJDdHJsLmluaXQoIG5nTW9kZWxDdHJsICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnZGF5cGlja2VyJywgWydkYXRlRmlsdGVyJywgZnVuY3Rpb24gKGRhdGVGaWx0ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbCcsXG4gICAgcmVxdWlyZTogJ15kYXRlcGlja2VyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIHNjb3BlLnNob3dXZWVrcyA9IGN0cmwuc2hvd1dlZWtzO1xuXG4gICAgICBjdHJsLnN0ZXAgPSB7IG1vbnRoczogMSB9O1xuICAgICAgY3RybC5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgdmFyIERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG4gICAgICBmdW5jdGlvbiBnZXREYXlzSW5Nb250aCggeWVhciwgbW9udGggKSB7XG4gICAgICAgIHJldHVybiAoKG1vbnRoID09PSAxKSAmJiAoeWVhciAlIDQgPT09IDApICYmICgoeWVhciAlIDEwMCAhPT0gMCkgfHwgKHllYXIgJSA0MDAgPT09IDApKSkgPyAyOSA6IERBWVNfSU5fTU9OVEhbbW9udGhdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIG4pIHtcbiAgICAgICAgdmFyIGRhdGVzID0gbmV3IEFycmF5KG4pLCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnREYXRlKSwgaSA9IDA7XG4gICAgICAgIGN1cnJlbnQuc2V0SG91cnMoMTIpOyAvLyBQcmV2ZW50IHJlcGVhdGVkIGRhdGVzIGJlY2F1c2Ugb2YgdGltZXpvbmUgYnVnXG4gICAgICAgIHdoaWxlICggaSA8IG4gKSB7XG4gICAgICAgICAgZGF0ZXNbaSsrXSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgKyAxICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGVzO1xuICAgICAgfVxuXG4gICAgICBjdHJsLl9yZWZyZXNoVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeWVhciA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIG1vbnRoID0gY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSBjdHJsLnN0YXJ0aW5nRGF5IC0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpLFxuICAgICAgICAgIG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID0gKGRpZmZlcmVuY2UgPiAwKSA/IDcgLSBkaWZmZXJlbmNlIDogLSBkaWZmZXJlbmNlLFxuICAgICAgICAgIGZpcnN0RGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aCk7XG5cbiAgICAgICAgaWYgKCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA+IDAgKSB7XG4gICAgICAgICAgZmlyc3REYXRlLnNldERhdGUoIC0gbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggKyAxICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA0MiBpcyB0aGUgbnVtYmVyIG9mIGRheXMgb24gYSBzaXgtbW9udGggY2FsZW5kYXJcbiAgICAgICAgdmFyIGRheXMgPSBnZXREYXRlcyhmaXJzdERhdGUsIDQyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0MjsgaSArKykge1xuICAgICAgICAgIGRheXNbaV0gPSBhbmd1bGFyLmV4dGVuZChjdHJsLmNyZWF0ZURhdGVPYmplY3QoZGF5c1tpXSwgY3RybC5mb3JtYXREYXkpLCB7XG4gICAgICAgICAgICBzZWNvbmRhcnk6IGRheXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGgsXG4gICAgICAgICAgICB1aWQ6IHNjb3BlLnVuaXF1ZUlkICsgJy0nICsgaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUubGFiZWxzID0gbmV3IEFycmF5KDcpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgIHNjb3BlLmxhYmVsc1tqXSA9IHtcbiAgICAgICAgICAgIGFiYnI6IGRhdGVGaWx0ZXIoZGF5c1tqXS5kYXRlLCBjdHJsLmZvcm1hdERheUhlYWRlciksXG4gICAgICAgICAgICBmdWxsOiBkYXRlRmlsdGVyKGRheXNbal0uZGF0ZSwgJ0VFRUUnKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS50aXRsZSA9IGRhdGVGaWx0ZXIoY3RybC5hY3RpdmVEYXRlLCBjdHJsLmZvcm1hdERheVRpdGxlKTtcbiAgICAgICAgc2NvcGUucm93cyA9IGN0cmwuc3BsaXQoZGF5cywgNyk7XG5cbiAgICAgICAgaWYgKCBzY29wZS5zaG93V2Vla3MgKSB7XG4gICAgICAgICAgc2NvcGUud2Vla051bWJlcnMgPSBbXTtcbiAgICAgICAgICB2YXIgd2Vla051bWJlciA9IGdldElTTzg2MDFXZWVrTnVtYmVyKCBzY29wZS5yb3dzWzBdWzBdLmRhdGUgKSxcbiAgICAgICAgICAgICAgbnVtV2Vla3MgPSBzY29wZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSggc2NvcGUud2Vla051bWJlcnMucHVzaCh3ZWVrTnVtYmVyKyspIDwgbnVtV2Vla3MgKSB7fVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSggZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpICkgLSBuZXcgRGF0ZSggZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSwgZGF0ZTIuZ2V0RGF0ZSgpICkgKTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIGdldElTTzg2MDFXZWVrTnVtYmVyKGRhdGUpIHtcbiAgICAgICAgdmFyIGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpICsgNCAtIChjaGVja0RhdGUuZ2V0RGF5KCkgfHwgNykpOyAvLyBUaHVyc2RheVxuICAgICAgICB2YXIgdGltZSA9IGNoZWNrRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIGNoZWNrRGF0ZS5zZXRNb250aCgwKTsgLy8gQ29tcGFyZSB3aXRoIEphbiAxXG4gICAgICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJvdW5kKCh0aW1lIC0gY2hlY2tEYXRlKSAvIDg2NDAwMDAwKSAvIDcpICsgMTtcbiAgICAgIH1cblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgLSAxOyAgIC8vIHVwXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndXAnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgLSA3OyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBkYXRlID0gZGF0ZSArIDE7ICAgLy8gZG93blxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyA3O1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3BhZ2V1cCcgfHwga2V5ID09PSAncGFnZWRvd24nKSB7XG4gICAgICAgICAgdmFyIG1vbnRoID0gY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyAoa2V5ID09PSAncGFnZXVwJyA/IC0gMSA6IDEpO1xuICAgICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aCwgMSk7XG4gICAgICAgICAgZGF0ZSA9IE1hdGgubWluKGdldERheXNJbk1vbnRoKGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLCBjdHJsLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSksIGRhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgZGF0ZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZW5kJykge1xuICAgICAgICAgIGRhdGUgPSBnZXREYXlzSW5Nb250aChjdHJsLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSwgY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXREYXRlKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCdtb250aHBpY2tlcicsIFsnZGF0ZUZpbHRlcicsIGZ1bmN0aW9uIChkYXRlRmlsdGVyKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbCcsXG4gICAgcmVxdWlyZTogJ15kYXRlcGlja2VyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIGN0cmwuc3RlcCA9IHsgeWVhcnM6IDEgfTtcbiAgICAgIGN0cmwuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIGN0cmwuX3JlZnJlc2hWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtb250aHMgPSBuZXcgQXJyYXkoMTIpLFxuICAgICAgICAgICAgeWVhciA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IDEyOyBpKysgKSB7XG4gICAgICAgICAgbW9udGhzW2ldID0gYW5ndWxhci5leHRlbmQoY3RybC5jcmVhdGVEYXRlT2JqZWN0KG5ldyBEYXRlKHllYXIsIGksIDEpLCBjdHJsLmZvcm1hdE1vbnRoKSwge1xuICAgICAgICAgICAgdWlkOiBzY29wZS51bmlxdWVJZCArICctJyArIGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLnRpdGxlID0gZGF0ZUZpbHRlcihjdHJsLmFjdGl2ZURhdGUsIGN0cmwuZm9ybWF0TW9udGhUaXRsZSk7XG4gICAgICAgIHNjb3BlLnJvd3MgPSBjdHJsLnNwbGl0KG1vbnRocywgMyk7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCBkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpICkgLSBuZXcgRGF0ZSggZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSApO1xuICAgICAgfTtcblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMTsgICAvLyB1cFxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMzsgICAvLyBkb3duXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyAxOyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkb3duJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlICsgMztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICAgIHZhciB5ZWFyID0gY3RybC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyAoa2V5ID09PSAncGFnZXVwJyA/IC0gMSA6IDEpO1xuICAgICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgICAgIGRhdGUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBkYXRlID0gMTE7XG4gICAgICAgIH1cbiAgICAgICAgY3RybC5hY3RpdmVEYXRlLnNldE1vbnRoKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd5ZWFycGlja2VyJywgWydkYXRlRmlsdGVyJywgZnVuY3Rpb24gKGRhdGVGaWx0ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWwnLFxuICAgIHJlcXVpcmU6ICdeZGF0ZXBpY2tlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBjdHJsLnllYXJSYW5nZTtcblxuICAgICAgY3RybC5zdGVwID0geyB5ZWFyczogcmFuZ2UgfTtcbiAgICAgIGN0cmwuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFN0YXJ0aW5nWWVhciggeWVhciApIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KCh5ZWFyIC0gMSkgLyByYW5nZSwgMTApICogcmFuZ2UgKyAxO1xuICAgICAgfVxuXG4gICAgICBjdHJsLl9yZWZyZXNoVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeWVhcnMgPSBuZXcgQXJyYXkocmFuZ2UpO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMCwgc3RhcnQgPSBnZXRTdGFydGluZ1llYXIoY3RybC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpOyBpIDwgcmFuZ2U7IGkrKyApIHtcbiAgICAgICAgICB5ZWFyc1tpXSA9IGFuZ3VsYXIuZXh0ZW5kKGN0cmwuY3JlYXRlRGF0ZU9iamVjdChuZXcgRGF0ZShzdGFydCArIGksIDAsIDEpLCBjdHJsLmZvcm1hdFllYXIpLCB7XG4gICAgICAgICAgICB1aWQ6IHNjb3BlLnVuaXF1ZUlkICsgJy0nICsgaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUudGl0bGUgPSBbeWVhcnNbMF0ubGFiZWwsIHllYXJzW3JhbmdlIC0gMV0ubGFiZWxdLmpvaW4oJyAtICcpO1xuICAgICAgICBzY29wZS5yb3dzID0gY3RybC5zcGxpdCh5ZWFycywgNSk7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMTsgICAvLyB1cFxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gNTsgICAvLyBkb3duXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyAxOyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkb3duJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlICsgNTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICAgIGRhdGUgKz0gKGtleSA9PT0gJ3BhZ2V1cCcgPyAtIDEgOiAxKSAqIGN0cmwuc3RlcC55ZWFycztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgICAgIGRhdGUgPSBnZXRTdGFydGluZ1llYXIoIGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZW5kJykge1xuICAgICAgICAgIGRhdGUgPSBnZXRTdGFydGluZ1llYXIoIGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICkgKyByYW5nZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgY3RybC5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uY29uc3RhbnQoJ2RhdGVwaWNrZXJQb3B1cENvbmZpZycsIHtcbiAgZGF0ZXBpY2tlclBvcHVwOiAneXl5eS1NTS1kZCcsXG4gIGN1cnJlbnRUZXh0OiAnVG9kYXknLFxuICBjbGVhclRleHQ6ICdDbGVhcicsXG4gIGNsb3NlVGV4dDogJ0RvbmUnLFxuICBjbG9zZU9uRGF0ZVNlbGVjdGlvbjogdHJ1ZSxcbiAgYXBwZW5kVG9Cb2R5OiBmYWxzZSxcbiAgc2hvd0J1dHRvbkJhcjogdHJ1ZVxufSlcblxuLmRpcmVjdGl2ZSgnZGF0ZXBpY2tlclBvcHVwJywgWyckY29tcGlsZScsICckcGFyc2UnLCAnJGRvY3VtZW50JywgJyRwb3NpdGlvbicsICdkYXRlRmlsdGVyJywgJ2RhdGVQYXJzZXInLCAnZGF0ZXBpY2tlclBvcHVwQ29uZmlnJyxcbmZ1bmN0aW9uICgkY29tcGlsZSwgJHBhcnNlLCAkZG9jdW1lbnQsICRwb3NpdGlvbiwgZGF0ZUZpbHRlciwgZGF0ZVBhcnNlciwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBpc09wZW46ICc9PycsXG4gICAgICBjdXJyZW50VGV4dDogJ0AnLFxuICAgICAgY2xlYXJUZXh0OiAnQCcsXG4gICAgICBjbG9zZVRleHQ6ICdAJyxcbiAgICAgIGRhdGVEaXNhYmxlZDogJyYnXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgIHZhciBkYXRlRm9ybWF0LFxuICAgICAgICAgIGNsb3NlT25EYXRlU2VsZWN0aW9uID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuY2xvc2VPbkRhdGVTZWxlY3Rpb24pID8gc2NvcGUuJHBhcmVudC4kZXZhbChhdHRycy5jbG9zZU9uRGF0ZVNlbGVjdGlvbikgOiBkYXRlcGlja2VyUG9wdXBDb25maWcuY2xvc2VPbkRhdGVTZWxlY3Rpb24sXG4gICAgICAgICAgYXBwZW5kVG9Cb2R5ID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZGF0ZXBpY2tlckFwcGVuZFRvQm9keSkgPyBzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLmRhdGVwaWNrZXJBcHBlbmRUb0JvZHkpIDogZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmFwcGVuZFRvQm9keTtcblxuICAgICAgc2NvcGUuc2hvd0J1dHRvbkJhciA9IGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLnNob3dCdXR0b25CYXIpID8gc2NvcGUuJHBhcmVudC4kZXZhbChhdHRycy5zaG93QnV0dG9uQmFyKSA6IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5zaG93QnV0dG9uQmFyO1xuXG4gICAgICBzY29wZS5nZXRUZXh0ID0gZnVuY3Rpb24oIGtleSApIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlW2tleSArICdUZXh0J10gfHwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnW2tleSArICdUZXh0J107XG4gICAgICB9O1xuXG4gICAgICBhdHRycy4kb2JzZXJ2ZSgnZGF0ZXBpY2tlclBvcHVwJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBkYXRlRm9ybWF0ID0gdmFsdWUgfHwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmRhdGVwaWNrZXJQb3B1cDtcbiAgICAgICAgICBuZ01vZGVsLiRyZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBwb3B1cCBlbGVtZW50IHVzZWQgdG8gZGlzcGxheSBjYWxlbmRhclxuICAgICAgdmFyIHBvcHVwRWwgPSBhbmd1bGFyLmVsZW1lbnQoJzxkaXYgZGF0ZXBpY2tlci1wb3B1cC13cmFwPjxkaXYgZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgIHBvcHVwRWwuYXR0cih7XG4gICAgICAgICduZy1tb2RlbCc6ICdkYXRlJyxcbiAgICAgICAgJ25nLWNoYW5nZSc6ICdkYXRlU2VsZWN0aW9uKCknXG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gY2FtZWx0b0Rhc2goIHN0cmluZyApe1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHsgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7IH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBkYXRlcGlja2VyIGVsZW1lbnRcbiAgICAgIHZhciBkYXRlcGlja2VyRWwgPSBhbmd1bGFyLmVsZW1lbnQocG9wdXBFbC5jaGlsZHJlbigpWzBdKTtcbiAgICAgIGlmICggYXR0cnMuZGF0ZXBpY2tlck9wdGlvbnMgKSB7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLmRhdGVwaWNrZXJPcHRpb25zKSwgZnVuY3Rpb24oIHZhbHVlLCBvcHRpb24gKSB7XG4gICAgICAgICAgZGF0ZXBpY2tlckVsLmF0dHIoIGNhbWVsdG9EYXNoKG9wdGlvbiksIHZhbHVlICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzY29wZS53YXRjaERhdGEgPSB7fTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChbJ21pbkRhdGUnLCAnbWF4RGF0ZScsICdkYXRlcGlja2VyTW9kZSddLCBmdW5jdGlvbigga2V5ICkge1xuICAgICAgICBpZiAoIGF0dHJzW2tleV0gKSB7XG4gICAgICAgICAgdmFyIGdldEF0dHJpYnV0ZSA9ICRwYXJzZShhdHRyc1trZXldKTtcbiAgICAgICAgICBzY29wZS4kcGFyZW50LiR3YXRjaChnZXRBdHRyaWJ1dGUsIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHNjb3BlLndhdGNoRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGF0ZXBpY2tlckVsLmF0dHIoY2FtZWx0b0Rhc2goa2V5KSwgJ3dhdGNoRGF0YS4nICsga2V5KTtcblxuICAgICAgICAgIC8vIFByb3BhZ2F0ZSBjaGFuZ2VzIGZyb20gZGF0ZXBpY2tlciB0byBvdXRzaWRlXG4gICAgICAgICAgaWYgKCBrZXkgPT09ICdkYXRlcGlja2VyTW9kZScgKSB7XG4gICAgICAgICAgICB2YXIgc2V0QXR0cmlidXRlID0gZ2V0QXR0cmlidXRlLmFzc2lnbjtcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnd2F0Y2hEYXRhLicgKyBrZXksIGZ1bmN0aW9uKHZhbHVlLCBvbGR2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoIHZhbHVlICE9PSBvbGR2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGUoc2NvcGUuJHBhcmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGF0dHJzLmRhdGVEaXNhYmxlZCkge1xuICAgICAgICBkYXRlcGlja2VyRWwuYXR0cignZGF0ZS1kaXNhYmxlZCcsICdkYXRlRGlzYWJsZWQoeyBkYXRlOiBkYXRlLCBtb2RlOiBtb2RlIH0pJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZSh2aWV3VmFsdWUpIHtcbiAgICAgICAgaWYgKCF2aWV3VmFsdWUpIHtcbiAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnZGF0ZScsIHRydWUpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGFuZ3VsYXIuaXNEYXRlKHZpZXdWYWx1ZSkgJiYgIWlzTmFOKHZpZXdWYWx1ZSkpIHtcbiAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnZGF0ZScsIHRydWUpO1xuICAgICAgICAgIHJldHVybiB2aWV3VmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYW5ndWxhci5pc1N0cmluZyh2aWV3VmFsdWUpKSB7XG4gICAgICAgICAgdmFyIGRhdGUgPSBkYXRlUGFyc2VyLnBhcnNlKHZpZXdWYWx1ZSwgZGF0ZUZvcm1hdCkgfHwgbmV3IERhdGUodmlld1ZhbHVlKTtcbiAgICAgICAgICBpZiAoaXNOYU4oZGF0ZSkpIHtcbiAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdkYXRlJywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ2RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnZGF0ZScsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuZ01vZGVsLiRwYXJzZXJzLnVuc2hpZnQocGFyc2VEYXRlKTtcblxuICAgICAgLy8gSW5uZXIgY2hhbmdlXG4gICAgICBzY29wZS5kYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24oZHQpIHtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGR0KSkge1xuICAgICAgICAgIHNjb3BlLmRhdGUgPSBkdDtcbiAgICAgICAgfVxuICAgICAgICBuZ01vZGVsLiRzZXRWaWV3VmFsdWUoc2NvcGUuZGF0ZSk7XG4gICAgICAgIG5nTW9kZWwuJHJlbmRlcigpO1xuXG4gICAgICAgIGlmICggY2xvc2VPbkRhdGVTZWxlY3Rpb24gKSB7XG4gICAgICAgICAgc2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBlbGVtZW50LmJpbmQoJ2lucHV0IGNoYW5nZSBrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGUuZGF0ZSA9IG5nTW9kZWwuJG1vZGVsVmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIE91dHRlciBjaGFuZ2VcbiAgICAgIG5nTW9kZWwuJHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0ZSA9IG5nTW9kZWwuJHZpZXdWYWx1ZSA/IGRhdGVGaWx0ZXIobmdNb2RlbC4kdmlld1ZhbHVlLCBkYXRlRm9ybWF0KSA6ICcnO1xuICAgICAgICBlbGVtZW50LnZhbChkYXRlKTtcbiAgICAgICAgc2NvcGUuZGF0ZSA9IHBhcnNlRGF0ZSggbmdNb2RlbC4kbW9kZWxWYWx1ZSApO1xuICAgICAgfTtcblxuICAgICAgdmFyIGRvY3VtZW50Q2xpY2tCaW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHNjb3BlLmlzT3BlbiAmJiBldmVudC50YXJnZXQgIT09IGVsZW1lbnRbMF0pIHtcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGtleWRvd24gPSBmdW5jdGlvbihldnQsIG5vQXBwbHkpIHtcbiAgICAgICAgc2NvcGUua2V5ZG93bihldnQpO1xuICAgICAgfTtcbiAgICAgIGVsZW1lbnQuYmluZCgna2V5ZG93bicsIGtleWRvd24pO1xuXG4gICAgICBzY29wZS5rZXlkb3duID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGlmIChldnQud2hpY2ggPT09IDI3KSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LndoaWNoID09PSA0MCAmJiAhc2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgc2NvcGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2NvcGUuJHdhdGNoKCdpc09wZW4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBzY29wZS4kYnJvYWRjYXN0KCdkYXRlcGlja2VyLmZvY3VzJyk7XG4gICAgICAgICAgc2NvcGUucG9zaXRpb24gPSBhcHBlbmRUb0JvZHkgPyAkcG9zaXRpb24ub2Zmc2V0KGVsZW1lbnQpIDogJHBvc2l0aW9uLnBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgICAgIHNjb3BlLnBvc2l0aW9uLnRvcCA9IHNjb3BlLnBvc2l0aW9uLnRvcCArIGVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0Jyk7XG5cbiAgICAgICAgICAkZG9jdW1lbnQuYmluZCgnY2xpY2snLCBkb2N1bWVudENsaWNrQmluZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRvY3VtZW50LnVuYmluZCgnY2xpY2snLCBkb2N1bWVudENsaWNrQmluZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzY29wZS5zZWxlY3QgPSBmdW5jdGlvbiggZGF0ZSApIHtcbiAgICAgICAgaWYgKGRhdGUgPT09ICd0b2RheScpIHtcbiAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGF0ZShuZ01vZGVsLiRtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKG5nTW9kZWwuJG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5kYXRlU2VsZWN0aW9uKCBkYXRlICk7XG4gICAgICB9O1xuXG4gICAgICBzY29wZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgfTtcblxuICAgICAgdmFyICRwb3B1cCA9ICRjb21waWxlKHBvcHVwRWwpKHNjb3BlKTtcbiAgICAgIC8vIFByZXZlbnQgalF1ZXJ5IGNhY2hlIG1lbW9yeSBsZWFrICh0ZW1wbGF0ZSBpcyBub3cgcmVkdW5kYW50IGFmdGVyIGxpbmtpbmcpXG4gICAgICBwb3B1cEVsLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoIGFwcGVuZFRvQm9keSApIHtcbiAgICAgICAgJGRvY3VtZW50LmZpbmQoJ2JvZHknKS5hcHBlbmQoJHBvcHVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuYWZ0ZXIoJHBvcHVwKTtcbiAgICAgIH1cblxuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkcG9wdXAucmVtb3ZlKCk7XG4gICAgICAgIGVsZW1lbnQudW5iaW5kKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICAgICRkb2N1bWVudC51bmJpbmQoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0JpbmQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ2RhdGVwaWNrZXJQb3B1cFdyYXAnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDonRUEnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbCcsXG4gICAgbGluazpmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnRpbWVwaWNrZXInLCBbXSlcblxuLmNvbnN0YW50KCd0aW1lcGlja2VyQ29uZmlnJywge1xuICBob3VyU3RlcDogMSxcbiAgbWludXRlU3RlcDogMSxcbiAgc2hvd01lcmlkaWFuOiB0cnVlLFxuICBtZXJpZGlhbnM6IG51bGwsXG4gIHJlYWRvbmx5SW5wdXQ6IGZhbHNlLFxuICBtb3VzZXdoZWVsOiB0cnVlXG59KVxuXG4uY29udHJvbGxlcignVGltZXBpY2tlckNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJHBhcnNlJywgJyRsb2cnLCAnJGxvY2FsZScsICd0aW1lcGlja2VyQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsICRwYXJzZSwgJGxvZywgJGxvY2FsZSwgdGltZXBpY2tlckNvbmZpZykge1xuICB2YXIgc2VsZWN0ZWQgPSBuZXcgRGF0ZSgpLFxuICAgICAgbmdNb2RlbEN0cmwgPSB7ICRzZXRWaWV3VmFsdWU6IGFuZ3VsYXIubm9vcCB9LCAvLyBudWxsTW9kZWxDdHJsXG4gICAgICBtZXJpZGlhbnMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMubWVyaWRpYW5zKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tZXJpZGlhbnMpIDogdGltZXBpY2tlckNvbmZpZy5tZXJpZGlhbnMgfHwgJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkFNUE1TO1xuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCBuZ01vZGVsQ3RybF8sIGlucHV0cyApIHtcbiAgICBuZ01vZGVsQ3RybCA9IG5nTW9kZWxDdHJsXztcbiAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gdGhpcy5yZW5kZXI7XG5cbiAgICB2YXIgaG91cnNJbnB1dEVsID0gaW5wdXRzLmVxKDApLFxuICAgICAgICBtaW51dGVzSW5wdXRFbCA9IGlucHV0cy5lcSgxKTtcblxuICAgIHZhciBtb3VzZXdoZWVsID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLm1vdXNld2hlZWwpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLm1vdXNld2hlZWwpIDogdGltZXBpY2tlckNvbmZpZy5tb3VzZXdoZWVsO1xuICAgIGlmICggbW91c2V3aGVlbCApIHtcbiAgICAgIHRoaXMuc2V0dXBNb3VzZXdoZWVsRXZlbnRzKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICk7XG4gICAgfVxuXG4gICAgJHNjb3BlLnJlYWRvbmx5SW5wdXQgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMucmVhZG9ubHlJbnB1dCkgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMucmVhZG9ubHlJbnB1dCkgOiB0aW1lcGlja2VyQ29uZmlnLnJlYWRvbmx5SW5wdXQ7XG4gICAgdGhpcy5zZXR1cElucHV0RXZlbnRzKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICk7XG4gIH07XG5cbiAgdmFyIGhvdXJTdGVwID0gdGltZXBpY2tlckNvbmZpZy5ob3VyU3RlcDtcbiAgaWYgKCRhdHRycy5ob3VyU3RlcCkge1xuICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzLmhvdXJTdGVwKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGhvdXJTdGVwID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBtaW51dGVTdGVwID0gdGltZXBpY2tlckNvbmZpZy5taW51dGVTdGVwO1xuICBpZiAoJGF0dHJzLm1pbnV0ZVN0ZXApIHtcbiAgICAkc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKCRhdHRycy5taW51dGVTdGVwKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIG1pbnV0ZVN0ZXAgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gMTJIIC8gMjRIIG1vZGVcbiAgJHNjb3BlLnNob3dNZXJpZGlhbiA9IHRpbWVwaWNrZXJDb25maWcuc2hvd01lcmlkaWFuO1xuICBpZiAoJGF0dHJzLnNob3dNZXJpZGlhbikge1xuICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzLnNob3dNZXJpZGlhbiksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAkc2NvcGUuc2hvd01lcmlkaWFuID0gISF2YWx1ZTtcblxuICAgICAgaWYgKCBuZ01vZGVsQ3RybC4kZXJyb3IudGltZSApIHtcbiAgICAgICAgLy8gRXZhbHVhdGUgZnJvbSB0ZW1wbGF0ZVxuICAgICAgICB2YXIgaG91cnMgPSBnZXRIb3Vyc0Zyb21UZW1wbGF0ZSgpLCBtaW51dGVzID0gZ2V0TWludXRlc0Zyb21UZW1wbGF0ZSgpO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoIGhvdXJzICkgJiYgYW5ndWxhci5pc0RlZmluZWQoIG1pbnV0ZXMgKSkge1xuICAgICAgICAgIHNlbGVjdGVkLnNldEhvdXJzKCBob3VycyApO1xuICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlVGVtcGxhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIEdldCAkc2NvcGUuaG91cnMgaW4gMjRIIG1vZGUgaWYgdmFsaWRcbiAgZnVuY3Rpb24gZ2V0SG91cnNGcm9tVGVtcGxhdGUgKCApIHtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCggJHNjb3BlLmhvdXJzLCAxMCApO1xuICAgIHZhciB2YWxpZCA9ICggJHNjb3BlLnNob3dNZXJpZGlhbiApID8gKGhvdXJzID4gMCAmJiBob3VycyA8IDEzKSA6IChob3VycyA+PSAwICYmIGhvdXJzIDwgMjQpO1xuICAgIGlmICggIXZhbGlkICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoICRzY29wZS5zaG93TWVyaWRpYW4gKSB7XG4gICAgICBpZiAoIGhvdXJzID09PSAxMiApIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKCAkc2NvcGUubWVyaWRpYW4gPT09IG1lcmlkaWFuc1sxXSApIHtcbiAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaG91cnM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCkge1xuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQoJHNjb3BlLm1pbnV0ZXMsIDEwKTtcbiAgICByZXR1cm4gKCBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICkgPyBtaW51dGVzIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFkKCB2YWx1ZSApIHtcbiAgICByZXR1cm4gKCBhbmd1bGFyLmlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCAyICkgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgLy8gUmVzcG9uZCBvbiBtb3VzZXdoZWVsIHNwaW5cbiAgdGhpcy5zZXR1cE1vdXNld2hlZWxFdmVudHMgPSBmdW5jdGlvbiggaG91cnNJbnB1dEVsLCBtaW51dGVzSW5wdXRFbCApIHtcbiAgICB2YXIgaXNTY3JvbGxpbmdVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgIH1cbiAgICAgIC8vcGljayBjb3JyZWN0IGRlbHRhIHZhcmlhYmxlIGRlcGVuZGluZyBvbiBldmVudFxuICAgICAgdmFyIGRlbHRhID0gKGUud2hlZWxEZWx0YSkgPyBlLndoZWVsRGVsdGEgOiAtZS5kZWx0YVk7XG4gICAgICByZXR1cm4gKGUuZGV0YWlsIHx8IGRlbHRhID4gMCk7XG4gICAgfTtcblxuICAgIGhvdXJzSW5wdXRFbC5iaW5kKCdtb3VzZXdoZWVsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgJHNjb3BlLiRhcHBseSggKGlzU2Nyb2xsaW5nVXAoZSkpID8gJHNjb3BlLmluY3JlbWVudEhvdXJzKCkgOiAkc2NvcGUuZGVjcmVtZW50SG91cnMoKSApO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgbWludXRlc0lucHV0RWwuYmluZCgnbW91c2V3aGVlbCB3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICRzY29wZS4kYXBwbHkoIChpc1Njcm9sbGluZ1VwKGUpKSA/ICRzY29wZS5pbmNyZW1lbnRNaW51dGVzKCkgOiAkc2NvcGUuZGVjcmVtZW50TWludXRlcygpICk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICB0aGlzLnNldHVwSW5wdXRFdmVudHMgPSBmdW5jdGlvbiggaG91cnNJbnB1dEVsLCBtaW51dGVzSW5wdXRFbCApIHtcbiAgICBpZiAoICRzY29wZS5yZWFkb25seUlucHV0ICkge1xuICAgICAgJHNjb3BlLnVwZGF0ZUhvdXJzID0gYW5ndWxhci5ub29wO1xuICAgICAgJHNjb3BlLnVwZGF0ZU1pbnV0ZXMgPSBhbmd1bGFyLm5vb3A7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGludmFsaWRhdGUgPSBmdW5jdGlvbihpbnZhbGlkSG91cnMsIGludmFsaWRNaW51dGVzKSB7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKCBudWxsICk7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ3RpbWUnLCBmYWxzZSk7XG4gICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoaW52YWxpZEhvdXJzKSkge1xuICAgICAgICAkc2NvcGUuaW52YWxpZEhvdXJzID0gaW52YWxpZEhvdXJzO1xuICAgICAgfVxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGludmFsaWRNaW51dGVzKSkge1xuICAgICAgICAkc2NvcGUuaW52YWxpZE1pbnV0ZXMgPSBpbnZhbGlkTWludXRlcztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLnVwZGF0ZUhvdXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaG91cnMgPSBnZXRIb3Vyc0Zyb21UZW1wbGF0ZSgpO1xuXG4gICAgICBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKGhvdXJzKSApIHtcbiAgICAgICAgc2VsZWN0ZWQuc2V0SG91cnMoIGhvdXJzICk7XG4gICAgICAgIHJlZnJlc2goICdoJyApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YWxpZGF0ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaG91cnNJbnB1dEVsLmJpbmQoJ2JsdXInLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoICEkc2NvcGUuaW52YWxpZEhvdXJzICYmICRzY29wZS5ob3VycyA8IDEwKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzY29wZS5ob3VycyA9IHBhZCggJHNjb3BlLmhvdXJzICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNjb3BlLnVwZGF0ZU1pbnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtaW51dGVzID0gZ2V0TWludXRlc0Zyb21UZW1wbGF0ZSgpO1xuXG4gICAgICBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKG1pbnV0ZXMpICkge1xuICAgICAgICBzZWxlY3RlZC5zZXRNaW51dGVzKCBtaW51dGVzICk7XG4gICAgICAgIHJlZnJlc2goICdtJyApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YWxpZGF0ZSh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBtaW51dGVzSW5wdXRFbC5iaW5kKCdibHVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCAhJHNjb3BlLmludmFsaWRNaW51dGVzICYmICRzY29wZS5taW51dGVzIDwgMTAgKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzY29wZS5taW51dGVzID0gcGFkKCAkc2NvcGUubWludXRlcyApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGUgPSBuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSA/IG5ldyBEYXRlKCBuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSApIDogbnVsbDtcblxuICAgIGlmICggaXNOYU4oZGF0ZSkgKSB7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ3RpbWUnLCBmYWxzZSk7XG4gICAgICAkbG9nLmVycm9yKCdUaW1lcGlja2VyIGRpcmVjdGl2ZTogXCJuZy1tb2RlbFwiIHZhbHVlIG11c3QgYmUgYSBEYXRlIG9iamVjdCwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDAxLjAxLjE5NzAgb3IgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIFJGQzI4MjIgb3IgSVNPIDg2MDEgZGF0ZS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCBkYXRlICkge1xuICAgICAgICBzZWxlY3RlZCA9IGRhdGU7XG4gICAgICB9XG4gICAgICBtYWtlVmFsaWQoKTtcbiAgICAgIHVwZGF0ZVRlbXBsYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENhbGwgaW50ZXJuYWxseSB3aGVuIHdlIGtub3cgdGhhdCBtb2RlbCBpcyB2YWxpZC5cbiAgZnVuY3Rpb24gcmVmcmVzaCgga2V5Ym9hcmRDaGFuZ2UgKSB7XG4gICAgbWFrZVZhbGlkKCk7XG4gICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSggbmV3IERhdGUoc2VsZWN0ZWQpICk7XG4gICAgdXBkYXRlVGVtcGxhdGUoIGtleWJvYXJkQ2hhbmdlICk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlVmFsaWQoKSB7XG4gICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCd0aW1lJywgdHJ1ZSk7XG4gICAgJHNjb3BlLmludmFsaWRIb3VycyA9IGZhbHNlO1xuICAgICRzY29wZS5pbnZhbGlkTWludXRlcyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoIGtleWJvYXJkQ2hhbmdlICkge1xuICAgIHZhciBob3VycyA9IHNlbGVjdGVkLmdldEhvdXJzKCksIG1pbnV0ZXMgPSBzZWxlY3RlZC5nZXRNaW51dGVzKCk7XG5cbiAgICBpZiAoICRzY29wZS5zaG93TWVyaWRpYW4gKSB7XG4gICAgICBob3VycyA9ICggaG91cnMgPT09IDAgfHwgaG91cnMgPT09IDEyICkgPyAxMiA6IGhvdXJzICUgMTI7IC8vIENvbnZlcnQgMjQgdG8gMTIgaG91ciBzeXN0ZW1cbiAgICB9XG5cbiAgICAkc2NvcGUuaG91cnMgPSBrZXlib2FyZENoYW5nZSA9PT0gJ2gnID8gaG91cnMgOiBwYWQoaG91cnMpO1xuICAgICRzY29wZS5taW51dGVzID0ga2V5Ym9hcmRDaGFuZ2UgPT09ICdtJyA/IG1pbnV0ZXMgOiBwYWQobWludXRlcyk7XG4gICAgJHNjb3BlLm1lcmlkaWFuID0gc2VsZWN0ZWQuZ2V0SG91cnMoKSA8IDEyID8gbWVyaWRpYW5zWzBdIDogbWVyaWRpYW5zWzFdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTWludXRlcyggbWludXRlcyApIHtcbiAgICB2YXIgZHQgPSBuZXcgRGF0ZSggc2VsZWN0ZWQuZ2V0VGltZSgpICsgbWludXRlcyAqIDYwMDAwICk7XG4gICAgc2VsZWN0ZWQuc2V0SG91cnMoIGR0LmdldEhvdXJzKCksIGR0LmdldE1pbnV0ZXMoKSApO1xuICAgIHJlZnJlc2goKTtcbiAgfVxuXG4gICRzY29wZS5pbmNyZW1lbnRIb3VycyA9IGZ1bmN0aW9uKCkge1xuICAgIGFkZE1pbnV0ZXMoIGhvdXJTdGVwICogNjAgKTtcbiAgfTtcbiAgJHNjb3BlLmRlY3JlbWVudEhvdXJzID0gZnVuY3Rpb24oKSB7XG4gICAgYWRkTWludXRlcyggLSBob3VyU3RlcCAqIDYwICk7XG4gIH07XG4gICRzY29wZS5pbmNyZW1lbnRNaW51dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgYWRkTWludXRlcyggbWludXRlU3RlcCApO1xuICB9O1xuICAkc2NvcGUuZGVjcmVtZW50TWludXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGFkZE1pbnV0ZXMoIC0gbWludXRlU3RlcCApO1xuICB9O1xuICAkc2NvcGUudG9nZ2xlTWVyaWRpYW4gPSBmdW5jdGlvbigpIHtcbiAgICBhZGRNaW51dGVzKCAxMiAqIDYwICogKCggc2VsZWN0ZWQuZ2V0SG91cnMoKSA8IDEyICkgPyAxIDogLTEpICk7XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSgndGltZXBpY2tlcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXF1aXJlOiBbJ3RpbWVwaWNrZXInLCAnP15uZ01vZGVsJ10sXG4gICAgY29udHJvbGxlcjonVGltZXBpY2tlckNvbnRyb2xsZXInLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgc2NvcGU6IHt9LFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWwnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciB0aW1lcGlja2VyQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBpZiAoIG5nTW9kZWxDdHJsICkge1xuICAgICAgICB0aW1lcGlja2VyQ3RybC5pbml0KCBuZ01vZGVsQ3RybCwgZWxlbWVudC5maW5kKCdpbnB1dCcpICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvdGltZXBpY2tlci90aW1lcGlja2VyLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5kcm9wZG93bicsIFtdKVxuXG4uY29uc3RhbnQoJ2Ryb3Bkb3duQ29uZmlnJywge1xuICBvcGVuQ2xhc3M6ICdvcGVuJ1xufSlcblxuLnNlcnZpY2UoJ2Ryb3Bkb3duU2VydmljZScsIFsnJGRvY3VtZW50JywgZnVuY3Rpb24oJGRvY3VtZW50KSB7XG4gIHZhciBvcGVuU2NvcGUgPSBudWxsO1xuXG4gIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCBkcm9wZG93blNjb3BlICkge1xuICAgIGlmICggIW9wZW5TY29wZSApIHtcbiAgICAgICRkb2N1bWVudC5iaW5kKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgJGRvY3VtZW50LmJpbmQoJ2tleWRvd24nLCBlc2NhcGVLZXlCaW5kKTtcbiAgICB9XG5cbiAgICBpZiAoIG9wZW5TY29wZSAmJiBvcGVuU2NvcGUgIT09IGRyb3Bkb3duU2NvcGUgKSB7XG4gICAgICAgIG9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcGVuU2NvcGUgPSBkcm9wZG93blNjb3BlO1xuICB9O1xuXG4gIHRoaXMuY2xvc2UgPSBmdW5jdGlvbiggZHJvcGRvd25TY29wZSApIHtcbiAgICBpZiAoIG9wZW5TY29wZSA9PT0gZHJvcGRvd25TY29wZSApIHtcbiAgICAgIG9wZW5TY29wZSA9IG51bGw7XG4gICAgICAkZG9jdW1lbnQudW5iaW5kKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgJGRvY3VtZW50LnVuYmluZCgna2V5ZG93bicsIGVzY2FwZUtleUJpbmQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2VEcm9wZG93biA9IGZ1bmN0aW9uKCBldnQgKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgbWF5IHN0aWxsIGJlIGNhbGxlZCBkdXJpbmcgdGhlIHNhbWUgbW91c2UgZXZlbnQgdGhhdFxuICAgIC8vIHVuYm91bmQgdGhpcyBldmVudCBoYW5kbGVyLiBTbyBjaGVjayBvcGVuU2NvcGUgYmVmb3JlIHByb2NlZWRpbmcuXG4gICAgaWYgKCFvcGVuU2NvcGUpIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgdG9nZ2xlRWxlbWVudCA9IG9wZW5TY29wZS5nZXRUb2dnbGVFbGVtZW50KCk7XG4gICAgaWYgKCBldnQgJiYgdG9nZ2xlRWxlbWVudCAmJiB0b2dnbGVFbGVtZW50WzBdLmNvbnRhaW5zKGV2dC50YXJnZXQpICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3BlblNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgIG9wZW5TY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZXNjYXBlS2V5QmluZCA9IGZ1bmN0aW9uKCBldnQgKSB7XG4gICAgaWYgKCBldnQud2hpY2ggPT09IDI3ICkge1xuICAgICAgb3BlblNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCgpO1xuICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uY29udHJvbGxlcignRHJvcGRvd25Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRwYXJzZScsICdkcm9wZG93bkNvbmZpZycsICdkcm9wZG93blNlcnZpY2UnLCAnJGFuaW1hdGUnLCBmdW5jdGlvbigkc2NvcGUsICRhdHRycywgJHBhcnNlLCBkcm9wZG93bkNvbmZpZywgZHJvcGRvd25TZXJ2aWNlLCAkYW5pbWF0ZSkge1xuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBzY29wZSA9ICRzY29wZS4kbmV3KCksIC8vIGNyZWF0ZSBhIGNoaWxkIHNjb3BlIHNvIHdlIGFyZSBub3QgcG9sbHV0aW5nIG9yaWdpbmFsIG9uZVxuICAgICAgb3BlbkNsYXNzID0gZHJvcGRvd25Db25maWcub3BlbkNsYXNzLFxuICAgICAgZ2V0SXNPcGVuLFxuICAgICAgc2V0SXNPcGVuID0gYW5ndWxhci5ub29wLFxuICAgICAgdG9nZ2xlSW52b2tlciA9ICRhdHRycy5vblRvZ2dsZSA/ICRwYXJzZSgkYXR0cnMub25Ub2dnbGUpIDogYW5ndWxhci5ub29wO1xuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuICAgIHNlbGYuJGVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgaWYgKCAkYXR0cnMuaXNPcGVuICkge1xuICAgICAgZ2V0SXNPcGVuID0gJHBhcnNlKCRhdHRycy5pc09wZW4pO1xuICAgICAgc2V0SXNPcGVuID0gZ2V0SXNPcGVuLmFzc2lnbjtcblxuICAgICAgJHNjb3BlLiR3YXRjaChnZXRJc09wZW4sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHNjb3BlLmlzT3BlbiA9ICEhdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbiggb3BlbiApIHtcbiAgICByZXR1cm4gc2NvcGUuaXNPcGVuID0gYXJndW1lbnRzLmxlbmd0aCA/ICEhb3BlbiA6ICFzY29wZS5pc09wZW47XG4gIH07XG5cbiAgLy8gQWxsb3cgb3RoZXIgZGlyZWN0aXZlcyB0byB3YXRjaCBzdGF0dXNcbiAgdGhpcy5pc09wZW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2NvcGUuaXNPcGVuO1xuICB9O1xuXG4gIHNjb3BlLmdldFRvZ2dsZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2VsZi50b2dnbGVFbGVtZW50O1xuICB9O1xuXG4gIHNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggc2VsZi50b2dnbGVFbGVtZW50ICkge1xuICAgICAgc2VsZi50b2dnbGVFbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIHNjb3BlLiR3YXRjaCgnaXNPcGVuJywgZnVuY3Rpb24oIGlzT3Blbiwgd2FzT3BlbiApIHtcbiAgICAkYW5pbWF0ZVtpc09wZW4gPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oc2VsZi4kZWxlbWVudCwgb3BlbkNsYXNzKTtcblxuICAgIGlmICggaXNPcGVuICkge1xuICAgICAgc2NvcGUuZm9jdXNUb2dnbGVFbGVtZW50KCk7XG4gICAgICBkcm9wZG93blNlcnZpY2Uub3Blbiggc2NvcGUgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJvcGRvd25TZXJ2aWNlLmNsb3NlKCBzY29wZSApO1xuICAgIH1cblxuICAgIHNldElzT3Blbigkc2NvcGUsIGlzT3Blbik7XG4gICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGlzT3BlbikgJiYgaXNPcGVuICE9PSB3YXNPcGVuKSB7XG4gICAgICB0b2dnbGVJbnZva2VyKCRzY29wZSwgeyBvcGVuOiAhIWlzT3BlbiB9KTtcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbigpIHtcbiAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICBzY29wZS4kZGVzdHJveSgpO1xuICB9KTtcbn1dKVxuXG4uZGlyZWN0aXZlKCdkcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6ICdEcm9wZG93bkNvbnRyb2xsZXInLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgZHJvcGRvd25DdHJsKSB7XG4gICAgICBkcm9wZG93bkN0cmwuaW5pdCggZWxlbWVudCApO1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ2Ryb3Bkb3duVG9nZ2xlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogJz9eZHJvcGRvd24nLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgZHJvcGRvd25DdHJsKSB7XG4gICAgICBpZiAoICFkcm9wZG93bkN0cmwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZHJvcGRvd25DdHJsLnRvZ2dsZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICB2YXIgdG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICggIWVsZW1lbnQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgIWF0dHJzLmRpc2FibGVkICkge1xuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duQ3RybC50b2dnbGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZWxlbWVudC5iaW5kKCdjbGljaycsIHRvZ2dsZURyb3Bkb3duKTtcblxuICAgICAgLy8gV0FJLUFSSUFcbiAgICAgIGVsZW1lbnQuYXR0cih7ICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSwgJ2FyaWEtZXhwYW5kZWQnOiBmYWxzZSB9KTtcbiAgICAgIHNjb3BlLiR3YXRjaChkcm9wZG93bkN0cmwuaXNPcGVuLCBmdW5jdGlvbiggaXNPcGVuICkge1xuICAgICAgICBlbGVtZW50LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAhIWlzT3Blbik7XG4gICAgICB9KTtcblxuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50LnVuYmluZCgnY2xpY2snLCB0b2dnbGVEcm9wZG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kcm9wZG93bi9kcm9wZG93bi5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLm1vZGFsJywgWyd1aS5ib290c3RyYXAudHJhbnNpdGlvbiddKVxuXG4vKipcbiAqIEEgaGVscGVyLCBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSB0aGF0IGFjdHMgYXMgYSBtYXAgYnV0IGFsc28gYWxsb3dzIGdldHRpbmcgLyByZW1vdmluZ1xuICogZWxlbWVudHMgaW4gdGhlIExJRk8gb3JkZXJcbiAqL1xuICAuZmFjdG9yeSgnJCRzdGFja2VkTWFwJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVOZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YWNrID0gW107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhZGQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGtleSA9PSBzdGFja1tpXS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhY2tbaV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGtleXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAga2V5cy5wdXNoKHN0YWNrW2ldLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChrZXkgPT0gc3RhY2tbaV0ua2V5KSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YWNrLnNwbGljZShpZHgsIDEpWzBdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlVG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2suc3BsaWNlKHN0YWNrLmxlbmd0aCAtIDEsIDEpWzBdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9KVxuXG4vKipcbiAqIEEgaGVscGVyIGRpcmVjdGl2ZSBmb3IgdGhlICRtb2RhbCBzZXJ2aWNlLiBJdCBjcmVhdGVzIGEgYmFja2Ryb3AgZWxlbWVudC5cbiAqL1xuICAuZGlyZWN0aXZlKCdtb2RhbEJhY2tkcm9wJywgWyckdGltZW91dCcsIGZ1bmN0aW9uICgkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21vZGFsL2JhY2tkcm9wLmh0bWwnLFxuICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzY29wZS5iYWNrZHJvcENsYXNzID0gYXR0cnMuYmFja2Ryb3BDbGFzcyB8fCAnJztcblxuICAgICAgICBzY29wZS5hbmltYXRlID0gZmFsc2U7XG5cbiAgICAgICAgLy90cmlnZ2VyIENTUyB0cmFuc2l0aW9uc1xuICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2NvcGUuYW5pbWF0ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1dKVxuXG4gIC5kaXJlY3RpdmUoJ21vZGFsV2luZG93JywgWyckbW9kYWxTdGFjaycsICckdGltZW91dCcsIGZ1bmN0aW9uICgkbW9kYWxTdGFjaywgJHRpbWVvdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBpbmRleDogJ0AnLFxuICAgICAgICBhbmltYXRlOiAnPSdcbiAgICAgIH0sXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbih0RWxlbWVudCwgdEF0dHJzKSB7XG4gICAgICAgIHJldHVybiB0QXR0cnMudGVtcGxhdGVVcmwgfHwgJ3RlbXBsYXRlL21vZGFsL3dpbmRvdy5odG1sJztcbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoYXR0cnMud2luZG93Q2xhc3MgfHwgJycpO1xuICAgICAgICBzY29wZS5zaXplID0gYXR0cnMuc2l6ZTtcblxuICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gdHJpZ2dlciBDU1MgdHJhbnNpdGlvbnNcbiAgICAgICAgICBzY29wZS5hbmltYXRlID0gdHJ1ZTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEF1dG8tZm9jdXNpbmcgb2YgYSBmcmVzaGx5LW9wZW5lZCBtb2RhbCBlbGVtZW50IGNhdXNlcyBhbnkgY2hpbGQgZWxlbWVudHNcbiAgICAgICAgICAgKiB3aXRoIHRoZSBhdXRvZm9jdXMgYXR0cmlidXRlIHRvIGxvc2UgZm9jdXMuIFRoaXMgaXMgYW4gaXNzdWUgb24gdG91Y2hcbiAgICAgICAgICAgKiBiYXNlZCBkZXZpY2VzIHdoaWNoIHdpbGwgc2hvdyBhbmQgdGhlbiBoaWRlIHRoZSBvbnNjcmVlbiBrZXlib2FyZC5cbiAgICAgICAgICAgKiBBdHRlbXB0cyB0byByZWZvY3VzIHRoZSBhdXRvZm9jdXMgZWxlbWVudCB2aWEgSmF2YVNjcmlwdCB3aWxsIG5vdCByZW9wZW5cbiAgICAgICAgICAgKiB0aGUgb25zY3JlZW4ga2V5Ym9hcmQuIEZpeGVkIGJ5IHVwZGF0ZWQgdGhlIGZvY3VzaW5nIGxvZ2ljIHRvIG9ubHkgYXV0b2ZvY3VzXG4gICAgICAgICAgICogdGhlIG1vZGFsIGVsZW1lbnQgaWYgdGhlIG1vZGFsIGRvZXMgbm90IGNvbnRhaW4gYW4gYXV0b2ZvY3VzIGVsZW1lbnQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thdXRvZm9jdXNdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzY29wZS5jbG9zZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICB2YXIgbW9kYWwgPSAkbW9kYWxTdGFjay5nZXRUb3AoKTtcbiAgICAgICAgICBpZiAobW9kYWwgJiYgbW9kYWwudmFsdWUuYmFja2Ryb3AgJiYgbW9kYWwudmFsdWUuYmFja2Ryb3AgIT0gJ3N0YXRpYycgJiYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkbW9kYWxTdGFjay5kaXNtaXNzKG1vZGFsLmtleSwgJ2JhY2tkcm9wIGNsaWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1dKVxuXG4gIC5kaXJlY3RpdmUoJ21vZGFsVHJhbnNjbHVkZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCBjb250cm9sbGVyLCAkdHJhbnNjbHVkZSkge1xuICAgICAgICAkdHJhbnNjbHVkZSgkc2NvcGUuJHBhcmVudCwgZnVuY3Rpb24oY2xvbmUpIHtcbiAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpO1xuICAgICAgICAgICRlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0pXG5cbiAgLmZhY3RvcnkoJyRtb2RhbFN0YWNrJywgWyckdHJhbnNpdGlvbicsICckdGltZW91dCcsICckZG9jdW1lbnQnLCAnJGNvbXBpbGUnLCAnJHJvb3RTY29wZScsICckJHN0YWNrZWRNYXAnLFxuICAgIGZ1bmN0aW9uICgkdHJhbnNpdGlvbiwgJHRpbWVvdXQsICRkb2N1bWVudCwgJGNvbXBpbGUsICRyb290U2NvcGUsICQkc3RhY2tlZE1hcCkge1xuXG4gICAgICB2YXIgT1BFTkVEX01PREFMX0NMQVNTID0gJ21vZGFsLW9wZW4nO1xuXG4gICAgICB2YXIgYmFja2Ryb3BEb21FbCwgYmFja2Ryb3BTY29wZTtcbiAgICAgIHZhciBvcGVuZWRXaW5kb3dzID0gJCRzdGFja2VkTWFwLmNyZWF0ZU5ldygpO1xuICAgICAgdmFyICRtb2RhbFN0YWNrID0ge307XG5cbiAgICAgIGZ1bmN0aW9uIGJhY2tkcm9wSW5kZXgoKSB7XG4gICAgICAgIHZhciB0b3BCYWNrZHJvcEluZGV4ID0gLTE7XG4gICAgICAgIHZhciBvcGVuZWQgPSBvcGVuZWRXaW5kb3dzLmtleXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcGVuZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob3BlbmVkV2luZG93cy5nZXQob3BlbmVkW2ldKS52YWx1ZS5iYWNrZHJvcCkge1xuICAgICAgICAgICAgdG9wQmFja2Ryb3BJbmRleCA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3BCYWNrZHJvcEluZGV4O1xuICAgICAgfVxuXG4gICAgICAkcm9vdFNjb3BlLiR3YXRjaChiYWNrZHJvcEluZGV4LCBmdW5jdGlvbihuZXdCYWNrZHJvcEluZGV4KXtcbiAgICAgICAgaWYgKGJhY2tkcm9wU2NvcGUpIHtcbiAgICAgICAgICBiYWNrZHJvcFNjb3BlLmluZGV4ID0gbmV3QmFja2Ryb3BJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFsV2luZG93KG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICAgICB2YXIgYm9keSA9ICRkb2N1bWVudC5maW5kKCdib2R5JykuZXEoMCk7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IG9wZW5lZFdpbmRvd3MuZ2V0KG1vZGFsSW5zdGFuY2UpLnZhbHVlO1xuXG4gICAgICAgIC8vY2xlYW4gdXAgdGhlIHN0YWNrXG4gICAgICAgIG9wZW5lZFdpbmRvd3MucmVtb3ZlKG1vZGFsSW5zdGFuY2UpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHdpbmRvdyBET00gZWxlbWVudFxuICAgICAgICByZW1vdmVBZnRlckFuaW1hdGUobW9kYWxXaW5kb3cubW9kYWxEb21FbCwgbW9kYWxXaW5kb3cubW9kYWxTY29wZSwgMzAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2RhbFdpbmRvdy5tb2RhbFNjb3BlLiRkZXN0cm95KCk7XG4gICAgICAgICAgYm9keS50b2dnbGVDbGFzcyhPUEVORURfTU9EQUxfQ0xBU1MsIG9wZW5lZFdpbmRvd3MubGVuZ3RoKCkgPiAwKTtcbiAgICAgICAgICBjaGVja1JlbW92ZUJhY2tkcm9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjaGVja1JlbW92ZUJhY2tkcm9wKCkge1xuICAgICAgICAgIC8vcmVtb3ZlIGJhY2tkcm9wIGlmIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgICBpZiAoYmFja2Ryb3BEb21FbCAmJiBiYWNrZHJvcEluZGV4KCkgPT0gLTEpIHtcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcFNjb3BlUmVmID0gYmFja2Ryb3BTY29wZTtcbiAgICAgICAgICAgIHJlbW92ZUFmdGVyQW5pbWF0ZShiYWNrZHJvcERvbUVsLCBiYWNrZHJvcFNjb3BlLCAxNTAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgYmFja2Ryb3BTY29wZVJlZi4kZGVzdHJveSgpO1xuICAgICAgICAgICAgICBiYWNrZHJvcFNjb3BlUmVmID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmFja2Ryb3BEb21FbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGJhY2tkcm9wU2NvcGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVBZnRlckFuaW1hdGUoZG9tRWwsIHNjb3BlLCBlbXVsYXRlVGltZSwgZG9uZSkge1xuICAgICAgICAvLyBDbG9zaW5nIGFuaW1hdGlvblxuICAgICAgICBzY29wZS5hbmltYXRlID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHRyYW5zaXRpb25FbmRFdmVudE5hbWUgPSAkdHJhbnNpdGlvbi50cmFuc2l0aW9uRW5kRXZlbnROYW1lO1xuICAgICAgICBpZiAodHJhbnNpdGlvbkVuZEV2ZW50TmFtZSkge1xuICAgICAgICAgIC8vIHRyYW5zaXRpb24gb3V0XG4gICAgICAgICAgdmFyIHRpbWVvdXQgPSAkdGltZW91dChhZnRlckFuaW1hdGluZywgZW11bGF0ZVRpbWUpO1xuXG4gICAgICAgICAgZG9tRWwuYmluZCh0cmFuc2l0aW9uRW5kRXZlbnROYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdGltZW91dC5jYW5jZWwodGltZW91dCk7XG4gICAgICAgICAgICBhZnRlckFuaW1hdGluZygpO1xuICAgICAgICAgICAgc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoaXMgY2FsbCBpcyBhc3luY1xuICAgICAgICAgICR0aW1lb3V0KGFmdGVyQW5pbWF0aW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyQW5pbWF0aW5nKCkge1xuICAgICAgICAgIGlmIChhZnRlckFuaW1hdGluZy5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGFmdGVyQW5pbWF0aW5nLmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgZG9tRWwucmVtb3ZlKCk7XG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGRvY3VtZW50LmJpbmQoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBtb2RhbDtcblxuICAgICAgICBpZiAoZXZ0LndoaWNoID09PSAyNykge1xuICAgICAgICAgIG1vZGFsID0gb3BlbmVkV2luZG93cy50b3AoKTtcbiAgICAgICAgICBpZiAobW9kYWwgJiYgbW9kYWwudmFsdWUua2V5Ym9hcmQpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkbW9kYWxTdGFjay5kaXNtaXNzKG1vZGFsLmtleSwgJ2VzY2FwZSBrZXkgcHJlc3MnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRtb2RhbFN0YWNrLm9wZW4gPSBmdW5jdGlvbiAobW9kYWxJbnN0YW5jZSwgbW9kYWwpIHtcblxuICAgICAgICBvcGVuZWRXaW5kb3dzLmFkZChtb2RhbEluc3RhbmNlLCB7XG4gICAgICAgICAgZGVmZXJyZWQ6IG1vZGFsLmRlZmVycmVkLFxuICAgICAgICAgIG1vZGFsU2NvcGU6IG1vZGFsLnNjb3BlLFxuICAgICAgICAgIGJhY2tkcm9wOiBtb2RhbC5iYWNrZHJvcCxcbiAgICAgICAgICBrZXlib2FyZDogbW9kYWwua2V5Ym9hcmRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGJvZHkgPSAkZG9jdW1lbnQuZmluZCgnYm9keScpLmVxKDApLFxuICAgICAgICAgICAgY3VyckJhY2tkcm9wSW5kZXggPSBiYWNrZHJvcEluZGV4KCk7XG5cbiAgICAgICAgaWYgKGN1cnJCYWNrZHJvcEluZGV4ID49IDAgJiYgIWJhY2tkcm9wRG9tRWwpIHtcbiAgICAgICAgICBiYWNrZHJvcFNjb3BlID0gJHJvb3RTY29wZS4kbmV3KHRydWUpO1xuICAgICAgICAgIGJhY2tkcm9wU2NvcGUuaW5kZXggPSBjdXJyQmFja2Ryb3BJbmRleDtcbiAgICAgICAgICB2YXIgYW5ndWxhckJhY2tncm91bmREb21FbCA9IGFuZ3VsYXIuZWxlbWVudCgnPGRpdiBtb2RhbC1iYWNrZHJvcD48L2Rpdj4nKTtcbiAgICAgICAgICBhbmd1bGFyQmFja2dyb3VuZERvbUVsLmF0dHIoJ2JhY2tkcm9wLWNsYXNzJywgbW9kYWwuYmFja2Ryb3BDbGFzcyk7XG4gICAgICAgICAgYmFja2Ryb3BEb21FbCA9ICRjb21waWxlKGFuZ3VsYXJCYWNrZ3JvdW5kRG9tRWwpKGJhY2tkcm9wU2NvcGUpO1xuICAgICAgICAgIGJvZHkuYXBwZW5kKGJhY2tkcm9wRG9tRWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFuZ3VsYXJEb21FbCA9IGFuZ3VsYXIuZWxlbWVudCgnPGRpdiBtb2RhbC13aW5kb3c+PC9kaXY+Jyk7XG4gICAgICAgIGFuZ3VsYXJEb21FbC5hdHRyKHtcbiAgICAgICAgICAndGVtcGxhdGUtdXJsJzogbW9kYWwud2luZG93VGVtcGxhdGVVcmwsXG4gICAgICAgICAgJ3dpbmRvdy1jbGFzcyc6IG1vZGFsLndpbmRvd0NsYXNzLFxuICAgICAgICAgICdzaXplJzogbW9kYWwuc2l6ZSxcbiAgICAgICAgICAnaW5kZXgnOiBvcGVuZWRXaW5kb3dzLmxlbmd0aCgpIC0gMSxcbiAgICAgICAgICAnYW5pbWF0ZSc6ICdhbmltYXRlJ1xuICAgICAgICB9KS5odG1sKG1vZGFsLmNvbnRlbnQpO1xuXG4gICAgICAgIHZhciBtb2RhbERvbUVsID0gJGNvbXBpbGUoYW5ndWxhckRvbUVsKShtb2RhbC5zY29wZSk7XG4gICAgICAgIG9wZW5lZFdpbmRvd3MudG9wKCkudmFsdWUubW9kYWxEb21FbCA9IG1vZGFsRG9tRWw7XG4gICAgICAgIGJvZHkuYXBwZW5kKG1vZGFsRG9tRWwpO1xuICAgICAgICBib2R5LmFkZENsYXNzKE9QRU5FRF9NT0RBTF9DTEFTUyk7XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5jbG9zZSA9IGZ1bmN0aW9uIChtb2RhbEluc3RhbmNlLCByZXN1bHQpIHtcbiAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gb3BlbmVkV2luZG93cy5nZXQobW9kYWxJbnN0YW5jZSk7XG4gICAgICAgIGlmIChtb2RhbFdpbmRvdykge1xuICAgICAgICAgIG1vZGFsV2luZG93LnZhbHVlLmRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICByZW1vdmVNb2RhbFdpbmRvdyhtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJG1vZGFsU3RhY2suZGlzbWlzcyA9IGZ1bmN0aW9uIChtb2RhbEluc3RhbmNlLCByZWFzb24pIHtcbiAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gb3BlbmVkV2luZG93cy5nZXQobW9kYWxJbnN0YW5jZSk7XG4gICAgICAgIGlmIChtb2RhbFdpbmRvdykge1xuICAgICAgICAgIG1vZGFsV2luZG93LnZhbHVlLmRlZmVycmVkLnJlamVjdChyZWFzb24pO1xuICAgICAgICAgIHJlbW92ZU1vZGFsV2luZG93KG1vZGFsSW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkbW9kYWxTdGFjay5kaXNtaXNzQWxsID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB2YXIgdG9wTW9kYWwgPSB0aGlzLmdldFRvcCgpO1xuICAgICAgICB3aGlsZSAodG9wTW9kYWwpIHtcbiAgICAgICAgICB0aGlzLmRpc21pc3ModG9wTW9kYWwua2V5LCByZWFzb24pO1xuICAgICAgICAgIHRvcE1vZGFsID0gdGhpcy5nZXRUb3AoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJG1vZGFsU3RhY2suZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3BlbmVkV2luZG93cy50b3AoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAkbW9kYWxTdGFjaztcbiAgICB9XSlcblxuICAucHJvdmlkZXIoJyRtb2RhbCcsIGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciAkbW9kYWxQcm92aWRlciA9IHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYmFja2Ryb3A6IHRydWUsIC8vY2FuIGJlIGFsc28gZmFsc2Ugb3IgJ3N0YXRpYydcbiAgICAgICAga2V5Ym9hcmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAkZ2V0OiBbJyRpbmplY3RvcicsICckcm9vdFNjb3BlJywgJyRxJywgJyRodHRwJywgJyR0ZW1wbGF0ZUNhY2hlJywgJyRjb250cm9sbGVyJywgJyRtb2RhbFN0YWNrJyxcbiAgICAgICAgZnVuY3Rpb24gKCRpbmplY3RvciwgJHJvb3RTY29wZSwgJHEsICRodHRwLCAkdGVtcGxhdGVDYWNoZSwgJGNvbnRyb2xsZXIsICRtb2RhbFN0YWNrKSB7XG5cbiAgICAgICAgICB2YXIgJG1vZGFsID0ge307XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRUZW1wbGF0ZVByb21pc2Uob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMudGVtcGxhdGUgPyAkcS53aGVuKG9wdGlvbnMudGVtcGxhdGUpIDpcbiAgICAgICAgICAgICAgJGh0dHAuZ2V0KGFuZ3VsYXIuaXNGdW5jdGlvbihvcHRpb25zLnRlbXBsYXRlVXJsKSA/IChvcHRpb25zLnRlbXBsYXRlVXJsKSgpIDogb3B0aW9ucy50ZW1wbGF0ZVVybCxcbiAgICAgICAgICAgICAgICB7Y2FjaGU6ICR0ZW1wbGF0ZUNhY2hlfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGdldFJlc29sdmVQcm9taXNlcyhyZXNvbHZlcykge1xuICAgICAgICAgICAgdmFyIHByb21pc2VzQXJyID0gW107XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzb2x2ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHZhbHVlKSB8fCBhbmd1bGFyLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXNBcnIucHVzaCgkcS53aGVuKCRpbmplY3Rvci5pbnZva2UodmFsdWUpKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzQXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRtb2RhbC5vcGVuID0gZnVuY3Rpb24gKG1vZGFsT3B0aW9ucykge1xuXG4gICAgICAgICAgICB2YXIgbW9kYWxSZXN1bHREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgbW9kYWxPcGVuZWREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgICAgIC8vcHJlcGFyZSBhbiBpbnN0YW5jZSBvZiBhIG1vZGFsIHRvIGJlIGluamVjdGVkIGludG8gY29udHJvbGxlcnMgYW5kIHJldHVybmVkIHRvIGEgY2FsbGVyXG4gICAgICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9IHtcbiAgICAgICAgICAgICAgcmVzdWx0OiBtb2RhbFJlc3VsdERlZmVycmVkLnByb21pc2UsXG4gICAgICAgICAgICAgIG9wZW5lZDogbW9kYWxPcGVuZWREZWZlcnJlZC5wcm9taXNlLFxuICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRtb2RhbFN0YWNrLmNsb3NlKG1vZGFsSW5zdGFuY2UsIHJlc3VsdCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRpc21pc3M6IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAkbW9kYWxTdGFjay5kaXNtaXNzKG1vZGFsSW5zdGFuY2UsIHJlYXNvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vbWVyZ2UgYW5kIGNsZWFuIHVwIG9wdGlvbnNcbiAgICAgICAgICAgIG1vZGFsT3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCAkbW9kYWxQcm92aWRlci5vcHRpb25zLCBtb2RhbE9wdGlvbnMpO1xuICAgICAgICAgICAgbW9kYWxPcHRpb25zLnJlc29sdmUgPSBtb2RhbE9wdGlvbnMucmVzb2x2ZSB8fCB7fTtcblxuICAgICAgICAgICAgLy92ZXJpZnkgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKCFtb2RhbE9wdGlvbnMudGVtcGxhdGUgJiYgIW1vZGFsT3B0aW9ucy50ZW1wbGF0ZVVybCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09uZSBvZiB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZVVybCBvcHRpb25zIGlzIHJlcXVpcmVkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVBbmRSZXNvbHZlUHJvbWlzZSA9XG4gICAgICAgICAgICAgICRxLmFsbChbZ2V0VGVtcGxhdGVQcm9taXNlKG1vZGFsT3B0aW9ucyldLmNvbmNhdChnZXRSZXNvbHZlUHJvbWlzZXMobW9kYWxPcHRpb25zLnJlc29sdmUpKSk7XG5cblxuICAgICAgICAgICAgdGVtcGxhdGVBbmRSZXNvbHZlUHJvbWlzZS50aGVuKGZ1bmN0aW9uIHJlc29sdmVTdWNjZXNzKHRwbEFuZFZhcnMpIHtcblxuICAgICAgICAgICAgICB2YXIgbW9kYWxTY29wZSA9IChtb2RhbE9wdGlvbnMuc2NvcGUgfHwgJHJvb3RTY29wZSkuJG5ldygpO1xuICAgICAgICAgICAgICBtb2RhbFNjb3BlLiRjbG9zZSA9IG1vZGFsSW5zdGFuY2UuY2xvc2U7XG4gICAgICAgICAgICAgIG1vZGFsU2NvcGUuJGRpc21pc3MgPSBtb2RhbEluc3RhbmNlLmRpc21pc3M7XG5cbiAgICAgICAgICAgICAgdmFyIGN0cmxJbnN0YW5jZSwgY3RybExvY2FscyA9IHt9O1xuICAgICAgICAgICAgICB2YXIgcmVzb2x2ZUl0ZXIgPSAxO1xuXG4gICAgICAgICAgICAgIC8vY29udHJvbGxlcnNcbiAgICAgICAgICAgICAgaWYgKG1vZGFsT3B0aW9ucy5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY3RybExvY2Fscy4kc2NvcGUgPSBtb2RhbFNjb3BlO1xuICAgICAgICAgICAgICAgIGN0cmxMb2NhbHMuJG1vZGFsSW5zdGFuY2UgPSBtb2RhbEluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChtb2RhbE9wdGlvbnMucmVzb2x2ZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgIGN0cmxMb2NhbHNba2V5XSA9IHRwbEFuZFZhcnNbcmVzb2x2ZUl0ZXIrK107XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjdHJsSW5zdGFuY2UgPSAkY29udHJvbGxlcihtb2RhbE9wdGlvbnMuY29udHJvbGxlciwgY3RybExvY2Fscyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsT3B0aW9ucy5jb250cm9sbGVyQXMpIHtcbiAgICAgICAgICAgICAgICAgIG1vZGFsU2NvcGVbbW9kYWxPcHRpb25zLmNvbnRyb2xsZXJBc10gPSBjdHJsSW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJG1vZGFsU3RhY2sub3Blbihtb2RhbEluc3RhbmNlLCB7XG4gICAgICAgICAgICAgICAgc2NvcGU6IG1vZGFsU2NvcGUsXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQ6IG1vZGFsUmVzdWx0RGVmZXJyZWQsXG4gICAgICAgICAgICAgICAgY29udGVudDogdHBsQW5kVmFyc1swXSxcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogbW9kYWxPcHRpb25zLmJhY2tkcm9wLFxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBtb2RhbE9wdGlvbnMua2V5Ym9hcmQsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3BDbGFzczogbW9kYWxPcHRpb25zLmJhY2tkcm9wQ2xhc3MsXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6IG1vZGFsT3B0aW9ucy53aW5kb3dDbGFzcyxcbiAgICAgICAgICAgICAgICB3aW5kb3dUZW1wbGF0ZVVybDogbW9kYWxPcHRpb25zLndpbmRvd1RlbXBsYXRlVXJsLFxuICAgICAgICAgICAgICAgIHNpemU6IG1vZGFsT3B0aW9ucy5zaXplXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiByZXNvbHZlRXJyb3IocmVhc29uKSB7XG4gICAgICAgICAgICAgIG1vZGFsUmVzdWx0RGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGVtcGxhdGVBbmRSZXNvbHZlUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbW9kYWxPcGVuZWREZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBtb2RhbE9wZW5lZERlZmVycmVkLnJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG1vZGFsSW5zdGFuY2U7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiAkbW9kYWw7XG4gICAgICAgIH1dXG4gICAgfTtcblxuICAgIHJldHVybiAkbW9kYWxQcm92aWRlcjtcbiAgfSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvbW9kYWwvbW9kYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5wcm9ncmVzc2JhcicsIFtdKVxuXG4uY29uc3RhbnQoJ3Byb2dyZXNzQ29uZmlnJywge1xuICBhbmltYXRlOiB0cnVlLFxuICBtYXg6IDEwMFxufSlcblxuLmNvbnRyb2xsZXIoJ1Byb2dyZXNzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICdwcm9ncmVzc0NvbmZpZycsIGZ1bmN0aW9uKCRzY29wZSwgJGF0dHJzLCBwcm9ncmVzc0NvbmZpZykge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYW5pbWF0ZSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5hbmltYXRlKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5hbmltYXRlKSA6IHByb2dyZXNzQ29uZmlnLmFuaW1hdGU7XG5cbiAgICB0aGlzLmJhcnMgPSBbXTtcbiAgICAkc2NvcGUubWF4ID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLm1heCkgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMubWF4KSA6IHByb2dyZXNzQ29uZmlnLm1heDtcblxuICAgIHRoaXMuYWRkQmFyID0gZnVuY3Rpb24oYmFyLCBlbGVtZW50KSB7XG4gICAgICAgIGlmICggIWFuaW1hdGUgKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNzcyh7J3RyYW5zaXRpb24nOiAnbm9uZSd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmFycy5wdXNoKGJhcik7XG5cbiAgICAgICAgYmFyLiR3YXRjaCgndmFsdWUnLCBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgICAgICBiYXIucGVyY2VudCA9ICsoMTAwICogdmFsdWUgLyAkc2NvcGUubWF4KS50b0ZpeGVkKDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBiYXIuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUJhcihiYXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZW1vdmVCYXIgPSBmdW5jdGlvbihiYXIpIHtcbiAgICAgICAgdGhpcy5iYXJzLnNwbGljZSh0aGlzLmJhcnMuaW5kZXhPZihiYXIpLCAxKTtcbiAgICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ3Byb2dyZXNzJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcm9ncmVzc0NvbnRyb2xsZXInLFxuICAgICAgICByZXF1aXJlOiAncHJvZ3Jlc3MnLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3MuaHRtbCdcbiAgICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnYmFyJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHJlcXVpcmU6ICdecHJvZ3Jlc3MnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgdmFsdWU6ICc9JyxcbiAgICAgICAgICAgIHR5cGU6ICdAJ1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3Byb2dyZXNzYmFyL2Jhci5odG1sJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBwcm9ncmVzc0N0cmwpIHtcbiAgICAgICAgICAgIHByb2dyZXNzQ3RybC5hZGRCYXIoc2NvcGUsIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3Byb2dyZXNzYmFyJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcm9ncmVzc0NvbnRyb2xsZXInLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgdmFsdWU6ICc9JyxcbiAgICAgICAgICAgIHR5cGU6ICdAJ1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIHByb2dyZXNzQ3RybCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3NDdHJsLmFkZEJhcihzY29wZSwgYW5ndWxhci5lbGVtZW50KGVsZW1lbnQuY2hpbGRyZW4oKVswXSkpO1xuICAgICAgICB9XG4gICAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnJhdGluZycsIFtdKVxuXG4uY29uc3RhbnQoJ3JhdGluZ0NvbmZpZycsIHtcbiAgbWF4OiA1LFxuICBzdGF0ZU9uOiBudWxsLFxuICBzdGF0ZU9mZjogbnVsbFxufSlcblxuLmNvbnRyb2xsZXIoJ1JhdGluZ0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAncmF0aW5nQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsIHJhdGluZ0NvbmZpZykge1xuICB2YXIgbmdNb2RlbEN0cmwgID0geyAkc2V0Vmlld1ZhbHVlOiBhbmd1bGFyLm5vb3AgfTtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbihuZ01vZGVsQ3RybF8pIHtcbiAgICBuZ01vZGVsQ3RybCA9IG5nTW9kZWxDdHJsXztcbiAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gdGhpcy5yZW5kZXI7XG5cbiAgICB0aGlzLnN0YXRlT24gPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuc3RhdGVPbikgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuc3RhdGVPbikgOiByYXRpbmdDb25maWcuc3RhdGVPbjtcbiAgICB0aGlzLnN0YXRlT2ZmID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnN0YXRlT2ZmKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5zdGF0ZU9mZikgOiByYXRpbmdDb25maWcuc3RhdGVPZmY7XG5cbiAgICB2YXIgcmF0aW5nU3RhdGVzID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnJhdGluZ1N0YXRlcykgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMucmF0aW5nU3RhdGVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJyYXkoIGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5tYXgpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLm1heCkgOiByYXRpbmdDb25maWcubWF4ICk7XG4gICAgJHNjb3BlLnJhbmdlID0gdGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cyhyYXRpbmdTdGF0ZXMpO1xuICB9O1xuXG4gIHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHMgPSBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHN0YXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHN0YXRlc1tpXSA9IGFuZ3VsYXIuZXh0ZW5kKHsgaW5kZXg6IGkgfSwgeyBzdGF0ZU9uOiB0aGlzLnN0YXRlT24sIHN0YXRlT2ZmOiB0aGlzLnN0YXRlT2ZmIH0sIHN0YXRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZXM7XG4gIH07XG5cbiAgJHNjb3BlLnJhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICggISRzY29wZS5yZWFkb25seSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9ICRzY29wZS5yYW5nZS5sZW5ndGggKSB7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKHZhbHVlKTtcbiAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmVudGVyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoICEkc2NvcGUucmVhZG9ubHkgKSB7XG4gICAgICAkc2NvcGUudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgJHNjb3BlLm9uSG92ZXIoe3ZhbHVlOiB2YWx1ZX0pO1xuICB9O1xuXG4gICRzY29wZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS52YWx1ZSA9IG5nTW9kZWxDdHJsLiR2aWV3VmFsdWU7XG4gICAgJHNjb3BlLm9uTGVhdmUoKTtcbiAgfTtcblxuICAkc2NvcGUub25LZXlkb3duID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgaWYgKC8oMzd8Mzh8Mzl8NDApLy50ZXN0KGV2dC53aGljaCkpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJHNjb3BlLnJhdGUoICRzY29wZS52YWx1ZSArIChldnQud2hpY2ggPT09IDM4IHx8IGV2dC53aGljaCA9PT0gMzkgPyAxIDogLTEpICk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnZhbHVlID0gbmdNb2RlbEN0cmwuJHZpZXdWYWx1ZTtcbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCdyYXRpbmcnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXF1aXJlOiBbJ3JhdGluZycsICduZ01vZGVsJ10sXG4gICAgc2NvcGU6IHtcbiAgICAgIHJlYWRvbmx5OiAnPT8nLFxuICAgICAgb25Ib3ZlcjogJyYnLFxuICAgICAgb25MZWF2ZTogJyYnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnUmF0aW5nQ29udHJvbGxlcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9yYXRpbmcvcmF0aW5nLmh0bWwnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIHJhdGluZ0N0cmwgPSBjdHJsc1swXSwgbmdNb2RlbEN0cmwgPSBjdHJsc1sxXTtcblxuICAgICAgaWYgKCBuZ01vZGVsQ3RybCApIHtcbiAgICAgICAgcmF0aW5nQ3RybC5pbml0KCBuZ01vZGVsQ3RybCApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9yYXRpbmcvcmF0aW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIHVpLmJvb3RzdHJhcC50YWJzXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBbmd1bGFySlMgdmVyc2lvbiBvZiB0aGUgdGFicyBkaXJlY3RpdmUuXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC50YWJzJywgW10pXG5cbi5jb250cm9sbGVyKCdUYWJzZXRDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiBUYWJzZXRDdHJsKCRzY29wZSkge1xuICB2YXIgY3RybCA9IHRoaXMsXG4gICAgICB0YWJzID0gY3RybC50YWJzID0gJHNjb3BlLnRhYnMgPSBbXTtcblxuICBjdHJsLnNlbGVjdCA9IGZ1bmN0aW9uKHNlbGVjdGVkVGFiKSB7XG4gICAgYW5ndWxhci5mb3JFYWNoKHRhYnMsIGZ1bmN0aW9uKHRhYikge1xuICAgICAgaWYgKHRhYi5hY3RpdmUgJiYgdGFiICE9PSBzZWxlY3RlZFRhYikge1xuICAgICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRhYi5vbkRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VsZWN0ZWRUYWIuYWN0aXZlID0gdHJ1ZTtcbiAgICBzZWxlY3RlZFRhYi5vblNlbGVjdCgpO1xuICB9O1xuXG4gIGN0cmwuYWRkVGFiID0gZnVuY3Rpb24gYWRkVGFiKHRhYikge1xuICAgIHRhYnMucHVzaCh0YWIpO1xuICAgIC8vIHdlIGNhbid0IHJ1biB0aGUgc2VsZWN0IGZ1bmN0aW9uIG9uIHRoZSBmaXJzdCB0YWJcbiAgICAvLyBzaW5jZSB0aGF0IHdvdWxkIHNlbGVjdCBpdCB0d2ljZVxuICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0YWIuYWN0aXZlKSB7XG4gICAgICBjdHJsLnNlbGVjdCh0YWIpO1xuICAgIH1cbiAgfTtcblxuICBjdHJsLnJlbW92ZVRhYiA9IGZ1bmN0aW9uIHJlbW92ZVRhYih0YWIpIHtcbiAgICB2YXIgaW5kZXggPSB0YWJzLmluZGV4T2YodGFiKTtcbiAgICAvL1NlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXG4gICAgaWYgKHRhYi5hY3RpdmUgJiYgdGFicy5sZW5ndGggPiAxICYmICFkZXN0cm95ZWQpIHtcbiAgICAgIC8vSWYgdGhpcyBpcyB0aGUgbGFzdCB0YWIsIHNlbGVjdCB0aGUgcHJldmlvdXMgdGFiLiBlbHNlLCB0aGUgbmV4dCB0YWIuXG4gICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBpbmRleCA9PSB0YWJzLmxlbmd0aCAtIDEgPyBpbmRleCAtIDEgOiBpbmRleCArIDE7XG4gICAgICBjdHJsLnNlbGVjdCh0YWJzW25ld0FjdGl2ZUluZGV4XSk7XG4gICAgfVxuICAgIHRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICB2YXIgZGVzdHJveWVkO1xuICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gIH0pO1xufV0pXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkuYm9vdHN0cmFwLnRhYnMuZGlyZWN0aXZlOnRhYnNldFxuICogQHJlc3RyaWN0IEVBXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUYWJzZXQgaXMgdGhlIG91dGVyIGNvbnRhaW5lciBmb3IgdGhlIHRhYnMgZGlyZWN0aXZlXG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gdmVydGljYWwgV2hldGhlciBvciBub3QgdG8gdXNlIHZlcnRpY2FsIHN0eWxpbmcgZm9yIHRoZSB0YWJzLlxuICogQHBhcmFtIHtib29sZWFuPX0ganVzdGlmaWVkIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBqdXN0aWZpZWQgc3R5bGluZyBmb3IgdGhlIHRhYnMuXG4gKlxuICogQGV4YW1wbGVcbjxleGFtcGxlIG1vZHVsZT1cInVpLmJvb3RzdHJhcFwiPlxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgIDx0YWJzZXQ+XG4gICAgICA8dGFiIGhlYWRpbmc9XCJUYWIgMVwiPjxiPkZpcnN0PC9iPiBDb250ZW50ITwvdGFiPlxuICAgICAgPHRhYiBoZWFkaW5nPVwiVGFiIDJcIj48aT5TZWNvbmQ8L2k+IENvbnRlbnQhPC90YWI+XG4gICAgPC90YWJzZXQ+XG4gICAgPGhyIC8+XG4gICAgPHRhYnNldCB2ZXJ0aWNhbD1cInRydWVcIj5cbiAgICAgIDx0YWIgaGVhZGluZz1cIlZlcnRpY2FsIFRhYiAxXCI+PGI+Rmlyc3Q8L2I+IFZlcnRpY2FsIENvbnRlbnQhPC90YWI+XG4gICAgICA8dGFiIGhlYWRpbmc9XCJWZXJ0aWNhbCBUYWIgMlwiPjxpPlNlY29uZDwvaT4gVmVydGljYWwgQ29udGVudCE8L3RhYj5cbiAgICA8L3RhYnNldD5cbiAgICA8dGFic2V0IGp1c3RpZmllZD1cInRydWVcIj5cbiAgICAgIDx0YWIgaGVhZGluZz1cIkp1c3RpZmllZCBUYWIgMVwiPjxiPkZpcnN0PC9iPiBKdXN0aWZpZWQgQ29udGVudCE8L3RhYj5cbiAgICAgIDx0YWIgaGVhZGluZz1cIkp1c3RpZmllZCBUYWIgMlwiPjxpPlNlY29uZDwvaT4gSnVzdGlmaWVkIENvbnRlbnQhPC90YWI+XG4gICAgPC90YWJzZXQ+XG4gIDwvZmlsZT5cbjwvZXhhbXBsZT5cbiAqL1xuLmRpcmVjdGl2ZSgndGFic2V0JywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHNjb3BlOiB7XG4gICAgICB0eXBlOiAnQCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdUYWJzZXRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3RhYnMvdGFic2V0Lmh0bWwnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgc2NvcGUudmVydGljYWwgPSBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy52ZXJ0aWNhbCkgPyBzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLnZlcnRpY2FsKSA6IGZhbHNlO1xuICAgICAgc2NvcGUuanVzdGlmaWVkID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuanVzdGlmaWVkKSA/IHNjb3BlLiRwYXJlbnQuJGV2YWwoYXR0cnMuanVzdGlmaWVkKSA6IGZhbHNlO1xuICAgIH1cbiAgfTtcbn0pXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgdWkuYm9vdHN0cmFwLnRhYnMuZGlyZWN0aXZlOnRhYlxuICogQHJlc3RyaWN0IEVBXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBoZWFkaW5nIFRoZSB2aXNpYmxlIGhlYWRpbmcsIG9yIHRpdGxlLCBvZiB0aGUgdGFiLiBTZXQgSFRNTCBoZWFkaW5ncyB3aXRoIHtAbGluayB1aS5ib290c3RyYXAudGFicy5kaXJlY3RpdmU6dGFiSGVhZGluZyB0YWJIZWFkaW5nfS5cbiAqIEBwYXJhbSB7c3RyaW5nPX0gc2VsZWN0IEFuIGV4cHJlc3Npb24gdG8gZXZhbHVhdGUgd2hlbiB0aGUgdGFiIGlzIHNlbGVjdGVkLlxuICogQHBhcmFtIHtib29sZWFuPX0gYWN0aXZlIEEgYmluZGluZywgdGVsbGluZyB3aGV0aGVyIG9yIG5vdCB0aGlzIHRhYiBpcyBzZWxlY3RlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGRpc2FibGVkIEEgYmluZGluZywgdGVsbGluZyB3aGV0aGVyIG9yIG5vdCB0aGlzIHRhYiBpcyBkaXNhYmxlZC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYSB0YWIgd2l0aCBhIGhlYWRpbmcgYW5kIGNvbnRlbnQuIE11c3QgYmUgcGxhY2VkIHdpdGhpbiBhIHtAbGluayB1aS5ib290c3RyYXAudGFicy5kaXJlY3RpdmU6dGFic2V0IHRhYnNldH0uXG4gKlxuICogQGV4YW1wbGVcbjxleGFtcGxlIG1vZHVsZT1cInVpLmJvb3RzdHJhcFwiPlxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgIDxkaXYgbmctY29udHJvbGxlcj1cIlRhYnNEZW1vQ3RybFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc21hbGxcIiBuZy1jbGljaz1cIml0ZW1zWzBdLmFjdGl2ZSA9IHRydWVcIj5cbiAgICAgICAgU2VsZWN0IGl0ZW0gMSwgdXNpbmcgYWN0aXZlIGJpbmRpbmdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc21hbGxcIiBuZy1jbGljaz1cIml0ZW1zWzFdLmRpc2FibGVkID0gIWl0ZW1zWzFdLmRpc2FibGVkXCI+XG4gICAgICAgIEVuYWJsZS9kaXNhYmxlIGl0ZW0gMiwgdXNpbmcgZGlzYWJsZWQgYmluZGluZ1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIDx0YWJzZXQ+XG4gICAgICAgIDx0YWIgaGVhZGluZz1cIlRhYiAxXCI+Rmlyc3QgVGFiPC90YWI+XG4gICAgICAgIDx0YWIgc2VsZWN0PVwiYWxlcnRNZSgpXCI+XG4gICAgICAgICAgPHRhYi1oZWFkaW5nPjxpIGNsYXNzPVwiaWNvbi1iZWxsXCI+PC9pPiBBbGVydCBtZSE8L3RhYi1oZWFkaW5nPlxuICAgICAgICAgIFNlY29uZCBUYWIsIHdpdGggYWxlcnQgY2FsbGJhY2sgYW5kIGh0bWwgaGVhZGluZyFcbiAgICAgICAgPC90YWI+XG4gICAgICAgIDx0YWIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiXG4gICAgICAgICAgaGVhZGluZz1cInt7aXRlbS50aXRsZX19XCJcbiAgICAgICAgICBkaXNhYmxlZD1cIml0ZW0uZGlzYWJsZWRcIlxuICAgICAgICAgIGFjdGl2ZT1cIml0ZW0uYWN0aXZlXCI+XG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxuICAgICAgICA8L3RhYj5cbiAgICAgIDwvdGFic2V0PlxuICAgIDwvZGl2PlxuICA8L2ZpbGU+XG4gIDxmaWxlIG5hbWU9XCJzY3JpcHQuanNcIj5cbiAgICBmdW5jdGlvbiBUYWJzRGVtb0N0cmwoJHNjb3BlKSB7XG4gICAgICAkc2NvcGUuaXRlbXMgPSBbXG4gICAgICAgIHsgdGl0bGU6XCJEeW5hbWljIFRpdGxlIDFcIiwgY29udGVudDpcIkR5bmFtaWMgSXRlbSAwXCIgfSxcbiAgICAgICAgeyB0aXRsZTpcIkR5bmFtaWMgVGl0bGUgMlwiLCBjb250ZW50OlwiRHluYW1pYyBJdGVtIDFcIiwgZGlzYWJsZWQ6IHRydWUgfVxuICAgICAgXTtcblxuICAgICAgJHNjb3BlLmFsZXJ0TWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBhbGVydChcIllvdSd2ZSBzZWxlY3RlZCB0aGUgYWxlcnQgdGFiIVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG4gIDwvZmlsZT5cbjwvZXhhbXBsZT5cbiAqL1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLmJvb3RzdHJhcC50YWJzLmRpcmVjdGl2ZTp0YWJIZWFkaW5nXG4gKiBAcmVzdHJpY3QgRUFcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYW4gSFRNTCBoZWFkaW5nIGZvciBhIHtAbGluayB1aS5ib290c3RyYXAudGFicy5kaXJlY3RpdmU6dGFiIHRhYn0uIE11c3QgYmUgcGxhY2VkIGFzIGEgY2hpbGQgb2YgYSB0YWIgZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuPGV4YW1wbGUgbW9kdWxlPVwidWkuYm9vdHN0cmFwXCI+XG4gIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XG4gICAgPHRhYnNldD5cbiAgICAgIDx0YWI+XG4gICAgICAgIDx0YWItaGVhZGluZz48Yj5IVE1MPC9iPiBpbiBteSB0aXRsZXM/ITwvdGFiLWhlYWRpbmc+XG4gICAgICAgIEFuZCBzb21lIGNvbnRlbnQsIHRvbyFcbiAgICAgIDwvdGFiPlxuICAgICAgPHRhYj5cbiAgICAgICAgPHRhYi1oZWFkaW5nPjxpIGNsYXNzPVwiaWNvbi1oZWFydFwiPjwvaT4gSWNvbiBoZWFkaW5nPyE/PC90YWItaGVhZGluZz5cbiAgICAgICAgVGhhdCdzIHJpZ2h0LlxuICAgICAgPC90YWI+XG4gICAgPC90YWJzZXQ+XG4gIDwvZmlsZT5cbjwvZXhhbXBsZT5cbiAqL1xuLmRpcmVjdGl2ZSgndGFiJywgWyckcGFyc2UnLCBmdW5jdGlvbigkcGFyc2UpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiAnXnRhYnNldCcsXG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3RhYnMvdGFiLmh0bWwnLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGFjdGl2ZTogJz0/JyxcbiAgICAgIGhlYWRpbmc6ICdAJyxcbiAgICAgIG9uU2VsZWN0OiAnJnNlbGVjdCcsIC8vVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgaW4gY29udGVudEhlYWRpbmdUcmFuc2NsdWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25jZSBpdCBpbnNlcnRzIHRoZSB0YWIncyBjb250ZW50IGludG8gdGhlIGRvbVxuICAgICAgb25EZXNlbGVjdDogJyZkZXNlbGVjdCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgLy9FbXB0eSBjb250cm9sbGVyIHNvIG90aGVyIGRpcmVjdGl2ZXMgY2FuIHJlcXVpcmUgYmVpbmcgJ3VuZGVyJyBhIHRhYlxuICAgIH0sXG4gICAgY29tcGlsZTogZnVuY3Rpb24oZWxtLCBhdHRycywgdHJhbnNjbHVkZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbG0sIGF0dHJzLCB0YWJzZXRDdHJsKSB7XG4gICAgICAgIHNjb3BlLiR3YXRjaCgnYWN0aXZlJywgZnVuY3Rpb24oYWN0aXZlKSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgdGFic2V0Q3RybC5zZWxlY3Qoc2NvcGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCBhdHRycy5kaXNhYmxlZCApIHtcbiAgICAgICAgICBzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoYXR0cnMuZGlzYWJsZWQpLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgc2NvcGUuZGlzYWJsZWQgPSAhISB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICggIXNjb3BlLmRpc2FibGVkICkge1xuICAgICAgICAgICAgc2NvcGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGFic2V0Q3RybC5hZGRUYWIoc2NvcGUpO1xuICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGFic2V0Q3RybC5yZW1vdmVUYWIoc2NvcGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1dlIG5lZWQgdG8gdHJhbnNjbHVkZSBsYXRlciwgb25jZSB0aGUgY29udGVudCBjb250YWluZXIgaXMgcmVhZHkuXG4gICAgICAgIC8vd2hlbiB0aGlzIGxpbmsgaGFwcGVucywgd2UncmUgaW5zaWRlIGEgdGFiIGhlYWRpbmcuXG4gICAgICAgIHNjb3BlLiR0cmFuc2NsdWRlRm4gPSB0cmFuc2NsdWRlO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSgndGFiSGVhZGluZ1RyYW5zY2x1ZGUnLCBbZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnXnRhYicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMsIHRhYkN0cmwpIHtcbiAgICAgIHNjb3BlLiR3YXRjaCgnaGVhZGluZ0VsZW1lbnQnLCBmdW5jdGlvbiB1cGRhdGVIZWFkaW5nRWxlbWVudChoZWFkaW5nKSB7XG4gICAgICAgIGlmIChoZWFkaW5nKSB7XG4gICAgICAgICAgZWxtLmh0bWwoJycpO1xuICAgICAgICAgIGVsbS5hcHBlbmQoaGVhZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd0YWJDb250ZW50VHJhbnNjbHVkZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ150YWJzZXQnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XG4gICAgICB2YXIgdGFiID0gc2NvcGUuJGV2YWwoYXR0cnMudGFiQ29udGVudFRyYW5zY2x1ZGUpO1xuXG4gICAgICAvL05vdyBvdXIgdGFiIGlzIHJlYWR5IHRvIGJlIHRyYW5zY2x1ZGVkOiBib3RoIHRoZSB0YWIgaGVhZGluZyBhcmVhXG4gICAgICAvL2FuZCB0aGUgdGFiIGNvbnRlbnQgYXJlYSBhcmUgbG9hZGVkLiAgVHJhbnNjbHVkZSAnZW0gYm90aC5cbiAgICAgIHRhYi4kdHJhbnNjbHVkZUZuKHRhYi4kcGFyZW50LCBmdW5jdGlvbihjb250ZW50cykge1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goY29udGVudHMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICBpZiAoaXNUYWJIZWFkaW5nKG5vZGUpKSB7XG4gICAgICAgICAgICAvL0xldCB0YWJIZWFkaW5nVHJhbnNjbHVkZSBrbm93LlxuICAgICAgICAgICAgdGFiLmhlYWRpbmdFbGVtZW50ID0gbm9kZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmFwcGVuZChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBpc1RhYkhlYWRpbmcobm9kZSkge1xuICAgIHJldHVybiBub2RlLnRhZ05hbWUgJiYgIChcbiAgICAgIG5vZGUuaGFzQXR0cmlidXRlKCd0YWItaGVhZGluZycpIHx8XG4gICAgICBub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10YWItaGVhZGluZycpIHx8XG4gICAgICBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RhYi1oZWFkaW5nJyB8fFxuICAgICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkYXRhLXRhYi1oZWFkaW5nJ1xuICAgICk7XG4gIH1cbn0pXG5cbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy90YWJzL3RhYnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC50cmFuc2l0aW9uJywgW10pXG5cbi8qKlxuICogJHRyYW5zaXRpb24gc2VydmljZSBwcm92aWRlcyBhIGNvbnNpc3RlbnQgaW50ZXJmYWNlIHRvIHRyaWdnZXIgQ1NTIDMgdHJhbnNpdGlvbnMgYW5kIHRvIGJlIGluZm9ybWVkIHdoZW4gdGhleSBjb21wbGV0ZS5cbiAqIEBwYXJhbSAge0RPTUVsZW1lbnR9IGVsZW1lbnQgIFRoZSBET01FbGVtZW50IHRoYXQgd2lsbCBiZSBhbmltYXRlZC5cbiAqIEBwYXJhbSAge3N0cmluZ3xvYmplY3R8ZnVuY3Rpb259IHRyaWdnZXIgIFRoZSB0aGluZyB0aGF0IHdpbGwgY2F1c2UgdGhlIHRyYW5zaXRpb24gdG8gc3RhcnQ6XG4gKiAgIC0gQXMgYSBzdHJpbmcsIGl0IHJlcHJlc2VudHMgdGhlIGNzcyBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZWxlbWVudC5cbiAqICAgLSBBcyBhbiBvYmplY3QsIGl0IHJlcHJlc2VudHMgYSBoYXNoIG9mIHN0eWxlIGF0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudC5cbiAqICAgLSBBcyBhIGZ1bmN0aW9uLCBpdCByZXByZXNlbnRzIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRoYXQgd2lsbCBjYXVzZSB0aGUgdHJhbnNpdGlvbiB0byBvY2N1ci5cbiAqIEByZXR1cm4ge1Byb21pc2V9ICBBIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGZpbmlzaGVzLlxuICovXG4uZmFjdG9yeSgnJHRyYW5zaXRpb24nLCBbJyRxJywgJyR0aW1lb3V0JywgJyRyb290U2NvcGUnLCBmdW5jdGlvbigkcSwgJHRpbWVvdXQsICRyb290U2NvcGUpIHtcblxuICB2YXIgJHRyYW5zaXRpb24gPSBmdW5jdGlvbihlbGVtZW50LCB0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICB2YXIgZW5kRXZlbnROYW1lID0gJHRyYW5zaXRpb25bb3B0aW9ucy5hbmltYXRpb24gPyAnYW5pbWF0aW9uRW5kRXZlbnROYW1lJyA6ICd0cmFuc2l0aW9uRW5kRXZlbnROYW1lJ107XG5cbiAgICB2YXIgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgJHJvb3RTY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQudW5iaW5kKGVuZEV2ZW50TmFtZSwgdHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmIChlbmRFdmVudE5hbWUpIHtcbiAgICAgIGVsZW1lbnQuYmluZChlbmRFdmVudE5hbWUsIHRyYW5zaXRpb25FbmRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBXcmFwIGluIGEgdGltZW91dCB0byBhbGxvdyB0aGUgYnJvd3NlciB0aW1lIHRvIHVwZGF0ZSB0aGUgRE9NIGJlZm9yZSB0aGUgdHJhbnNpdGlvbiBpcyB0byBvY2N1clxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBhbmd1bGFyLmlzU3RyaW5nKHRyaWdnZXIpICkge1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKHRyaWdnZXIpO1xuICAgICAgfSBlbHNlIGlmICggYW5ndWxhci5pc0Z1bmN0aW9uKHRyaWdnZXIpICkge1xuICAgICAgICB0cmlnZ2VyKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmICggYW5ndWxhci5pc09iamVjdCh0cmlnZ2VyKSApIHtcbiAgICAgICAgZWxlbWVudC5jc3ModHJpZ2dlcik7XG4gICAgICB9XG4gICAgICAvL0lmIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0cmFuc2l0aW9ucywgaW5zdGFudGx5IHJlc29sdmVcbiAgICAgIGlmICggIWVuZEV2ZW50TmFtZSApIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBvdXIgY3VzdG9tIGNhbmNlbCBmdW5jdGlvbiB0byB0aGUgcHJvbWlzZSB0aGF0IGlzIHJldHVybmVkXG4gICAgLy8gV2UgY2FuIGNhbGwgdGhpcyBpZiB3ZSBhcmUgYWJvdXQgdG8gcnVuIGEgbmV3IHRyYW5zaXRpb24sIHdoaWNoIHdlIGtub3cgd2lsbCBwcmV2ZW50IHRoaXMgdHJhbnNpdGlvbiBmcm9tIGVuZGluZyxcbiAgICAvLyBpLmUuIGl0IHdpbGwgdGhlcmVmb3JlIG5ldmVyIHJhaXNlIGEgdHJhbnNpdGlvbkVuZCBldmVudCBmb3IgdGhhdCB0cmFuc2l0aW9uXG4gICAgZGVmZXJyZWQucHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggZW5kRXZlbnROYW1lICkge1xuICAgICAgICBlbGVtZW50LnVuYmluZChlbmRFdmVudE5hbWUsIHRyYW5zaXRpb25FbmRIYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIGRlZmVycmVkLnJlamVjdCgnVHJhbnNpdGlvbiBjYW5jZWxsZWQnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgLy8gV29yayBvdXQgdGhlIG5hbWUgb2YgdGhlIHRyYW5zaXRpb25FbmQgZXZlbnRcbiAgdmFyIHRyYW5zRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyYW5zJyk7XG4gIHZhciB0cmFuc2l0aW9uRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnXG4gIH07XG4gIHZhciBhbmltYXRpb25FbmRFdmVudE5hbWVzID0ge1xuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ01velRyYW5zaXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgJ3RyYW5zaXRpb24nOiAnYW5pbWF0aW9uZW5kJ1xuICB9O1xuICBmdW5jdGlvbiBmaW5kRW5kRXZlbnROYW1lKGVuZEV2ZW50TmFtZXMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIGVuZEV2ZW50TmFtZXMpe1xuICAgICAgaWYgKHRyYW5zRWxlbWVudC5zdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBlbmRFdmVudE5hbWVzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAkdHJhbnNpdGlvbi50cmFuc2l0aW9uRW5kRXZlbnROYW1lID0gZmluZEVuZEV2ZW50TmFtZSh0cmFuc2l0aW9uRW5kRXZlbnROYW1lcyk7XG4gICR0cmFuc2l0aW9uLmFuaW1hdGlvbkVuZEV2ZW50TmFtZSA9IGZpbmRFbmRFdmVudE5hbWUoYW5pbWF0aW9uRW5kRXZlbnROYW1lcyk7XG4gIHJldHVybiAkdHJhbnNpdGlvbjtcbn1dKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5wb3NpdGlvbicsIFtdKVxuXG4vKipcbiAqIEEgc2V0IG9mIHV0aWxpdHkgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2UgdG8gcmV0cmlldmUgcG9zaXRpb24gb2YgRE9NIGVsZW1lbnRzLlxuICogSXQgaXMgbWVhbnQgdG8gYmUgdXNlZCB3aGVyZSB3ZSBuZWVkIHRvIGFic29sdXRlLXBvc2l0aW9uIERPTSBlbGVtZW50cyBpblxuICogcmVsYXRpb24gdG8gb3RoZXIsIGV4aXN0aW5nIGVsZW1lbnRzICh0aGlzIGlzIHRoZSBjYXNlIGZvciB0b29sdGlwcywgcG9wb3ZlcnMsXG4gKiB0eXBlYWhlYWQgc3VnZ2VzdGlvbnMgZXRjLikuXG4gKi9cbiAgLmZhY3RvcnkoJyRwb3NpdGlvbicsIFsnJGRvY3VtZW50JywgJyR3aW5kb3cnLCBmdW5jdGlvbiAoJGRvY3VtZW50LCAkd2luZG93KSB7XG5cbiAgICBmdW5jdGlvbiBnZXRTdHlsZShlbCwgY3NzcHJvcCkge1xuICAgICAgaWYgKGVsLmN1cnJlbnRTdHlsZSkgeyAvL0lFXG4gICAgICAgIHJldHVybiBlbC5jdXJyZW50U3R5bGVbY3NzcHJvcF07XG4gICAgICB9IGVsc2UgaWYgKCR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICByZXR1cm4gJHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVtjc3Nwcm9wXTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbmFsbHkgdHJ5IGFuZCBnZXQgaW5saW5lIHN0eWxlXG4gICAgICByZXR1cm4gZWwuc3R5bGVbY3NzcHJvcF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGEgZ2l2ZW4gZWxlbWVudCBpcyBzdGF0aWNhbGx5IHBvc2l0aW9uZWRcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIHJhdyBET00gZWxlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU3RhdGljUG9zaXRpb25lZChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gKGdldFN0eWxlKGVsZW1lbnQsICdwb3NpdGlvbicpIHx8ICdzdGF0aWMnICkgPT09ICdzdGF0aWMnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIGNsb3Nlc3QsIG5vbi1zdGF0aWNhbGx5IHBvc2l0aW9uZWQgcGFyZW50T2Zmc2V0IG9mIGEgZ2l2ZW4gZWxlbWVudFxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgdmFyIHBhcmVudE9mZnNldEVsID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHZhciBkb2NEb21FbCA9ICRkb2N1bWVudFswXTtcbiAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2NEb21FbDtcbiAgICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSBkb2NEb21FbCAmJiBpc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSApIHtcbiAgICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jRG9tRWw7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIHJlYWQtb25seSBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIHBvc2l0aW9uIGZ1bmN0aW9uOlxuICAgICAgICogaHR0cDovL2FwaS5qcXVlcnkuY29tL3Bvc2l0aW9uL1xuICAgICAgICovXG4gICAgICBwb3NpdGlvbjogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsQkNSID0gdGhpcy5vZmZzZXQoZWxlbWVudCk7XG4gICAgICAgIHZhciBvZmZzZXRQYXJlbnRCQ1IgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICAgICAgICB2YXIgb2Zmc2V0UGFyZW50RWwgPSBwYXJlbnRPZmZzZXRFbChlbGVtZW50WzBdKTtcbiAgICAgICAgaWYgKG9mZnNldFBhcmVudEVsICE9ICRkb2N1bWVudFswXSkge1xuICAgICAgICAgIG9mZnNldFBhcmVudEJDUiA9IHRoaXMub2Zmc2V0KGFuZ3VsYXIuZWxlbWVudChvZmZzZXRQYXJlbnRFbCkpO1xuICAgICAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xuICAgICAgICAgIG9mZnNldFBhcmVudEJDUi5sZWZ0ICs9IG9mZnNldFBhcmVudEVsLmNsaWVudExlZnQgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBlbGVtZW50LnByb3AoJ29mZnNldFdpZHRoJyksXG4gICAgICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IGVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0JyksXG4gICAgICAgICAgdG9wOiBlbEJDUi50b3AgLSBvZmZzZXRQYXJlbnRCQ1IudG9wLFxuICAgICAgICAgIGxlZnQ6IGVsQkNSLmxlZnQgLSBvZmZzZXRQYXJlbnRCQ1IubGVmdFxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyByZWFkLW9ubHkgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBvZmZzZXQgZnVuY3Rpb246XG4gICAgICAgKiBodHRwOi8vYXBpLmpxdWVyeS5jb20vb2Zmc2V0L1xuICAgICAgICovXG4gICAgICBvZmZzZXQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSBlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgZWxlbWVudC5wcm9wKCdvZmZzZXRXaWR0aCcpLFxuICAgICAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBlbGVtZW50LnByb3AoJ29mZnNldEhlaWdodCcpLFxuICAgICAgICAgIHRvcDogYm91bmRpbmdDbGllbnRSZWN0LnRvcCArICgkd2luZG93LnBhZ2VZT2Zmc2V0IHx8ICRkb2N1bWVudFswXS5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSxcbiAgICAgICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArICgkd2luZG93LnBhZ2VYT2Zmc2V0IHx8ICRkb2N1bWVudFswXS5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdClcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdmlkZXMgY29vcmRpbmF0ZXMgZm9yIHRoZSB0YXJnZXRFbCBpbiByZWxhdGlvbiB0byBob3N0RWxcbiAgICAgICAqL1xuICAgICAgcG9zaXRpb25FbGVtZW50czogZnVuY3Rpb24gKGhvc3RFbCwgdGFyZ2V0RWwsIHBvc2l0aW9uU3RyLCBhcHBlbmRUb0JvZHkpIHtcblxuICAgICAgICB2YXIgcG9zaXRpb25TdHJQYXJ0cyA9IHBvc2l0aW9uU3RyLnNwbGl0KCctJyk7XG4gICAgICAgIHZhciBwb3MwID0gcG9zaXRpb25TdHJQYXJ0c1swXSwgcG9zMSA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcic7XG5cbiAgICAgICAgdmFyIGhvc3RFbFBvcyxcbiAgICAgICAgICB0YXJnZXRFbFdpZHRoLFxuICAgICAgICAgIHRhcmdldEVsSGVpZ2h0LFxuICAgICAgICAgIHRhcmdldEVsUG9zO1xuXG4gICAgICAgIGhvc3RFbFBvcyA9IGFwcGVuZFRvQm9keSA/IHRoaXMub2Zmc2V0KGhvc3RFbCkgOiB0aGlzLnBvc2l0aW9uKGhvc3RFbCk7XG5cbiAgICAgICAgdGFyZ2V0RWxXaWR0aCA9IHRhcmdldEVsLnByb3AoJ29mZnNldFdpZHRoJyk7XG4gICAgICAgIHRhcmdldEVsSGVpZ2h0ID0gdGFyZ2V0RWwucHJvcCgnb2Zmc2V0SGVpZ2h0Jyk7XG5cbiAgICAgICAgdmFyIHNoaWZ0V2lkdGggPSB7XG4gICAgICAgICAgY2VudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQgKyBob3N0RWxQb3Mud2lkdGggLyAyIC0gdGFyZ2V0RWxXaWR0aCAvIDI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2hpZnRIZWlnaHQgPSB7XG4gICAgICAgICAgY2VudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcCArIGhvc3RFbFBvcy5oZWlnaHQgLyAyIC0gdGFyZ2V0RWxIZWlnaHQgLyAyO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvdHRvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzd2l0Y2ggKHBvczApIHtcbiAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxuICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczBdKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W3BvczFdKCksXG4gICAgICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0IC0gdGFyZ2V0RWxXaWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MwXSgpLFxuICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCAtIHRhcmdldEVsSGVpZ2h0LFxuICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRFbFBvcztcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvcG9zaXRpb24vcG9zaXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbWdjcmVhLm5nU3RyYXAuaGVscGVycy5kaW1lbnNpb25zJywgW10pXG5cbiAgLmZhY3RvcnkoJ2RpbWVuc2lvbnMnLCBmdW5jdGlvbigkZG9jdW1lbnQsICR3aW5kb3cpIHtcblxuICAgIHZhciBqcUxpdGUgPSBhbmd1bGFyLmVsZW1lbnQ7XG4gICAgdmFyIGZuID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUZXN0IHRoZSBlbGVtZW50IG5vZGVOYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIHZhciBub2RlTmFtZSA9IGZuLm5vZGVOYW1lID0gZnVuY3Rpb24oZWxlbWVudCwgbmFtZSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUgJiYgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgY29tcHV0ZWQgc3R5bGVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBwcm9wXG4gICAgICogQHBhcmFtIGV4dHJhXG4gICAgICovXG4gICAgZm4uY3NzID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcCwgZXh0cmEpIHtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIGlmIChlbGVtZW50LmN1cnJlbnRTdHlsZSkgeyAvL0lFXG4gICAgICAgIHZhbHVlID0gZWxlbWVudC5jdXJyZW50U3R5bGVbcHJvcF07XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICAgIHZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcHJvcF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGVsZW1lbnQuc3R5bGVbcHJvcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmEgPT09IHRydWUgPyBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwIDogdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIHJlYWQtb25seSBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIG9mZnNldCBmdW5jdGlvbjpcbiAgICAgKiBAcmVxdWlyZWQtYnkgYm9vdHN0cmFwLXRvb2x0aXAsIGJvb3RzdHJhcC1hZmZpeFxuICAgICAqIEB1cmwgaHR0cDovL2FwaS5qcXVlcnkuY29tL29mZnNldC9cbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGZuLm9mZnNldCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBib3hSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBkb2NFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGJveFJlY3Qud2lkdGggfHwgZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBib3hSZWN0LmhlaWdodCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgdG9wOiBib3hSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWxlbWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSAtIChkb2NFbGVtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgMCksXG4gICAgICAgIGxlZnQ6IGJveFJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWxlbWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCkgLSAoZG9jRWxlbWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCAwKVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgcmVhZC1vbmx5IGVxdWl2YWxlbnQgb2YgalF1ZXJ5J3MgcG9zaXRpb24gZnVuY3Rpb25cbiAgICAgKiBAcmVxdWlyZWQtYnkgYm9vdHN0cmFwLXRvb2x0aXAsIGJvb3RzdHJhcC1hZmZpeFxuICAgICAqIEB1cmwgaHR0cDovL2FwaS5qcXVlcnkuY29tL29mZnNldC9cbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGZuLnBvc2l0aW9uID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IHt0b3A6IDAsIGxlZnQ6IDB9LFxuICAgICAgICAgIG9mZnNldFBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgb2Zmc2V0O1xuXG4gICAgICAvLyBGaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gd2luZG93IChwYXJlbnRPZmZzZXQgPSB7dG9wOjAsIGxlZnQ6IDB9LCBiZWNhdXNlIGl0IGlzIGl0J3Mgb25seSBvZmZzZXQgcGFyZW50XG4gICAgICBpZiAoZm4uY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG5cbiAgICAgICAgLy8gV2UgYXNzdW1lIHRoYXQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIGF2YWlsYWJsZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgICAgIG9mZnNldCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gR2V0ICpyZWFsKiBvZmZzZXRQYXJlbnRFbGVtZW50XG4gICAgICAgIG9mZnNldFBhcmVudEVsZW1lbnQgPSBvZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gR2V0IGNvcnJlY3Qgb2Zmc2V0c1xuICAgICAgICBvZmZzZXQgPSBmbi5vZmZzZXQoZWxlbWVudCk7XG4gICAgICAgIGlmICghbm9kZU5hbWUob2Zmc2V0UGFyZW50RWxlbWVudCwgJ2h0bWwnKSkge1xuICAgICAgICAgIG9mZnNldFBhcmVudFJlY3QgPSBmbi5vZmZzZXQob2Zmc2V0UGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICAgICAgb2Zmc2V0UGFyZW50UmVjdC50b3AgKz0gZm4uY3NzKG9mZnNldFBhcmVudEVsZW1lbnQsICdib3JkZXJUb3BXaWR0aCcsIHRydWUpO1xuICAgICAgICBvZmZzZXRQYXJlbnRSZWN0LmxlZnQgKz0gZm4uY3NzKG9mZnNldFBhcmVudEVsZW1lbnQsICdib3JkZXJMZWZ0V2lkdGgnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIHRvcDogb2Zmc2V0LnRvcCAtIG9mZnNldFBhcmVudFJlY3QudG9wIC0gZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5Ub3AnLCB0cnVlKSxcbiAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBvZmZzZXRQYXJlbnRSZWN0LmxlZnQgLSBmbi5jc3MoZWxlbWVudCwgJ21hcmdpbkxlZnQnLCB0cnVlKVxuICAgICAgfTtcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjbG9zZXN0LCBub24tc3RhdGljYWxseSBwb3NpdGlvbmVkIG9mZnNldFBhcmVudCBvZiBhIGdpdmVuIGVsZW1lbnRcbiAgICAgKiBAcmVxdWlyZWQtYnkgZm4ucG9zaXRpb25cbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBmdW5jdGlvbiBvZmZzZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBkb2NFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IGRvY0VsZW1lbnQ7XG4gICAgICBpZihub2RlTmFtZShvZmZzZXRQYXJlbnQsICcjZG9jdW1lbnQnKSkgcmV0dXJuIGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgd2hpbGUob2Zmc2V0UGFyZW50ICYmICFub2RlTmFtZShvZmZzZXRQYXJlbnQsICdodG1sJykgJiYgZm4uY3NzKG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIGhlaWdodCBmdW5jdGlvblxuICAgICAqIEByZXF1aXJlZC1ieSBib290c3RyYXAtYWZmaXhcbiAgICAgKiBAdXJsIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9oZWlnaHQvXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gb3V0ZXJcbiAgICAgKi9cbiAgICBmbi5oZWlnaHQgPSBmdW5jdGlvbihlbGVtZW50LCBvdXRlcikge1xuICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZihvdXRlcikge1xuICAgICAgICB2YWx1ZSArPSBmbi5jc3MoZWxlbWVudCwgJ21hcmdpblRvcCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5Cb3R0b20nLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlIC09IGZuLmNzcyhlbGVtZW50LCAncGFkZGluZ1RvcCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdwYWRkaW5nQm90dG9tJywgdHJ1ZSkgKyBmbi5jc3MoZWxlbWVudCwgJ2JvcmRlclRvcFdpZHRoJywgdHJ1ZSkgKyBmbi5jc3MoZWxlbWVudCwgJ2JvcmRlckJvdHRvbVdpZHRoJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGVxdWl2YWxlbnQgb2YgalF1ZXJ5J3Mgd2lkdGggZnVuY3Rpb25cbiAgICAgKiBAcmVxdWlyZWQtYnkgYm9vdHN0cmFwLWFmZml4XG4gICAgICogQHVybCBodHRwOi8vYXBpLmpxdWVyeS5jb20vd2lkdGgvXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gb3V0ZXJcbiAgICAgKi9cbiAgICBmbi53aWR0aCA9IGZ1bmN0aW9uKGVsZW1lbnQsIG91dGVyKSB7XG4gICAgICB2YXIgdmFsdWUgPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgaWYob3V0ZXIpIHtcbiAgICAgICAgdmFsdWUgKz0gZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5MZWZ0JywgdHJ1ZSkgKyBmbi5jc3MoZWxlbWVudCwgJ21hcmdpblJpZ2h0JywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSAtPSBmbi5jc3MoZWxlbWVudCwgJ3BhZGRpbmdMZWZ0JywgdHJ1ZSkgKyBmbi5jc3MoZWxlbWVudCwgJ3BhZGRpbmdSaWdodCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdib3JkZXJMZWZ0V2lkdGgnLCB0cnVlKSArIGZuLmNzcyhlbGVtZW50LCAnYm9yZGVyUmlnaHRXaWR0aCcsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm47XG5cbiAgfSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXN0cmFwL3NyYy9oZWxwZXJzL2RpbWVuc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbWdjcmVhLm5nU3RyYXAucG9wb3ZlcicsIFsnbWdjcmVhLm5nU3RyYXAudG9vbHRpcCddKVxuXG4gIC5wcm92aWRlcignJHBvcG92ZXInLCBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBhbmltYXRpb246ICdhbS1mYWRlJyxcbiAgICAgIGN1c3RvbUNsYXNzOiAnJyxcbiAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICB0YXJnZXQ6IGZhbHNlLFxuICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgdGVtcGxhdGU6ICdwb3BvdmVyL3BvcG92ZXIudHBsLmh0bWwnLFxuICAgICAgY29udGVudFRlbXBsYXRlOiBmYWxzZSxcbiAgICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgIGh0bWw6IGZhbHNlLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogJycsXG4gICAgICBkZWxheTogMCxcbiAgICAgIGF1dG9DbG9zZTogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy4kZ2V0ID0gZnVuY3Rpb24oJHRvb2x0aXApIHtcblxuICAgICAgZnVuY3Rpb24gUG9wb3ZlckZhY3RvcnkoZWxlbWVudCwgY29uZmlnKSB7XG5cbiAgICAgICAgLy8gQ29tbW9uIHZhcnNcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgICAgICAgdmFyICRwb3BvdmVyID0gJHRvb2x0aXAoZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gU3VwcG9ydCBzY29wZSBhcyBzdHJpbmcgb3B0aW9ucyBbLyp0aXRsZSwgKi9jb250ZW50XVxuICAgICAgICBpZihvcHRpb25zLmNvbnRlbnQpIHtcbiAgICAgICAgICAkcG9wb3Zlci4kc2NvcGUuY29udGVudCA9IG9wdGlvbnMuY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkcG9wb3ZlcjtcblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUG9wb3ZlckZhY3Rvcnk7XG5cbiAgICB9O1xuXG4gIH0pXG5cbiAgLmRpcmVjdGl2ZSgnYnNQb3BvdmVyJywgZnVuY3Rpb24oJHdpbmRvdywgJHNjZSwgJHBvcG92ZXIpIHtcblxuICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAkd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAkd2luZG93LnNldFRpbWVvdXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFQUMnLFxuICAgICAgc2NvcGU6IHRydWUsXG4gICAgICBsaW5rOiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxlbWVudCwgYXR0cikge1xuXG4gICAgICAgIC8vIERpcmVjdGl2ZSBvcHRpb25zXG4gICAgICAgIHZhciBvcHRpb25zID0ge3Njb3BlOiBzY29wZX07XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChbJ3RlbXBsYXRlJywgJ2NvbnRlbnRUZW1wbGF0ZScsICdwbGFjZW1lbnQnLCAnY29udGFpbmVyJywgJ3RhcmdldCcsICdkZWxheScsICd0cmlnZ2VyJywgJ2tleWJvYXJkJywgJ2h0bWwnLCAnYW5pbWF0aW9uJywgJ2N1c3RvbUNsYXNzJywgJ2F1dG9DbG9zZSddLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhdHRyW2tleV0pKSBvcHRpb25zW2tleV0gPSBhdHRyW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgc2NvcGUgYXMgZGF0YS1hdHRyc1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goWyd0aXRsZScsICdjb250ZW50J10sIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIGF0dHJba2V5XSAmJiBhdHRyLiRvYnNlcnZlKGtleSwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBzY29wZVtrZXldID0gJHNjZS50cnVzdEFzSHRtbChuZXdWYWx1ZSk7XG4gICAgICAgICAgICBhbmd1bGFyLmlzRGVmaW5lZChvbGRWYWx1ZSkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBwb3BvdmVyICYmIHBvcG92ZXIuJGFwcGx5UGxhY2VtZW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3VwcG9ydCBzY29wZSBhcyBhbiBvYmplY3RcbiAgICAgICAgYXR0ci5ic1BvcG92ZXIgJiYgc2NvcGUuJHdhdGNoKGF0dHIuYnNQb3BvdmVyLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZihhbmd1bGFyLmlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgYW5ndWxhci5leHRlbmQoc2NvcGUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NvcGUuY29udGVudCA9IG5ld1ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbmd1bGFyLmlzRGVmaW5lZChvbGRWYWx1ZSkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcG9wb3ZlciAmJiBwb3BvdmVyLiRhcHBseVBsYWNlbWVudCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAvLyBWaXNpYmlsaXR5IGJpbmRpbmcgc3VwcG9ydFxuICAgICAgICBhdHRyLmJzU2hvdyAmJiBzY29wZS4kd2F0Y2goYXR0ci5ic1Nob3csIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmKCFwb3BvdmVyIHx8ICFhbmd1bGFyLmlzRGVmaW5lZChuZXdWYWx1ZSkpIHJldHVybjtcbiAgICAgICAgICBpZihhbmd1bGFyLmlzU3RyaW5nKG5ld1ZhbHVlKSkgbmV3VmFsdWUgPSAhIW5ld1ZhbHVlLm1hdGNoKC90cnVlfCw/KHBvcG92ZXIpLD8vaSk7XG4gICAgICAgICAgbmV3VmFsdWUgPT09IHRydWUgPyBwb3BvdmVyLnNob3coKSA6IHBvcG92ZXIuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHBvcG92ZXJcbiAgICAgICAgdmFyIHBvcG92ZXIgPSAkcG9wb3ZlcihlbGVtZW50LCBvcHRpb25zKTtcblxuICAgICAgICAvLyBHYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChwb3BvdmVyKSBwb3BvdmVyLmRlc3Ryb3koKTtcbiAgICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgICBwb3BvdmVyID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICB9O1xuXG4gIH0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zdHJhcC9zcmMvcG9wb3Zlci9wb3BvdmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ21nY3JlYS5uZ1N0cmFwLnRvb2x0aXAnLCBbJ21nY3JlYS5uZ1N0cmFwLmhlbHBlcnMuZGltZW5zaW9ucyddKVxuXG4gIC5wcm92aWRlcignJHRvb2x0aXAnLCBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBhbmltYXRpb246ICdhbS1mYWRlJyxcbiAgICAgIGN1c3RvbUNsYXNzOiAnJyxcbiAgICAgIHByZWZpeENsYXNzOiAndG9vbHRpcCcsXG4gICAgICBwcmVmaXhFdmVudDogJ3Rvb2x0aXAnLFxuICAgICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICAgIHRhcmdldDogZmFsc2UsXG4gICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgdGVtcGxhdGU6ICd0b29sdGlwL3Rvb2x0aXAudHBsLmh0bWwnLFxuICAgICAgY29udGVudFRlbXBsYXRlOiBmYWxzZSxcbiAgICAgIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICBodG1sOiBmYWxzZSxcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgdHlwZTogJycsXG4gICAgICBkZWxheTogMCxcbiAgICAgIGF1dG9DbG9zZTogZmFsc2UsXG4gICAgICBic0VuYWJsZWQ6IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy4kZ2V0ID0gZnVuY3Rpb24oJHdpbmRvdywgJHJvb3RTY29wZSwgJGNvbXBpbGUsICRxLCAkdGVtcGxhdGVDYWNoZSwgJGh0dHAsICRhbmltYXRlLCAkc2NlLCBkaW1lbnNpb25zLCAkJHJBRiwgJHRpbWVvdXQpIHtcblxuICAgICAgdmFyIHRyaW0gPSBTdHJpbmcucHJvdG90eXBlLnRyaW07XG4gICAgICB2YXIgaXNUb3VjaCA9ICdjcmVhdGVUb3VjaCcgaW4gJHdpbmRvdy5kb2N1bWVudDtcbiAgICAgIHZhciBodG1sUmVwbGFjZVJlZ0V4cCA9IC9uZy1iaW5kPVwiL2lnO1xuICAgICAgdmFyICRib2R5ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cuZG9jdW1lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBUb29sdGlwRmFjdG9yeShlbGVtZW50LCBjb25maWcpIHtcblxuICAgICAgICB2YXIgJHRvb2x0aXAgPSB7fTtcblxuICAgICAgICAvLyBDb21tb24gdmFyc1xuICAgICAgICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50WzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gJHRvb2x0aXAuJG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgICAgICR0b29sdGlwLiRwcm9taXNlID0gZmV0Y2hUZW1wbGF0ZShvcHRpb25zLnRlbXBsYXRlKTtcbiAgICAgICAgdmFyIHNjb3BlID0gJHRvb2x0aXAuJHNjb3BlID0gb3B0aW9ucy5zY29wZSAmJiBvcHRpb25zLnNjb3BlLiRuZXcoKSB8fCAkcm9vdFNjb3BlLiRuZXcoKTtcbiAgICAgICAgaWYob3B0aW9ucy5kZWxheSAmJiBhbmd1bGFyLmlzU3RyaW5nKG9wdGlvbnMuZGVsYXkpKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gb3B0aW9ucy5kZWxheS5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICAgICAgICBvcHRpb25zLmRlbGF5ID0gc3BsaXQubGVuZ3RoID4gMSA/IHtzaG93OiBzcGxpdFswXSwgaGlkZTogc3BsaXRbMV19IDogc3BsaXRbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBwb3J0IHNjb3BlIGFzIHN0cmluZyBvcHRpb25zXG4gICAgICAgIGlmKG9wdGlvbnMudGl0bGUpIHtcbiAgICAgICAgICBzY29wZS50aXRsZSA9ICRzY2UudHJ1c3RBc0h0bWwob3B0aW9ucy50aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm92aWRlIHNjb3BlIGhlbHBlcnNcbiAgICAgICAgc2NvcGUuJHNldEVuYWJsZWQgPSBmdW5jdGlvbihpc0VuYWJsZWQpIHtcbiAgICAgICAgICBzY29wZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdG9vbHRpcC5zZXRFbmFibGVkKGlzRW5hYmxlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHNjb3BlLiRoaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGUuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHRvb2x0aXAuaGlkZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBzY29wZS4kc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0b29sdGlwLnNob3coKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGUuJHRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0b29sdGlwLnRvZ2dsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkdG9vbHRpcC4kaXNTaG93biA9IHNjb3BlLiRpc1Nob3duID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSB2YXJzXG4gICAgICAgIHZhciB0aW1lb3V0LCBob3ZlclN0YXRlO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgY29udGVudFRlbXBsYXRlIG9wdGlvblxuICAgICAgICBpZihvcHRpb25zLmNvbnRlbnRUZW1wbGF0ZSkge1xuICAgICAgICAgICR0b29sdGlwLiRwcm9taXNlID0gJHRvb2x0aXAuJHByb21pc2UudGhlbihmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlRWwgPSBhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoVGVtcGxhdGUob3B0aW9ucy5jb250ZW50VGVtcGxhdGUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihjb250ZW50VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRFbCA9IGZpbmRFbGVtZW50KCdbbmctYmluZD1cImNvbnRlbnRcIl0nLCB0ZW1wbGF0ZUVsWzBdKTtcbiAgICAgICAgICAgICAgaWYoIWNvbnRlbnRFbC5sZW5ndGgpIGNvbnRlbnRFbCA9IGZpbmRFbGVtZW50KCdbbmctYmluZD1cInRpdGxlXCJdJywgdGVtcGxhdGVFbFswXSk7XG4gICAgICAgICAgICAgIGNvbnRlbnRFbC5yZW1vdmVBdHRyKCduZy1iaW5kJykuaHRtbChjb250ZW50VGVtcGxhdGUpO1xuICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVFbFswXS5vdXRlckhUTUw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZldGNoLCBjb21waWxlIHRoZW4gaW5pdGlhbGl6ZSB0b29sdGlwXG4gICAgICAgIHZhciB0aXBMaW5rZXIsIHRpcEVsZW1lbnQsIHRpcFRlbXBsYXRlLCB0aXBDb250YWluZXIsIHRpcFNjb3BlO1xuICAgICAgICAkdG9vbHRpcC4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc09iamVjdCh0ZW1wbGF0ZSkpIHRlbXBsYXRlID0gdGVtcGxhdGUuZGF0YTtcbiAgICAgICAgICBpZihvcHRpb25zLmh0bWwpIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShodG1sUmVwbGFjZVJlZ0V4cCwgJ25nLWJpbmQtaHRtbD1cIicpO1xuICAgICAgICAgIHRlbXBsYXRlID0gdHJpbS5hcHBseSh0ZW1wbGF0ZSk7XG4gICAgICAgICAgdGlwVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgICB0aXBMaW5rZXIgPSAkY29tcGlsZSh0ZW1wbGF0ZSk7XG4gICAgICAgICAgJHRvb2x0aXAuaW5pdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdG9vbHRpcC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAvLyBPcHRpb25zOiBkZWxheVxuICAgICAgICAgIGlmIChvcHRpb25zLmRlbGF5ICYmIGFuZ3VsYXIuaXNOdW1iZXIob3B0aW9ucy5kZWxheSkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGVsYXkgPSB7XG4gICAgICAgICAgICAgIHNob3c6IG9wdGlvbnMuZGVsYXksXG4gICAgICAgICAgICAgIGhpZGU6IG9wdGlvbnMuZGVsYXlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVwbGFjZSB0cmlnZ2VyIG9uIHRvdWNoIGRldmljZXMgP1xuICAgICAgICAgIC8vIGlmKGlzVG91Y2ggJiYgb3B0aW9ucy50cmlnZ2VyID09PSBkZWZhdWx0cy50cmlnZ2VyKSB7XG4gICAgICAgICAgLy8gICBvcHRpb25zLnRyaWdnZXIucmVwbGFjZSgvaG92ZXIvZywgJ2NsaWNrJyk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gT3B0aW9ucyA6IGNvbnRhaW5lclxuICAgICAgICAgIGlmKG9wdGlvbnMuY29udGFpbmVyID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgIHRpcENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIGlmKGFuZ3VsYXIuaXNFbGVtZW50KG9wdGlvbnMuY29udGFpbmVyKSkge1xuICAgICAgICAgICAgdGlwQ29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgfSBlbHNlIGlmKG9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aXBDb250YWluZXIgPSBmaW5kRWxlbWVudChvcHRpb25zLmNvbnRhaW5lcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3B0aW9uczogdHJpZ2dlclxuICAgICAgICAgIGJpbmRUcmlnZ2VyRXZlbnRzKCk7XG5cbiAgICAgICAgICAvLyBPcHRpb25zOiB0YXJnZXRcbiAgICAgICAgICBpZihvcHRpb25zLnRhcmdldCkge1xuICAgICAgICAgICAgb3B0aW9ucy50YXJnZXQgPSBhbmd1bGFyLmlzRWxlbWVudChvcHRpb25zLnRhcmdldCkgPyBvcHRpb25zLnRhcmdldCA6IGZpbmRFbGVtZW50KG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBPcHRpb25zOiBzaG93XG4gICAgICAgICAgaWYob3B0aW9ucy5zaG93KSB7XG4gICAgICAgICAgICBzY29wZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMudHJpZ2dlciA9PT0gJ2ZvY3VzJyA/IGVsZW1lbnRbMF0uZm9jdXMoKSA6ICR0b29sdGlwLnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIC8vIFVuYmluZCBldmVudHNcbiAgICAgICAgICB1bmJpbmRUcmlnZ2VyRXZlbnRzKCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgZWxlbWVudFxuICAgICAgICAgIGRlc3Ryb3lUaXBFbGVtZW50KCk7XG5cbiAgICAgICAgICAvLyBEZXN0cm95IHNjb3BlXG4gICAgICAgICAgc2NvcGUuJGRlc3Ryb3koKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLmVudGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgaG92ZXJTdGF0ZSA9ICdpbic7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmRlbGF5IHx8ICFvcHRpb25zLmRlbGF5LnNob3cpIHtcbiAgICAgICAgICAgIHJldHVybiAkdG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaG92ZXJTdGF0ZSA9PT0naW4nKSAkdG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgfSwgb3B0aW9ucy5kZWxheS5zaG93KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYnNFbmFibGVkKSByZXR1cm47XG5cbiAgICAgICAgICBzY29wZS4kZW1pdChvcHRpb25zLnByZWZpeEV2ZW50ICsgJy5zaG93LmJlZm9yZScsICR0b29sdGlwKTtcbiAgICAgICAgICB2YXIgcGFyZW50LCBhZnRlcjtcbiAgICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHRpcENvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICh0aXBDb250YWluZXJbMF0ubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgIGFmdGVyID0gYW5ndWxhci5lbGVtZW50KHRpcENvbnRhaW5lclswXS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWZ0ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgYWZ0ZXIgPSBlbGVtZW50O1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gSGlkZSBhbnkgZXhpc3RpbmcgdGlwRWxlbWVudFxuICAgICAgICAgIGlmKHRpcEVsZW1lbnQpIGRlc3Ryb3lUaXBFbGVtZW50KCk7XG4gICAgICAgICAgLy8gRmV0Y2ggYSBjbG9uZWQgZWxlbWVudCBsaW5rZWQgZnJvbSB0ZW1wbGF0ZVxuICAgICAgICAgIHRpcFNjb3BlID0gJHRvb2x0aXAuJHNjb3BlLiRuZXcoKTtcbiAgICAgICAgICB0aXBFbGVtZW50ID0gJHRvb2x0aXAuJGVsZW1lbnQgPSB0aXBMaW5rZXIodGlwU2NvcGUsIGZ1bmN0aW9uKGNsb25lZEVsZW1lbnQsIHNjb3BlKSB7fSk7XG5cbiAgICAgICAgICAvLyBTZXQgdGhlIGluaXRpYWwgcG9zaXRpb25pbmcuICBNYWtlIHRoZSB0b29sdGlwIGludmlzaWJsZVxuICAgICAgICAgIC8vIHNvIElFIGRvZXNuJ3QgdHJ5IHRvIGZvY3VzIG9uIGl0IG9mZiBzY3JlZW4uXG4gICAgICAgICAgdGlwRWxlbWVudC5jc3Moe3RvcDogJy05OTk5cHgnLCBsZWZ0OiAnLTk5OTlweCcsIGRpc3BsYXk6ICdibG9jaycsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkuYWRkQ2xhc3Mob3B0aW9ucy5wbGFjZW1lbnQpO1xuXG4gICAgICAgICAgLy8gT3B0aW9uczogYW5pbWF0aW9uXG4gICAgICAgICAgaWYob3B0aW9ucy5hbmltYXRpb24pIHRpcEVsZW1lbnQuYWRkQ2xhc3Mob3B0aW9ucy5hbmltYXRpb24pO1xuICAgICAgICAgIC8vIE9wdGlvbnM6IHR5cGVcbiAgICAgICAgICBpZihvcHRpb25zLnR5cGUpIHRpcEVsZW1lbnQuYWRkQ2xhc3Mob3B0aW9ucy5wcmVmaXhDbGFzcyArICctJyArIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgLy8gT3B0aW9uczogY3VzdG9tIGNsYXNzZXNcbiAgICAgICAgICBpZihvcHRpb25zLmN1c3RvbUNsYXNzKSB0aXBFbGVtZW50LmFkZENsYXNzKG9wdGlvbnMuY3VzdG9tQ2xhc3MpO1xuXG4gICAgICAgICAgLy8gU3VwcG9ydCB2MS4zKyAkYW5pbWF0ZVxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvY29tbWl0L2JmMGY1NTAyYjFiYmZkZGM1Y2RkMmYxMzhlZmQ5MTg4YjhjNjUyYTlcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9ICRhbmltYXRlLmVudGVyKHRpcEVsZW1lbnQsIHBhcmVudCwgYWZ0ZXIsIGVudGVyQW5pbWF0ZUNhbGxiYWNrKTtcbiAgICAgICAgICBpZihwcm9taXNlICYmIHByb21pc2UudGhlbikgcHJvbWlzZS50aGVuKGVudGVyQW5pbWF0ZUNhbGxiYWNrKTtcblxuICAgICAgICAgICR0b29sdGlwLiRpc1Nob3duID0gc2NvcGUuJGlzU2hvd24gPSB0cnVlO1xuICAgICAgICAgIHNhZmVEaWdlc3Qoc2NvcGUpO1xuICAgICAgICAgICQkckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICR0b29sdGlwLiRhcHBseVBsYWNlbWVudCgpO1xuXG4gICAgICAgICAgICAvLyBPbmNlIHBsYWNlZCwgbWFrZSB0aGUgdG9vbHRpcCB2aXNpYmxlXG4gICAgICAgICAgICBpZih0aXBFbGVtZW50KSB0aXBFbGVtZW50LmNzcyh7dmlzaWJpbGl0eTogJ3Zpc2libGUnfSk7XG4gICAgICAgICAgfSk7IC8vIHZhciBhID0gYm9keUVsLm9mZnNldFdpZHRoICsgMTsgP1xuXG4gICAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgICBpZihvcHRpb25zLmtleWJvYXJkKSB7XG4gICAgICAgICAgICBpZihvcHRpb25zLnRyaWdnZXIgIT09ICdmb2N1cycpIHtcbiAgICAgICAgICAgICAgJHRvb2x0aXAuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpbmRLZXlib2FyZEV2ZW50cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b0Nsb3NlKSB7XG4gICAgICAgICAgICBiaW5kQXV0b0Nsb3NlRXZlbnRzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZW50ZXJBbmltYXRlQ2FsbGJhY2soKSB7XG4gICAgICAgICAgc2NvcGUuJGVtaXQob3B0aW9ucy5wcmVmaXhFdmVudCArICcuc2hvdycsICR0b29sdGlwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICR0b29sdGlwLmxlYXZlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgaG92ZXJTdGF0ZSA9ICdvdXQnO1xuICAgICAgICAgIGlmICghb3B0aW9ucy5kZWxheSB8fCAhb3B0aW9ucy5kZWxheS5oaWRlKSB7XG4gICAgICAgICAgICByZXR1cm4gJHRvb2x0aXAuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaG92ZXJTdGF0ZSA9PT0gJ291dCcpIHtcbiAgICAgICAgICAgICAgJHRvb2x0aXAuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG9wdGlvbnMuZGVsYXkuaGlkZSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgX2JsdXI7XG4gICAgICAgICR0b29sdGlwLmhpZGUgPSBmdW5jdGlvbihibHVyKSB7XG5cbiAgICAgICAgICBpZighJHRvb2x0aXAuJGlzU2hvd24pIHJldHVybjtcbiAgICAgICAgICBzY29wZS4kZW1pdChvcHRpb25zLnByZWZpeEV2ZW50ICsgJy5oaWRlLmJlZm9yZScsICR0b29sdGlwKTtcblxuICAgICAgICAgIC8vIHN0b3JlIGJsdXIgdmFsdWUgZm9yIGxlYXZlQW5pbWF0ZUNhbGxiYWNrIHRvIHVzZVxuICAgICAgICAgIF9ibHVyID0gYmx1cjtcblxuICAgICAgICAgIC8vIFN1cHBvcnQgdjEuMysgJGFuaW1hdGVcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2NvbW1pdC9iZjBmNTUwMmIxYmJmZGRjNWNkZDJmMTM4ZWZkOTE4OGI4YzY1MmE5XG4gICAgICAgICAgdmFyIHByb21pc2UgPSAkYW5pbWF0ZS5sZWF2ZSh0aXBFbGVtZW50LCBsZWF2ZUFuaW1hdGVDYWxsYmFjayk7XG4gICAgICAgICAgaWYocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHByb21pc2UudGhlbihsZWF2ZUFuaW1hdGVDYWxsYmFjayk7XG5cbiAgICAgICAgICAkdG9vbHRpcC4kaXNTaG93biA9IHNjb3BlLiRpc1Nob3duID0gZmFsc2U7XG4gICAgICAgICAgc2FmZURpZ2VzdChzY29wZSk7XG5cbiAgICAgICAgICAvLyBVbmJpbmQgZXZlbnRzXG4gICAgICAgICAgaWYob3B0aW9ucy5rZXlib2FyZCAmJiB0aXBFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB1bmJpbmRLZXlib2FyZEV2ZW50cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b0Nsb3NlICYmIHRpcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHVuYmluZEF1dG9DbG9zZUV2ZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBsZWF2ZUFuaW1hdGVDYWxsYmFjaygpIHtcbiAgICAgICAgICBzY29wZS4kZW1pdChvcHRpb25zLnByZWZpeEV2ZW50ICsgJy5oaWRlJywgJHRvb2x0aXApO1xuICAgICAgICAgIC8vIEFsbG93IHRvIGJsdXIgdGhlIGlucHV0IHdoZW4gaGlkZGVuLCBsaWtlIHdoZW4gcHJlc3NpbmcgZW50ZXIga2V5XG4gICAgICAgICAgaWYoX2JsdXIgJiYgb3B0aW9ucy50cmlnZ2VyID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFswXS5ibHVyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2xlYW4gdXAgY2hpbGQgc2NvcGVzXG4gICAgICAgICAgZGVzdHJveVRpcEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICR0b29sdGlwLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICR0b29sdGlwLiRpc1Nob3duID8gJHRvb2x0aXAubGVhdmUoKSA6ICR0b29sdGlwLmVudGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHRvb2x0aXAuZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aXBFbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHRvb2x0aXAuc2V0RW5hYmxlZCA9IGZ1bmN0aW9uKGlzRW5hYmxlZCkge1xuICAgICAgICAgIG9wdGlvbnMuYnNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByb3RlY3RlZCBtZXRob2RzXG5cbiAgICAgICAgJHRvb2x0aXAuJGFwcGx5UGxhY2VtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIXRpcEVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICAgIC8vIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIHRvb2x0aXAgZWxlbWVudC5cbiAgICAgICAgICB2YXIgZWxlbWVudFBvc2l0aW9uID0gZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgIC8vIEdldCB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgdG9vbHRpcCBzbyB3ZSBjYW4gY2VudGVyIGl0LlxuICAgICAgICAgIHZhciB0aXBXaWR0aCA9IHRpcEVsZW1lbnQucHJvcCgnb2Zmc2V0V2lkdGgnKSxcbiAgICAgICAgICAgICAgdGlwSGVpZ2h0ID0gdGlwRWxlbWVudC5wcm9wKCdvZmZzZXRIZWlnaHQnKTtcblxuICAgICAgICAgIC8vIEdldCB0aGUgdG9vbHRpcCdzIHRvcCBhbmQgbGVmdCBjb29yZGluYXRlcyB0byBjZW50ZXIgaXQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICAgICAgICB2YXIgdGlwUG9zaXRpb24gPSBnZXRDYWxjdWxhdGVkT2Zmc2V0KG9wdGlvbnMucGxhY2VtZW50LCBlbGVtZW50UG9zaXRpb24sIHRpcFdpZHRoLCB0aXBIZWlnaHQpO1xuXG4gICAgICAgICAgLy8gTm93IHNldCB0aGUgY2FsY3VsYXRlZCBwb3NpdGlvbmluZy5cbiAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgKz0gJ3B4JztcbiAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ICs9ICdweCc7XG4gICAgICAgICAgdGlwRWxlbWVudC5jc3ModGlwUG9zaXRpb24pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgJHRvb2x0aXAuJG9uS2V5VXAgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0LndoaWNoID09PSAyNyAmJiAkdG9vbHRpcC4kaXNTaG93bikge1xuICAgICAgICAgICAgJHRvb2x0aXAuaGlkZSgpO1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC4kb25Gb2N1c0tleVVwID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICAgIGVsZW1lbnRbMF0uYmx1cigpO1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC4kb25Gb2N1c0VsZW1lbnRNb3VzZURvd24gPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgLy8gU29tZSBicm93c2VycyBkbyBub3QgYXV0by1mb2N1cyBidXR0b25zIChlZy4gU2FmYXJpKVxuICAgICAgICAgICR0b29sdGlwLiRpc1Nob3duID8gZWxlbWVudFswXS5ibHVyKCkgOiBlbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYmluZC91bmJpbmQgZXZlbnRzXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRUcmlnZ2VyRXZlbnRzKCkge1xuICAgICAgICAgIHZhciB0cmlnZ2VycyA9IG9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0cmlnZ2VycywgZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgaWYodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsICR0b29sdGlwLnRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYodHJpZ2dlciAhPT0gJ21hbnVhbCcpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5vbih0cmlnZ2VyID09PSAnaG92ZXInID8gJ21vdXNlZW50ZXInIDogJ2ZvY3VzJywgJHRvb2x0aXAuZW50ZXIpO1xuICAgICAgICAgICAgICBlbGVtZW50Lm9uKHRyaWdnZXIgPT09ICdob3ZlcicgPyAnbW91c2VsZWF2ZScgOiAnYmx1cicsICR0b29sdGlwLmxlYXZlKTtcbiAgICAgICAgICAgICAgbm9kZU5hbWUgPT09ICdidXR0b24nICYmIHRyaWdnZXIgIT09ICdob3ZlcicgJiYgZWxlbWVudC5vbihpc1RvdWNoID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZG93bicsICR0b29sdGlwLiRvbkZvY3VzRWxlbWVudE1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1bmJpbmRUcmlnZ2VyRXZlbnRzKCkge1xuICAgICAgICAgIHZhciB0cmlnZ2VycyA9IG9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSB0cmlnZ2Vycy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gdHJpZ2dlcnNbaV07XG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQub2ZmKCdjbGljaycsICR0b29sdGlwLnRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYodHJpZ2dlciAhPT0gJ21hbnVhbCcpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5vZmYodHJpZ2dlciA9PT0gJ2hvdmVyJyA/ICdtb3VzZWVudGVyJyA6ICdmb2N1cycsICR0b29sdGlwLmVudGVyKTtcbiAgICAgICAgICAgICAgZWxlbWVudC5vZmYodHJpZ2dlciA9PT0gJ2hvdmVyJyA/ICdtb3VzZWxlYXZlJyA6ICdibHVyJywgJHRvb2x0aXAubGVhdmUpO1xuICAgICAgICAgICAgICBub2RlTmFtZSA9PT0gJ2J1dHRvbicgJiYgdHJpZ2dlciAhPT0gJ2hvdmVyJyAmJiBlbGVtZW50Lm9mZihpc1RvdWNoID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZG93bicsICR0b29sdGlwLiRvbkZvY3VzRWxlbWVudE1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYmluZEtleWJvYXJkRXZlbnRzKCkge1xuICAgICAgICAgIGlmKG9wdGlvbnMudHJpZ2dlciAhPT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGlwRWxlbWVudC5vbigna2V5dXAnLCAkdG9vbHRpcC4kb25LZXlVcCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2tleXVwJywgJHRvb2x0aXAuJG9uRm9jdXNLZXlVcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdW5iaW5kS2V5Ym9hcmRFdmVudHMoKSB7XG4gICAgICAgICAgaWYob3B0aW9ucy50cmlnZ2VyICE9PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICB0aXBFbGVtZW50Lm9mZigna2V5dXAnLCAkdG9vbHRpcC4kb25LZXlVcCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQub2ZmKCdrZXl1cCcsICR0b29sdGlwLiRvbkZvY3VzS2V5VXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfYXV0b0Nsb3NlRXZlbnRzQmluZGVkID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIGJpbmRBdXRvQ2xvc2VFdmVudHMoKSB7XG4gICAgICAgICAgLy8gdXNlIHRpbWVvdXQgdG8gaG9va3VwIHRoZSBldmVudHMgdG8gcHJldmVudFxuICAgICAgICAgIC8vIGV2ZW50IGJ1YmJsaW5nIGZyb20gYmVpbmcgcHJvY2Vzc2VkIGltZWRpYXRlbHkuXG4gICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBTdG9wIHByb3BhZ2F0aW9uIHdoZW4gY2xpY2tpbmcgaW5zaWRlIHRvb2x0aXBcbiAgICAgICAgICAgIHRpcEVsZW1lbnQub24oJ2NsaWNrJywgc3RvcEV2ZW50UHJvcGFnYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBIaWRlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSB0b29sdGlwXG4gICAgICAgICAgICAkYm9keS5vbignY2xpY2snLCAkdG9vbHRpcC5oaWRlKTtcblxuICAgICAgICAgICAgX2F1dG9DbG9zZUV2ZW50c0JpbmRlZCA9IHRydWU7XG4gICAgICAgICAgfSwgMCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdW5iaW5kQXV0b0Nsb3NlRXZlbnRzKCkge1xuICAgICAgICAgIGlmIChfYXV0b0Nsb3NlRXZlbnRzQmluZGVkKSB7XG4gICAgICAgICAgICB0aXBFbGVtZW50Lm9mZignY2xpY2snLCBzdG9wRXZlbnRQcm9wYWdhdGlvbik7XG4gICAgICAgICAgICAkYm9keS5vZmYoJ2NsaWNrJywgJHRvb2x0aXAuaGlkZSk7XG4gICAgICAgICAgICBfYXV0b0Nsb3NlRXZlbnRzQmluZGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgICAgICAgIGlmKG9wdGlvbnMuY29udGFpbmVyID09PSAnYm9keScpIHtcbiAgICAgICAgICAgIHJldHVybiBkaW1lbnNpb25zLm9mZnNldChvcHRpb25zLnRhcmdldFswXSB8fCBlbGVtZW50WzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRpbWVuc2lvbnMucG9zaXRpb24ob3B0aW9ucy50YXJnZXRbMF0gfHwgZWxlbWVudFswXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvc2l0aW9uLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KSB7XG4gICAgICAgICAgdmFyIG9mZnNldDtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcblxuICAgICAgICAgIHN3aXRjaCAoc3BsaXRbMF0pIHtcbiAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsXG4gICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQgKyBwb3NpdGlvbi53aWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0LFxuICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsXG4gICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQgLSBhY3R1YWxXaWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wIC0gYWN0dWFsSGVpZ2h0LFxuICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIXNwbGl0WzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBzdXBwb3J0IGZvciBjb3JuZXJzIEB0b2RvIGNzc1xuICAgICAgICAgIGlmKHNwbGl0WzBdID09PSAndG9wJyB8fCBzcGxpdFswXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc3BsaXRbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICBvZmZzZXQubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICBvZmZzZXQubGVmdCA9ICBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGggLSBhY3R1YWxXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYoc3BsaXRbMF0gPT09ICdsZWZ0JyB8fCBzcGxpdFswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgc3dpdGNoIChzcGxpdFsxXSkge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgb2Zmc2V0LnRvcCA9IHBvc2l0aW9uLnRvcCAtIGFjdHVhbEhlaWdodDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICBvZmZzZXQudG9wID0gcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95VGlwRWxlbWVudCgpIHtcbiAgICAgICAgICAvLyBDYW5jZWwgcGVuZGluZyBjYWxsYmFja3NcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAgICAgICBpZigkdG9vbHRpcC4kaXNTaG93biAmJiB0aXBFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9DbG9zZSkge1xuICAgICAgICAgICAgICB1bmJpbmRBdXRvQ2xvc2VFdmVudHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgICAgICAgICB1bmJpbmRLZXlib2FyZEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHRpcFNjb3BlKSB7XG4gICAgICAgICAgICB0aXBTY29wZS4kZGVzdHJveSgpO1xuICAgICAgICAgICAgdGlwU2NvcGUgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHRpcEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRpcEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aXBFbGVtZW50ID0gJHRvb2x0aXAuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkdG9vbHRpcDtcblxuICAgICAgfVxuXG4gICAgICAvLyBIZWxwZXIgZnVuY3Rpb25zXG5cbiAgICAgIGZ1bmN0aW9uIHNhZmVEaWdlc3Qoc2NvcGUpIHtcbiAgICAgICAgc2NvcGUuJCRwaGFzZSB8fCAoc2NvcGUuJHJvb3QgJiYgc2NvcGUuJHJvb3QuJCRwaGFzZSkgfHwgc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmaW5kRWxlbWVudChxdWVyeSwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KChlbGVtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmZXRjaFByb21pc2VzID0ge307XG4gICAgICBmdW5jdGlvbiBmZXRjaFRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgICAgIGlmKGZldGNoUHJvbWlzZXNbdGVtcGxhdGVdKSByZXR1cm4gZmV0Y2hQcm9taXNlc1t0ZW1wbGF0ZV07XG4gICAgICAgIHJldHVybiAoZmV0Y2hQcm9taXNlc1t0ZW1wbGF0ZV0gPSAkcS53aGVuKCR0ZW1wbGF0ZUNhY2hlLmdldCh0ZW1wbGF0ZSkgfHwgJGh0dHAuZ2V0KHRlbXBsYXRlKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc09iamVjdChyZXMpKSB7XG4gICAgICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGUsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gVG9vbHRpcEZhY3Rvcnk7XG5cbiAgICB9O1xuXG4gIH0pXG5cbiAgLmRpcmVjdGl2ZSgnYnNUb29sdGlwJywgZnVuY3Rpb24oJHdpbmRvdywgJGxvY2F0aW9uLCAkc2NlLCAkdG9vbHRpcCwgJCRyQUYpIHtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0VBQycsXG4gICAgICBzY29wZTogdHJ1ZSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRyLCB0cmFuc2NsdXNpb24pIHtcblxuICAgICAgICAvLyBEaXJlY3RpdmUgb3B0aW9uc1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtzY29wZTogc2NvcGV9O1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goWyd0ZW1wbGF0ZScsICdjb250ZW50VGVtcGxhdGUnLCAncGxhY2VtZW50JywgJ2NvbnRhaW5lcicsICd0YXJnZXQnLCAnZGVsYXknLCAndHJpZ2dlcicsICdrZXlib2FyZCcsICdodG1sJywgJ2FuaW1hdGlvbicsICd0eXBlJywgJ2N1c3RvbUNsYXNzJ10sIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJba2V5XSkpIG9wdGlvbnNba2V5XSA9IGF0dHJba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gb3ZlcndyaXRlIGluaGVyaXRlZCB0aXRsZSB2YWx1ZSB3aGVuIG5vIHZhbHVlIHNwZWNpZmllZFxuICAgICAgICAvLyBmaXggZm9yIGFuZ3VsYXIgMS4zLjEgNTMxYThkZTcyYzQzOWQ4ZGRkMDY0ODc0YmYzNjRjMDBjZWRhYmIxMVxuICAgICAgICBpZiAoIXNjb3BlLmhhc093blByb3BlcnR5KCd0aXRsZScpKXtcbiAgICAgICAgICBzY29wZS50aXRsZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSBzY29wZSBhdHRyaWJ1dGVzIGZvciBjaGFuZ2VcbiAgICAgICAgYXR0ci4kb2JzZXJ2ZSgndGl0bGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChuZXdWYWx1ZSkgfHwgIXNjb3BlLmhhc093blByb3BlcnR5KCd0aXRsZScpKSB7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBzY29wZS50aXRsZTtcbiAgICAgICAgICAgIHNjb3BlLnRpdGxlID0gJHNjZS50cnVzdEFzSHRtbChuZXdWYWx1ZSk7XG4gICAgICAgICAgICBhbmd1bGFyLmlzRGVmaW5lZChvbGRWYWx1ZSkgJiYgJCRyQUYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRvb2x0aXAgJiYgdG9vbHRpcC4kYXBwbHlQbGFjZW1lbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3VwcG9ydCBzY29wZSBhcyBhbiBvYmplY3RcbiAgICAgICAgYXR0ci5ic1Rvb2x0aXAgJiYgc2NvcGUuJHdhdGNoKGF0dHIuYnNUb29sdGlwLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZihhbmd1bGFyLmlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgYW5ndWxhci5leHRlbmQoc2NvcGUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NvcGUudGl0bGUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYW5ndWxhci5pc0RlZmluZWQob2xkVmFsdWUpICYmICQkckFGKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdG9vbHRpcCAmJiB0b29sdGlwLiRhcHBseVBsYWNlbWVudCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAvLyBWaXNpYmlsaXR5IGJpbmRpbmcgc3VwcG9ydFxuICAgICAgICBhdHRyLmJzU2hvdyAmJiBzY29wZS4kd2F0Y2goYXR0ci5ic1Nob3csIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmKCF0b29sdGlwIHx8ICFhbmd1bGFyLmlzRGVmaW5lZChuZXdWYWx1ZSkpIHJldHVybjtcbiAgICAgICAgICBpZihhbmd1bGFyLmlzU3RyaW5nKG5ld1ZhbHVlKSkgbmV3VmFsdWUgPSAhIW5ld1ZhbHVlLm1hdGNoKC90cnVlfCw/KHRvb2x0aXApLD8vaSk7XG4gICAgICAgICAgbmV3VmFsdWUgPT09IHRydWUgPyB0b29sdGlwLnNob3coKSA6IHRvb2x0aXAuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFbmFibGVkIGJpbmRpbmcgc3VwcG9ydFxuICAgICAgICBhdHRyLmJzRW5hYmxlZCAmJiBzY29wZS4kd2F0Y2goYXR0ci5ic0VuYWJsZWQsIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUud2Fybignc2NvcGUuJHdhdGNoKCVzKScsIGF0dHIuYnNFbmFibGVkLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgIGlmKCF0b29sdGlwIHx8ICFhbmd1bGFyLmlzRGVmaW5lZChuZXdWYWx1ZSkpIHJldHVybjtcbiAgICAgICAgICBpZihhbmd1bGFyLmlzU3RyaW5nKG5ld1ZhbHVlKSkgbmV3VmFsdWUgPSAhIW5ld1ZhbHVlLm1hdGNoKC90cnVlfDF8LD8odG9vbHRpcCksPy9pKTtcbiAgICAgICAgICBuZXdWYWx1ZSA9PT0gZmFsc2UgPyB0b29sdGlwLnNldEVuYWJsZWQoZmFsc2UpIDogdG9vbHRpcC5zZXRFbmFibGVkKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHBvcG92ZXJcbiAgICAgICAgdmFyIHRvb2x0aXAgPSAkdG9vbHRpcChlbGVtZW50LCBvcHRpb25zKTtcblxuICAgICAgICAvLyBHYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKHRvb2x0aXApIHRvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgICAgIHRvb2x0aXAgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH07XG5cbiAgfSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXN0cmFwL3NyYy90b29sdGlwL3Rvb2x0aXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiYnVpbHQuanMifQ==