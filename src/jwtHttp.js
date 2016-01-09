System.register(['angular2/core', 'angular2/http', './config', './shared'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, http_3, config_1, http_4, http_5, shared_1;
    var JwtHttp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
                http_3 = http_1_1;
                http_4 = http_1_1;
                http_5 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            JwtHttp = (function (_super) {
                __extends(JwtHttp, _super);
                function JwtHttp(_backend, _defaultOptions, _shared, _config) {
                    _super.call(this, _backend, _defaultOptions);
                    this._shared = _shared;
                    this._config = _config;
                }
                JwtHttp.prototype.request = function (url, options) {
                    if (this._shared.isAuthenticated()) {
                        options.headers = options.headers || new http_3.Headers();
                        options.headers.set(this._config.authHeader, this._config.authToken + ' ' + this._shared.getToken());
                    }
                    return _super.prototype.request.call(this, url, options);
                };
                JwtHttp.prototype.get = function (url, options) {
                    options.method = http_2.RequestMethod.Get;
                    return this.request(url, options);
                };
                JwtHttp.prototype.post = function (url, body, options) {
                    options.method = http_2.RequestMethod.Post;
                    options.body = body;
                    return this.request(url, options);
                };
                JwtHttp.prototype.put = function (url, body, options) {
                    options.method = http_2.RequestMethod.Put;
                    options.body = body;
                    return _super.prototype.put.call(this, url, body, options);
                };
                JwtHttp.prototype.delete = function (url, options) {
                    options.method = http_2.RequestMethod.Delete;
                    return _super.prototype.delete.call(this, url, options);
                };
                JwtHttp.prototype.patch = function (url, body, options) {
                    options.method = http_2.RequestMethod.Patch;
                    options.body = body;
                    return _super.prototype.patch.call(this, url, body, options);
                };
                JwtHttp.prototype.head = function (url, options) {
                    options.method = http_2.RequestMethod.Head;
                    return _super.prototype.head.call(this, url, options);
                };
                JwtHttp = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_5.ConnectionBackend, http_4.RequestOptions, shared_1.Shared, config_1.Config])
                ], JwtHttp);
                return JwtHttp;
            })(http_1.Http);
            exports_1("JwtHttp", JwtHttp);
        }
    }
});
//# sourceMappingURL=jwtHttp.js.map