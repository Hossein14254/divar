/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.js","styles/input.css","components/**/*.js"],
  theme: {
    extend: {
      colors:{
        "Brown":{
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        }
      },
      boxShadow:{
        "Shadow-norma":" 0px 1px 10px rbga(0,0,0,0.05)",
      },
      borderRadius:{
        "4xl" : "2rem"
      },
      fontFamily :{
        "dana": "Dana",
        "dana-bold": "DanaBold",
        "iransans":"Iransans"
      }
    },
  },
  plugins: [],
}
 
