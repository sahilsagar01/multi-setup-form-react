// describes best
import Accountant from "./assets/describesBest/Accountant.png";
import Grades from "./assets/describesBest/Grades-cuate.png";
import Grandma from "./assets/describesBest/Grandma-pana.png";
import parents from "./assets/describesBest/Parents-rafiki.png";
import professor from "./assets/describesBest/Professor-pana.png";
import Question from "./assets/describesBest/Questions-pana.png";

// interested in 

import Around from "./assets/interstedIn/Around-the-world-pana.png";
import Calculator from "./assets/interstedIn/Calculator-rafiki.png";
import Curious from "./assets/interstedIn/Curious-bro.png";
import Next from "./assets/interstedIn/Next-steps-pana.png";
import Shared from "./assets/interstedIn/Shared-goals-amico.png";

// math 

import arithmetic from './assets/math/arithmetic.png'
import basicAlz from './assets/math/basicAlz.png'
import calculus from './assets/math/calculus.png'
import interAlz from './assets/math/interAlz.png'


// result 

import thinking from "./assets/thinking.png"




const describesBest = [
    {
        img:  Grades,
        text: "Student",
        des: "or soon to be enrolled"
    },
    {
        img: Accountant,
        text: "Professional ",
        des: "pursuing a career"
    },
    {
        img: parents,
        text: "Parent",
        des: " of a school-age child"
    },
    {
        img: Grandma,
        text: "Lifelong learner",
        des: ""
    },
    {
        img: professor,
        text: "Teacher",
        des: ""
    },
    {
        img: Question,
        text: "Other",
        des: ""
    },
]
const interestedIn = [
    {
        img: Next,
        text: "Learning specific skills to advance my career"
    },
    {
        img:  Around,
        text: "Explore new topics i'm interested in"
    },
    {
        img: Calculator,
        text: "Refresing my math foundations"
    },
    {
        img: Shared,
        text: "Exercising my brain to stay sharp"
    },
    {
        img: Curious,
        text: "Somthing else"
    },
]

const math = [
    {
        img: arithmetic,
        head: "Arithmetic",
        foot: "Introductory"
    },
    {
        img: basicAlz,
        head: "Basic Alzebra",
        foot: "Foundational"
    },
    {
        img: interAlz,
        head: "Intermediat Alzebra",
        foot: "Intermediat"
    },
    {
        img: calculus,
        head: "Calculus",
        foot: "Advanced"
    },
]

const result = [
    {
        img: thinking,
        head: "Foundational Math",
        dis: "Built your foundational skills in algebra, geometri, and probability.",
        popular: true
    },
    {
        img: thinking,
        head: "Mathematical Thinking",
        dis: "Built your foundational skills in algebra, geometri, and probability.",
        popular: true
    },
    {
        img: thinking,
        head: "Mathematical Mind",
        dis: "Mastering algebraic manipulation techniques empowers students to simplify expressions.",
        popular: false
    },
]

export {
    describesBest,
    interestedIn,
    math,
    result
}