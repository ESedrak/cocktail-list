import frenchImg from "../images/french75.jpg";
import tommyMarga from "../images/tommyMarga.jpg";
import frozenMarga from "../images/frozenMarga.jpg";
import showmanImg from "../images/theShowman.jpg";
import gntImage from "../images/gNT.png";
import wskSourImg from "../images/wskySour.png";
import amSourImg from "../images/amSour.jpg";
import blueGenie from "../images/blueGenie.jpg";

// This array is responsible for handling any internal cocktail data - currently just a static array
const lizCocktailDetails = [
	{
		image: frenchImg,
		drinkName: "French 75",
		ingredients: [
			{
				ingredient: "Gin or Brandy",
				amount: 45,
				unit: "mls",
			},
			{
				ingredient: "Cointreau",
				amount: 30,
				unit: "mls",
			},
			{
				ingredient: "Freshly Squeezed Lemon Juice",
				amount: 30,
				unit: "mls",
			},
			{
				ingredient: "Simple Syrup",
				amount: 15,
				unit: "mls",
			},
		],
		process:
			"Shake ingredients with ice, strain into a champagne glass and top up with Prosecco",
	},
	{
		image: tommyMarga,
		drinkName: "Tommy's Margarita",
		ingredients: [
			{
				ingredient: "Tequila",
				amount: 90,
				unit: "mls",
			},
			{
				ingredient: "Freshly Squeezed Lime Juice",
				amount: 45,
				unit: "mls",
			},
			{
				ingredient: "Cointreau",
				amount: 15,
				unit: "mls",
			},
			{
				ingredient: "Agave Syrup",
				amount: 15,
				unit: "mls",
			},
		],
		process:
			"Shake with ice, strain into a glass half rimmed with salt, and garnish with a lime",
	},
	{
		image: frozenMarga,
		drinkName: "Frozen Margarita",
		ingredients: [
			{
				ingredient: "Tequila",
				amount: 90,
				unit: "mls",
			},
			{
				ingredient: "Freshly Squeezed Lime Juice",
				amount: 45,
				unit: "mls",
			},
			{
				ingredient: "Cointreau",
				amount: 15,
				unit: "mls",
			},
			{
				ingredient: "Agave Syrup",
				amount: 15,
				unit: "mls",
			},
		],
		process: "Blend with ice and pour into a glass rimmed with salt",
	},
	{
		image: showmanImg,
		drinkName: "The Showman",
		ingredients: [
			{
				ingredient: "Gin Shiraz",
				amount: 45,
				unit: "mls",
			},
			{
				ingredient: "Cointreau",
				amount: 30,
				unit: "mls",
			},
			{
				ingredient: "Tonic Water",
				amount: 200,
				unit: "mls",
			},
			{
				ingredient: "Simple Syrup",
				amount: 15,
				unit: "mls",
			},
		],
		process:
			"Shake ingredients with ice, blend the drink until it explodes(and it will), pour into a cup",
	},
	{
		image: gntImage,
		drinkName: "Gin and Tonic",
		ingredients: [
			{
				ingredient: "Gin",
				amount: 60,
				unit: "mls",
			},
			{
				ingredient: "Cointreau",
				amount: 15,
				unit: "mls",
			},
			{
				ingredient: "Freshly Squeezed Lime Juice",
				amount: 30,
				unit: "mls",
			},
			{
				ingredient: "Tonic Water",
				amount: 200,
				unit: "mls",
			},
			{
				ingredient: "Simple Syrup",
				amount: 15,
				unit: "mls",
			},
		],
		process: "Shake ingredients with ice and pour into an old fashion glass",
	},
	{
		image: wskSourImg,
		drinkName: "Whisky Sour",
		ingredients: [
			{
				ingredient: "Whisky",
				amount: 60,
				unit: "mls",
			},
			{
				ingredient: "Freshly Squezed Lemon Juice",
				amount: 30,
				unit: "mls",
			},
			{
				ingredient: "Egg white",
				amount: 1,
			},
			{
				ingredient: "Simple Syrup",
				amount: 15,
				unit: "mls",
			},
		],
		process:
			"Shake ingredients dry (no ice), then shake with ice and double strain into a whisky glass",
	},
	{
		image: amSourImg,
		drinkName: "Amaretto Sour",
		ingredients: [
			{
				ingredient: "Amaretto",
				amount: 60,
				unit: "mls",
			},
			{
				ingredient: "Freshly Squezed Lime Juice",
				amount: 30,
				unit: "mls",
			},
			{
				ingredient: "Egg white",
				amount: 1,
			},
			{
				ingredient: "Simple Syrup",
				amount: 15,
				unit: "mls",
			},
		],
		process:
			"Shake ingredients dry (no ice), then shake with ice and double strain into a small glass",
	},
	{
		image: blueGenie,
		drinkName: "Blue Genie",
		ingredients: [
			{
				ingredient: "Gin",
				amount: 60,
				unit: "mls",
			},
			{
				ingredient: "???",
			},
			{
				ingredient: "???",
			},
			{
				ingredient: "???",
			},
		],
		process: "A secret blue drink",
	},
];

export default lizCocktailDetails;
