import React from 'react';
import marker from "./assets/svg/default/marker.svg";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header/>
            {/*<div className="grid grid-cols-1 m:grid-cols-3 mb-l">*/
            }
            {/*    <div className="bg-brand-secondary rounded text-white text-center p-s">*/
            }
            {/*        <a href="#" className="button button--m">button</a>*/
            }
            {/*    </div>*/
            }
            {/*    <div className="bg-brand-primary rounded text-white text-center p-s">2</div>*/
            }
            {/*    <div className="bg-brand-primary rounded text-white text-center p-s">3</div>*/
            }

            {/*</div>*/
            }
            {/*<div>*/
            }
            {/*    <div className="block">*/
            }
            {/*        <div className="block__wrapper wrapper">*/
            }
            {/*            <div className="block__content">*/
            }
            {/*                <ul className="list-items">*/
            }
            {/*                    <li className="list-item divider">*/
            }
            {/*                        <div className="list-item__info">*/
            }
            {/*                            <div className="list-item__title">*/
            }
            {/*                                <h2 className="list-item__header">*/
            }
            {/*                                    <a href="#" className="list-item__link">amsterdam, vijzelstraat</a>*/
            }
            {/*                                </h2>*/
            }
            {/*                                <div className="distance-pin">*/
            }
            {/*					<span className="icon icon--inline icon--informative">*/
            }
            {/*						<img src={marker} alt=""/>*/
            }
            {/*					</span>*/
            }
            {/*                                    <span className="text--alternative">&lt; 1 km</span>*/
            }
            {/*                                </div>*/
            }
            {/*                            </div>*/
            }
            {/*                            <ul className="list-item__meta">*/
            }
            {/*                                <li>Vijzelstraat 78</li>*/
            }
            {/*                                <li>1017HL Amsterdam</li>*/
            }
            {/*                                <li>*/
            }
            {/*                                    <a href="tel:+31205208800">+31 (020) 52 08 800</a>*/
            }
            {/*                                </li>*/
            }
            {/*                            </ul>*/
            }
            {/*                            <div className="list-item__description text--alternative">*/
            }
            {/*                                <ul>*/
            }
            {/*                                    <li>Manufacturing &amp; Logistics</li>*/
            }
            {/*                                    <li>Office &amp; Administration</li>*/
            }
            {/*                                </ul>*/
            }
            {/*                            </div>*/
            }
            {/*                        </div>*/
            }
            {/*                        <button className="button button--m">more info</button>*/
            }
            {/*                    </li>*/
            }
            {/*                    <li className="list-item divider">*/
            }
            {/*                        <div className="list-item__info">*/
            }
            {/*                            <div className="list-item__title">*/
            }
            {/*                                <h2 className="list-item__header">*/
            }
            {/*                                    <a href="#" className="list-item__link">amsterdam-duivendrecht,*/
            }
            {/*                                        spaklerweg</a>*/
            }
            {/*                                </h2>*/
            }
            {/*                                <div className="distance-pin">*/
            }
            {/*                                    <span className="icon icon--inline icon--informative">*/
            }
            {/*                                        <svg>*/
            }
            {/*                                        <img src={marker} alt=""/>*/
            }
            {/*                                        </svg>*/
            }
            {/*                                    </span>*/
            }
            {/*                                    <span className="text--alternative">10 km</span>*/
            }
            {/*                                </div>*/
            }
            {/*                            </div>*/
            }
            {/*                            <ul className="list-item__meta">*/
            }
            {/*                                <li>Vijzelstraat 78</li>*/
            }
            {/*                                <li>1017HL Amsterdam</li>*/
            }
            {/*                                <li>*/
            }
            {/*                                    <a href="tel:+31205208800">+31 (020) 52 08 800</a>*/
            }
            {/*                                </li>*/
            }
            {/*                            </ul>*/
            }
            {/*                            <div className="list-item__description text--alternative">*/
            }
            {/*                                <ul>*/
            }
            {/*                                    <li>Manufacturing &amp; Logistics</li>*/
            }
            {/*                                    <li>Office &amp; Administration</li>*/
            }
            {/*                                </ul>*/
            }
            {/*                            </div>*/
            }
            {/*                        </div>*/
            }
            {/*                        <button className="button button--m">more info</button>*/
            }
            {/*                    </li>*/
            }
            {/*                </ul>*/
            }
            {/*            </div>*/
            }
            {/*        </div>*/
            }
            {/*    </div>*/
            }
            {/*</div>*/
            }

            <div className="home-redirection">
                <Link to="/app" className="button button--m button--dark-blue">Go to App</Link>
                <Link to="/terminal" className="button button--m button--dark-blue">Go to Terminal</Link>
            </div>


            <Footer/>
        </div>
    )
        ;
};

export default Home;
