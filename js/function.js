function isRetina() {
    var e = "(-webkit-min-device-pixel-ratio: 1.5),				(min--moz-device-pixel-ratio: 1.5),				(-o-min-device-pixel-ratio: 3/2),				(min-device-pixel-ratio: 1.5),				(min-resolution: 144dpi),				(min-resolution: 1.5dppx)";
    return window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia(e).matches ? !0 : !1
}

function showimg(e) {
    jQuery(".hideall").css("display", "none"), jQuery("#img_" + e).css("display", "block"), jQuery(".allli").removeClass("active"), jQuery("#imgli_" + e).addClass("active")
}

function equal_height() {
    if (jQuery(".equal_height").height("auto"), jQuery(window).width() > 767) {
        var e = 0;
        jQuery(".equal_height").each(function() {
            jQuery(this).height() > e && (e = jQuery(this).height())
        }), jQuery(".equal_height").height(e)
    }
}
jQuery(document).ready(function() {
        if (window.isRetina()) {
            var e = new Array,
                i = 0,
                n = "http://192.168.3.2/solution/images/@2x/",
                s = [".png", ".jpg"];
            jQuery.ajax({
                url: n,
                success: function(n) {
                    jQuery(n).find("a:contains(" + s[0] + "),a:contains(" + s[1] + ")").each(function() {
                        file_name = this.href.replace(window.location, ""), i++, filenamenew = file_name.lastIndexOf("/"), d = file_name.substring(0, filenamenew), file_new = file_name.substring(filenamenew + 1), e[i] = file_new
                    });
                    for (var t = document.getElementsByTagName("img"), r = 0, a = t.length; a > r; r++) {
                        var o = t[r],
                            l = o.src,
                            c = l.lastIndexOf("/"),
                            d = l.substring(0, c),
                            u = l.substring(c + 1),
                            h = o.clientWidth,
                            p = o.clientHeight,
                            f = "http://192.168.3.2/solution/images/@2x/" + u,
                            y = u.split("?"); - 1 == jQuery.inArray(y[0], e) || (o.width = h, o.height = p, o.src = f)
                    }
                }
            })
        }! function() {
            var e = document.querySelectorAll(".parallax"),
                i = 1;
            window.onscroll = function() {
                [].slice.call(e).forEach(function(e) {
                    var n = window.pageYOffset,
                        s = "0 " + n * i + "px";
                    e.style.backgroundPosition = s
                })
            }
        }()
    }), jQuery(document).ready(function() {
        jQuery(document).scrollTop() > 100 ? jQuery(".header").addClass("stickynav") : jQuery(".header").removeClass("stickynav"), jQuery(window).scroll(function() {
            jQuery(document).scrollTop() > 100 ? jQuery(".header").addClass("stickynav") : jQuery(".header").removeClass("stickynav")
        })
    }), jQuery(document).ready(function() {
        jQuery(document).scrollTop() > 585 ? jQuery(".banner-inner, .banner-portfolio-inner").addClass("parallax-content") : jQuery(".banner-inner, .banner-portfolio-inner").removeClass("parallax-content"), jQuery(window).scroll(function() {
            jQuery(document).scrollTop() > 585 ? jQuery(".banner-inner, .banner-portfolio-inner ").addClass("parallax-content") : jQuery(".banner-inner, .banner-portfolio-inner").removeClass("parallax-content")
        })
    }), jQuery(document).ready(function() {
        jQuery("#imgli_0").addClass("active");
        var e = jQuery(".cloud_services_block"),
            i = (e.position(), jQuery(document).outerHeight() - jQuery(".footer").outerHeight() - jQuery(".project-strip").outerHeight() - jQuery(".whitepaper").outerHeight() - jQuery(".footer-fourm").outerHeight() - e.outerHeight() - 160);
        jQuery(window).scroll(function() {
            var n = jQuery(window).scrollTop();
            n >= 0 && i > n ? (e.attr("style", ""), e.addClass("stick")) : n >= i ? (e.removeClass("stick"), e.css({
                position: "absolute",
                top: i + 100 + "px"
            })) : e.removeClass("stick")
        }), jQuery(".cloud_services_block .collapse-button").click(function() {
            jQuery(".cloud_services_block .showhide").slideToggle()
        })
    }), jQuery(window).resize(function() {
        var e = jQuery(window).width();
        e > 959 ? jQuery(".cloud_services_block .showhide").css("display", "block") : jQuery(".cloud_services_block .showhide").css("display", "none")
    }),
    function() {
        var e = "017683895373828777090:bhkgrxba3sq",
            i = document.createElement("script");
        i.type = "text/javascript", i.async = !0, i.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.google.com/cse/cse.js?cx=" + e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(i, n)
    }(), jQuery(document).ready(function() {
        "undefined" != typeof orderpgvar && 1 != orderpgvar && (equal_height(), jQuery(window).resize(function() {
            equal_height()
        }))
    }), jQuery(document).ready(function(e) {
        function n() {
            s(e(".cd-headline.letters").find("b")), t(e(".cd-headline"))
        }

        function s(n) {
            n.each(function() {
                var n = e(this),
                    s = n.text().split(""),
                    t = n.hasClass("is-visible");
                for (i in s) n.parents(".rotate-2").length > 0 && (s[i] = "<em>" + s[i] + "</em>"), s[i] = t ? '<i class="in">' + s[i] + "</i>" : "<i>" + s[i] + "</i>";
                var r = s.join("");
                n.html(r).css("opacity", 1)
            })
        }

        function t(i) {
            var n = c;
            i.each(function() {
                var i = e(this);
                if (i.hasClass("loading-bar")) n = d, setTimeout(function() {
                    i.find(".cd-words-wrapper").addClass("is-loading")
                }, u);
                else if (i.hasClass("clip")) {
                    var s = i.find(".cd-words-wrapper"),
                        t = s.width() + 10;
                    s.css("width", t)
                } else if (!i.hasClass("type")) {
                    var a = i.find(".cd-words-wrapper b"),
                        o = 0;
                    a.each(function() {
                        var i = e(this).width();
                        i > o && (o = i)
                    }), i.find(".cd-words-wrapper").css("width", o)
                }
                setTimeout(function() {
                    r(i.find(".is-visible").eq(0))
                }, n)
            })
        }

        function r(e) {
            var i = o(e);
            if (e.parents(".cd-headline").hasClass("type")) {
                var n = e.parent(".cd-words-wrapper");
                n.addClass("selected").removeClass("waiting"), setTimeout(function() {
                    n.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                }, f), setTimeout(function() {
                    a(i, p)
                }, y)
            } else if (e.parents(".cd-headline").hasClass("letters")) {
                var s = e.children("i").length >= i.children("i").length ? !0 : !1;
                hideLetter(e.find("i").eq(0), e, s, h), showLetter(i.find("i").eq(0), i, s, h)
            } else e.parents(".cd-headline").hasClass("clip") ? e.parents(".cd-words-wrapper").animate({
                width: "2px"
            }, w, function() {
                l(e, i), a(i)
            }) : e.parents(".cd-headline").hasClass("loading-bar") ? (e.parents(".cd-words-wrapper").removeClass("is-loading"), l(e, i), setTimeout(function() {
                r(i)
            }, d), setTimeout(function() {
                e.parents(".cd-words-wrapper").addClass("is-loading")
            }, u)) : (l(e, i), setTimeout(function() {
                r(i)
            }, c))
        }

        function a(e, i) {
            e.parents(".cd-headline").hasClass("type") ? (showLetter(e.find("i").eq(0), e, !1, i), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                width: e.width() + 10
            }, w, function() {
                setTimeout(function() {
                    r(e)
                }, m)
            })
        }

        function o(e) {
            return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
        }

        function l(e, i) {
            e.removeClass("is-visible").addClass("is-hidden"), i.removeClass("is-hidden").addClass("is-visible")
        }
        var c = 2500,
            d = 3800,
            u = d - 3e3,
            h = 50,
            p = 150,
            f = 500,
            y = f + 800,
            w = 600,
            m = 1500;
        n()
    });