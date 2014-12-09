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
	__webpack_require__(20);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {angular.module("ari.ui.core.ng-strap-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("popover/popover.tpl.html","<div class=\"popover\">\n  <div class=\"arrow\"></div>\n  <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n  <div class=\"popover-content\" ng-bind=\"content\"></div>\n</div>\n");
	$templateCache.put("tooltip/tooltip.tpl.html","<div class=\"tooltip in\" ng-show=\"title\">\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\" ng-bind=\"title\"></div>\n</div>\n");}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 4 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 5 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 6 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 7 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 8 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 9 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 10 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 11 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 12 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 13 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 14 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 15 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 16 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 17 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 18 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 19 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 20 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular;

/***/ }
/******/ ])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWI0MDg0OTZlYWQzNDBiOTJlMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91aS10ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmFwLXRlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2FsZXJ0L2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2J1dHRvbnMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9jb2xsYXBzZS9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kYXRlcGFyc2VyL2RhdGVwYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3RpbWVwaWNrZXIvdGltZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kcm9wZG93bi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3RhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvcG9zaXRpb24vcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXN0cmFwL3NyYy9oZWxwZXJzL2RpbWVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXN0cmFwL3NyYy9wb3BvdmVyL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXN0cmFwL3NyYy90b29sdGlwL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBRzs7Ozs7Ozs7QUNwSkg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWCxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBLElBQUc7Ozs7Ozs7O0FDeEdIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBOztBQUVBOztBQUVBLElBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQSxJQUFHOzs7Ozs7OztBQ3JtQkgsMEIiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhYjQwODQ5NmVhZDM0MGI5MmUyYVxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCdhcmkudWkuY29yZScsIFtcbid1aS5ib290c3RyYXAuYWNjb3JkaW9uJyxcbid1aS5ib290c3RyYXAuYWxlcnQnLFxuJ3VpLmJvb3RzdHJhcC5idXR0b25zJyxcbid1aS5ib290c3RyYXAuY29sbGFwc2UnLFxuJ3VpLmJvb3RzdHJhcC5kYXRlcGFyc2VyJyxcbid1aS5ib290c3RyYXAuZGF0ZXBpY2tlcicsXG4ndWkuYm9vdHN0cmFwLnRpbWVwaWNrZXInLFxuJ3VpLmJvb3RzdHJhcC5kcm9wZG93bicsXG4ndWkuYm9vdHN0cmFwLm1vZGFsJyxcbid1aS5ib290c3RyYXAucHJvZ3Jlc3NiYXInLFxuJ3VpLmJvb3RzdHJhcC5yYXRpbmcnLFxuJ3VpLmJvb3RzdHJhcC50YWJzJyxcbid1aS5ib290c3RyYXAudHJhbnNpdGlvbicsXG4ndWkuYm9vdHN0cmFwLnBvc2l0aW9uJyxcbidtZ2NyZWEubmdTdHJhcC5oZWxwZXJzLmRpbWVuc2lvbnMnLFxuJ21nY3JlYS5uZ1N0cmFwLnBvcG92ZXInLFxuJ21nY3JlYS5uZ1N0cmFwLnRvb2x0aXAnLFxuJ2FyaS51aS5jb3JlLnVpLWJvb3RzdHJhcC10ZW1wbGF0ZXMnLFxuJ2FyaS51aS5jb3JlLm5nLXN0cmFwLXRlbXBsYXRlcydcbl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZShcImFyaS51aS5jb3JlLnVpLWJvb3RzdHJhcC10ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG4gICAgPGg0IGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxuICAgICAgPGEgaHJlZiBjbGFzcz1cXFwiYWNjb3JkaW9uLXRvZ2dsZVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU9wZW4oKVxcXCIgYWNjb3JkaW9uLXRyYW5zY2x1ZGU9XFxcImhlYWRpbmdcXFwiPjxzcGFuIG5nLWNsYXNzPVxcXCJ7XFwndGV4dC1tdXRlZFxcJzogaXNEaXNhYmxlZH1cXFwiPnt7aGVhZGluZ319PC9zcGFuPjwvYT5cXG4gICAgPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwicGFuZWwtY29sbGFwc2VcXFwiIGNvbGxhcHNlPVxcXCIhaXNPcGVuXFxcIj5cXG5cdCAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicGFuZWwtZ3JvdXBcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiYWxlcnRcXFwiIG5nLWNsYXNzPVxcXCJbXFwnYWxlcnQtXFwnICsgKHR5cGUgfHwgXFwnd2FybmluZ1xcJyksIGNsb3NlYWJsZSA/IFxcJ2FsZXJ0LWRpc21pc3NhYmxlXFwnIDogbnVsbF1cXFwiIHJvbGU9XFxcImFsZXJ0XFxcIj5cXG4gICAgPGJ1dHRvbiBuZy1zaG93PVxcXCJjbG9zZWFibGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+XFxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxkaXYgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbFwiLFwiPGRpdiBuZy1zd2l0Y2g9XFxcImRhdGVwaWNrZXJNb2RlXFxcIiByb2xlPVxcXCJhcHBsaWNhdGlvblxcXCIgbmcta2V5ZG93bj1cXFwia2V5ZG93bigkZXZlbnQpXFxcIj5cXG4gIDxkYXlwaWNrZXIgbmctc3dpdGNoLXdoZW49XFxcImRheVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvZGF5cGlja2VyPlxcbiAgPG1vbnRocGlja2VyIG5nLXN3aXRjaC13aGVuPVxcXCJtb250aFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvbW9udGhwaWNrZXI+XFxuICA8eWVhcnBpY2tlciBuZy1zd2l0Y2gtd2hlbj1cXFwieWVhclxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwveWVhcnBpY2tlcj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RheS5odG1sXCIsXCI8dGFibGUgcm9sZT1cXFwiZ3JpZFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cXFwie3thY3RpdmVEYXRlSWR9fVxcXCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoLTEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoIGNvbHNwYW49XFxcInt7NSArIHNob3dXZWVrc319XFxcIj48YnV0dG9uIGlkPVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIHJvbGU9XFxcImhlYWRpbmdcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1vZGUoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKDEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgICA8dHI+XFxuICAgICAgPHRoIG5nLXNob3c9XFxcInNob3dXZWVrc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48L3RoPlxcbiAgICAgIDx0aCBuZy1yZXBlYXQ9XFxcImxhYmVsIGluIGxhYmVscyB0cmFjayBieSAkaW5kZXhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PHNtYWxsIGFyaWEtbGFiZWw9XFxcInt7bGFiZWwuZnVsbH19XFxcIj57e2xhYmVsLmFiYnJ9fTwvc21hbGw+PC90aD5cXG4gICAgPC90cj5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XFxcInJvdyBpbiByb3dzIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxuICAgICAgPHRkIG5nLXNob3c9XFxcInNob3dXZWVrc1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyIGg2XFxcIj48ZW0+e3sgd2Vla051bWJlcnNbJGluZGV4XSB9fTwvZW0+PC90ZD5cXG4gICAgICA8dGQgbmctcmVwZWF0PVxcXCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiByb2xlPVxcXCJncmlkY2VsbFxcXCIgaWQ9XFxcInt7ZHQudWlkfX1cXFwiIGFyaWEtZGlzYWJsZWQ9XFxcInt7ISFkdC5kaXNhYmxlZH19XFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2J0bi1pbmZvXFwnOiBkdC5zZWxlY3RlZCwgYWN0aXZlOiBpc0FjdGl2ZShkdCl9XFxcIiBuZy1jbGljaz1cXFwic2VsZWN0KGR0LmRhdGUpXFxcIiBuZy1kaXNhYmxlZD1cXFwiZHQuZGlzYWJsZWRcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PHNwYW4gbmctY2xhc3M9XFxcIntcXCd0ZXh0LW11dGVkXFwnOiBkdC5zZWNvbmRhcnksIFxcJ3RleHQtaW5mb1xcJzogZHQuY3VycmVudH1cXFwiPnt7ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLFwiPHRhYmxlIHJvbGU9XFxcImdyaWRcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwie3t1bmlxdWVJZH19LXRpdGxlXFxcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XFxcInt7YWN0aXZlRGF0ZUlkfX1cXFwiPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKC0xKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIGlkPVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIHJvbGU9XFxcImhlYWRpbmdcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1vZGUoKVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJtb3ZlKDEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgPC90aGVhZD5cXG4gIDx0Ym9keT5cXG4gICAgPHRyIG5nLXJlcGVhdD1cXFwicm93IGluIHJvd3MgdHJhY2sgYnkgJGluZGV4XFxcIj5cXG4gICAgICA8dGQgbmctcmVwZWF0PVxcXCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiByb2xlPVxcXCJncmlkY2VsbFxcXCIgaWQ9XFxcInt7ZHQudWlkfX1cXFwiIGFyaWEtZGlzYWJsZWQ9XFxcInt7ISFkdC5kaXNhYmxlZH19XFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnYnRuLWluZm9cXCc6IGR0LnNlbGVjdGVkLCBhY3RpdmU6IGlzQWN0aXZlKGR0KX1cXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QoZHQuZGF0ZSlcXFwiIG5nLWRpc2FibGVkPVxcXCJkdC5kaXNhYmxlZFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48c3BhbiBuZy1jbGFzcz1cXFwie1xcJ3RleHQtaW5mb1xcJzogZHQuY3VycmVudH1cXFwiPnt7ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbFwiLFwiPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZy1zdHlsZT1cXFwie2Rpc3BsYXk6IChpc09wZW4gJiYgXFwnYmxvY2tcXCcpIHx8IFxcJ25vbmVcXCcsIHRvcDogcG9zaXRpb24udG9wK1xcJ3B4XFwnLCBsZWZ0OiBwb3NpdGlvbi5sZWZ0K1xcJ3B4XFwnfVxcXCIgbmcta2V5ZG93bj1cXFwia2V5ZG93bigkZXZlbnQpXFxcIj5cXG5cdDxsaSBuZy10cmFuc2NsdWRlPjwvbGk+XFxuXHQ8bGkgbmctaWY9XFxcInNob3dCdXR0b25CYXJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjEwcHggOXB4IDJweFxcXCI+XFxuXHRcdDxzcGFuIGNsYXNzPVxcXCJidG4tZ3JvdXAgcHVsbC1sZWZ0XFxcIj5cXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWluZm9cXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QoXFwndG9kYXlcXCcpXFxcIj57eyBnZXRUZXh0KFxcJ2N1cnJlbnRcXCcpIH19PC9idXR0b24+XFxuXHRcdFx0PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJzZWxlY3QobnVsbClcXFwiPnt7IGdldFRleHQoXFwnY2xlYXJcXCcpIH19PC9idXR0b24+XFxuXHRcdDwvc3Bhbj5cXG5cdFx0PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj57eyBnZXRUZXh0KFxcJ2Nsb3NlXFwnKSB9fTwvYnV0dG9uPlxcblx0PC9saT5cXG48L3VsPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIsXCI8dGFibGUgcm9sZT1cXFwiZ3JpZFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7e3VuaXF1ZUlkfX0tdGl0bGVcXFwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cXFwie3thY3RpdmVEYXRlSWR9fVxcXCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoLTEpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoIGNvbHNwYW49XFxcIjNcXFwiPjxidXR0b24gaWQ9XFxcInt7dW5pcXVlSWR9fS10aXRsZVxcXCIgcm9sZT1cXFwiaGVhZGluZ1xcXCIgYXJpYS1saXZlPVxcXCJhc3NlcnRpdmVcXFwiIGFyaWEtYXRvbWljPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlTW9kZSgpXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO1xcXCI+PHN0cm9uZz57e3RpdGxlfX08L3N0cm9uZz48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodFxcXCIgbmctY2xpY2s9XFxcIm1vdmUoMSlcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFxcXCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgIDwvdHI+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVxcXCJyb3cgaW4gcm93cyB0cmFjayBieSAkaW5kZXhcXFwiPlxcbiAgICAgIDx0ZCBuZy1yZXBlYXQ9XFxcImR0IGluIHJvdyB0cmFjayBieSBkdC5kYXRlXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHJvbGU9XFxcImdyaWRjZWxsXFxcIiBpZD1cXFwie3tkdC51aWR9fVxcXCIgYXJpYS1kaXNhYmxlZD1cXFwie3shIWR0LmRpc2FibGVkfX1cXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xhc3M9XFxcIntcXCdidG4taW5mb1xcJzogZHQuc2VsZWN0ZWQsIGFjdGl2ZTogaXNBY3RpdmUoZHQpfVxcXCIgbmctY2xpY2s9XFxcInNlbGVjdChkdC5kYXRlKVxcXCIgbmctZGlzYWJsZWQ9XFxcImR0LmRpc2FibGVkXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjxzcGFuIG5nLWNsYXNzPVxcXCJ7XFwndGV4dC1pbmZvXFwnOiBkdC5jdXJyZW50fVxcXCI+e3tkdC5sYWJlbH19PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIixcIjx0YWJsZT5cXG5cdDx0Ym9keT5cXG5cdFx0PHRyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJpbmNyZW1lbnRIb3VycygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJpbmNyZW1lbnRNaW51dGVzKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcXFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cXFwic2hvd01lcmlkaWFuXFxcIj48L3RkPlxcblx0XHQ8L3RyPlxcblx0XHQ8dHI+XFxuXHRcdFx0PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MHB4O1xcXCIgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnaGFzLWVycm9yXFwnOiBpbnZhbGlkSG91cnN9XFxcIj5cXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuZy1tb2RlbD1cXFwiaG91cnNcXFwiIG5nLWNoYW5nZT1cXFwidXBkYXRlSG91cnMoKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclxcXCIgbmctbW91c2V3aGVlbD1cXFwiaW5jcmVtZW50SG91cnMoKVxcXCIgbmctcmVhZG9ubHk9XFxcInJlYWRvbmx5SW5wdXRcXFwiIG1heGxlbmd0aD1cXFwiMlxcXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQ+OjwvdGQ+XFxuXHRcdFx0PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MHB4O1xcXCIgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnaGFzLWVycm9yXFwnOiBpbnZhbGlkTWludXRlc31cXFwiPlxcblx0XHRcdFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5nLW1vZGVsPVxcXCJtaW51dGVzXFxcIiBuZy1jaGFuZ2U9XFxcInVwZGF0ZU1pbnV0ZXMoKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclxcXCIgbmctcmVhZG9ubHk9XFxcInJlYWRvbmx5SW5wdXRcXFwiIG1heGxlbmd0aD1cXFwiMlxcXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cXFwic2hvd01lcmlkaWFuXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCB0ZXh0LWNlbnRlclxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZU1lcmlkaWFuKClcXFwiPnt7bWVyaWRpYW59fTwvYnV0dG9uPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHRcdDx0ciBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcblx0XHRcdDx0ZD48YSBuZy1jbGljaz1cXFwiZGVjcmVtZW50SG91cnMoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXFxcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVxcXCJkZWNyZW1lbnRNaW51dGVzKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blxcXCI+PC9zcGFuPjwvYT48L3RkPlxcblx0XHRcdDx0ZCBuZy1zaG93PVxcXCJzaG93TWVyaWRpYW5cXFwiPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHQ8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYmFja2Ryb3AgZmFkZSB7eyBiYWNrZHJvcENsYXNzIH19XFxcIlxcbiAgICAgbmctY2xhc3M9XFxcIntpbjogYW5pbWF0ZX1cXFwiXFxuICAgICBuZy1zdHlsZT1cXFwie1xcJ3otaW5kZXhcXCc6IDEwNDAgKyAoaW5kZXggJiYgMSB8fCAwKSArIGluZGV4KjEwfVxcXCJcXG4+PC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvbW9kYWwvd2luZG93Lmh0bWxcIixcIjxkaXYgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBuZy1jbGFzcz1cXFwie2luOiBhbmltYXRlfVxcXCIgbmctc3R5bGU9XFxcIntcXCd6LWluZGV4XFwnOiAxMDUwICsgaW5kZXgqMTAsIGRpc3BsYXk6IFxcJ2Jsb2NrXFwnfVxcXCIgbmctY2xpY2s9XFxcImNsb3NlKCRldmVudClcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnbW9kYWwtc21cXCc6IHNpemUgPT0gXFwnc21cXCcsIFxcJ21vZGFsLWxnXFwnOiBzaXplID09IFxcJ2xnXFwnfVxcXCI+PGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCIgbW9kYWwtdHJhbnNjbHVkZT48L2Rpdj48L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyXFxcIiBuZy1jbGFzcz1cXFwidHlwZSAmJiBcXCdwcm9ncmVzcy1iYXItXFwnICsgdHlwZVxcXCIgcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiIGFyaWEtdmFsdWVub3c9XFxcInt7dmFsdWV9fVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3ttYXh9fVxcXCIgbmctc3R5bGU9XFxcInt3aWR0aDogcGVyY2VudCArIFxcJyVcXCd9XFxcIiBhcmlhLXZhbHVldGV4dD1cXFwie3twZXJjZW50IHwgbnVtYmVyOjB9fSVcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3MuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyXFxcIiBuZy1jbGFzcz1cXFwidHlwZSAmJiBcXCdwcm9ncmVzcy1iYXItXFwnICsgdHlwZVxcXCIgcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiIGFyaWEtdmFsdWVub3c9XFxcInt7dmFsdWV9fVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3ttYXh9fVxcXCIgbmctc3R5bGU9XFxcInt3aWR0aDogcGVyY2VudCArIFxcJyVcXCd9XFxcIiBhcmlhLXZhbHVldGV4dD1cXFwie3twZXJjZW50IHwgbnVtYmVyOjB9fSVcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIsXCI8c3BhbiBuZy1tb3VzZWxlYXZlPVxcXCJyZXNldCgpXFxcIiBuZy1rZXlkb3duPVxcXCJvbktleWRvd24oJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIHJvbGU9XFxcInNsaWRlclxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwie3tyYW5nZS5sZW5ndGh9fVxcXCIgYXJpYS12YWx1ZW5vdz1cXFwie3t2YWx1ZX19XFxcIj5cXG4gICAgPGkgbmctcmVwZWF0PVxcXCJyIGluIHJhbmdlIHRyYWNrIGJ5ICRpbmRleFxcXCIgbmctbW91c2VlbnRlcj1cXFwiZW50ZXIoJGluZGV4ICsgMSlcXFwiIG5nLWNsaWNrPVxcXCJyYXRlKCRpbmRleCArIDEpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uXFxcIiBuZy1jbGFzcz1cXFwiJGluZGV4IDwgdmFsdWUgJiYgKHIuc3RhdGVPbiB8fCBcXCdnbHlwaGljb24tc3RhclxcJykgfHwgKHIuc3RhdGVPZmYgfHwgXFwnZ2x5cGhpY29uLXN0YXItZW1wdHlcXCcpXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj4oe3sgJGluZGV4IDwgdmFsdWUgPyBcXCcqXFwnIDogXFwnIFxcJyB9fSk8L3NwYW4+XFxuICAgIDwvaT5cXG48L3NwYW4+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidGVtcGxhdGUvdGFicy90YWIuaHRtbFwiLFwiPGxpIG5nLWNsYXNzPVxcXCJ7YWN0aXZlOiBhY3RpdmUsIGRpc2FibGVkOiBkaXNhYmxlZH1cXFwiPlxcbiAgPGEgaHJlZiBuZy1jbGljaz1cXFwic2VsZWN0KClcXFwiIHRhYi1oZWFkaW5nLXRyYW5zY2x1ZGU+e3toZWFkaW5nfX08L2E+XFxuPC9saT5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ0ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sXCIsXCI8ZGl2PlxcbiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXt7dHlwZSB8fCBcXCd0YWJzXFwnfX1cXFwiIG5nLWNsYXNzPVxcXCJ7XFwnbmF2LXN0YWNrZWRcXCc6IHZlcnRpY2FsLCBcXCduYXYtanVzdGlmaWVkXFwnOiBqdXN0aWZpZWR9XFxcIiBuZy10cmFuc2NsdWRlPjwvdWw+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0YWItY29udGVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYi1wYW5lXFxcIiBcXG4gICAgICAgICBuZy1yZXBlYXQ9XFxcInRhYiBpbiB0YWJzXFxcIiBcXG4gICAgICAgICBuZy1jbGFzcz1cXFwie2FjdGl2ZTogdGFiLmFjdGl2ZX1cXFwiXFxuICAgICAgICAgdGFiLWNvbnRlbnQtdHJhbnNjbHVkZT1cXFwidGFiXFxcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIik7fV0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdWktdGVtcGxhdGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoXCJhcmkudWkuY29yZS5uZy1zdHJhcC10ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcInBvcG92ZXIvcG9wb3Zlci50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicG9wb3ZlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhcnJvd1xcXCI+PC9kaXY+XFxuICA8aDMgY2xhc3M9XFxcInBvcG92ZXItdGl0bGVcXFwiIG5nLWJpbmQ9XFxcInRpdGxlXFxcIiBuZy1zaG93PVxcXCJ0aXRsZVxcXCI+PC9oMz5cXG4gIDxkaXYgY2xhc3M9XFxcInBvcG92ZXItY29udGVudFxcXCIgbmctYmluZD1cXFwiY29udGVudFxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidG9vbHRpcC90b29sdGlwLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwIGluXFxcIiBuZy1zaG93PVxcXCJ0aXRsZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLWFycm93XFxcIj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInRvb2x0aXAtaW5uZXJcXFwiIG5nLWJpbmQ9XFxcInRpdGxlXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIik7fV0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RyYXAtdGVtcGxhdGVzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5hY2NvcmRpb24nLCBbJ3VpLmJvb3RzdHJhcC5jb2xsYXBzZSddKVxuXG4uY29uc3RhbnQoJ2FjY29yZGlvbkNvbmZpZycsIHtcbiAgY2xvc2VPdGhlcnM6IHRydWVcbn0pXG5cbi5jb250cm9sbGVyKCdBY2NvcmRpb25Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJ2FjY29yZGlvbkNvbmZpZycsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgYWNjb3JkaW9uQ29uZmlnKSB7XG5cbiAgLy8gVGhpcyBhcnJheSBrZWVwcyB0cmFjayBvZiB0aGUgYWNjb3JkaW9uIGdyb3Vwc1xuICB0aGlzLmdyb3VwcyA9IFtdO1xuXG4gIC8vIEVuc3VyZSB0aGF0IGFsbCB0aGUgZ3JvdXBzIGluIHRoaXMgYWNjb3JkaW9uIGFyZSBjbG9zZWQsIHVubGVzcyBjbG9zZS1vdGhlcnMgZXhwbGljaXRseSBzYXlzIG5vdCB0b1xuICB0aGlzLmNsb3NlT3RoZXJzID0gZnVuY3Rpb24ob3Blbkdyb3VwKSB7XG4gICAgdmFyIGNsb3NlT3RoZXJzID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmNsb3NlT3RoZXJzKSA/ICRzY29wZS4kZXZhbCgkYXR0cnMuY2xvc2VPdGhlcnMpIDogYWNjb3JkaW9uQ29uZmlnLmNsb3NlT3RoZXJzO1xuICAgIGlmICggY2xvc2VPdGhlcnMgKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5ncm91cHMsIGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICBpZiAoIGdyb3VwICE9PSBvcGVuR3JvdXAgKSB7XG4gICAgICAgICAgZ3JvdXAuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhY2NvcmRpb24tZ3JvdXAgZGlyZWN0aXZlIHRvIGFkZCBpdHNlbGYgdG8gdGhlIGFjY29yZGlvblxuICB0aGlzLmFkZEdyb3VwID0gZnVuY3Rpb24oZ3JvdXBTY29wZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwU2NvcGUpO1xuXG4gICAgZ3JvdXBTY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGF0LnJlbW92ZUdyb3VwKGdyb3VwU2NvcGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFjY29yZGlvbi1ncm91cCBkaXJlY3RpdmUgd2hlbiB0byByZW1vdmUgaXRzZWxmXG4gIHRoaXMucmVtb3ZlR3JvdXAgPSBmdW5jdGlvbihncm91cCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuICAgIGlmICggaW5kZXggIT09IC0xICkge1xuICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbn1dKVxuXG4vLyBUaGUgYWNjb3JkaW9uIGRpcmVjdGl2ZSBzaW1wbHkgc2V0cyB1cCB0aGUgZGlyZWN0aXZlIGNvbnRyb2xsZXJcbi8vIGFuZCBhZGRzIGFuIGFjY29yZGlvbiBDU1MgY2xhc3MgdG8gaXRzZWxmIGVsZW1lbnQuXG4uZGlyZWN0aXZlKCdhY2NvcmRpb24nLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6J0VBJyxcbiAgICBjb250cm9sbGVyOidBY2NvcmRpb25Db250cm9sbGVyJyxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi5odG1sJ1xuICB9O1xufSlcblxuLy8gVGhlIGFjY29yZGlvbi1ncm91cCBkaXJlY3RpdmUgaW5kaWNhdGVzIGEgYmxvY2sgb2YgaHRtbCB0aGF0IHdpbGwgZXhwYW5kIGFuZCBjb2xsYXBzZSBpbiBhbiBhY2NvcmRpb25cbi5kaXJlY3RpdmUoJ2FjY29yZGlvbkdyb3VwJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTonXmFjY29yZGlvbicsICAgICAgICAgLy8gV2UgbmVlZCB0aGlzIGRpcmVjdGl2ZSB0byBiZSBpbnNpZGUgYW4gYWNjb3JkaW9uXG4gICAgcmVzdHJpY3Q6J0VBJyxcbiAgICB0cmFuc2NsdWRlOnRydWUsICAgICAgICAgICAgICAvLyBJdCB0cmFuc2NsdWRlcyB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdGl2ZSBpbnRvIHRoZSB0ZW1wbGF0ZVxuICAgIHJlcGxhY2U6IHRydWUsICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGRpcmVjdGl2ZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIHRlbXBsYXRlXG4gICAgdGVtcGxhdGVVcmw6J3RlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAJywgICAgICAgICAgICAgICAvLyBJbnRlcnBvbGF0ZSB0aGUgaGVhZGluZyBhdHRyaWJ1dGUgb250byB0aGlzIHNjb3BlXG4gICAgICBpc09wZW46ICc9PycsXG4gICAgICBpc0Rpc2FibGVkOiAnPT8nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0SGVhZGluZyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gZWxlbWVudDtcbiAgICAgIH07XG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGFjY29yZGlvbkN0cmwpIHtcbiAgICAgIGFjY29yZGlvbkN0cmwuYWRkR3JvdXAoc2NvcGUpO1xuXG4gICAgICBzY29wZS4kd2F0Y2goJ2lzT3BlbicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgYWNjb3JkaW9uQ3RybC5jbG9zZU90aGVycyhzY29wZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzY29wZS50b2dnbGVPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggIXNjb3BlLmlzRGlzYWJsZWQgKSB7XG4gICAgICAgICAgc2NvcGUuaXNPcGVuID0gIXNjb3BlLmlzT3BlbjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59KVxuXG4vLyBVc2UgYWNjb3JkaW9uLWhlYWRpbmcgYmVsb3cgYW4gYWNjb3JkaW9uLWdyb3VwIHRvIHByb3ZpZGUgYSBoZWFkaW5nIGNvbnRhaW5pbmcgSFRNTFxuLy8gPGFjY29yZGlvbi1ncm91cD5cbi8vICAgPGFjY29yZGlvbi1oZWFkaW5nPkhlYWRpbmcgY29udGFpbmluZyBIVE1MIC0gPGltZyBzcmM9XCIuLi5cIj48L2FjY29yZGlvbi1oZWFkaW5nPlxuLy8gPC9hY2NvcmRpb24tZ3JvdXA+XG4uZGlyZWN0aXZlKCdhY2NvcmRpb25IZWFkaW5nJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSwgICAvLyBHcmFiIHRoZSBjb250ZW50cyB0byBiZSB1c2VkIGFzIHRoZSBoZWFkaW5nXG4gICAgdGVtcGxhdGU6ICcnLCAgICAgICAvLyBJbiBlZmZlY3QgcmVtb3ZlIHRoaXMgZWxlbWVudCFcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHJlcXVpcmU6ICdeYWNjb3JkaW9uR3JvdXAnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyLCBhY2NvcmRpb25Hcm91cEN0cmwsIHRyYW5zY2x1ZGUpIHtcbiAgICAgIC8vIFBhc3MgdGhlIGhlYWRpbmcgdG8gdGhlIGFjY29yZGlvbi1ncm91cCBjb250cm9sbGVyXG4gICAgICAvLyBzbyB0aGF0IGl0IGNhbiBiZSB0cmFuc2NsdWRlZCBpbnRvIHRoZSByaWdodCBwbGFjZSBpbiB0aGUgdGVtcGxhdGVcbiAgICAgIC8vIFtUaGUgc2Vjb25kIHBhcmFtZXRlciB0byB0cmFuc2NsdWRlIGNhdXNlcyB0aGUgZWxlbWVudHMgdG8gYmUgY2xvbmVkIHNvIHRoYXQgdGhleSB3b3JrIGluIG5nLXJlcGVhdF1cbiAgICAgIGFjY29yZGlvbkdyb3VwQ3RybC5zZXRIZWFkaW5nKHRyYW5zY2x1ZGUoc2NvcGUsIGZ1bmN0aW9uKCkge30pKTtcbiAgICB9XG4gIH07XG59KVxuXG4vLyBVc2UgaW4gdGhlIGFjY29yZGlvbi1ncm91cCB0ZW1wbGF0ZSB0byBpbmRpY2F0ZSB3aGVyZSB5b3Ugd2FudCB0aGUgaGVhZGluZyB0byBiZSB0cmFuc2NsdWRlZFxuLy8gWW91IG11c3QgcHJvdmlkZSB0aGUgcHJvcGVydHkgb24gdGhlIGFjY29yZGlvbi1ncm91cCBjb250cm9sbGVyIHRoYXQgd2lsbCBob2xkIHRoZSB0cmFuc2NsdWRlZCBlbGVtZW50XG4vLyA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWdyb3VwXCI+XG4vLyAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGluZ1wiID48YSAuLi4gYWNjb3JkaW9uLXRyYW5zY2x1ZGU9XCJoZWFkaW5nXCI+Li4uPC9hPjwvZGl2PlxuLy8gICAuLi5cbi8vIDwvZGl2PlxuLmRpcmVjdGl2ZSgnYWNjb3JkaW9uVHJhbnNjbHVkZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6ICdeYWNjb3JkaW9uR3JvdXAnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyLCBjb250cm9sbGVyKSB7XG4gICAgICBzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBjb250cm9sbGVyW2F0dHIuYWNjb3JkaW9uVHJhbnNjbHVkZV07IH0sIGZ1bmN0aW9uKGhlYWRpbmcpIHtcbiAgICAgICAgaWYgKCBoZWFkaW5nICkge1xuICAgICAgICAgIGVsZW1lbnQuaHRtbCgnJyk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoaGVhZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2FjY29yZGlvbi9hY2NvcmRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmFsZXJ0JywgW10pXG5cbi5jb250cm9sbGVyKCdBbGVydENvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMpIHtcbiAgJHNjb3BlLmNsb3NlYWJsZSA9ICdjbG9zZScgaW4gJGF0dHJzO1xuICB0aGlzLmNsb3NlID0gJHNjb3BlLmNsb3NlO1xufV0pXG5cbi5kaXJlY3RpdmUoJ2FsZXJ0JywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OidFQScsXG4gICAgY29udHJvbGxlcjonQWxlcnRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZVVybDondGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbCcsXG4gICAgdHJhbnNjbHVkZTp0cnVlLFxuICAgIHJlcGxhY2U6dHJ1ZSxcbiAgICBzY29wZToge1xuICAgICAgdHlwZTogJ0AnLFxuICAgICAgY2xvc2U6ICcmJ1xuICAgIH1cbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ2Rpc21pc3NPblRpbWVvdXQnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24oJHRpbWVvdXQpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiAnYWxlcnQnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgYWxlcnRDdHJsKSB7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBhbGVydEN0cmwuY2xvc2UoKTtcbiAgICAgIH0sIHBhcnNlSW50KGF0dHJzLmRpc21pc3NPblRpbWVvdXQsIDEwKSk7XG4gICAgfVxuICB9O1xufV0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL2FsZXJ0L2FsZXJ0LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5idXR0b25zJywgW10pXG5cbi5jb25zdGFudCgnYnV0dG9uQ29uZmlnJywge1xuICBhY3RpdmVDbGFzczogJ2FjdGl2ZScsXG4gIHRvZ2dsZUV2ZW50OiAnY2xpY2snXG59KVxuXG4uY29udHJvbGxlcignQnV0dG9uc0NvbnRyb2xsZXInLCBbJ2J1dHRvbkNvbmZpZycsIGZ1bmN0aW9uKGJ1dHRvbkNvbmZpZykge1xuICB0aGlzLmFjdGl2ZUNsYXNzID0gYnV0dG9uQ29uZmlnLmFjdGl2ZUNsYXNzIHx8ICdhY3RpdmUnO1xuICB0aGlzLnRvZ2dsZUV2ZW50ID0gYnV0dG9uQ29uZmlnLnRvZ2dsZUV2ZW50IHx8ICdjbGljayc7XG59XSlcblxuLmRpcmVjdGl2ZSgnYnRuUmFkaW8nLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogWydidG5SYWRpbycsICduZ01vZGVsJ10sXG4gICAgY29udHJvbGxlcjogJ0J1dHRvbnNDb250cm9sbGVyJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIGJ1dHRvbnNDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG5cbiAgICAgIC8vbW9kZWwgLT4gVUlcbiAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoYnV0dG9uc0N0cmwuYWN0aXZlQ2xhc3MsIGFuZ3VsYXIuZXF1YWxzKG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlLCBzY29wZS4kZXZhbChhdHRycy5idG5SYWRpbykpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vdWktPm1vZGVsXG4gICAgICBlbGVtZW50LmJpbmQoYnV0dG9uc0N0cmwudG9nZ2xlRXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQWN0aXZlID0gZWxlbWVudC5oYXNDbGFzcyhidXR0b25zQ3RybC5hY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgaWYgKCFpc0FjdGl2ZSB8fCBhbmd1bGFyLmlzRGVmaW5lZChhdHRycy51bmNoZWNrYWJsZSkpIHtcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZShpc0FjdGl2ZSA/IG51bGwgOiBzY29wZS4kZXZhbChhdHRycy5idG5SYWRpbykpO1xuICAgICAgICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCdidG5DaGVja2JveCcsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiBbJ2J0bkNoZWNrYm94JywgJ25nTW9kZWwnXSxcbiAgICBjb250cm9sbGVyOiAnQnV0dG9uc0NvbnRyb2xsZXInLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICB2YXIgYnV0dG9uc0N0cmwgPSBjdHJsc1swXSwgbmdNb2RlbEN0cmwgPSBjdHJsc1sxXTtcblxuICAgICAgZnVuY3Rpb24gZ2V0VHJ1ZVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShhdHRycy5idG5DaGVja2JveFRydWUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRGYWxzZVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShhdHRycy5idG5DaGVja2JveEZhbHNlLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldENoZWNrYm94VmFsdWUoYXR0cmlidXRlVmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgdmFsID0gc2NvcGUuJGV2YWwoYXR0cmlidXRlVmFsdWUpO1xuICAgICAgICByZXR1cm4gYW5ndWxhci5pc0RlZmluZWQodmFsKSA/IHZhbCA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgLy9tb2RlbCAtPiBVSVxuICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhidXR0b25zQ3RybC5hY3RpdmVDbGFzcywgYW5ndWxhci5lcXVhbHMobmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUsIGdldFRydWVWYWx1ZSgpKSk7XG4gICAgICB9O1xuXG4gICAgICAvL3VpLT5tb2RlbFxuICAgICAgZWxlbWVudC5iaW5kKGJ1dHRvbnNDdHJsLnRvZ2dsZUV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZShlbGVtZW50Lmhhc0NsYXNzKGJ1dHRvbnNDdHJsLmFjdGl2ZUNsYXNzKSA/IGdldEZhbHNlVmFsdWUoKSA6IGdldFRydWVWYWx1ZSgpKTtcbiAgICAgICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvYnV0dG9ucy9idXR0b25zLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5jb2xsYXBzZScsIFsndWkuYm9vdHN0cmFwLnRyYW5zaXRpb24nXSlcblxuICAuZGlyZWN0aXZlKCdjb2xsYXBzZScsIFsnJHRyYW5zaXRpb24nLCBmdW5jdGlvbiAoJHRyYW5zaXRpb24pIHtcblxuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgdmFyIGluaXRpYWxBbmltU2tpcCA9IHRydWU7XG4gICAgICAgIHZhciBjdXJyZW50VHJhbnNpdGlvbjtcblxuICAgICAgICBmdW5jdGlvbiBkb1RyYW5zaXRpb24oY2hhbmdlKSB7XG4gICAgICAgICAgdmFyIG5ld1RyYW5zaXRpb24gPSAkdHJhbnNpdGlvbihlbGVtZW50LCBjaGFuZ2UpO1xuICAgICAgICAgIGlmIChjdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uY2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uID0gbmV3VHJhbnNpdGlvbjtcbiAgICAgICAgICBuZXdUcmFuc2l0aW9uLnRoZW4obmV3VHJhbnNpdGlvbkRvbmUsIG5ld1RyYW5zaXRpb25Eb25lKTtcbiAgICAgICAgICByZXR1cm4gbmV3VHJhbnNpdGlvbjtcblxuICAgICAgICAgIGZ1bmN0aW9uIG5ld1RyYW5zaXRpb25Eb25lKCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGl0J3MgdGhpcyB0cmFuc2l0aW9uLCBvdGhlcndpc2UsIGxlYXZlIGl0IGFsb25lLlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUcmFuc2l0aW9uID09PSBuZXdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4cGFuZCgpIHtcbiAgICAgICAgICBpZiAoaW5pdGlhbEFuaW1Ta2lwKSB7XG4gICAgICAgICAgICBpbml0aWFsQW5pbVNraXAgPSBmYWxzZTtcbiAgICAgICAgICAgIGV4cGFuZERvbmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKS5hZGRDbGFzcygnY29sbGFwc2luZycpO1xuICAgICAgICAgICAgZG9UcmFuc2l0aW9uKHsgaGVpZ2h0OiBlbGVtZW50WzBdLnNjcm9sbEhlaWdodCArICdweCcgfSkudGhlbihleHBhbmREb25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHBhbmREb25lKCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKTtcbiAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdjb2xsYXBzZSBpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY3NzKHtoZWlnaHQ6ICdhdXRvJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29sbGFwc2UoKSB7XG4gICAgICAgICAgaWYgKGluaXRpYWxBbmltU2tpcCkge1xuICAgICAgICAgICAgaW5pdGlhbEFuaW1Ta2lwID0gZmFsc2U7XG4gICAgICAgICAgICBjb2xsYXBzZURvbmUoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtoZWlnaHQ6IDB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zIGRvbid0IHdvcmsgd2l0aCBoZWlnaHQ6IGF1dG8sIHNvIHdlIGhhdmUgdG8gbWFudWFsbHkgY2hhbmdlIHRoZSBoZWlnaHQgdG8gYSBzcGVjaWZpYyB2YWx1ZVxuICAgICAgICAgICAgZWxlbWVudC5jc3MoeyBoZWlnaHQ6IGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JyB9KTtcbiAgICAgICAgICAgIC8vdHJpZ2dlciByZWZsb3cgc28gYSBicm93c2VyIHJlYWxpemVzIHRoYXQgaGVpZ2h0IHdhcyB1cGRhdGVkIGZyb20gYXV0byB0byBhIHNwZWNpZmljIHZhbHVlXG4gICAgICAgICAgICB2YXIgeCA9IGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlIGluJykuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKTtcblxuICAgICAgICAgICAgZG9UcmFuc2l0aW9uKHsgaGVpZ2h0OiAwIH0pLnRoZW4oY29sbGFwc2VEb25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb2xsYXBzZURvbmUoKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpO1xuICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuY29sbGFwc2UsIGZ1bmN0aW9uIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgY29sbGFwc2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvY29sbGFwc2UvY29sbGFwc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLmRhdGVwYXJzZXInLCBbXSlcblxuLnNlcnZpY2UoJ2RhdGVQYXJzZXInLCBbJyRsb2NhbGUnLCAnb3JkZXJCeUZpbHRlcicsIGZ1bmN0aW9uKCRsb2NhbGUsIG9yZGVyQnlGaWx0ZXIpIHtcblxuICB0aGlzLnBhcnNlcnMgPSB7fTtcblxuICB2YXIgZm9ybWF0Q29kZVRvUmVnZXggPSB7XG4gICAgJ3l5eXknOiB7XG4gICAgICByZWdleDogJ1xcXFxkezR9JyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLnllYXIgPSArdmFsdWU7IH1cbiAgICB9LFxuICAgICd5eSc6IHtcbiAgICAgIHJlZ2V4OiAnXFxcXGR7Mn0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMueWVhciA9ICt2YWx1ZSArIDIwMDA7IH1cbiAgICB9LFxuICAgICd5Jzoge1xuICAgICAgcmVnZXg6ICdcXFxcZHsxLDR9JyxcbiAgICAgIGFwcGx5OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLnllYXIgPSArdmFsdWU7IH1cbiAgICB9LFxuICAgICdNTU1NJzoge1xuICAgICAgcmVnZXg6ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5NT05USC5qb2luKCd8JyksXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5tb250aCA9ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5NT05USC5pbmRleE9mKHZhbHVlKTsgfVxuICAgIH0sXG4gICAgJ01NTSc6IHtcbiAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlRNT05USC5qb2luKCd8JyksXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5tb250aCA9ICRsb2NhbGUuREFURVRJTUVfRk9STUFUUy5TSE9SVE1PTlRILmluZGV4T2YodmFsdWUpOyB9XG4gICAgfSxcbiAgICAnTU0nOiB7XG4gICAgICByZWdleDogJzBbMS05XXwxWzAtMl0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSB2YWx1ZSAtIDE7IH1cbiAgICB9LFxuICAgICdNJzoge1xuICAgICAgcmVnZXg6ICdbMS05XXwxWzAtMl0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMubW9udGggPSB2YWx1ZSAtIDE7IH1cbiAgICB9LFxuICAgICdkZCc6IHtcbiAgICAgIHJlZ2V4OiAnWzAtMl1bMC05XXsxfXwzWzAtMV17MX0nLFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7IHRoaXMuZGF0ZSA9ICt2YWx1ZTsgfVxuICAgIH0sXG4gICAgJ2QnOiB7XG4gICAgICByZWdleDogJ1sxLTJdP1swLTldezF9fDNbMC0xXXsxfScsXG4gICAgICBhcHBseTogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5kYXRlID0gK3ZhbHVlOyB9XG4gICAgfSxcbiAgICAnRUVFRSc6IHtcbiAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuREFZLmpvaW4oJ3wnKVxuICAgIH0sXG4gICAgJ0VFRSc6IHtcbiAgICAgIHJlZ2V4OiAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlREQVkuam9pbignfCcpXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihmb3JtYXQpIHtcbiAgICB2YXIgbWFwID0gW10sIHJlZ2V4ID0gZm9ybWF0LnNwbGl0KCcnKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChmb3JtYXRDb2RlVG9SZWdleCwgZnVuY3Rpb24oZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGluZGV4ID0gZm9ybWF0LmluZGV4T2YoY29kZSk7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5zcGxpdCgnJyk7XG5cbiAgICAgICAgcmVnZXhbaW5kZXhdID0gJygnICsgZGF0YS5yZWdleCArICcpJztcbiAgICAgICAgZm9ybWF0W2luZGV4XSA9ICckJzsgLy8gQ3VzdG9tIHN5bWJvbCB0byBkZWZpbmUgY29uc3VtZWQgcGFydCBvZiBmb3JtYXRcbiAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMSwgbiA9IGluZGV4ICsgY29kZS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICByZWdleFtpXSA9ICcnO1xuICAgICAgICAgIGZvcm1hdFtpXSA9ICckJztcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQuam9pbignJyk7XG5cbiAgICAgICAgbWFwLnB1c2goeyBpbmRleDogaW5kZXgsIGFwcGx5OiBkYXRhLmFwcGx5IH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKCdeJyArIHJlZ2V4LmpvaW4oJycpICsgJyQnKSxcbiAgICAgIG1hcDogb3JkZXJCeUZpbHRlcihtYXAsICdpbmRleCcpXG4gICAgfTtcbiAgfVxuXG4gIHRoaXMucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgZm9ybWF0KSB7XG4gICAgaWYgKCAhYW5ndWxhci5pc1N0cmluZyhpbnB1dCkgfHwgIWZvcm1hdCApIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSAkbG9jYWxlLkRBVEVUSU1FX0ZPUk1BVFNbZm9ybWF0XSB8fCBmb3JtYXQ7XG5cbiAgICBpZiAoICF0aGlzLnBhcnNlcnNbZm9ybWF0XSApIHtcbiAgICAgIHRoaXMucGFyc2Vyc1tmb3JtYXRdID0gY3JlYXRlUGFyc2VyKGZvcm1hdCk7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlciA9IHRoaXMucGFyc2Vyc1tmb3JtYXRdLFxuICAgICAgICByZWdleCA9IHBhcnNlci5yZWdleCxcbiAgICAgICAgbWFwID0gcGFyc2VyLm1hcCxcbiAgICAgICAgcmVzdWx0cyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmICggcmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCApIHtcbiAgICAgIHZhciBmaWVsZHMgPSB7IHllYXI6IDE5MDAsIG1vbnRoOiAwLCBkYXRlOiAxLCBob3VyczogMCB9LCBkdDtcblxuICAgICAgZm9yKCB2YXIgaSA9IDEsIG4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IG47IGkrKyApIHtcbiAgICAgICAgdmFyIG1hcHBlciA9IG1hcFtpLTFdO1xuICAgICAgICBpZiAoIG1hcHBlci5hcHBseSApIHtcbiAgICAgICAgICBtYXBwZXIuYXBwbHkuY2FsbChmaWVsZHMsIHJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICggaXNWYWxpZChmaWVsZHMueWVhciwgZmllbGRzLm1vbnRoLCBmaWVsZHMuZGF0ZSkgKSB7XG4gICAgICAgIGR0ID0gbmV3IERhdGUoIGZpZWxkcy55ZWFyLCBmaWVsZHMubW9udGgsIGZpZWxkcy5kYXRlLCBmaWVsZHMuaG91cnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHQ7XG4gICAgfVxuICB9O1xuXG4gIC8vIENoZWNrIGlmIGRhdGUgaXMgdmFsaWQgZm9yIHNwZWNpZmljIG1vbnRoIChhbmQgeWVhciBmb3IgRmVicnVhcnkpLlxuICAvLyBNb250aDogMCA9IEphbiwgMSA9IEZlYiwgZXRjXG4gIGZ1bmN0aW9uIGlzVmFsaWQoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgICBpZiAoIG1vbnRoID09PSAxICYmIGRhdGUgPiAyOCkge1xuICAgICAgICByZXR1cm4gZGF0ZSA9PT0gMjkgJiYgKCh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoIG1vbnRoID09PSAzIHx8IG1vbnRoID09PSA1IHx8IG1vbnRoID09PSA4IHx8IG1vbnRoID09PSAxMCkge1xuICAgICAgICByZXR1cm4gZGF0ZSA8IDMxO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZGF0ZXBhcnNlci9kYXRlcGFyc2VyLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5kYXRlcGlja2VyJywgWyd1aS5ib290c3RyYXAuZGF0ZXBhcnNlcicsICd1aS5ib290c3RyYXAucG9zaXRpb24nXSlcblxuLmNvbnN0YW50KCdkYXRlcGlja2VyQ29uZmlnJywge1xuICBmb3JtYXREYXk6ICdkZCcsXG4gIGZvcm1hdE1vbnRoOiAnTU1NTScsXG4gIGZvcm1hdFllYXI6ICd5eXl5JyxcbiAgZm9ybWF0RGF5SGVhZGVyOiAnRUVFJyxcbiAgZm9ybWF0RGF5VGl0bGU6ICdNTU1NIHl5eXknLFxuICBmb3JtYXRNb250aFRpdGxlOiAneXl5eScsXG4gIGRhdGVwaWNrZXJNb2RlOiAnZGF5JyxcbiAgbWluTW9kZTogJ2RheScsXG4gIG1heE1vZGU6ICd5ZWFyJyxcbiAgc2hvd1dlZWtzOiB0cnVlLFxuICBzdGFydGluZ0RheTogMCxcbiAgeWVhclJhbmdlOiAyMCxcbiAgbWluRGF0ZTogbnVsbCxcbiAgbWF4RGF0ZTogbnVsbFxufSlcblxuLmNvbnRyb2xsZXIoJ0RhdGVwaWNrZXJDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRwYXJzZScsICckaW50ZXJwb2xhdGUnLCAnJHRpbWVvdXQnLCAnJGxvZycsICdkYXRlRmlsdGVyJywgJ2RhdGVwaWNrZXJDb25maWcnLCBmdW5jdGlvbigkc2NvcGUsICRhdHRycywgJHBhcnNlLCAkaW50ZXJwb2xhdGUsICR0aW1lb3V0LCAkbG9nLCBkYXRlRmlsdGVyLCBkYXRlcGlja2VyQ29uZmlnKSB7XG4gIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIG5nTW9kZWxDdHJsID0geyAkc2V0Vmlld1ZhbHVlOiBhbmd1bGFyLm5vb3AgfTsgLy8gbnVsbE1vZGVsQ3RybDtcblxuICAvLyBNb2RlcyBjaGFpblxuICB0aGlzLm1vZGVzID0gWydkYXknLCAnbW9udGgnLCAneWVhciddO1xuXG4gIC8vIENvbmZpZ3VyYXRpb24gYXR0cmlidXRlc1xuICBhbmd1bGFyLmZvckVhY2goWydmb3JtYXREYXknLCAnZm9ybWF0TW9udGgnLCAnZm9ybWF0WWVhcicsICdmb3JtYXREYXlIZWFkZXInLCAnZm9ybWF0RGF5VGl0bGUnLCAnZm9ybWF0TW9udGhUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgJ21pbk1vZGUnLCAnbWF4TW9kZScsICdzaG93V2Vla3MnLCAnc3RhcnRpbmdEYXknLCAneWVhclJhbmdlJ10sIGZ1bmN0aW9uKCBrZXksIGluZGV4ICkge1xuICAgIHNlbGZba2V5XSA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRyc1trZXldKSA/IChpbmRleCA8IDggPyAkaW50ZXJwb2xhdGUoJGF0dHJzW2tleV0pKCRzY29wZS4kcGFyZW50KSA6ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRyc1trZXldKSkgOiBkYXRlcGlja2VyQ29uZmlnW2tleV07XG4gIH0pO1xuXG4gIC8vIFdhdGNoYWJsZSBkYXRlIGF0dHJpYnV0ZXNcbiAgYW5ndWxhci5mb3JFYWNoKFsnbWluRGF0ZScsICdtYXhEYXRlJ10sIGZ1bmN0aW9uKCBrZXkgKSB7XG4gICAgaWYgKCAkYXR0cnNba2V5XSApIHtcbiAgICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzW2tleV0pLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBzZWxmW2tleV0gPSB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XG4gICAgICAgIHNlbGYucmVmcmVzaFZpZXcoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmW2tleV0gPSBkYXRlcGlja2VyQ29uZmlnW2tleV0gPyBuZXcgRGF0ZShkYXRlcGlja2VyQ29uZmlnW2tleV0pIDogbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS5kYXRlcGlja2VyTW9kZSA9ICRzY29wZS5kYXRlcGlja2VyTW9kZSB8fCBkYXRlcGlja2VyQ29uZmlnLmRhdGVwaWNrZXJNb2RlO1xuICAkc2NvcGUudW5pcXVlSWQgPSAnZGF0ZXBpY2tlci0nICsgJHNjb3BlLiRpZCArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcbiAgdGhpcy5hY3RpdmVEYXRlID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLmluaXREYXRlKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5pbml0RGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG4gICRzY29wZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKGRhdGVPYmplY3QpIHtcbiAgICBpZiAoc2VsZi5jb21wYXJlKGRhdGVPYmplY3QuZGF0ZSwgc2VsZi5hY3RpdmVEYXRlKSA9PT0gMCkge1xuICAgICAgJHNjb3BlLmFjdGl2ZURhdGVJZCA9IGRhdGVPYmplY3QudWlkO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbiggbmdNb2RlbEN0cmxfICkge1xuICAgIG5nTW9kZWxDdHJsID0gbmdNb2RlbEN0cmxfO1xuXG4gICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5yZW5kZXIoKTtcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCBuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSApIHtcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoIG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlICksXG4gICAgICAgICAgaXNWYWxpZCA9ICFpc05hTihkYXRlKTtcblxuICAgICAgaWYgKCBpc1ZhbGlkICkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5lcnJvcignRGF0ZXBpY2tlciBkaXJlY3RpdmU6IFwibmctbW9kZWxcIiB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBvYmplY3QsIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAwMS4wMS4xOTcwIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBSRkMyODIyIG9yIElTTyA4NjAxIGRhdGUuJyk7XG4gICAgICB9XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ2RhdGUnLCBpc1ZhbGlkKTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9O1xuXG4gIHRoaXMucmVmcmVzaFZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIHRoaXMuZWxlbWVudCApIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hWaWV3KCk7XG5cbiAgICAgIHZhciBkYXRlID0gbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgPyBuZXcgRGF0ZShuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSkgOiBudWxsO1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdkYXRlLWRpc2FibGVkJywgIWRhdGUgfHwgKHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rpc2FibGVkKGRhdGUpKSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY3JlYXRlRGF0ZU9iamVjdCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xuICAgIHZhciBtb2RlbCA9IG5nTW9kZWxDdHJsLiRtb2RlbFZhbHVlID8gbmV3IERhdGUobmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUpIDogbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgIGxhYmVsOiBkYXRlRmlsdGVyKGRhdGUsIGZvcm1hdCksXG4gICAgICBzZWxlY3RlZDogbW9kZWwgJiYgdGhpcy5jb21wYXJlKGRhdGUsIG1vZGVsKSA9PT0gMCxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQoZGF0ZSksXG4gICAgICBjdXJyZW50OiB0aGlzLmNvbXBhcmUoZGF0ZSwgbmV3IERhdGUoKSkgPT09IDBcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uKCBkYXRlICkge1xuICAgIHJldHVybiAoKHRoaXMubWluRGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA8IDApIHx8ICh0aGlzLm1heERhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPiAwKSB8fCAoJGF0dHJzLmRhdGVEaXNhYmxlZCAmJiAkc2NvcGUuZGF0ZURpc2FibGVkKHtkYXRlOiBkYXRlLCBtb2RlOiAkc2NvcGUuZGF0ZXBpY2tlck1vZGV9KSkpO1xuICB9O1xuXG4gIC8vIFNwbGl0IGFycmF5IGludG8gc21hbGxlciBhcnJheXNcbiAgdGhpcy5zcGxpdCA9IGZ1bmN0aW9uKGFyciwgc2l6ZSkge1xuICAgIHZhciBhcnJheXMgPSBbXTtcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIGFycmF5cy5wdXNoKGFyci5zcGxpY2UoMCwgc2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlzO1xuICB9O1xuXG4gICRzY29wZS5zZWxlY3QgPSBmdW5jdGlvbiggZGF0ZSApIHtcbiAgICBpZiAoICRzY29wZS5kYXRlcGlja2VyTW9kZSA9PT0gc2VsZi5taW5Nb2RlICkge1xuICAgICAgdmFyIGR0ID0gbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgPyBuZXcgRGF0ZSggbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgKSA6IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgZHQuc2V0RnVsbFllYXIoIGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSApO1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSggZHQgKTtcbiAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5hY3RpdmVEYXRlID0gZGF0ZTtcbiAgICAgICRzY29wZS5kYXRlcGlja2VyTW9kZSA9IHNlbGYubW9kZXNbIHNlbGYubW9kZXMuaW5kZXhPZiggJHNjb3BlLmRhdGVwaWNrZXJNb2RlICkgLSAxIF07XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5tb3ZlID0gZnVuY3Rpb24oIGRpcmVjdGlvbiApIHtcbiAgICB2YXIgeWVhciA9IHNlbGYuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgZGlyZWN0aW9uICogKHNlbGYuc3RlcC55ZWFycyB8fCAwKSxcbiAgICAgICAgbW9udGggPSBzZWxmLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIGRpcmVjdGlvbiAqIChzZWxmLnN0ZXAubW9udGhzIHx8IDApO1xuICAgIHNlbGYuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XG4gICAgc2VsZi5yZWZyZXNoVmlldygpO1xuICB9O1xuXG4gICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oIGRpcmVjdGlvbiApIHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgMTtcblxuICAgIGlmICgoJHNjb3BlLmRhdGVwaWNrZXJNb2RlID09PSBzZWxmLm1heE1vZGUgJiYgZGlyZWN0aW9uID09PSAxKSB8fCAoJHNjb3BlLmRhdGVwaWNrZXJNb2RlID09PSBzZWxmLm1pbk1vZGUgJiYgZGlyZWN0aW9uID09PSAtMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkc2NvcGUuZGF0ZXBpY2tlck1vZGUgPSBzZWxmLm1vZGVzWyBzZWxmLm1vZGVzLmluZGV4T2YoICRzY29wZS5kYXRlcGlja2VyTW9kZSApICsgZGlyZWN0aW9uIF07XG4gIH07XG5cbiAgLy8gS2V5IGV2ZW50IG1hcHBlclxuICAkc2NvcGUua2V5cyA9IHsgMTM6J2VudGVyJywgMzI6J3NwYWNlJywgMzM6J3BhZ2V1cCcsIDM0OidwYWdlZG93bicsIDM1OidlbmQnLCAzNjonaG9tZScsIDM3OidsZWZ0JywgMzg6J3VwJywgMzk6J3JpZ2h0JywgNDA6J2Rvd24nIH07XG5cbiAgdmFyIGZvY3VzRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5lbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgfSwgMCAsIGZhbHNlKTtcbiAgfTtcblxuICAvLyBMaXN0ZW4gZm9yIGZvY3VzIHJlcXVlc3RzIGZyb20gcG9wdXAgZGlyZWN0aXZlXG4gICRzY29wZS4kb24oJ2RhdGVwaWNrZXIuZm9jdXMnLCBmb2N1c0VsZW1lbnQpO1xuXG4gICRzY29wZS5rZXlkb3duID0gZnVuY3Rpb24oIGV2dCApIHtcbiAgICB2YXIga2V5ID0gJHNjb3BlLmtleXNbZXZ0LndoaWNoXTtcblxuICAgIGlmICggIWtleSB8fCBldnQuc2hpZnRLZXkgfHwgZXZ0LmFsdEtleSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoa2V5ID09PSAnZW50ZXInIHx8IGtleSA9PT0gJ3NwYWNlJykge1xuICAgICAgaWYgKCBzZWxmLmlzRGlzYWJsZWQoc2VsZi5hY3RpdmVEYXRlKSkge1xuICAgICAgICByZXR1cm47IC8vIGRvIG5vdGhpbmdcbiAgICAgIH1cbiAgICAgICRzY29wZS5zZWxlY3Qoc2VsZi5hY3RpdmVEYXRlKTtcbiAgICAgIGZvY3VzRWxlbWVudCgpO1xuICAgIH0gZWxzZSBpZiAoZXZ0LmN0cmxLZXkgJiYgKGtleSA9PT0gJ3VwJyB8fCBrZXkgPT09ICdkb3duJykpIHtcbiAgICAgICRzY29wZS50b2dnbGVNb2RlKGtleSA9PT0gJ3VwJyA/IDEgOiAtMSk7XG4gICAgICBmb2N1c0VsZW1lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5oYW5kbGVLZXlEb3duKGtleSwgZXZ0KTtcbiAgICAgIHNlbGYucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSggJ2RhdGVwaWNrZXInLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgZGF0ZXBpY2tlck1vZGU6ICc9PycsXG4gICAgICBkYXRlRGlzYWJsZWQ6ICcmJ1xuICAgIH0sXG4gICAgcmVxdWlyZTogWydkYXRlcGlja2VyJywgJz9ebmdNb2RlbCddLFxuICAgIGNvbnRyb2xsZXI6ICdEYXRlcGlja2VyQ29udHJvbGxlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuICAgICAgdmFyIGRhdGVwaWNrZXJDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG5cbiAgICAgIGlmICggbmdNb2RlbEN0cmwgKSB7XG4gICAgICAgIGRhdGVwaWNrZXJDdHJsLmluaXQoIG5nTW9kZWxDdHJsICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnZGF5cGlja2VyJywgWydkYXRlRmlsdGVyJywgZnVuY3Rpb24gKGRhdGVGaWx0ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbCcsXG4gICAgcmVxdWlyZTogJ15kYXRlcGlja2VyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIHNjb3BlLnNob3dXZWVrcyA9IGN0cmwuc2hvd1dlZWtzO1xuXG4gICAgICBjdHJsLnN0ZXAgPSB7IG1vbnRoczogMSB9O1xuICAgICAgY3RybC5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgdmFyIERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG4gICAgICBmdW5jdGlvbiBnZXREYXlzSW5Nb250aCggeWVhciwgbW9udGggKSB7XG4gICAgICAgIHJldHVybiAoKG1vbnRoID09PSAxKSAmJiAoeWVhciAlIDQgPT09IDApICYmICgoeWVhciAlIDEwMCAhPT0gMCkgfHwgKHllYXIgJSA0MDAgPT09IDApKSkgPyAyOSA6IERBWVNfSU5fTU9OVEhbbW9udGhdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIG4pIHtcbiAgICAgICAgdmFyIGRhdGVzID0gbmV3IEFycmF5KG4pLCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnREYXRlKSwgaSA9IDA7XG4gICAgICAgIGN1cnJlbnQuc2V0SG91cnMoMTIpOyAvLyBQcmV2ZW50IHJlcGVhdGVkIGRhdGVzIGJlY2F1c2Ugb2YgdGltZXpvbmUgYnVnXG4gICAgICAgIHdoaWxlICggaSA8IG4gKSB7XG4gICAgICAgICAgZGF0ZXNbaSsrXSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgKyAxICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGVzO1xuICAgICAgfVxuXG4gICAgICBjdHJsLl9yZWZyZXNoVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeWVhciA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIG1vbnRoID0gY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSBjdHJsLnN0YXJ0aW5nRGF5IC0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpLFxuICAgICAgICAgIG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID0gKGRpZmZlcmVuY2UgPiAwKSA/IDcgLSBkaWZmZXJlbmNlIDogLSBkaWZmZXJlbmNlLFxuICAgICAgICAgIGZpcnN0RGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aCk7XG5cbiAgICAgICAgaWYgKCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA+IDAgKSB7XG4gICAgICAgICAgZmlyc3REYXRlLnNldERhdGUoIC0gbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggKyAxICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA0MiBpcyB0aGUgbnVtYmVyIG9mIGRheXMgb24gYSBzaXgtbW9udGggY2FsZW5kYXJcbiAgICAgICAgdmFyIGRheXMgPSBnZXREYXRlcyhmaXJzdERhdGUsIDQyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0MjsgaSArKykge1xuICAgICAgICAgIGRheXNbaV0gPSBhbmd1bGFyLmV4dGVuZChjdHJsLmNyZWF0ZURhdGVPYmplY3QoZGF5c1tpXSwgY3RybC5mb3JtYXREYXkpLCB7XG4gICAgICAgICAgICBzZWNvbmRhcnk6IGRheXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGgsXG4gICAgICAgICAgICB1aWQ6IHNjb3BlLnVuaXF1ZUlkICsgJy0nICsgaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUubGFiZWxzID0gbmV3IEFycmF5KDcpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgIHNjb3BlLmxhYmVsc1tqXSA9IHtcbiAgICAgICAgICAgIGFiYnI6IGRhdGVGaWx0ZXIoZGF5c1tqXS5kYXRlLCBjdHJsLmZvcm1hdERheUhlYWRlciksXG4gICAgICAgICAgICBmdWxsOiBkYXRlRmlsdGVyKGRheXNbal0uZGF0ZSwgJ0VFRUUnKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS50aXRsZSA9IGRhdGVGaWx0ZXIoY3RybC5hY3RpdmVEYXRlLCBjdHJsLmZvcm1hdERheVRpdGxlKTtcbiAgICAgICAgc2NvcGUucm93cyA9IGN0cmwuc3BsaXQoZGF5cywgNyk7XG5cbiAgICAgICAgaWYgKCBzY29wZS5zaG93V2Vla3MgKSB7XG4gICAgICAgICAgc2NvcGUud2Vla051bWJlcnMgPSBbXTtcbiAgICAgICAgICB2YXIgd2Vla051bWJlciA9IGdldElTTzg2MDFXZWVrTnVtYmVyKCBzY29wZS5yb3dzWzBdWzBdLmRhdGUgKSxcbiAgICAgICAgICAgICAgbnVtV2Vla3MgPSBzY29wZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSggc2NvcGUud2Vla051bWJlcnMucHVzaCh3ZWVrTnVtYmVyKyspIDwgbnVtV2Vla3MgKSB7fVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSggZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpICkgLSBuZXcgRGF0ZSggZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSwgZGF0ZTIuZ2V0RGF0ZSgpICkgKTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIGdldElTTzg2MDFXZWVrTnVtYmVyKGRhdGUpIHtcbiAgICAgICAgdmFyIGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpICsgNCAtIChjaGVja0RhdGUuZ2V0RGF5KCkgfHwgNykpOyAvLyBUaHVyc2RheVxuICAgICAgICB2YXIgdGltZSA9IGNoZWNrRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIGNoZWNrRGF0ZS5zZXRNb250aCgwKTsgLy8gQ29tcGFyZSB3aXRoIEphbiAxXG4gICAgICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJvdW5kKCh0aW1lIC0gY2hlY2tEYXRlKSAvIDg2NDAwMDAwKSAvIDcpICsgMTtcbiAgICAgIH1cblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgLSAxOyAgIC8vIHVwXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndXAnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgLSA3OyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBkYXRlID0gZGF0ZSArIDE7ICAgLy8gZG93blxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyA3O1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3BhZ2V1cCcgfHwga2V5ID09PSAncGFnZWRvd24nKSB7XG4gICAgICAgICAgdmFyIG1vbnRoID0gY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyAoa2V5ID09PSAncGFnZXVwJyA/IC0gMSA6IDEpO1xuICAgICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aCwgMSk7XG4gICAgICAgICAgZGF0ZSA9IE1hdGgubWluKGdldERheXNJbk1vbnRoKGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLCBjdHJsLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSksIGRhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgZGF0ZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZW5kJykge1xuICAgICAgICAgIGRhdGUgPSBnZXREYXlzSW5Nb250aChjdHJsLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSwgY3RybC5hY3RpdmVEYXRlLmdldE1vbnRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXREYXRlKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCdtb250aHBpY2tlcicsIFsnZGF0ZUZpbHRlcicsIGZ1bmN0aW9uIChkYXRlRmlsdGVyKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbCcsXG4gICAgcmVxdWlyZTogJ15kYXRlcGlja2VyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIGN0cmwuc3RlcCA9IHsgeWVhcnM6IDEgfTtcbiAgICAgIGN0cmwuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIGN0cmwuX3JlZnJlc2hWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtb250aHMgPSBuZXcgQXJyYXkoMTIpLFxuICAgICAgICAgICAgeWVhciA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IDEyOyBpKysgKSB7XG4gICAgICAgICAgbW9udGhzW2ldID0gYW5ndWxhci5leHRlbmQoY3RybC5jcmVhdGVEYXRlT2JqZWN0KG5ldyBEYXRlKHllYXIsIGksIDEpLCBjdHJsLmZvcm1hdE1vbnRoKSwge1xuICAgICAgICAgICAgdWlkOiBzY29wZS51bmlxdWVJZCArICctJyArIGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLnRpdGxlID0gZGF0ZUZpbHRlcihjdHJsLmFjdGl2ZURhdGUsIGN0cmwuZm9ybWF0TW9udGhUaXRsZSk7XG4gICAgICAgIHNjb3BlLnJvd3MgPSBjdHJsLnNwbGl0KG1vbnRocywgMyk7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCBkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpICkgLSBuZXcgRGF0ZSggZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSApO1xuICAgICAgfTtcblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMTsgICAvLyB1cFxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMzsgICAvLyBkb3duXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyAxOyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkb3duJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlICsgMztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICAgIHZhciB5ZWFyID0gY3RybC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyAoa2V5ID09PSAncGFnZXVwJyA/IC0gMSA6IDEpO1xuICAgICAgICAgIGN0cmwuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgICAgIGRhdGUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBkYXRlID0gMTE7XG4gICAgICAgIH1cbiAgICAgICAgY3RybC5hY3RpdmVEYXRlLnNldE1vbnRoKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCd5ZWFycGlja2VyJywgWydkYXRlRmlsdGVyJywgZnVuY3Rpb24gKGRhdGVGaWx0ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWwnLFxuICAgIHJlcXVpcmU6ICdeZGF0ZXBpY2tlcicsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBjdHJsLnllYXJSYW5nZTtcblxuICAgICAgY3RybC5zdGVwID0geyB5ZWFyczogcmFuZ2UgfTtcbiAgICAgIGN0cmwuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFN0YXJ0aW5nWWVhciggeWVhciApIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KCh5ZWFyIC0gMSkgLyByYW5nZSwgMTApICogcmFuZ2UgKyAxO1xuICAgICAgfVxuXG4gICAgICBjdHJsLl9yZWZyZXNoVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeWVhcnMgPSBuZXcgQXJyYXkocmFuZ2UpO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMCwgc3RhcnQgPSBnZXRTdGFydGluZ1llYXIoY3RybC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpOyBpIDwgcmFuZ2U7IGkrKyApIHtcbiAgICAgICAgICB5ZWFyc1tpXSA9IGFuZ3VsYXIuZXh0ZW5kKGN0cmwuY3JlYXRlRGF0ZU9iamVjdChuZXcgRGF0ZShzdGFydCArIGksIDAsIDEpLCBjdHJsLmZvcm1hdFllYXIpLCB7XG4gICAgICAgICAgICB1aWQ6IHNjb3BlLnVuaXF1ZUlkICsgJy0nICsgaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUudGl0bGUgPSBbeWVhcnNbMF0ubGFiZWwsIHllYXJzW3JhbmdlIC0gMV0ubGFiZWxdLmpvaW4oJyAtICcpO1xuICAgICAgICBzY29wZS5yb3dzID0gY3RybC5zcGxpdCh5ZWFycywgNSk7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmNvbXBhcmUgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oIGtleSwgZXZ0ICkge1xuICAgICAgICB2YXIgZGF0ZSA9IGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gMTsgICAvLyB1cFxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3VwJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlIC0gNTsgICAvLyBkb3duXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGF0ZSA9IGRhdGUgKyAxOyAgIC8vIGRvd25cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkb3duJykge1xuICAgICAgICAgIGRhdGUgPSBkYXRlICsgNTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdwYWdldXAnIHx8IGtleSA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICAgIGRhdGUgKz0gKGtleSA9PT0gJ3BhZ2V1cCcgPyAtIDEgOiAxKSAqIGN0cmwuc3RlcC55ZWFycztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdob21lJykge1xuICAgICAgICAgIGRhdGUgPSBnZXRTdGFydGluZ1llYXIoIGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZW5kJykge1xuICAgICAgICAgIGRhdGUgPSBnZXRTdGFydGluZ1llYXIoIGN0cmwuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICkgKyByYW5nZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgY3RybC5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgY3RybC5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfTtcbn1dKVxuXG4uY29uc3RhbnQoJ2RhdGVwaWNrZXJQb3B1cENvbmZpZycsIHtcbiAgZGF0ZXBpY2tlclBvcHVwOiAneXl5eS1NTS1kZCcsXG4gIGN1cnJlbnRUZXh0OiAnVG9kYXknLFxuICBjbGVhclRleHQ6ICdDbGVhcicsXG4gIGNsb3NlVGV4dDogJ0RvbmUnLFxuICBjbG9zZU9uRGF0ZVNlbGVjdGlvbjogdHJ1ZSxcbiAgYXBwZW5kVG9Cb2R5OiBmYWxzZSxcbiAgc2hvd0J1dHRvbkJhcjogdHJ1ZVxufSlcblxuLmRpcmVjdGl2ZSgnZGF0ZXBpY2tlclBvcHVwJywgWyckY29tcGlsZScsICckcGFyc2UnLCAnJGRvY3VtZW50JywgJyRwb3NpdGlvbicsICdkYXRlRmlsdGVyJywgJ2RhdGVQYXJzZXInLCAnZGF0ZXBpY2tlclBvcHVwQ29uZmlnJyxcbmZ1bmN0aW9uICgkY29tcGlsZSwgJHBhcnNlLCAkZG9jdW1lbnQsICRwb3NpdGlvbiwgZGF0ZUZpbHRlciwgZGF0ZVBhcnNlciwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBpc09wZW46ICc9PycsXG4gICAgICBjdXJyZW50VGV4dDogJ0AnLFxuICAgICAgY2xlYXJUZXh0OiAnQCcsXG4gICAgICBjbG9zZVRleHQ6ICdAJyxcbiAgICAgIGRhdGVEaXNhYmxlZDogJyYnXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgIHZhciBkYXRlRm9ybWF0LFxuICAgICAgICAgIGNsb3NlT25EYXRlU2VsZWN0aW9uID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuY2xvc2VPbkRhdGVTZWxlY3Rpb24pID8gc2NvcGUuJHBhcmVudC4kZXZhbChhdHRycy5jbG9zZU9uRGF0ZVNlbGVjdGlvbikgOiBkYXRlcGlja2VyUG9wdXBDb25maWcuY2xvc2VPbkRhdGVTZWxlY3Rpb24sXG4gICAgICAgICAgYXBwZW5kVG9Cb2R5ID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZGF0ZXBpY2tlckFwcGVuZFRvQm9keSkgPyBzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLmRhdGVwaWNrZXJBcHBlbmRUb0JvZHkpIDogZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmFwcGVuZFRvQm9keTtcblxuICAgICAgc2NvcGUuc2hvd0J1dHRvbkJhciA9IGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLnNob3dCdXR0b25CYXIpID8gc2NvcGUuJHBhcmVudC4kZXZhbChhdHRycy5zaG93QnV0dG9uQmFyKSA6IGRhdGVwaWNrZXJQb3B1cENvbmZpZy5zaG93QnV0dG9uQmFyO1xuXG4gICAgICBzY29wZS5nZXRUZXh0ID0gZnVuY3Rpb24oIGtleSApIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlW2tleSArICdUZXh0J10gfHwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnW2tleSArICdUZXh0J107XG4gICAgICB9O1xuXG4gICAgICBhdHRycy4kb2JzZXJ2ZSgnZGF0ZXBpY2tlclBvcHVwJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBkYXRlRm9ybWF0ID0gdmFsdWUgfHwgZGF0ZXBpY2tlclBvcHVwQ29uZmlnLmRhdGVwaWNrZXJQb3B1cDtcbiAgICAgICAgICBuZ01vZGVsLiRyZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBwb3B1cCBlbGVtZW50IHVzZWQgdG8gZGlzcGxheSBjYWxlbmRhclxuICAgICAgdmFyIHBvcHVwRWwgPSBhbmd1bGFyLmVsZW1lbnQoJzxkaXYgZGF0ZXBpY2tlci1wb3B1cC13cmFwPjxkaXYgZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgIHBvcHVwRWwuYXR0cih7XG4gICAgICAgICduZy1tb2RlbCc6ICdkYXRlJyxcbiAgICAgICAgJ25nLWNoYW5nZSc6ICdkYXRlU2VsZWN0aW9uKCknXG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gY2FtZWx0b0Rhc2goIHN0cmluZyApe1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHsgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7IH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBkYXRlcGlja2VyIGVsZW1lbnRcbiAgICAgIHZhciBkYXRlcGlja2VyRWwgPSBhbmd1bGFyLmVsZW1lbnQocG9wdXBFbC5jaGlsZHJlbigpWzBdKTtcbiAgICAgIGlmICggYXR0cnMuZGF0ZXBpY2tlck9wdGlvbnMgKSB7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLmRhdGVwaWNrZXJPcHRpb25zKSwgZnVuY3Rpb24oIHZhbHVlLCBvcHRpb24gKSB7XG4gICAgICAgICAgZGF0ZXBpY2tlckVsLmF0dHIoIGNhbWVsdG9EYXNoKG9wdGlvbiksIHZhbHVlICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzY29wZS53YXRjaERhdGEgPSB7fTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChbJ21pbkRhdGUnLCAnbWF4RGF0ZScsICdkYXRlcGlja2VyTW9kZSddLCBmdW5jdGlvbigga2V5ICkge1xuICAgICAgICBpZiAoIGF0dHJzW2tleV0gKSB7XG4gICAgICAgICAgdmFyIGdldEF0dHJpYnV0ZSA9ICRwYXJzZShhdHRyc1trZXldKTtcbiAgICAgICAgICBzY29wZS4kcGFyZW50LiR3YXRjaChnZXRBdHRyaWJ1dGUsIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHNjb3BlLndhdGNoRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGF0ZXBpY2tlckVsLmF0dHIoY2FtZWx0b0Rhc2goa2V5KSwgJ3dhdGNoRGF0YS4nICsga2V5KTtcblxuICAgICAgICAgIC8vIFByb3BhZ2F0ZSBjaGFuZ2VzIGZyb20gZGF0ZXBpY2tlciB0byBvdXRzaWRlXG4gICAgICAgICAgaWYgKCBrZXkgPT09ICdkYXRlcGlja2VyTW9kZScgKSB7XG4gICAgICAgICAgICB2YXIgc2V0QXR0cmlidXRlID0gZ2V0QXR0cmlidXRlLmFzc2lnbjtcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnd2F0Y2hEYXRhLicgKyBrZXksIGZ1bmN0aW9uKHZhbHVlLCBvbGR2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoIHZhbHVlICE9PSBvbGR2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGUoc2NvcGUuJHBhcmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGF0dHJzLmRhdGVEaXNhYmxlZCkge1xuICAgICAgICBkYXRlcGlja2VyRWwuYXR0cignZGF0ZS1kaXNhYmxlZCcsICdkYXRlRGlzYWJsZWQoeyBkYXRlOiBkYXRlLCBtb2RlOiBtb2RlIH0pJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZSh2aWV3VmFsdWUpIHtcbiAgICAgICAgaWYgKCF2aWV3VmFsdWUpIHtcbiAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnZGF0ZScsIHRydWUpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGFuZ3VsYXIuaXNEYXRlKHZpZXdWYWx1ZSkgJiYgIWlzTmFOKHZpZXdWYWx1ZSkpIHtcbiAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnZGF0ZScsIHRydWUpO1xuICAgICAgICAgIHJldHVybiB2aWV3VmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYW5ndWxhci5pc1N0cmluZyh2aWV3VmFsdWUpKSB7XG4gICAgICAgICAgdmFyIGRhdGUgPSBkYXRlUGFyc2VyLnBhcnNlKHZpZXdWYWx1ZSwgZGF0ZUZvcm1hdCkgfHwgbmV3IERhdGUodmlld1ZhbHVlKTtcbiAgICAgICAgICBpZiAoaXNOYU4oZGF0ZSkpIHtcbiAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdkYXRlJywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ2RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnZGF0ZScsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuZ01vZGVsLiRwYXJzZXJzLnVuc2hpZnQocGFyc2VEYXRlKTtcblxuICAgICAgLy8gSW5uZXIgY2hhbmdlXG4gICAgICBzY29wZS5kYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24oZHQpIHtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGR0KSkge1xuICAgICAgICAgIHNjb3BlLmRhdGUgPSBkdDtcbiAgICAgICAgfVxuICAgICAgICBuZ01vZGVsLiRzZXRWaWV3VmFsdWUoc2NvcGUuZGF0ZSk7XG4gICAgICAgIG5nTW9kZWwuJHJlbmRlcigpO1xuXG4gICAgICAgIGlmICggY2xvc2VPbkRhdGVTZWxlY3Rpb24gKSB7XG4gICAgICAgICAgc2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBlbGVtZW50LmJpbmQoJ2lucHV0IGNoYW5nZSBrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGUuZGF0ZSA9IG5nTW9kZWwuJG1vZGVsVmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIE91dHRlciBjaGFuZ2VcbiAgICAgIG5nTW9kZWwuJHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0ZSA9IG5nTW9kZWwuJHZpZXdWYWx1ZSA/IGRhdGVGaWx0ZXIobmdNb2RlbC4kdmlld1ZhbHVlLCBkYXRlRm9ybWF0KSA6ICcnO1xuICAgICAgICBlbGVtZW50LnZhbChkYXRlKTtcbiAgICAgICAgc2NvcGUuZGF0ZSA9IHBhcnNlRGF0ZSggbmdNb2RlbC4kbW9kZWxWYWx1ZSApO1xuICAgICAgfTtcblxuICAgICAgdmFyIGRvY3VtZW50Q2xpY2tCaW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHNjb3BlLmlzT3BlbiAmJiBldmVudC50YXJnZXQgIT09IGVsZW1lbnRbMF0pIHtcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGtleWRvd24gPSBmdW5jdGlvbihldnQsIG5vQXBwbHkpIHtcbiAgICAgICAgc2NvcGUua2V5ZG93bihldnQpO1xuICAgICAgfTtcbiAgICAgIGVsZW1lbnQuYmluZCgna2V5ZG93bicsIGtleWRvd24pO1xuXG4gICAgICBzY29wZS5rZXlkb3duID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGlmIChldnQud2hpY2ggPT09IDI3KSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LndoaWNoID09PSA0MCAmJiAhc2NvcGUuaXNPcGVuKSB7XG4gICAgICAgICAgc2NvcGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2NvcGUuJHdhdGNoKCdpc09wZW4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBzY29wZS4kYnJvYWRjYXN0KCdkYXRlcGlja2VyLmZvY3VzJyk7XG4gICAgICAgICAgc2NvcGUucG9zaXRpb24gPSBhcHBlbmRUb0JvZHkgPyAkcG9zaXRpb24ub2Zmc2V0KGVsZW1lbnQpIDogJHBvc2l0aW9uLnBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgICAgIHNjb3BlLnBvc2l0aW9uLnRvcCA9IHNjb3BlLnBvc2l0aW9uLnRvcCArIGVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0Jyk7XG5cbiAgICAgICAgICAkZG9jdW1lbnQuYmluZCgnY2xpY2snLCBkb2N1bWVudENsaWNrQmluZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRvY3VtZW50LnVuYmluZCgnY2xpY2snLCBkb2N1bWVudENsaWNrQmluZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzY29wZS5zZWxlY3QgPSBmdW5jdGlvbiggZGF0ZSApIHtcbiAgICAgICAgaWYgKGRhdGUgPT09ICd0b2RheScpIHtcbiAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGF0ZShuZ01vZGVsLiRtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKG5nTW9kZWwuJG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5kYXRlU2VsZWN0aW9uKCBkYXRlICk7XG4gICAgICB9O1xuXG4gICAgICBzY29wZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgfTtcblxuICAgICAgdmFyICRwb3B1cCA9ICRjb21waWxlKHBvcHVwRWwpKHNjb3BlKTtcbiAgICAgIC8vIFByZXZlbnQgalF1ZXJ5IGNhY2hlIG1lbW9yeSBsZWFrICh0ZW1wbGF0ZSBpcyBub3cgcmVkdW5kYW50IGFmdGVyIGxpbmtpbmcpXG4gICAgICBwb3B1cEVsLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoIGFwcGVuZFRvQm9keSApIHtcbiAgICAgICAgJGRvY3VtZW50LmZpbmQoJ2JvZHknKS5hcHBlbmQoJHBvcHVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuYWZ0ZXIoJHBvcHVwKTtcbiAgICAgIH1cblxuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkcG9wdXAucmVtb3ZlKCk7XG4gICAgICAgIGVsZW1lbnQudW5iaW5kKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICAgICRkb2N1bWVudC51bmJpbmQoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0JpbmQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ2RhdGVwaWNrZXJQb3B1cFdyYXAnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDonRUEnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbCcsXG4gICAgbGluazpmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktYm9vdHN0cmFwL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhbmd1bGFyLm1vZHVsZSgndWkuYm9vdHN0cmFwLnRpbWVwaWNrZXInLCBbXSlcblxuLmNvbnN0YW50KCd0aW1lcGlja2VyQ29uZmlnJywge1xuICBob3VyU3RlcDogMSxcbiAgbWludXRlU3RlcDogMSxcbiAgc2hvd01lcmlkaWFuOiB0cnVlLFxuICBtZXJpZGlhbnM6IG51bGwsXG4gIHJlYWRvbmx5SW5wdXQ6IGZhbHNlLFxuICBtb3VzZXdoZWVsOiB0cnVlXG59KVxuXG4uY29udHJvbGxlcignVGltZXBpY2tlckNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJHBhcnNlJywgJyRsb2cnLCAnJGxvY2FsZScsICd0aW1lcGlja2VyQ29uZmlnJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsICRwYXJzZSwgJGxvZywgJGxvY2FsZSwgdGltZXBpY2tlckNvbmZpZykge1xuICB2YXIgc2VsZWN0ZWQgPSBuZXcgRGF0ZSgpLFxuICAgICAgbmdNb2RlbEN0cmwgPSB7ICRzZXRWaWV3VmFsdWU6IGFuZ3VsYXIubm9vcCB9LCAvLyBudWxsTW9kZWxDdHJsXG4gICAgICBtZXJpZGlhbnMgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMubWVyaWRpYW5zKSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tZXJpZGlhbnMpIDogdGltZXBpY2tlckNvbmZpZy5tZXJpZGlhbnMgfHwgJGxvY2FsZS5EQVRFVElNRV9GT1JNQVRTLkFNUE1TO1xuXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCBuZ01vZGVsQ3RybF8sIGlucHV0cyApIHtcbiAgICBuZ01vZGVsQ3RybCA9IG5nTW9kZWxDdHJsXztcbiAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gdGhpcy5yZW5kZXI7XG5cbiAgICB2YXIgaG91cnNJbnB1dEVsID0gaW5wdXRzLmVxKDApLFxuICAgICAgICBtaW51dGVzSW5wdXRFbCA9IGlucHV0cy5lcSgxKTtcblxuICAgIHZhciBtb3VzZXdoZWVsID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLm1vdXNld2hlZWwpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLm1vdXNld2hlZWwpIDogdGltZXBpY2tlckNvbmZpZy5tb3VzZXdoZWVsO1xuICAgIGlmICggbW91c2V3aGVlbCApIHtcbiAgICAgIHRoaXMuc2V0dXBNb3VzZXdoZWVsRXZlbnRzKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICk7XG4gICAgfVxuXG4gICAgJHNjb3BlLnJlYWRvbmx5SW5wdXQgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMucmVhZG9ubHlJbnB1dCkgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMucmVhZG9ubHlJbnB1dCkgOiB0aW1lcGlja2VyQ29uZmlnLnJlYWRvbmx5SW5wdXQ7XG4gICAgdGhpcy5zZXR1cElucHV0RXZlbnRzKCBob3Vyc0lucHV0RWwsIG1pbnV0ZXNJbnB1dEVsICk7XG4gIH07XG5cbiAgdmFyIGhvdXJTdGVwID0gdGltZXBpY2tlckNvbmZpZy5ob3VyU3RlcDtcbiAgaWYgKCRhdHRycy5ob3VyU3RlcCkge1xuICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzLmhvdXJTdGVwKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGhvdXJTdGVwID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBtaW51dGVTdGVwID0gdGltZXBpY2tlckNvbmZpZy5taW51dGVTdGVwO1xuICBpZiAoJGF0dHJzLm1pbnV0ZVN0ZXApIHtcbiAgICAkc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKCRhdHRycy5taW51dGVTdGVwKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIG1pbnV0ZVN0ZXAgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gMTJIIC8gMjRIIG1vZGVcbiAgJHNjb3BlLnNob3dNZXJpZGlhbiA9IHRpbWVwaWNrZXJDb25maWcuc2hvd01lcmlkaWFuO1xuICBpZiAoJGF0dHJzLnNob3dNZXJpZGlhbikge1xuICAgICRzY29wZS4kcGFyZW50LiR3YXRjaCgkcGFyc2UoJGF0dHJzLnNob3dNZXJpZGlhbiksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAkc2NvcGUuc2hvd01lcmlkaWFuID0gISF2YWx1ZTtcblxuICAgICAgaWYgKCBuZ01vZGVsQ3RybC4kZXJyb3IudGltZSApIHtcbiAgICAgICAgLy8gRXZhbHVhdGUgZnJvbSB0ZW1wbGF0ZVxuICAgICAgICB2YXIgaG91cnMgPSBnZXRIb3Vyc0Zyb21UZW1wbGF0ZSgpLCBtaW51dGVzID0gZ2V0TWludXRlc0Zyb21UZW1wbGF0ZSgpO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoIGhvdXJzICkgJiYgYW5ndWxhci5pc0RlZmluZWQoIG1pbnV0ZXMgKSkge1xuICAgICAgICAgIHNlbGVjdGVkLnNldEhvdXJzKCBob3VycyApO1xuICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlVGVtcGxhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIEdldCAkc2NvcGUuaG91cnMgaW4gMjRIIG1vZGUgaWYgdmFsaWRcbiAgZnVuY3Rpb24gZ2V0SG91cnNGcm9tVGVtcGxhdGUgKCApIHtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCggJHNjb3BlLmhvdXJzLCAxMCApO1xuICAgIHZhciB2YWxpZCA9ICggJHNjb3BlLnNob3dNZXJpZGlhbiApID8gKGhvdXJzID4gMCAmJiBob3VycyA8IDEzKSA6IChob3VycyA+PSAwICYmIGhvdXJzIDwgMjQpO1xuICAgIGlmICggIXZhbGlkICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoICRzY29wZS5zaG93TWVyaWRpYW4gKSB7XG4gICAgICBpZiAoIGhvdXJzID09PSAxMiApIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKCAkc2NvcGUubWVyaWRpYW4gPT09IG1lcmlkaWFuc1sxXSApIHtcbiAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaG91cnM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaW51dGVzRnJvbVRlbXBsYXRlKCkge1xuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQoJHNjb3BlLm1pbnV0ZXMsIDEwKTtcbiAgICByZXR1cm4gKCBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICkgPyBtaW51dGVzIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFkKCB2YWx1ZSApIHtcbiAgICByZXR1cm4gKCBhbmd1bGFyLmlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCAyICkgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgLy8gUmVzcG9uZCBvbiBtb3VzZXdoZWVsIHNwaW5cbiAgdGhpcy5zZXR1cE1vdXNld2hlZWxFdmVudHMgPSBmdW5jdGlvbiggaG91cnNJbnB1dEVsLCBtaW51dGVzSW5wdXRFbCApIHtcbiAgICB2YXIgaXNTY3JvbGxpbmdVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgIH1cbiAgICAgIC8vcGljayBjb3JyZWN0IGRlbHRhIHZhcmlhYmxlIGRlcGVuZGluZyBvbiBldmVudFxuICAgICAgdmFyIGRlbHRhID0gKGUud2hlZWxEZWx0YSkgPyBlLndoZWVsRGVsdGEgOiAtZS5kZWx0YVk7XG4gICAgICByZXR1cm4gKGUuZGV0YWlsIHx8IGRlbHRhID4gMCk7XG4gICAgfTtcblxuICAgIGhvdXJzSW5wdXRFbC5iaW5kKCdtb3VzZXdoZWVsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgJHNjb3BlLiRhcHBseSggKGlzU2Nyb2xsaW5nVXAoZSkpID8gJHNjb3BlLmluY3JlbWVudEhvdXJzKCkgOiAkc2NvcGUuZGVjcmVtZW50SG91cnMoKSApO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgbWludXRlc0lucHV0RWwuYmluZCgnbW91c2V3aGVlbCB3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICRzY29wZS4kYXBwbHkoIChpc1Njcm9sbGluZ1VwKGUpKSA/ICRzY29wZS5pbmNyZW1lbnRNaW51dGVzKCkgOiAkc2NvcGUuZGVjcmVtZW50TWludXRlcygpICk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICB0aGlzLnNldHVwSW5wdXRFdmVudHMgPSBmdW5jdGlvbiggaG91cnNJbnB1dEVsLCBtaW51dGVzSW5wdXRFbCApIHtcbiAgICBpZiAoICRzY29wZS5yZWFkb25seUlucHV0ICkge1xuICAgICAgJHNjb3BlLnVwZGF0ZUhvdXJzID0gYW5ndWxhci5ub29wO1xuICAgICAgJHNjb3BlLnVwZGF0ZU1pbnV0ZXMgPSBhbmd1bGFyLm5vb3A7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGludmFsaWRhdGUgPSBmdW5jdGlvbihpbnZhbGlkSG91cnMsIGludmFsaWRNaW51dGVzKSB7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKCBudWxsICk7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ3RpbWUnLCBmYWxzZSk7XG4gICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoaW52YWxpZEhvdXJzKSkge1xuICAgICAgICAkc2NvcGUuaW52YWxpZEhvdXJzID0gaW52YWxpZEhvdXJzO1xuICAgICAgfVxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGludmFsaWRNaW51dGVzKSkge1xuICAgICAgICAkc2NvcGUuaW52YWxpZE1pbnV0ZXMgPSBpbnZhbGlkTWludXRlcztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLnVwZGF0ZUhvdXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaG91cnMgPSBnZXRIb3Vyc0Zyb21UZW1wbGF0ZSgpO1xuXG4gICAgICBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKGhvdXJzKSApIHtcbiAgICAgICAgc2VsZWN0ZWQuc2V0SG91cnMoIGhvdXJzICk7XG4gICAgICAgIHJlZnJlc2goICdoJyApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YWxpZGF0ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaG91cnNJbnB1dEVsLmJpbmQoJ2JsdXInLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoICEkc2NvcGUuaW52YWxpZEhvdXJzICYmICRzY29wZS5ob3VycyA8IDEwKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzY29wZS5ob3VycyA9IHBhZCggJHNjb3BlLmhvdXJzICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNjb3BlLnVwZGF0ZU1pbnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtaW51dGVzID0gZ2V0TWludXRlc0Zyb21UZW1wbGF0ZSgpO1xuXG4gICAgICBpZiAoIGFuZ3VsYXIuaXNEZWZpbmVkKG1pbnV0ZXMpICkge1xuICAgICAgICBzZWxlY3RlZC5zZXRNaW51dGVzKCBtaW51dGVzICk7XG4gICAgICAgIHJlZnJlc2goICdtJyApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YWxpZGF0ZSh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBtaW51dGVzSW5wdXRFbC5iaW5kKCdibHVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCAhJHNjb3BlLmludmFsaWRNaW51dGVzICYmICRzY29wZS5taW51dGVzIDwgMTAgKSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzY29wZS5taW51dGVzID0gcGFkKCAkc2NvcGUubWludXRlcyApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGUgPSBuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSA/IG5ldyBEYXRlKCBuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSApIDogbnVsbDtcblxuICAgIGlmICggaXNOYU4oZGF0ZSkgKSB7XG4gICAgICBuZ01vZGVsQ3RybC4kc2V0VmFsaWRpdHkoJ3RpbWUnLCBmYWxzZSk7XG4gICAgICAkbG9nLmVycm9yKCdUaW1lcGlja2VyIGRpcmVjdGl2ZTogXCJuZy1tb2RlbFwiIHZhbHVlIG11c3QgYmUgYSBEYXRlIG9iamVjdCwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDAxLjAxLjE5NzAgb3IgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIFJGQzI4MjIgb3IgSVNPIDg2MDEgZGF0ZS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCBkYXRlICkge1xuICAgICAgICBzZWxlY3RlZCA9IGRhdGU7XG4gICAgICB9XG4gICAgICBtYWtlVmFsaWQoKTtcbiAgICAgIHVwZGF0ZVRlbXBsYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENhbGwgaW50ZXJuYWxseSB3aGVuIHdlIGtub3cgdGhhdCBtb2RlbCBpcyB2YWxpZC5cbiAgZnVuY3Rpb24gcmVmcmVzaCgga2V5Ym9hcmRDaGFuZ2UgKSB7XG4gICAgbWFrZVZhbGlkKCk7XG4gICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSggbmV3IERhdGUoc2VsZWN0ZWQpICk7XG4gICAgdXBkYXRlVGVtcGxhdGUoIGtleWJvYXJkQ2hhbmdlICk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlVmFsaWQoKSB7XG4gICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCd0aW1lJywgdHJ1ZSk7XG4gICAgJHNjb3BlLmludmFsaWRIb3VycyA9IGZhbHNlO1xuICAgICRzY29wZS5pbnZhbGlkTWludXRlcyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoIGtleWJvYXJkQ2hhbmdlICkge1xuICAgIHZhciBob3VycyA9IHNlbGVjdGVkLmdldEhvdXJzKCksIG1pbnV0ZXMgPSBzZWxlY3RlZC5nZXRNaW51dGVzKCk7XG5cbiAgICBpZiAoICRzY29wZS5zaG93TWVyaWRpYW4gKSB7XG4gICAgICBob3VycyA9ICggaG91cnMgPT09IDAgfHwgaG91cnMgPT09IDEyICkgPyAxMiA6IGhvdXJzICUgMTI7IC8vIENvbnZlcnQgMjQgdG8gMTIgaG91ciBzeXN0ZW1cbiAgICB9XG5cbiAgICAkc2NvcGUuaG91cnMgPSBrZXlib2FyZENoYW5nZSA9PT0gJ2gnID8gaG91cnMgOiBwYWQoaG91cnMpO1xuICAgICRzY29wZS5taW51dGVzID0ga2V5Ym9hcmRDaGFuZ2UgPT09ICdtJyA/IG1pbnV0ZXMgOiBwYWQobWludXRlcyk7XG4gICAgJHNjb3BlLm1lcmlkaWFuID0gc2VsZWN0ZWQuZ2V0SG91cnMoKSA8IDEyID8gbWVyaWRpYW5zWzBdIDogbWVyaWRpYW5zWzFdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTWludXRlcyggbWludXRlcyApIHtcbiAgICB2YXIgZHQgPSBuZXcgRGF0ZSggc2VsZWN0ZWQuZ2V0VGltZSgpICsgbWludXRlcyAqIDYwMDAwICk7XG4gICAgc2VsZWN0ZWQuc2V0SG91cnMoIGR0LmdldEhvdXJzKCksIGR0LmdldE1pbnV0ZXMoKSApO1xuICAgIHJlZnJlc2goKTtcbiAgfVxuXG4gICRzY29wZS5pbmNyZW1lbnRIb3VycyA9IGZ1bmN0aW9uKCkge1xuICAgIGFkZE1pbnV0ZXMoIGhvdXJTdGVwICogNjAgKTtcbiAgfTtcbiAgJHNjb3BlLmRlY3JlbWVudEhvdXJzID0gZnVuY3Rpb24oKSB7XG4gICAgYWRkTWludXRlcyggLSBob3VyU3RlcCAqIDYwICk7XG4gIH07XG4gICRzY29wZS5pbmNyZW1lbnRNaW51dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgYWRkTWludXRlcyggbWludXRlU3RlcCApO1xuICB9O1xuICAkc2NvcGUuZGVjcmVtZW50TWludXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGFkZE1pbnV0ZXMoIC0gbWludXRlU3RlcCApO1xuICB9O1xuICAkc2NvcGUudG9nZ2xlTWVyaWRpYW4gPSBmdW5jdGlvbigpIHtcbiAgICBhZGRNaW51dGVzKCAxMiAqIDYwICogKCggc2VsZWN0ZWQuZ2V0SG91cnMoKSA8IDEyICkgPyAxIDogLTEpICk7XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSgndGltZXBpY2tlcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXF1aXJlOiBbJ3RpbWVwaWNrZXInLCAnP15uZ01vZGVsJ10sXG4gICAgY29udHJvbGxlcjonVGltZXBpY2tlckNvbnRyb2xsZXInLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgc2NvcGU6IHt9LFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWwnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciB0aW1lcGlja2VyQ3RybCA9IGN0cmxzWzBdLCBuZ01vZGVsQ3RybCA9IGN0cmxzWzFdO1xuXG4gICAgICBpZiAoIG5nTW9kZWxDdHJsICkge1xuICAgICAgICB0aW1lcGlja2VyQ3RybC5pbml0KCBuZ01vZGVsQ3RybCwgZWxlbWVudC5maW5kKCdpbnB1dCcpICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvdGltZXBpY2tlci90aW1lcGlja2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAuZHJvcGRvd24nLCBbXSlcblxuLmNvbnN0YW50KCdkcm9wZG93bkNvbmZpZycsIHtcbiAgb3BlbkNsYXNzOiAnb3Blbidcbn0pXG5cbi5zZXJ2aWNlKCdkcm9wZG93blNlcnZpY2UnLCBbJyRkb2N1bWVudCcsIGZ1bmN0aW9uKCRkb2N1bWVudCkge1xuICB2YXIgb3BlblNjb3BlID0gbnVsbDtcblxuICB0aGlzLm9wZW4gPSBmdW5jdGlvbiggZHJvcGRvd25TY29wZSApIHtcbiAgICBpZiAoICFvcGVuU2NvcGUgKSB7XG4gICAgICAkZG9jdW1lbnQuYmluZCgnY2xpY2snLCBjbG9zZURyb3Bkb3duKTtcbiAgICAgICRkb2N1bWVudC5iaW5kKCdrZXlkb3duJywgZXNjYXBlS2V5QmluZCk7XG4gICAgfVxuXG4gICAgaWYgKCBvcGVuU2NvcGUgJiYgb3BlblNjb3BlICE9PSBkcm9wZG93blNjb3BlICkge1xuICAgICAgICBvcGVuU2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlblNjb3BlID0gZHJvcGRvd25TY29wZTtcbiAgfTtcblxuICB0aGlzLmNsb3NlID0gZnVuY3Rpb24oIGRyb3Bkb3duU2NvcGUgKSB7XG4gICAgaWYgKCBvcGVuU2NvcGUgPT09IGRyb3Bkb3duU2NvcGUgKSB7XG4gICAgICBvcGVuU2NvcGUgPSBudWxsO1xuICAgICAgJGRvY3VtZW50LnVuYmluZCgnY2xpY2snLCBjbG9zZURyb3Bkb3duKTtcbiAgICAgICRkb2N1bWVudC51bmJpbmQoJ2tleWRvd24nLCBlc2NhcGVLZXlCaW5kKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNsb3NlRHJvcGRvd24gPSBmdW5jdGlvbiggZXZ0ICkge1xuICAgIC8vIFRoaXMgbWV0aG9kIG1heSBzdGlsbCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBzYW1lIG1vdXNlIGV2ZW50IHRoYXRcbiAgICAvLyB1bmJvdW5kIHRoaXMgZXZlbnQgaGFuZGxlci4gU28gY2hlY2sgb3BlblNjb3BlIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgIGlmICghb3BlblNjb3BlKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIHRvZ2dsZUVsZW1lbnQgPSBvcGVuU2NvcGUuZ2V0VG9nZ2xlRWxlbWVudCgpO1xuICAgIGlmICggZXZ0ICYmIHRvZ2dsZUVsZW1lbnQgJiYgdG9nZ2xlRWxlbWVudFswXS5jb250YWlucyhldnQudGFyZ2V0KSApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wZW5TY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICBvcGVuU2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGVzY2FwZUtleUJpbmQgPSBmdW5jdGlvbiggZXZ0ICkge1xuICAgIGlmICggZXZ0LndoaWNoID09PSAyNyApIHtcbiAgICAgIG9wZW5TY29wZS5mb2N1c1RvZ2dsZUVsZW1lbnQoKTtcbiAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH07XG59XSlcblxuLmNvbnRyb2xsZXIoJ0Ryb3Bkb3duQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckcGFyc2UnLCAnZHJvcGRvd25Db25maWcnLCAnZHJvcGRvd25TZXJ2aWNlJywgJyRhbmltYXRlJywgZnVuY3Rpb24oJHNjb3BlLCAkYXR0cnMsICRwYXJzZSwgZHJvcGRvd25Db25maWcsIGRyb3Bkb3duU2VydmljZSwgJGFuaW1hdGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgc2NvcGUgPSAkc2NvcGUuJG5ldygpLCAvLyBjcmVhdGUgYSBjaGlsZCBzY29wZSBzbyB3ZSBhcmUgbm90IHBvbGx1dGluZyBvcmlnaW5hbCBvbmVcbiAgICAgIG9wZW5DbGFzcyA9IGRyb3Bkb3duQ29uZmlnLm9wZW5DbGFzcyxcbiAgICAgIGdldElzT3BlbixcbiAgICAgIHNldElzT3BlbiA9IGFuZ3VsYXIubm9vcCxcbiAgICAgIHRvZ2dsZUludm9rZXIgPSAkYXR0cnMub25Ub2dnbGUgPyAkcGFyc2UoJGF0dHJzLm9uVG9nZ2xlKSA6IGFuZ3VsYXIubm9vcDtcblxuICB0aGlzLmluaXQgPSBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgICBzZWxmLiRlbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGlmICggJGF0dHJzLmlzT3BlbiApIHtcbiAgICAgIGdldElzT3BlbiA9ICRwYXJzZSgkYXR0cnMuaXNPcGVuKTtcbiAgICAgIHNldElzT3BlbiA9IGdldElzT3Blbi5hc3NpZ247XG5cbiAgICAgICRzY29wZS4kd2F0Y2goZ2V0SXNPcGVuLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBzY29wZS5pc09wZW4gPSAhIXZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oIG9wZW4gKSB7XG4gICAgcmV0dXJuIHNjb3BlLmlzT3BlbiA9IGFyZ3VtZW50cy5sZW5ndGggPyAhIW9wZW4gOiAhc2NvcGUuaXNPcGVuO1xuICB9O1xuXG4gIC8vIEFsbG93IG90aGVyIGRpcmVjdGl2ZXMgdG8gd2F0Y2ggc3RhdHVzXG4gIHRoaXMuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNjb3BlLmlzT3BlbjtcbiAgfTtcblxuICBzY29wZS5nZXRUb2dnbGVFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNlbGYudG9nZ2xlRWxlbWVudDtcbiAgfTtcblxuICBzY29wZS5mb2N1c1RvZ2dsZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIHNlbGYudG9nZ2xlRWxlbWVudCApIHtcbiAgICAgIHNlbGYudG9nZ2xlRWxlbWVudFswXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBzY29wZS4kd2F0Y2goJ2lzT3BlbicsIGZ1bmN0aW9uKCBpc09wZW4sIHdhc09wZW4gKSB7XG4gICAgJGFuaW1hdGVbaXNPcGVuID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHNlbGYuJGVsZW1lbnQsIG9wZW5DbGFzcyk7XG5cbiAgICBpZiAoIGlzT3BlbiApIHtcbiAgICAgIHNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCgpO1xuICAgICAgZHJvcGRvd25TZXJ2aWNlLm9wZW4oIHNjb3BlICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyb3Bkb3duU2VydmljZS5jbG9zZSggc2NvcGUgKTtcbiAgICB9XG5cbiAgICBzZXRJc09wZW4oJHNjb3BlLCBpc09wZW4pO1xuICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChpc09wZW4pICYmIGlzT3BlbiAhPT0gd2FzT3Blbikge1xuICAgICAgdG9nZ2xlSW52b2tlcigkc2NvcGUsIHsgb3BlbjogISFpc09wZW4gfSk7XG4gICAgfVxuICB9KTtcblxuICAkc2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24oKSB7XG4gICAgc2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gIH0pO1xuXG4gICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgc2NvcGUuJGRlc3Ryb3koKTtcbiAgfSk7XG59XSlcblxuLmRpcmVjdGl2ZSgnZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiAnRHJvcGRvd25Db250cm9sbGVyJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGRyb3Bkb3duQ3RybCkge1xuICAgICAgZHJvcGRvd25DdHJsLmluaXQoIGVsZW1lbnQgKTtcbiAgICB9XG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCdkcm9wZG93blRvZ2dsZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmU6ICc/XmRyb3Bkb3duJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGRyb3Bkb3duQ3RybCkge1xuICAgICAgaWYgKCAhZHJvcGRvd25DdHJsICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRyb3Bkb3duQ3RybC50b2dnbGVFbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgdmFyIHRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoICFlbGVtZW50Lmhhc0NsYXNzKCdkaXNhYmxlZCcpICYmICFhdHRycy5kaXNhYmxlZCApIHtcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcm9wZG93bkN0cmwudG9nZ2xlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCB0b2dnbGVEcm9wZG93bik7XG5cbiAgICAgIC8vIFdBSS1BUklBXG4gICAgICBlbGVtZW50LmF0dHIoeyAnYXJpYS1oYXNwb3B1cCc6IHRydWUsICdhcmlhLWV4cGFuZGVkJzogZmFsc2UgfSk7XG4gICAgICBzY29wZS4kd2F0Y2goZHJvcGRvd25DdHJsLmlzT3BlbiwgZnVuY3Rpb24oIGlzT3BlbiApIHtcbiAgICAgICAgZWxlbWVudC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgISFpc09wZW4pO1xuICAgICAgfSk7XG5cbiAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC51bmJpbmQoJ2NsaWNrJywgdG9nZ2xlRHJvcGRvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvZHJvcGRvd24vZHJvcGRvd24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5tb2RhbCcsIFsndWkuYm9vdHN0cmFwLnRyYW5zaXRpb24nXSlcblxuLyoqXG4gKiBBIGhlbHBlciwgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBhY3RzIGFzIGEgbWFwIGJ1dCBhbHNvIGFsbG93cyBnZXR0aW5nIC8gcmVtb3ZpbmdcbiAqIGVsZW1lbnRzIGluIHRoZSBMSUZPIG9yZGVyXG4gKi9cbiAgLmZhY3RvcnkoJyQkc3RhY2tlZE1hcCcsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlTmV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGFjayA9IFtdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWRkOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChrZXkgPT0gc3RhY2tbaV0ua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YWNrW2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXlzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChzdGFja1tpXS5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIGlkeCA9IC0xO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoa2V5ID09IHN0YWNrW2ldLmtleSkge1xuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGFjay5zcGxpY2UoaWR4LCAxKVswXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZVRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrLnNwbGljZShzdGFjay5sZW5ndGggLSAxLCAxKVswXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfSlcblxuLyoqXG4gKiBBIGhlbHBlciBkaXJlY3RpdmUgZm9yIHRoZSAkbW9kYWwgc2VydmljZS4gSXQgY3JlYXRlcyBhIGJhY2tkcm9wIGVsZW1lbnQuXG4gKi9cbiAgLmRpcmVjdGl2ZSgnbW9kYWxCYWNrZHJvcCcsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tb2RhbC9iYWNrZHJvcC5odG1sJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgc2NvcGUuYmFja2Ryb3BDbGFzcyA9IGF0dHJzLmJhY2tkcm9wQ2xhc3MgfHwgJyc7XG5cbiAgICAgICAgc2NvcGUuYW5pbWF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vdHJpZ2dlciBDU1MgdHJhbnNpdGlvbnNcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNjb3BlLmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSlcblxuICAuZGlyZWN0aXZlKCdtb2RhbFdpbmRvdycsIFsnJG1vZGFsU3RhY2snLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJG1vZGFsU3RhY2ssICR0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5kZXg6ICdAJyxcbiAgICAgICAgYW5pbWF0ZTogJz0nXG4gICAgICB9LFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24odEVsZW1lbnQsIHRBdHRycykge1xuICAgICAgICByZXR1cm4gdEF0dHJzLnRlbXBsYXRlVXJsIHx8ICd0ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbCc7XG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKGF0dHJzLndpbmRvd0NsYXNzIHx8ICcnKTtcbiAgICAgICAgc2NvcGUuc2l6ZSA9IGF0dHJzLnNpemU7XG5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHRyaWdnZXIgQ1NTIHRyYW5zaXRpb25zXG4gICAgICAgICAgc2NvcGUuYW5pbWF0ZSA9IHRydWU7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBdXRvLWZvY3VzaW5nIG9mIGEgZnJlc2hseS1vcGVuZWQgbW9kYWwgZWxlbWVudCBjYXVzZXMgYW55IGNoaWxkIGVsZW1lbnRzXG4gICAgICAgICAgICogd2l0aCB0aGUgYXV0b2ZvY3VzIGF0dHJpYnV0ZSB0byBsb3NlIGZvY3VzLiBUaGlzIGlzIGFuIGlzc3VlIG9uIHRvdWNoXG4gICAgICAgICAgICogYmFzZWQgZGV2aWNlcyB3aGljaCB3aWxsIHNob3cgYW5kIHRoZW4gaGlkZSB0aGUgb25zY3JlZW4ga2V5Ym9hcmQuXG4gICAgICAgICAgICogQXR0ZW1wdHMgdG8gcmVmb2N1cyB0aGUgYXV0b2ZvY3VzIGVsZW1lbnQgdmlhIEphdmFTY3JpcHQgd2lsbCBub3QgcmVvcGVuXG4gICAgICAgICAgICogdGhlIG9uc2NyZWVuIGtleWJvYXJkLiBGaXhlZCBieSB1cGRhdGVkIHRoZSBmb2N1c2luZyBsb2dpYyB0byBvbmx5IGF1dG9mb2N1c1xuICAgICAgICAgICAqIHRoZSBtb2RhbCBlbGVtZW50IGlmIHRoZSBtb2RhbCBkb2VzIG5vdCBjb250YWluIGFuIGF1dG9mb2N1cyBlbGVtZW50LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICghZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yQWxsKCdbYXV0b2ZvY3VzXScpLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuY2xvc2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgdmFyIG1vZGFsID0gJG1vZGFsU3RhY2suZ2V0VG9wKCk7XG4gICAgICAgICAgaWYgKG1vZGFsICYmIG1vZGFsLnZhbHVlLmJhY2tkcm9wICYmIG1vZGFsLnZhbHVlLmJhY2tkcm9wICE9ICdzdGF0aWMnICYmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJG1vZGFsU3RhY2suZGlzbWlzcyhtb2RhbC5rZXksICdiYWNrZHJvcCBjbGljaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSlcblxuICAuZGlyZWN0aXZlKCdtb2RhbFRyYW5zY2x1ZGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgY29udHJvbGxlciwgJHRyYW5zY2x1ZGUpIHtcbiAgICAgICAgJHRyYW5zY2x1ZGUoJHNjb3BlLiRwYXJlbnQsIGZ1bmN0aW9uKGNsb25lKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKTtcbiAgICAgICAgICAkZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9KVxuXG4gIC5mYWN0b3J5KCckbW9kYWxTdGFjaycsIFsnJHRyYW5zaXRpb24nLCAnJHRpbWVvdXQnLCAnJGRvY3VtZW50JywgJyRjb21waWxlJywgJyRyb290U2NvcGUnLCAnJCRzdGFja2VkTWFwJyxcbiAgICBmdW5jdGlvbiAoJHRyYW5zaXRpb24sICR0aW1lb3V0LCAkZG9jdW1lbnQsICRjb21waWxlLCAkcm9vdFNjb3BlLCAkJHN0YWNrZWRNYXApIHtcblxuICAgICAgdmFyIE9QRU5FRF9NT0RBTF9DTEFTUyA9ICdtb2RhbC1vcGVuJztcblxuICAgICAgdmFyIGJhY2tkcm9wRG9tRWwsIGJhY2tkcm9wU2NvcGU7XG4gICAgICB2YXIgb3BlbmVkV2luZG93cyA9ICQkc3RhY2tlZE1hcC5jcmVhdGVOZXcoKTtcbiAgICAgIHZhciAkbW9kYWxTdGFjayA9IHt9O1xuXG4gICAgICBmdW5jdGlvbiBiYWNrZHJvcEluZGV4KCkge1xuICAgICAgICB2YXIgdG9wQmFja2Ryb3BJbmRleCA9IC0xO1xuICAgICAgICB2YXIgb3BlbmVkID0gb3BlbmVkV2luZG93cy5rZXlzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3BlbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9wZW5lZFdpbmRvd3MuZ2V0KG9wZW5lZFtpXSkudmFsdWUuYmFja2Ryb3ApIHtcbiAgICAgICAgICAgIHRvcEJhY2tkcm9wSW5kZXggPSBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wQmFja2Ryb3BJbmRleDtcbiAgICAgIH1cblxuICAgICAgJHJvb3RTY29wZS4kd2F0Y2goYmFja2Ryb3BJbmRleCwgZnVuY3Rpb24obmV3QmFja2Ryb3BJbmRleCl7XG4gICAgICAgIGlmIChiYWNrZHJvcFNjb3BlKSB7XG4gICAgICAgICAgYmFja2Ryb3BTY29wZS5pbmRleCA9IG5ld0JhY2tkcm9wSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiByZW1vdmVNb2RhbFdpbmRvdyhtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAgICAgdmFyIGJvZHkgPSAkZG9jdW1lbnQuZmluZCgnYm9keScpLmVxKDApO1xuICAgICAgICB2YXIgbW9kYWxXaW5kb3cgPSBvcGVuZWRXaW5kb3dzLmdldChtb2RhbEluc3RhbmNlKS52YWx1ZTtcblxuICAgICAgICAvL2NsZWFuIHVwIHRoZSBzdGFja1xuICAgICAgICBvcGVuZWRXaW5kb3dzLnJlbW92ZShtb2RhbEluc3RhbmNlKTtcblxuICAgICAgICAvL3JlbW92ZSB3aW5kb3cgRE9NIGVsZW1lbnRcbiAgICAgICAgcmVtb3ZlQWZ0ZXJBbmltYXRlKG1vZGFsV2luZG93Lm1vZGFsRG9tRWwsIG1vZGFsV2luZG93Lm1vZGFsU2NvcGUsIDMwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kYWxXaW5kb3cubW9kYWxTY29wZS4kZGVzdHJveSgpO1xuICAgICAgICAgIGJvZHkudG9nZ2xlQ2xhc3MoT1BFTkVEX01PREFMX0NMQVNTLCBvcGVuZWRXaW5kb3dzLmxlbmd0aCgpID4gMCk7XG4gICAgICAgICAgY2hlY2tSZW1vdmVCYWNrZHJvcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2hlY2tSZW1vdmVCYWNrZHJvcCgpIHtcbiAgICAgICAgICAvL3JlbW92ZSBiYWNrZHJvcCBpZiBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgICAgaWYgKGJhY2tkcm9wRG9tRWwgJiYgYmFja2Ryb3BJbmRleCgpID09IC0xKSB7XG4gICAgICAgICAgICB2YXIgYmFja2Ryb3BTY29wZVJlZiA9IGJhY2tkcm9wU2NvcGU7XG4gICAgICAgICAgICByZW1vdmVBZnRlckFuaW1hdGUoYmFja2Ryb3BEb21FbCwgYmFja2Ryb3BTY29wZSwgMTUwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGJhY2tkcm9wU2NvcGVSZWYuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgYmFja2Ryb3BTY29wZVJlZiA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJhY2tkcm9wRG9tRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBiYWNrZHJvcFNjb3BlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlQWZ0ZXJBbmltYXRlKGRvbUVsLCBzY29wZSwgZW11bGF0ZVRpbWUsIGRvbmUpIHtcbiAgICAgICAgLy8gQ2xvc2luZyBhbmltYXRpb25cbiAgICAgICAgc2NvcGUuYW5pbWF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRW5kRXZlbnROYW1lID0gJHRyYW5zaXRpb24udHJhbnNpdGlvbkVuZEV2ZW50TmFtZTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FbmRFdmVudE5hbWUpIHtcbiAgICAgICAgICAvLyB0cmFuc2l0aW9uIG91dFxuICAgICAgICAgIHZhciB0aW1lb3V0ID0gJHRpbWVvdXQoYWZ0ZXJBbmltYXRpbmcsIGVtdWxhdGVUaW1lKTtcblxuICAgICAgICAgIGRvbUVsLmJpbmQodHJhbnNpdGlvbkVuZEV2ZW50TmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHRpbWVvdXQuY2FuY2VsKHRpbWVvdXQpO1xuICAgICAgICAgICAgYWZ0ZXJBbmltYXRpbmcoKTtcbiAgICAgICAgICAgIHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGlzIGNhbGwgaXMgYXN5bmNcbiAgICAgICAgICAkdGltZW91dChhZnRlckFuaW1hdGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZnRlckFuaW1hdGluZygpIHtcbiAgICAgICAgICBpZiAoYWZ0ZXJBbmltYXRpbmcuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZnRlckFuaW1hdGluZy5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIGRvbUVsLnJlbW92ZSgpO1xuICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRkb2N1bWVudC5iaW5kKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgbW9kYWw7XG5cbiAgICAgICAgaWYgKGV2dC53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICBtb2RhbCA9IG9wZW5lZFdpbmRvd3MudG9wKCk7XG4gICAgICAgICAgaWYgKG1vZGFsICYmIG1vZGFsLnZhbHVlLmtleWJvYXJkKSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJG1vZGFsU3RhY2suZGlzbWlzcyhtb2RhbC5rZXksICdlc2NhcGUga2V5IHByZXNzJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkbW9kYWxTdGFjay5vcGVuID0gZnVuY3Rpb24gKG1vZGFsSW5zdGFuY2UsIG1vZGFsKSB7XG5cbiAgICAgICAgb3BlbmVkV2luZG93cy5hZGQobW9kYWxJbnN0YW5jZSwge1xuICAgICAgICAgIGRlZmVycmVkOiBtb2RhbC5kZWZlcnJlZCxcbiAgICAgICAgICBtb2RhbFNjb3BlOiBtb2RhbC5zY29wZSxcbiAgICAgICAgICBiYWNrZHJvcDogbW9kYWwuYmFja2Ryb3AsXG4gICAgICAgICAga2V5Ym9hcmQ6IG1vZGFsLmtleWJvYXJkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBib2R5ID0gJGRvY3VtZW50LmZpbmQoJ2JvZHknKS5lcSgwKSxcbiAgICAgICAgICAgIGN1cnJCYWNrZHJvcEluZGV4ID0gYmFja2Ryb3BJbmRleCgpO1xuXG4gICAgICAgIGlmIChjdXJyQmFja2Ryb3BJbmRleCA+PSAwICYmICFiYWNrZHJvcERvbUVsKSB7XG4gICAgICAgICAgYmFja2Ryb3BTY29wZSA9ICRyb290U2NvcGUuJG5ldyh0cnVlKTtcbiAgICAgICAgICBiYWNrZHJvcFNjb3BlLmluZGV4ID0gY3VyckJhY2tkcm9wSW5kZXg7XG4gICAgICAgICAgdmFyIGFuZ3VsYXJCYWNrZ3JvdW5kRG9tRWwgPSBhbmd1bGFyLmVsZW1lbnQoJzxkaXYgbW9kYWwtYmFja2Ryb3A+PC9kaXY+Jyk7XG4gICAgICAgICAgYW5ndWxhckJhY2tncm91bmREb21FbC5hdHRyKCdiYWNrZHJvcC1jbGFzcycsIG1vZGFsLmJhY2tkcm9wQ2xhc3MpO1xuICAgICAgICAgIGJhY2tkcm9wRG9tRWwgPSAkY29tcGlsZShhbmd1bGFyQmFja2dyb3VuZERvbUVsKShiYWNrZHJvcFNjb3BlKTtcbiAgICAgICAgICBib2R5LmFwcGVuZChiYWNrZHJvcERvbUVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhbmd1bGFyRG9tRWwgPSBhbmd1bGFyLmVsZW1lbnQoJzxkaXYgbW9kYWwtd2luZG93PjwvZGl2PicpO1xuICAgICAgICBhbmd1bGFyRG9tRWwuYXR0cih7XG4gICAgICAgICAgJ3RlbXBsYXRlLXVybCc6IG1vZGFsLndpbmRvd1RlbXBsYXRlVXJsLFxuICAgICAgICAgICd3aW5kb3ctY2xhc3MnOiBtb2RhbC53aW5kb3dDbGFzcyxcbiAgICAgICAgICAnc2l6ZSc6IG1vZGFsLnNpemUsXG4gICAgICAgICAgJ2luZGV4Jzogb3BlbmVkV2luZG93cy5sZW5ndGgoKSAtIDEsXG4gICAgICAgICAgJ2FuaW1hdGUnOiAnYW5pbWF0ZSdcbiAgICAgICAgfSkuaHRtbChtb2RhbC5jb250ZW50KTtcblxuICAgICAgICB2YXIgbW9kYWxEb21FbCA9ICRjb21waWxlKGFuZ3VsYXJEb21FbCkobW9kYWwuc2NvcGUpO1xuICAgICAgICBvcGVuZWRXaW5kb3dzLnRvcCgpLnZhbHVlLm1vZGFsRG9tRWwgPSBtb2RhbERvbUVsO1xuICAgICAgICBib2R5LmFwcGVuZChtb2RhbERvbUVsKTtcbiAgICAgICAgYm9keS5hZGRDbGFzcyhPUEVORURfTU9EQUxfQ0xBU1MpO1xuICAgICAgfTtcblxuICAgICAgJG1vZGFsU3RhY2suY2xvc2UgPSBmdW5jdGlvbiAobW9kYWxJbnN0YW5jZSwgcmVzdWx0KSB7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IG9wZW5lZFdpbmRvd3MuZ2V0KG1vZGFsSW5zdGFuY2UpO1xuICAgICAgICBpZiAobW9kYWxXaW5kb3cpIHtcbiAgICAgICAgICBtb2RhbFdpbmRvdy52YWx1ZS5kZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgcmVtb3ZlTW9kYWxXaW5kb3cobW9kYWxJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICRtb2RhbFN0YWNrLmRpc21pc3MgPSBmdW5jdGlvbiAobW9kYWxJbnN0YW5jZSwgcmVhc29uKSB7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IG9wZW5lZFdpbmRvd3MuZ2V0KG1vZGFsSW5zdGFuY2UpO1xuICAgICAgICBpZiAobW9kYWxXaW5kb3cpIHtcbiAgICAgICAgICBtb2RhbFdpbmRvdy52YWx1ZS5kZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICAgICAgICByZW1vdmVNb2RhbFdpbmRvdyhtb2RhbEluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJG1vZGFsU3RhY2suZGlzbWlzc0FsbCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdmFyIHRvcE1vZGFsID0gdGhpcy5nZXRUb3AoKTtcbiAgICAgICAgd2hpbGUgKHRvcE1vZGFsKSB7XG4gICAgICAgICAgdGhpcy5kaXNtaXNzKHRvcE1vZGFsLmtleSwgcmVhc29uKTtcbiAgICAgICAgICB0b3BNb2RhbCA9IHRoaXMuZ2V0VG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICRtb2RhbFN0YWNrLmdldFRvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZFdpbmRvd3MudG9wKCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gJG1vZGFsU3RhY2s7XG4gICAgfV0pXG5cbiAgLnByb3ZpZGVyKCckbW9kYWwnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgJG1vZGFsUHJvdmlkZXIgPSB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGJhY2tkcm9wOiB0cnVlLCAvL2NhbiBiZSBhbHNvIGZhbHNlIG9yICdzdGF0aWMnXG4gICAgICAgIGtleWJvYXJkOiB0cnVlXG4gICAgICB9LFxuICAgICAgJGdldDogWyckaW5qZWN0b3InLCAnJHJvb3RTY29wZScsICckcScsICckaHR0cCcsICckdGVtcGxhdGVDYWNoZScsICckY29udHJvbGxlcicsICckbW9kYWxTdGFjaycsXG4gICAgICAgIGZ1bmN0aW9uICgkaW5qZWN0b3IsICRyb290U2NvcGUsICRxLCAkaHR0cCwgJHRlbXBsYXRlQ2FjaGUsICRjb250cm9sbGVyLCAkbW9kYWxTdGFjaykge1xuXG4gICAgICAgICAgdmFyICRtb2RhbCA9IHt9O1xuXG4gICAgICAgICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGVQcm9taXNlKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnRlbXBsYXRlID8gJHEud2hlbihvcHRpb25zLnRlbXBsYXRlKSA6XG4gICAgICAgICAgICAgICRodHRwLmdldChhbmd1bGFyLmlzRnVuY3Rpb24ob3B0aW9ucy50ZW1wbGF0ZVVybCkgPyAob3B0aW9ucy50ZW1wbGF0ZVVybCkoKSA6IG9wdGlvbnMudGVtcGxhdGVVcmwsXG4gICAgICAgICAgICAgICAge2NhY2hlOiAkdGVtcGxhdGVDYWNoZX0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRSZXNvbHZlUHJvbWlzZXMocmVzb2x2ZXMpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlc0FyciA9IFtdO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc29sdmVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbih2YWx1ZSkgfHwgYW5ndWxhci5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzQXJyLnB1c2goJHEud2hlbigkaW5qZWN0b3IuaW52b2tlKHZhbHVlKSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlc0FycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkbW9kYWwub3BlbiA9IGZ1bmN0aW9uIChtb2RhbE9wdGlvbnMpIHtcblxuICAgICAgICAgICAgdmFyIG1vZGFsUmVzdWx0RGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIG1vZGFsT3BlbmVkRGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICAgICAvL3ByZXBhcmUgYW4gaW5zdGFuY2Ugb2YgYSBtb2RhbCB0byBiZSBpbmplY3RlZCBpbnRvIGNvbnRyb2xsZXJzIGFuZCByZXR1cm5lZCB0byBhIGNhbGxlclxuICAgICAgICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSB7XG4gICAgICAgICAgICAgIHJlc3VsdDogbW9kYWxSZXN1bHREZWZlcnJlZC5wcm9taXNlLFxuICAgICAgICAgICAgICBvcGVuZWQ6IG1vZGFsT3BlbmVkRGVmZXJyZWQucHJvbWlzZSxcbiAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkbW9kYWxTdGFjay5jbG9zZShtb2RhbEluc3RhbmNlLCByZXN1bHQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkaXNtaXNzOiBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgJG1vZGFsU3RhY2suZGlzbWlzcyhtb2RhbEluc3RhbmNlLCByZWFzb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL21lcmdlIGFuZCBjbGVhbiB1cCBvcHRpb25zXG4gICAgICAgICAgICBtb2RhbE9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZCh7fSwgJG1vZGFsUHJvdmlkZXIub3B0aW9ucywgbW9kYWxPcHRpb25zKTtcbiAgICAgICAgICAgIG1vZGFsT3B0aW9ucy5yZXNvbHZlID0gbW9kYWxPcHRpb25zLnJlc29sdmUgfHwge307XG5cbiAgICAgICAgICAgIC8vdmVyaWZ5IG9wdGlvbnNcbiAgICAgICAgICAgIGlmICghbW9kYWxPcHRpb25zLnRlbXBsYXRlICYmICFtb2RhbE9wdGlvbnMudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmUgb2YgdGVtcGxhdGUgb3IgdGVtcGxhdGVVcmwgb3B0aW9ucyBpcyByZXF1aXJlZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlQW5kUmVzb2x2ZVByb21pc2UgPVxuICAgICAgICAgICAgICAkcS5hbGwoW2dldFRlbXBsYXRlUHJvbWlzZShtb2RhbE9wdGlvbnMpXS5jb25jYXQoZ2V0UmVzb2x2ZVByb21pc2VzKG1vZGFsT3B0aW9ucy5yZXNvbHZlKSkpO1xuXG5cbiAgICAgICAgICAgIHRlbXBsYXRlQW5kUmVzb2x2ZVByb21pc2UudGhlbihmdW5jdGlvbiByZXNvbHZlU3VjY2Vzcyh0cGxBbmRWYXJzKSB7XG5cbiAgICAgICAgICAgICAgdmFyIG1vZGFsU2NvcGUgPSAobW9kYWxPcHRpb25zLnNjb3BlIHx8ICRyb290U2NvcGUpLiRuZXcoKTtcbiAgICAgICAgICAgICAgbW9kYWxTY29wZS4kY2xvc2UgPSBtb2RhbEluc3RhbmNlLmNsb3NlO1xuICAgICAgICAgICAgICBtb2RhbFNjb3BlLiRkaXNtaXNzID0gbW9kYWxJbnN0YW5jZS5kaXNtaXNzO1xuXG4gICAgICAgICAgICAgIHZhciBjdHJsSW5zdGFuY2UsIGN0cmxMb2NhbHMgPSB7fTtcbiAgICAgICAgICAgICAgdmFyIHJlc29sdmVJdGVyID0gMTtcblxuICAgICAgICAgICAgICAvL2NvbnRyb2xsZXJzXG4gICAgICAgICAgICAgIGlmIChtb2RhbE9wdGlvbnMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGN0cmxMb2NhbHMuJHNjb3BlID0gbW9kYWxTY29wZTtcbiAgICAgICAgICAgICAgICBjdHJsTG9jYWxzLiRtb2RhbEluc3RhbmNlID0gbW9kYWxJbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gobW9kYWxPcHRpb25zLnJlc29sdmUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICBjdHJsTG9jYWxzW2tleV0gPSB0cGxBbmRWYXJzW3Jlc29sdmVJdGVyKytdO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY3RybEluc3RhbmNlID0gJGNvbnRyb2xsZXIobW9kYWxPcHRpb25zLmNvbnRyb2xsZXIsIGN0cmxMb2NhbHMpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RhbE9wdGlvbnMuY29udHJvbGxlckFzKSB7XG4gICAgICAgICAgICAgICAgICBtb2RhbFNjb3BlW21vZGFsT3B0aW9ucy5jb250cm9sbGVyQXNdID0gY3RybEluc3RhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICRtb2RhbFN0YWNrLm9wZW4obW9kYWxJbnN0YW5jZSwge1xuICAgICAgICAgICAgICAgIHNjb3BlOiBtb2RhbFNjb3BlLFxuICAgICAgICAgICAgICAgIGRlZmVycmVkOiBtb2RhbFJlc3VsdERlZmVycmVkLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRwbEFuZFZhcnNbMF0sXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6IG1vZGFsT3B0aW9ucy5iYWNrZHJvcCxcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogbW9kYWxPcHRpb25zLmtleWJvYXJkLFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wQ2xhc3M6IG1vZGFsT3B0aW9ucy5iYWNrZHJvcENsYXNzLFxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiBtb2RhbE9wdGlvbnMud2luZG93Q2xhc3MsXG4gICAgICAgICAgICAgICAgd2luZG93VGVtcGxhdGVVcmw6IG1vZGFsT3B0aW9ucy53aW5kb3dUZW1wbGF0ZVVybCxcbiAgICAgICAgICAgICAgICBzaXplOiBtb2RhbE9wdGlvbnMuc2l6ZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gcmVzb2x2ZUVycm9yKHJlYXNvbikge1xuICAgICAgICAgICAgICBtb2RhbFJlc3VsdERlZmVycmVkLnJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRlbXBsYXRlQW5kUmVzb2x2ZVByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG1vZGFsT3BlbmVkRGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbW9kYWxPcGVuZWREZWZlcnJlZC5yZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb2RhbEluc3RhbmNlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gJG1vZGFsO1xuICAgICAgICB9XVxuICAgIH07XG5cbiAgICByZXR1cm4gJG1vZGFsUHJvdmlkZXI7XG4gIH0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL21vZGFsL21vZGFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAucHJvZ3Jlc3NiYXInLCBbXSlcblxuLmNvbnN0YW50KCdwcm9ncmVzc0NvbmZpZycsIHtcbiAgYW5pbWF0ZTogdHJ1ZSxcbiAgbWF4OiAxMDBcbn0pXG5cbi5jb250cm9sbGVyKCdQcm9ncmVzc0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAncHJvZ3Jlc3NDb25maWcnLCBmdW5jdGlvbigkc2NvcGUsICRhdHRycywgcHJvZ3Jlc3NDb25maWcpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFuaW1hdGUgPSBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMuYW5pbWF0ZSkgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuYW5pbWF0ZSkgOiBwcm9ncmVzc0NvbmZpZy5hbmltYXRlO1xuXG4gICAgdGhpcy5iYXJzID0gW107XG4gICAgJHNjb3BlLm1heCA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5tYXgpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLm1heCkgOiBwcm9ncmVzc0NvbmZpZy5tYXg7XG5cbiAgICB0aGlzLmFkZEJhciA9IGZ1bmN0aW9uKGJhciwgZWxlbWVudCkge1xuICAgICAgICBpZiAoICFhbmltYXRlICkge1xuICAgICAgICAgICAgZWxlbWVudC5jc3Moeyd0cmFuc2l0aW9uJzogJ25vbmUnfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xuXG4gICAgICAgIGJhci4kd2F0Y2goJ3ZhbHVlJywgZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICAgICAgYmFyLnBlcmNlbnQgPSArKDEwMCAqIHZhbHVlIC8gJHNjb3BlLm1heCkudG9GaXhlZCgyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYmFyLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVCYXIoYmFyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMucmVtb3ZlQmFyID0gZnVuY3Rpb24oYmFyKSB7XG4gICAgICAgIHRoaXMuYmFycy5zcGxpY2UodGhpcy5iYXJzLmluZGV4T2YoYmFyKSwgMSk7XG4gICAgfTtcbn1dKVxuXG4uZGlyZWN0aXZlKCdwcm9ncmVzcycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZ3Jlc3NDb250cm9sbGVyJyxcbiAgICAgICAgcmVxdWlyZTogJ3Byb2dyZXNzJyxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmh0bWwnXG4gICAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ2JhcicsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICByZXF1aXJlOiAnXnByb2dyZXNzJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHZhbHVlOiAnPScsXG4gICAgICAgICAgICB0eXBlOiAnQCdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgcHJvZ3Jlc3NDdHJsKSB7XG4gICAgICAgICAgICBwcm9ncmVzc0N0cmwuYWRkQmFyKHNjb3BlLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59KVxuXG4uZGlyZWN0aXZlKCdwcm9ncmVzc2JhcicsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZ3Jlc3NDb250cm9sbGVyJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHZhbHVlOiAnPScsXG4gICAgICAgICAgICB0eXBlOiAnQCdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5odG1sJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBwcm9ncmVzc0N0cmwpIHtcbiAgICAgICAgICAgIHByb2dyZXNzQ3RybC5hZGRCYXIoc2NvcGUsIGFuZ3VsYXIuZWxlbWVudChlbGVtZW50LmNoaWxkcmVuKClbMF0pKTtcbiAgICAgICAgfVxuICAgIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoJ3VpLmJvb3RzdHJhcC5yYXRpbmcnLCBbXSlcblxuLmNvbnN0YW50KCdyYXRpbmdDb25maWcnLCB7XG4gIG1heDogNSxcbiAgc3RhdGVPbjogbnVsbCxcbiAgc3RhdGVPZmY6IG51bGxcbn0pXG5cbi5jb250cm9sbGVyKCdSYXRpbmdDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJ3JhdGluZ0NvbmZpZycsIGZ1bmN0aW9uKCRzY29wZSwgJGF0dHJzLCByYXRpbmdDb25maWcpIHtcbiAgdmFyIG5nTW9kZWxDdHJsICA9IHsgJHNldFZpZXdWYWx1ZTogYW5ndWxhci5ub29wIH07XG5cbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24obmdNb2RlbEN0cmxfKSB7XG4gICAgbmdNb2RlbEN0cmwgPSBuZ01vZGVsQ3RybF87XG4gICAgbmdNb2RlbEN0cmwuJHJlbmRlciA9IHRoaXMucmVuZGVyO1xuXG4gICAgdGhpcy5zdGF0ZU9uID0gYW5ndWxhci5pc0RlZmluZWQoJGF0dHJzLnN0YXRlT24pID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLnN0YXRlT24pIDogcmF0aW5nQ29uZmlnLnN0YXRlT247XG4gICAgdGhpcy5zdGF0ZU9mZiA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5zdGF0ZU9mZikgPyAkc2NvcGUuJHBhcmVudC4kZXZhbCgkYXR0cnMuc3RhdGVPZmYpIDogcmF0aW5nQ29uZmlnLnN0YXRlT2ZmO1xuXG4gICAgdmFyIHJhdGluZ1N0YXRlcyA9IGFuZ3VsYXIuaXNEZWZpbmVkKCRhdHRycy5yYXRpbmdTdGF0ZXMpID8gJHNjb3BlLiRwYXJlbnQuJGV2YWwoJGF0dHJzLnJhdGluZ1N0YXRlcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFycmF5KCBhbmd1bGFyLmlzRGVmaW5lZCgkYXR0cnMubWF4KSA/ICRzY29wZS4kcGFyZW50LiRldmFsKCRhdHRycy5tYXgpIDogcmF0aW5nQ29uZmlnLm1heCApO1xuICAgICRzY29wZS5yYW5nZSA9IHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHMocmF0aW5nU3RhdGVzKTtcbiAgfTtcblxuICB0aGlzLmJ1aWxkVGVtcGxhdGVPYmplY3RzID0gZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzdGF0ZXNbaV0gPSBhbmd1bGFyLmV4dGVuZCh7IGluZGV4OiBpIH0sIHsgc3RhdGVPbjogdGhpcy5zdGF0ZU9uLCBzdGF0ZU9mZjogdGhpcy5zdGF0ZU9mZiB9LCBzdGF0ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVzO1xuICB9O1xuXG4gICRzY29wZS5yYXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoICEkc2NvcGUucmVhZG9ubHkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAkc2NvcGUucmFuZ2UubGVuZ3RoICkge1xuICAgICAgbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSh2YWx1ZSk7XG4gICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyKCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5lbnRlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCAhJHNjb3BlLnJlYWRvbmx5ICkge1xuICAgICAgJHNjb3BlLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgICRzY29wZS5vbkhvdmVyKHt2YWx1ZTogdmFsdWV9KTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudmFsdWUgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlO1xuICAgICRzY29wZS5vbkxlYXZlKCk7XG4gIH07XG5cbiAgJHNjb3BlLm9uS2V5ZG93biA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmICgvKDM3fDM4fDM5fDQwKS8udGVzdChldnQud2hpY2gpKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICRzY29wZS5yYXRlKCAkc2NvcGUudmFsdWUgKyAoZXZ0LndoaWNoID09PSAzOCB8fCBldnQud2hpY2ggPT09IDM5ID8gMSA6IC0xKSApO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS52YWx1ZSA9IG5nTW9kZWxDdHJsLiR2aWV3VmFsdWU7XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSgncmF0aW5nJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgcmVxdWlyZTogWydyYXRpbmcnLCAnbmdNb2RlbCddLFxuICAgIHNjb3BlOiB7XG4gICAgICByZWFkb25seTogJz0/JyxcbiAgICAgIG9uSG92ZXI6ICcmJyxcbiAgICAgIG9uTGVhdmU6ICcmJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ1JhdGluZ0NvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcbiAgICAgIHZhciByYXRpbmdDdHJsID0gY3RybHNbMF0sIG5nTW9kZWxDdHJsID0gY3RybHNbMV07XG5cbiAgICAgIGlmICggbmdNb2RlbEN0cmwgKSB7XG4gICAgICAgIHJhdGluZ0N0cmwuaW5pdCggbmdNb2RlbEN0cmwgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvcmF0aW5nL3JhdGluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSB1aS5ib290c3RyYXAudGFic1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQW5ndWxhckpTIHZlcnNpb24gb2YgdGhlIHRhYnMgZGlyZWN0aXZlLlxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAudGFicycsIFtdKVxuXG4uY29udHJvbGxlcignVGFic2V0Q29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24gVGFic2V0Q3RybCgkc2NvcGUpIHtcbiAgdmFyIGN0cmwgPSB0aGlzLFxuICAgICAgdGFicyA9IGN0cmwudGFicyA9ICRzY29wZS50YWJzID0gW107XG5cbiAgY3RybC5zZWxlY3QgPSBmdW5jdGlvbihzZWxlY3RlZFRhYikge1xuICAgIGFuZ3VsYXIuZm9yRWFjaCh0YWJzLCBmdW5jdGlvbih0YWIpIHtcbiAgICAgIGlmICh0YWIuYWN0aXZlICYmIHRhYiAhPT0gc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0YWIub25EZXNlbGVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGVjdGVkVGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgc2VsZWN0ZWRUYWIub25TZWxlY3QoKTtcbiAgfTtcblxuICBjdHJsLmFkZFRhYiA9IGZ1bmN0aW9uIGFkZFRhYih0YWIpIHtcbiAgICB0YWJzLnB1c2godGFiKTtcbiAgICAvLyB3ZSBjYW4ndCBydW4gdGhlIHNlbGVjdCBmdW5jdGlvbiBvbiB0aGUgZmlyc3QgdGFiXG4gICAgLy8gc2luY2UgdGhhdCB3b3VsZCBzZWxlY3QgaXQgdHdpY2VcbiAgICBpZiAodGFicy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGFiLmFjdGl2ZSkge1xuICAgICAgY3RybC5zZWxlY3QodGFiKTtcbiAgICB9XG4gIH07XG5cbiAgY3RybC5yZW1vdmVUYWIgPSBmdW5jdGlvbiByZW1vdmVUYWIodGFiKSB7XG4gICAgdmFyIGluZGV4ID0gdGFicy5pbmRleE9mKHRhYik7XG4gICAgLy9TZWxlY3QgYSBuZXcgdGFiIGlmIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZCBpcyBzZWxlY3RlZCBhbmQgbm90IGRlc3Ryb3llZFxuICAgIGlmICh0YWIuYWN0aXZlICYmIHRhYnMubGVuZ3RoID4gMSAmJiAhZGVzdHJveWVkKSB7XG4gICAgICAvL0lmIHRoaXMgaXMgdGhlIGxhc3QgdGFiLCBzZWxlY3QgdGhlIHByZXZpb3VzIHRhYi4gZWxzZSwgdGhlIG5leHQgdGFiLlxuICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gaW5kZXggPT0gdGFicy5sZW5ndGggLSAxID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xuICAgICAgY3RybC5zZWxlY3QodGFic1tuZXdBY3RpdmVJbmRleF0pO1xuICAgIH1cbiAgICB0YWJzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgdmFyIGRlc3Ryb3llZDtcbiAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICBkZXN0cm95ZWQgPSB0cnVlO1xuICB9KTtcbn1dKVxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLmJvb3RzdHJhcC50YWJzLmRpcmVjdGl2ZTp0YWJzZXRcbiAqIEByZXN0cmljdCBFQVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGFic2V0IGlzIHRoZSBvdXRlciBjb250YWluZXIgZm9yIHRoZSB0YWJzIGRpcmVjdGl2ZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IHZlcnRpY2FsIFdoZXRoZXIgb3Igbm90IHRvIHVzZSB2ZXJ0aWNhbCBzdHlsaW5nIGZvciB0aGUgdGFicy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGp1c3RpZmllZCBXaGV0aGVyIG9yIG5vdCB0byB1c2UganVzdGlmaWVkIHN0eWxpbmcgZm9yIHRoZSB0YWJzLlxuICpcbiAqIEBleGFtcGxlXG48ZXhhbXBsZSBtb2R1bGU9XCJ1aS5ib290c3RyYXBcIj5cbiAgPGZpbGUgbmFtZT1cImluZGV4Lmh0bWxcIj5cbiAgICA8dGFic2V0PlxuICAgICAgPHRhYiBoZWFkaW5nPVwiVGFiIDFcIj48Yj5GaXJzdDwvYj4gQ29udGVudCE8L3RhYj5cbiAgICAgIDx0YWIgaGVhZGluZz1cIlRhYiAyXCI+PGk+U2Vjb25kPC9pPiBDb250ZW50ITwvdGFiPlxuICAgIDwvdGFic2V0PlxuICAgIDxociAvPlxuICAgIDx0YWJzZXQgdmVydGljYWw9XCJ0cnVlXCI+XG4gICAgICA8dGFiIGhlYWRpbmc9XCJWZXJ0aWNhbCBUYWIgMVwiPjxiPkZpcnN0PC9iPiBWZXJ0aWNhbCBDb250ZW50ITwvdGFiPlxuICAgICAgPHRhYiBoZWFkaW5nPVwiVmVydGljYWwgVGFiIDJcIj48aT5TZWNvbmQ8L2k+IFZlcnRpY2FsIENvbnRlbnQhPC90YWI+XG4gICAgPC90YWJzZXQ+XG4gICAgPHRhYnNldCBqdXN0aWZpZWQ9XCJ0cnVlXCI+XG4gICAgICA8dGFiIGhlYWRpbmc9XCJKdXN0aWZpZWQgVGFiIDFcIj48Yj5GaXJzdDwvYj4gSnVzdGlmaWVkIENvbnRlbnQhPC90YWI+XG4gICAgICA8dGFiIGhlYWRpbmc9XCJKdXN0aWZpZWQgVGFiIDJcIj48aT5TZWNvbmQ8L2k+IEp1c3RpZmllZCBDb250ZW50ITwvdGFiPlxuICAgIDwvdGFic2V0PlxuICA8L2ZpbGU+XG48L2V4YW1wbGU+XG4gKi9cbi5kaXJlY3RpdmUoJ3RhYnNldCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICBzY29wZToge1xuICAgICAgdHlwZTogJ0AnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnVGFic2V0Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHNjb3BlLnZlcnRpY2FsID0gYW5ndWxhci5pc0RlZmluZWQoYXR0cnMudmVydGljYWwpID8gc2NvcGUuJHBhcmVudC4kZXZhbChhdHRycy52ZXJ0aWNhbCkgOiBmYWxzZTtcbiAgICAgIHNjb3BlLmp1c3RpZmllZCA9IGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmp1c3RpZmllZCkgPyBzY29wZS4kcGFyZW50LiRldmFsKGF0dHJzLmp1c3RpZmllZCkgOiBmYWxzZTtcbiAgICB9XG4gIH07XG59KVxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIHVpLmJvb3RzdHJhcC50YWJzLmRpcmVjdGl2ZTp0YWJcbiAqIEByZXN0cmljdCBFQVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gaGVhZGluZyBUaGUgdmlzaWJsZSBoZWFkaW5nLCBvciB0aXRsZSwgb2YgdGhlIHRhYi4gU2V0IEhUTUwgaGVhZGluZ3Mgd2l0aCB7QGxpbmsgdWkuYm9vdHN0cmFwLnRhYnMuZGlyZWN0aXZlOnRhYkhlYWRpbmcgdGFiSGVhZGluZ30uXG4gKiBAcGFyYW0ge3N0cmluZz19IHNlbGVjdCBBbiBleHByZXNzaW9uIHRvIGV2YWx1YXRlIHdoZW4gdGhlIHRhYiBpcyBzZWxlY3RlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGFjdGl2ZSBBIGJpbmRpbmcsIHRlbGxpbmcgd2hldGhlciBvciBub3QgdGhpcyB0YWIgaXMgc2VsZWN0ZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBkaXNhYmxlZCBBIGJpbmRpbmcsIHRlbGxpbmcgd2hldGhlciBvciBub3QgdGhpcyB0YWIgaXMgZGlzYWJsZWQuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGVzIGEgdGFiIHdpdGggYSBoZWFkaW5nIGFuZCBjb250ZW50LiBNdXN0IGJlIHBsYWNlZCB3aXRoaW4gYSB7QGxpbmsgdWkuYm9vdHN0cmFwLnRhYnMuZGlyZWN0aXZlOnRhYnNldCB0YWJzZXR9LlxuICpcbiAqIEBleGFtcGxlXG48ZXhhbXBsZSBtb2R1bGU9XCJ1aS5ib290c3RyYXBcIj5cbiAgPGZpbGUgbmFtZT1cImluZGV4Lmh0bWxcIj5cbiAgICA8ZGl2IG5nLWNvbnRyb2xsZXI9XCJUYWJzRGVtb0N0cmxcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtYWxsXCIgbmctY2xpY2s9XCJpdGVtc1swXS5hY3RpdmUgPSB0cnVlXCI+XG4gICAgICAgIFNlbGVjdCBpdGVtIDEsIHVzaW5nIGFjdGl2ZSBiaW5kaW5nXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtYWxsXCIgbmctY2xpY2s9XCJpdGVtc1sxXS5kaXNhYmxlZCA9ICFpdGVtc1sxXS5kaXNhYmxlZFwiPlxuICAgICAgICBFbmFibGUvZGlzYWJsZSBpdGVtIDIsIHVzaW5nIGRpc2FibGVkIGJpbmRpbmdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJyIC8+XG4gICAgICA8dGFic2V0PlxuICAgICAgICA8dGFiIGhlYWRpbmc9XCJUYWIgMVwiPkZpcnN0IFRhYjwvdGFiPlxuICAgICAgICA8dGFiIHNlbGVjdD1cImFsZXJ0TWUoKVwiPlxuICAgICAgICAgIDx0YWItaGVhZGluZz48aSBjbGFzcz1cImljb24tYmVsbFwiPjwvaT4gQWxlcnQgbWUhPC90YWItaGVhZGluZz5cbiAgICAgICAgICBTZWNvbmQgVGFiLCB3aXRoIGFsZXJ0IGNhbGxiYWNrIGFuZCBodG1sIGhlYWRpbmchXG4gICAgICAgIDwvdGFiPlxuICAgICAgICA8dGFiIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIlxuICAgICAgICAgIGhlYWRpbmc9XCJ7e2l0ZW0udGl0bGV9fVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJpdGVtLmRpc2FibGVkXCJcbiAgICAgICAgICBhY3RpdmU9XCJpdGVtLmFjdGl2ZVwiPlxuICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cbiAgICAgICAgPC90YWI+XG4gICAgICA8L3RhYnNldD5cbiAgICA8L2Rpdj5cbiAgPC9maWxlPlxuICA8ZmlsZSBuYW1lPVwic2NyaXB0LmpzXCI+XG4gICAgZnVuY3Rpb24gVGFic0RlbW9DdHJsKCRzY29wZSkge1xuICAgICAgJHNjb3BlLml0ZW1zID0gW1xuICAgICAgICB7IHRpdGxlOlwiRHluYW1pYyBUaXRsZSAxXCIsIGNvbnRlbnQ6XCJEeW5hbWljIEl0ZW0gMFwiIH0sXG4gICAgICAgIHsgdGl0bGU6XCJEeW5hbWljIFRpdGxlIDJcIiwgY29udGVudDpcIkR5bmFtaWMgSXRlbSAxXCIsIGRpc2FibGVkOiB0cnVlIH1cbiAgICAgIF07XG5cbiAgICAgICRzY29wZS5hbGVydE1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYWxlcnQoXCJZb3UndmUgc2VsZWN0ZWQgdGhlIGFsZXJ0IHRhYiFcIik7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuICA8L2ZpbGU+XG48L2V4YW1wbGU+XG4gKi9cblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSB1aS5ib290c3RyYXAudGFicy5kaXJlY3RpdmU6dGFiSGVhZGluZ1xuICogQHJlc3RyaWN0IEVBXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGVzIGFuIEhUTUwgaGVhZGluZyBmb3IgYSB7QGxpbmsgdWkuYm9vdHN0cmFwLnRhYnMuZGlyZWN0aXZlOnRhYiB0YWJ9LiBNdXN0IGJlIHBsYWNlZCBhcyBhIGNoaWxkIG9mIGEgdGFiIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbjxleGFtcGxlIG1vZHVsZT1cInVpLmJvb3RzdHJhcFwiPlxuICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgIDx0YWJzZXQ+XG4gICAgICA8dGFiPlxuICAgICAgICA8dGFiLWhlYWRpbmc+PGI+SFRNTDwvYj4gaW4gbXkgdGl0bGVzPyE8L3RhYi1oZWFkaW5nPlxuICAgICAgICBBbmQgc29tZSBjb250ZW50LCB0b28hXG4gICAgICA8L3RhYj5cbiAgICAgIDx0YWI+XG4gICAgICAgIDx0YWItaGVhZGluZz48aSBjbGFzcz1cImljb24taGVhcnRcIj48L2k+IEljb24gaGVhZGluZz8hPzwvdGFiLWhlYWRpbmc+XG4gICAgICAgIFRoYXQncyByaWdodC5cbiAgICAgIDwvdGFiPlxuICAgIDwvdGFic2V0PlxuICA8L2ZpbGU+XG48L2V4YW1wbGU+XG4gKi9cbi5kaXJlY3RpdmUoJ3RhYicsIFsnJHBhcnNlJywgZnVuY3Rpb24oJHBhcnNlKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWlyZTogJ150YWJzZXQnLFxuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS90YWJzL3RhYi5odG1sJyxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHNjb3BlOiB7XG4gICAgICBhY3RpdmU6ICc9PycsXG4gICAgICBoZWFkaW5nOiAnQCcsXG4gICAgICBvblNlbGVjdDogJyZzZWxlY3QnLCAvL1RoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIGluIGNvbnRlbnRIZWFkaW5nVHJhbnNjbHVkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uY2UgaXQgaW5zZXJ0cyB0aGUgdGFiJ3MgY29udGVudCBpbnRvIHRoZSBkb21cbiAgICAgIG9uRGVzZWxlY3Q6ICcmZGVzZWxlY3QnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vRW1wdHkgY29udHJvbGxlciBzbyBvdGhlciBkaXJlY3RpdmVzIGNhbiByZXF1aXJlIGJlaW5nICd1bmRlcicgYSB0YWJcbiAgICB9LFxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uKGVsbSwgYXR0cnMsIHRyYW5zY2x1ZGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxtLCBhdHRycywgdGFic2V0Q3RybCkge1xuICAgICAgICBzY29wZS4kd2F0Y2goJ2FjdGl2ZScsIGZ1bmN0aW9uKGFjdGl2ZSkge1xuICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIHRhYnNldEN0cmwuc2VsZWN0KHNjb3BlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjb3BlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGlmICggYXR0cnMuZGlzYWJsZWQgKSB7XG4gICAgICAgICAgc2NvcGUuJHBhcmVudC4kd2F0Y2goJHBhcnNlKGF0dHJzLmRpc2FibGVkKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHNjb3BlLmRpc2FibGVkID0gISEgdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoICFzY29wZS5kaXNhYmxlZCApIHtcbiAgICAgICAgICAgIHNjb3BlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRhYnNldEN0cmwuYWRkVGFiKHNjb3BlKTtcbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRhYnNldEN0cmwucmVtb3ZlVGFiKHNjb3BlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9XZSBuZWVkIHRvIHRyYW5zY2x1ZGUgbGF0ZXIsIG9uY2UgdGhlIGNvbnRlbnQgY29udGFpbmVyIGlzIHJlYWR5LlxuICAgICAgICAvL3doZW4gdGhpcyBsaW5rIGhhcHBlbnMsIHdlJ3JlIGluc2lkZSBhIHRhYiBoZWFkaW5nLlxuICAgICAgICBzY29wZS4kdHJhbnNjbHVkZUZuID0gdHJhbnNjbHVkZTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufV0pXG5cbi5kaXJlY3RpdmUoJ3RhYkhlYWRpbmdUcmFuc2NsdWRlJywgW2Z1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ150YWInLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzLCB0YWJDdHJsKSB7XG4gICAgICBzY29wZS4kd2F0Y2goJ2hlYWRpbmdFbGVtZW50JywgZnVuY3Rpb24gdXBkYXRlSGVhZGluZ0VsZW1lbnQoaGVhZGluZykge1xuICAgICAgICBpZiAoaGVhZGluZykge1xuICAgICAgICAgIGVsbS5odG1sKCcnKTtcbiAgICAgICAgICBlbG0uYXBwZW5kKGhlYWRpbmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XSlcblxuLmRpcmVjdGl2ZSgndGFiQ29udGVudFRyYW5zY2x1ZGUnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICdedGFic2V0JyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycykge1xuICAgICAgdmFyIHRhYiA9IHNjb3BlLiRldmFsKGF0dHJzLnRhYkNvbnRlbnRUcmFuc2NsdWRlKTtcblxuICAgICAgLy9Ob3cgb3VyIHRhYiBpcyByZWFkeSB0byBiZSB0cmFuc2NsdWRlZDogYm90aCB0aGUgdGFiIGhlYWRpbmcgYXJlYVxuICAgICAgLy9hbmQgdGhlIHRhYiBjb250ZW50IGFyZWEgYXJlIGxvYWRlZC4gIFRyYW5zY2x1ZGUgJ2VtIGJvdGguXG4gICAgICB0YWIuJHRyYW5zY2x1ZGVGbih0YWIuJHBhcmVudCwgZnVuY3Rpb24oY29udGVudHMpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKGNvbnRlbnRzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgaWYgKGlzVGFiSGVhZGluZyhub2RlKSkge1xuICAgICAgICAgICAgLy9MZXQgdGFiSGVhZGluZ1RyYW5zY2x1ZGUga25vdy5cbiAgICAgICAgICAgIHRhYi5oZWFkaW5nRWxlbWVudCA9IG5vZGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5hcHBlbmQobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gaXNUYWJIZWFkaW5nKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50YWdOYW1lICYmICAoXG4gICAgICBub2RlLmhhc0F0dHJpYnV0ZSgndGFiLWhlYWRpbmcnKSB8fFxuICAgICAgbm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdGFiLWhlYWRpbmcnKSB8fFxuICAgICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0YWItaGVhZGluZycgfHxcbiAgICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGF0YS10YWItaGVhZGluZydcbiAgICApO1xuICB9XG59KVxuXG47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvdGFicy90YWJzLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAudHJhbnNpdGlvbicsIFtdKVxuXG4vKipcbiAqICR0cmFuc2l0aW9uIHNlcnZpY2UgcHJvdmlkZXMgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0cmlnZ2VyIENTUyAzIHRyYW5zaXRpb25zIGFuZCB0byBiZSBpbmZvcm1lZCB3aGVuIHRoZXkgY29tcGxldGUuXG4gKiBAcGFyYW0gIHtET01FbGVtZW50fSBlbGVtZW50ICBUaGUgRE9NRWxlbWVudCB0aGF0IHdpbGwgYmUgYW5pbWF0ZWQuXG4gKiBAcGFyYW0gIHtzdHJpbmd8b2JqZWN0fGZ1bmN0aW9ufSB0cmlnZ2VyICBUaGUgdGhpbmcgdGhhdCB3aWxsIGNhdXNlIHRoZSB0cmFuc2l0aW9uIHRvIHN0YXJ0OlxuICogICAtIEFzIGEgc3RyaW5nLCBpdCByZXByZXNlbnRzIHRoZSBjc3MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQuXG4gKiAgIC0gQXMgYW4gb2JqZWN0LCBpdCByZXByZXNlbnRzIGEgaGFzaCBvZiBzdHlsZSBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQuXG4gKiAgIC0gQXMgYSBmdW5jdGlvbiwgaXQgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0aGF0IHdpbGwgY2F1c2UgdGhlIHRyYW5zaXRpb24gdG8gb2NjdXIuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSAgQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBmaW5pc2hlcy5cbiAqL1xuLmZhY3RvcnkoJyR0cmFuc2l0aW9uJywgWyckcScsICckdGltZW91dCcsICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHEsICR0aW1lb3V0LCAkcm9vdFNjb3BlKSB7XG5cbiAgdmFyICR0cmFuc2l0aW9uID0gZnVuY3Rpb24oZWxlbWVudCwgdHJpZ2dlciwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgdmFyIGVuZEV2ZW50TmFtZSA9ICR0cmFuc2l0aW9uW29wdGlvbnMuYW5pbWF0aW9uID8gJ2FuaW1hdGlvbkVuZEV2ZW50TmFtZScgOiAndHJhbnNpdGlvbkVuZEV2ZW50TmFtZSddO1xuXG4gICAgdmFyIHRyYW5zaXRpb25FbmRIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICRyb290U2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50LnVuYmluZChlbmRFdmVudE5hbWUsIHRyYW5zaXRpb25FbmRIYW5kbGVyKTtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoZW5kRXZlbnROYW1lKSB7XG4gICAgICBlbGVtZW50LmJpbmQoZW5kRXZlbnROYW1lLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gV3JhcCBpbiBhIHRpbWVvdXQgdG8gYWxsb3cgdGhlIGJyb3dzZXIgdGltZSB0byB1cGRhdGUgdGhlIERPTSBiZWZvcmUgdGhlIHRyYW5zaXRpb24gaXMgdG8gb2NjdXJcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICggYW5ndWxhci5pc1N0cmluZyh0cmlnZ2VyKSApIHtcbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcyh0cmlnZ2VyKTtcbiAgICAgIH0gZWxzZSBpZiAoIGFuZ3VsYXIuaXNGdW5jdGlvbih0cmlnZ2VyKSApIHtcbiAgICAgICAgdHJpZ2dlcihlbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoIGFuZ3VsYXIuaXNPYmplY3QodHJpZ2dlcikgKSB7XG4gICAgICAgIGVsZW1lbnQuY3NzKHRyaWdnZXIpO1xuICAgICAgfVxuICAgICAgLy9JZiBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdHJhbnNpdGlvbnMsIGluc3RhbnRseSByZXNvbHZlXG4gICAgICBpZiAoICFlbmRFdmVudE5hbWUgKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgb3VyIGN1c3RvbSBjYW5jZWwgZnVuY3Rpb24gdG8gdGhlIHByb21pc2UgdGhhdCBpcyByZXR1cm5lZFxuICAgIC8vIFdlIGNhbiBjYWxsIHRoaXMgaWYgd2UgYXJlIGFib3V0IHRvIHJ1biBhIG5ldyB0cmFuc2l0aW9uLCB3aGljaCB3ZSBrbm93IHdpbGwgcHJldmVudCB0aGlzIHRyYW5zaXRpb24gZnJvbSBlbmRpbmcsXG4gICAgLy8gaS5lLiBpdCB3aWxsIHRoZXJlZm9yZSBuZXZlciByYWlzZSBhIHRyYW5zaXRpb25FbmQgZXZlbnQgZm9yIHRoYXQgdHJhbnNpdGlvblxuICAgIGRlZmVycmVkLnByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGVuZEV2ZW50TmFtZSApIHtcbiAgICAgICAgZWxlbWVudC51bmJpbmQoZW5kRXZlbnROYW1lLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG4gICAgICB9XG4gICAgICBkZWZlcnJlZC5yZWplY3QoJ1RyYW5zaXRpb24gY2FuY2VsbGVkJyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIC8vIFdvcmsgb3V0IHRoZSBuYW1lIG9mIHRoZSB0cmFuc2l0aW9uRW5kIGV2ZW50XG4gIHZhciB0cmFuc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cmFucycpO1xuICB2YXIgdHJhbnNpdGlvbkVuZEV2ZW50TmFtZXMgPSB7XG4gICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgJ01velRyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ09UcmFuc2l0aW9uJzogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJ1xuICB9O1xuICB2YXIgYW5pbWF0aW9uRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ09UcmFuc2l0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuICAgICd0cmFuc2l0aW9uJzogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcbiAgZnVuY3Rpb24gZmluZEVuZEV2ZW50TmFtZShlbmRFdmVudE5hbWVzKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBlbmRFdmVudE5hbWVzKXtcbiAgICAgIGlmICh0cmFuc0VsZW1lbnQuc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZW5kRXZlbnROYW1lc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHRyYW5zaXRpb24udHJhbnNpdGlvbkVuZEV2ZW50TmFtZSA9IGZpbmRFbmRFdmVudE5hbWUodHJhbnNpdGlvbkVuZEV2ZW50TmFtZXMpO1xuICAkdHJhbnNpdGlvbi5hbmltYXRpb25FbmRFdmVudE5hbWUgPSBmaW5kRW5kRXZlbnROYW1lKGFuaW1hdGlvbkVuZEV2ZW50TmFtZXMpO1xuICByZXR1cm4gJHRyYW5zaXRpb247XG59XSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImFuZ3VsYXIubW9kdWxlKCd1aS5ib290c3RyYXAucG9zaXRpb24nLCBbXSlcblxuLyoqXG4gKiBBIHNldCBvZiB1dGlsaXR5IG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlIHRvIHJldHJpZXZlIHBvc2l0aW9uIG9mIERPTSBlbGVtZW50cy5cbiAqIEl0IGlzIG1lYW50IHRvIGJlIHVzZWQgd2hlcmUgd2UgbmVlZCB0byBhYnNvbHV0ZS1wb3NpdGlvbiBET00gZWxlbWVudHMgaW5cbiAqIHJlbGF0aW9uIHRvIG90aGVyLCBleGlzdGluZyBlbGVtZW50cyAodGhpcyBpcyB0aGUgY2FzZSBmb3IgdG9vbHRpcHMsIHBvcG92ZXJzLFxuICogdHlwZWFoZWFkIHN1Z2dlc3Rpb25zIGV0Yy4pLlxuICovXG4gIC5mYWN0b3J5KCckcG9zaXRpb24nLCBbJyRkb2N1bWVudCcsICckd2luZG93JywgZnVuY3Rpb24gKCRkb2N1bWVudCwgJHdpbmRvdykge1xuXG4gICAgZnVuY3Rpb24gZ2V0U3R5bGUoZWwsIGNzc3Byb3ApIHtcbiAgICAgIGlmIChlbC5jdXJyZW50U3R5bGUpIHsgLy9JRVxuICAgICAgICByZXR1cm4gZWwuY3VycmVudFN0eWxlW2Nzc3Byb3BdO1xuICAgICAgfSBlbHNlIGlmICgkd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgcmV0dXJuICR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbY3NzcHJvcF07XG4gICAgICB9XG4gICAgICAvLyBmaW5hbGx5IHRyeSBhbmQgZ2V0IGlubGluZSBzdHlsZVxuICAgICAgcmV0dXJuIGVsLnN0eWxlW2Nzc3Byb3BdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGdpdmVuIGVsZW1lbnQgaXMgc3RhdGljYWxseSBwb3NpdGlvbmVkXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSByYXcgRE9NIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1N0YXRpY1Bvc2l0aW9uZWQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIChnZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nKSB8fCAnc3RhdGljJyApID09PSAnc3RhdGljJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBjbG9zZXN0LCBub24tc3RhdGljYWxseSBwb3NpdGlvbmVkIHBhcmVudE9mZnNldCBvZiBhIGdpdmVuIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHZhciBwYXJlbnRPZmZzZXRFbCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB2YXIgZG9jRG9tRWwgPSAkZG9jdW1lbnRbMF07XG4gICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgZG9jRG9tRWw7XG4gICAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZG9jRG9tRWwgJiYgaXNTdGF0aWNQb3NpdGlvbmVkKG9mZnNldFBhcmVudCkgKSB7XG4gICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY0RvbUVsO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBQcm92aWRlcyByZWFkLW9ubHkgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBwb3NpdGlvbiBmdW5jdGlvbjpcbiAgICAgICAqIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9wb3NpdGlvbi9cbiAgICAgICAqL1xuICAgICAgcG9zaXRpb246IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBlbEJDUiA9IHRoaXMub2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICB2YXIgb2Zmc2V0UGFyZW50QkNSID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICAgICAgdmFyIG9mZnNldFBhcmVudEVsID0gcGFyZW50T2Zmc2V0RWwoZWxlbWVudFswXSk7XG4gICAgICAgIGlmIChvZmZzZXRQYXJlbnRFbCAhPSAkZG9jdW1lbnRbMF0pIHtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IgPSB0aGlzLm9mZnNldChhbmd1bGFyLmVsZW1lbnQob2Zmc2V0UGFyZW50RWwpKTtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IudG9wICs9IG9mZnNldFBhcmVudEVsLmNsaWVudFRvcCAtIG9mZnNldFBhcmVudEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSBlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgZWxlbWVudC5wcm9wKCdvZmZzZXRXaWR0aCcpLFxuICAgICAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBlbGVtZW50LnByb3AoJ29mZnNldEhlaWdodCcpLFxuICAgICAgICAgIHRvcDogZWxCQ1IudG9wIC0gb2Zmc2V0UGFyZW50QkNSLnRvcCxcbiAgICAgICAgICBsZWZ0OiBlbEJDUi5sZWZ0IC0gb2Zmc2V0UGFyZW50QkNSLmxlZnRcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdmlkZXMgcmVhZC1vbmx5IGVxdWl2YWxlbnQgb2YgalF1ZXJ5J3Mgb2Zmc2V0IGZ1bmN0aW9uOlxuICAgICAgICogaHR0cDovL2FwaS5qcXVlcnkuY29tL29mZnNldC9cbiAgICAgICAqL1xuICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IGVsZW1lbnQucHJvcCgnb2Zmc2V0V2lkdGgnKSxcbiAgICAgICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgZWxlbWVudC5wcm9wKCdvZmZzZXRIZWlnaHQnKSxcbiAgICAgICAgICB0b3A6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyAoJHdpbmRvdy5wYWdlWU9mZnNldCB8fCAkZG9jdW1lbnRbMF0uZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXG4gICAgICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAoJHdpbmRvdy5wYWdlWE9mZnNldCB8fCAkZG9jdW1lbnRbMF0uZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3ZpZGVzIGNvb3JkaW5hdGVzIGZvciB0aGUgdGFyZ2V0RWwgaW4gcmVsYXRpb24gdG8gaG9zdEVsXG4gICAgICAgKi9cbiAgICAgIHBvc2l0aW9uRWxlbWVudHM6IGZ1bmN0aW9uIChob3N0RWwsIHRhcmdldEVsLCBwb3NpdGlvblN0ciwgYXBwZW5kVG9Cb2R5KSB7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uU3RyUGFydHMgPSBwb3NpdGlvblN0ci5zcGxpdCgnLScpO1xuICAgICAgICB2YXIgcG9zMCA9IHBvc2l0aW9uU3RyUGFydHNbMF0sIHBvczEgPSBwb3NpdGlvblN0clBhcnRzWzFdIHx8ICdjZW50ZXInO1xuXG4gICAgICAgIHZhciBob3N0RWxQb3MsXG4gICAgICAgICAgdGFyZ2V0RWxXaWR0aCxcbiAgICAgICAgICB0YXJnZXRFbEhlaWdodCxcbiAgICAgICAgICB0YXJnZXRFbFBvcztcblxuICAgICAgICBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWwpIDogdGhpcy5wb3NpdGlvbihob3N0RWwpO1xuXG4gICAgICAgIHRhcmdldEVsV2lkdGggPSB0YXJnZXRFbC5wcm9wKCdvZmZzZXRXaWR0aCcpO1xuICAgICAgICB0YXJnZXRFbEhlaWdodCA9IHRhcmdldEVsLnByb3AoJ29mZnNldEhlaWdodCcpO1xuXG4gICAgICAgIHZhciBzaGlmdFdpZHRoID0ge1xuICAgICAgICAgIGNlbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoIC8gMiAtIHRhcmdldEVsV2lkdGggLyAyO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIGhvc3RFbFBvcy53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNoaWZ0SGVpZ2h0ID0ge1xuICAgICAgICAgIGNlbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0IC8gMiAtIHRhcmdldEVsSGVpZ2h0IC8gMjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3A7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBib3R0b206IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoIChwb3MwKSB7XG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMV0oKSxcbiAgICAgICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtwb3MwXSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcbiAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxuICAgICAgICAgICAgICBsZWZ0OiBob3N0RWxQb3MubGVmdCAtIHRhcmdldEVsV2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XG4gICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMF0oKSxcbiAgICAgICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtwb3MxXSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xuICAgICAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgLSB0YXJnZXRFbEhlaWdodCxcbiAgICAgICAgICAgICAgbGVmdDogc2hpZnRXaWR0aFtwb3MxXSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0RWxQb3M7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci11aS1ib290c3RyYXAvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ21nY3JlYS5uZ1N0cmFwLmhlbHBlcnMuZGltZW5zaW9ucycsIFtdKVxuXG4gIC5mYWN0b3J5KCdkaW1lbnNpb25zJywgZnVuY3Rpb24oJGRvY3VtZW50LCAkd2luZG93KSB7XG5cbiAgICB2YXIganFMaXRlID0gYW5ndWxhci5lbGVtZW50O1xuICAgIHZhciBmbiA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGVzdCB0aGUgZWxlbWVudCBub2RlTmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICB2YXIgbm9kZU5hbWUgPSBmbi5ub2RlTmFtZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGVOYW1lICYmIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGNvbXB1dGVkIHN0eWxlXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcFxuICAgICAqIEBwYXJhbSBleHRyYVxuICAgICAqL1xuICAgIGZuLmNzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3AsIGV4dHJhKSB7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICBpZiAoZWxlbWVudC5jdXJyZW50U3R5bGUpIHsgLy9JRVxuICAgICAgICB2YWx1ZSA9IGVsZW1lbnQuY3VycmVudFN0eWxlW3Byb3BdO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICB2YWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3Byb3BdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBlbGVtZW50LnN0eWxlW3Byb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhID09PSB0cnVlID8gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCA6IHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyByZWFkLW9ubHkgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBvZmZzZXQgZnVuY3Rpb246XG4gICAgICogQHJlcXVpcmVkLWJ5IGJvb3RzdHJhcC10b29sdGlwLCBib290c3RyYXAtYWZmaXhcbiAgICAgKiBAdXJsIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9vZmZzZXQvXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmbi5vZmZzZXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgYm94UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgZG9jRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBib3hSZWN0LndpZHRoIHx8IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogYm94UmVjdC5oZWlnaHQgfHwgZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIHRvcDogYm94UmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgLSAoZG9jRWxlbWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IDApLFxuICAgICAgICBsZWZ0OiBib3hSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpIC0gKGRvY0VsZW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgMClcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIHJlYWQtb25seSBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIHBvc2l0aW9uIGZ1bmN0aW9uXG4gICAgICogQHJlcXVpcmVkLWJ5IGJvb3RzdHJhcC10b29sdGlwLCBib290c3RyYXAtYWZmaXhcbiAgICAgKiBAdXJsIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9vZmZzZXQvXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmbi5wb3NpdGlvbiA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgdmFyIG9mZnNldFBhcmVudFJlY3QgPSB7dG9wOiAwLCBsZWZ0OiAwfSxcbiAgICAgICAgICBvZmZzZXRQYXJlbnRFbGVtZW50LFxuICAgICAgICAgIG9mZnNldDtcblxuICAgICAgLy8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSwgYmVjYXVzZSBpdCBpcyBpdCdzIG9ubHkgb2Zmc2V0IHBhcmVudFxuICAgICAgaWYgKGZuLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuXG4gICAgICAgIC8vIFdlIGFzc3VtZSB0aGF0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyBhdmFpbGFibGUgd2hlbiBjb21wdXRlZCBwb3NpdGlvbiBpcyBmaXhlZFxuICAgICAgICBvZmZzZXQgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50RWxlbWVudFxuICAgICAgICBvZmZzZXRQYXJlbnRFbGVtZW50ID0gb2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICAgICAgb2Zmc2V0ID0gZm4ub2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoIW5vZGVOYW1lKG9mZnNldFBhcmVudEVsZW1lbnQsICdodG1sJykpIHtcbiAgICAgICAgICBvZmZzZXRQYXJlbnRSZWN0ID0gZm4ub2Zmc2V0KG9mZnNldFBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXG4gICAgICAgIG9mZnNldFBhcmVudFJlY3QudG9wICs9IGZuLmNzcyhvZmZzZXRQYXJlbnRFbGVtZW50LCAnYm9yZGVyVG9wV2lkdGgnLCB0cnVlKTtcbiAgICAgICAgb2Zmc2V0UGFyZW50UmVjdC5sZWZ0ICs9IGZuLmNzcyhvZmZzZXRQYXJlbnRFbGVtZW50LCAnYm9yZGVyTGVmdFdpZHRoJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICB0b3A6IG9mZnNldC50b3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcCAtIGZuLmNzcyhlbGVtZW50LCAnbWFyZ2luVG9wJywgdHJ1ZSksXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0IC0gZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5MZWZ0JywgdHJ1ZSlcbiAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2xvc2VzdCwgbm9uLXN0YXRpY2FsbHkgcG9zaXRpb25lZCBvZmZzZXRQYXJlbnQgb2YgYSBnaXZlbiBlbGVtZW50XG4gICAgICogQHJlcXVpcmVkLWJ5IGZuLnBvc2l0aW9uXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZnVuY3Rpb24gb2Zmc2V0UGFyZW50RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgZG9jRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2NFbGVtZW50O1xuICAgICAgaWYobm9kZU5hbWUob2Zmc2V0UGFyZW50LCAnI2RvY3VtZW50JykpIHJldHVybiBkb2NFbGVtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHdoaWxlKG9mZnNldFBhcmVudCAmJiAhbm9kZU5hbWUob2Zmc2V0UGFyZW50LCAnaHRtbCcpICYmIGZuLmNzcyhvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2NFbGVtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBoZWlnaHQgZnVuY3Rpb25cbiAgICAgKiBAcmVxdWlyZWQtYnkgYm9vdHN0cmFwLWFmZml4XG4gICAgICogQHVybCBodHRwOi8vYXBpLmpxdWVyeS5jb20vaGVpZ2h0L1xuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG91dGVyXG4gICAgICovXG4gICAgZm4uaGVpZ2h0ID0gZnVuY3Rpb24oZWxlbWVudCwgb3V0ZXIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYob3V0ZXIpIHtcbiAgICAgICAgdmFsdWUgKz0gZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5Ub3AnLCB0cnVlKSArIGZuLmNzcyhlbGVtZW50LCAnbWFyZ2luQm90dG9tJywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSAtPSBmbi5jc3MoZWxlbWVudCwgJ3BhZGRpbmdUb3AnLCB0cnVlKSArIGZuLmNzcyhlbGVtZW50LCAncGFkZGluZ0JvdHRvbScsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdib3JkZXJUb3BXaWR0aCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdib3JkZXJCb3R0b21XaWR0aCcsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIHdpZHRoIGZ1bmN0aW9uXG4gICAgICogQHJlcXVpcmVkLWJ5IGJvb3RzdHJhcC1hZmZpeFxuICAgICAqIEB1cmwgaHR0cDovL2FwaS5qcXVlcnkuY29tL3dpZHRoL1xuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG91dGVyXG4gICAgICovXG4gICAgZm4ud2lkdGggPSBmdW5jdGlvbihlbGVtZW50LCBvdXRlcikge1xuICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGlmKG91dGVyKSB7XG4gICAgICAgIHZhbHVlICs9IGZuLmNzcyhlbGVtZW50LCAnbWFyZ2luTGVmdCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdtYXJnaW5SaWdodCcsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgLT0gZm4uY3NzKGVsZW1lbnQsICdwYWRkaW5nTGVmdCcsIHRydWUpICsgZm4uY3NzKGVsZW1lbnQsICdwYWRkaW5nUmlnaHQnLCB0cnVlKSArIGZuLmNzcyhlbGVtZW50LCAnYm9yZGVyTGVmdFdpZHRoJywgdHJ1ZSkgKyBmbi5jc3MoZWxlbWVudCwgJ2JvcmRlclJpZ2h0V2lkdGgnLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuO1xuXG4gIH0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zdHJhcC9zcmMvaGVscGVycy9kaW1lbnNpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ21nY3JlYS5uZ1N0cmFwLnBvcG92ZXInLCBbJ21nY3JlYS5uZ1N0cmFwLnRvb2x0aXAnXSlcblxuICAucHJvdmlkZXIoJyRwb3BvdmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgYW5pbWF0aW9uOiAnYW0tZmFkZScsXG4gICAgICBjdXN0b21DbGFzczogJycsXG4gICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgdGFyZ2V0OiBmYWxzZSxcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIHRlbXBsYXRlOiAncG9wb3Zlci9wb3BvdmVyLnRwbC5odG1sJyxcbiAgICAgIGNvbnRlbnRUZW1wbGF0ZTogZmFsc2UsXG4gICAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgICBodG1sOiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBhdXRvQ2xvc2U6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uKCR0b29sdGlwKSB7XG5cbiAgICAgIGZ1bmN0aW9uIFBvcG92ZXJGYWN0b3J5KGVsZW1lbnQsIGNvbmZpZykge1xuXG4gICAgICAgIC8vIENvbW1vbiB2YXJzXG4gICAgICAgIHZhciBvcHRpb25zID0gYW5ndWxhci5leHRlbmQoe30sIGRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgICAgIHZhciAkcG9wb3ZlciA9ICR0b29sdGlwKGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgc2NvcGUgYXMgc3RyaW5nIG9wdGlvbnMgWy8qdGl0bGUsICovY29udGVudF1cbiAgICAgICAgaWYob3B0aW9ucy5jb250ZW50KSB7XG4gICAgICAgICAgJHBvcG92ZXIuJHNjb3BlLmNvbnRlbnQgPSBvcHRpb25zLmNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJHBvcG92ZXI7XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFBvcG92ZXJGYWN0b3J5O1xuXG4gICAgfTtcblxuICB9KVxuXG4gIC5kaXJlY3RpdmUoJ2JzUG9wb3ZlcicsIGZ1bmN0aW9uKCR3aW5kb3csICRzY2UsICRwb3BvdmVyKSB7XG5cbiAgICB2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gJHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgJHdpbmRvdy5zZXRUaW1lb3V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRUFDJyxcbiAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgbGluazogZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcblxuICAgICAgICAvLyBEaXJlY3RpdmUgb3B0aW9uc1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtzY29wZTogc2NvcGV9O1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goWyd0ZW1wbGF0ZScsICdjb250ZW50VGVtcGxhdGUnLCAncGxhY2VtZW50JywgJ2NvbnRhaW5lcicsICd0YXJnZXQnLCAnZGVsYXknLCAndHJpZ2dlcicsICdrZXlib2FyZCcsICdodG1sJywgJ2FuaW1hdGlvbicsICdjdXN0b21DbGFzcycsICdhdXRvQ2xvc2UnXSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXR0cltrZXldKSkgb3B0aW9uc1trZXldID0gYXR0cltrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdXBwb3J0IHNjb3BlIGFzIGRhdGEtYXR0cnNcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKFsndGl0bGUnLCAnY29udGVudCddLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBhdHRyW2tleV0gJiYgYXR0ci4kb2JzZXJ2ZShrZXksIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgc2NvcGVba2V5XSA9ICRzY2UudHJ1c3RBc0h0bWwobmV3VmFsdWUpO1xuICAgICAgICAgICAgYW5ndWxhci5pc0RlZmluZWQob2xkVmFsdWUpICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcG9wb3ZlciAmJiBwb3BvdmVyLiRhcHBseVBsYWNlbWVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgc2NvcGUgYXMgYW4gb2JqZWN0XG4gICAgICAgIGF0dHIuYnNQb3BvdmVyICYmIHNjb3BlLiR3YXRjaChhdHRyLmJzUG9wb3ZlciwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNjb3BlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRlbnQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYW5ndWxhci5pc0RlZmluZWQob2xkVmFsdWUpICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBvcG92ZXIgJiYgcG9wb3Zlci4kYXBwbHlQbGFjZW1lbnQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gVmlzaWJpbGl0eSBiaW5kaW5nIHN1cHBvcnRcbiAgICAgICAgYXR0ci5ic1Nob3cgJiYgc2NvcGUuJHdhdGNoKGF0dHIuYnNTaG93LCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZighcG9wb3ZlciB8fCAhYW5ndWxhci5pc0RlZmluZWQobmV3VmFsdWUpKSByZXR1cm47XG4gICAgICAgICAgaWYoYW5ndWxhci5pc1N0cmluZyhuZXdWYWx1ZSkpIG5ld1ZhbHVlID0gISFuZXdWYWx1ZS5tYXRjaCgvdHJ1ZXwsPyhwb3BvdmVyKSw/L2kpO1xuICAgICAgICAgIG5ld1ZhbHVlID09PSB0cnVlID8gcG9wb3Zlci5zaG93KCkgOiBwb3BvdmVyLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVyXG4gICAgICAgIHZhciBwb3BvdmVyID0gJHBvcG92ZXIoZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gR2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAocG9wb3ZlcikgcG9wb3Zlci5kZXN0cm95KCk7XG4gICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgICAgcG9wb3ZlciA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfTtcblxuICB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItc3RyYXAvc3JjL3BvcG92ZXIvcG9wb3Zlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdtZ2NyZWEubmdTdHJhcC50b29sdGlwJywgWydtZ2NyZWEubmdTdHJhcC5oZWxwZXJzLmRpbWVuc2lvbnMnXSlcblxuICAucHJvdmlkZXIoJyR0b29sdGlwJywgZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgYW5pbWF0aW9uOiAnYW0tZmFkZScsXG4gICAgICBjdXN0b21DbGFzczogJycsXG4gICAgICBwcmVmaXhDbGFzczogJ3Rvb2x0aXAnLFxuICAgICAgcHJlZml4RXZlbnQ6ICd0b29sdGlwJyxcbiAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICB0YXJnZXQ6IGZhbHNlLFxuICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgIHRlbXBsYXRlOiAndG9vbHRpcC90b29sdGlwLnRwbC5odG1sJyxcbiAgICAgIGNvbnRlbnRUZW1wbGF0ZTogZmFsc2UsXG4gICAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgaHRtbDogZmFsc2UsXG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBhdXRvQ2xvc2U6IGZhbHNlLFxuICAgICAgYnNFbmFibGVkOiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uKCR3aW5kb3csICRyb290U2NvcGUsICRjb21waWxlLCAkcSwgJHRlbXBsYXRlQ2FjaGUsICRodHRwLCAkYW5pbWF0ZSwgJHNjZSwgZGltZW5zaW9ucywgJCRyQUYsICR0aW1lb3V0KSB7XG5cbiAgICAgIHZhciB0cmltID0gU3RyaW5nLnByb3RvdHlwZS50cmltO1xuICAgICAgdmFyIGlzVG91Y2ggPSAnY3JlYXRlVG91Y2gnIGluICR3aW5kb3cuZG9jdW1lbnQ7XG4gICAgICB2YXIgaHRtbFJlcGxhY2VSZWdFeHAgPSAvbmctYmluZD1cIi9pZztcbiAgICAgIHZhciAkYm9keSA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93LmRvY3VtZW50KTtcblxuICAgICAgZnVuY3Rpb24gVG9vbHRpcEZhY3RvcnkoZWxlbWVudCwgY29uZmlnKSB7XG5cbiAgICAgICAgdmFyICR0b29sdGlwID0ge307XG5cbiAgICAgICAgLy8gQ29tbW9uIHZhcnNcbiAgICAgICAgdmFyIG5vZGVOYW1lID0gZWxlbWVudFswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9ICR0b29sdGlwLiRvcHRpb25zID0gYW5ndWxhci5leHRlbmQoe30sIGRlZmF1bHRzLCBjb25maWcpO1xuICAgICAgICAkdG9vbHRpcC4kcHJvbWlzZSA9IGZldGNoVGVtcGxhdGUob3B0aW9ucy50ZW1wbGF0ZSk7XG4gICAgICAgIHZhciBzY29wZSA9ICR0b29sdGlwLiRzY29wZSA9IG9wdGlvbnMuc2NvcGUgJiYgb3B0aW9ucy5zY29wZS4kbmV3KCkgfHwgJHJvb3RTY29wZS4kbmV3KCk7XG4gICAgICAgIGlmKG9wdGlvbnMuZGVsYXkgJiYgYW5ndWxhci5pc1N0cmluZyhvcHRpb25zLmRlbGF5KSkge1xuICAgICAgICAgIHZhciBzcGxpdCA9IG9wdGlvbnMuZGVsYXkuc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgICAgICAgb3B0aW9ucy5kZWxheSA9IHNwbGl0Lmxlbmd0aCA+IDEgPyB7c2hvdzogc3BsaXRbMF0sIGhpZGU6IHNwbGl0WzFdfSA6IHNwbGl0WzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwcG9ydCBzY29wZSBhcyBzdHJpbmcgb3B0aW9uc1xuICAgICAgICBpZihvcHRpb25zLnRpdGxlKSB7XG4gICAgICAgICAgc2NvcGUudGl0bGUgPSAkc2NlLnRydXN0QXNIdG1sKG9wdGlvbnMudGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvdmlkZSBzY29wZSBoZWxwZXJzXG4gICAgICAgIHNjb3BlLiRzZXRFbmFibGVkID0gZnVuY3Rpb24oaXNFbmFibGVkKSB7XG4gICAgICAgICAgc2NvcGUuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHRvb2x0aXAuc2V0RW5hYmxlZChpc0VuYWJsZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBzY29wZS4kaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0b29sdGlwLmhpZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGUuJHNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHNjb3BlLiR0b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdG9vbHRpcC50b2dnbGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHRvb2x0aXAuJGlzU2hvd24gPSBzY29wZS4kaXNTaG93biA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFByaXZhdGUgdmFyc1xuICAgICAgICB2YXIgdGltZW91dCwgaG92ZXJTdGF0ZTtcblxuICAgICAgICAvLyBTdXBwb3J0IGNvbnRlbnRUZW1wbGF0ZSBvcHRpb25cbiAgICAgICAgaWYob3B0aW9ucy5jb250ZW50VGVtcGxhdGUpIHtcbiAgICAgICAgICAkdG9vbHRpcC4kcHJvbWlzZSA9ICR0b29sdGlwLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24odGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUVsID0gYW5ndWxhci5lbGVtZW50KHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaFRlbXBsYXRlKG9wdGlvbnMuY29udGVudFRlbXBsYXRlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oY29udGVudFRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIHZhciBjb250ZW50RWwgPSBmaW5kRWxlbWVudCgnW25nLWJpbmQ9XCJjb250ZW50XCJdJywgdGVtcGxhdGVFbFswXSk7XG4gICAgICAgICAgICAgIGlmKCFjb250ZW50RWwubGVuZ3RoKSBjb250ZW50RWwgPSBmaW5kRWxlbWVudCgnW25nLWJpbmQ9XCJ0aXRsZVwiXScsIHRlbXBsYXRlRWxbMF0pO1xuICAgICAgICAgICAgICBjb250ZW50RWwucmVtb3ZlQXR0cignbmctYmluZCcpLmh0bWwoY29udGVudFRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlRWxbMF0ub3V0ZXJIVE1MO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGZXRjaCwgY29tcGlsZSB0aGVuIGluaXRpYWxpemUgdG9vbHRpcFxuICAgICAgICB2YXIgdGlwTGlua2VyLCB0aXBFbGVtZW50LCB0aXBUZW1wbGF0ZSwgdGlwQ29udGFpbmVyLCB0aXBTY29wZTtcbiAgICAgICAgJHRvb2x0aXAuJHByb21pc2UudGhlbihmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgICAgIGlmKGFuZ3VsYXIuaXNPYmplY3QodGVtcGxhdGUpKSB0ZW1wbGF0ZSA9IHRlbXBsYXRlLmRhdGE7XG4gICAgICAgICAgaWYob3B0aW9ucy5odG1sKSB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoaHRtbFJlcGxhY2VSZWdFeHAsICduZy1iaW5kLWh0bWw9XCInKTtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHRyaW0uYXBwbHkodGVtcGxhdGUpO1xuICAgICAgICAgIHRpcFRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgICAgdGlwTGlua2VyID0gJGNvbXBpbGUodGVtcGxhdGUpO1xuICAgICAgICAgICR0b29sdGlwLmluaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRvb2x0aXAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgLy8gT3B0aW9uczogZGVsYXlcbiAgICAgICAgICBpZiAob3B0aW9ucy5kZWxheSAmJiBhbmd1bGFyLmlzTnVtYmVyKG9wdGlvbnMuZGVsYXkpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRlbGF5ID0ge1xuICAgICAgICAgICAgICBzaG93OiBvcHRpb25zLmRlbGF5LFxuICAgICAgICAgICAgICBoaWRlOiBvcHRpb25zLmRlbGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlcGxhY2UgdHJpZ2dlciBvbiB0b3VjaCBkZXZpY2VzID9cbiAgICAgICAgICAvLyBpZihpc1RvdWNoICYmIG9wdGlvbnMudHJpZ2dlciA9PT0gZGVmYXVsdHMudHJpZ2dlcikge1xuICAgICAgICAgIC8vICAgb3B0aW9ucy50cmlnZ2VyLnJlcGxhY2UoL2hvdmVyL2csICdjbGljaycpO1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIE9wdGlvbnMgOiBjb250YWluZXJcbiAgICAgICAgICBpZihvcHRpb25zLmNvbnRhaW5lciA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICB0aXBDb250YWluZXIgPSBlbGVtZW50O1xuICAgICAgICAgIH0gZWxzZSBpZihhbmd1bGFyLmlzRWxlbWVudChvcHRpb25zLmNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIHRpcENvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgICAgICAgIH0gZWxzZSBpZihvcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGlwQ29udGFpbmVyID0gZmluZEVsZW1lbnQob3B0aW9ucy5jb250YWluZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE9wdGlvbnM6IHRyaWdnZXJcbiAgICAgICAgICBiaW5kVHJpZ2dlckV2ZW50cygpO1xuXG4gICAgICAgICAgLy8gT3B0aW9uczogdGFyZ2V0XG4gICAgICAgICAgaWYob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudGFyZ2V0ID0gYW5ndWxhci5pc0VsZW1lbnQob3B0aW9ucy50YXJnZXQpID8gb3B0aW9ucy50YXJnZXQgOiBmaW5kRWxlbWVudChvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3B0aW9uczogc2hvd1xuICAgICAgICAgIGlmKG9wdGlvbnMuc2hvdykge1xuICAgICAgICAgICAgc2NvcGUuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBvcHRpb25zLnRyaWdnZXIgPT09ICdmb2N1cycgPyBlbGVtZW50WzBdLmZvY3VzKCkgOiAkdG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAvLyBVbmJpbmQgZXZlbnRzXG4gICAgICAgICAgdW5iaW5kVHJpZ2dlckV2ZW50cygpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIGVsZW1lbnRcbiAgICAgICAgICBkZXN0cm95VGlwRWxlbWVudCgpO1xuXG4gICAgICAgICAgLy8gRGVzdHJveSBzY29wZVxuICAgICAgICAgIHNjb3BlLiRkZXN0cm95KCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC5lbnRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIGhvdmVyU3RhdGUgPSAnaW4nO1xuICAgICAgICAgIGlmICghb3B0aW9ucy5kZWxheSB8fCAhb3B0aW9ucy5kZWxheS5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm4gJHRvb2x0aXAuc2hvdygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGhvdmVyU3RhdGUgPT09J2luJykgJHRvb2x0aXAuc2hvdygpO1xuICAgICAgICAgIH0sIG9wdGlvbnMuZGVsYXkuc2hvdyk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAkdG9vbHRpcC5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmJzRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgc2NvcGUuJGVtaXQob3B0aW9ucy5wcmVmaXhFdmVudCArICcuc2hvdy5iZWZvcmUnLCAkdG9vbHRpcCk7XG4gICAgICAgICAgdmFyIHBhcmVudCwgYWZ0ZXI7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aXBDb250YWluZXI7XG4gICAgICAgICAgICBpZiAodGlwQ29udGFpbmVyWzBdLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBhZnRlciA9IGFuZ3VsYXIuZWxlbWVudCh0aXBDb250YWluZXJbMF0ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFmdGVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGFmdGVyID0gZWxlbWVudDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIEhpZGUgYW55IGV4aXN0aW5nIHRpcEVsZW1lbnRcbiAgICAgICAgICBpZih0aXBFbGVtZW50KSBkZXN0cm95VGlwRWxlbWVudCgpO1xuICAgICAgICAgIC8vIEZldGNoIGEgY2xvbmVkIGVsZW1lbnQgbGlua2VkIGZyb20gdGVtcGxhdGVcbiAgICAgICAgICB0aXBTY29wZSA9ICR0b29sdGlwLiRzY29wZS4kbmV3KCk7XG4gICAgICAgICAgdGlwRWxlbWVudCA9ICR0b29sdGlwLiRlbGVtZW50ID0gdGlwTGlua2VyKHRpcFNjb3BlLCBmdW5jdGlvbihjbG9uZWRFbGVtZW50LCBzY29wZSkge30pO1xuXG4gICAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHBvc2l0aW9uaW5nLiAgTWFrZSB0aGUgdG9vbHRpcCBpbnZpc2libGVcbiAgICAgICAgICAvLyBzbyBJRSBkb2Vzbid0IHRyeSB0byBmb2N1cyBvbiBpdCBvZmYgc2NyZWVuLlxuICAgICAgICAgIHRpcEVsZW1lbnQuY3NzKHt0b3A6ICctOTk5OXB4JywgbGVmdDogJy05OTk5cHgnLCBkaXNwbGF5OiAnYmxvY2snLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ30pLmFkZENsYXNzKG9wdGlvbnMucGxhY2VtZW50KTtcblxuICAgICAgICAgIC8vIE9wdGlvbnM6IGFuaW1hdGlvblxuICAgICAgICAgIGlmKG9wdGlvbnMuYW5pbWF0aW9uKSB0aXBFbGVtZW50LmFkZENsYXNzKG9wdGlvbnMuYW5pbWF0aW9uKTtcbiAgICAgICAgICAvLyBPcHRpb25zOiB0eXBlXG4gICAgICAgICAgaWYob3B0aW9ucy50eXBlKSB0aXBFbGVtZW50LmFkZENsYXNzKG9wdGlvbnMucHJlZml4Q2xhc3MgKyAnLScgKyBvcHRpb25zLnR5cGUpO1xuICAgICAgICAgIC8vIE9wdGlvbnM6IGN1c3RvbSBjbGFzc2VzXG4gICAgICAgICAgaWYob3B0aW9ucy5jdXN0b21DbGFzcykgdGlwRWxlbWVudC5hZGRDbGFzcyhvcHRpb25zLmN1c3RvbUNsYXNzKTtcblxuICAgICAgICAgIC8vIFN1cHBvcnQgdjEuMysgJGFuaW1hdGVcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2NvbW1pdC9iZjBmNTUwMmIxYmJmZGRjNWNkZDJmMTM4ZWZkOTE4OGI4YzY1MmE5XG4gICAgICAgICAgdmFyIHByb21pc2UgPSAkYW5pbWF0ZS5lbnRlcih0aXBFbGVtZW50LCBwYXJlbnQsIGFmdGVyLCBlbnRlckFuaW1hdGVDYWxsYmFjayk7XG4gICAgICAgICAgaWYocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHByb21pc2UudGhlbihlbnRlckFuaW1hdGVDYWxsYmFjayk7XG5cbiAgICAgICAgICAkdG9vbHRpcC4kaXNTaG93biA9IHNjb3BlLiRpc1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICBzYWZlRGlnZXN0KHNjb3BlKTtcbiAgICAgICAgICAkJHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdG9vbHRpcC4kYXBwbHlQbGFjZW1lbnQoKTtcblxuICAgICAgICAgICAgLy8gT25jZSBwbGFjZWQsIG1ha2UgdGhlIHRvb2x0aXAgdmlzaWJsZVxuICAgICAgICAgICAgaWYodGlwRWxlbWVudCkgdGlwRWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6ICd2aXNpYmxlJ30pO1xuICAgICAgICAgIH0pOyAvLyB2YXIgYSA9IGJvZHlFbC5vZmZzZXRXaWR0aCArIDE7ID9cblxuICAgICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgICAgaWYob3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgICAgICAgaWYob3B0aW9ucy50cmlnZ2VyICE9PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICAgICR0b29sdGlwLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaW5kS2V5Ym9hcmRFdmVudHMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihvcHRpb25zLmF1dG9DbG9zZSkge1xuICAgICAgICAgICAgYmluZEF1dG9DbG9zZUV2ZW50cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGVudGVyQW5pbWF0ZUNhbGxiYWNrKCkge1xuICAgICAgICAgIHNjb3BlLiRlbWl0KG9wdGlvbnMucHJlZml4RXZlbnQgKyAnLnNob3cnLCAkdG9vbHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICAkdG9vbHRpcC5sZWF2ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIGhvdmVyU3RhdGUgPSAnb3V0JztcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuZGVsYXkgfHwgIW9wdGlvbnMuZGVsYXkuaGlkZSkge1xuICAgICAgICAgICAgcmV0dXJuICR0b29sdGlwLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGhvdmVyU3RhdGUgPT09ICdvdXQnKSB7XG4gICAgICAgICAgICAgICR0b29sdGlwLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBvcHRpb25zLmRlbGF5LmhpZGUpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIF9ibHVyO1xuICAgICAgICAkdG9vbHRpcC5oaWRlID0gZnVuY3Rpb24oYmx1cikge1xuXG4gICAgICAgICAgaWYoISR0b29sdGlwLiRpc1Nob3duKSByZXR1cm47XG4gICAgICAgICAgc2NvcGUuJGVtaXQob3B0aW9ucy5wcmVmaXhFdmVudCArICcuaGlkZS5iZWZvcmUnLCAkdG9vbHRpcCk7XG5cbiAgICAgICAgICAvLyBzdG9yZSBibHVyIHZhbHVlIGZvciBsZWF2ZUFuaW1hdGVDYWxsYmFjayB0byB1c2VcbiAgICAgICAgICBfYmx1ciA9IGJsdXI7XG5cbiAgICAgICAgICAvLyBTdXBwb3J0IHYxLjMrICRhbmltYXRlXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9jb21taXQvYmYwZjU1MDJiMWJiZmRkYzVjZGQyZjEzOGVmZDkxODhiOGM2NTJhOVxuICAgICAgICAgIHZhciBwcm9taXNlID0gJGFuaW1hdGUubGVhdmUodGlwRWxlbWVudCwgbGVhdmVBbmltYXRlQ2FsbGJhY2spO1xuICAgICAgICAgIGlmKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSBwcm9taXNlLnRoZW4obGVhdmVBbmltYXRlQ2FsbGJhY2spO1xuXG4gICAgICAgICAgJHRvb2x0aXAuJGlzU2hvd24gPSBzY29wZS4kaXNTaG93biA9IGZhbHNlO1xuICAgICAgICAgIHNhZmVEaWdlc3Qoc2NvcGUpO1xuXG4gICAgICAgICAgLy8gVW5iaW5kIGV2ZW50c1xuICAgICAgICAgIGlmKG9wdGlvbnMua2V5Ym9hcmQgJiYgdGlwRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdW5iaW5kS2V5Ym9hcmRFdmVudHMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihvcHRpb25zLmF1dG9DbG9zZSAmJiB0aXBFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB1bmJpbmRBdXRvQ2xvc2VFdmVudHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbGVhdmVBbmltYXRlQ2FsbGJhY2soKSB7XG4gICAgICAgICAgc2NvcGUuJGVtaXQob3B0aW9ucy5wcmVmaXhFdmVudCArICcuaGlkZScsICR0b29sdGlwKTtcbiAgICAgICAgICAvLyBBbGxvdyB0byBibHVyIHRoZSBpbnB1dCB3aGVuIGhpZGRlbiwgbGlrZSB3aGVuIHByZXNzaW5nIGVudGVyIGtleVxuICAgICAgICAgIGlmKF9ibHVyICYmIG9wdGlvbnMudHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbMF0uYmx1cigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNsZWFuIHVwIGNoaWxkIHNjb3Blc1xuICAgICAgICAgIGRlc3Ryb3lUaXBFbGVtZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICAkdG9vbHRpcC50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkdG9vbHRpcC4kaXNTaG93biA/ICR0b29sdGlwLmxlYXZlKCkgOiAkdG9vbHRpcC5lbnRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLmZvY3VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGlwRWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLnNldEVuYWJsZWQgPSBmdW5jdGlvbihpc0VuYWJsZWQpIHtcbiAgICAgICAgICBvcHRpb25zLmJzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcm90ZWN0ZWQgbWV0aG9kc1xuXG4gICAgICAgICR0b29sdGlwLiRhcHBseVBsYWNlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCF0aXBFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgICAvLyBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSB0b29sdGlwIGVsZW1lbnQuXG4gICAgICAgICAgdmFyIGVsZW1lbnRQb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAvLyBHZXQgdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgdGhlIHRvb2x0aXAgc28gd2UgY2FuIGNlbnRlciBpdC5cbiAgICAgICAgICB2YXIgdGlwV2lkdGggPSB0aXBFbGVtZW50LnByb3AoJ29mZnNldFdpZHRoJyksXG4gICAgICAgICAgICAgIHRpcEhlaWdodCA9IHRpcEVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0Jyk7XG5cbiAgICAgICAgICAvLyBHZXQgdGhlIHRvb2x0aXAncyB0b3AgYW5kIGxlZnQgY29vcmRpbmF0ZXMgdG8gY2VudGVyIGl0IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAgICAgICAgdmFyIHRpcFBvc2l0aW9uID0gZ2V0Q2FsY3VsYXRlZE9mZnNldChvcHRpb25zLnBsYWNlbWVudCwgZWxlbWVudFBvc2l0aW9uLCB0aXBXaWR0aCwgdGlwSGVpZ2h0KTtcblxuICAgICAgICAgIC8vIE5vdyBzZXQgdGhlIGNhbGN1bGF0ZWQgcG9zaXRpb25pbmcuXG4gICAgICAgICAgdGlwUG9zaXRpb24udG9wICs9ICdweCc7XG4gICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCArPSAncHgnO1xuICAgICAgICAgIHRpcEVsZW1lbnQuY3NzKHRpcFBvc2l0aW9uKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgICR0b29sdGlwLiRvbktleVVwID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC53aGljaCA9PT0gMjcgJiYgJHRvb2x0aXAuJGlzU2hvd24pIHtcbiAgICAgICAgICAgICR0b29sdGlwLmhpZGUoKTtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHRvb2x0aXAuJG9uRm9jdXNLZXlVcCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIGlmIChldnQud2hpY2ggPT09IDI3KSB7XG4gICAgICAgICAgICBlbGVtZW50WzBdLmJsdXIoKTtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHRvb2x0aXAuJG9uRm9jdXNFbGVtZW50TW91c2VEb3duID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgZG8gbm90IGF1dG8tZm9jdXMgYnV0dG9ucyAoZWcuIFNhZmFyaSlcbiAgICAgICAgICAkdG9vbHRpcC4kaXNTaG93biA/IGVsZW1lbnRbMF0uYmx1cigpIDogZWxlbWVudFswXS5mb2N1cygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGJpbmQvdW5iaW5kIGV2ZW50c1xuICAgICAgICBmdW5jdGlvbiBiaW5kVHJpZ2dlckV2ZW50cygpIHtcbiAgICAgICAgICB2YXIgdHJpZ2dlcnMgPSBvcHRpb25zLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2godHJpZ2dlcnMsIGZ1bmN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAkdG9vbHRpcC50b2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHRyaWdnZXIgIT09ICdtYW51YWwnKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQub24odHJpZ2dlciA9PT0gJ2hvdmVyJyA/ICdtb3VzZWVudGVyJyA6ICdmb2N1cycsICR0b29sdGlwLmVudGVyKTtcbiAgICAgICAgICAgICAgZWxlbWVudC5vbih0cmlnZ2VyID09PSAnaG92ZXInID8gJ21vdXNlbGVhdmUnIDogJ2JsdXInLCAkdG9vbHRpcC5sZWF2ZSk7XG4gICAgICAgICAgICAgIG5vZGVOYW1lID09PSAnYnV0dG9uJyAmJiB0cmlnZ2VyICE9PSAnaG92ZXInICYmIGVsZW1lbnQub24oaXNUb3VjaCA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nLCAkdG9vbHRpcC4kb25Gb2N1c0VsZW1lbnRNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdW5iaW5kVHJpZ2dlckV2ZW50cygpIHtcbiAgICAgICAgICB2YXIgdHJpZ2dlcnMgPSBvcHRpb25zLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gdHJpZ2dlcnMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICB2YXIgdHJpZ2dlciA9IHRyaWdnZXJzW2ldO1xuICAgICAgICAgICAgaWYodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICBlbGVtZW50Lm9mZignY2xpY2snLCAkdG9vbHRpcC50b2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHRyaWdnZXIgIT09ICdtYW51YWwnKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQub2ZmKHRyaWdnZXIgPT09ICdob3ZlcicgPyAnbW91c2VlbnRlcicgOiAnZm9jdXMnLCAkdG9vbHRpcC5lbnRlcik7XG4gICAgICAgICAgICAgIGVsZW1lbnQub2ZmKHRyaWdnZXIgPT09ICdob3ZlcicgPyAnbW91c2VsZWF2ZScgOiAnYmx1cicsICR0b29sdGlwLmxlYXZlKTtcbiAgICAgICAgICAgICAgbm9kZU5hbWUgPT09ICdidXR0b24nICYmIHRyaWdnZXIgIT09ICdob3ZlcicgJiYgZWxlbWVudC5vZmYoaXNUb3VjaCA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nLCAkdG9vbHRpcC4kb25Gb2N1c0VsZW1lbnRNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRLZXlib2FyZEV2ZW50cygpIHtcbiAgICAgICAgICBpZihvcHRpb25zLnRyaWdnZXIgIT09ICdmb2N1cycpIHtcbiAgICAgICAgICAgIHRpcEVsZW1lbnQub24oJ2tleXVwJywgJHRvb2x0aXAuJG9uS2V5VXApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50Lm9uKCdrZXl1cCcsICR0b29sdGlwLiRvbkZvY3VzS2V5VXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVuYmluZEtleWJvYXJkRXZlbnRzKCkge1xuICAgICAgICAgIGlmKG9wdGlvbnMudHJpZ2dlciAhPT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGlwRWxlbWVudC5vZmYoJ2tleXVwJywgJHRvb2x0aXAuJG9uS2V5VXApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50Lm9mZigna2V5dXAnLCAkdG9vbHRpcC4kb25Gb2N1c0tleVVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2F1dG9DbG9zZUV2ZW50c0JpbmRlZCA9IGZhbHNlO1xuICAgICAgICBmdW5jdGlvbiBiaW5kQXV0b0Nsb3NlRXZlbnRzKCkge1xuICAgICAgICAgIC8vIHVzZSB0aW1lb3V0IHRvIGhvb2t1cCB0aGUgZXZlbnRzIHRvIHByZXZlbnRcbiAgICAgICAgICAvLyBldmVudCBidWJibGluZyBmcm9tIGJlaW5nIHByb2Nlc3NlZCBpbWVkaWF0ZWx5LlxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gU3RvcCBwcm9wYWdhdGlvbiB3aGVuIGNsaWNraW5nIGluc2lkZSB0b29sdGlwXG4gICAgICAgICAgICB0aXBFbGVtZW50Lm9uKCdjbGljaycsIHN0b3BFdmVudFByb3BhZ2F0aW9uKTtcblxuICAgICAgICAgICAgLy8gSGlkZSB3aGVuIGNsaWNraW5nIG91dHNpZGUgdG9vbHRpcFxuICAgICAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgJHRvb2x0aXAuaGlkZSk7XG5cbiAgICAgICAgICAgIF9hdXRvQ2xvc2VFdmVudHNCaW5kZWQgPSB0cnVlO1xuICAgICAgICAgIH0sIDAsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVuYmluZEF1dG9DbG9zZUV2ZW50cygpIHtcbiAgICAgICAgICBpZiAoX2F1dG9DbG9zZUV2ZW50c0JpbmRlZCkge1xuICAgICAgICAgICAgdGlwRWxlbWVudC5vZmYoJ2NsaWNrJywgc3RvcEV2ZW50UHJvcGFnYXRpb24pO1xuICAgICAgICAgICAgJGJvZHkub2ZmKCdjbGljaycsICR0b29sdGlwLmhpZGUpO1xuICAgICAgICAgICAgX2F1dG9DbG9zZUV2ZW50c0JpbmRlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICAgICAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgICBpZihvcHRpb25zLmNvbnRhaW5lciA9PT0gJ2JvZHknKSB7XG4gICAgICAgICAgICByZXR1cm4gZGltZW5zaW9ucy5vZmZzZXQob3B0aW9ucy50YXJnZXRbMF0gfHwgZWxlbWVudFswXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkaW1lbnNpb25zLnBvc2l0aW9uKG9wdGlvbnMudGFyZ2V0WzBdIHx8IGVsZW1lbnRbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBwb3NpdGlvbiwgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCkge1xuICAgICAgICAgIHZhciBvZmZzZXQ7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gcGxhY2VtZW50LnNwbGl0KCctJyk7XG5cbiAgICAgICAgICBzd2l0Y2ggKHNwbGl0WzBdKSB7XG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCAvIDIgLSBhY3R1YWxIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCxcbiAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ubGVmdCArIHBvc2l0aW9uLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCAvIDIgLSBhY3R1YWxIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0IC0gYWN0dWFsV2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCAtIGFjdHVhbEhlaWdodCxcbiAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ubGVmdCArIHBvc2l0aW9uLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCFzcGxpdFsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGQgc3VwcG9ydCBmb3IgY29ybmVycyBAdG9kbyBjc3NcbiAgICAgICAgICBpZihzcGxpdFswXSA9PT0gJ3RvcCcgfHwgc3BsaXRbMF0gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNwbGl0WzFdKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgb2Zmc2V0LmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgb2Zmc2V0LmxlZnQgPSAgcG9zaXRpb24ubGVmdCArIHBvc2l0aW9uLndpZHRoIC0gYWN0dWFsV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmKHNwbGl0WzBdID09PSAnbGVmdCcgfHwgc3BsaXRbMF0gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc3BsaXRbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgIG9mZnNldC50b3AgPSBwb3NpdGlvbi50b3AgLSBhY3R1YWxIZWlnaHQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgb2Zmc2V0LnRvcCA9IHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveVRpcEVsZW1lbnQoKSB7XG4gICAgICAgICAgLy8gQ2FuY2VsIHBlbmRpbmcgY2FsbGJhY2tzXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICAgICAgaWYoJHRvb2x0aXAuJGlzU2hvd24gJiYgdGlwRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvQ2xvc2UpIHtcbiAgICAgICAgICAgICAgdW5iaW5kQXV0b0Nsb3NlRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgICAgICAgICAgdW5iaW5kS2V5Ym9hcmRFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZih0aXBTY29wZSkge1xuICAgICAgICAgICAgdGlwU2NvcGUuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRpcFNjb3BlID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZih0aXBFbGVtZW50KSB7XG4gICAgICAgICAgICB0aXBFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgdGlwRWxlbWVudCA9ICR0b29sdGlwLiRlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJHRvb2x0aXA7XG5cbiAgICAgIH1cblxuICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uc1xuXG4gICAgICBmdW5jdGlvbiBzYWZlRGlnZXN0KHNjb3BlKSB7XG4gICAgICAgIHNjb3BlLiQkcGhhc2UgfHwgKHNjb3BlLiRyb290ICYmIHNjb3BlLiRyb290LiQkcGhhc2UpIHx8IHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmluZEVsZW1lbnQocXVlcnksIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGFuZ3VsYXIuZWxlbWVudCgoZWxlbWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmV0Y2hQcm9taXNlcyA9IHt9O1xuICAgICAgZnVuY3Rpb24gZmV0Y2hUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuICAgICAgICBpZihmZXRjaFByb21pc2VzW3RlbXBsYXRlXSkgcmV0dXJuIGZldGNoUHJvbWlzZXNbdGVtcGxhdGVdO1xuICAgICAgICByZXR1cm4gKGZldGNoUHJvbWlzZXNbdGVtcGxhdGVdID0gJHEud2hlbigkdGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGUpIHx8ICRodHRwLmdldCh0ZW1wbGF0ZSkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGlmKGFuZ3VsYXIuaXNPYmplY3QocmVzKSkge1xuICAgICAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlLCByZXMuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFRvb2x0aXBGYWN0b3J5O1xuXG4gICAgfTtcblxuICB9KVxuXG4gIC5kaXJlY3RpdmUoJ2JzVG9vbHRpcCcsIGZ1bmN0aW9uKCR3aW5kb3csICRsb2NhdGlvbiwgJHNjZSwgJHRvb2x0aXAsICQkckFGKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFQUMnLFxuICAgICAgc2NvcGU6IHRydWUsXG4gICAgICBsaW5rOiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxlbWVudCwgYXR0ciwgdHJhbnNjbHVzaW9uKSB7XG5cbiAgICAgICAgLy8gRGlyZWN0aXZlIG9wdGlvbnNcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7c2NvcGU6IHNjb3BlfTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKFsndGVtcGxhdGUnLCAnY29udGVudFRlbXBsYXRlJywgJ3BsYWNlbWVudCcsICdjb250YWluZXInLCAndGFyZ2V0JywgJ2RlbGF5JywgJ3RyaWdnZXInLCAna2V5Ym9hcmQnLCAnaHRtbCcsICdhbmltYXRpb24nLCAndHlwZScsICdjdXN0b21DbGFzcyddLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhdHRyW2tleV0pKSBvcHRpb25zW2tleV0gPSBhdHRyW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG92ZXJ3cml0ZSBpbmhlcml0ZWQgdGl0bGUgdmFsdWUgd2hlbiBubyB2YWx1ZSBzcGVjaWZpZWRcbiAgICAgICAgLy8gZml4IGZvciBhbmd1bGFyIDEuMy4xIDUzMWE4ZGU3MmM0MzlkOGRkZDA2NDg3NGJmMzY0YzAwY2VkYWJiMTFcbiAgICAgICAgaWYgKCFzY29wZS5oYXNPd25Qcm9wZXJ0eSgndGl0bGUnKSl7XG4gICAgICAgICAgc2NvcGUudGl0bGUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ic2VydmUgc2NvcGUgYXR0cmlidXRlcyBmb3IgY2hhbmdlXG4gICAgICAgIGF0dHIuJG9ic2VydmUoJ3RpdGxlJywgZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQobmV3VmFsdWUpIHx8ICFzY29wZS5oYXNPd25Qcm9wZXJ0eSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gc2NvcGUudGl0bGU7XG4gICAgICAgICAgICBzY29wZS50aXRsZSA9ICRzY2UudHJ1c3RBc0h0bWwobmV3VmFsdWUpO1xuICAgICAgICAgICAgYW5ndWxhci5pc0RlZmluZWQob2xkVmFsdWUpICYmICQkckFGKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0b29sdGlwICYmIHRvb2x0aXAuJGFwcGx5UGxhY2VtZW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgc2NvcGUgYXMgYW4gb2JqZWN0XG4gICAgICAgIGF0dHIuYnNUb29sdGlwICYmIHNjb3BlLiR3YXRjaChhdHRyLmJzVG9vbHRpcCwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgaWYoYW5ndWxhci5pc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNjb3BlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlLnRpdGxlID0gbmV3VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuZ3VsYXIuaXNEZWZpbmVkKG9sZFZhbHVlKSAmJiAkJHJBRihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvb2x0aXAgJiYgdG9vbHRpcC4kYXBwbHlQbGFjZW1lbnQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gVmlzaWJpbGl0eSBiaW5kaW5nIHN1cHBvcnRcbiAgICAgICAgYXR0ci5ic1Nob3cgJiYgc2NvcGUuJHdhdGNoKGF0dHIuYnNTaG93LCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZighdG9vbHRpcCB8fCAhYW5ndWxhci5pc0RlZmluZWQobmV3VmFsdWUpKSByZXR1cm47XG4gICAgICAgICAgaWYoYW5ndWxhci5pc1N0cmluZyhuZXdWYWx1ZSkpIG5ld1ZhbHVlID0gISFuZXdWYWx1ZS5tYXRjaCgvdHJ1ZXwsPyh0b29sdGlwKSw/L2kpO1xuICAgICAgICAgIG5ld1ZhbHVlID09PSB0cnVlID8gdG9vbHRpcC5zaG93KCkgOiB0b29sdGlwLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRW5hYmxlZCBiaW5kaW5nIHN1cHBvcnRcbiAgICAgICAgYXR0ci5ic0VuYWJsZWQgJiYgc2NvcGUuJHdhdGNoKGF0dHIuYnNFbmFibGVkLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3Njb3BlLiR3YXRjaCglcyknLCBhdHRyLmJzRW5hYmxlZCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICBpZighdG9vbHRpcCB8fCAhYW5ndWxhci5pc0RlZmluZWQobmV3VmFsdWUpKSByZXR1cm47XG4gICAgICAgICAgaWYoYW5ndWxhci5pc1N0cmluZyhuZXdWYWx1ZSkpIG5ld1ZhbHVlID0gISFuZXdWYWx1ZS5tYXRjaCgvdHJ1ZXwxfCw/KHRvb2x0aXApLD8vaSk7XG4gICAgICAgICAgbmV3VmFsdWUgPT09IGZhbHNlID8gdG9vbHRpcC5zZXRFbmFibGVkKGZhbHNlKSA6IHRvb2x0aXAuc2V0RW5hYmxlZCh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVyXG4gICAgICAgIHZhciB0b29sdGlwID0gJHRvb2x0aXAoZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gR2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZih0b29sdGlwKSB0b29sdGlwLmRlc3Ryb3koKTtcbiAgICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgICB0b29sdGlwID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICB9O1xuXG4gIH0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zdHJhcC9zcmMvdG9vbHRpcC90b29sdGlwLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6ImJ1aWx0LmpzIn0=