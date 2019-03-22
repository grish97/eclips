<nav class="navbar  navbar-light bg-light shadow">
    <a href="/" class="navbar-brand eclipseBrand"><img src="{{asset('images/eclipse.png')}}" alt="Eclipse"><span class="font-weight-bold ml-2">Eclipse</span></a>

    @guest
        <ul class="navbar-nav flex-row">
            <li class="nav-item mr-3">
                <a href="/login" class="nav-link">Login</a>
            </li>
            <li class="nav-item mr-3">
                <a href="/register" class="nav-link">Register</a>
            </li>
            <li class="nav-item">
                <a href="/admin" class="nav-link">Admin</a>
            </li>
        </ul>
    @endguest
</nav>