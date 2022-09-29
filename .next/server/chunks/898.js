"use strict";
exports.id = 898;
exports.ids = [898];
exports.modules = {

/***/ 7563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i4": () => (/* reexport */ ALICE),
  "xv": () => (/* reexport */ assets_close),
  "j6": () => (/* reexport */ dropdown)
});

;// CONCATENATED MODULE: ./assets/ALICE.svg
/* harmony default export */ const ALICE = ({"src":"/_next/static/media/ALICE.2f9c6063.svg","height":30,"width":113});
;// CONCATENATED MODULE: ./assets/dropdown.svg
/* harmony default export */ const dropdown = ({"src":"/_next/static/media/dropdown.82d33312.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./assets/close.svg
/* harmony default export */ const assets_close = ({"src":"/_next/static/media/close.bc586dd8.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./assets/index.js






/***/ }),

/***/ 4129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_EmailForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/InputField.jsx

const InputField = (props)=>{
    const { handleChange , label , name , type , value , placeholder  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "",
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "",
                type: type,
                onChange: handleChange,
                value: value,
                name: name,
                placeholder: placeholder,
                required: true
            })
        ]
    });
};
/* harmony default export */ const components_InputField = (InputField);

// EXTERNAL MODULE: external "@emailjs/browser"
var browser_ = __webpack_require__(7163);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_);
// EXTERNAL MODULE: ./assets/index.js + 3 modules
var assets = __webpack_require__(7563);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/EmailForm.jsx






const EmailForm = (props)=>{
    const { 0: values , 1: setValues  } = (0,external_react_.useState)({
        fullName: "",
        email: ""
    });
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        browser_default().send("service_b5u331l", "template_4rolrge", values, "muinY_WppOTlc3R1T").then((response)=>{
            console.log("SUCCESS!", response);
            setValues({
                fullName: "",
                email: ""
            });
            setStatus("SUCCESS");
        }, (error)=>{
            console.log("FAILED...", error);
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (status === "SUCCESS") {
            setTimeout(()=>{
                setStatus("");
            }, 3000);
        }
    }, [
        status
    ]);
    const handleChange = (e)=>{
        setValues((values)=>({
                ...values,
                [e.target.name]: e.target.value
            }));
    };
    return props.trigger ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "popup",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "popup-wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "close-tag",
                    onClick: ()=>props.setTrigger(false),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: assets/* close */.xv,
                        alt: "icone pour fermer l'onglet"
                    })
                }),
                status && renderAlert(),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "bold-title",
                            children: "Recevez notre e-book gratuitement !"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Entrez votre adresse mail et recevez notre e-book exclusif par mail"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_InputField, {
                            value: values.fullName,
                            handleChange: handleChange,
                            name: "fullName",
                            type: "text",
                            placeholder: "Votre nom"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_InputField, {
                            value: values.email,
                            handleChange: handleChange,
                            name: "email",
                            type: "email",
                            placeholder: "Votre adresse mail"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "",
                            children: "Envoyer"
                        }),
                        props.children
                    ]
                })
            ]
        })
    }) : "";
};
const renderAlert = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "success-msg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Merci ! Votre demande a bien \xe9t\xe9 prise en compte."
        })
    });
/* harmony default export */ const components_EmailForm = (EmailForm);


/***/ }),

/***/ 5898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d2": () => (/* reexport */ components_Article),
  "$_": () => (/* reexport */ components_Footer),
  "yo": () => (/* reexport */ components_HeroBanner),
  "wp": () => (/* reexport */ components_Navbar)
});

// UNUSED EXPORTS: EmailForm

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(786);
;// CONCATENATED MODULE: ./components/Article.jsx





