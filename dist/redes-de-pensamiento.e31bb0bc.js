// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"csv-a-grafo/resources/graphs/construccion-de-conceptos-whitehead-james.json":[function(require,module,exports) {
module.exports = {
  "links": [{
    "value": 1,
    "source": "philosophy of organism",
    "target": "philosophical tradition"
  }, {
    "value": 1,
    "source": "scheme",
    "target": "interconnection"
  }, {
    "value": 1,
    "source": "scheme",
    "target": "experience"
  }, {
    "value": 1,
    "source": "scheme",
    "target": "composition"
  }, {
    "value": 1,
    "source": "scheme",
    "target": "capacityof transformation"
  }, {
    "value": 1,
    "source": "scheme",
    "target": "knowledge"
  }, {
    "value": 1,
    "source": "adequatio",
    "target": "scheme"
  }, {
    "value": 1,
    "source": "adequatio",
    "target": "adequatio"
  }, {
    "value": 1,
    "source": "adequatio",
    "target": "experience"
  }, {
    "value": 1,
    "source": "adequatio",
    "target": "expression"
  }, {
    "value": 1,
    "source": "adequatio",
    "target": "composition"
  }, {
    "value": 1,
    "source": "adequatio",
    "target": "interpretation"
  }, {
    "value": 1,
    "source": "whole",
    "target": "composition"
  }, {
    "value": 1,
    "source": "rigid systematism",
    "target": ""
  }, {
    "value": 1,
    "source": "inclusion of scientific learnings",
    "target": "whole"
  }, {
    "value": 1,
    "source": "inclusion of scientific learnings",
    "target": "experience"
  }, {
    "value": 1,
    "source": "inclusion of scientific learnings",
    "target": "modern knowledge"
  }, {
    "value": 1,
    "source": "non-exo-systemic-dependence",
    "target": "scheme"
  }, {
    "value": 1,
    "source": "non-exo-systemic-dependence",
    "target": "rigid systematism"
  }, {
    "value": 1,
    "source": "non-exo-systemic-dependence",
    "target": "experience"
  }, {
    "value": 1,
    "source": "non-exo-systemic-dependence",
    "target": "modern knowledge"
  }, {
    "value": 1,
    "source": "non-exo-systemic-dependence",
    "target": "truth-proof+view-theory"
  }, {
    "value": 1,
    "source": "cosmology",
    "target": "scheme"
  }, {
    "value": 1,
    "source": "cosmology",
    "target": "interconnections"
  }, {
    "value": 1,
    "source": "cosmology",
    "target": "experience"
  }, {
    "value": 1,
    "source": "cosmology",
    "target": "method"
  }, {
    "value": 1,
    "source": "cosmology",
    "target": "multi-sided or composition"
  }, {
    "value": 1,
    "source": "cosmology",
    "target": "self consistency"
  }, {
    "value": 1,
    "source": "cosmology",
    "target": "advance of knowledge (scientific learnings)"
  }, {
    "value": 1,
    "source": "experience",
    "target": "science"
  }, {
    "value": 1,
    "source": "experience",
    "target": "philsophical tradition"
  }, {
    "value": 1,
    "source": "experience",
    "target": "feeling"
  }, {
    "value": 1,
    "source": "method",
    "target": "non-exo-systemic-dependence"
  }, {
    "value": 1,
    "source": "method",
    "target": "development"
  }, {
    "value": 1,
    "source": "method",
    "target": "recurrence"
  }, {
    "value": 1,
    "source": "recurrence",
    "target": "multi-sided"
  }, {
    "value": 1,
    "source": "recurrence",
    "target": "method"
  }, {
    "value": 1,
    "source": "interconnection",
    "target": "cosmology"
  }, {
    "value": 1,
    "source": "interconnection",
    "target": "scheme"
  }, {
    "value": 1,
    "source": "interconnection",
    "target": "generic notions"
  }, {
    "value": 1,
    "source": "interconnection",
    "target": "expression"
  }, {
    "value": 1,
    "source": "interconnection",
    "target": "development"
  }, {
    "value": 1,
    "source": "interconnection",
    "target": "adequatio"
  }, {
    "value": 1,
    "source": "development",
    "target": ""
  }, {
    "value": 1,
    "source": "generic notions",
    "target": "scheme"
  }, {
    "value": 1,
    "source": "framing",
    "target": "realism"
  }, {
    "value": 1,
    "source": "framing",
    "target": "idealism"
  }, {
    "value": 1,
    "source": "framing",
    "target": "cosmology"
  }, {
    "value": 1,
    "source": "framing",
    "target": "theoretical transformation"
  }, {
    "value": 1,
    "source": "framing",
    "target": "?"
  }, {
    "value": 1,
    "source": "framing",
    "target": "method"
  }, {
    "value": 1,
    "source": "repudiations",
    "target": "<everything in the quote>"
  }, {
    "value": 1,
    "source": "repudiations",
    "target": "relevance to the understanding of the stubborn facts of daily life"
  }, {
    "value": 1,
    "source": "repudiations",
    "target": "method"
  }, {
    "value": 1,
    "source": "becoming",
    "target": "relatedness"
  }, {
    "value": 1,
    "source": "becoming",
    "target": "actual entitites"
  }, {
    "value": 1,
    "source": "becoming",
    "target": "philosophy of organism"
  }, {
    "value": 1,
    "source": "actual entity",
    "target": "becoming"
  }, {
    "value": 1,
    "source": "actual entity",
    "target": "relatedness"
  }, {
    "value": 1,
    "source": "actual entity",
    "target": "philosophy of organism"
  }, {
    "value": 1,
    "source": "relatedness",
    "target": "becoming"
  }, {
    "value": 1,
    "source": "relatedness",
    "target": "actualities"
  }, {
    "value": 1,
    "source": "relatedness",
    "target": "objective immortality"
  }, {
    "value": 1,
    "source": "relatedness",
    "target": "component"
  }, {
    "value": 1,
    "source": "relatedness",
    "target": "composition"
  }, {
    "value": 1,
    "source": "composition",
    "target": "method"
  }, {
    "value": 1,
    "source": "composition",
    "target": "whole"
  }, {
    "value": 1,
    "source": "composition",
    "target": "adequatio"
  }, {
    "value": 1,
    "source": "composition",
    "target": "becoming"
  }, {
    "value": 1,
    "source": "composition",
    "target": "relatedness"
  }, {
    "value": 1,
    "source": "composition",
    "target": "truth-proof-view-theory"
  }, {
    "value": 1,
    "source": "composition",
    "target": "composition"
  }, {
    "value": 1,
    "source": "failure (fault, falla)",
    "target": "experience"
  }, {
    "value": 1,
    "source": "failure (fault, falla)",
    "target": "scientific or modern knowledge"
  }, {
    "value": 1,
    "source": "failure (fault, falla)",
    "target": "nature of things"
  }],
  "nodes": [{
    "id": "",
    "connections": 2,
    "group": 1
  }, {
    "id": "development",
    "connections": 3,
    "group": 1
  }, {
    "id": "actualities",
    "connections": 1,
    "group": 1
  }, {
    "id": "science",
    "connections": 1,
    "group": 1
  }, {
    "id": "objective immortality",
    "connections": 1,
    "group": 1
  }, {
    "id": "interconnections",
    "connections": 1,
    "group": 1
  }, {
    "id": "non-exo-systemic-dependence",
    "connections": 6,
    "group": 1
  }, {
    "id": "capacityof transformation",
    "connections": 1,
    "group": 1
  }, {
    "id": "cosmology",
    "connections": 9,
    "group": 1
  }, {
    "id": "adequatio",
    "connections": 9,
    "group": 1
  }, {
    "id": "experience",
    "connections": 9,
    "group": 1
  }, {
    "id": "scientific or modern knowledge",
    "connections": 1,
    "group": 1
  }, {
    "id": "theoretical transformation",
    "connections": 1,
    "group": 1
  }, {
    "id": "method",
    "connections": 8,
    "group": 1
  }, {
    "id": "idealism",
    "connections": 1,
    "group": 1
  }, {
    "id": "component",
    "connections": 1,
    "group": 1
  }, {
    "id": "interconnection",
    "connections": 7,
    "group": 1
  }, {
    "id": "interpretation",
    "connections": 1,
    "group": 1
  }, {
    "id": "inclusion of scientific learnings",
    "connections": 3,
    "group": 1
  }, {
    "id": "realism",
    "connections": 1,
    "group": 1
  }, {
    "id": "advance of knowledge (scientific learnings)",
    "connections": 1,
    "group": 1
  }, {
    "id": "rigid systematism",
    "connections": 2,
    "group": 1
  }, {
    "id": "expression",
    "connections": 2,
    "group": 1
  }, {
    "id": "philosophical tradition",
    "connections": 1,
    "group": 1
  }, {
    "id": "?",
    "connections": 1,
    "group": 1
  }, {
    "id": "actual entity",
    "connections": 3,
    "group": 1
  }, {
    "id": "generic notions",
    "connections": 2,
    "group": 1
  }, {
    "id": "<everything in the quote>",
    "connections": 1,
    "group": 1
  }, {
    "id": "framing",
    "connections": 6,
    "group": 1
  }, {
    "id": "multi-sided",
    "connections": 1,
    "group": 1
  }, {
    "id": "becoming",
    "connections": 6,
    "group": 1
  }, {
    "id": "recurrence",
    "connections": 3,
    "group": 1
  }, {
    "id": "actual entitites",
    "connections": 1,
    "group": 1
  }, {
    "id": "whole",
    "connections": 3,
    "group": 1
  }, {
    "id": "failure (fault, falla)",
    "connections": 3,
    "group": 1
  }, {
    "id": "knowledge",
    "connections": 1,
    "group": 1
  }, {
    "id": "truth-proof+view-theory",
    "connections": 1,
    "group": 1
  }, {
    "id": "relatedness",
    "connections": 8,
    "group": 1
  }, {
    "id": "nature of things",
    "connections": 1,
    "group": 1
  }, {
    "id": "multi-sided or composition",
    "connections": 1,
    "group": 1
  }, {
    "id": "relevance to the understanding of the stubborn facts of daily life",
    "connections": 1,
    "group": 1
  }, {
    "id": "composition",
    "connections": 12,
    "group": 1
  }, {
    "id": "feeling",
    "connections": 1,
    "group": 1
  }, {
    "id": "philosophy of organism",
    "connections": 3,
    "group": 1
  }, {
    "id": "repudiations",
    "connections": 3,
    "group": 1
  }, {
    "id": "modern knowledge",
    "connections": 2,
    "group": 1
  }, {
    "id": "self consistency",
    "connections": 1,
    "group": 1
  }, {
    "id": "truth-proof-view-theory",
    "connections": 1,
    "group": 1
  }, {
    "id": "philsophical tradition",
    "connections": 1,
    "group": 1
  }, {
    "id": "scheme",
    "connections": 10,
    "group": 1
  }]
};
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _construccionDeConceptosWhiteheadJames = _interopRequireDefault(require("./csv-a-grafo/resources/graphs/construccion-de-conceptos-whitehead-james.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var svg = d3.select("#graph").append("svg").attr("width", "100%").attr("height", "100%").call(d3.zoom().on("zoom", function () {
  svg.attr("transform", d3.event.transform);
})).append("g"),
    width = window.innerWidth,
    height = window.innerHeight;
