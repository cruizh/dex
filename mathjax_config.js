window.MathJax = {
    loader: {load: ['[tex]/physics']},
    tex: {
        packages: {'[+]': ['physics']},
        macros: {
            ev: ['\\operatorname{\\mathbb{E}}\\left[#1\\right]', 1],
            var: ['\\operatorname{var}\\left(#1\\right)', 1],
            cov: ['\\operatorname{cov}\\left(#1,\, #2\\right)', 2],
            coloneqq: ':='
        }
    }
};
