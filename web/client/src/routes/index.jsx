import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignInPage from "views/SignInPage/SignInPage.jsx";
import SignInOrganizerPage from "views/SignInOrganizer/SignInOrganizer.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import SignupPage2 from "views/SignupPage/SignupPage2.jsx";
import ForgotPasswordPage from "views/ForgotPasswordPage/ForgotPasswordPage.jsx";
import ForgotPasswordPage2 from "views/ForgotPasswordPage/ForgotPasswordPage2.jsx";
import TournamentPage from "views/TournamentPage/TournamentPage";
import PlayerPage from "views/PlayerPage/PlayerPage.jsx";
import TournamentDetails from "views/TournamentDetails/TournamentDetails.jsx";
import TournamentRegistration from "views/TournamentRegistration/TournamentRegistration.jsx";
import PaymentScreen from "views/TournamentRegistration/PaymentScreen.jsx";
import PlayerProfile from "views/PlayerProfilePage/PlayerProfilePage.jsx";
import UserProfile from "../views/UserProfile/UserProfile";
import OrganizerMainPage from "views/OrganizerMainPage/OrganizerMainPage.jsx";
import OrganizerViewTournamentPage from "views/OrganizerViewTournamentPage/OrganizerViewTournamentPage.jsx";
import PlayerListPage from "views/PlayerListPage/PlayerListPage";
import TournamentBrackets from "views/TournamentBrackets/TournamentBrackets";

var indexRoutes = [
  // { path: "/about-us", name: "AboutUsPage", component: AboutUsPage },
  // { path: "/blog-post", name: "BlogPostPage", component: BlogPostPage },
  // { path: "/blog-posts", name: "BlogPostsPage", component: BlogPostsPage },
   { path: "/components", name: "Components", component: ComponentsPage },
  // { path: "/contact-us", name: "ContactUsPage", component: ContactUsPage },
  // { path: "/ecommerce-page", name: "EcommercePage", component: EcommercePage },
  // { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/signin-page", name: "SigninPage", component: SignInPage },
  { path: "/forgotpassword-page", name: "ForgotPasswordPage", component: ForgotPasswordPage},
  { path: "/forgotpassword-page2", name: "ForgotPasswordPage2", component: ForgotPasswordPage2},
  { path: "/tournament-page", name: "TournamentPage", component: TournamentPage },
  { path: "/player-page", name: "PlayerPage", component: PlayerPage },
  { path: "/tournamentdetails-page/:id", name: "TournamentDetails", component: TournamentDetails },
  { path: "/tournamentregistration-page", name: "TournamentRegistration", component: TournamentRegistration },
  { path: "/payment-page", name: "PaymentScreen", component: PaymentScreen },
  // { path: "/pricing", name: "PricingPage", component: PricingPage },
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  // { path: "/product-page", name: "ProductPage", component: ProductPage },
  // { path: "/sections", name: "SectionsPage", component: SectionsPage },
  // {
  //   path: "/shopping-cart-page",
  //   name: "ShoppingCartPage",
  //   component: ShoppingCartPage
  // },
  { path: "/signup-page", name: "SignupPage", component: SignupPage },
  { path: "/signinorganizer-page", name: "SignInOrganizerPage", component: SignInOrganizerPage },
  { path: "/signup-page2", name: "SignupPage2", component: SignupPage2 },
  { path: "/playerprofile-page", name: "PlayerProfile", component: SignupPlayerProfilePage2 },
  { path: "/userprofile-page", name: "UserProfile", component: UserProfile },
  { path: "/organizermain-page", name: "OrganizerMainPage", component: OrganizerMainPage },
  { path: "/organizerviewtournament-page/:id", name: "OrganizerViewTournamentPage", component: OrganizerViewTournamentPage },
  { path: "/playerlist-page", name: "PlayerListPage", component: PlayerListPage },
  { path: "/tournamentbrackets-page", name: "TournamentBrackets", component: TournamentBrackets },
  { path: "/", name: "PresentationPage", component: PresentationPage }
];

export default indexRoutes;
