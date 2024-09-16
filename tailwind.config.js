module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
        '!./README.md',
    ],
    theme: {
        theme: {
            extend: {},
        },
    },
    plugins: [require('daisyui'),],
    daisyui: {
        themes: ["lofi", "black"],
    },
}