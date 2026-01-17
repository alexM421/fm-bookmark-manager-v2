import { useLocation } from "react-router-dom"
import AuthCard from "../../components/AuthCard/AuthCard"

export default function Auth() {

    const loginCard = <AuthCard 
        title="Log in to your account" 
        description="Welcome back! Please enter your details." 
        textInputs={[
            {
                legend: "Email",
                placeholder: "",
                required: true,
                nameId: "email",
                type: "email",
                minLength: 3,
                maxLength: 255,
                showAsterisk: false,
            },
            {
                legend: "Password",
                placeholder: "",
                required: true,
                nameId: "password",
                type: "password",
                minLength: 8,
                maxLength: 20,
                showAsterisk: false,
            },
        ]} 
        links={[ 
            {
                firstSentence: "Forgot password?",
                secondSentence: "Reset it",
                link: "/reset",
            },
            {
                firstSentence: "Don't have an account?",
                secondSentence: "Sign up",
                link: "/signup",
            } 
        ]} 
        buttonText="Log in"
    />

    const signupCard = <AuthCard 
        title="Create your account" 
        description="Join us and start saving your favorite links — organized, searchable, and always within reach." 
        textInputs={[
            {
                legend: "Full Name",
                placeholder: "",
                required: true,
                nameId: "fullName",
                type: "text",
                minLength: 3,
                maxLength: 255,
                showAsterisk: true,
            },
            {
                legend: "Email address",
                placeholder: "",
                required: true,
                nameId: "email",
                type: "email",
                minLength: 3,
                maxLength: 255,
                showAsterisk: true,
            },
            {
                legend: "Password",
                placeholder: "",
                required: true,
                nameId: "password",
                type: "password",
                minLength: 8,
                maxLength: 20,
                showAsterisk: true,
            },
        ]} 
        links={[ {
            firstSentence: "Already have an account?",
            secondSentence: "Log in",
            link: "/login",
        }]} 
        buttonText="Create account" 
    />

    const resetPasswordCard = <AuthCard 
        title="Forgot your password?" 
        description="Enter your email address below and we’ll send you a link to reset your password."
        textInputs={[
            {
                legend: "Email",
                placeholder: "",
                required: true,
                nameId: "email",
                type: "email",
                minLength: 3,
                maxLength: 255,
                showAsterisk: true,
            },
        ]} 
        links={[{
            firstSentence: "",
            secondSentence: "Back to login",
            link: "/login",
        }]} 
        buttonText="Send reset link" 
    />

    const { pathname } = useLocation()

    if(pathname === "/login") return loginCard;
    if(pathname === "/signup") return signupCard;
    if(pathname === "/reset") return resetPasswordCard;

    return null;
}