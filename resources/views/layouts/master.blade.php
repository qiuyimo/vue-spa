<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel Vue SPA</title>

    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app">
        {{--导航--}}
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    {{--使用 router-link 组件来导航. --}}
                    {{--通过传入 `to` 属性指定链接. --}}
                    {{--<router-link> 默认会被渲染成一个 `<a>` 标签 --}}
                    <router-link to="/" class="navbar-brand">Vue-SPA</router-link>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {{--路由对应的组件, 路由出口, 路由匹配到的组件将渲染在这里--}}
        <router-view></router-view>
    </div>

    <script src="/js/app.js"></script>
</body>
</html>
