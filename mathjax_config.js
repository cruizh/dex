window.MathJax = {
    loader: {load: ['[tex]/physics']},
    tex: {
        packages: {'[+]': ['physics']},
        macros: {
            ev: ['\\operatorname{\\mathbb{E}}\\left[#1\\right]', 1],
            var: ['\\operatorname{var}\\left(#1\\right)', 1],
            cov: ['\\operatorname{cov}\\left(#1,\\, #2\\right)', 2],
            Normal: ['\\operatorname{N}_{#1}\\left(#2,\\,#3\\right)', 3, ""],
            qnorm: ['Z_{#1}', 1],
            chisq: ['\\chi^{2}_{#1}', 1],
            chisqNC: ['\\chi^{2}_{#1,\\,#2}', 2],
            FSnedecor: ['\\operatorname{\\mathcal{F}}_{#1,\\,#2}', 2],
            FSnedecorNC: ['\\operatorname{\\mathcal{F}}_{#1,\\,#2,\\,#3}', 3],
            qF: ['\\operatorname{\\mathcal{F}}_{#2,\\,#3,\\,#1}', 3, '1-\\alpha'],
            coloneqq: ':=',
        }
    }
};
