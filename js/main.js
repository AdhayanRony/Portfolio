(function (a) {
    "use strict";

    function b() {
        var b = a(".portfolio-grid"), c = a(".portfolio-filters");
        b && (b.shuffle({speed: 450, itemSelector: "figure"}), c.on("click", ".filter", function (c) {
            b.shuffle("update"), c.preventDefault(), a(".portfolio-filters .filter").parent().removeClass("active"), a(this).parent().addClass("active"), b.shuffle("shuffle", a(this).attr("data-group"))
        }))
    }

    function c() {
        var b = a(window).width(), c = a("#site_header");
        992 > b ? (c.addClass("mobile-menu-hide"), setTimeout(function () {
            c.addClass("animate")
        }, 500)) : c.removeClass("animate")
    }

    a(function () {
        a("#contact_form").validator(), a("#contact_form").on("submit", function (b) {
            if (!b.isDefaultPrevented()) {
                return a.ajax({
                    type: "POST",
                    url: "contact_form/contact_form.php",
                    data: a(this).serialize(),
                    success: function (b) {
                        var c = "alert-" + b.type, d = b.message;
                        c && d && (a("#contact_form").find(".messages").html("<div class=\"alert " + c + " alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" + d + "</div>"), a("#contact_form")[0].reset())
                    }
                }), !1
            }
        })
    }), a(window).on("load", function () {
        a(".preloader").fadeOut(800, "linear");
        var b = a(".subpages");
        b[0] && PageTransitions.init({menu: "ul.site-main-menu"})
    }).on("resize", function () {
        c()
    }), a(document).on("ready", function () {
        var d = a(".portfolio-grid");
        d.imagesLoaded(function () {
            b(this)
        });
        var e = a(".blog-masonry");
        e.imagesLoaded(function () {
            e.masonry()
        }), a(".menu-toggle").on("click", function () {
            a("#site_header").addClass("animate"), a("#site_header").toggleClass("mobile-menu-hide")
        }), a(".site-main-menu").on("click", "a", function () {
            c()
        }), a(".sidebar-toggle").on("click", function () {
            a("#blog-sidebar").toggleClass("open")
        }), a(".testimonials.owl-carousel").owlCarousel({
            nav: !0,
            items: 3,
            loop: !1,
            navText: !1,
            margin: 25,
            responsive: {0: {items: 1}, 480: {items: 1}, 768: {items: 2}, 1200: {items: 2}}
        }), a(".clients.owl-carousel").imagesLoaded().owlCarousel({
            nav: !0,
            items: 2,
            loop: !1,
            navText: !1,
            margin: 10,
            autoHeight: !1,
            responsive: {0: {items: 2}, 768: {items: 4}, 1200: {items: 6}}
        }), a(".text-rotation").owlCarousel({
            loop: !0,
            dots: !1,
            nav: !1,
            margin: 0,
            items: 1,
            autoplay: !0,
            autoplayHoverPause: !1,
            autoplayTimeout: 3800,
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        }), a("body").magnificPopup({
            delegate: "a.lightbox",
            type: "image",
            removalDelay: 300,
            mainClass: "mfp-fade",
            image: {titleSrc: "title", gallery: {enabled: !0}},
            iframe: {
                markup: "<div class=\"mfp-iframe-scaler\"><div class=\"mfp-close\"></div><iframe class=\"mfp-iframe\" frameborder=\"0\" allowfullscreen></iframe><div class=\"mfp-title mfp-bottom-iframe-title\"></div></div>",
                patterns: {
                    youtube: {index: "youtube.com/", id: null, src: "%id%?autoplay=1"},
                    vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                    gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
                },
                srcAction: "iframe_src"
            },
            callbacks: {
                markupParse: function (a, b, c) {
                    b.title = c.el.attr("title")
                }
            }
        }), a(".ajax-page-load-link").magnificPopup({
            type: "ajax",
            removalDelay: 300,
            mainClass: "mfp-fade",
            gallery: {enabled: !0}
        }), a(".form-control").val("").on("focusin", function () {
            a(this).parent(".form-group").addClass("form-group-focus")
        }).on("focusout", function () {
            0 === a(this).val().length && a(this).parent(".form-group").removeClass("form-group-focus")
        }), a("#map").googleMap({zoom: 16}), a("#map").addMarker({address: "Mirpur 1, Dhaka, Bangladesh"})
    })
})(jQuery);