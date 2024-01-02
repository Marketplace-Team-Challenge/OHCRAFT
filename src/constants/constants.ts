import { SizeTypeI } from "../components/Button/Button";

export const FAQList = [ {
    question: "Чи повинен я вносити дані моєї банківської карти при реєстрації?",
    answer: "Так, ви повинні вносити дані своєї банківської карти для реєстрації на нашому веб-сайті.",
},
{
    question: "Як я можу придбати товар?",
    answer: "",
},
{
    question: "Чи можу я повернути товар?",
    answer: "",
},
{
    question: "Як проходить оплата товару?",
    answer: "",
}
];

export const FAQAltText = "FAQ photo";

export const ButtonText = {
    FAQ: "Більше відповідей",
}


export const ButtonFAQSizes: Map<string, SizeTypeI> = new Map([
    ["mobile", {
        width: "255px",
        height: "59px",
    }],
    ["tabletDesktop",{
        width: "410px",
        height: "71px"
    }]
   ]);