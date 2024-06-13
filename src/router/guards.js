import auth from "@/core/auth/auth";

export function setTitlePage(to, from, next) {
    const title = to.matched.find((item) => item.meta.title);

    if (title) {
        window.document.title = title.meta.title;
    }
    next();
}

export function isNotAuthenticated(to, from, next) {
    if (!auth.isAuthenticated()) {
        next();
        return;
    }
    next('/');
}

export function isAuthenticated(to, from, next) {
    if (auth.isAuthenticated()) {
        next();
        return;
    }
    next('/login');
}