const names = ['Code Wizard', 'Fullstack Developer', 'Python Enjoyer'];

const split = new SplitText('h2', {type: 'chars,words,lines'})
const tl = gsap.timeline({repeat: -1});

// let idx = 200;

// split.chars.forEach(charDiv => {

//     setTimeout(() => {
//         charDiv.classList.add('letter')
//     }, idx);

//     idx += 100;

// })

tl

    .to(split.chars, {

        keyframes: {
            
            '0%': {y: 0},
            '50%': {y: -20},
            '100%': {y: 0},
            ease: 'power2'

        },
        stagger: 0.1

    })