const Article = ({ article: { slug , image1 , preview , tags , lecture , titre  }  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-206ebf0c021e6355" + " " + "article-bordel",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/formation/${slug.current}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-206ebf0c021e6355" + " " + "formation-article-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                backgroundImage: `url(${(0,client/* urlFor */.u)(image1)})`
                            },
                            className: "jsx-206ebf0c021e6355" + " " + "formation-article-img"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-206ebf0c021e6355" + " " + "formation-article",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-206ebf0c021e6355" + " " + "display-flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "jsx-206ebf0c021e6355" + " " + "tag",
                                            children: tags
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "jsx-206ebf0c021e6355" + " " + "lecture",
                                            children: lecture
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-206ebf0c021e6355" + " " + "formation-article-container",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "jsx-206ebf0c021e6355" + " " + "bold-title",
                                            children: titre
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "jsx-206ebf0c021e6355",
                                            children: preview
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "206ebf0c021e6355",
                children: ".formation-article-img.jsx-206ebf0c021e6355{background-position:center;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;height:38vh;width:35vw;min-width:160px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.formation-article-img.jsx-206ebf0c021e6355 img.jsx-206ebf0c021e6355{-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;height:220px}.formation-article.jsx-206ebf0c021e6355{margin-left:1rem}.formation-article-wrapper.jsx-206ebf0c021e6355{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:2rem;padding:.8rem}.display-flex.jsx-206ebf0c021e6355{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.tag.jsx-206ebf0c021e6355{margin-right:.5rem;padding:.3rem .8rem;background:var(--tag-color);color:var(--white);font-size:14px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.lecture.jsx-206ebf0c021e6355{font-size:14px;opacity:75%}"
            })
        ]
    });
};
/* harmony default export */ const components_Article = (Article);

;// CONCATENATED MODULE: ./components/HeroBanner.jsx



const HeroBanner = ({ heroBanner , styles  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-88a556b8a20818d5" + " " + "formation__banner",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-88a556b8a20818d5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "jsx-88a556b8a20818d5" + " " + "formation_banner_subtitle",
                        children: "Les formations"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "jsx-88a556b8a20818d5" + " " + "bold-title",
                        children: heroBanner.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-88a556b8a20818d5" + " " + "display-flex",
                        children: [
                            "Business en ligne",
                            "R\xe9seaux sociaux",
                            "Productivit\xe9",
                            "Remote",
                            "Manuel"
                        ].map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-88a556b8a20818d5" + " " + "tag",
                                children: item
                            }, index))
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "88a556b8a20818d5",
                children: ".formation__banner.jsx-88a556b8a20818d5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-top:4rem}.formation_banner_subtitle.jsx-88a556b8a20818d5{font-weight:500;opacity:80%}.display-flex.jsx-88a556b8a20818d5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:1.5rem 0 3.5rem 0}.tag.jsx-88a556b8a20818d5{margin:.3rem .3rem;padding:.3rem .5rem;background:var(--tag-color);color:var(--white);font-size:14px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;min-width:115px}"
            })
        ]
    });
};
/* harmony default export */ const components_HeroBanner = (HeroBanner);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./assets/index.js + 3 modules
var assets = __webpack_require__(7563);
// EXTERNAL MODULE: ./components/EmailForm.jsx + 1 modules
var EmailForm = __webpack_require__(4129);
;// CONCATENATED MODULE: ./components/Navbar.jsx







const Navbar = ()=>{
    const { 0: buttonPopup , 1: setButtonPopup  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(EmailForm/* default */.Z, {
                trigger: buttonPopup,
                setTrigger: setButtonPopup
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "app__navbar",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "small-navbar dropdown",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: ".dropbtn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: assets/* dropdown */.j6,
                                    alt: "icone de navigation"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "small-navlinks",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "dropdown-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Accueil"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/a-propos",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "\xc0 propos"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/formation",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Formations"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/parcours",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Mon parcours"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "app__navbar-logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: assets/* alice */.i4,
                                height: "20px",
                                alt: "Logo 'Alice"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "app__navbar-links",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Accueil"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/a-propos",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "\xc0 propos"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/formation",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Formations"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/parcours",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Mon parcours"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setButtonPopup(true),
                            children: "E-book"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            children: [
                "@2022. Tout droits r\xe9serv\xe9s. Mentions l\xe9gales ",
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/mentions",
                    children: "ici"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/index.js







/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId: "xxwr3ajv",
    dataset: "production",
    apiVersion: "2022-03-10",
    useCdn: true,
    token: process.env.SANITY_TOKEN
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = (source)=>builder.image(source);


/***/ })

};
;