import React from 'react';
import heart from "./assets/svg/default/heart.svg"
import person from "./assets/svg/default/person.svg"
import chevronDown from "./assets/svg/default/chevron-down.svg"
import globe from "./assets/svg/default/globe.svg"
import logo from "./assets/svg/logo.svg"

const Navigation = () => {
    return (
        <div>
            <div className="navigation ">
                <div className="wrapper navigation__wrapper">
                    <div className="navigation__top">

                        <a className="logo" href="/">
                            <img src={logo} alt="logo"/>
                        </a>

                        <ul className="navigation__menu navigation__menu--main hidden--until-l">
                            <li className="navigation__menu-item navigation__menu-item--active">
                                job seeker
                            </li>

                            <li className="navigation__menu-item">
                                <a href="#">employers</a>
                            </li>

                            <li className="navigation__menu-item">
                                <a href="#">about us</a>
                            </li>


                            <li className="navigation__menu-item">
                                <a href="#">career advice</a>
                            </li>


                            <li className="navigation__menu-item">
                                <a href="#">join our team</a>
                            </li>


                            <li className="navigation__menu-item">
                                <a href="#">workforce 360</a>
                            </li>


                        </ul>


                        <ul className="navigation__service">


                            <li className="navigation__service-item">
                                <a href="#" className="navigation__service-link" aria-label="">
								<span className="icon icon--inline">
                                            <img src={heart} alt="heart"/>
								</span>
                                    <span className="favorites__counter hidden--until-l" id="maxCounter">0</span>
                                </a>
                            </li>
                            <li className="navigation__service-item">
                                <a href="#" className="navigation__service-link navigation__service-my-randstad"
                                   aria-label="" data-rs-popover-trigger="loggedOut">
								<span className="icon icon--inline">

                                            <img src={person} alt="person"/>

								</span>
                                    <span className="icon icon--xs icon--inline hidden--from-l">

                                            <img src={chevronDown} alt="chevronDown"/>

								</span>
                                    <span className="hidden--until-l">my randstad</span>
                                </a>
                            </li>

                            <li className="navigation__service-item hidden--until-l">
                                <a className="language__dropdown navigation__service-link" aria-label="">
										<span className="icon icon--language">
                                                <img src={globe} alt="globe"/>
										</span>
                                    <select>

                                        <option> EN</option>

                                        <option> DE</option>

                                        <option> FR</option>

                                        <option> ES</option>

                                    </select>
                                    <span className="icon select--status">
                                            <img src={chevronDown} alt="chevronDown"/>

										</span>
                                </a>
                            </li>


                            <li className="navigation__service-item hidden--from-l">
                                <button className="button--icon-only button--hamburger" data-rs-navigation-menu-icon=""
                                        aria-label="">
                                    <span className="icon icon--hamburger"></span>
                                </button>
                            </li>
                        </ul>


                        <div className="navigation__link-bar hidden--until-l">
                            <ul className="top-link">

                                <li className="top-link__item">
                                    <a href="#"> press </a>
                                </li>

                                <li className="top-link__item">
                                    <a href="#"> contact us </a>
                                </li>

                            </ul>
                        </div>


                        <div className="popover  bg-variant-brand-tertiary" data-rs-popover="loggedOut"
                             aria-hidden="true" role="dialog">
                            <div className="popover__dialog">
                                <div className="popover__title">start your <span
                                    className="text--emphasis">jobhunt</span></div>
                                <div className="body-copy">
                                    <ul className="list--checks">
                                        <li>register in 1 minute</li>
                                        <li>apply faster to jobs</li>
                                        <li>have better matching jobs</li>
                                    </ul>
                                </div>
                                <div className="popover__action">
                                    <a href="#" className="button button--filled button--full-width">register for
                                        free</a>
                                    <a href="#" className="button button--full-width">log in to my randstad</a>
                                </div>
                            </div>
                        </div>


                    </div>


                    <ul className="navigation__menu navigation__menu--sub hidden--until-l">


                        <li className="navigation__menu-item navigation__menu-item--active">
                            request a call back
                        </li>


                        <li className="navigation__menu-item">
                            <a href="#">submit a request</a>
                        </li>


                        <li className="navigation__menu-item">
                            <a href="#">areas of expertise</a>
                        </li>


                        <li className="navigation__menu-item">
                            <a href="#">our solutions</a>
                        </li>


                        <li className="navigation__menu-item">
                            <a href="#">our offices</a>
                        </li>


                        <li className="navigation__menu-item">
                            <a href="#">workforce insights</a>
                        </li>


                    </ul>


                    <div className="navigation__bottom">
                        <nav className="breadcrumb" aria-label="breadcrumb">
                            <a href="#" className="breadcrumb__link hidden--from-l">one level higher </a>
                            <ul className="breadcrumb__list hidden--until-l">
                                <li className="breadcrumb__item">
                                    <a href="#" className="breadcrumb__link">home</a>
                                </li>
                                <li className="breadcrumb__item">
                                    <a href="#" className="breadcrumb__link">job seeker</a>
                                </li>
                                <li className="breadcrumb__item">find a job</li>
                            </ul>
                        </nav>

                        <nav className="language__dropdown hidden--from-l" aria-label="">
								<span className="icon icon--language">
                                            <img src={globe} alt="globe"/>

								</span>
                            <select>

                                <option> EN</option>

                                <option> DE</option>

                                <option> FR</option>

                                <option> ES</option>

                            </select>
                            <span className="icon select--status">
                                            <img src={chevronDown} alt="chevronDown"/>

								</span>
                        </nav>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navigation;
