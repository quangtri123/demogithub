jQuery(document).ready(function ($) {
    $("#mobile-menu").mobileMenu({
        MenuWidth: 250,
        SlideSpeed: 250,
        WindowsMaxWidth: 767,
        PagePush: true,
        FromLeft: true,
        Overlay: true,
        CollapseMenu: true,
        ClassName: "mobile-menu"
    });
});        