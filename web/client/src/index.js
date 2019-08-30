import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignInPage from "views/SignInPage/SignInPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import SignInOrganizerPage from "views/SignInOrganizer/SignInOrganizer.jsx";
import SignupPage2 from "views/SignupPage/SignupPage2.jsx";

import ErrorPage from "views/ErrorPage/ErrorPage.jsx";
import ForgotPasswordPage from "views/ForgotPasswordPage/ForgotPasswordPage.jsx";
import ForgotPasswordPage2 from "views/ForgotPasswordPage/ForgotPasswordPage2.jsx";
import TournamentPage from "views/TournamentPage/TournamentPage.jsx";
import PlayerPage from "views/PlayerPage/PlayerPage.jsx";
import TournamentDetails from "views/TournamentDetails/TournamentDetails.jsx";
import TournamentRegistration from "views/TournamentRegistration/TournamentRegistration.jsx";
import PaymentScreen from "views/TournamentRegistration/PaymentScreen.jsx";
import PlayerProfile from "views/PlayerProfilePage/PlayerProfilePage.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import OrganizerMainPage from "views/OrganizerMainPage/OrganizerMainPage.jsx";
import OrganizerViewTournamentPage from "views/OrganizerViewTournamentPage/OrganizerViewTournamentPage.jsx";
import PlayerListPage from "views/PlayerListPage/PlayerListPage";
import TournamentBrackets from "views/TournamentBrackets/TournamentBrackets";

import store from "store";
import { Provider } from "react-redux";
import { listenAuth } from "./store/actions";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

var hist = createBrowserHistory();
// store.dispatch(listenAuth())
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      
      <Route path="/error-page" component={ErrorPage} /> */}
        <Route path="/components" component={ComponentsPage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/signin-page" component={SignInPage} />
        <Route path="/signinorganizer-page" component={SignInOrganizerPage} />
        <Route path="/signup-page" component={SignupPage} />
        <Route path="/signup-page2" component={SignupPage2} />
        <Route path="/forgotpassword-page" component={ForgotPasswordPage} />
        <Route path="/forgotpassword-page2" component={ForgotPasswordPage2} />
        <Route path="/tournament-page" component={TournamentPage} />
        <Route path="/player-page" component={PlayerPage} />
        <Route path="/tournamentdetails-page/:id" component={TournamentDetails} />
        <Route 
          path="/tournamentregistration-page"
          component={TournamentRegistration}
        />
        <Route path="/payment-page" component={PaymentScreen} />
        <Route path="/playerprofile-page" component={PlayerProfile} />
        <Route path="/userprofile-page" component={UserProfile} />
        <Route path="/organizermain-page" component={OrganizerMainPage} />
        <Route path="/organizerviewtournament-page/:id" component={OrganizerViewTournamentPage} />
        <Route path="/playerlist-page" component={PlayerListPage} />
        <Route path="/tournamentbrackets-page" component={TournamentBrackets} />
        <Route path="/" component={PresentationPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
