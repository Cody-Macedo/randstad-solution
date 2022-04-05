import React from 'react';
import youtube from "./assets/svg/default/youtube-filled.svg"
import linkedin from "./assets/svg/default/linkedin-filled.svg"
import instagram from "./assets/svg/default/instagram-filled.svg"
import twitter from "./assets/svg/default/twitter-filled.svg"
import facebook from "./assets/svg/default/facebook-filled.svg"
import chevronDown from "./assets/svg/default/chevron-down.svg"


const Footer = () => {
    return (
        <div>
            <div className="bg-variant-brand-secondary">
                <footer className="footer">
                    <div className="footer__wrapper wrapper">
                        <div className="footer__grid divider">
                            <div className="footer__column">
                                <ul className="extensive-link-list">
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									job seeker
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>
									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">find a job</a>
                                                </li>
                                                <li>
                                                    <a href="#">areas of expertise</a>
                                                </li>
                                                <li>
                                                    <a href="#">view all jobs</a>
                                                </li>
                                                <li>
                                                    <a href="#">accountancy and finance</a>
                                                </li>
                                                <li>
                                                    <a href="#">construction &amp; property</a>
                                                </li>
                                                <li>
                                                    <a href="#">education</a>
                                                </li>
                                                <li>
                                                    <a href="#">engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#">IT</a>
                                                </li>
                                                <li>
                                                    <a href="#">recruitment</a>
                                                </li>
                                                <li>
                                                    <a href="#">sales</a>
                                                </li>
                                                <li>
                                                    <a href="#">secretarial &amp; admin</a>
                                                </li>
                                                <li>
                                                    <a href="#">social care</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									our solutions
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>
									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">temporary</a>
                                                </li>
                                                <li>
                                                    <a href="#">permanent</a>
                                                </li>
                                                <li>
                                                    <a href="#">MSP</a>
                                                </li>
                                                <li>
                                                    <a href="#">RSP</a>
                                                </li>
                                                <li>
                                                    <a href="#">onsite</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <ul className="extensive-link-list">
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									employers
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>
									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">financial services</a>
                                                </li>
                                                <li>
                                                    <a href="#">education</a>
                                                </li>
                                                <li>
                                                    <a href="#">engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#">health</a>
                                                </li>
                                                <li>
                                                    <a href="#">IT</a>
                                                </li>
                                                <li>
                                                    <a href="#">employers</a>
                                                </li>
                                                <li>
                                                    <a href="#">business support</a>
                                                </li>
                                                <li>
                                                    <a href="#">sales</a>
                                                </li>
                                                <li>
                                                    <a href="#">social care</a>
                                                </li>
                                                <li>
                                                    <a href="#">property</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									our solutions
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>
									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">temporary</a>
                                                </li>
                                                <li>
                                                    <a href="#">permanent</a>
                                                </li>
                                                <li>
                                                    <a href="#">MSP</a>
                                                </li>
                                                <li>
                                                    <a href="#">career hub</a>
                                                </li>
                                                <li>
                                                    <a href="#">resource club</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <ul className="extensive-link-list">
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									workforce 360
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>

									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">education</a>
                                                </li>
                                                <li>
                                                    <a href="#">view all jobs</a>
                                                </li>
                                                <li>
                                                    <a href="#">health</a>
                                                </li>
                                                <li>
                                                    <a href="#">financial services</a>
                                                </li>
                                                <li>
                                                    <a href="#">IT</a>
                                                </li>
                                                <li>
                                                    <a href="#">sales</a>
                                                </li>
                                                <li>
                                                    <a href="#">property</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									temp worker benefits and policies
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>
									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">business support</a>
                                                </li>
                                                <li>
                                                    <a href="#">MSP</a>
                                                </li>
                                                <li>
                                                    <a href="#">engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#">inhouse services</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <ul className="extensive-link-list">
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									jobs at Randstad
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>
									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">education</a>
                                                </li>
                                                <li>
                                                    <a href="#">view all jobs</a>
                                                </li>
                                                <li>
                                                    <a href="#">health</a>
                                                </li>
                                                <li>
                                                    <a href="#">financial services</a>
                                                </li>
                                                <li>
                                                    <a href="#">IT</a>
                                                </li>
                                                <li>
                                                    <a href="#">sales</a>
                                                </li>
                                                <li>
                                                    <a href="#">property</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="extensive-link-list__item divider">
                                        <div className="collapsible__trigger" data-rs-collapsible="" role="button"
                                             aria-expanded="false" data-rs-toggable="">
								<span className="extensive-link-list__list-title">
									worker benefits and policies
									<span className="hidden--from-l toggle-arrow icon">
										<img src={chevronDown} alt="chevron-down"/>

									</span>
								</span>
                                        </div>
                                        <div className="collapsible__content" data-rs-collapsible-content=""
                                             aria-hidden="true">
                                            <ul>
                                                <li>
                                                    <a href="#">business support</a>
                                                </li>
                                                <li>
                                                    <a href="#">MSP</a>
                                                </li>
                                                <li>
                                                    <a href="#">engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#">inhouse services</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__grid">
                            <div className="footer__bottom-nav">
                                <ul>
                                    <li>
                                        <a href="#">terms &amp; conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">contact us</a>
                                    </li>
                                    <li>
                                        <a href="#">cookies</a>
                                    </li>
                                    <li>
                                        <a href="#">misconduct reporting procedure</a>
                                    </li>
                                    <li>
                                        <a href="#">privacy notice</a>
                                    </li>
                                    <li>
                                        <a href="#">intellectual property</a>
                                    </li>
                                    <li>
                                        <a href="#">sitemap</a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="social__list ">
                                <li className="social__item">
                                    <a className="social__link" href="#" title="LinkedIn" target="_blank"
                                       rel="noopener noreferrer">
							<span className="icon icon--inline icon--hover icon--l">
										<img src={linkedin} alt="linkedin"/>
							</span>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link" href="#" title="Twitter" target="_blank"
                                       rel="noopener noreferrer">
							<span className="icon icon--inline icon--hover icon--l">
										<img src={twitter} alt="twitter"/>

							</span>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link" href="#" title="Facebook" target="_blank"
                                       rel="noopener noreferrer">
							<span className="icon icon--inline icon--hover icon--l">
										<img src={facebook} alt="facebook"/>

							</span>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link" href="#" title="YouTube" target="_blank"
                                       rel="noopener noreferrer">
							<span className="icon icon--inline icon--hover icon--l">
										<img src={youtube} alt="youtube"/>

							</span>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link" href="#" title="Instagram" target="_blank"
                                       rel="noopener noreferrer">
							<span className="icon icon--inline icon--hover icon--l">
										<img src={instagram} alt="instagram"/>

							</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="footer__info">
                                <p className="text--s text--alternative">
                                    © Randstad N.V. 2019 Randstad Solutions Limited, is a limited company registered in
                                    England and Wales with registered number 02389033. Our registered office is at 450
                                    Capability Green. Luton, Bedfordshire, LU1 3LU. RANDSTAD, Randstad N.V. 2019
                                    Randstad Solutions Limited, is a limited company registered in England and Wales
                                    with registered number 02389033. Our registered office is at 450 Capability Green.
                                    Luton, Bedfordshire, LU1 3LU. RANDSTAD,
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="10">
                                        <title>randstad</title>
                                        <path
                                            d="M7.735 3.89c0-.922-.703-1.625-1.624-1.625H0V0h5.587c.311 0 .592.123.792.328l3.293 3.293c.205.2.328.482.328.792V10H7.735V3.89zm5.53 0V10H11V4.413c0-.312.123-.592.329-.792L14.62.328c.2-.205.48-.328.792-.328H21v2.265h-6.11c-.922 0-1.625.703-1.625 1.624z"></path>
                                    </svg>
                                    HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of Randstad
                                    N.V.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;
