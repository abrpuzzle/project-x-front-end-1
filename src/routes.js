// Pages
import Home from "./pages/Home.svelte";

import Tourists from "./pages/tourists/Tourists.svelte";
import CreateTourist from "./pages/tourists/CreateTourist.svelte"

import Trips from "./pages/Trips.svelte";
import Routes from "./pages/Routes.svelte";
import Points_of_Interest from "./pages/Points-of-Interest.svelte"

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/tourists/tourists': Tourists,
    '/trips': Trips,
    '/routes': Routes,
    '/points-of-interest': Points_of_Interest,
    '/createtourist': CreateTourist,
}