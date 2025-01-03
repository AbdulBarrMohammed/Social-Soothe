import home from '../assets/home.svg'
import wind from '../assets/tailwind.svg'
import journal from '../assets/journal.svg'
import tree from '../assets/tree-outline.svg'
import heart from '../assets/heart.svg'
import award from '../assets/trophy-award.svg'

export const pageDataLoggedIn = [
    {
        name: "Dashboard",
        path: "/dashboard",
        img: home
    },
    {
        name: "Breathe exercise",
        path: "/breatheIntro",
        img: wind
    },
    {
        name: "Journals",
        path: "/journals",
        img: journal
    },
    {
        name: "Social Tree",
        path: "/socialTree",
        img: tree
    },
    {
        name: "Daily Affirmation",
        path: "/affirmations",
        img: heart
    },
    {
        name: "Prizes",
        path: "/awards/Sounds",
        img: award
    },

]

export const pageDataLeft = [
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Privacy Policy",
        path: "/privacyPolicy"
    },

]


export const pageDataRight = [
    {
        name: "Log in",
        path: "/logIn"
    },
    {
        name: "Sign up",
        path: "/signUp"
    },


]
