const storyData = {
	step1 : {
		getText() {
			return "Première soirée<br>Je rencontre une belle personne, elle nous plaît, je lui plaît et on finit dans une chambre.";
		},
		getOptions() {
			return [
				{
					name: "Je lui propose un calin ",
					redirect: "step2",
				},
				{
					name: "J&#39;enlève d&#39;abord ma chemise ",
					redirect: "step3",
				},
			]
		},
    },
	step2 : {
		getText() {
			return "Je m&#39;assois sur le bord du lit et elle fait de même.";
		},
		getOptions() {
			return [
				{
					name: "Je lui demande si elle aime le chocolat",
					redirect: "step6",
				},
				{
					name: "Je lui demande si elle est à l&#39;aise si j&#39;enlève ma chemise",
					redirect: "step7",
				},
				{
					name: "Je l&#39;interroge sur ses expériences passées",
					redirect: "step8",
				},
			]
		},
    },
	step3 : {
		getText() {
			return "Elle t&#39;accompagne et commence à retirer son bas.<br>Vous êtes allongés sur le lit, elle me demande si je l&#39;ai déjà fait :";
		},
		getOptions() {
			return [
				{
					name: "Oui",
					redirect: "step4",
				},
				{
					name: "Non",
					redirect: "step5",
				},
			]
		},
    },
	step4 : {
		getText() {
			return "J&#39;ai dit oui !";
		},
		getOptions() {
			return [
			]
		},
    },
	step5 : {
		getText() {
			return "J&#39;ai dit non !";
		},
		getOptions() {
			return [
			]
		},
    },
	step6 : {
		getText() {
			return "Super du chocolat !!!";
		},
		getOptions() {
			return [
			]
		},
    },
	step7 : {
		getText() {
			return "Je suis tout nu !!";
		},
		getOptions() {
			return [
			]
		},
    },
	step8 : {
		getText() {
			return "On est parti pour discuter toute la soirée !";
		},
		getOptions() {
			return [
			]
		},
    },
}