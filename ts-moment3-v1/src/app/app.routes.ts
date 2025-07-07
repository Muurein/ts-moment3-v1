import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Conclusion } from './pages/conclusion/conclusion';
import { Convert } from './pages/convert/convert';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "convert", component: Convert },
    { path: "conclusion", component: Conclusion },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "404", component: NotFound }, //om något går fel
    { path: "**", component: NotFound } //överflödig grafik
];
