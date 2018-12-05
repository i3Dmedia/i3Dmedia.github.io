// * ko-actor-directive.js 
// * dynamic svg template for dimensional data-visualization
// * @NOTE: there is redundancy between the initial ko-actor element id
// * and the json data-object {'Circles':'{id:"bubblechart", transform:""}'}
// * Therefore a sync-check could be made to ensure data and template
// * are matching based on the two sources for the id:
// * (1) the placeholder element id, and (2) the Circles.id in the json-data 
// * @TODO - inject Mediator and Crossfilter services
// ---------------------------

/*
 * exp:
 * <div id="2D" class="stage" >
 *   <svg id="s">
 *     ---------------------------------------------------------
 *     <ko-actor id='bubblechart' type='Circles' set='circles' />
 *     ---------------------------------------------------------
 *     replaced by:
 *     ----------------------------------------------------------
 *     <g id = "{Circles.id}}" transform = "{{Circles.transform}}">
 *       <circle ng-repeat = "c in circles"
 *               ng-attr-cx = "{{c.x}}" 
 *               ng-attr-cy = "{{c.y}}"
 *               ng-attr-r = "{{c.r}}"
 *               ng-attr-style = "{{c.style}}"
 *       </circle>
 *     </g>
 *     ----------------------------------------------------------
 *   </svg>
 * </div>
 */
angular.module('app', [])
  .directive('koActor', ['$templateCache', function($templateCache) {
    'use strict';
    // define and return directive definition object
    return {
      restrict: 'E',    // element
      replace: 'true',  // replace <ko-actor>-tag with compiled template
      scope: true,      // inherit parent scope - <div id='2D'> (?)
      template: function(el, attrs){
        return $templateCache.get('/svg/' + attrs.type);
      },
      link: function(scope, el, attrs){
          scope[attrs.set] = 
            [{cx:10, cy:20, cr:5, style:"fill:'red'"},
             {cx:11, cy:21, cr:6, style:"fill:'gray'"},
             {cx:12, cy:22, cr:7, style:"fill:'blue'"}];
          scope[attrs.type] = {id: attrs.id,
                               transform:"translate(0,0)"};
      }
    };
  }]);