var color = d3.scaleOrdinal(d3.schemeCategory20);
var simulation = d3.forceSimulation().force("link", d3.forceLink().id(function (d) {
  return d.id;
}) // .distance(d => {
//   console.log(d);
//   return 100;
// })
).force("charge", d3.forceManyBody().strength(-200)).force("center", d3.forceCenter(width / 2, height / 2));
var link = svg.append("g").attr("class", "links").selectAll("line").data(_construccionDeConceptosWhiteheadJames.default.links).enter().append("line").attr("stroke-width", function (d) {
  return Math.sqrt(d.value);
});
var node = svg.append("g").attr("class", "nodes").selectAll("g").data(_construccionDeConceptosWhiteheadJames.default.nodes).enter().append("g");
var circles = node.append("circle").attr("r", function (d) {
  console.log(d);
  return 10 + d.connections * 1.5;
}).attr("fill", function (d) {
  return color(d.group);
}).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
var lables = node.append("text").text(function (d) {
  return d.id;
}).style("font-size", "16px").attr("x", 6).attr("y", 3);
node.append("title").text(function (d) {
  return d.id;
});
simulation.nodes(_construccionDeConceptosWhiteheadJames.default.nodes).on("tick", ticked);
simulation.force("link").links(_construccionDeConceptosWhiteheadJames.default.links);

function ticked() {
  link.attr("x1", function (d) {
    return d.source.x;
  }).attr("y1", function (d) {
    return d.source.y;
  }).attr("x2", function (d) {
    return d.target.x;
  }).attr("y2", function (d) {
    return d.target.y;
  });
  node.attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
}

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
},{"./csv-a-grafo/resources/graphs/construccion-de-conceptos-whitehead-james.json":"csv-a-grafo/resources/graphs/construccion-de-conceptos-whitehead-james.json"}],"../../.nvm/versions/node/v10.16.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43253" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v10.16.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/redes-de-pensamiento.e31bb0bc.js.map