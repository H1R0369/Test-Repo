const names = ['Code Wizard', 'Fullstack Developer', 'Python Enjoyer'];

const split = new SplitText('h2', {type: 'chars,words,lines'})
const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5, delay: 1, yoyo: true});

// let idx = 200;

// split.chars.forEach(charDiv => {

//     setTimeout(() => {
//         charDiv.classList.add('letter')
//     }, idx);

//     idx += 100;

// })

split.chars.forEach(char => {

    char.style.opacity = 0;

})

tl

    .to(split.chars, {

        keyframes: {
            
            '0%': {opacity: 0},
            '1%': {opacity: 1},
            
            ease: 'power2'

        },

        stagger: 0.1

    })
