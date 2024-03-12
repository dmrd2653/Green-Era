// Config FileSystem, do not change 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Frontend/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rowdies"', ...defaultTheme.fontFamily.sans], // Use "Rowdies" for the font name
      },
      colors: {
        // Blue color 
        blue: '#13547a',
        // Cyan light
        green: '#80d0c7',
        // Cyan dark
        buttonColor: '#7fffd4',
        // Dark blue
        buttonColorHover: '#13547a',
        // Aqua
        aqua: '#00FFFF',
        // Lime
        lime: '#00FF00',
        // Maroon
        maroon: '#800000',
        // Navy
        navy: '#000080',
        // Hot Pink
        hotPink: '#FF69B4',
        // Yellow Green
        yellowGreen: '#9ACD32',
        // Dark Orchid
        darkOrchid: '#9932CC',
        // Pale Goldenrod
        paleGoldenrod: '#EEE8AA',
        // Cadet Blue
        cadetBlue: '#5F9EA0',
        // Dark Red
        darkRed: '#8B0000',
        // Light Coral
        lightCoral: '#F08080',
        // Medium Slate Blue
        mediumSlateBlue: '#7B68EE',
        // Dark Olive Green
        darkOliveGreen: '#556B2F',
        // Rosy Brown
        rosyBrown: '#BC8F8F',
        // Medium Aquamarine
        mediumAquamarine: '#66CDAA',
        // Sienna
        sienna: '#A0522D',
        // Medium Purple
        mediumPurple: '#9370DB',
        // Dark Orange
        darkOrange: '#FF8C00',
        // Medium Sea Green
        mediumSeaGreen: '#3CB371',
        // Firebrick
        firebrick: '#B22222',
        // Pale Violet Red
        paleVioletRed: '#DB7093',
        // Dark Cyan
        darkCyan: '#008B8B',
        // Medium Orchid
        mediumOrchid: '#BA55D3',
        // Dark Slate Gray
        darkSlateGray: '#2F4F4F',
        // Light Salmon
        lightSalmon: '#FFA07A',
        // Dark Goldenrod
        darkGoldenrod: '#B8860B',
        // Dark Turquoise
        darkTurquoise: '#00CED1',
        // Light Green
        lightGreen: '#90EE90',
        // Indian Red
        indianRed: '#CD5C5C',
        // Medium Violet Red
        mediumVioletRed: '#C71585',
        // Dark Khaki
        darkKhaki: '#BDB76B',
        // Medium Blue
        mediumBlue: '#0000CD',
        // Peru
        peru: '#CD853F',
        // Dark Slate Blue
        darkSlateBlue: '#483D8B',
        // Tomato
        tomato: '#FF6347',
        // Dark Sea Green
        darkSeaGreen: '#8FBC8F',
        // Slate Blue
        slateBlue: '#6A5ACD',
        // Olive Drab
        oliveDrab: '#6B8E23',
        // Pale Green
        paleGreen: '#98FB98',
        // Dark Magenta
        darkMagenta: '#8B008B',
        // Cornflower Blue
        cornflowerBlue: '#6495ED',
        // Dark Gray
        darkGray: '#A9A9A9',
        // Light Blue
        lightBlue: '#ADD8E6',
        // Medium Spring Green
        mediumSpringGreen: '#00FA9A',
        // Dark Slate Grey
        darkSlateGrey: '#2F4F4F',
        // Medium Turquoise
        mediumTurquoise: '#48D1CC',
        // Dark Salmon
        darkSalmon: '#E9967A',
        // Light Steel Blue
        lightSteelBlue: '#B0C4DE',
        // Dark Green
        darkGreen: '#006400',
        // Light Yellow
        lightYellow: '#FFFFE0',
        // Medium Forest Green
        mediumForestGreen: '#347C17',
        // Dark Violet
        darkViolet: '#9400D3',
        // Light Pink
        lightPink: '#FFB6C1',
      },
    },
  },
  variants: {},
  plugins: [],
};