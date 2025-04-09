
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				ceres: {
					purple: {
						light: "#9b87f5",
						DEFAULT: "#7E57C2", 
						dark: "#5E35B1"
					},
					blue: {
						light: "#64B5F6",
						DEFAULT: "#42A5F5",
						dark: "#1E88E5"
					},
					pink: {
						light: "#F48FB1",
						DEFAULT: "#EC407A",
						dark: "#D81B60"
					},
					teal: {
						light: "#4DB6AC",
						DEFAULT: "#26A69A",
						dark: "#00897B"
					},
					neutral: {
						lightest: "#F5F7FA",
						light: "#E4E7EB",
						DEFAULT: "#9AA5B1",
						dark: "#616E7C",
						darkest: "#1F2933"
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1"
					},
					"100%": {
						opacity: "0"
					}
				},
				"pulse-soft": {
					"0%, 100%": {
						opacity: "1"
					},
					"50%": {
						opacity: "0.85"
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-5px)"
					}
				},
				"breathe": {
					"0%, 100%": {
						transform: "scale(1)"
					},
					"50%": {
						transform: "scale(1.03)"
					}
				},
				"slide-up": {
					"0%": {
						transform: "translateY(20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1"
					}
				},
				"slide-right": {
					"0%": {
						transform: "translateX(-20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"pulse-soft": "pulse-soft 3s infinite ease-in-out",
				"float": "float 6s infinite ease-in-out",
				"breathe": "breathe 6s infinite ease-in-out",
				"slide-up": "slide-up 0.6s ease-out forwards",
				"slide-right": "slide-right 0.6s ease-out forwards"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
